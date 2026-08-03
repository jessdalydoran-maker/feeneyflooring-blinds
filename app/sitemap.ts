import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { blogPosts } from "@/lib/blog-posts";

const staticRoutes = [
  "",
  "/about",
  "/services",
  "/services/flooring",
  "/services/engineered-wood",
  "/services/lvt",
  "/services/laminate",
  "/services/carpet",
  "/services/stair-fitting",
  "/services/blinds",
  "/services/roller-blinds",
  "/services/venetian-blinds",
  "/services/vertical-blinds",
  "/services/roman-blinds",
  "/services/blackout-blinds",
  "/blog",
  "/contact",
  "/quote",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.datePublished),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
