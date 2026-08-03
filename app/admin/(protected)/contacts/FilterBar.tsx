"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";

const STATUS_OPTIONS = ["new", "contacted", "quoted", "booked", "complete"];
const SOURCE_OPTIONS = ["chat", "quote_form", "contact_form", "booking"];
const SERVICE_OPTIONS = ["flooring", "blinds", "both"];

export function FilterBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function setParam(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex flex-wrap items-center gap-4 mb-6">
      <select
        className="border border-gold-border bg-panel px-4 py-2 text-sm text-cream rounded-xl focus:border-gold focus:outline-none"
        value={searchParams.get("status") ?? ""}
        onChange={(e) => setParam("status", e.target.value)}
      >
        <option value="">All Statuses</option>
        {STATUS_OPTIONS.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>

      <select
        className="border border-gold-border bg-panel px-4 py-2 text-sm text-cream rounded-xl focus:border-gold focus:outline-none"
        value={searchParams.get("source") ?? ""}
        onChange={(e) => setParam("source", e.target.value)}
      >
        <option value="">All Sources</option>
        {SOURCE_OPTIONS.map((s) => (
          <option key={s} value={s}>
            {s.replace(/_/g, " ")}
          </option>
        ))}
      </select>

      <select
        className="border border-gold-border bg-panel px-4 py-2 text-sm text-cream rounded-xl focus:border-gold focus:outline-none"
        value={searchParams.get("service") ?? ""}
        onChange={(e) => setParam("service", e.target.value)}
      >
        <option value="">All Services</option>
        {SERVICE_OPTIONS.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
    </div>
  );
}
