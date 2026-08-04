import { getSupabaseAdmin, QuoteRequest, Contact } from "@/lib/supabase";
import { isHighPriorityQuote } from "@/lib/lead-scoring";
import { Eyebrow } from "@/components/ui/Badge";
import { EmptyState } from "@/app/(site)/admin/components/EmptyState";
import { HighPriorityBadge } from "@/app/(site)/admin/components/StatusBadge";
import { formatDate, formatCurrency } from "@/app/(site)/admin/lib/format";

export default async function AdminQuotesPage() {
  const supabase = getSupabaseAdmin();

  if (!supabase) {
    return (
      <div>
        <Eyebrow>Estimates</Eyebrow>
        <h1 className="font-display text-4xl text-cream mb-8">
          Quote Requests
        </h1>
        <EmptyState />
      </div>
    );
  }

  const [{ data: quotesData }, { data: contactsData }] = await Promise.all([
    supabase
      .from("quote_requests")
      .select("*")
      .order("created_at", { ascending: false }),
    supabase.from("contacts").select("id, name, phone"),
  ]);

  const quotes = (quotesData ?? []) as QuoteRequest[];
  const contactsById = new Map(
    ((contactsData ?? []) as Pick<Contact, "id" | "name" | "phone">[]).map(
      (c) => [c.id, c]
    )
  );

  return (
    <div>
      <Eyebrow>Estimates</Eyebrow>
      <h1 className="font-display text-4xl text-cream mb-8">
        Quote Requests
      </h1>

      <div className="border border-gold-border bg-panel rounded-2xl overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[900px]">
          <thead>
            <tr>
              {[
                "Contact",
                "Service",
                "Room",
                "Budget",
                "Timescale",
                "Estimated Price",
                "Requested",
                "",
              ].map((label) => (
                <th
                  key={label}
                  className="px-4 py-3 text-[10px] uppercase tracking-[0.15em] text-cream-muted font-medium"
                >
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {quotes.length === 0 ? (
              <tr>
                <td
                  colSpan={8}
                  className="px-4 py-8 text-center text-cream-dim font-light"
                >
                  No quote requests yet.
                </td>
              </tr>
            ) : (
              quotes.map((quote) => {
                const contact = quote.contact_id
                  ? contactsById.get(quote.contact_id)
                  : undefined;
                const highPriority = isHighPriorityQuote({
                  budget: quote.budget,
                  timescale: quote.timescale,
                });

                return (
                  <tr
                    key={quote.id}
                    className="border-t border-gold-border/40"
                  >
                    <td className="px-4 py-3">
                      <p className="text-cream font-medium">
                        {contact?.name ?? "Unknown"}
                      </p>
                      <p className="text-cream-dim text-xs">
                        {contact?.phone ?? "—"}
                      </p>
                    </td>
                    <td className="px-4 py-3 text-cream-dim text-sm capitalize">
                      {quote.service_type ?? "—"}
                      {quote.flooring_type ? ` (${quote.flooring_type})` : ""}
                      {quote.blind_type ? ` (${quote.blind_type})` : ""}
                    </td>
                    <td className="px-4 py-3 text-cream-dim text-sm">
                      {quote.room_type ?? "—"}
                      {quote.room_area ? ` — ${quote.room_area}m²` : ""}
                    </td>
                    <td className="px-4 py-3 text-cream-dim text-sm">
                      {quote.budget ?? "—"}
                    </td>
                    <td className="px-4 py-3 text-cream-dim text-sm">
                      {quote.timescale ?? "—"}
                    </td>
                    <td className="px-4 py-3 text-cream-dim text-sm">
                      {formatCurrency(quote.estimated_price)}
                    </td>
                    <td className="px-4 py-3 text-cream-dim text-sm whitespace-nowrap">
                      {formatDate(quote.created_at)}
                    </td>
                    <td className="px-4 py-3">
                      {highPriority ? <HighPriorityBadge /> : null}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
