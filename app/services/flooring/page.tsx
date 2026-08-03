import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { JsonLd, faqSchema, serviceSchema } from "@/lib/schema";
import { PageHero } from "@/components/sections/PageHero";
import { ContentSection, ImageContentSection } from "@/components/sections/ContentSection";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Flooring Supply & Fit Crumlin | LVT, Engineered Wood, Carpet | Feeney",
  description:
    "Expert flooring supply and fit across Crumlin, Antrim and Belfast. LVT, engineered wood, laminate, carpet and stair fitting. Free measuring service included.",
  path: "/services/flooring",
});

const faqItems = [
  {
    question: "What flooring is best for pets and children?",
    answer:
      "For busy households with pets and children, LVT and engineered wood are usually the best choices. LVT is fully waterproof, scratch-resistant and easy to wipe clean after muddy paws or spilled juice, making it ideal for kitchens and hallways. Engineered wood with a tough lacquered finish also copes well with everyday scuffs. Carpet with treated, stain-resistant fibres remains a comfortable, safe option for bedrooms and playrooms where softness underfoot matters more than spill-proofing.",
  },
  {
    question: "Which floors work with underfloor heating?",
    answer:
      "Engineered wood, LVT and laminate are all compatible with underfloor heating when fitted correctly, as they conduct and tolerate heat far better than solid wood. The key is controlling the maximum temperature and allowing the floor to acclimatise properly before fitting. Carpet can also be used over underfloor heating, though a thinner underlay is recommended so heat can pass through efficiently. We'll advise on the right underlay and fitting method during your free measure.",
  },
  {
    question: "What is the difference between LVT and laminate?",
    answer:
      "LVT (luxury vinyl tile) is a fully waterproof, flexible plank made from vinyl layers, making it ideal for bathrooms, kitchens and wet areas. Laminate is a rigid board with a high-resolution photographic wear layer over a wood-fibre core, giving a very realistic timber look at a lower price point, but it is not waterproof and can swell if water sits on it. LVT generally costs more but offers superior water resistance and a softer, warmer feel underfoot.",
  },
  {
    question: "How long does fitting take?",
    answer:
      "Most single rooms are measured, prepared and fitted within a day, though larger or more complex jobs such as whole-house engineered wood or herringbone patterns can take two to three days. Stairs typically add half a day due to the precision cutting involved. We'll give you an accurate timescale for your specific project at the free measuring appointment, based on room size, subfloor condition and the flooring type chosen.",
  },
  {
    question: "Do you supply only or supply and fit?",
    answer:
      "We offer both. Many customers choose our full supply and fit service so the entire job — from product selection to subfloor preparation and final fitting — is handled by one experienced local team. If you prefer to fit the flooring yourself or already have a fitter, we're also happy to supply quality product from Ville and Clas Sen on its own, with guidance on the right underlay and fitting approach.",
  },
  {
    question: "How much does engineered wood flooring cost?",
    answer:
      "Engineered wood flooring starts from around £45 per m² supplied and fitted, though the final figure depends on the specific board, finish and pattern chosen — herringbone, for example, involves more cutting and labour than standard plank. Room size, subfloor condition and any prep work also affect the total. The most accurate way to get a true cost is a free home measuring appointment, after which we provide an honest, itemised quote.",
  },
  {
    question: "What is the best flooring for a kitchen?",
    answer:
      "LVT is generally the best all-round choice for kitchens thanks to its full waterproofing, comfort underfoot and resistance to dropped pans and scuffing. Engineered wood can also work well in kitchens with a good lacquer finish and careful spill management, giving a warmer, more premium look. Laminate is a budget-friendly option but is more vulnerable to water damage around sinks and dishwashers, so it suits kitchens with careful daily use rather than heavy spillage.",
  },
  {
    question: "How long does LVT last?",
    answer:
      "Good quality LVT, such as the ranges we stock from Clas Sen, typically lasts 15 to 20 years in a domestic setting with normal use, and often longer in lower-traffic rooms. Its wear layer thickness determines how well it resists scratching and fading over time, and correct installation over a properly prepared subfloor makes a significant difference to long-term performance. Simple routine cleaning is usually all that's needed to keep it looking new for years.",
  },
];

