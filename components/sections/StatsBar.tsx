import { CountUp } from "@/components/animations/CountUp";
import { ScrollRevealGroup, RevealItem } from "@/components/animations/ScrollReveal";

const stats = [
  { value: 5, suffix: "★", label: "Average Google Rating" },
  { value: 98, suffix: "%", label: "Recommend on Facebook" },
  { value: 29, suffix: "", label: "Five Star Reviews" },
  { value: 2017, suffix: "", label: "Serving County Antrim Since", prefix: "Est. " },
];

export function StatsBar() {
  return (
    <section className="border-y border-gold-border bg-panel">
      <ScrollRevealGroup className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-6 py-16 text-center lg:grid-cols-4 lg:px-10">
        {stats.map((stat) => (
          <RevealItem key={stat.label}>
            <p className="font-display text-6xl text-gold">
              <CountUp value={stat.value} suffix={stat.suffix} prefix={stat.prefix ?? ""} />
            </p>
            <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.2em] text-cream-dim">
              {stat.label}
            </p>
          </RevealItem>
        ))}
      </ScrollRevealGroup>
    </section>
  );
}
