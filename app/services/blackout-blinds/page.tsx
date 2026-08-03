import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { JsonLd, faqSchema, serviceSchema } from "@/lib/schema";
import { PageHero } from "@/components/sections/PageHero";
import { ContentSection, ImageContentSection } from "@/components/sections/ContentSection";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { PricingCallout } from "@/components/sections/PricingCallout";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Blackout Blinds Northern Ireland | Bedrooms & Nurseries | Feeney",
  description:
    "Made to measure blackout blinds for bedrooms, nurseries and shift workers across Crumlin, Antrim and Belfast. Child-safe options, free measuring service.",
  path: "/services/blackout-blinds",
});

const faqItems = [
  {
    question: "Do blackout blinds block 100% of light?",
    answer:
      "A well-fitted blackout blind blocks the vast majority of light coming through the fabric itself, but some light can still creep in around the edges of the blind where it meets the window frame, especially with a face-fit rather than recess-fit installation. We measure carefully during your free visit and can recommend side channels or a slightly larger blind to minimise edge light where total darkness matters.",
  },
  {
    question: "Are blackout blinds safe for nurseries?",
    answer:
      "Yes, when fitted correctly. We recommend cordless or chainless blackout blinds for nurseries and children's bedrooms, meeting UK child safety regulations by removing any accessible cord entirely. This gives you both the darkness needed for safe daytime naps and the peace of mind that comes with a child-safe fitting.",
  },
  {
    question: "What styles are available in blackout fabric?",
    answer:
      "Blackout treatment is available across our roller, roman and vertical blind ranges, so you can choose the look that suits the room without giving up on darkness. Roller blinds offer the simplest blackout option, roman blinds bring the same darkness with a softer, fabric-led look, and vertical blinds extend blackout coverage to larger windows and patio doors.",
  },
  {
    question: "Do blackout blinds help with energy efficiency?",
    answer:
      "Yes, the thicker backing or coating used in blackout fabric also adds a degree of insulation, helping to reduce heat loss through the window in winter and block solar heat gain in summer. While not a substitute for double glazing, a blackout blind does make a noticeable difference to a room's temperature stability.",
  },
  {
    question: "Can blackout blinds be combined with curtains?",
    answer:
      "Absolutely — many customers fit a blackout blind close to the glass for maximum darkness and insulation, then layer curtains in front for additional softness, styling and extra draught exclusion. This combination is particularly popular in bedrooms where both appearance and total darkness matter.",
  },
  {
    question: "How do you clean blackout blinds?",
    answer:
      "Regular dusting with a soft cloth or vacuum brush attachment keeps blackout blinds looking fresh, and most fabrics can be spot cleaned with a damp cloth for marks. Avoid soaking the fabric, as this can affect the blackout coating or backing — if in doubt, ask our team for care advice specific to your chosen fabric.",
  },
];

