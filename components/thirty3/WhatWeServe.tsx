"use client";

import { motion, useReducedMotion } from "framer-motion";

const icons = {
  cup: (
    <path d="M4 3h13a2 2 0 0 1 2 2v2h1a2 2 0 0 1 2 2v2a3 3 0 0 1-3 3h-.34A7 7 0 0 1 12 19H9a7 7 0 0 1-6.92-6H2V5a2 2 0 0 1 2-2Zm15 6v3a1 1 0 0 0 1-1v-2h-1ZM4 5v8a5 5 0 0 0 5 5h3a5 5 0 0 0 5-5V5H4Z" />
  ),
  cake: (
    <path d="M11 2h2v3h-2V2ZM6 8a3 3 0 0 1 3-3c.7 0 1.34.26 1.83.68A3 3 0 0 1 15 8v1H6V8Zm-2 3h16v2H4v-2Zm0 4h16v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6Z" />
  ),
  car: (
    <path d="M5 11 6.5 6h11L19 11h1a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-1a2 2 0 1 1-4 0H9a2 2 0 1 1-4 0H4a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h1Zm2.1-3-1 3h11.8l-1-3H7.1ZM7 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
  ),
  chair: (
    <path d="M6 3h2v9H6V3Zm10 0h2v9h-2V3ZM6 12h12v2H6v-2Zm0 3h2v6H6v-6Zm10 0h2v6h-2v-6Z" />
  ),
};

const cards = [
  {
    title: "SPECIALTY ESPRESSO",
    icon: icons.cup,
    body: "Every cup we pour is a speciality one. Expertly crafted, consistently brilliant from the first sip to the last.",
  },
  {
    title: "HANDMADE TRAYBAKES",
    icon: icons.cake,
    body: "Made fresh daily. Caramel squares, chocolate brownies, millionaire shortbread, peanut butter slices and more.",
  },
  {
    title: "DRIVE THRU",
    icon: icons.car,
    body: "In a rush? Pull up, order, go. Fast service, never rushed quality.",
  },
  {
    title: "SIT IN",
    icon: icons.chair,
    body: "Pull up a chair. Good company, great vibes, no rush. This is your place.",
  },
];

export function WhatWeServe() {
  const reduce = useReducedMotion();

  return (
    <section className="px-6 py-24 lg:px-16" style={{ background: "var(--t3-black)" }}>
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-t3-gold font-t3-heading">
          WHAT WE SERVE
        </p>
        <h2 className="font-t3-heading text-4xl uppercase text-t3-white sm:text-5xl">
          Great coffee. <span className="text-t3-gold">Every single time.</span>
        </h2>
        <p className="mt-4 max-w-md text-base font-light text-t3-off-white/70">
          Every cup we pour is a speciality one.
        </p>

        <motion.div
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: reduce ? undefined : { staggerChildren: 0.1 } } }}
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={{
                hidden: reduce ? {} : { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded border p-8"
              style={{ background: "var(--t3-panel)", borderColor: "var(--t3-gold-border)" }}
            >
              <span
                className="absolute top-0 left-0 h-[2px] w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                style={{ background: "var(--t3-gold)" }}
              />
              <svg viewBox="0 0 24 24" className="h-8 w-8 fill-t3-gold" aria-hidden>
                {card.icon}
              </svg>
              <h3 className="mt-5 font-t3-heading text-xl uppercase text-t3-white">{card.title}</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-t3-off-white/70">{card.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
