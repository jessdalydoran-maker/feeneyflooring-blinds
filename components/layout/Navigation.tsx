"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-near-black/80 backdrop-blur-md border-b border-gold-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.jpg"
            alt="Feeney Flooring & Blinds logo"
            width={36}
            height={36}
            className="rounded-[2px]"
          />
          <span className="font-display text-xl text-cream">
            Feeney <span className="text-gold italic">Flooring</span> &amp; Blinds
          </span>
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] font-medium uppercase tracking-[0.2em] text-cream-dim transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" variant="primary">
            Book a Free Measure
          </Button>
        </div>

        <button
          aria-label="Open menu"
          className="flex flex-col gap-1.5 lg:hidden"
          onClick={() => setOpen(true)}
        >
          <span className="h-px w-7 bg-cream" />
          <span className="h-px w-7 bg-cream" />
          <span className="h-px w-7 bg-cream" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-10 bg-near-black lg:hidden"
          >
            <button
              aria-label="Close menu"
              className="absolute top-6 right-6 text-cream text-2xl"
              onClick={() => setOpen(false)}
            >
              &times;
            </button>
            <Image
              src="/images/logo.jpg"
              alt="Feeney Flooring & Blinds logo"
              width={48}
              height={48}
              className="rounded-[2px]"
            />
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl text-cream hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
            <Button href="/contact" variant="primary" onClick={() => setOpen(false)}>
              Book a Free Measure
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
