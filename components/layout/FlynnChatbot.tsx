"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const WELCOME_MESSAGE: Message = {
  role: "assistant",
  content:
    "Hi, I'm Flynn — the Feeney Flooring & Blinds assistant. Ask me about flooring, blinds, pricing, or book a free measure. How can I help?",
};

/**
 * Flynn's replies come from Claude and often include **bold** markdown,
 * but this is a plain-text chat bubble with no markdown renderer — without
 * this, the literal asterisks show up in the UI. Strips them and renders
 * the wrapped text as emphasis instead.
 */
function renderMessageContent(content: string) {
  const segments = content.split(/(\*\*[^*]+\*\*)/g);
  return segments.map((segment, i) => {
    const match = segment.match(/^\*\*([^*]+)\*\*$/);
    if (match) {
      return (
        <strong key={i} className="font-medium text-gold">
          {match[1]}
        </strong>
      );
    }
    return <span key={i}>{segment}</span>;
  });
}

function getSessionId() {
  if (typeof window === "undefined") return "";
  const existing = window.sessionStorage.getItem("flynn-session-id");
  if (existing) return existing;
  const fresh = crypto.randomUUID();
  window.sessionStorage.setItem("flynn-session-id", fresh);
  return fresh;
}

export function FlynnChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [offline, setOffline] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sessionId = useRef("");

  useEffect(() => {
    sessionId.current = getSessionId();
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;

    const nextMessages: Message[] = [...messages, { role: "user", content: text }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages,
          session_id: sessionId.current,
        }),
      });

      if (res.status === 503) {
        const data = await res.json();
        setOffline(true);
        setMessages((prev) => [...prev, { role: "assistant", content: data.message }]);
        return;
      }

      if (!res.ok || !res.body) {
        throw new Error("Flynn request failed");
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let assistantText = "";
      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        assistantText += decoder.decode(value, { stream: true });
        setMessages((prev) => [
          ...prev.slice(0, -1),
          { role: "assistant", content: assistantText },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, something went wrong on my end. Please call 07720 981809 or use the contact form and Kevin will get back to you.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-44 right-4 z-40 flex h-[520px] w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-3xl border border-gold-border bg-near-black shadow-2xl sm:right-6 sm:w-[380px]"
          >
            <div className="flex items-center justify-between border-b border-gold-border px-5 py-4">
              <div>
                <p className="font-display text-xl text-cream">Flynn</p>
                <p className="text-[11px] uppercase tracking-[0.15em] text-cream-dim">
                  Feeney Flooring &amp; Blinds
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#25D366]" />
                <span className="text-[11px] text-cream-dim">Online</span>
                <button
                  aria-label="Close chat"
                  onClick={() => setOpen(false)}
                  className="ml-2 text-cream-dim hover:text-cream"
                >
                  &times;
                </button>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-5 py-4">
              {messages.map((message, i) => (
                <div
                  key={i}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm font-light leading-relaxed ${
                      message.role === "user"
                        ? "bg-gold text-near-black"
                        : "border border-gold-border bg-panel text-cream"
                    }`}
                  >
                    {message.content ? renderMessageContent(message.content) : (
                      <span className="flex gap-1 py-1">
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gold [animation-delay:-0.3s]" />
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gold [animation-delay:-0.15s]" />
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gold" />
                      </span>
                    )}
                  </div>
                </div>
              ))}
              {loading && messages[messages.length - 1]?.role === "user" && (
                <div className="flex justify-start">
                  <div className="flex gap-1 rounded-2xl border border-gold-border bg-panel px-4 py-3">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gold [animation-delay:-0.3s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gold [animation-delay:-0.15s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gold" />
                  </div>
                </div>
              )}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
              }}
              className="flex items-center gap-2 border-t border-gold-border p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={offline}
                placeholder={offline ? "Flynn is offline right now" : "Ask about flooring or blinds…"}
                className="flex-1 rounded-full border border-gold-border bg-panel px-4 py-2.5 text-sm text-cream placeholder:text-cream-muted focus:border-gold focus:outline-none disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={offline || loading}
                aria-label="Send message"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-near-black transition-opacity disabled:opacity-40"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Chat with Flynn"
        className="fixed bottom-24 right-4 z-40 flex items-center gap-2 rounded-full border border-gold-border bg-near-black px-4 py-3 shadow-lg transition-colors hover:border-gold sm:right-6"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold" />
        </span>
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-gold">
          <path d="M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9l-5 4V6a2 2 0 0 1 2-2Z" />
        </svg>
        <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-cream">
          {open ? "Close" : "Chat with Flynn"}
        </span>
      </button>
    </>
  );
}
