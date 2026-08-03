import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { JsonLd, faqSchema, serviceSchema } from "@/lib/schema";
import { PageHero } from "@/components/sections/PageHero";
import { ContentSection, ImageContentSection } from "@/components/sections/ContentSection";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Made to Measure Blinds Northern Ireland | Crumlin & Antrim | Feeney",
  description:
    "Made to measure roller, venetian, vertical, roman and blackout blinds across Crumlin, Antrim and Belfast. Free measuring service included.",
  path: "/services/blinds",
});

const faqItems = [
  {
    question: "How does the measuring process work?",
    answer:
      "We visit your home free of charge and measure every window you're considering, checking the reveal depth, width and any obstructions like handles or sills. We'll talk through recess versus face fit options on the spot and give you an honest, itemised quote before you commit to anything. There's no pressure to buy — the measuring visit is simply there to make sure whatever you choose fits perfectly.",
  },
  {
    question: "What blind type is best for a bathroom or kitchen?",
    answer:
      "Aluminium venetian blinds and PVC or waterproof roller fabrics cope best with steam and splashes, since they wipe clean and won't warp or stain like fabric can. Vertical blinds with PVC vanes are another good option for wide kitchen windows. We'd generally steer you away from untreated fabric roman blinds in a wet bathroom, though a well-lined roman can still work in a kitchen away from the sink.",
  },
  {
    question: "Are your blinds child-safe?",
    answer:
      "Yes. UK safety regulations require blinds fitted in homes to either be cordless or have the cords or chains permanently out of reach of young children, and we fit every blind to comply. We offer chainless spring rollers, cleats and tensioners, and safety devices on corded venetian and roman blinds, and we'll always recommend the safest option for a child's bedroom or nursery.",
  },
  {
    question: "How long does fitting take?",
    answer:
      "Most homes are fitted in half a day to a full day, depending on the number of windows. A single roller or venetian blind typically takes 15 to 30 minutes to fit once it arrives from the manufacturer. Lead times on made to measure fabric are usually one to two weeks from your final measure and order confirmation, and we'll always give you a realistic timeframe at quote stage.",
  },
  {
    question: "Can blinds be fitted to uPVC or timber windows?",
    answer:
      "Yes, we fit blinds to uPVC, timber and aluminium windows and doors throughout Crumlin, Antrim and Belfast, including tilt and turn frames, bay windows and French or patio doors. Fixing methods vary — some frames need no-drill brackets to avoid piercing the seal on uPVC, while timber frames give us more flexibility. We'll assess your specific windows during the free measuring visit.",
  },
  {
    question: "What is the difference between blackout and dimout fabric?",
    answer:
      "Blackout fabric has a fully opaque coating or backing that blocks essentially all light, ideal for bedrooms, nurseries and shift workers who sleep during the day. Dimout fabric softens and reduces light without blocking it completely, leaving a warm glow rather than full darkness — a popular middle ground for living rooms where you still want some ambient light. Both are available across our roller, roman and vertical ranges.",
  },
  {
    question: "Do you offer both supply-only and supply-and-fit?",
    answer:
      "We primarily offer a full supply-and-fit service, since correct fitting is what makes a made to measure blind perform and look right. That said, we're happy to discuss supply-only arrangements for confident DIY fitters on a case-by-case basis. Whichever route you choose, every blind is still made to the exact measurements taken during your free home visit.",
  },
  {
    question: "How much do made to measure blinds cost?",
    answer:
      "Our made to measure blinds start from £75 per window, though the final price depends on the window size, blind type and fabric or slat choice you go for. Larger windows, patio doors, and premium fabrics such as wood venetian or lined roman will sit above that starting price. We provide a clear, itemised quote after your free measuring appointment so there are no surprises.",
  },
];

