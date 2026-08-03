import { NextRequest } from "next/server";
import {
  getAnthropicClient,
  FLYNN_MODEL,
  FLYNN_SYSTEM_PROMPT,
  FLYNN_CONTACT_EXTRACTION_PROMPT,
} from "@/lib/claude";
import { getSupabaseAdmin } from "@/lib/supabase";
import { calculateLeadScore } from "@/lib/lead-scoring";

export const runtime = "nodejs";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

async function saveChatSession(sessionId: string, messages: ChatMessage[]) {
  const supabase = getSupabaseAdmin();
  if (!supabase) return;
  await supabase
    .from("chat_sessions")
    .upsert({ session_id: sessionId, messages }, { onConflict: "session_id" });
}

async function extractAndSaveContact(sessionId: string, messages: ChatMessage[]) {
  const client = getAnthropicClient();
  const supabase = getSupabaseAdmin();
  if (!client || !supabase) return;

  const transcript = messages
    .map((m) => `${m.role === "user" ? "Customer" : "Flynn"}: ${m.content}`)
    .join("\n");

  try {
    const extraction = await client.messages.create({
      model: FLYNN_MODEL,
      max_tokens: 300,
      system: FLYNN_CONTACT_EXTRACTION_PROMPT,
      messages: [{ role: "user", content: transcript }],
    });

    const textBlock = extraction.content.find((b) => b.type === "text");
    if (!textBlock || textBlock.type !== "text") return;

    const parsed = JSON.parse(textBlock.text);
    if (!parsed.hasContactInfo) return;

    const leadScore = calculateLeadScore({
      budget: parsed.budget,
      phone: parsed.phone,
      email: parsed.email,
    });

    const { data: contact } = await supabase
      .from("contacts")
      .insert({
        name: parsed.name ?? "Website visitor",
        phone: parsed.phone,
        email: parsed.email,
        source: "chat",
        service_required: parsed.serviceInterest,
        budget: parsed.budget,
        lead_score: leadScore,
      })
      .select()
      .single();

    if (contact) {
      await supabase
        .from("chat_sessions")
        .update({ contact_id: contact.id })
        .eq("session_id", sessionId);
    }
  } catch {
    // Best-effort extraction — never let this break the chat response.
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const messages: ChatMessage[] = body.messages ?? [];
  const sessionId: string = body.session_id ?? crypto.randomUUID();

  const client = getAnthropicClient();

  if (!client) {
    return Response.json(
      {
        error: "flynn_not_configured",
        message:
          "Flynn is currently offline — his API key hasn't been set up yet. Please call 07720 981809 or use the contact form and Kevin will get straight back to you.",
      },
      { status: 503 }
    );
  }

  const stream = await client.messages.stream({
    model: FLYNN_MODEL,
    max_tokens: 1024,
    system: FLYNN_SYSTEM_PROMPT,
    messages: messages.map((m) => ({ role: m.role, content: m.content })),
  });

  const encoder = new TextEncoder();
  let fullText = "";

  const readable = new ReadableStream({
    async start(controller) {
      stream.on("text", (text) => {
        fullText += text;
        controller.enqueue(encoder.encode(text));
      });
      stream.on("end", async () => {
        controller.close();
        const finalMessages = [...messages, { role: "assistant" as const, content: fullText }];
        await saveChatSession(sessionId, finalMessages);
        await extractAndSaveContact(sessionId, finalMessages);
      });
      stream.on("error", (err) => {
        controller.error(err);
      });
    },
  });

  return new Response(readable, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "X-Session-Id": sessionId,
    },
  });
}
