import type { Metadata } from "next";
import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { ContentSection } from "@/components/sections/ContentSection";
import { CTASection } from "@/components/sections/CTASection";
import { Eyebrow } from "@/components/ui/Badge";
import { ScrollRevealGroup, RevealItem, ScrollReveal } from "@/components/animations/ScrollReveal";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "About Feeney Flooring & Blinds | Local Flooring Experts, Crumlin",
  description:
    "Family-run flooring and blinds business serving Crumlin, Antrim and Belfast since 2017. Meet Kevin and the team, and discover why 98% of customers recommend us.",
  path: "/about",
});

const reasons = [
  {
    title: "Free Measuring Service",
    body: "Every quote starts with an honest, no-obligation measure at your home — never a guess from a photo.",
  },
  {
    title: "Supply & Fit Specialists",
    body: "One trusted team from first sample to final fit. No handing your job between separate suppliers and fitters.",
  },
  {
    title: "Premium Brands Stocked",
    body: "Ville, Clas Sen and Johnstone's Trade — ranges chosen for quality that holds up in real Northern Ireland homes.",
  },
  {
    title: "5 Star Rated",
    body: "29 five-star reviews and a 98% recommend rate on Facebook, built one tidy, well-fitted job at a time.",
  },
  {
    title: "Local Northern Ireland Business",
    body: "Based in Crumlin and proud of it. We know the homes, the roads and the customers of County Antrim.",
  },
  {
    title: "Years of Expertise",
    body: "Since 2017, Kevin has fitted flooring and blinds in hundreds of homes across Crumlin, Antrim and Belfast.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="About"
        italicTitle="Feeney Flooring & Blinds"
        subtitle="A family-run flooring and blinds business built on straight answers, tidy work, and floors that last."
      />

      <ContentSection eyebrow="Who We Are" title="Local flooring experts," italicTitle="built on trust.">
        <p>
          Feeney Flooring &amp; Blinds is a family-run business based on Main
          Street in Crumlin, County Antrim, supplying and fitting premium
          flooring and made to measure blinds across Crumlin, Antrim and
          Belfast. The business was started by Kevin Feeney in 2017, after
          years spent learning the trade the hard way — on his knees, board
          by board, in real homes with real deadlines and real families
          waiting to get their rooms back.
        </p>
        <p>
          What began as a one-man flooring fitting service has grown, slowly
          and deliberately, into a full supply-and-fit operation covering
          engineered wood, LVT, laminate, carpet, stair fitting and made to
          measure blinds — all without losing the thing that built the
          reputation in the first place: Kevin turning up, measuring
          properly, and doing the job right first time.
        </p>
        <p>
          We are not a national chain and we do not want to be. Every
          measuring appointment, every quote and most fitting jobs are still
          handled personally by Kevin and a small, trusted team, which means
          the person who measures your hallway is often the same person who
          fits it. That continuity is rare in this trade, and it is the
          reason so many customers come back to us for the next room, and
          the room after that.
        </p>
        <p>
          Quality, for us, is not a marketing word. It shows up in the
          brands we choose to stock, the time we take to get a herringbone
          pattern square to the walls, and the fact that we would rather
          tell a customer honestly that a floor is not right for their
          bathroom than sell them the wrong thing. Family values run through
          how we treat customers and how we treat the trade itself — with
          patience, fairness and a genuine pride in the finished job.
        </p>
        <p>
          Today, Feeney Flooring &amp; Blinds is rated 5 stars on Google with
          29 reviews, and 98% of customers who leave feedback on Facebook say
          they would recommend us. In a business built entirely on word of
          mouth and repeat custom across County Antrim, that reputation is
          the whole business.
        </p>
      </ContentSection>

      <section className="bg-panel">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="text-center">
            <Eyebrow>Why Choose Us</Eyebrow>
            <h2 className="font-display text-4xl text-cream sm:text-5xl">
              Six reasons customers <span className="text-gold italic">come back.</span>
            </h2>
          </div>
          <ScrollRevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => (
              <RevealItem key={reason.title}>
                <div className="h-full border border-gold-border bg-near-black p-8 rounded-[2px]">
                  <h3 className="font-display text-xl text-cream">{reason.title}</h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-cream-dim">
                    {reason.body}
                  </p>
                </div>
              </RevealItem>
            ))}
          </ScrollRevealGroup>
        </div>
      </section>

      <ContentSection eyebrow="Brands We Stock" title="Chosen for" italicTitle="quality that lasts.">
        <p>
          <strong className="text-cream">Ville</strong> is our flagship
          engineered wood partner and the brand behind the Burriana Oak
          Herringbone range that has become our signature floor. Ville boards
          are built with a genuine oak wear layer over a stable engineered
          core, designed specifically to perform well with Northern Ireland's
          humidity and temperature swings — and to take a herringbone or
          chevron lay beautifully.
        </p>
        <p>
          <strong className="text-cream">Clas Sen</strong> gives us a wide,
          dependable range of LVT, laminate and carpet options that cover
          every budget without compromising on durability, making it easy to
          match the right floor to the right room and the right price.
        </p>
        <p>
          <strong className="text-cream">Johnstone&apos;s Trade</strong>{" "}
          (Covaplus range) rounds out our showroom for customers finishing a
          room from floor to ceiling, giving trade-quality paint options
          alongside our flooring and blinds ranges.
        </p>
      </ContentSection>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <div className="relative aspect-[4/3] overflow-hidden border border-gold-border rounded-[2px]">
              <Image
                src="/images/showroom-1.jpg"
                alt="Feeney Flooring & Blinds showroom in Crumlin with flooring and carpet samples on display"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Eyebrow>The Showroom</Eyebrow>
            <h2 className="font-display text-4xl text-cream sm:text-5xl">
              A relaxed way to <span className="text-gold italic">choose your floor.</span>
            </h2>
            <p className="mt-6 text-base font-light leading-[1.85] text-cream-dim">
              Our Main Street showroom is built for browsing without
              pressure. Large sample boards let you see engineered wood,
              LVT, laminate and carpet in proper room-sized pieces, not tiny
              swatches, and our herringbone feature floor lets you feel the
              pattern underfoot before you commit. There is a seating area
              for a proper conversation about your project, and Kevin or a
              member of the team is always on hand for honest advice — never
              a hard sell.
            </p>
            <p className="mt-4 text-base font-light leading-[1.85] text-cream-dim">
              Prefer we come to you? Every visit can be followed by a free
              home measuring appointment, so you can see samples against
              your own walls and lighting before ordering.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm font-light text-cream-dim">
              <Link href="/services/flooring" className="text-gold hover:text-gold-light">
                Explore Flooring →
              </Link>
              <Link href="/services/blinds" className="text-gold hover:text-gold-light">
                Explore Blinds →
              </Link>
              <Link href="/contact" className="text-gold hover:text-gold-light">
                Contact Us →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection
        title="Ready to talk about your project?"
        subtitle="Book a free home measure or drop into the Crumlin showroom — no pressure, just honest advice."
      />
    </>
  );
}
