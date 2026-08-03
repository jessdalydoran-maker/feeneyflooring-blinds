import Link from "next/link";
import { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { AnimatedImage } from "@/components/animations/AnimatedImage";

export function ContentSection({
  eyebrow,
  title,
  italicTitle,
  children,
  id,
}: {
  eyebrow: string;
  title: string;
  italicTitle?: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="mx-auto max-w-4xl px-6 py-20 lg:px-10">
      <ScrollReveal>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="font-display text-4xl text-cream sm:text-5xl">
          {title} {italicTitle && <span className="text-gold italic">{italicTitle}</span>}
        </h2>
        <div className="mt-8 space-y-5 text-base font-light leading-[1.85] text-cream-dim">
          {children}
        </div>
      </ScrollReveal>
    </section>
  );
}

export function ImageContentSection({
  eyebrow,
  title,
  italicTitle,
  children,
  image,
  alt,
  reverse = false,
  productLabel,
  cta,
}: {
  eyebrow: string;
  title: string;
  italicTitle?: string;
  children: ReactNode;
  image: string;
  alt: string;
  reverse?: boolean;
  productLabel?: string;
  cta?: { label: string; href: string };
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <div
        className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-5 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <AnimatedImage
          src={image}
          alt={alt}
          containerClassName="aspect-[4/5] lg:col-span-2"
        />
        <ScrollReveal className="lg:col-span-3">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="font-display text-4xl text-cream sm:text-5xl">
            {title}{" "}
            {italicTitle && <span className="text-gold italic">{italicTitle}</span>}
          </h2>
          <div className="mt-6 space-y-5 text-base font-light leading-[1.85] text-cream-dim">
            {children}
          </div>
          {productLabel && (
            <p className="mt-6 font-display text-lg text-gold">{productLabel}</p>
          )}
          {cta && (
            <Link
              href={cta.href}
              className="mt-4 inline-block text-[11px] font-medium uppercase tracking-[0.2em] text-gold hover:text-gold-light"
            >
              {cta.label}
            </Link>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