export default function BlackoutBlindsPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Blackout Blinds",
          description:
            "Made to measure blackout blinds supplied and fitted across Crumlin, Antrim and Belfast, available in roller, roman and vertical styles.",
          path: "/services/blackout-blinds",
        })}
      />
      <JsonLd data={faqSchema(faqItems)} />

      <PageHero
        eyebrow="Blackout Blinds"
        title="Blackout Blinds —"
        italicTitle="Complete Darkness."
        subtitle="Made to measure blackout blinds for bedrooms, nurseries and shift workers, fitted across Crumlin, Antrim and Belfast."
      />

      <ContentSection eyebrow="How It Works" title="Blackout Fabric" italicTitle="Explained">
        <p>
          Blackout blinds use a special light-blocking backing or coating
          applied to the fabric, rather than relying on the weave of the
          fabric alone to keep light out. This is what sets blackout fabric
          apart from a standard light-filtering blind, which softens
          daylight but still lets a good deal through. The blackout
          treatment can be applied to a wide range of decorative front
          fabrics, so you don't have to sacrifice style to get the darkness
          you want.
        </p>
        <p>
          Compared with dimout fabric, which reduces light without blocking
          it fully, true blackout fabric is the option to choose when a
          room genuinely needs to go dark — for sleep, screens, or shift
          work schedules.
        </p>
        <p>
          The way a blackout blind is fitted matters just as much as the
          fabric itself. A recess-fit blind sitting snugly inside the
          window reveal will always let a little light creep in around the
          edges, while a face-fit blind mounted onto the wall or frame,
          sized generously beyond the window opening, blocks far more of
          that edge light for a genuinely dark result. We assess which
          approach suits your window best during the free measuring visit,
          particularly for rooms where total darkness is the priority.
        </p>
      </ContentSection>

      <ImageContentSection
        eyebrow="Sleep Quality"
        title="Better Sleep in"
        italicTitle="Complete Darkness"
        image="/images/blinds-window.jpg"
        alt="Blackout blind fitted to a bedroom window for complete darkness"
      >
        <p>
          Light exposure, even in small amounts, can interfere with the
          body's natural sleep cycle, which is why a genuinely dark bedroom
          makes such a difference to sleep quality. A properly fitted
          blackout blind removes streetlight, early summer sunrises and
          passing car headlights from the equation, helping you fall asleep
          faster and stay asleep longer.
        </p>
        <p>
          It's a simple, one-off change that consistently comes up as one of
          the most effective ways to improve sleep, and pairs well with a
          quiet, cool bedroom environment for the best results.
        </p>
      </ImageContentSection>

      <ImageContentSection
        eyebrow="Nurseries"
        title="Safe, Dark Naps"
        italicTitle="for Little Ones"
        image="/images/blinds-narrow.jpg"
        alt="Blackout blind fitted to a nursery window"
        reverse
      >
        <p>
          Babies and toddlers often sleep more soundly, and for longer
          stretches, in a fully darkened room, which is why blackout blinds
          are such a popular fitting for nurseries. Daytime naps in
          particular benefit hugely from cutting out bright summer daylight
          that would otherwise disturb sleep.
        </p>
        <p>
          For nursery and children's bedroom installations, we always
          recommend a cordless or chainless blackout blind, keeping the room
          both properly dark and fully compliant with UK child safety
          standards.
        </p>
      </ImageContentSection>

      <ContentSection eyebrow="Shift Workers" title="Daytime Sleep," italicTitle="Made Possible">
        <p>
          Anyone working night shifts knows how difficult it can be to sleep
          well during daylight hours, when the body's natural instinct is to
          stay awake. A genuinely dark bedroom removes one of the biggest
          obstacles to that daytime rest, helping recreate night-time
          conditions regardless of what time it actually is outside.
        </p>
        <p>
          We fit blackout blinds for shift workers across Crumlin, Antrim
          and Belfast regularly, and it's consistently one of the most
          appreciated changes customers report back on.
        </p>
        <p>
          Home cinema rooms and media spaces are another area where
          blackout blinds make a real practical difference, cutting out
          daylight reflections on a screen and improving picture contrast
          significantly compared with a standard light-filtering blind or
          curtain alone.
        </p>
      </ContentSection>

      <ContentSection eyebrow="Style Options" title="Available in" italicTitle="Roller, Roman or Vertical">
        <p>
          Blackout treatment isn't limited to one style of blind — we offer
          it across our{" "}
          <Link href="/services/roller-blinds" className="text-gold hover:text-gold-light">
            roller blinds
          </Link>{" "}
          for the simplest, cleanest blackout option, our{" "}
          <Link href="/services/roman-blinds" className="text-gold hover:text-gold-light">
            roman blinds
          </Link>{" "}
          for a softer, more decorative fabric-led look, and our vertical
          blind range for larger windows and patio doors that need the same
          darkness at a bigger scale.
        </p>
        <p>
          Whichever style suits the room best aesthetically, the underlying
          blackout fabric performance stays consistent, so you can choose
          based on look without compromising on darkness.
        </p>
      </ContentSection>

      <div className="mx-auto max-w-4xl px-6 pb-16 lg:px-10">
        <PricingCallout
          price="£75"
          unit="per window"
          note="Final price depends on window size and fabric choice — book a free measure for an exact quote."
        />
      </div>

      <ContentSection eyebrow="Explore Further" title="More" italicTitle="Blind Styles">
        <p>
          Not sure blackout is right for every room? Our{" "}
          <Link href="/services/roller-blinds" className="text-gold hover:text-gold-light">
            roller blinds
          </Link>{" "}
          page covers light-filtering and dimout fabrics too. See the
          complete range on our main{" "}
          <Link href="/services/blinds" className="text-gold hover:text-gold-light">
            blinds
          </Link>{" "}
          page, or{" "}
          <Link href="/contact" className="text-gold hover:text-gold-light">
            contact us
          </Link>{" "}
          to book a free measuring appointment.
        </p>
      </ContentSection>

      <FAQAccordion eyebrow="FAQs" title="Blackout Blind Questions" items={faqItems} />

      <CTASection
        title="Ready for total darkness?"
        subtitle="Book a free measuring appointment and we'll recommend the right blackout style and safety fitting for your bedroom or nursery."
      />
    </>
  );
}
