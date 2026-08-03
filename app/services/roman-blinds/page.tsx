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
  title: "Roman Blinds Made to Measure Northern Ireland | Feeney Flooring",
  description:
    "Made to measure roman blinds fitted across Crumlin, Antrim and Belfast. Wide fabric range, blackout lining, child-safe options, free measuring service.",
  path: "/services/roman-blinds",
});

const faqItems = [
  {
    question: "Are roman blinds child-safe?",
    answer:
      "Yes, we fit roman blinds in line with UK child safety regulations, offering cordless and chain-safety options that keep operating cords permanently secured out of a child's reach. For nurseries and children's bedrooms specifically, we'll always recommend the safest chain or cordless configuration available for your chosen fabric.",
  },
  {
    question: "Can roman blinds be lined for blackout?",
    answer:
      "Absolutely. A blackout lining can be added behind almost any roman blind fabric, blocking out daylight almost entirely while keeping the decorative front fabric of your choice visible. This makes roman blinds a popular option for bedrooms where you want a softer, more tailored look than a plain blackout roller.",
  },
  {
    question: "Are roman blinds suitable for bathrooms?",
    answer:
      "Roman blinds aren't generally recommended for bathrooms or other consistently wet, steamy rooms, since fabric folds can hold moisture and are more prone to mould or watermarking than wipeable materials like PVC roller fabric or aluminium venetian slats. They work far better in living rooms, bedrooms and dining rooms.",
  },
  {
    question: "How are roman blinds cleaned?",
    answer:
      "Regular dusting with a soft brush attachment keeps roman blinds looking fresh, and most fabrics can be spot cleaned with a damp cloth for small marks. Because the fabric is structured with folds and battens, we'd generally recommend professional cleaning for a deeper clean rather than washing at home.",
  },
  {
    question: "Do they work well in bay windows?",
    answer:
      "Yes, roman blinds suit bay windows nicely, with a separate blind measured and made for each pane so the fabric folds and battens sit correctly within each individual recess. We measure every section during your free home visit to ensure a tailored fit across the whole bay.",
  },
  {
    question: "How long do they take to make and fit?",
    answer:
      "Made to measure roman blinds typically take one to two weeks to manufacture once your final measurements and fabric choice are confirmed, with fitting itself usually taking under an hour per window. We'll give you a specific timeframe based on your chosen fabric and lining during your quote.",
  },
];

