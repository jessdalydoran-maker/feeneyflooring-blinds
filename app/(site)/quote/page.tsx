import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { QuoteForm } from "@/components/sections/QuoteForm";

export const metadata: Metadata = buildMetadata({
  title: "Get a Free Flooring or Blinds Quote | Feeney Flooring & Blinds",
  description:
    "Get a free, no-obligation quote for flooring or blinds in Crumlin, Antrim or Belfast. Tell us about your project and we'll be in touch within 2 hours.",
  path: "/quote",
});

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Free, No-Obligation"
        title="Get a"
        italicTitle="Quote."
        subtitle="Six quick steps and we'll have everything we need to put together an accurate quote for your flooring or blinds project."
      />
      <section className="mx-auto max-w-2xl px-6 pb-24 lg:px-10">
        <QuoteForm />
      </section>
    </>
  );
}
