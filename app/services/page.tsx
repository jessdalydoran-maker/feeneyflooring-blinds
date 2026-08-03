import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Eyebrow } from "@/components/ui/Badge";
import { ScrollReveal, ScrollRevealGroup, RevealItem } from "@/components/animations/ScrollReveal";

export const metadata: Metadata = buildMetadata({
  title: "Flooring & Blinds Services | Supply & Fit Northern Ireland | Feeney",
  description:
    "Complete flooring and blinds supply and fit service across Crumlin, Antrim and Belfast. Engineered wood, LVT, laminate, carpet, stair fitting and made to measure blinds.",
  path: "/services",
});

const services = [
  {
    name: "Flooring",
    href: "/services/flooring",
    image: "/images/flooring-collection.jpg",
    body: "Engineered wood, LVT, laminate, carpet and stair fitting — supplied and fitted across every room in the house.",
  },
  {
    name: "Engineered Wood",
    href: "/services/engineered-wood",
    image: "/images/herringbone-hero.jpg",
    body: "Ville Burriana Oak herringbone and plank flooring, fitted with genuine craftsmanship and precision.",
  },
  {
    name: "LVT",
    href: "/services/lvt",
    image: "/images/lvt-bathroom.jpg",
    body: "Waterproof luxury vinyl tile for kitchens, bathrooms and busy family homes, in stone and wood-look finishes.",
  },
  {
    name: "Laminate",
    href: "/services/laminate",
    image: "/images/engineered-wood-kitchen.jpg",
    body: "Durable, affordable, easy-clean flooring that stands up to family life without breaking the budget.",
  },
  {
    name: "Carpet",
    href: "/services/carpet",
    image: "/images/carpet-living-room.jpg",
    body: "Twist, loop and velvet carpets fitted with quality underlay, for bedrooms, living rooms and stairs.",
  },
  {
    name: "Stair Fitting",
    href: "/services/stair-fitting",
    image: "/images/stair-carpet.jpg",
    body: "Specialist carpet and hard flooring fitting for stairs — the area of the home that takes the most wear.",
  },
  {
    name: "Blinds",
    href: "/services/blinds",
    image: "/images/blinds-window.jpg",
    body: "Made to measure roller, venetian, vertical, roman and blackout blinds for every window in the house.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Flooring & Blinds"
        italicTitle="Supply & Fit."
        subtitle="From first sample to final fit, Feeney Flooring & Blinds delivers premium flooring and made to measure blinds across Crumlin, Antrim and Belfast."
      />

      <section className="mx-auto max-w-4xl px-6 pb-8 lg:px-10">
        <ScrollReveal>
          <p className="text-base font-light leading-[1.85] text-cream-dim">
            Feeney Flooring &amp; Blinds offers a genuinely complete service —
            everything you need to finish a room, handled by one trusted
            local team. Our flooring range spans engineered wood, luxury
            vinyl tile (LVT), laminate and carpet, with specialist stair
            fitting for the trickiest area of any home. Every flooring job
            starts with a free home measuring appointment, so you get an
            honest, itemised quote before committing to anything.
          </p>
          <p className="mt-5 text-base font-light leading-[1.85] text-cream-dim">
            Alongside flooring, we supply and fit made to measure blinds in
            roller, venetian, vertical, roman and blackout styles, giving you
            one point of contact for both floors and windows. All our work
            is carried out to the standard we would want in our own homes —
            tidy, efficient, and finished properly the first time. Explore
            each service below, or{" "}
            <Link href="/quote" className="text-gold hover:text-gold-light">
              get a free quote
            </Link>{" "}
            to get started.
          </p>
        </ScrollReveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <ScrollRevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <RevealItem key={service.href}>
              <Link
                href={service.href}
                className="group block h-full overflow-hidden border border-gold-border bg-panel rounded-[2px] transition-colors hover:border-gold"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.name} supplied and fitted by Feeney Flooring & Blinds in Crumlin`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl text-cream">{service.name}</h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-cream-dim">
                    {service.body}
                  </p>
                  <span className="mt-4 inline-block text-[11px] font-medium uppercase tracking-[0.2em] text-gold">
                    Explore →
                  </span>
                </div>
              </Link>
            </RevealItem>
          ))}
        </ScrollRevealGroup>
      </section>

      <CTASection
        title="Not sure where to start?"
        subtitle="Book a free home measuring appointment and we'll talk you through the best flooring or blinds option for your space and budget."
      />
    </>
  );
}
