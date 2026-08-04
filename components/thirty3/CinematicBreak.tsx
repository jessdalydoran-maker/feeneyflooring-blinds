"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export function CinematicBreak() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex h-[70vh] min-h-[480px] items-center justify-center overflow-hidden">
      <div className={`absolute inset-0 ${reduce ? "" : "t3-image-zoom"}`} aria-hidden>
        <Image
          src="/images/thirty3/sit-in-laptop-wall-sign.png"
          alt="A customer enjoying a coffee and working at thirty3coffee beneath the 33 wall sign"
          fill
          className="t3-duotone object-cover"
          sizes="100vw"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(13,13,13,0.95) 0%, rgba(13,13,13,0.5) 45%, rgba(13,13,13,0.7) 100%)",
        }}
        aria-hidden
      />

      <motion.div
        className="relative z-10 mx-auto max-w-3xl px-6 text-center"
        initial={reduce ? undefined : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-t3-gold font-t3-heading">
          THE thirty3 WAY
        </p>
        <h2 className="font-t3-heading text-3xl uppercase leading-tight text-t3-white sm:text-5xl">
          Good Coffee. <span className="text-t3-gold">Good Company.</span>
          <br />
          Great Experience.
        </h2>
      </motion.div>
    </section>
  );
}
