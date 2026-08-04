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
  title: "Laminate Flooring Crumlin | Durable & Affordable | Feeney Flooring",
  description:
    "Durable, affordable laminate flooring supplied and fitted across Crumlin and Antrim. Realistic wood-look boards for every room, fitted to a proper finish.",
  path: "/services/laminate",
});

const faqItems = [
  {
    question: "What does AC rating mean?",
    answer:
      "AC rating measures how well a laminate board resists wear, from AC1 (light domestic use, such as a bedroom) up to AC5 (heavy commercial traffic). For most homes, an AC3 or AC4 rated laminate strikes the right balance of durability and value, standing up well to hallways, living rooms and family life without paying for commercial-grade toughness you don't need.",
  },
  {
    question: "Is laminate waterproof?",
    answer:
      "No, standard laminate is not waterproof. Its core is typically a wood-fibre board that can swell or warp if water penetrates and sits for any length of time, particularly at seams and edges. Spills should be wiped up promptly. If a room is genuinely wet-prone, such as a bathroom, LVT is the more suitable and durable choice.",
  },
  {
    question: "How long does laminate last?",
    answer:
      "A good quality laminate floor, fitted correctly and looked after, typically lasts 10 to 20 years depending on the AC rating and how the room is used. Higher-traffic areas will naturally show wear sooner than a quiet spare room. Choosing the right AC rating for the room upfront makes the biggest difference to long-term durability.",
  },
  {
    question: "Can it be fitted over underfloor heating?",
    answer:
      "Many laminate products are compatible with underfloor heating, though it's important to check the manufacturer's maximum temperature guidance and use an underlay rated for underfloor heating systems. We confirm compatibility for your specific product and heating setup as part of the free measuring appointment before any fitting begins.",
  },
  {
    question: "Is laminate noisy to walk on?",
    answer:
      "Laminate can sound slightly hollow or hard underfoot compared to carpet or LVT, particularly without adequate underlay. A good quality acoustic underlay significantly reduces this effect, dampening footstep noise and adding a touch more comfort underfoot. We always recommend proper underlay rather than skipping it to save cost.",
  },
  {
    question: "Can it be fitted in a kitchen?",
    answer:
      "Laminate can be fitted in a kitchen, but it's not our first recommendation given the risk of water exposure around sinks, dishwashers and washing machines. If you love the laminate look but want genuine water resistance for a kitchen, LVT offers a very similar realistic finish with full waterproofing, making it the safer long-term choice for that room.",
  },
];

