import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { JsonLd, faqSchema, serviceSchema } from "@/lib/schema";
import { PageHero } from "@/components/sections/PageHero";
import { ContentSection, ImageContentSection } from "@/components/sections/ContentSection";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Stair Carpet & Flooring Fitting Northern Ireland | Feeney",
  description:
    "Specialist stair carpet and flooring fitting across Crumlin, Antrim and Belfast. Precise, safe fitting for the highest-wear area of your home.",
  path: "/services/stair-fitting",
});

const faqItems = [
  {
    question: "Is carpet safer than hard flooring on stairs?",
    answer:
      "Generally, yes. Carpet provides natural grip and cushioning underfoot, which reduces slip risk and softens the impact of a stumble compared to a hard surface. Hard flooring on stairs can still be fitted safely, but it requires careful attention to slip-resistant finishes, secure nosings and adequate lighting to minimise risk, particularly for households with young children or older residents.",
  },
  {
    question: "What is a stair runner?",
    answer:
      "A stair runner is a strip of carpet fitted down the centre of the stairs, leaving the timber exposed and visible at the edges, rather than covering the full width of each tread. It's a popular choice for period homes or where a homeowner wants to show off original or refinished timber stairs while still adding grip, comfort and noise reduction to the centre of each step.",
  },
  {
    question: "How long does stair fitting take?",
    answer:
      "Most staircases can be fitted within half a day to a full day, depending on the number of steps, any turns or landings, and whether it's a full stair carpet or a runner. Complex staircases with winders or unusual angles take longer due to the additional precision cutting required at each change of direction.",
  },
  {
    question: "Can herringbone or LVT be fitted on stairs?",
    answer:
      "Yes, hard flooring including engineered wood herringbone and LVT can be fitted on stairs, though it demands a high level of fitting precision to get nosings, edges and angled cuts right, and typically needs slip-resistant strips or finishes added to each tread for safety. It creates a striking, seamless look when the same flooring continues from an adjoining room onto the stairs.",
  },
  {
    question: "How much does stair carpet cost?",
    answer:
      "Stair carpet pricing depends on the number of steps, the carpet quality chosen, and whether it's a full fit or a runner, so there's no single flat rate. As a guide, our carpet range starts from £18 per m² supplied and fitted, with stairs typically priced per step once measured. The most accurate way to get an exact cost is a free home measuring appointment.",
  },
];

