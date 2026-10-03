import { buildMetadata } from "@/lib/seo";
import { getAllPosts } from "@/lib/blog";
import { Container } from "@/components/shared/container";
import { PageHeader } from "@/components/shared/page-header";
import { PostCard } from "@/components/blog/post-card";

export const metadata = buildMetadata({
  title: "Blog",
  description: "Articles on web development, backend engineering, and Next.js.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <>
      <PageHeader title="Blog" description="Articles on web development, backend engineering, and Next.js." />
      <Container className="py-16 sm:py-20">
        {posts.length === 0 ? (
          <div className="max-w-xl rounded-lg border border-dashed border-border p-8">
            <h2 className="text-xl font-bold">No articles yet</h2>
            <p className="mt-2 text-base leading-7 text-muted-foreground">
              New articles will be listed here as they are published.
            </p>
          </div>
        ) : (
          <ul className="grid max-w-3xl gap-6">
            {posts.map((post) => (
              <li key={post.slug}>
                <PostCard post={post} />
              </li>
            ))}
          </ul>
        )}
      </Container>
    </>
  );
}
