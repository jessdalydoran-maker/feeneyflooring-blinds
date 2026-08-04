"use client";

import { motion, useReducedMotion } from "framer-motion";

const cards = [
  {
    label: "MONDAY TO FRIDAY",
    time: "7:00 AM — 3:00 PM",
    badge: null,
    initialX: -40,
  },
  {
    label: "SATURDAY",
    time: "9:00 AM — 2:00 PM",
    badge: null,
    initialX: 0,
  },
  {
    label: "SUNDAY",
    time: "9:00 AM — 2:00 PM",
    badge: "NOW OPEN",
    initialX: 40,
  },
];

export function OpeningHours() {
  const reduce = useReducedMotion();

  return (
    <section className="px-6 py-24 lg:px-16" style={{ background: "var(--t3-dark)" }}>
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-t3-gold font-t3-heading">
          WHEN TO FIND US
        </p>
        <h2 className="font-t3-heading text-4xl uppercase text-t3-white sm:text-5xl">
          Open <span className="text-t3-gold">7 days</span> a week.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {cards.map((card) => (
            <motion.div
              key={card.label}
              initial={reduce ? undefined : { opacity: 0, x: card.initialX, y: card.initialX === 0 ? 30 : 0 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded border p-8 transition-colors"
              style={{ background: "var(--t3-panel)", borderColor: "var(--t3-gold-border)" }}
            >
              <span
                className="absolute top-0 left-0 h-[2px] w-full"
                style={{ background: "var(--t3-gold)" }}
              />
              {card.badge && (
                <span
                  className="absolute top-4 right-4 rounded px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-t3-black"
                  style={{ background: "var(--t3-gold)" }}
                >
                  {card.badge}
                </span>
              )}
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-t3-off-white/70 font-t3-heading">
                {card.label}
              </p>
              <p className="mt-4 font-t3-heading text-3xl text-t3-gold sm:text-4xl">{card.time}</p>
              <div className="mt-6 flex items-center gap-4 text-sm font-light text-t3-off-white/80">
                <span className="flex items-center gap-2">🚗 Drive Thru</span>
                <span className="flex items-center gap-2">🪑 Sit In</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
