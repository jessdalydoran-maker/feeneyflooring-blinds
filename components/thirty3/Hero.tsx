"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const pillars = ["GREAT COFFEE.", "GREAT PEOPLE.", "GREAT VIBES."];

const lineVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-16 lg:px-16">
      <div className={`absolute inset-0 ${reduce ? "" : "t3-image-zoom"}`} aria-hidden>
        <Image
          src="/images/thirty3/barista-latte-art-menu.png"
          alt="Barista at thirty3coffee pouring latte art in front of the coffee menu board"
          fill
          priority
          className="t3-duotone object-cover"
          sizes="100vw"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(13,13,13,0.96) 0%, rgba(13,13,13,0.85) 35%, rgba(13,13,13,0.55) 65%, rgba(13,13,13,0.75) 100%), linear-gradient(to top, rgba(13,13,13,0.9) 0%, transparent 40%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(circle at 30% 40%, var(--t3-gold-glow) 0%, transparent 60%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-5">
        <motion.div
          className="lg:col-span-3"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: reduce ? undefined : { staggerChildren: 0.1 } } }}
        >
          <motion.p
            variants={lineVariants}
            transition={{ duration: 0.6 }}
            className="mb-6 text-[11px] font-medium uppercase tracking-[0.3em] text-t3-gold font-t3-heading"
          >
            EST. 2021 · NUTTS CORNER · NORTHERN IRELAND
          </motion.p>

          <h1 className="font-t3-heading text-5xl uppercase leading-[1.05] sm:text-6xl lg:text-7xl">
            <motion.span variants={lineVariants} transition={{ duration: 0.6 }} className="block text-t3-white">
              Isn&apos;t just
            </motion.span>
            <motion.span variants={lineVariants} transition={{ duration: 0.6 }} className="block text-t3-white">
              a coffee shop&hellip;
            </motion.span>
            <motion.span
              variants={lineVariants}
              transition={{ duration: 0.6 }}
              className="block italic text-t3-gold"
            >
              it&apos;s an
            </motion.span>
            <motion.span
              variants={lineVariants}
              transition={{ duration: 0.6 }}
              className="relative inline-block text-t3-white"
            >
              EXPERIENCE.
              <span className="t3-underline absolute -bottom-2 left-0 h-[3px] w-full bg-t3-gold" />
            </motion.span>
          </h1>

          <motion.p
            variants={lineVariants}
            transition={{ duration: 0.6 }}
            className="mt-8 max-w-md text-base font-light leading-relaxed text-t3-off-white/80"
          >
            Every cup is crafted to bring people together and make every
            visit memorable.
          </motion.p>

          <motion.div
            variants={lineVariants}
            transition={{ duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-4 text-xs font-medium uppercase tracking-[0.15em] text-t3-white font-t3-heading"
          >
            {pillars.map((pillar, i) => (
              <span key={pillar} className="flex items-center gap-4">
                {i > 0 && <span className="h-4 w-px bg-t3-gold-border" />}
                {pillar}
              </span>
            ))}
          </motion.div>

          <motion.div variants={lineVariants} transition={{ duration: 0.6 }} className="mt-10 flex flex-wrap gap-4">
            <a
              href="#find-us"
              className="t3-gold-glow-shadow inline-flex items-center justify-center rounded px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-t3-black transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--t3-gold)" }}
            >
              Find Us
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center rounded border px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-t3-gold backdrop-blur-sm transition-colors hover:bg-t3-gold-glow"
              style={{ borderColor: "var(--t3-gold)" }}
            >
              Our Menu
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hidden justify-center lg:col-span-2 lg:flex"
          initial={reduce ? undefined : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div
            className="t3-badge-pulse relative flex h-64 w-64 flex-col items-center justify-center rounded-full border text-center backdrop-blur-md sm:h-80 sm:w-80"
            style={{ borderColor: "var(--t3-gold)", background: "rgba(13,13,13,0.55)" }}
          >
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-t3-off-white/60">
              EST. 2021
            </span>
            <span className="font-t3-heading text-7xl text-t3-gold sm:text-8xl">33</span>
            <span className="mt-1 text-xs font-medium uppercase tracking-[0.25em] text-t3-white">
              THIRTY3 COFFEE
            </span>
            <svg viewBox="0 0 24 24" className="mt-3 h-5 w-5 fill-t3-gold" aria-hidden>
              <path d="M4 3c-1.1 0-2 .9-2 2v6a6 6 0 0 0 5.9 6H10a6 6 0 0 0 6-6h1a3 3 0 0 0 0-6h-1V5a2 2 0 0 0-2-2H4Zm0 2h10v5a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V5Zm12 2h1a1 1 0 0 1 0 2h-1V7ZM4 19h12v2H4v-2Z" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
