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
  title: "LVT Flooring Northern Ireland | Waterproof Luxury Vinyl | Feeney",
  description:
    "Waterproof LVT flooring supplied and fitted across Antrim, Belfast and Northern Ireland. Realistic wood and stone-look luxury vinyl for kitchens and bathrooms.",
  path: "/services/lvt",
});

const faqItems = [
  {
    question: "Is LVT actually waterproof?",
    answer:
      "Yes. LVT (luxury vinyl tile) is made from multiple vinyl layers that are completely impervious to water, unlike laminate or solid wood. Spills, splashes and everyday moisture from cooking or bathing simply sit on the surface and can be wiped away without any risk of swelling, warping or water damage to the core of the board.",
  },
  {
    question: "How does LVT compare to real wood?",
    answer:
      "Modern LVT uses high-resolution printing and embossed textures to closely replicate the grain, colour and even the texture of real timber, often making it hard to tell apart at a glance. It doesn't offer the same resale prestige as genuine engineered wood, but it wins decisively on water resistance, price and low maintenance, making it a practical alternative in wet or high-traffic rooms.",
  },
  {
    question: "Is LVT slippery when wet?",
    answer:
      "Quality LVT ranges include a textured wear layer specifically designed to provide slip resistance, even when the surface is damp — an important consideration for bathrooms and kitchens. We can advise on specific slip-rated products during your free measure if this is a particular concern, such as for a family bathroom or a home with young children or older residents.",
  },
  {
    question: "Can it be fitted in a bathroom?",
    answer:
      "Yes, LVT is one of the best flooring choices for bathrooms precisely because it's fully waterproof. It handles humidity, splashing and standing water far better than laminate, carpet or solid wood. Proper subfloor preparation and sealing around fittings such as the bath and toilet are still important to get a genuinely long-lasting, watertight result.",
  },
  {
    question: "How long does LVT last?",
    answer:
      "Good quality LVT, such as the ranges we stock from Clas Sen, typically lasts 15 to 20 years with normal domestic use. Longevity depends on the thickness of the wear layer, the quality of installation, and how the room is used day to day. Correct fitting over a properly prepared subfloor makes a noticeable difference to how well it performs over time.",
  },
  {
    question: "Is it suitable for pets?",
    answer:
      "LVT is an excellent choice for homes with pets. It's scratch-resistant, fully waterproof against accidents or muddy paws, and easy to clean with a simple mop. Its slightly softer, more forgiving surface compared to hard tile also makes it a comfortable option for both pets and people to walk on throughout the day.",
  },
];

