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
  title: "Vertical Blinds Northern Ireland | Patio Doors & Large Windows",
  description:
    "Made to measure vertical blinds for patio doors, conservatories and large windows across Crumlin, Antrim and Belfast. Free measuring service included.",
  path: "/services/vertical-blinds",
});

const faqItems = [
  {
    question: "Are vertical blinds good for patio doors?",
    answer:
      "Yes, vertical blinds are one of the best options for patio and French doors, since the vanes hang clear of the door itself and can be drawn fully to one side, leaving the doorway completely unobstructed. Unlike curtains, they don't bunch up or drag on the floor, and unlike horizontal blinds, they don't interfere with the door handle at any height.",
  },
  {
    question: "Can they be pulled to one side like curtains?",
    answer:
      "Yes, that's one of the main advantages of vertical blinds — the vanes stack neatly to one or both sides when fully open, similar to how curtains draw back, while still tilting individually for light control when closed. This makes them especially practical for doors and windows that are used frequently throughout the day.",
  },
  {
    question: "What fabrics are available?",
    answer:
      "Vertical blind vanes come in a wide range of fabrics, from plain practical weaves to patterned and textured designs, plus PVC vanes for kitchens and bathrooms where moisture resistance matters. Blackout-backed fabric is also available for rooms that need better light control, such as bedrooms with large windows.",
  },
  {
    question: "Do vertical blinds work in conservatories?",
    answer:
      "Vertical blinds are a popular choice for conservatories, since their long drop and wide coverage suit the tall, expansive glazing typical of these rooms. They help manage glare and heat build-up on sunny days while still allowing the vanes to be tilted open for ventilation and light.",
  },
  {
    question: "How are vertical blinds cleaned?",
    answer:
      "Fabric vanes can usually be unclipped individually for spot cleaning or a gentle hand wash, then reattached once dry — a real advantage over blinds that need to be removed entirely for cleaning. PVC vanes can simply be wiped down in place with a damp cloth, making them especially easy to maintain in kitchens.",
  },
  {
    question: "Can vertical blinds be motorised?",
    answer:
      "Yes, vertical blinds can be fitted with a motorised chain or remote-control system, which is particularly useful for wide patio doors or hard-to-reach conservatory windows. We can talk through motorised options during your free measuring visit if manual operation isn't practical for your space.",
  },
];

