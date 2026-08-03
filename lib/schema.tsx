import { BUSINESS, SITE_URL } from "./constants";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS.name,
    image: `${SITE_URL}/images/logo.jpg`,
    telephone: "+447720981809",
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.locality,
      addressRegion: BUSINESS.address.region,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.country,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Thursday",
        opens: "10:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday"],
        opens: "10:00",
        closes: "17:00",
      },
    ],
    priceRange: "££",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.rating.value,
      reviewCount: BUSINESS.rating.count,
    },
    areaServed: ["Crumlin", "Antrim", "Belfast", "Lisburn", "Northern Ireland"],
    serviceType: [
      "Flooring",
      "Blinds",
      "Carpet Fitting",
      "Engineered Wood",
      "LVT",
      "Laminate",
    ],
  };
}

export function serviceSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    url: `${SITE_URL}${path}`,
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS.name,
      telephone: "+447720981809",
      address: {
        "@type": "PostalAddress",
        streetAddress: BUSINESS.address.street,
        addressLocality: BUSINESS.address.locality,
        postalCode: BUSINESS.address.postalCode,
        addressCountry: BUSINESS.address.country,
      },
    },
    areaServed: ["Crumlin", "Antrim", "Belfast", "Northern Ireland"],
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function articleSchema({
  title,
  description,
  path,
  datePublished,
  image,
}: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: `${SITE_URL}${image}`,
    datePublished,
    author: {
      "@type": "Organization",
      name: BUSINESS.name,
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo.jpg`,
      },
    },
    mainEntityOfPage: `${SITE_URL}${path}`,
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