export default function LVTPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "LVT Flooring",
          description:
            "Waterproof LVT luxury vinyl tile flooring supply and fit across Antrim, Belfast and Northern Ireland.",
          path: "/services/lvt",
        })}
      />
      <JsonLd data={faqSchema(faqItems)} />

      <PageHero
        eyebrow="LVT"
        title="LVT Flooring —"
        italicTitle="Waterproof & Luxurious."
        subtitle="Realistic wood and stone-look luxury vinyl tile, fully waterproof and built for busy family homes across Antrim, Belfast and Northern Ireland."
      />

      <ContentSection eyebrow="The Basics" title="What Is" italicTitle="LVT?">
        <p>
          LVT stands for luxury vinyl tile — a resilient flooring product
          built from several bonded layers, typically including a rigid or
          flexible core, a high-resolution printed design layer, and a
          protective clear wear layer on top. This construction allows LVT to
          convincingly replicate the look of natural materials, from oak
          plank flooring to limestone or slate tile, while remaining
          completely waterproof throughout.
        </p>
        <p>
          Both wood-look and stone-look LVT are available in a wide range of
          tones and formats, from narrow planks to large-format tiles, so it
          suits both traditional and contemporary interiors equally well. We
          stock quality ranges from Clas Sen, giving you genuine choice
          without compromising on durability.
        </p>
        <p>
          LVT is sometimes fitted as individual tiles and sometimes as
          longer planks, depending on whether you're aiming for a stone-look
          or wood-look finish. Plank formats generally suit rooms wanting a
          continuous, flowing look, while tile formats work particularly well
          in bathrooms or utility rooms where a more traditional, segmented
          layout feels appropriate.
        </p>
      </ContentSection>

      <ContentSection eyebrow="Why LVT" title="Waterproof," italicTitle="Durable & Comfortable">
        <p>
          The standout benefit of LVT is its complete water resistance —
          spills, splashes and everyday moisture simply have nowhere to
          penetrate. Combined with a tough wear layer that resists scratches
          and scuffs, it's a genuinely low-maintenance flooring option for
          homes with children, pets, or simply a busy daily routine.
        </p>
        <p>
          LVT is also noticeably more comfortable underfoot than hard tile or
          stone, with a slight give that makes standing for long periods, such
          as while cooking, more comfortable. Its realistic visuals mean you
          don't have to sacrifice style for practicality.
        </p>
        <p>
          It's a quieter floor to walk across than hard tile too, with less
          of the sharp echo you get from ceramic or stone, and it stays
          noticeably warmer underfoot in the depths of winter — a small but
          genuinely appreciated difference for anyone padding around the
          kitchen first thing in the morning.
        </p>
      </ContentSection>

      <ImageContentSection
        eyebrow="Best Rooms"
        title="Where LVT"
        italicTitle="Performs Best"
        image="/images/lvt-showroom-samples.png"
        alt="A range of LVT sample boards in wood-look and stone-look finishes on display in our showroom"
      >
        <p>
          LVT comes into its own in kitchens, bathrooms, hallways and utility
          rooms — anywhere water, moisture or heavy footfall are a daily
          reality. In kitchens it stands up to dropped pans and spills; in
          bathrooms it copes with humidity and splashing; in hallways it
          handles the daily traffic of family life without showing wear.
        </p>
        <p>
          Its versatility also makes it a strong choice for open-plan spaces
          that flow between a kitchen and living area, giving a consistent,
          seamless look across rooms with very different practical demands.
        </p>
      </ImageContentSection>

      <ImageContentSection
        eyebrow="Waterproofing"
        title="Fully Waterproof,"
        italicTitle="Fully Practical"
        image="/images/lvt-showroom-samples.png"
        alt="Close-up of LVT sample boards showing realistic wood grain and stone finishes"
        reverse
      >
        <p>
          Unlike laminate, which can swell and warp if water seeps into the
          board's core, LVT's vinyl composition means water simply cannot
          penetrate the material itself. This makes it one of the few
          flooring options genuinely suitable for wet rooms, en-suites and
          areas prone to condensation, without any special sealing treatments
          required on the flooring itself.
        </p>
        <p>
          That said, proper installation still matters — sealing carefully
          around the edges, skirting and any fittings such as a toilet or
          bath ensures water can't find its way underneath the floor over
          time, which is something we take care to get right on every job.
        </p>
      </ImageContentSection>

      <ContentSection eyebrow="Installation" title="Click-Lock vs" italicTitle="Glue-Down">
        <p>
          LVT can be fitted in two main ways: click-lock planks that
          interlock into a floating floor, or glue-down tiles bonded directly
          to the subfloor. Click-lock is faster to fit and more forgiving of
          minor subfloor imperfections, while glue-down offers a very stable,
          low-profile finish that's often preferred for larger or
          high-traffic commercial-style spaces.
        </p>
        <p>
          Whichever method suits your room, a flat, clean and properly
          prepared subfloor is essential to a long-lasting result — something
          we assess and address as part of every fitting job.
        </p>
        <p>
          We'll recommend the right approach for your specific room based on
          subfloor type, moisture levels and how the space is used, rather
          than defaulting to one method for every job. Getting this decision
          right at the outset avoids problems such as lifting edges or
          uneven joins further down the line.
        </p>
      </ContentSection>

      <ContentSection eyebrow="Underfloor Heating" title="Works With" italicTitle="Underfloor Heating">
        <p>
          LVT is generally compatible with underfloor heating systems,
          conducting warmth effectively while remaining stable under the
          gentle temperature changes involved. As with any flooring over
          underfloor heating, the maximum operating temperature needs to be
          respected and the flooring allowed to acclimatise before fitting.
        </p>
        <p>
          We'll check your specific heating setup during the free measuring
          appointment and confirm the right product and installation approach
          to suit it.
        </p>
      </ContentSection>

      <div className="mx-auto max-w-4xl px-6 pb-16 lg:px-10">
        <PricingCallout
          price="£28"
          note="Final price depends on room size and preparation — book a free measure for an exact quote."
        />
      </div>

      <FAQAccordion title="LVT Questions, Answered" items={faqItems} />

      <ContentSection eyebrow="Explore More" title="Related" italicTitle="Flooring">
        <p>
          Compare LVT against our{" "}
          <Link href="/services/laminate" className="text-gold hover:text-gold-light">
            laminate flooring
          </Link>{" "}
          range, browse the full{" "}
          <Link href="/services/flooring" className="text-gold hover:text-gold-light">
            flooring collection
          </Link>
          , or{" "}
          <Link href="/contact" className="text-gold hover:text-gold-light">
            get in touch
          </Link>{" "}
          to book your free measuring appointment.
        </p>
      </ContentSection>

      <CTASection
        title="Ready for a waterproof floor that looks the part?"
        subtitle="Book a free measuring appointment and we'll help you choose the right LVT for your home."
      />
    </>
  );
}