export default function StairFittingPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Stair Fitting",
          description:
            "Specialist stair carpet and flooring fitting across Crumlin, Antrim and Belfast.",
          path: "/services/stair-fitting",
        })}
      />
      <JsonLd data={faqSchema(faqItems)} />

      <PageHero
        eyebrow="Stair Fitting"
        title="Stair Fitting —"
        italicTitle="Done Properly."
        subtitle="Stairs take more daily wear than any other surface in the home. Our specialist fitting gets the angles, nosings and safety details right, every time."
      />

      <ImageContentSection
        eyebrow="Why It's Different"
        title="Specialist Fitting"
        italicTitle="for Stairs"
        image="/images/stair-carpet-full.jpg"
        alt="Precisely fitted stair carpet running the full length of a staircase"
      >
        <p>
          Fitting flooring on stairs is a genuinely different skill from
          fitting a flat room. Every step involves angled cuts, exposed
          edges, and a nosing — the rounded front lip of each tread — that
          all need to be measured and finished precisely. Get it wrong and
          you end up with lifting edges, uneven pattern lines, or a trip
          hazard waiting to happen.
        </p>
        <p>
          Stairs are also one of the highest-wear areas of any home, taking
          repeated footfall from everyone in the household multiple times a
          day. That combination of precision fitting and heavy daily use is
          exactly why stair fitting deserves specialist attention rather than
          being treated as an afterthought to a room-based flooring job.
        </p>
        <p>
          Every staircase we measure is treated as its own project, not a
          simple extension of an adjoining room. We check each individual
          tread for width, depth and squareness before ordering material,
          because even small variations from step to step can throw off a
          pattern or leave an edge unsupported if they're not accounted for
          in advance.
        </p>
      </ImageContentSection>

      <ContentSection eyebrow="The Trade-Offs" title="Carpet vs Hard" italicTitle="Flooring on Stairs">
        <p>
          Carpet remains the most popular choice for stairs, and for good
          reason — it offers natural grip underfoot, cushions the impact of a
          missed step, and significantly reduces noise compared to a hard
          surface. For households with young children, older residents, or
          simply a preference for a quieter home, carpet is usually the
          safer and more comfortable option.
        </p>
        <p>
          Hard flooring, including engineered wood herringbone or LVT, can
          also be fitted on stairs and creates a striking, seamless look when
          continued from an adjoining room. However, it demands more careful
          attention to slip resistance, typically through textured finishes
          or discreet anti-slip strips on each tread, along with very precise
          cutting around every nosing and edge.
        </p>
        <p>
          We're always upfront about which option suits a particular
          household. A young family or a home with older residents will
          usually be steered toward carpet for the added grip and softness,
          while a household without those concerns might prioritise the
          striking, uninterrupted look of hard flooring continuing up from
          the hallway below.
        </p>
      </ContentSection>

      <ContentSection eyebrow="Style Options" title="Runner vs" italicTitle="Fully Fitted">
        <p>
          A fully fitted stair carpet covers the entire width of each tread
          edge to edge, giving a complete, uniform look that suits most
          contemporary homes. It's the most common choice and offers the
          fullest coverage in terms of comfort, grip and noise reduction
          across the whole staircase.
        </p>
        <p>
          A stair runner, by contrast, is a narrower strip of carpet fitted
          down the centre of the stairs, leaving the timber visible at the
          edges — sometimes finished with traditional stair rods for a more
          period, decorative look. It's a popular choice where a homeowner
          wants to showcase original or refinished timber while still adding
          comfort and grip where it's needed most.
        </p>
        <p>
          There's no single right answer between the two — it comes down to
          the character of the staircase itself, the wider style of the
          home, and how much of the original timber is worth showing off. We
          talk through both options honestly during the free measure, using
          photos of previous work to help you picture the finished result.
        </p>
      </ContentSection>

      <ContentSection eyebrow="Safety" title="Getting the Safety" italicTitle="Details Right">
        <p>
          Whatever flooring you choose for your stairs, a few safety details
          matter more here than almost anywhere else in the home. Slip
          resistance is essential, whether that comes naturally from a carpet
          pile or is added through textured finishes on hard flooring.
          Securing every edge properly — particularly at nosings, where feet
          make first contact with each step — prevents lifting, curling or
          catching over time.
        </p>
        <p>
          We take the same careful, methodical approach to every staircase we
          fit, checking each tread individually rather than treating the
          whole run as a single uniform surface, because in reality every
          stair can vary slightly in width, depth or angle.
        </p>
        <p>
          Good lighting, secure handrails and a non-slip finish work together
          with the flooring itself to make a staircase genuinely safe, not
          just good-looking. If we notice anything else during the free
          measure that could affect the safety of your stairs, we'll flag it
          honestly, even if it falls outside the flooring work itself.
        </p>
      </ContentSection>

      <FAQAccordion title="Stair Fitting Questions, Answered" items={faqItems} />

      <ContentSection eyebrow="Explore More" title="Related" italicTitle="Flooring">
        <p>
          Browse our full{" "}
          <Link href="/services/carpet" className="text-gold hover:text-gold-light">
            carpet range
          </Link>
          , see the complete{" "}
          <Link href="/services/flooring" className="text-gold hover:text-gold-light">
            flooring collection
          </Link>
          , or{" "}
          <Link href="/contact" className="text-gold hover:text-gold-light">
            get in touch
          </Link>{" "}
          to book a free measuring appointment for your stairs.
        </p>
      </ContentSection>

      <CTASection
        title="Ready to get your stairs done properly?"
        subtitle="Book a free measuring appointment and we'll advise on the safest, best-looking option for your staircase."
      />
    </>
  );
}
