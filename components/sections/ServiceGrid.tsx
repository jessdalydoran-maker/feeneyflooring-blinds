import Link from "next/link";
import { Eyebrow } from "@/components/ui/Badge";
import { ScrollRevealGroup, RevealItem } from "@/components/animations/ScrollReveal";

const services = [
  {
    name: "Engineered Wood",
    description: "Herringbone and plank engineered oak. The signature Feeney floor.",
    href: "/services/engineered-wood",
  },
  {
    name: "LVT",
    description: "Waterproof luxury vinyl tile for kitchens, bathrooms and busy homes.",
    href: "/services/lvt",
  },
  {
    name: "Laminate",
    description: "Durable, affordable flooring that still looks the part.",
    href: "/services/laminate",
  },
  {
    name: "Carpet & Stairs",
    description: "Soft underfoot carpet, expertly fitted on floors and staircases.",
    href: "/services/carpet",
  },
  {
    name: "Made to Measure Blinds",
    description: "Roller, venetian, vertical, roman and blackout — every window.",
    href: "/services/blinds",
  },
];

export function ServiceGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <div className="text-center">
        <Eyebrow>What We Do</Eyebrow>
        <h2 className="font-display text-4xl text-cream sm:text-5xl">
          Every floor. <span className="text-gold italic">Every blind.</span>
        </h2>
      </div>
      <ScrollRevealGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <RevealItem key={service.name}>
            <Link
              href={service.href}
              className="group relative block h-full border border-gold-border bg-panel p-8 transition-colors duration-300 hover:border-gold rounded-[2px]"
            >
              <span className="absolute top-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
              <h3 className="font-display text-2xl text-cream">{service.name}</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-cream-dim">
                {service.description}
              </p>
              <span className="mt-6 inline-block text-[11px] font-medium uppercase tracking-[0.2em] text-gold">
                Explore →
              </span>
            </Link>
          </RevealItem>
        ))}
        <RevealItem>
          <Link
            href="/contact"
            className="flex h-full flex-col justify-center border border-gold bg-gold-subtle p-8 rounded-[2px]"
          >
            <h3 className="font-display text-2xl text-cream">Free Measuring Service</h3>
            <p className="mt-3 text-sm font-light leading-relaxed text-cream-dim">
              Kevin visits your home, measures every room and provides a clear
              quote — no obligation, no pressure.
            </p>
            <span className="mt-6 inline-block text-[11px] font-medium uppercase tracking-[0.2em] text-gold">
              Book Now →
            </span>
          </Link>
        </RevealItem>
      </ScrollRevealGroup>
    </section>
  );
}
