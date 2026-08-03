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
  title: "Engineered Wood Flooring Crumlin & Antrim | Ville Stockist | Feeney",
  description:
    "Engineered wood and herringbone flooring supplied and fitted in Crumlin and Antrim. Official Ville stockist specialising in Burriana Oak herringbone.",
  path: "/services/engineered-wood",
});

const faqItems = [
  {
    question: "Is engineered wood real wood?",
    answer:
      "Yes. Engineered wood flooring has a genuine hardwood veneer on top — typically oak — bonded to layers of plywood or high-density fibreboard beneath. It looks, feels and can even be sanded like solid wood, but the layered construction makes it far more dimensionally stable, so it copes better with changes in humidity and temperature than a single solid plank would.",
  },
  {
    question: "Can it be fitted over underfloor heating?",
    answer:
      "Most engineered wood is suitable for underfloor heating, unlike solid wood, because the layered core is more stable under temperature changes. The maximum floor temperature needs to be controlled and the flooring properly acclimatised to the room before fitting. We check compatibility with your specific heating system during the free measure and advise on the correct fitting method.",
  },
  {
    question: "How long does engineered wood flooring last?",
    answer:
      "A quality engineered wood floor, properly fitted and maintained, can easily last 25 to 30 years or more. The thickness of the top hardwood veneer determines how many times it can be sanded and refinished over its lifetime, extending its usable life significantly beyond that of many other flooring types.",
  },
  {
    question: "Can it be sanded or refinished?",
    answer:
      "Yes, provided the top veneer layer is thick enough — most quality engineered boards, including the Ville range we stock, have a veneer that can be sanded and refinished at least once or twice over the floor's lifetime. This means scratches, wear patches or a change in finish colour can be addressed without replacing the entire floor.",
  },
  {
    question: "Is herringbone more expensive to fit than plank?",
    answer:
      "Herringbone typically costs a little more to fit than standard straight plank, because it requires more precise cutting, careful setting-out from the centre of the room, and a slower, more skilled installation process to keep the pattern symmetrical. The material cost can be similar, but the extra labour and expertise involved reflect the more elaborate finished result.",
  },
  {
    question: "What rooms suit engineered wood best?",
    answer:
      "Engineered wood works beautifully in living rooms, hallways, dining rooms and kitchens where you want warmth and character underfoot. It's less suited to genuinely wet areas like bathrooms or utility rooms, where LVT is a better fit. Herringbone in particular makes a real style statement in hallways and living spaces where its pattern can be appreciated at scale.",
  },
];

