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
  title: "Venetian Blinds Northern Ireland | Wood & Aluminium | Feeney",
  description:
    "Wood and aluminium venetian blinds made to measure and fitted across Crumlin, Antrim and Belfast. Precise light control for any room, free measuring service.",
  path: "/services/venetian-blinds",
});

const faqItems = [
  {
    question: "What's the difference between wood and aluminium venetians?",
    answer:
      "Wood venetian blinds bring a warm, natural look and feel that suits living rooms, home offices and period interiors, with slats typically wider than aluminium for a more substantial appearance. Aluminium venetians are lighter, more moisture-resistant and generally more affordable, making them the better choice for kitchens, bathrooms and modern spaces where practicality matters most.",
  },
  {
    question: "Are venetian blinds suitable for bathrooms?",
    answer:
      "Aluminium venetian blinds cope well with the humidity and occasional splashes in a bathroom, since the material won't warp, swell or stain the way wood can. Wood venetians are better kept to drier rooms, as prolonged moisture exposure can cause the slats to twist or discolour over time.",
  },
  {
    question: "How do you clean venetian slats?",
    answer:
      "A soft duster, microfibre cloth or the brush attachment on a vacuum cleaner will remove dust from each slat quickly, working along the blind with the slats tilted closed. For marks, aluminium slats can be wiped with a damp cloth, while wood slats should only be dusted or wiped with a barely damp cloth to avoid moisture damage.",
  },
  {
    question: "Can venetian blinds be fitted to bay windows?",
    answer:
      "Yes, venetian blinds work well in bay windows, with a separate blind measured and fitted to each pane so the angles of the bay are followed accurately. We measure each section individually during your free home visit to make sure every blind sits correctly within its own recess.",
  },
  {
    question: "Do venetian blinds block out light completely?",
    answer:
      "Venetian blinds are designed for adjustable light control rather than full blackout — closing the slats fully blocks most direct light and provides privacy, but some light will still pass through the small gaps between slats and at the edges. If you need complete darkness, a dedicated blackout roller or roman blind is a better fit.",
  },
  {
    question: "How durable are venetian blinds?",
    answer:
      "Aluminium venetian blinds are very durable and resistant to warping, making them a long-lasting option even in humid rooms. Wood venetians are also long-lasting when kept away from excess moisture, and both styles typically last well beyond a decade when made to measure and properly fitted.",
  },
];

