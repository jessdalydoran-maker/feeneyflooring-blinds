import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { Eyebrow } from "@/components/ui/Badge";
import { ScrollReveal, ScrollRevealGroup, RevealItem } from "@/components/animations/ScrollReveal";
import { CalEmbed } from "@/components/sections/CalEmbed";
import { BUSINESS } from "@/lib/constants";
import { CAL_LINKS } from "@/lib/cal";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Contact Feeney Flooring & Blinds | Book a Free Measure | Crumlin",
  description:
    "Get in touch with Feeney Flooring & Blinds in Crumlin. Book a free measuring appointment, visit our showroom, or call 07720 981809.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Get in"
        italicTitle="Touch."
        subtitle="Call, WhatsApp, or send a message — we usually reply within a couple of hours during opening hours."
      />

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <ScrollReveal>
            <Eyebrow>Contact Details</Eyebrow>
            <a
              href={BUSINESS.phoneHref}
              className="block font-display text-4xl text-cream hover:text-gold"
            >
              {BUSINESS.phone}
            </a>
            <a
              href={BUSINESS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm font-light text-cream-dim hover:text-gold"
            >
              Click to chat on WhatsApp →
            </a>

            <div className="gold-rule my-8" />

            <p className="text-sm font-light text-cream-dim">Showroom Address</p>
            <p className="mt-2 font-display text-2xl text-cream">
              {BUSINESS.addressFull}
            </p>

            <p className="mt-8 eyebrow">Opening Hours</p>
            <div className="mt-3 space-y-2">
              {BUSINESS.hours
                .filter((h) => h.hours !== "Closed")
                .map((h) => (
                  <div key={h.day} className="flex justify-between border-b border-gold-border/40 pb-2 text-sm font-light text-cream-dim">
                    <span>{h.day}</span>
                    <span className="text-cream">{h.hours}</span>
                  </div>
                ))}
            </div>

            <div className="mt-8 aspect-video overflow-hidden rounded-3xl border border-gold-border">
              <iframe
                title="Feeney Flooring & Blinds showroom location"
                src="https://www.google.com/maps?q=32-34+Main+Street,+Crumlin,+BT29+4UP&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <Eyebrow>Send a Message</Eyebrow>
            <h2 className="font-display text-3xl text-cream">
              Tell us about your project.
            </h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="book" className="border-t border-gold-border bg-panel">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
          <div className="text-center">
            <Eyebrow>Book an Appointment</Eyebrow>
            <h2 className="font-display text-4xl text-cream sm:text-5xl">
              Two ways to <span className="text-gold italic">get started.</span>
            </h2>
          </div>
          <ScrollRevealGroup className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <RevealItem>
              <p className="mb-4 text-center font-display text-2xl text-cream">
                Book a Showroom Visit
              </p>
              <CalEmbed calLink={CAL_LINKS.showroomVisit} label="Book a Showroom Visit" />
            </RevealItem>
            <RevealItem>
              <p className="mb-4 text-center font-display text-2xl text-cream">
                Book a Home Measurement
              </p>
              <CalEmbed calLink={CAL_LINKS.homeMeasurement} label="Book a Home Measurement" />
            </RevealItem>
          </ScrollRevealGroup>
          <p className="mt-10 text-center text-sm font-light text-cream-dim">
            Prefer to browse first? See our full{" "}
            <Link href="/services" className="text-gold hover:text-gold-light">
              range of services
            </Link>{" "}
            or read more{" "}
            <Link href="/about" className="text-gold hover:text-gold-light">
              about Feeney Flooring &amp; Blinds
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
