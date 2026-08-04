import { NextRequest } from "next/server";
import { render } from "@react-email/components";
import { Resend } from "resend";
import { getSupabaseAdmin } from "@/lib/supabase";
import WelcomeEmail from "@/emails/thirty3/WelcomeEmail";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getResend() {
  const key = process.env.RESEND_API_KEY;
  return key ? new Resend(key) : null;
}

export async function POST(req: NextRequest) {
  let email = "";
  try {
    const body = await req.json();
    email = String(body.email ?? "").trim().toLowerCase();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!email || !EMAIL_RE.test(email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return Response.json(
      { error: "Sign-ups aren't available right now. Please try again later." },
      { status: 503 }
    );
  }

  const { data: existing } = await supabase
    .from("thirty3_subscribers")
    .select("id")
    .eq("email", email)
    .maybeSingle();

  if (existing) {
    return Response.json({ error: "You're already on the list!" }, { status: 409 });
  }

  const { error: insertError } = await supabase
    .from("thirty3_subscribers")
    .insert({ email, source: "website" });

  if (insertError) {
    console.error("[thirty3-subscribe] Supabase insert failed:", insertError.message);
    return Response.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }

  const resend = getResend();
  if (resend) {
    const html = await render(WelcomeEmail({}));
    const { error: sendError } = await resend.emails.send({
      from: "thirty3coffee <hello@feeneyflooring.co.uk>",
      to: email,
      subject: "Welcome to the thirty3coffee family ☕",
      html,
    });
    if (sendError) {
      console.error("[Resend] Failed to send thirty3coffee welcome email:", sendError.message);
    }
  }

  return Response.json({ success: true });
}
