"use client";

import { useState } from "react";
import { Eyebrow } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export interface FAQItem {
  question: string;
  answer: string;
}

export function FAQAccordion({
  items,
  eyebrow = "Common Questions",
  title,
}: {
  items: FAQItem[];
  eyebrow?: string;
  title: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-4xl px-6 py-24 lg:px-10">
      <ScrollReveal>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="font-display text-4xl italic text-cream sm:text-5xl">
          {title}
        </h2>
      </ScrollReveal>
      <div className="mt-10 divide-y divide-gold-border border-t border-b border-gold-border">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.question}>
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-display text-xl text-cream sm:text-2xl">
                  {item.question}
                </span>
                <span className="shrink-0 font-display text-2xl text-gold">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <p className="pb-6 text-base font-light leading-[1.85] text-cream-dim">
                  {item.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
