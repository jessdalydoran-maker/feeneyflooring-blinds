import { Hero } from "@/components/thirty3/Hero";
import { TrustStrip } from "@/components/thirty3/TrustStrip";
import { OpeningHours } from "@/components/thirty3/OpeningHours";
import { WhatWeServe } from "@/components/thirty3/WhatWeServe";
import { CinematicBreak } from "@/components/thirty3/CinematicBreak";
import { Menu } from "@/components/thirty3/Menu";
import { FindUs } from "@/components/thirty3/FindUs";
import { EmailSignup } from "@/components/thirty3/EmailSignup";
import { Footer } from "@/components/thirty3/Footer";
import { BackToTop } from "@/components/thirty3/BackToTop";

const schema = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: "thirty3coffee",
  description: "Specialty coffee shop and drive thru, Nutts Corner, Northern Ireland",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nutts Corner",
    addressRegion: "County Antrim",
    addressCountry: "GB",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "15:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "09:00",
      closes: "14:00",
    },
  ],
  servesCuisine: "Coffee",
};

export default function Thirty3CoffeePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Hero />
      <TrustStrip />
      <OpeningHours />
      <WhatWeServe />
      <CinematicBreak />
      <Menu />
      <FindUs />
      <EmailSignup />
      <Footer />
      <BackToTop />
    </>
  );
}
