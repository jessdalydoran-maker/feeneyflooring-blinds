import { getSupabaseAdmin, ChatSession, Contact } from "@/lib/supabase";
import { Eyebrow } from "@/components/ui/Badge";
import { EmptyState } from "@/app/admin/components/EmptyState";
import { ChatSessionRow } from "./ChatSessionRow";

export default async function AdminChatLogsPage() {
  const supabase = getSupabaseAdmin();

  if (!supabase) {
    return (
      <div>
        <Eyebrow>Flynn</Eyebrow>
        <h1 className="font-display text-4xl text-cream mb-8">Chat Logs</h1>
        <EmptyState />
      </div>
    );
  }

  const [{ data: sessionsData }, { data: contactsData }] = await Promise.all([
    supabase
      .from("chat_sessions")
      .select("*")
      .order("created_at", { ascending: false }),
    supabase.from("contacts").select("id, name"),
  ]);

  const sessions = (sessionsData ?? []) as ChatSession[];
  const contactsById = new Map(
    ((contactsData ?? []) as Pick<Contact, "id" | "name">[]).map((c) => [
      c.id,
      c.name,
    ])
  );

  return (
    <div>
      <Eyebrow>Flynn</Eyebrow>
      <h1 className="font-display text-4xl text-cream mb-8">Chat Logs</h1>

      <div className="border border-gold-border bg-panel rounded-2xl">
        {sessions.length === 0 ? (
          <div className="px-6 py-8 text-center text-cream-dim font-light">
            No chat sessions yet.
          </div>
        ) : (
          sessions.map((session) => (
            <ChatSessionRow
              key={session.id}
              session={session}
              contactName={
                (session.contact_id && contactsById.get(session.contact_id)) ||
                "Anonymous"
              }
            />
          ))
        )}
      </div>
    </div>
  );
}
