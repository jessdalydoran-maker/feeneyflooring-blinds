import type { Metadata } from "next";
import { SITE_URL } from "./constants";

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  image?: string;
}

export function buildMetadata({
  title,
  description,
  path,
  image = "/images/herringbone-close-up.jpg",
}: PageMetaInput): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Feeney Flooring & Blinds",
      images: [{ url: image }],
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
