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
  title: "Roller Blinds Made to Measure Northern Ireland | Feeney Flooring",
  description:
    "Made to measure roller blinds fitted across Crumlin, Antrim and Belfast. Plain, patterned and blackout fabrics, child-safe options, free measuring service.",
  path: "/services/roller-blinds",
});

const faqItems = [
  {
    question: "Are roller blinds waterproof or wipeable?",
    answer:
      "Many of our roller blind fabrics are PVC-coated or specifically treated for wet rooms, making them fully wipeable and resistant to steam and splashes — ideal for kitchens and bathrooms. Standard textile fabrics aren't waterproof, so if the blind is going somewhere wet we'll steer you towards the right fabric during your measuring visit.",
  },
  {
    question: "Can roller blinds be made blackout?",
    answer:
      "Yes. We offer a dedicated blackout roller fabric with a light-blocking backing that blocks out almost all daylight, perfect for bedrooms, nurseries and shift workers. If you want some light rather than total darkness, a dimout fabric softens the light without fully blocking it.",
  },
  {
    question: "Are roller blinds child-safe?",
    answer:
      "We fit roller blinds in line with UK child safety regulations, offering chainless spring-operated mechanisms as well as corded versions with a permanently fixed safety device that keeps the chain out of reach. For nurseries and children's bedrooms, we'll always recommend the chainless option.",
  },
  {
    question: "How are roller blinds measured?",
    answer:
      "We measure the width and drop of your window during a free home visit, checking whether the blind will sit inside the recess or on the face of the wall, and noting any obstructions like handles. This ensures the roller tube, brackets and fabric are all cut to fit your specific window with no gaps or overhang.",
  },
  {
    question: "Can they be fitted inside or outside the recess?",
    answer:
      "Both. A recess fit sits neatly inside the window reveal for a flush, built-in look, while a face fit is mounted on the wall or frame above the window, which works well if the recess is too shallow or you want to block more light around the edges. We'll advise on the best option when we measure your windows.",
  },
  {
    question: "How long do roller blinds last?",
    answer:
      "A well-made roller blind, properly fitted to the correct size, will typically last 8 to 10 years or more with normal use. Quality fabric, a sturdy roller tube and a mechanism that isn't straining against an ill-fitting frame all contribute to that lifespan — another reason made to measure outperforms an off the shelf blind.",
  },
];

