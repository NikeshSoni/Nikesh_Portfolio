import { ProjectCard } from "./project-card";
import { StaggerContainer, StaggerItem } from "@/components/shared/stagger";
import type { Project } from "@/types";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <StaggerContainer className="grid gap-6 md:grid-cols-2">
      {projects.map((p) => (
        <StaggerItem key={p.slug}>
          <ProjectCard project={p} priority={false} />
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
