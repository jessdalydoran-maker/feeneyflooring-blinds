import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { HerringboneBackground } from "@/components/animations/HerringboneBackground";
import { Eyebrow } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ImageContentSection } from "@/components/sections/ContentSection";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { StatsBar } from "@/components/sections/StatsBar";
import { TestimonialsGrid } from "@/components/sections/TestimonialsGrid";
import { ShowroomCTA } from "@/components/sections/ShowroomCTA";
import { EmailSignup } from "@/components/sections/EmailSignup";

export const metadata: Metadata = buildMetadata({
  title: "Feeney Flooring & Blinds | Premium Flooring & Blinds Crumlin, Northern Ireland",
  description:
    "Expert flooring and blinds supply and fit in Crumlin, Antrim and Belfast. Free measuring service. Ville engineered wood, LVT, carpet, laminate and made to measure blinds. 5 star rated.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <section className="corner-brackets relative flex min-h-[calc(100vh-81px)] flex-col items-center justify-center overflow-hidden px-6 text-center">
        <HerringboneBackground />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, transparent 0%, var(--near-black) 75%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-4xl">
          <Eyebrow>Crumlin · Antrim · Belfast · Northern Ireland</Eyebrow>
          <h1 className="font-display text-6xl leading-[1.0] text-cream sm:text-7xl lg:text-8xl">
            Premium Flooring
            <br />
            &amp; Blinds —<br />
            <span className="text-gold italic">Measured,</span>
            <br />
            <span className="text-gold italic">Supplied</span>
            <br />
            <span className="text-gold italic">&amp; Fitted.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-base font-light leading-[1.85] text-cream-dim">
            Quality flooring and blinds to suit every style and budget. Free
            home measuring service across County Antrim.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="primary">
              Book a Free Measure
            </Button>
            <Button href="/about" variant="secondary">
              Visit Our Showroom
            </Button>
          </div>
        </div>
        <div className="scroll-indicator absolute bottom-10 h-16 w-px bg-gold" />
      </section>

      <TrustStrip />

      <ImageContentSection
        eyebrow="Signature Product"
        title="The floor that stops"
        italicTitle="people in their tracks."
        image="/images/herringbone-close-up.jpg"
        alt="Ville Burriana Oak herringbone engineered wood flooring installed in a hallway"
        productLabel="Ville Burriana Oak Herringbone"
        cta={{ label: "Explore Engineered Wood →", href: "/services/engineered-wood" }}
      >
        <p>
          There is one floor customers ask for by name more than any other:
          herringbone. It is the single most requested flooring we fit, and
          for good reason. The zig-zag pattern of individual planks laid at
          precise angles turns an ordinary room into something that feels
          considered, tailored, and quietly luxurious — the kind of floor
          people notice the moment they walk in.
        </p>
        <p>
          Our signature range is the Ville Burriana Oak Herringbone, an
          engineered wood board with a natural oak finish that reads warm in
          daylight and rich under lamplight. Unlike a straight plank lay,
          herringbone installation is a craft in itself: every board is cut
          and fitted at a 90-degree angle to its neighbour, with the pattern
          measured out from the centre of the room so it lands symmetrically
          against every wall. It takes patience, a steady hand, and years of
          fitting experience to get right — which is exactly what Kevin
          brings to every herringbone job.
        </p>
        <p>
          Herringbone transforms hallways, living rooms, kitchens and open
          plan spaces alike, and pairs naturally with both period features
          and contemporary interiors. Once it is down, it rarely gets ripped
          back up.
        </p>
      </ImageContentSection>

      <ServiceGrid />
      <HowItWorks />
      <StatsBar />
      <TestimonialsGrid />
      <ShowroomCTA />
      <EmailSignup />
    </>
  );
}
