import { Eyebrow } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function CTASection({
  eyebrow = "Free Measuring Service",
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="border-t border-gold-border bg-panel">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:px-10">
        <ScrollReveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="font-display text-4xl italic text-cream sm:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base font-light leading-[1.85] text-cream-dim">
            {subtitle}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="primary">
              Book a Free Measure
            </Button>
            <Button href="/quote" variant="secondary">
              Get a Quote
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
