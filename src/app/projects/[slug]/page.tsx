import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getProject, projects } from "@/data/projects";
import { buildMetadata } from "@/lib/seo";
import { assetExists } from "@/lib/assets";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/shared/container";
import { ImageFrame } from "@/components/shared/image-frame";
import { ProjectLinks } from "@/components/projects/project-links";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return buildMetadata({
    title: project.name,
    description: project.description,
    path: `/projects/${project.slug}`,
    image: assetExists(project.thumbnail) ? project.thumbnail : undefined,
  });
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const prev = projects[index - 1];
  const next = projects[index + 1];

  return (
    <Container className="py-12 sm:py-16">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 rounded-sm text-sm text-muted-foreground transition-colors hover:text-link"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        All projects
      </Link>

      <header className="mt-8 max-w-3xl">
        <h1 className="text-4xl font-bold sm:text-5xl">{project.name}</h1>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">{project.description}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ProjectLinks project={project} size="default" />
        </div>
      </header>

      <ImageFrame
        src={project.thumbnail}
        alt={`${project.name} screenshot`}
        sizes="(min-width: 1152px) 1088px, 100vw"
        priority
        className="mt-12 aspect-[16/10] w-full rounded-lg border border-border sm:aspect-[16/9]"
      />

      <div className="mt-16 grid gap-12 md:grid-cols-2">
        <section aria-labelledby="features-heading">
          <h2 id="features-heading" className="text-2xl font-bold">
            Key features
          </h2>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-base leading-7 marker:text-link">
            {project.keyFeatures.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </section>
        <section aria-labelledby="stack-heading">
          <h2 id="stack-heading" className="text-2xl font-bold">
            Technology stack
          </h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.techStack.map((t) => (
              <li key={t}>
                <Badge className="px-3 py-1.5 text-sm">{t}</Badge>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <nav aria-label="More projects" className="mt-20 grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
        <div>
          {prev ? (
            <Link href={`/projects/${prev.slug}`} className="group inline-flex flex-col gap-1 rounded-sm">
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <ArrowLeft className="size-4" aria-hidden="true" />
                Previous project
              </span>
              <span className="font-heading text-lg font-bold transition-colors group-hover:text-link">{prev.name}</span>
            </Link>
          ) : null}
        </div>
        <div className="sm:text-right">
          {next ? (
            <Link href={`/projects/${next.slug}`} className="group inline-flex flex-col gap-1 rounded-sm sm:items-end">
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                Next project
                <ArrowRight className="size-4" aria-hidden="true" />
              </span>
              <span className="font-heading text-lg font-bold transition-colors group-hover:text-link">{next.name}</span>
            </Link>
          ) : null}
        </div>
      </nav>
    </Container>
  );
}
