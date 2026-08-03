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
  title: "Carpet Supply & Fit Crumlin Antrim Belfast | Feeney Flooring",
  description:
    "Carpet supply and fit across Crumlin, Antrim and Belfast. Twist, loop and velvet pile carpets fitted with quality underlay by an experienced local carpet fitter.",
  path: "/services/carpet",
});

const faqItems = [
  {
    question: "What's the difference between twist and loop pile?",
    answer:
      "Twist pile carpet has yarns twisted together to create a slightly textured, hard-wearing surface that hides footprints and vacuum marks well, making it a popular all-round choice for living rooms and bedrooms. Loop pile is made from uncut yarn loops, giving a firmer, more durable surface often used in higher-traffic areas, though it can show snagging more readily with pets that have claws.",
  },
  {
    question: "How often should carpet be replaced?",
    answer:
      "Most domestic carpet lasts between 8 and 15 years depending on quality, pile type, underlay and how heavily the room is used. Bedrooms with lighter footfall often last towards the higher end of that range, while stairs and hallways tend to show wear sooner. Regular professional cleaning and a good underlay both help extend the practical lifespan.",
  },
  {
    question: "Is carpet good for allergies?",
    answer:
      "Modern carpets, particularly those with treated fibres, are generally fine for most allergy sufferers and can even trap airborne dust and allergens rather than letting them circulate, provided the carpet is vacuumed regularly. For households with more severe dust or allergen sensitivities, a shorter, denser pile is usually easier to keep clean than a longer, looser one.",
  },
  {
    question: "Does underlay really matter?",
    answer:
      "Yes, significantly. Good underlay improves comfort underfoot, adds thermal insulation, dampens sound between floors, and — importantly — reduces wear on the carpet itself by absorbing the impact of footsteps rather than the carpet backing taking the strain directly. Skimping on underlay is one of the most common reasons a carpet wears out faster than it should.",
  },
  {
    question: "Can stains be treated?",
    answer:
      "Many modern carpets, including ranges we stock from Clas Sen, come with treated, stain-resistant fibres that make everyday spills easier to blot up before they set. Prompt action always helps — blotting rather than rubbing, and using a suitable carpet-safe cleaning product. For older stains or heavier soiling, a professional carpet clean can often restore the pile significantly.",
  },
  {
    question: "What's the most durable carpet type for a busy household?",
    answer:
      "For busy households with children or pets, a hard-wearing twist pile or a good quality loop pile with stain-resistant treatment tends to perform best, particularly in a mid-to-dark tone that hides everyday marks. Pairing it with a quality underlay makes the biggest practical difference to how well it holds up over years of daily use.",
  },
];