export default function FlooringHubPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Flooring Supply & Fit",
          description:
            "Flooring supply and fit across Crumlin, Antrim and Belfast, including LVT, engineered wood, laminate, carpet and stair fitting.",
          path: "/services/flooring",
        })}
      />
      <JsonLd data={faqSchema(faqItems)} />

      <PageHero
        eyebrow="Flooring"
        title="Premium Flooring —"
        italicTitle="Measured & Fitted."
        subtitle="From herringbone engineered wood to waterproof LVT and soft-underfoot carpet, we supply and fit every type of flooring across Crumlin, Antrim and Belfast."
      />

      <ContentSection eyebrow="Our Range" title="Flooring Supply" italicTitle="& Fit in Crumlin">
        <p>
          Feeney Flooring &amp; Blinds provides a complete flooring supply fit
          Crumlin service, covering every room of the house and every budget.
          Whether you're after the warmth and character of engineered wood,
          the practicality of waterproof LVT, the value of laminate, or the
          comfort of a well-fitted carpet, our team measures, supplies and
          fits it properly the first time. As a trusted carpet fitter Antrim
          homeowners have relied on since 2017, we bring genuine craftsmanship
          to every job, from a single bedroom to a full house renovation.
        </p>
        <p>
          Every flooring project begins with a free home measuring
          appointment. Kevin and the team visit your property, assess the
          subfloor, discuss your lifestyle and budget, and talk you through
          which product suits your space best — whether that's underfloor
          heating compatibility, pet-proofing, or simply getting the colour
          right against your existing decor. You'll leave with an honest,
          itemised quote and no pressure to commit on the spot.
        </p>
        <p>
          We work with trusted brands including Ville for engineered wood and
          herringbone flooring, and Clas Sen for LVT, laminate and carpet,
          giving you access to quality product backed by proper fitting
          expertise. From first-time buyers refreshing a single room to
          families renovating a whole house, our approach stays the same:
          listen to how the room is actually used, recommend the flooring
          that genuinely suits it, and fit it to a standard we'd be happy
          with in our own home. Explore each flooring type below to find the
          right fit for your home, or get in touch to arrange your{" "}
          <Link href="/contact" className="text-gold hover:text-gold-light">
            free measuring appointment
          </Link>{" "}
          today.
        </p>
      </ContentSection>

      <ImageContentSection
        eyebrow="Engineered Wood"
        title="Engineered Wood &"
        italicTitle="Herringbone"
        image="/images/herringbone-living-room-hero.png"
        alt="Ville Burriana Oak herringbone engineered wood flooring installed in a bright living room"
        cta={{ label: "Explore Engineered Wood", href: "/services/engineered-wood" }}
      >
        <p>
          Our most requested product is the Ville Burriana Oak herringbone —
          a striking, symmetrical pattern that transforms an ordinary room
          into something genuinely editorial. Engineered wood offers the
          warmth and grain of real timber with far greater stability than
          solid wood, making it suitable for a wider range of homes,
          including those with underfloor heating.
        </p>
        <p>
          Beyond herringbone, we also fit classic plank engineered wood for
          those who prefer a simpler, more traditional look. Either way,
          you're getting a floor that adds genuine resale value and lasts for
          decades when properly cared for.
        </p>
      </ImageContentSection>

      <ImageContentSection
        eyebrow="LVT"
        title="Waterproof"
        italicTitle="Luxury Vinyl"
        image="/images/lvt-showroom-samples.png"
        alt="A range of waterproof LVT luxury vinyl tile samples on display in our showroom"
        reverse
        cta={{ label: "Explore LVT", href: "/services/lvt" }}
      >
        <p>
          LVT is the practical choice for kitchens, bathrooms, hallways and
          utility rooms where water and heavy footfall are a daily reality.
          Fully waterproof and available in realistic wood-look and
          stone-look finishes, it delivers the appearance of a premium floor
          without the vulnerability of natural materials.
        </p>
        <p>
          It's also comfortable underfoot, quieter to walk on than hard
          flooring, and simple to keep clean — a genuinely low-maintenance
          option for busy family homes across Antrim and Belfast.
        </p>
      </ImageContentSection>

      <ImageContentSection
        eyebrow="Laminate"
        title="Durable &"
        italicTitle="Affordable"
        image="/images/flooring-samples.jpg"
        alt="Laminate flooring sample boards showing realistic wood grain photographic finish"
        cta={{ label: "Explore Laminate", href: "/services/laminate" }}
      >
        <p>
          Laminate remains one of the most popular choices for homeowners who
          want the look of real wood at a more accessible price point. Its
          photographic wear layer gives a convincingly realistic grain and
          colour, while the rigid board construction stands up well to
          everyday family life in living rooms, hallways and bedrooms.
        </p>
        <p>
          With AC ratings to suit everything from a quiet spare room to a
          busy hallway, we help you choose the right grade for how the room
          will actually be used, then fit it as a properly finished floating
          floor with correct expansion gaps.
        </p>
      </ImageContentSection>

      <ImageContentSection
        eyebrow="Carpet"
        title="Soft"
        italicTitle="Underfoot"
        image="/images/carpet-living-room.jpg"
        alt="Soft twist pile carpet fitted in a living room by Feeney Flooring & Blinds"
        reverse
        cta={{ label: "Explore Carpet", href: "/services/carpet" }}
      >
        <p>
          For bedrooms and living rooms, nothing beats the comfort of a
          quality carpet. We supply and fit twist, loop and velvet piles from
          Clas Sen, paired with the right underlay to maximise both comfort
          and lifespan. Treated fibres offer genuine stain resistance for
          households with children, pets, or simply busy everyday life.
        </p>
        <p>
          As an established carpet fitter Antrim families trust, we take the
          time to get seams, doorways and skirting details right — the small
          things that separate a professional finish from a DIY job.
        </p>
      </ImageContentSection>

      <ImageContentSection
        eyebrow="Stair Fitting"
        title="Stairs,"
        italicTitle="Done Properly"
        image="/images/stair-carpet.jpg"
        alt="Neatly fitted stair carpet showing precise edge and nosing finish"
        cta={{ label: "Explore Stair Fitting", href: "/services/stair-fitting" }}
      >
        <p>
          Stairs take more daily wear than almost any other surface in the
          home, and they demand a level of fitting precision that flat rooms
          simply don't. Angled cuts, secure edges and correctly fitted
          nosings are essential for both safety and appearance.
        </p>
        <p>
          Whether you want fully fitted stair carpet, a runner over bare
          timber, or a hard flooring solution, our specialist stair fitting
          service handles the detail work that makes stairs safe and
          good-looking for years to come.
        </p>
      </ImageContentSection>

      <FAQAccordion title="Flooring Questions, Answered" items={faqItems} />

      <CTASection
        title="Ready to transform your floors?"
        subtitle="Book a free home measuring appointment across Crumlin, Antrim or Belfast and get an honest, itemised quote for your project."
      />
    </>
  );
}
