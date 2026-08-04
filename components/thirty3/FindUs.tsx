"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export function FindUs() {
  const reduce = useReducedMotion();

  return (
    <section id="find-us" className="relative overflow-hidden px-6 py-24 lg:px-16">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/images/thirty3/customer-laptop-community.png"
          alt="A customer working and enjoying coffee at thirty3coffee, with the community gathered in the background"
          fill
          className="t3-duotone object-cover opacity-25"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, var(--t3-black) 0%, rgba(13,13,13,0.85) 100%)" }}
        />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl">
        <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-t3-gold font-t3-heading">
          WHERE TO FIND US
        </p>
        <h2 className="font-t3-heading text-4xl uppercase text-t3-white sm:text-5xl">
          Come find <span className="text-t3-gold">us.</span>
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-t3-heading text-3xl text-t3-gold">thirty3coffee</p>
            <p className="mt-2 text-sm font-light text-t3-off-white/80">
              Nutts Corner, Northern Ireland
            </p>

            <div className="mt-8 space-y-2 text-sm font-light text-t3-off-white/85">
              <div className="flex justify-between border-b pb-2" style={{ borderColor: "var(--t3-gold-border)" }}>
                <span>Mon &mdash; Fri</span>
                <span className="text-t3-gold">7:00am &mdash; 3:00pm</span>
              </div>
              <div className="flex justify-between border-b pb-2" style={{ borderColor: "var(--t3-gold-border)" }}>
                <span>Sat &mdash; Sun</span>
                <span className="text-t3-gold">9:00am &mdash; 2:00pm</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=thirty3coffee+Nutts+Corner+Northern+Ireland"
                target="_blank"
                rel="noopener noreferrer"
                className="t3-gold-glow-shadow inline-flex items-center justify-center rounded px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-t3-black"
                style={{ background: "var(--t3-gold)" }}
              >
                Get Directions
              </a>
              <a
                href="https://wa.me/44"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded border px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-t3-gold"
                style={{ borderColor: "var(--t3-gold)" }}
              >
                WhatsApp Us
              </a>
            </div>

            <div className="mt-8 flex items-center gap-5">
              <a
                href="https://www.instagram.com/thirty3.coffee/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-t3-gold"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M12 2c2.7 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.22.6 1.77 1.15.55.55.89 1.11 1.15 1.77.25.64.42 1.37.47 2.43.05 1.06.06 1.42.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.42.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.7 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.22 1.15-1.77A4.9 4.9 0 0 1 5.45.53c.64-.25 1.37-.42 2.43-.47C8.94.01 9.3 0 12 0Zm0 5.35A6.65 6.65 0 1 0 12 18.65 6.65 6.65 0 0 0 12 5.35Zm0 10.97a4.32 4.32 0 1 1 0-8.64 4.32 4.32 0 0 1 0 8.64ZM18.9 5.1a1.56 1.56 0 1 1-3.12 0 1.56 1.56 0 0 1 3.12 0Z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61586683685409"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-t3-gold"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.25-1.5 1.55-1.5H16.7V3.7c-.28-.04-1.25-.12-2.37-.12-2.35 0-3.96 1.44-3.96 4.08V10H7.6v3.1h2.77v8h3.13Z" />
                </svg>
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=thirty3coffee+Nutts+Corner+Northern+Ireland"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Location"
                className="text-t3-gold"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
                </svg>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="aspect-square overflow-hidden rounded border sm:aspect-video"
            style={{ borderColor: "var(--t3-gold-border)" }}
          >
            <iframe
              title="thirty3coffee location, Nutts Corner"
              src="https://www.google.com/maps?q=Nutts+Corner,+Northern+Ireland&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="t3-map-frame"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