export default function CarpetPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Carpet Supply & Fit",
          description:
            "Carpet supply and fit across Crumlin, Antrim and Belfast, including twist, loop and velvet pile carpets.",
          path: "/services/carpet",
        })}
      />
      <JsonLd data={faqSchema(faqItems)} />

      <PageHero
        eyebrow="Carpet"
        title="Carpet Supply & Fit —"
        italicTitle="Soft Underfoot."
        subtitle="Twist, loop and velvet pile carpets fitted with quality underlay by an experienced carpet fitter across Crumlin, Antrim and Belfast."
      />

      <ContentSection eyebrow="Types of Carpet" title="Twist, Loop" italicTitle="& Velvet Pile">
        <p>
          Carpet comes in several distinct pile types, each with its own look
          and practical strengths. Twist pile, made from yarns twisted
          together, offers a textured, forgiving surface that hides
          footprints well and suits almost any room in the house. Loop pile
          has an uncut, looped construction that's firm and hard-wearing,
          often chosen for higher-traffic areas, though it can be more prone
          to snagging around pet claws.
        </p>
        <p>
          Velvet or plush pile has a smooth, luxurious cut finish that looks
          wonderfully soft and formal, but shows footprints and vacuum lines
          more readily, making it better suited to lower-traffic rooms such
          as a formal living room or main bedroom where appearance matters
          more than heavy daily wear.
        </p>
        <p>
          We stock a wide range across all three pile types from Clas Sen,
          in tones from classic neutrals to richer, more contemporary
          colours, and we're always happy to bring samples out to your home
          during the free measure so you can see exactly how a carpet reads
          in your own lighting before committing.
        </p>
      </ContentSection>

      <ImageContentSection
        eyebrow="Room Guide"
        title="Carpet for Every"
        italicTitle="Room"
        image="/images/carpet-living-room.jpg"
        alt="Soft twist pile carpet fitted throughout a living room"
      >
        <p>
          Bedrooms are the classic home for carpet — soft, warm underfoot
          first thing in the morning, and generally lower traffic than the
          rest of the house, allowing softer pile types like velvet to work
          beautifully. Living rooms benefit from a hard-wearing twist pile
          that balances comfort with everyday durability.
        </p>
        <p>
          Stairs and hallways see the heaviest footfall of anywhere in the
          home, so a dense, tightly woven pile with good stain resistance is
          essential there — something we cover in more detail on our
          dedicated stair fitting page.
        </p>
        <p>
          Home offices and spare rooms tend to sit somewhere in between,
          benefiting from a durable mid-weight twist pile that can handle a
          desk chair rolling across it daily without flattening or
          discolouring over time.
        </p>
      </ImageContentSection>

      <ImageContentSection
        eyebrow="Underlay"
        title="Why Underlay"
        italicTitle="Matters"
        image="/images/carpet-natural.jpg"
        alt="Natural tone carpet fitted with quality underlay for comfort and insulation"
        reverse
      >
        <p>
          A quality underlay does far more than add softness. It provides
          thermal insulation that helps keep rooms warmer, dampens sound
          transfer between floors, and — crucially — absorbs the impact of
          footsteps so the carpet backing itself takes less strain over time.
          This can meaningfully extend the practical lifespan of the carpet
          above it.
        </p>
        <p>
          We never recommend skimping on underlay to save a small amount up
          front, since a poor underlay is one of the most common reasons a
          carpet wears out, flattens or feels uncomfortable years before it
          should.
        </p>
        <p>
          Different underlay thicknesses and densities suit different rooms
          and carpet types, so we match the underlay to the job rather than
          fitting the same product everywhere — a firmer underlay under a
          stair carpet, for instance, behaves very differently to a plush
          option beneath a bedroom carpet.
        </p>
      </ImageContentSection>

      <ContentSection eyebrow="Stain Resistance" title="Treated Fibres" italicTitle="& Everyday Life">
        <p>
          Many of the carpets we supply, including ranges from Clas Sen, come
          with treated, stain-resistant fibres designed to give spills more
          time to be blotted up before they set into the pile. This is
          particularly valuable in households with young children, pets, or
          simply a busy everyday routine where accidents happen.
        </p>
        <p>
          Treated fibres aren't a complete guarantee against staining, but
          combined with prompt cleaning and the right carpet-safe products,
          they make day-to-day life considerably easier to manage without the
          carpet showing every mark.
        </p>
        <p>
          We're happy to recommend which ranges perform best for households
          with young children or pets when you come in for your free
          measure, based on what we've genuinely seen hold up well over time
          in similar homes across Crumlin, Antrim and Belfast.
        </p>
      </ContentSection>

      <ContentSection eyebrow="On the Stairs" title="Carpet on" italicTitle="Stairs">
        <p>
          Stairs are one of the most demanding areas of the home for any
          flooring, taking constant footfall and requiring precise fitting
          around angles, nosings and edges. A well-fitted stair carpet adds
          genuine safety through improved grip, alongside noise reduction
          compared to hard flooring underfoot.
        </p>
        <p>
          Our specialist{" "}
          <Link href="/services/stair-fitting" className="text-gold hover:text-gold-light">
            stair fitting service
          </Link>{" "}
          covers everything from fully fitted stair carpet to runners, with
          the precision cutting that stairs specifically demand.
        </p>
      </ContentSection>

      <div className="mx-auto max-w-4xl px-6 pb-16 lg:px-10">
        <PricingCallout
          price="£18"
          note="Final price depends on room size and preparation — book a free measure for an exact quote."
        />
      </div>

      <FAQAccordion title="Carpet Questions, Answered" items={faqItems} />

      <ContentSection eyebrow="Explore More" title="Related" italicTitle="Flooring">
        <p>
          Learn more about our{" "}
          <Link href="/services/stair-fitting" className="text-gold hover:text-gold-light">
            specialist stair fitting service
          </Link>
          , browse the full{" "}
          <Link href="/services/flooring" className="text-gold hover:text-gold-light">
            flooring range
          </Link>
          , or{" "}
          <Link href="/contact" className="text-gold hover:text-gold-light">
            get in touch
          </Link>{" "}
          to book a free measuring appointment.
        </p>
      </ContentSection>

      <CTASection
        title="Ready for a softer, warmer home?"
        subtitle="Book a free measuring appointment and we'll help you choose the right carpet and underlay for every room."
      />
    </>
  );
}
