import { Eyebrow } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { BUSINESS } from "@/lib/constants";

export function ShowroomCTA() {
  return (
    <section className="bg-panel-2">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-24 lg:grid-cols-2 lg:px-10">
        <ScrollReveal>
          <Eyebrow>Opening Hours</Eyebrow>
          <div className="space-y-3 border-t border-gold-border pt-6">
            {BUSINESS.hours
              .filter((h) => h.hours !== "Closed")
              .map((h) => (
                <div key={h.day} className="flex justify-between border-b border-gold-border/40 pb-3">
                  <span className="font-display text-xl text-cream">{h.day}</span>
                  <span className="font-display text-xl text-gold">{h.hours}</span>
                </div>
              ))}
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <Eyebrow>Visit Us</Eyebrow>
          <h2 className="font-display text-4xl text-cream sm:text-5xl">See it in person.</h2>
          <p className="mt-6 text-base font-light leading-[1.85] text-cream-dim">
            Our Crumlin showroom has large sample displays, a herringbone
            feature floor, and a relaxed seating area. Expert advice with no
            pressure.
          </p>
          <p className="mt-4 text-sm font-light text-cream-dim">{BUSINESS.addressFull}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" variant="primary">
              Book a Showroom Visit
            </Button>
            <Button
              href="https://www.google.com/maps/search/?api=1&query=42+Belfast+Road+Nutts+Corner+Crumlin+BT29+4TH"
              variant="secondary"
            >
              Get Directions
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
