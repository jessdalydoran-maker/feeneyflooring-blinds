import { Eyebrow } from "@/components/ui/Badge";
import { ScrollRevealGroup, RevealItem } from "@/components/animations/ScrollReveal";

const steps = [
  {
    number: "I",
    title: "Browse or Book",
    body: "Visit our Crumlin showroom to see the full range, or book a free home measuring appointment — we come to you.",
  },
  {
    number: "II",
    title: "Free Measure & Quote",
    body: "Kevin measures your space and provides a clear, itemised quote. You know exactly what you are getting before you commit.",
  },
  {
    number: "III",
    title: "Professional Fit",
    body: "Supplied and fitted to the highest standard. Tidy, efficient, done right first time. Most jobs completed in a single day.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-panel">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="text-center">
          <Eyebrow>The Process</Eyebrow>
          <h2 className="font-display text-4xl text-cream sm:text-5xl">
            Simple from <span className="text-gold italic">start to finish.</span>
          </h2>
        </div>
        <ScrollRevealGroup className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
          {steps.map((step) => (
            <RevealItem key={step.number} className="relative text-center md:text-left">
              <span className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 font-display text-9xl text-gold/10 md:left-0 md:translate-x-0">
                {step.number}
              </span>
              <div className="relative">
                <h3 className="font-display text-2xl text-cream">{step.title}</h3>
                <p className="mt-4 text-base font-light leading-[1.85] text-cream-dim">
                  {step.body}
                </p>
              </div>
            </RevealItem>
          ))}
        </ScrollRevealGroup>
      </div>
    </section>
  );
}
