import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { getAllPosts, getPost } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/shared/container";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.date,
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <Container className="py-12 sm:py-16">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 rounded-sm text-sm text-muted-foreground transition-colors hover:text-link"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        All articles
      </Link>

      <article className="mt-8 max-w-2xl">
        <header>
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <Badge>{post.category}</Badge>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>{post.readTime} read</span>
          </div>
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">{post.title}</h1>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">{post.description}</p>
        </header>

        <div className="mt-10 space-y-6 text-lg leading-8">
          {post.content.map((block, i) => {
            switch (block.type) {
              case "h2":
                return (
                  <h2 key={i} className="pt-4 text-2xl font-bold">
                    {block.text}
                  </h2>
                );
              case "p":
                return <p key={i}>{block.text}</p>;
              case "ul":
                return (
                  <ul key={i} className="list-disc space-y-2 pl-6 marker:text-link">
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                );
              case "code":
                return (
                  <pre
                    key={i}
                    tabIndex={0}
                    className="overflow-x-auto rounded-lg border border-border bg-card p-4 text-sm leading-6"
                  >
                    <code>{block.code}</code>
                  </pre>
                );
            }
          })}
        </div>
      </article>
    </Container>
  );
}
