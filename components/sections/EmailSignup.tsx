"use client";

import { useState } from "react";
import { subscribeToNewsletter } from "@/app/actions";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function EmailSignup() {
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);

  async function handleSubmit(formData: FormData) {
    if (!consent) {
      setMessage("Please agree to receive updates first.");
      return;
    }
    setStatus("loading");
    const result = await subscribeToNewsletter(formData);
    setMessage(result.message);
    setStatus("done");
  }

  return (
    <section className="border-t border-gold-border">
      <div className="mx-auto max-w-2xl px-6 py-24 text-center lg:px-10">
        <ScrollReveal>
          <h3 className="font-display text-3xl text-cream">
            Stay updated on new arrivals.
          </h3>
          <p className="mt-4 text-base font-light text-cream-dim">
            New flooring and blind ranges land regularly. Be the first to
            know.
          </p>
          {status === "done" ? (
            <p className="mt-8 text-gold">{message}</p>
          ) : (
            <form action={handleSubmit} className="mt-8">
              <div className="flex flex-col gap-3 sm:flex-row">
                <Input
                  type="email"
                  name="email"
                  required
                  placeholder="Your email address"
                />
                <Button variant="primary" disabled={status === "loading"}>
                  {status === "loading" ? "Subscribing…" : "Subscribe"}
                </Button>
              </div>
              <label className="mt-4 flex items-start gap-3 text-left text-xs font-light text-cream-muted">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5"
                />
                I agree to receive occasional product updates. Unsubscribe any
                time.
              </label>
              {message && (
                <p className="mt-3 text-xs text-gold">{message}</p>
              )}
            </form>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
