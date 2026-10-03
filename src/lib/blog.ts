import { posts } from "@/data/blog";

export function getAllPosts() {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