export default function BlindsPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Made to Measure Blinds",
          description:
            "Made to measure roller, venetian, vertical, roman and blackout blinds, supplied and fitted across Crumlin, Antrim and Belfast.",
          path: "/services/blinds",
        })}
      />
      <JsonLd data={faqSchema(faqItems)} />

      <PageHero
        eyebrow="Blinds"
        title="Made to Measure Blinds —"
        italicTitle="Every Window."
        subtitle="Roller, venetian, vertical, roman and blackout blinds, made to measure and fitted by hand across Crumlin, Antrim and Belfast."
      />

      <ContentSection eyebrow="Blinds, Done Properly" title="Made to Measure" italicTitle="Blinds, Northern Ireland">
        <p>
          Feeney Flooring &amp; Blinds supplies and fits made to measure blinds
          Northern Ireland homeowners can rely on, from our showroom on Main
          Street in Crumlin out across Antrim, Belfast and Lisburn. Whether
          you're covering a single kitchen window or fitting out an entire new
          build, every blind we install is measured, ordered and hung to the
          exact dimensions of your window — not squeezed off a shelf and
          hoped into place. Our blinds Crumlin Antrim customers choose us for
          the same reason they choose our flooring: a family-run team, honest
          pricing, and a job finished right the first time.
        </p>
        <p>
          We offer the full range of blind styles — roller, venetian,
          vertical, roman and blackout — in fabrics, slats and finishes to
          suit every room and budget. Every project starts with a free home
          measuring visit, where we assess your windows, talk through the
          options that suit the room, and give you a clear, itemised quote
          with no obligation. From there we handle ordering, delivery and
          fitting, so all you need to do is choose the look you want.
        </p>
        <p>
          Below you'll find a guide to each of our blind styles, along with
          answers to the questions we're asked most often by customers across
          Crumlin, Antrim and Belfast. If you already know which style suits
          your home, jump straight to the relevant page — otherwise, read on
          for an overview of what each type does best.
        </p>
      </ContentSection>

      <ImageContentSection
        eyebrow="Roller Blinds"
        title="Roller Blinds —"
        italicTitle="Clean & Versatile"
        image="/images/blinds-window.jpg"
        alt="Roller blind fitted to a living room window by Feeney Flooring & Blinds"
        cta={{ label: "Explore Roller Blinds", href: "/services/roller-blinds" }}
      >
        <p>
          Roller blinds are our most popular choice, and it's easy to see why.
          A single sheet of fabric winds neatly around a headrail, giving a
          clean, uncluttered look that suits everything from a modern kitchen
          to a period living room. They're available in an enormous range of
          plain, patterned, textured and translucent fabrics, plus dedicated
          blackout options for bedrooms.
        </p>
        <p>
          Because the mechanism is so simple, roller blinds are also
          reliable, easy to operate and straightforward to keep clean —
          making them a favourite for busy family homes and rental
          properties alike.
        </p>
      </ImageContentSection>

      <ImageContentSection
        eyebrow="Venetian Blinds"
        title="Venetian Blinds —"
        italicTitle="Precise Control"
        image="/images/blinds-square.jpg"
        alt="Wood venetian blind with slats fitted to a square window"
        reverse
        cta={{ label: "Explore Venetian Blinds", href: "/services/venetian-blinds" }}
      >
        <p>
          Venetian blinds use horizontal slats — in wood or aluminium — that
          tilt to give you exact control over light and privacy without
          losing the view entirely. Wood venetians bring warmth and texture
          to living rooms and home offices, while aluminium versions handle
          moisture and steam well, making them a smart pick for kitchens.
        </p>
        <p>
          The tilting slat mechanism means you can let light filter in at any
          angle you like, from fully open to almost closed, without pulling
          the blind up or down at all.
        </p>
      </ImageContentSection>

      <ImageContentSection
        eyebrow="Vertical Blinds"
        title="Vertical Blinds —"
        italicTitle="Doors & Large Panes"
        image="/images/blinds-cafe-shutters.jpg"
        alt="Vertical blind fitted across a large patio door window"
        cta={{ label: "Explore Vertical Blinds", href: "/services/vertical-blinds" }}
      >
        <p>
          Vertical blinds are the natural choice for patio doors,
          conservatories and oversized windows, where a roller or venetian
          simply can't cover the width. Rotating vanes give adjustable light
          control, and the whole blind can be drawn to one side like a
          curtain without ever obstructing the door.
        </p>
        <p>
          Chain-weighted vanes keep the blind stable even next to a
          frequently used door, and the fabric range extends from plain
          practical finishes through to patterned and textured options.
        </p>
      </ImageContentSection>

      <ImageContentSection
        eyebrow="Roman Blinds"
        title="Roman Blinds —"
        italicTitle="Warmth & Texture"
        image="/images/blinds-narrow.jpg"
        alt="Roman blind with folded fabric fitted to a narrow window"
        reverse
        cta={{ label: "Explore Roman Blinds", href: "/services/roman-blinds" }}
      >
        <p>
          Roman blinds fold into soft horizontal pleats when raised, giving a
          tailored, fabric-rich look that suits period properties, bedrooms
          and dining rooms beautifully. They bring genuine warmth to a room
          in a way that hard window coverings can't quite match, and the
          fabric choice is vast — from bold pattern to understated linen
          texture.
        </p>
        <p>
          Available with blackout or thermal lining, roman blinds also do
          double duty as an insulating layer against cold Northern Ireland
          winters.
        </p>
      </ImageContentSection>

      <ImageContentSection
        eyebrow="Blackout Blinds"
        title="Blackout Blinds —"
        italicTitle="Complete Darkness"
        image="/images/blinds-window.jpg"
        alt="Blackout roller blind fitted to a bedroom window blocking out light"
        cta={{ label: "Explore Blackout Blinds", href: "/services/blackout-blinds" }}
      >
        <p>
          Blackout blinds use a light-blocking backing or coating to shut out
          daylight almost entirely — ideal for bedrooms, nurseries and shift
          workers who need to sleep during the day. The blackout treatment is
          available across roller, roman and vertical styles, so you don't
          have to compromise on look to get the darkness you need.
        </p>
        <p>
          For nurseries and children's rooms we always recommend a cordless
          or chainless design, keeping the room both dark and safe.
        </p>
      </ImageContentSection>

      <ContentSection eyebrow="Why It Matters" title="Made to Measure" italicTitle="vs Off the Shelf">
        <p>
          Off the shelf blinds are cut to a small handful of standard sizes,
          which rarely matches the reality of Northern Ireland's older
          housing stock and its uneven window reveals. A blind that's even a
          centimetre too wide or narrow will either jam in the recess or
          leave unsightly gaps at the edges where light leaks in and privacy
          suffers. Made to measure blinds are manufactured to your exact
          window dimensions, down to the millimetre, so they sit flush with
          no overhang and no gaps.
        </p>
        <p>
          Choosing made to measure also opens up a far wider range of
          fabrics, slat widths, colours and control options than you'll ever
          find on a pre-cut shelf blind, letting you match the blind to the
          room rather than settling for whatever's in stock. A properly
          fitted made to measure blind also lasts significantly longer,
          since the mechanism isn't fighting against a badly sized frame
          every time it's raised or lowered.
        </p>
        <p>
          For bay windows, dormer windows and the slightly-off-square reveals
          common in period Antrim and Belfast homes, made to measure isn't
          just the better option — it's often the only one that will
          actually work well. Our free measuring visit exists precisely to
          get these details right before a single fabric is cut.
        </p>
      </ContentSection>

      <FAQAccordion eyebrow="FAQs" title="Blinds Questions, Answered" items={faqItems} />

      <CTASection
        title="Ready to measure up?"
        subtitle="Book a free measuring appointment for your windows and we'll help you choose the right blinds for every room. Read more on our roller, venetian, vertical, roman and blackout pages, or get in touch to book your visit."
      />
    </>
  );
}
