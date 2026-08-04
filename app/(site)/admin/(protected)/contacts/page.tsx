import Link from "next/link";
import { getSupabaseAdmin, Contact } from "@/lib/supabase";
import { Eyebrow } from "@/components/ui/Badge";
import { EmptyState } from "@/app/(site)/admin/components/EmptyState";
import { FilterBar } from "./FilterBar";
import { ContactRow } from "./ContactRow";

interface Column {
  key: string;
  label: string;
  sortable?: boolean;
}

const COLUMNS: Column[] = [
  { key: "name", label: "Name" },
  { key: "contact", label: "Contact" },
  { key: "source", label: "Source" },
  { key: "status", label: "Status", sortable: true },
  { key: "budget", label: "Budget" },
  { key: "timescale", label: "Timescale" },
  { key: "lead_score", label: "Score", sortable: true },
  { key: "created_at", label: "Created", sortable: true },
  { key: "actions", label: "Actions" },
];

export default async function AdminContactsPage({
  searchParams,
}: {
  searchParams: Promise<{
    sort?: string;
    dir?: string;
    status?: string;
    source?: string;
    service?: string;
  }>;
}) {
  const params = await searchParams;
  const sort = params.sort ?? "created_at";
  const dir = params.dir === "asc" ? "asc" : "desc";

  const supabase = getSupabaseAdmin();

  if (!supabase) {
    return (
      <div>
        <Eyebrow>CRM</Eyebrow>
        <h1 className="font-display text-4xl text-cream mb-8">Contacts</h1>
        <EmptyState />
      </div>
    );
  }

  let query = supabase.from("contacts").select("*");

  if (params.status) query = query.eq("status", params.status);
  if (params.source) query = query.eq("source", params.source);
  if (params.service) query = query.eq("service_required", params.service);

  const sortableColumns = ["created_at", "status", "lead_score"];
  const sortColumn = sortableColumns.includes(sort) ? sort : "created_at";

  const { data } = await query.order(sortColumn, {
    ascending: dir === "asc",
  });

  const contacts = (data ?? []) as Contact[];

  function sortHref(column: string) {
    const nextDir = sort === column && dir === "desc" ? "asc" : "desc";
    const searchParamsObj = new URLSearchParams();
    searchParamsObj.set("sort", column);
    searchParamsObj.set("dir", nextDir);
    if (params.status) searchParamsObj.set("status", params.status);
    if (params.source) searchParamsObj.set("source", params.source);
    if (params.service) searchParamsObj.set("service", params.service);
    return `/admin/contacts?${searchParamsObj.toString()}`;
  }

  return (
    <div>
      <Eyebrow>CRM</Eyebrow>
      <h1 className="font-display text-4xl text-cream mb-8">Contacts</h1>

      <FilterBar />

      <div className="border border-gold-border bg-panel rounded-2xl overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[900px]">
          <thead>
            <tr>
              {COLUMNS.map((col) => (
                <th
                  key={col.key}
                  className="px-4 py-3 text-[10px] uppercase tracking-[0.15em] text-cream-muted font-medium"
                >
                  {col.sortable ? (
                    <Link
                      href={sortHref(col.key)}
                      className="hover:text-gold transition-colors"
                    >
                      {col.label}
                      {sort === col.key ? (dir === "asc" ? " ↑" : " ↓") : ""}
                    </Link>
                  ) : (
                    col.label
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {contacts.length === 0 ? (
              <tr>
                <td
                  colSpan={COLUMNS.length}
                  className="px-4 py-8 text-center text-cream-dim font-light"
                >
                  No contacts match these filters.
                </td>
              </tr>
            ) : (
              contacts.map((contact) => (
                <ContactRow key={contact.id} contact={contact} />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