export default function RollerBlindsPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Roller Blinds",
          description:
            "Made to measure roller blinds supplied and fitted across Crumlin, Antrim and Belfast, in plain, patterned, translucent and blackout fabrics.",
          path: "/services/roller-blinds",
        })}
      />
      <JsonLd data={faqSchema(faqItems)} />

      <PageHero
        eyebrow="Roller Blinds"
        title="Roller Blinds —"
        italicTitle="Made to Measure."
        subtitle="Clean, versatile and easy to live with — roller blinds made to measure and fitted across Crumlin, Antrim and Belfast."
      />

      <ContentSection eyebrow="The Basics" title="What Are" italicTitle="Roller Blinds?">
        <p>
          A roller blind is about as simple as window coverings get: a single
          piece of fabric wound around a headrail tube, raised and lowered
          with a chain, spring mechanism, or increasingly a motor. That
          simplicity is exactly what makes them so popular — there's very
          little to go wrong, they take up almost no depth in the window
          reveal, and they suit practically any room in the house, from a
          busy kitchen to a formal living room.
        </p>
        <p>
          Because the mechanism is so compact, roller blinds also pair well
          with curtains if you want both light control and a softer,
          layered look at the window. On their own, they give the cleanest,
          most minimal finish of any blind style we fit.
        </p>
      </ContentSection>

      <ImageContentSection
        eyebrow="Fabric Options"
        title="Plain, Patterned"
        italicTitle="& Textured"
        image="/images/blinds-venetian-street-view.png"
        alt="Made to measure blinds fitted to a large living room window"
      >
        <p>
          Roller blind fabric comes in an enormous range — plain block
          colours for a minimal look, bold patterns as a feature in an
          otherwise neutral room, and textured weaves that add depth without
          overwhelming the space. Translucent fabrics let soft daylight
          filter through while still offering daytime privacy, which is
          popular in living rooms and home offices.
        </p>
        <p>
          Whatever the room's colour scheme, there's almost always a fabric
          that complements it — we bring a full sample range to your free
          measuring visit so you can see and feel the options in your own
          light before deciding.
        </p>
      </ImageContentSection>

      <ImageContentSection
        eyebrow="Light Control"
        title="Light Filtering"
        italicTitle="vs Blackout"
        image="/images/blinds-arched-window-shutters.png"
        alt="Made to measure window covering showing precise, tailored light control"
        reverse
      >
        <p>
          Most roller fabrics are light-filtering, softening and diffusing
          daylight rather than blocking it outright — a good match for living
          rooms and kitchens where you still want brightness during the day.
          For bedrooms, nurseries and media rooms, our dedicated blackout
          roller fabric uses a light-blocking backing to shut out daylight
          almost completely.
        </p>
        <p>
          A middle-ground dimout fabric is also available, cutting most of
          the light without full blackout — a popular choice for guest
          bedrooms that don't need total darkness.
        </p>
      </ImageContentSection>

      <ContentSection eyebrow="Best Rooms" title="Where Roller Blinds" italicTitle="Work Best">
        <p>
          Kitchens are one of the best matches for roller blinds, especially
          with a wipeable, waterproof fabric that copes with steam,
          splashes and grease without staining. Living rooms and dining
          rooms suit the wider decorative fabric range, letting the blind
          double as a design feature rather than a purely functional
          covering. Home offices benefit from the glare control a roller
          blind provides over a screen or desk, without losing natural
          light entirely.
        </p>
        <p>
          Bedrooms are equally well served, particularly with a blackout or
          dimout fabric fitted for better sleep. Whatever the room, we'll
          talk through fabric and light control options relevant to how you
          actually use the space during your free measuring visit.
        </p>
      </ContentSection>

      <ContentSection eyebrow="Safety" title="Child-Safe" italicTitle="Roller Blinds">
        <p>
          UK regulations require blinds in homes to be either cordless or
          fitted with the cords and chains permanently secured out of reach
          of young children, and every roller blind we fit meets this
          standard. Chainless, spring-operated roller mechanisms remove the
          cord entirely, which is why we recommend them as standard for
          nurseries and children's bedrooms.
        </p>
        <p>
          Where a corded chain mechanism is preferred for its smoother,
          more precise operation, we fit a permanent cleat or tensioner
          device that keeps the chain fixed safely to the wall or frame,
          away from a child's reach.
        </p>
      </ContentSection>

      <ContentSection eyebrow="Looking After Them" title="Care &" italicTitle="Cleaning">
        <p>
          Roller blinds are among the easiest window coverings to keep
          looking new. A regular dust with a soft brush attachment or dry
          cloth removes most everyday buildup, and most fabrics can be spot
          cleaned with a damp cloth and mild detergent for marks or spills.
          Waterproof PVC-coated fabrics, popular in kitchens and bathrooms,
          can be wiped down directly without any risk of water damage.
        </p>
        <p>
          Avoid soaking or machine washing roller blind fabric, since this
          can warp the material or affect how smoothly it winds onto the
          tube. If in doubt, our team can advise on the right care routine
          for your specific fabric when we fit your blind.
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
          If you'd like even darker rooms, our{" "}
          <Link href="/services/blackout-blinds" className="text-gold hover:text-gold-light">
            blackout blinds
          </Link>{" "}
          page covers our dedicated blackout fabric range in more depth. For
          a full overview of every style we supply and fit, visit our main{" "}
          <Link href="/services/blinds" className="text-gold hover:text-gold-light">
            blinds
          </Link>{" "}
          page, or{" "}
          <Link href="/contact" className="text-gold hover:text-gold-light">
            get in touch
          </Link>{" "}
          to book a free measuring appointment.
        </p>
      </ContentSection>

      <FAQAccordion eyebrow="FAQs" title="Roller Blind Questions" items={faqItems} />

      <CTASection
        title="Ready for new roller blinds?"
        subtitle="Book a free measuring appointment and we'll bring fabric samples to your home so you can see them in your own light before you decide."
      />
    </>
  );
}
