"use client";

import { useEffect, useState } from "react";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("feeney-cookie-consent")) {
      setShow(true);
    }
  }, []);

  function decide(value: "accepted" | "declined") {
    localStorage.setItem("feeney-cookie-consent", value);
    setShow(false);
  }

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gold-border bg-near-black/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 sm:flex-row">
        <p className="text-sm font-light text-cream-dim">
          We use cookies to improve your experience.
        </p>
        <div className="flex gap-3">
          <button
            onClick={() => decide("declined")}
            className="px-5 py-2 text-[11px] uppercase tracking-[0.2em] text-cream-dim hover:text-cream"
          >
            Decline
          </button>
          <button
            onClick={() => decide("accepted")}
            className="border border-gold px-5 py-2 text-[11px] uppercase tracking-[0.2em] text-gold hover:bg-gold hover:text-near-black"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
