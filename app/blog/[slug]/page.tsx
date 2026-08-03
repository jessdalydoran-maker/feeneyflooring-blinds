import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug } from "@/lib/blog-posts";
import { buildMetadata } from "@/lib/metadata";
import { JsonLd, articleSchema } from "@/lib/schema";
import { Eyebrow } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CTASection } from "@/components/sections/CTASection";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    notFound();
  }
  return buildMetadata({
    title: post.title,
    description: post.metaDescription,
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.metaDescription,
          path: `/blog/${slug}`,
          datePublished: post.datePublished,
          image: post.image,
        })}
      />
      <section className="mx-auto max-w-4xl px-6 pt-20 pb-12 text-center lg:px-10 lg:pt-28">
        <ScrollReveal>
          <Eyebrow>{post.category}</Eyebrow>
          <h1 className="font-display text-4xl leading-[1.1] text-cream sm:text-5xl lg:text-6xl">
            {post.title}
          </h1>
          <p className="mt-6 text-sm font-light uppercase tracking-[0.2em] text-cream-muted">
            {new Date(post.datePublished).toLocaleDateString("en-GB", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </ScrollReveal>
      </section>

      <section className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[2px] border border-gold-border">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 80vw, 100vw"
            priority
          />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
        <ScrollReveal>
          <div className="space-y-10">
            {post.body.map((block, i) => (
              <div key={i}>
                {block.heading && (
                  <h2 className="font-display text-3xl text-cream sm:text-4xl">
                    {block.heading}
                  </h2>
                )}
                <div className={`space-y-5 ${block.heading ? "mt-5" : ""}`}>
                  {block.paragraphs.map((paragraph, j) => (
                    <p
                      key={j}
                      className="text-base font-light leading-[1.85] text-cream-dim"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {post.internalLinks.length > 0 && (
            <div className="mt-16 border-t border-gold-border pt-10">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-gold">
                Related
              </p>
              <ul className="mt-4 space-y-3">
                {post.internalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-base font-light text-gold hover:text-gold-light"
                    >
                      {link.label} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </ScrollReveal>
      </section>

      <CTASection
        title="Ready to Get Started?"
        subtitle="Book a free, no-obligation home measure and quote with Kevin — expert advice, honest pricing, and beautiful results."
      />
    </>
  );
}