export default function VerticalBlindsPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Vertical Blinds",
          description:
            "Made to measure vertical blinds supplied and fitted across Crumlin, Antrim and Belfast, ideal for patio doors and large windows.",
          path: "/services/vertical-blinds",
        })}
      />
      <JsonLd data={faqSchema(faqItems)} />

      <PageHero
        eyebrow="Vertical Blinds"
        title="Vertical Blinds —"
        italicTitle="Large Windows & Doors."
        subtitle="Made to measure vertical blinds for patio doors, conservatories and oversized windows across Crumlin, Antrim and Belfast."
      />

      <ContentSection eyebrow="Built for Scale" title="Why Vertical Blinds Suit" italicTitle="Large Windows">
        <p>
          Some windows are simply too wide or too tall for a roller or
          venetian blind to cover comfortably, and that's exactly where
          vertical blinds do their best work. Long fabric vanes hang from a
          headrail track, giving even coverage across patio doors,
          conservatory glazing and oversized picture windows without the
          bulk or sag that a single wide roller blind can develop over time.
        </p>
        <p>
          The vanes glide easily along the track and stack neatly to one or
          both sides when opened, rather than bunching up the way heavy
          curtains do on a wide window. It's a practical, low-maintenance
          solution for exactly the windows that other blind styles
          struggle with.
        </p>
        <p>
          The headrail track itself can be curved or shaped to follow a bay
          window, and multiple tracks can be joined seamlessly to cover an
          especially wide expanse of glass, such as a run of bi-fold or
          sliding patio doors. This flexibility is difficult to achieve with
          roller or venetian blinds, which are generally limited to a single
          straight span before the fabric or slats become impractically
          heavy or wide to operate smoothly.
        </p>
      </ContentSection>

      <ImageContentSection
        eyebrow="Light Control"
        title="Rotating Vanes,"
        italicTitle="Adjustable Light"
        image="/images/blinds-arched-window-shutters.png"
        alt="Made to measure window covering fitted across a large arched window"
      >
        <p>
          Each vane rotates on its own carrier, so you can angle the entire
          blind to let light filter in without fully opening or closing it —
          useful for managing glare on a bright patio door without losing
          the connection to the garden. Rotate the vanes fully closed for
          maximum privacy in the evening, or open for an unobstructed view
          during the day.
        </p>
        <p>
          This adjustability makes vertical blinds especially good in rooms
          where the sun moves across a wide expanse of glass throughout the
          day, since you can fine-tune the light without touching the
          headrail.
        </p>
      </ImageContentSection>

      <ImageContentSection
        eyebrow="Fabric & Vanes"
        title="Options for"
        italicTitle="Every Room"
        image="/images/blinds-venetian-street-view.png"
        alt="Made to measure blinds fitted across a wide window with adjustable light control"
        reverse
      >
        <p>
          Vane fabrics range from plain, practical weaves through to
          patterned and textured designs, letting the blind either blend
          into the room or act as a subtle design feature. PVC vanes are
          available for kitchens and bathrooms, wiping clean easily and
          resisting steam and moisture far better than untreated fabric.
        </p>
        <p>
          For bedrooms or media rooms with large windows, blackout-backed
          vane fabric is also available, bringing the same darkening
          benefit found in our roller and roman blackout ranges to a wider
          window.
        </p>
      </ImageContentSection>

      <ContentSection eyebrow="Practicality" title="Built for" italicTitle="Doors in Daily Use">
        <p>
          Patio and French doors get opened and closed constantly, and
          vertical blinds are designed with that in mind. Chain-weighted
          vanes keep the blind stable and hanging straight even with a
          door being used multiple times a day, and because the vanes stack
          fully to one side, they never obstruct the doorway or catch on the
          handle.
        </p>
        <p>
          This combination of durability and practicality is why vertical
          blinds remain the go-to choice for doors, in a way that curtains
          and horizontal blinds simply can't match on a heavily used
          opening.
        </p>
      </ContentSection>

      <ContentSection eyebrow="Best Rooms" title="Where Vertical Blinds" italicTitle="Work Best">
        <p>
          Living rooms with patio or French doors are the classic
          application, giving full light control without ever getting in
          the way of the door itself. Conservatories benefit from the long
          drop and wide coverage vertical blinds provide across tall
          glazing, helping manage both glare and privacy. Large picture
          windows in modern extensions and open-plan living spaces are
          another natural fit, where a roller or venetian blind would
          otherwise need joining or splitting across the width.
        </p>
        <p>
          Home offices with a large window behind a desk or monitor also
          benefit from vertical blinds, since the rotating vanes allow fine
          glare control throughout the day without needing to fully close
          the window off from natural light. We see this combination often
          in converted garages and extensions across Crumlin and Antrim,
          where a single oversized window serves as the main source of
          daylight for the room.
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
          If your room calls for a softer, more decorative look instead,
          take a look at our{" "}
          <Link href="/services/roman-blinds" className="text-gold hover:text-gold-light">
            roman blinds
          </Link>{" "}
          page. See the complete range on our main{" "}
          <Link href="/services/blinds" className="text-gold hover:text-gold-light">
            blinds
          </Link>{" "}
          page, or{" "}
          <Link href="/contact" className="text-gold hover:text-gold-light">
            contact us
          </Link>{" "}
          to book a free measuring visit for your patio doors or large
          windows.
        </p>
      </ContentSection>

      <FAQAccordion eyebrow="FAQs" title="Vertical Blind Questions" items={faqItems} />

      <CTASection
        title="Got a patio door or large window?"
        subtitle="Book a free measuring appointment and we'll recommend the right vertical blind fabric and track for your space."
      />
    </>
  );
}
