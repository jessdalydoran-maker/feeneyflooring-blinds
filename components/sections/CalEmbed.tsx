"use client";

import { useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { BUSINESS } from "@/lib/constants";

export function CalEmbed({
  calLink,
  label,
}: {
  calLink: string;
  label: string;
}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!calLink) return;
    (async () => {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#B8934A" } },
      });
      setReady(true);
    })();
  }, [calLink]);

  if (!calLink) {
    return (
      <div className="flex h-[520px] flex-col items-center justify-center rounded-3xl border border-gold-border bg-panel px-8 text-center">
        <p className="font-display text-2xl text-cream">{label}</p>
        <p className="mt-3 max-w-sm text-sm font-light text-cream-dim">
          Online booking for this calendar is being set up. In the
          meantime, call {BUSINESS.phone} or use the contact form and
          we&apos;ll get you booked in.
        </p>
      </div>
    );
  }

  return (
    <div className="h-[520px] overflow-hidden rounded-3xl border border-gold-border bg-panel">
      <Cal
        calLink={calLink}
        style={{ width: "100%", height: "100%", overflow: "auto" }}
        config={{ layout: "month_view" }}
      />
      {!ready && (
        <p className="p-6 text-center text-sm text-cream-dim">Loading calendar…</p>
      )}
    </div>
  );
}
