import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ImageFrame } from "@/components/shared/image-frame";
import { ProjectLinks } from "./project-links";
import type { Project } from "@/types";

const MAX_TECH = 5;
const MAX_FEATURES = 3;

export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  const extraTech = project.techStack.length - MAX_TECH;
  const extraFeatures = project.keyFeatures.length - MAX_FEATURES;

  return (
    <Card className="group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10">
      <div className="relative overflow-hidden">
        <ImageFrame
          src={project.thumbnail}
          alt={`${project.name} screenshot`}
          sizes="(min-width: 1152px) 560px, (min-width: 768px) 50vw, 100vw"
          priority={priority}
          className="aspect-[16/10] w-full border-b border-border/80 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
      </div>
      <CardHeader>
        <h3 className="font-heading text-xl font-bold tracking-tight">
          <Link
            href={`/projects/${project.slug}`}
            className="rounded-sm transition-colors hover:text-primary"
          >
            {project.name}
          </Link>
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
      </CardHeader>
      <CardContent className="flex-1 space-y-5">
        <ul aria-label="Key features" className="list-disc space-y-1.5 pl-5 text-sm marker:text-primary">
          {project.keyFeatures.slice(0, MAX_FEATURES).map((f) => (
            <li key={f}>{f}</li>
          ))}
          {extraFeatures > 0 ? (
            <li className="list-none text-muted-foreground">
              <Link href={`/projects/${project.slug}`} className="rounded-sm font-medium text-primary hover:underline">
                +{extraFeatures} more features
              </Link>
            </li>
          ) : null}
        </ul>
        <ul aria-label="Technology stack" className="flex flex-wrap gap-2">
          {project.techStack.slice(0, MAX_TECH).map((t) => (
            <li key={t}>
              <Badge>{t}</Badge>
            </li>
          ))}
          {extraTech > 0 ? (
            <li>
              <Badge className="text-muted-foreground">+{extraTech}</Badge>
            </li>
          ) : null}
        </ul>
      </CardContent>
      <CardFooter className="pt-2">
        <ProjectLinks project={project} />
      </CardFooter>
    </Card>
  );
}
