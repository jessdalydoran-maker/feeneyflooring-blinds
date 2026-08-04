"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function EmailSignup() {
  const reduce = useReducedMotion();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/thirty3-subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("done");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <section className="relative overflow-hidden px-6 py-24 lg:px-16" style={{ background: "var(--t3-dark)" }}>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 40%, var(--t3-gold-glow) 0%, transparent 65%)",
          opacity: 0.5,
        }}
        aria-hidden
      />
      <motion.div
        className="relative z-10 mx-auto max-w-xl text-center"
        initial={reduce ? undefined : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-t3-heading text-4xl uppercase text-t3-white sm:text-5xl">
          Stay in the <span className="text-t3-gold">loop.</span>
        </h2>
        <p className="mt-4 text-sm font-light text-t3-off-white/70">
          New menu items, specials, and what&apos;s on. No spam. Just good
          stuff.
        </p>

        {status === "done" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="mt-8 flex flex-col items-center gap-3"
          >
            <svg viewBox="0 0 24 24" className="h-10 w-10 fill-t3-gold">
              <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z" />
            </svg>
            <p className="font-t3-heading text-lg text-t3-white">You&apos;re in! See you soon.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 rounded border px-4 py-3 text-sm text-t3-white placeholder:text-t3-off-white/40 focus:outline-none"
                style={{ background: "var(--t3-panel)", borderColor: "var(--t3-gold-border)" }}
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="rounded px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] text-t3-black disabled:opacity-50"
                style={{ background: "var(--t3-gold)" }}
              >
                {status === "loading" ? "Subscribing…" : "Subscribe"}
              </button>
            </div>
            {status === "error" && (
              <p className="mt-3 text-xs text-t3-gold">{message}</p>
            )}
            <p className="mt-4 text-xs font-light text-t3-off-white/50">
              We will only send you updates about thirty3coffee. Unsubscribe
              any time.
            </p>
          </form>
        )}
      </motion.div>
    </section>
  );
}
