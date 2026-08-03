import Link from "next/link";
import { getSupabaseAdmin, EmailLog, Contact } from "@/lib/supabase";
import { Eyebrow } from "@/components/ui/Badge";
import { EmptyState } from "@/app/admin/components/EmptyState";
import { StatusBadge } from "@/app/admin/components/StatusBadge";
import { formatDateTime } from "@/app/admin/lib/format";

export default async function AdminEmailsPage({
  searchParams,
}: {
  searchParams: Promise<{ dir?: string }>;
}) {
  const params = await searchParams;
  const dir = params.dir === "asc" ? "asc" : "desc";

  const supabase = getSupabaseAdmin();

  if (!supabase) {
    return (
      <div>
        <Eyebrow>Comms</Eyebrow>
        <h1 className="font-display text-4xl text-cream mb-8">Emails</h1>
        <EmptyState />
      </div>
    );
  }

  const [{ data: emailsData }, { data: contactsData }] = await Promise.all([
    supabase
      .from("email_log")
      .select("*")
      .order("sent_at", { ascending: dir === "asc" }),
    supabase.from("contacts").select("id, name"),
  ]);

  const emails = (emailsData ?? []) as EmailLog[];
  const contactsById = new Map(
    ((contactsData ?? []) as Pick<Contact, "id" | "name">[]).map((c) => [
      c.id,
      c.name,
    ])
  );

  return (
    <div>
      <Eyebrow>Comms</Eyebrow>
      <h1 className="font-display text-4xl text-cream mb-8">Emails</h1>

      <div className="border border-gold-border bg-panel rounded-2xl overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr>
              <th className="px-4 py-3 text-[10px] uppercase tracking-[0.15em] text-cream-muted font-medium">
                Type
              </th>
              <th className="px-4 py-3 text-[10px] uppercase tracking-[0.15em] text-cream-muted font-medium">
                Subject
              </th>
              <th className="px-4 py-3 text-[10px] uppercase tracking-[0.15em] text-cream-muted font-medium">
                Contact
              </th>
              <th className="px-4 py-3 text-[10px] uppercase tracking-[0.15em] text-cream-muted font-medium">
                <Link
                  href={`/admin/emails?dir=${dir === "asc" ? "desc" : "asc"}`}
                  className="hover:text-gold transition-colors"
                >
                  Sent {dir === "asc" ? "↑" : "↓"}
                </Link>
              </th>
              <th className="px-4 py-3 text-[10px] uppercase tracking-[0.15em] text-cream-muted font-medium">
                Opened
              </th>
              <th className="px-4 py-3 text-[10px] uppercase tracking-[0.15em] text-cream-muted font-medium">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {emails.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="px-4 py-8 text-center text-cream-dim font-light"
                >
                  No emails logged yet.
                </td>
              </tr>
            ) : (
              emails.map((email) => (
                <tr key={email.id} className="border-t border-gold-border/40">
                  <td className="px-4 py-3 text-cream-dim text-sm capitalize">
                    {email.email_type.replace(/_/g, " ")}
                  </td>
                  <td className="px-4 py-3 text-cream text-sm">
                    {email.subject}
                  </td>
                  <td className="px-4 py-3 text-cream-dim text-sm">
                    {(email.contact_id && contactsById.get(email.contact_id)) ||
                      "—"}
                  </td>
                  <td className="px-4 py-3 text-cream-dim text-sm whitespace-nowrap">
                    {formatDateTime(email.sent_at)}
                  </td>
                  <td className="px-4 py-3 text-cream-dim text-sm whitespace-nowrap">
                    {formatDateTime(email.opened_at)}
                  </td>
                  <td className="px-4 py-3">
                    <StatusBadge status={email.status} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