export default function RomanBlindsPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Roman Blinds",
          description:
            "Made to measure roman blinds supplied and fitted across Crumlin, Antrim and Belfast, with a wide fabric range and optional blackout lining.",
          path: "/services/roman-blinds",
        })}
      />
      <JsonLd data={faqSchema(faqItems)} />

      <PageHero
        eyebrow="Roman Blinds"
        title="Roman Blinds —"
        italicTitle="Warmth & Elegance."
        subtitle="Made to measure roman blinds with a wide fabric range, fitted across Crumlin, Antrim and Belfast."
      />

      <ContentSection eyebrow="Fabric" title="A Wide Range of" italicTitle="Patterns & Textures">
        <p>
          Roman blinds are built from fabric panels that fold into soft
          horizontal pleats as the blind is raised, giving a tailored,
          textile-rich look that plain roller or hard venetian blinds simply
          can't replicate. Because the entire blind is fabric, the range of
          patterns, weaves and textures available is vast — from bold
          statement prints to understated linen and cotton weaves that let
          the fabric itself add subtle interest to a room.
        </p>
        <p>
          This makes roman blinds a favourite for anyone who wants their
          window covering to feel like part of the room's design, rather
          than a purely functional fitting.
        </p>
        <p>
          We also offer a choice of fold styles, from a classic flat fold
          that keeps the pleats crisp and structured, to a softer, more
          relaxed fold that drapes gently even when the blind is fully
          lowered. Batten spacing can be adjusted too, giving either
          shallow, tightly stacked pleats or deeper, more dramatic folds
          depending on the look you're after. We'll talk through these
          options alongside the fabric range during your free measuring
          visit, so the finished blind matches the style of the room
          exactly.
        </p>
      </ContentSection>

      <ImageContentSection
        eyebrow="Warmth"
        title="Elegance for"
        italicTitle="Period & Traditional Interiors"
        image="/images/blinds-narrow.jpg"
        alt="Roman blind with folded fabric pleats fitted to a narrow window"
      >
        <p>
          The folded fabric structure of a roman blind adds genuine texture
          and warmth to a window, softening the hard lines of a frame in a
          way that suits period properties and traditionally styled rooms
          particularly well. The layered fabric also provides a degree of
          natural insulation, helping to buffer draughts from older single
          or double-glazed windows common across Northern Ireland homes.
        </p>
        <p>
          It's a look that pairs naturally with heavier furnishings,
          panelled walls and classic colour palettes, though a simpler
          fabric can bring the same folded elegance to a more contemporary
          room too.
        </p>
      </ImageContentSection>

      <ImageContentSection
        eyebrow="Best Rooms"
        title="Where Roman Blinds"
        italicTitle="Work Best"
        image="/images/blinds-square.jpg"
        alt="Roman blind fitted in a bedroom window"
        reverse
      >
        <p>
          Living rooms, bedrooms and dining rooms are the natural home for
          roman blinds, where their fabric-rich look can be fully
          appreciated and there's no concern about steam or splashes.
          They're a particularly strong choice for bedrooms once combined
          with blackout lining, bringing both a soft aesthetic and genuine
          light control together in one blind.
        </p>
        <p>
          We'd generally avoid roman blinds in very wet bathrooms, where a
          wipeable aluminium venetian or PVC roller fabric will hold up
          better against moisture over time.
        </p>
        <p>
          Home offices and studies also suit roman blinds well, particularly
          in older Antrim and Belfast properties where a more traditional
          look is already established through cornicing, panelling or
          period furniture. The soft, tailored finish complements these
          details in a way that a hard venetian or plain roller blind
          rarely can.
        </p>
      </ImageContentSection>

      <ContentSection eyebrow="Safety" title="Child-Safe" italicTitle="Roman Blinds">
        <p>
          As with every blind style we fit, roman blinds comply with UK
          child safety regulations, keeping any operating cords or chains
          permanently secured out of reach of young children. Cordless
          designs are available for complete peace of mind in a nursery or
          child's bedroom, while chain-operated versions come fitted with a
          safety cleat or tensioner as standard.
        </p>
        <p>
          We'll always talk through the safest configuration for the room
          during your free measuring visit, particularly where the blind is
          going into a child's bedroom.
        </p>
      </ContentSection>

      <ContentSection eyebrow="Lining" title="Blackout &" italicTitle="Thermal Lining">
        <p>
          A blackout lining can be fitted behind almost any roman blind
          fabric, blocking daylight almost entirely while keeping your
          chosen decorative fabric visible on the front of the blind — a
          popular way to darken a bedroom without giving up on pattern or
          texture. Thermal lining is also available, adding an extra layer
          of insulation against cold and heat loss through the window.
        </p>
        <p>
          Both linings add only a small amount of bulk to the folded blind
          and are measured for as part of your free home visit, so the
          finished blind still folds and hangs correctly.
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
          For total darkness in a bedroom or nursery, our{" "}
          <Link href="/services/blackout-blinds" className="text-gold hover:text-gold-light">
            blackout blinds
          </Link>{" "}
          page covers our full blackout fabric range. See every style on our
          main{" "}
          <Link href="/services/blinds" className="text-gold hover:text-gold-light">
            blinds
          </Link>{" "}
          page, or{" "}
          <Link href="/contact" className="text-gold hover:text-gold-light">
            contact us
          </Link>{" "}
          to book your free measuring appointment.
        </p>
      </ContentSection>

      <FAQAccordion eyebrow="FAQs" title="Roman Blind Questions" items={faqItems} />

      <CTASection
        title="Fancy a fabric roman blind?"
        subtitle="Book a free measuring appointment and browse our fabric samples in your own home before making a decision."
      />
    </>
  );
}