export default function VenetianBlindsPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Venetian Blinds",
          description:
            "Made to measure wood and aluminium venetian blinds supplied and fitted across Crumlin, Antrim and Belfast.",
          path: "/services/venetian-blinds",
        })}
      />
      <JsonLd data={faqSchema(faqItems)} />

      <PageHero
        eyebrow="Venetian Blinds"
        title="Venetian Blinds —"
        italicTitle="Precise Light Control."
        subtitle="Wood and aluminium venetian blinds, made to measure and fitted across Crumlin, Antrim and Belfast."
      />

      <ContentSection eyebrow="Two Materials" title="Wood vs" italicTitle="Aluminium">
        <p>
          Venetian blinds come in two main materials, and choosing between
          them usually comes down to look, weight and where in the house the
          blind is going. Wood venetian blinds have a natural grain and
          warmth that suits living rooms, home offices and period properties
          particularly well, with slats generally a little wider and more
          substantial in feel than aluminium.
        </p>
        <p>
          Aluminium venetians are lighter, slimmer and better suited to
          rooms with moisture in the air, such as kitchens, since the metal
          won't swell, warp or discolour the way wood can over time.
          Aluminium is also generally the more budget-friendly of the two,
          without sacrificing the precise light control that makes venetian
          blinds so popular in the first place.
        </p>
        <p>
          Cost is another factor worth weighing up. Wood venetian blinds
          typically sit at a higher price point than aluminium, reflecting
          the material cost and the more premium finish they bring to a
          room. Aluminium blinds give you the same tilting slat mechanism
          and precise light control at a lower entry price, which is why
          they're often chosen for practical rooms like kitchens, utility
          spaces and children's bedrooms where budget and durability matter
          more than a decorative finish. During your free measuring visit
          we'll bring samples of both so you can compare the weight, colour
          and finish in person before deciding which suits your room and
          your budget best.
        </p>
      </ContentSection>

      <ImageContentSection
        eyebrow="Light Control"
        title="Tilt for"
        italicTitle="Precise Adjustment"
        image="/images/blinds-venetian-street-view.png"
        alt="Aluminium venetian blind with tilted slats controlling light in a large window"
      >
        <p>
          The defining feature of a venetian blind is the tilting slat
          mechanism, which lets you adjust exactly how much light enters the
          room without raising or lowering the blind at all. Tilt the slats
          slightly open for a soft, filtered light with privacy intact, or
          close them fully for near-blackout conditions and maximum privacy
          from outside.
        </p>
        <p>
          This level of control is difficult to match with roller or roman
          blinds, which is why venetians remain a favourite for rooms where
          light needs change throughout the day, such as home offices and
          south-facing living rooms.
        </p>
      </ImageContentSection>

      <ImageContentSection
        eyebrow="Best Rooms"
        title="Where Venetians"
        italicTitle="Work Best"
        image="/images/blinds-arched-window-shutters.png"
        alt="Made to measure window covering fitted in a bright, tiled bathroom"
        reverse
      >
        <p>
          Home offices benefit enormously from the glare control venetian
          blinds offer over a screen, while still allowing daylight in when
          it's needed. Living rooms suit wood venetians for their warmer,
          more decorative look, and kitchens are a natural home for
          aluminium venetians thanks to their resistance to steam and
          splashes.
        </p>
        <p>
          Bay windows and windows with an awkward reveal depth also work
          well with venetian blinds, since each pane can be measured and
          fitted individually for a tailored finish across the whole window.
        </p>
        <p>
          Bedrooms can also work well with venetian blinds, particularly
          wood venetians, where the tilting slats give a good compromise
          between darkness and airflow on warm nights when a fully sealed
          blackout blind might feel too stuffy. Hallways and stairwells with
          tall or narrow windows are another spot where venetian blinds
          often outperform other styles, since the slat mechanism copes well
          with awkward proportions that a single sheet of roller fabric can
          struggle with.
        </p>
      </ImageContentSection>

      <ContentSection eyebrow="Care" title="Cleaning &" italicTitle="Maintenance">
        <p>
          Regular dusting keeps venetian slats looking sharp — a soft
          microfibre cloth, feather duster, or the brush attachment on a
          vacuum will lift dust from each slat quickly, especially when
          worked along the blind with the slats tilted closed. For
          aluminium blinds, a lightly damp cloth can be used to remove
          fingerprints or marks without any risk of damage.
        </p>
        <p>
          Wood venetian blinds need a gentler touch — dust regularly and
          only wipe with a barely damp cloth when needed, avoiding excess
          moisture that can cause the slats to twist, swell or discolour
          over time. Keeping wood venetians out of consistently humid rooms
          will extend their lifespan considerably.
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
          For wider windows and patio doors, our{" "}
          <Link href="/services/vertical-blinds" className="text-gold hover:text-gold-light">
            vertical blinds
          </Link>{" "}
          use the same tilting principle at a larger scale. See our full
          range on the main{" "}
          <Link href="/services/blinds" className="text-gold hover:text-gold-light">
            blinds
          </Link>{" "}
          page, or{" "}
          <Link href="/contact" className="text-gold hover:text-gold-light">
            contact us
          </Link>{" "}
          to arrange a free measuring visit.
        </p>
      </ContentSection>

      <FAQAccordion eyebrow="FAQs" title="Venetian Blind Questions" items={faqItems} />

      <CTASection
        title="Considering venetian blinds?"
        subtitle="Book a free measuring appointment and we'll bring wood and aluminium samples to your home so you can compare them in your own light."
      />
    </>
  );
}
