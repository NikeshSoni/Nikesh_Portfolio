import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/types";

export function PostCard({ post }: { post: BlogPost }) {
  return (
    <article className="group relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-card/90 hover:shadow-lg dark:hover:shadow-primary/5">
      <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-muted-foreground">
        <Badge>{post.category}</Badge>
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span>•</span>
        <span>{post.readTime} read</span>
      </div>
      <h2 className="mt-4 font-heading text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
        <Link href={`/blog/${post.slug}`} className="rounded-sm">
          {post.title}
        </Link>
      </h2>
      <p className="mt-2 text-base leading-relaxed text-muted-foreground">{post.description}</p>
    </article>
  );
}