export default function EngineeredWoodPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Engineered Wood Flooring",
          description:
            "Engineered wood and herringbone flooring supply and fit in Crumlin and Antrim, official Ville stockist.",
          path: "/services/engineered-wood",
        })}
      />
      <JsonLd data={faqSchema(faqItems)} />

      <PageHero
        eyebrow="Engineered Wood"
        title="Engineered Wood Flooring —"
        italicTitle="Ville Stockist."
        subtitle="Real timber character with the stability to suit modern homes. As an official Ville stockist, we specialise in the Burriana Oak herringbone across Crumlin and Antrim."
      />

      <ContentSection eyebrow="The Basics" title="What Is" italicTitle="Engineered Wood?">
        <p>
          Engineered wood flooring is built from several layers: a genuine
          hardwood veneer, usually oak, bonded on top of layers of plywood or
          high-density fibreboard running in alternating grain directions.
          This cross-layered construction is what gives engineered wood its
          key advantage over solid timber — it resists the expansion and
          contraction that comes with changes in humidity and temperature,
          making it far more stable in real family homes.
        </p>
        <p>
          The result is a floor that looks and feels exactly like solid wood
          underfoot — genuine grain, natural colour variation, and the warmth
          only real timber provides — but with the practical benefits of a
          modern engineered product, including wider compatibility with
          underfloor heating and a lower risk of gapping or cupping over
          time.
        </p>
        <p>
          As an official Ville stockist, we've built our engineered wood
          service around a brand we genuinely trust — one known for
          consistent board thickness, a durable factory-applied lacquer, and
          colour ranges that suit both traditional and contemporary Northern
          Irish homes. Every board is inspected before fitting begins, so any
          natural variation in the timber is worked with, not against, when
          we lay out the room.
        </p>
      </ContentSection>

      <ContentSection eyebrow="Why Choose It" title="Durability," italicTitle="Warmth & Value">
        <p>
          Engineered wood offers a rare combination: the durability to handle
          everyday family life, the warmth of a natural material underfoot,
          and a noticeable boost to a home's resale value. Buyers consistently
          respond well to genuine wood flooring, and it's often cited as one
          of the more valuable finishing touches a homeowner can make before
          selling.
        </p>
        <p>
          It's also more versatile than solid wood in terms of where it can
          be fitted — including over most underfloor heating systems — while
          still offering the option to sand and refinish the surface in years
          to come, extending its lifespan well beyond many alternative
          flooring types.
        </p>
        <p>
          Many of our customers choose engineered wood specifically because
          it bridges a gap other flooring types can't: the authenticity of a
          natural material with the everyday practicality a busy household
          needs. It handles the school-run scuffs, the dropped kitchen
          utensils and the general wear of family life far more gracefully
          than people expect from a genuinely premium floor.
        </p>
      </ContentSection>

      <ImageContentSection
        eyebrow="Signature Product"
        title="Ville Burriana Oak"
        italicTitle="Herringbone"
        image="/images/herringbone-close-up.jpg"
        alt="Close-up of Ville Burriana Oak herringbone engineered wood flooring grain and pattern"
        productLabel="Ville Burriana Oak"
      >
        <p>
          The Ville Burriana Oak herringbone is, without question, our most
          requested flooring product. Its angled block pattern creates a
          sense of movement and craftsmanship that a straight plank simply
          can't match, turning a hallway or living room into a genuine
          feature of the home.
        </p>
        <p>
          Fitting herringbone properly is a skill in itself. Every job starts
          by finding the true centre of the room, so the pattern reads
          symmetrically from the main sightline rather than drifting off to
          one side. Each block is then precisely angle-cut and set by hand —
          slower and more exacting than standard plank fitting, but the
          result is a floor with genuine visual weight and character.
        </p>
      </ImageContentSection>

      <ContentSection eyebrow="The Process" title="Installation &" italicTitle="Timescales">
        <p>
          Every engineered wood job begins with a free home measuring
          appointment, where we assess the subfloor, check moisture levels,
          and confirm the right product and finish for your space. The
          flooring is then left to acclimatise to your home's temperature and
          humidity for a period before fitting begins, which helps prevent
          movement once it's down.
        </p>
        <p>
          Subfloor preparation — levelling, cleaning and, where needed,
          fitting an appropriate underlay or moisture barrier — is essential
          to a long-lasting result and is never skipped. A standard room can
          usually be fitted within a single day; herringbone or larger
          multi-room projects may take two to three days given the extra
          precision involved.
        </p>
      </ContentSection>

      <ContentSection eyebrow="Aftercare" title="Caring for Your" italicTitle="Engineered Wood">
        <p>
          Engineered wood is easy to live with day-to-day. Regular sweeping
          or vacuuming, combined with an occasional damp (not wet) mop using
          a wood-safe cleaner, keeps it looking its best. Standing water
          should always be avoided and wiped up promptly, since excess
          moisture is the main risk to any wood-based floor.
        </p>
        <p>
          Felt pads under furniture legs prevent scratching and dents, and
          it's worth avoiding stiletto heels or dragging heavy furniture
          across the surface. Because the top layer is genuine hardwood, it
          can also be sanded and refinished in future if it ever needs
          restoring to its original shine.
        </p>
        <p>
          A doormat at exterior entrances goes a long way toward keeping grit
          and moisture off the floor, and window blinds or curtains can help
          reduce colour fading from prolonged direct sunlight in south-facing
          rooms. Beyond that, engineered wood is genuinely low-fuss —
          designed to be lived on, not tiptoed around.
        </p>
      </ContentSection>

      <div className="mx-auto max-w-4xl px-6 pb-16 lg:px-10">
        <PricingCallout
          price="£45"
          note="Final price depends on room size and preparation — book a free measure for an exact quote."
        />
      </div>

      <FAQAccordion title="Engineered Wood Questions, Answered" items={faqItems} />

      <ContentSection eyebrow="Explore More" title="Related" italicTitle="Flooring">
        <p>
          See our full{" "}
          <Link href="/services/flooring" className="text-gold hover:text-gold-light">
            flooring range
          </Link>{" "}
          for other options, including waterproof{" "}
          <Link href="/services/lvt" className="text-gold hover:text-gold-light">
            LVT flooring
          </Link>
          , or{" "}
          <Link href="/contact" className="text-gold hover:text-gold-light">
            get in touch
          </Link>{" "}
          to book your free measuring appointment.
        </p>
      </ContentSection>

      <CTASection
        title="Ready for a herringbone floor of your own?"
        subtitle="Book a free measuring appointment and let's talk through the right engineered wood option for your home."
      />
    </>
  );
}
