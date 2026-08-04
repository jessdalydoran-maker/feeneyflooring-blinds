"use client";

import { motion, useReducedMotion } from "framer-motion";

const columns = [
  {
    title: "COFFEE & HOT DRINKS",
    items: [
      "Espresso",
      "Americano",
      "Flat White",
      "Latte",
      "Cappuccino",
      "Cortado",
      "Macchiato",
      "Cold Brew",
      "Hot Chocolate",
      "Chai Latte",
    ],
    note: "Full menu available in store",
  },
  {
    title: "HANDMADE TRAYBAKES",
    items: [
      "Caramel Square",
      "Chocolate Brownie",
      "Millionaire Shortbread",
      "Lemon Drizzle Slice",
      "Peanut Butter Brownie",
      "Biscoff Slice",
      "Loaded Cookie",
    ],
    note: "Made fresh daily — subject to availability",
  },
  {
    title: "FRESH & LIGHT",
    items: ["Fresh Fruit Pot", "Yoghurt Pot"],
    note: "More options available in store",
  },
];

export function Menu() {
  const reduce = useReducedMotion();

  return (
    <section id="menu" className="px-6 py-24 lg:px-16" style={{ background: "var(--t3-dark)" }}>
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-t3-gold font-t3-heading">
          THE MENU
        </p>
        <h2 className="font-t3-heading text-4xl uppercase text-t3-white sm:text-5xl">
          Something <span className="text-t3-gold">for everyone.</span>
        </h2>

        <motion.div
          className="mt-14 grid grid-cols-1 gap-12 sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: reduce ? undefined : { staggerChildren: 0.15 } } }}
        >
          {columns.map((column) => (
            <motion.div
              key={column.title}
              variants={{
                hidden: reduce ? {} : { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="font-t3-heading text-lg uppercase tracking-[0.1em] text-t3-gold">
                {column.title}
              </h3>
              <div className="mt-3 h-px w-full" style={{ background: "var(--t3-gold-border)" }} />
              <ul className="mt-5 space-y-3">
                {column.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm font-light text-t3-off-white/85 transition-colors hover:text-t3-gold"
                  >
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--t3-gold)" }} />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs font-light text-t3-off-white/50">{column.note}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