export default function LaminatePage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Laminate Flooring",
          description:
            "Durable, affordable laminate flooring supply and fit across Crumlin and Antrim.",
          path: "/services/laminate",
        })}
      />
      <JsonLd data={faqSchema(faqItems)} />

      <PageHero
        eyebrow="Laminate"
        title="Laminate Flooring —"
        italicTitle="Durable & Affordable."
        subtitle="A realistic wood-look finish at an accessible price, supplied and fitted properly across Crumlin and Antrim."
      />

      <ContentSection eyebrow="The Basics" title="What Is" italicTitle="Laminate?">
        <p>
          Laminate flooring is built from a dense wood-fibre core topped with
          a high-resolution photographic layer that replicates the look of
          natural timber, stone or tile, protected by a clear, durable wear
          layer. This construction allows laminate to deliver a very
          convincing wood-look finish at a fraction of the cost of solid or
          engineered wood.
        </p>
        <p>
          Because the design layer is printed rather than a natural veneer,
          laminate can offer incredibly consistent colour and pattern across
          a whole room, along with styles and finishes — from rustic oak to
          contemporary grey tones — that wouldn't always be available or
          affordable in real wood.
        </p>
        <p>
          Modern laminate has come a long way from the shinier, less
          convincing boards of years past. Today's better ranges include
          embossed textures that align with the printed grain, so the
          surface genuinely feels like timber underfoot as well as looking
          like it, closing much of the visual gap with engineered wood.
        </p>
      </ContentSection>

      <ContentSection eyebrow="Choosing the Right Grade" title="AC Ratings" italicTitle="Explained">
        <p>
          Laminate is graded by an Abrasion Class, or AC rating, from AC1
          through AC5, indicating how much wear and foot traffic it's
          designed to withstand. AC1 and AC2 suit low-traffic domestic rooms
          such as bedrooms, while AC3 and AC4 are better suited to living
          rooms, hallways and busier family spaces. AC5 is generally reserved
          for heavy commercial environments and is rarely needed at home.
        </p>
        <p>
          We help you match the right AC rating to how each room is actually
          used, so you're not overpaying for durability you don't need, or
          under-specifying a hallway that sees heavy daily traffic.
        </p>
        <p>
          It's a conversation we have honestly at the free measuring
          appointment — there's little point paying for a commercial-grade
          board in a rarely used spare room, but equally, a busy family
          hallway deserves a higher rating than the cheapest option on the
          shelf.
        </p>
      </ContentSection>

      <ImageContentSection
        eyebrow="Best Rooms"
        title="Where Laminate"
        italicTitle="Works Best"
        image="/images/flooring-samples-display.png"
        alt="Laminate flooring sample boards and swatches in a range of realistic wood-look finishes"
      >
        <p>
          Laminate performs best in living rooms, bedrooms, hallways and
          dining rooms — spaces where its realistic wood-look finish and
          durability can shine without the risk of significant water
          exposure. It's a particularly strong choice for homeowners wanting
          a fresh, updated look across several rooms without the cost of
          engineered wood throughout.
        </p>
        <p>
          For rooms with a higher risk of spills or moisture, such as
          kitchens or bathrooms, we'd generally steer you toward LVT instead,
          which offers a similarly realistic finish with full waterproofing.
        </p>
      </ImageContentSection>

      <ImageContentSection
        eyebrow="Installation"
        title="Floating Floor"
        italicTitle="Fitting"
        image="/images/wood-floor-kitchen.png"
        alt="Wide-plank wood-look flooring showing realistic plank joints and finish detail"
        reverse
      >
        <p>
          Laminate is installed as a floating floor, meaning the boards
          click-lock together rather than being fixed directly to the
          subfloor. A quality underlay sits beneath the boards, providing
          cushioning, sound dampening and a moisture barrier where needed —
          never a step we skip, as it makes a real difference to comfort and
          longevity.
        </p>
        <p>
          A small expansion gap is left around the perimeter of the room to
          allow the floor to expand and contract naturally with temperature
          changes, which is then hidden neatly behind skirting boards or
          scotia beading for a clean, professional finish.
        </p>
        <p>
          We also take care with doorways and transitions to other flooring
          types, fitting the correct trim so the join looks intentional
          rather than like an afterthought — a small detail that makes a
          noticeable difference to the overall finish of a room.
        </p>
      </ImageContentSection>

      <ContentSection eyebrow="Making the Choice" title="Laminate vs" italicTitle="LVT">
        <p>
          Laminate and LVT are often compared, and honestly, each has its
          place. Laminate tends to offer a slightly more realistic wood
          texture at entry-level price points and can feel a touch warmer
          underfoot in some ranges. LVT, on the other hand, wins decisively
          on water resistance — it's fully waterproof where laminate is not —
          and generally handles humidity and spills with far less risk of
          long-term damage.
        </p>
        <p>
          If budget is the priority and the room sees limited moisture,
          laminate is a smart, attractive choice. If the room is wet-prone —
          a kitchen, bathroom or utility room — LVT is almost always the
          better long-term investment, and we'll say so honestly during your
          free measure.
        </p>
      </ContentSection>

      <div className="mx-auto max-w-4xl px-6 pb-16 lg:px-10">
        <PricingCallout
          price="£22"
          note="Final price depends on room size and preparation — book a free measure for an exact quote."
        />
      </div>

      <FAQAccordion title="Laminate Questions, Answered" items={faqItems} />

      <ContentSection eyebrow="Explore More" title="Related" italicTitle="Flooring">
        <p>
          See how laminate compares to{" "}
          <Link href="/services/lvt" className="text-gold hover:text-gold-light">
            waterproof LVT flooring
          </Link>
          , browse our full{" "}
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
        title="Ready for an affordable, durable new floor?"
        subtitle="Book a free measuring appointment and we'll help you choose the right laminate for your home and budget."
      />
    </>
  );
}
