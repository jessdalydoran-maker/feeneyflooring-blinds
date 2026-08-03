"use client";

import { useState } from "react";
import clsx from "clsx";
import { ChatSession } from "@/lib/supabase";
import { formatDateTime } from "@/app/admin/lib/format";

export function ChatSessionRow({
  session,
  contactName,
}: {
  session: ChatSession;
  contactName: string;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border-t border-gold-border/40 first:border-t-0">
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="w-full text-left px-6 py-4 flex flex-wrap items-center justify-between gap-4 hover:bg-panel-2/60 transition-colors"
      >
        <div>
          <p className="text-cream font-medium">
            {session.session_id.slice(0, 8)}…
          </p>
          <p className="text-cream-dim text-sm">{contactName}</p>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <span className="text-cream-dim">
            {session.messages?.length ?? 0} messages
          </span>
          <span
            className={clsx(
              "text-[10px] uppercase tracking-[0.12em] px-3 py-1 rounded-full border",
              session.resolved
                ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/20"
                : "bg-gold-subtle text-gold border-gold-border"
            )}
          >
            {session.resolved ? "Resolved" : "Open"}
          </span>
          <span className="text-cream-dim whitespace-nowrap">
            {formatDateTime(session.created_at)}
          </span>
        </div>
      </button>

      {expanded ? (
        <div className="px-6 pb-6 space-y-3">
          {(session.messages ?? []).map((message, i) => (
            <div
              key={i}
              className={clsx(
                "flex",
                message.role === "user" ? "justify-end" : "justify-start"
              )}
            >
              <div
                className={clsx(
                  "max-w-[70%] rounded-2xl px-4 py-2 text-sm",
                  message.role === "user"
                    ? "bg-gold-subtle text-cream border border-gold-border"
                    : "bg-panel-2 text-cream-dim border border-gold-border/40"
                )}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
