"use client";

import { useState, useTransition } from "react";
import { Contact } from "@/lib/supabase";
import { isHighPriority } from "@/lib/lead-scoring";
import { StatusBadge } from "@/app/admin/components/StatusBadge";
import { formatDate } from "@/app/admin/lib/format";
import {
  updateContactStatus,
  markJobComplete,
  sendReviewRequest,
} from "./actions";

const STATUS_OPTIONS: Contact["status"][] = [
  "new",
  "contacted",
  "quoted",
  "booked",
  "complete",
];

export function ContactRow({ contact }: { contact: Contact }) {
  const [expanded, setExpanded] = useState(false);
  const [status, setStatus] = useState(contact.status);
  const [reviewSent, setReviewSent] = useState(false);
  const [isPending, startTransition] = useTransition();

  function handleStatusChange(newStatus: string) {
    setStatus(newStatus as Contact["status"]);
    startTransition(async () => {
      await updateContactStatus(contact.id, newStatus);
    });
  }

  function handleMarkComplete() {
    setStatus("complete");
    startTransition(async () => {
      await markJobComplete(contact.id);
    });
  }

  function handleSendReview() {
    startTransition(async () => {
      await sendReviewRequest(contact.id);
      setReviewSent(true);
    });
  }

  return (
    <>
      <tr
        className="border-t border-gold-border/40 cursor-pointer hover:bg-panel-2/60"
        onClick={() => setExpanded((v) => !v)}
      >
        <td className="px-4 py-3">
          <div className="flex items-center gap-2">
            {isHighPriority(contact.lead_score) ? (
              <span
                className="h-2 w-2 rounded-full bg-gold shrink-0"
                title="High priority"
              />
            ) : null}
            <span className="text-cream font-medium">{contact.name}</span>
          </div>
        </td>
        <td className="px-4 py-3 text-cream-dim text-sm">
          {contact.phone ?? contact.email ?? "—"}
        </td>
        <td className="px-4 py-3 text-cream-dim text-sm capitalize">
          {(contact.source ?? "—").replace(/_/g, " ")}
        </td>
        <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
          <select
            value={status}
            disabled={isPending}
            onChange={(e) => handleStatusChange(e.target.value)}
            className="border border-gold-border bg-panel px-2 py-1 text-xs text-cream rounded-lg focus:border-gold focus:outline-none"
          >
            {STATUS_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <div className="mt-1">
            <StatusBadge status={status} />
          </div>
        </td>
        <td className="px-4 py-3 text-cream-dim text-sm">
          {contact.budget ?? "—"}
        </td>
        <td className="px-4 py-3 text-cream-dim text-sm">
          {contact.timescale ?? "—"}
        </td>
        <td className="px-4 py-3 text-sm">
          <span
            className={
              isHighPriority(contact.lead_score)
                ? "text-gold font-semibold"
                : "text-cream-dim"
            }
          >
            {contact.lead_score}
          </span>
        </td>
        <td className="px-4 py-3 text-cream-dim text-sm whitespace-nowrap">
          {formatDate(contact.created_at)}
        </td>
        <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleMarkComplete}
              disabled={isPending || status === "complete"}
              className="text-[10px] uppercase tracking-[0.1em] text-cream-dim hover:text-gold border border-gold-border rounded-full px-2.5 py-1 transition-colors disabled:opacity-40"
            >
              Complete
            </button>
            <button
              type="button"
              onClick={handleSendReview}
              disabled={isPending || reviewSent}
              className="text-[10px] uppercase tracking-[0.1em] text-cream-dim hover:text-gold border border-gold-border rounded-full px-2.5 py-1 transition-colors disabled:opacity-40"
            >
              {reviewSent ? "Sent" : "Review"}
            </button>
          </div>
        </td>
      </tr>
      {expanded ? (
        <tr className="border-t border-gold-border/40 bg-panel-2/40">
          <td colSpan={9} className="px-4 py-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-cream-muted mb-1">
                  Room Type
                </p>
                <p className="text-cream-dim">{contact.room_type ?? "—"}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-cream-muted mb-1">
                  Postcode
                </p>
                <p className="text-cream-dim">{contact.postcode ?? "—"}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-cream-muted mb-1">
                  Preferred Contact
                </p>
                <p className="text-cream-dim">
                  {contact.preferred_contact ?? "—"}
                </p>
              </div>
              <div className="sm:col-span-3">
                <p className="text-[10px] uppercase tracking-[0.15em] text-cream-muted mb-1">
                  Notes
                </p>
                <p className="text-cream-dim whitespace-pre-wrap">
                  {contact.notes ?? "—"}
                </p>
              </div>
            </div>
          </td>
        </tr>
      ) : null}
    </>
  );
}
