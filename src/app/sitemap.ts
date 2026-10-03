import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { allNav } from "@/data/navigation";
import { projects } from "@/data/projects";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = allNav.map((n) => ({
    url: `${siteConfig.url}${n.href === "/" ? "" : n.href}`,
    lastModified: now,
    priority: n.href === "/" ? 1 : 0.7,
  }));
  const projectPages = projects.map((p) => ({
    url: `${siteConfig.url}/projects/${p.slug}`,
    lastModified: now,
    priority: 0.6,
  }));
  const postPages = getAllPosts().map((p) => ({
    url: `${siteConfig.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    priority: 0.5,
  }));
  return [...pages, ...projectPages, ...postPages];
}
