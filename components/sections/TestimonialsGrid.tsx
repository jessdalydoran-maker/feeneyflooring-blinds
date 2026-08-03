import { Eyebrow } from "@/components/ui/Badge";
import { ScrollRevealGroup, RevealItem } from "@/components/animations/ScrollReveal";

const testimonials = [
  {
    quote:
      "A very quick, efficient, tidy and professional job. Good value for money. Pat and Kevin are very helpful and easy to deal with.",
    name: "Helen S.",
    source: "Google Review",
  },
  {
    quote: "Kevin does a fantastic job and at a good price. Would highly recommend.",
    name: "Chris K.",
    source: "Google Review",
  },
  {
    quote:
      "Very good service no trouble at all. Kevin very nice person, would highly recommend, job well done.",
    name: "Christine B.",
    source: "Google Review",
  },
];

export function TestimonialsGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <div className="text-center">
        <Eyebrow>What Customers Say</Eyebrow>
        <h2 className="font-display text-4xl text-cream sm:text-5xl">
          98% of customers <span className="text-gold italic">recommend us.</span>
        </h2>
      </div>
      <ScrollRevealGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <RevealItem key={t.name}>
            <div className="h-full border border-gold-border bg-panel p-8 rounded-[2px]">
              <p className="text-gold">★★★★★</p>
              <p className="mt-4 font-display text-xl italic leading-snug text-cream">
                “{t.quote}”
              </p>
              <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.2em] text-cream-dim">
                {t.name} · {t.source}
              </p>
            </div>
          </RevealItem>
        ))}
      </ScrollRevealGroup>
    </section>
  );
}
