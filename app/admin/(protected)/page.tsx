import { getSupabaseAdmin, Contact, QuoteRequest, Booking } from "@/lib/supabase";
import { Eyebrow } from "@/components/ui/Badge";
import { EmptyState } from "@/app/admin/components/EmptyState";
import { StatCard } from "@/app/admin/components/StatCard";
import { relativeTime, formatCurrency, startOfMonthIso } from "@/app/admin/lib/format";
import { markJobComplete, sendReviewRequest } from "@/app/admin/lib/actions";

export default async function AdminOverviewPage() {
  const supabase = getSupabaseAdmin();

  if (!supabase) {
    return (
      <div>
        <Eyebrow>Overview</Eyebrow>
        <h1 className="font-display text-4xl text-cream mb-8">Dashboard</h1>
        <EmptyState />
      </div>
    );
  }

  const monthStart = startOfMonthIso();

  const [contactsThisMonthRes, bookingsThisMonthRes, recentContactsRes, openQuotesRes] =
    await Promise.all([
      supabase
        .from("contacts")
        .select("id", { count: "exact", head: true })
        .gte("created_at", monthStart),
      supabase
        .from("bookings")
        .select("id", { count: "exact", head: true })
        .gte("created_at", monthStart),
      supabase
        .from("contacts")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(10),
      supabase
        .from("quote_requests")
        .select("id, estimated_price, contact_id, contacts!inner(status)")
        .not("estimated_price", "is", null),
    ]);

  const contactsThisMonth = contactsThisMonthRes.count ?? 0;
  const bookingsThisMonth = bookingsThisMonthRes.count ?? 0;
  const recentContacts = (recentContactsRes.data ?? []) as Contact[];

  const conversionRate =
    contactsThisMonth > 0
      ? Math.round((bookingsThisMonth / contactsThisMonth) * 100)
      : 0;

  type QuoteWithContact = QuoteRequest & {
    contacts?: { status: Contact["status"] } | { status: Contact["status"] }[] | null;
  };
  const openQuotes = (openQuotesRes.data ?? []) as unknown as QuoteWithContact[];
  const pipelineTotal = openQuotes.reduce((sum, quote) => {
    const contactStatus = Array.isArray(quote.contacts)
      ? quote.contacts[0]?.status
      : quote.contacts?.status;
    if (contactStatus === "complete") return sum;
    return sum + (quote.estimated_price ?? 0);
  }, 0);

  return (
    <div>
      <Eyebrow>Overview</Eyebrow>
      <h1 className="font-display text-4xl text-cream mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
        <StatCard label="Leads This Month" value={String(contactsThisMonth)} />
        <StatCard label="Bookings This Month" value={String(bookingsThisMonth)} />
        <StatCard label="Conversion Rate" value={`${conversionRate}%`} />
        <StatCard label="Revenue Pipeline" value={formatCurrency(pipelineTotal)} />
      </div>

      <h2 className="font-display text-2xl text-cream mb-4">Recent Activity</h2>
      <div className="border border-gold-border bg-panel rounded-2xl divide-y divide-gold-border/40">
        {recentContacts.length === 0 ? (
          <div className="px-6 py-8 text-center text-cream-dim font-light">
            No recent activity.
          </div>
        ) : (
          recentContacts.map((contact) => {
            async function handleMarkComplete() {
              "use server";
              await markJobComplete(contact.id);
            }

            async function handleSendReview() {
              "use server";
              await sendReviewRequest(contact.id);
            }

            return (
              <div
                key={contact.id}
                className="px-6 py-4 flex flex-wrap items-center justify-between gap-4"
              >
                <p className="text-cream font-light">
                  New lead:{" "}
                  <span className="text-cream font-medium">{contact.name}</span>
                  {contact.service_required
                    ? ` — ${contact.service_required}`
                    : ""}
                  {" — "}
                  <span className="text-cream-dim">
                    {relativeTime(contact.created_at)}
                  </span>
                </p>
                <div className="flex items-center gap-3">
                  <form action={handleMarkComplete}>
                    <button
                      type="submit"
                      className="text-[10px] uppercase tracking-[0.15em] text-cream-dim hover:text-gold border border-gold-border rounded-full px-3 py-1.5 transition-colors"
                    >
                      Mark job complete
                    </button>
                  </form>
                  <form action={handleSendReview}>
                    <button
                      type="submit"
                      className="text-[10px] uppercase tracking-[0.15em] text-cream-dim hover:text-gold border border-gold-border rounded-full px-3 py-1.5 transition-colors"
                    >
                      Send review request
                    </button>
                  </form>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
