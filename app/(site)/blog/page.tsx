import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { blogPosts } from "@/lib/blog-posts";
import { PageHero } from "@/components/sections/PageHero";
import { ScrollRevealGroup, RevealItem } from "@/components/animations/ScrollReveal";

export const metadata = buildMetadata({
  title: "Flooring & Blinds Advice Blog | Feeney Flooring Northern Ireland",
  description:
    "Expert flooring and blinds advice for homeowners in Northern Ireland. Guides, tips and inspiration from Feeney Flooring & Blinds, Crumlin.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="The Blog"
        title="Flooring &"
        italicTitle="Blinds Advice"
        subtitle="Honest, practical guides to help you choose the right floor and window dressing for your home — from our showroom in Crumlin to yours."
      />
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <ScrollRevealGroup className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <RevealItem key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gold-border bg-panel transition-colors duration-300 hover:border-gold"
              >
                <div className="relative aspect-[4/3] overflow-hidden border-b border-gold-border">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-gold">
                    {post.category}
                  </span>
                  <h2 className="mt-3 font-display text-2xl text-cream">
                    {post.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm font-light leading-relaxed text-cream-dim">
                    {post.excerpt}
                  </p>
                  <span className="mt-6 inline-block text-[11px] font-medium uppercase tracking-[0.2em] text-gold">
                    Read More →
                  </span>
                </div>
              </Link>
            </RevealItem>
          ))}
        </ScrollRevealGroup>
      </section>
    </>
  );
}
