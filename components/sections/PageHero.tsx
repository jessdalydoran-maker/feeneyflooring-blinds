import { Eyebrow } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function PageHero({
  eyebrow,
  title,
  italicTitle,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  italicTitle?: string;
  subtitle?: string;
}) {
  return (
    <section className="corner-brackets relative mx-auto max-w-5xl px-6 py-32 text-center lg:px-10 lg:py-40">
      <ScrollReveal>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="font-display text-5xl leading-[1.05] text-cream sm:text-6xl lg:text-7xl">
          {title}{" "}
          {italicTitle && (
            <span className="text-gold italic">{italicTitle}</span>
          )}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-8 max-w-2xl text-base font-light leading-[1.85] text-cream-dim">
            {subtitle}
          </p>
        )}
      </ScrollReveal>
    </section>
  );
}
