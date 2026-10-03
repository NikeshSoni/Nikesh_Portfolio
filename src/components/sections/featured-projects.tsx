import { projects } from "@/data/projects";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectGrid } from "@/components/projects/project-grid";

export function FeaturedProjects() {
  return (
    <Section id="featured-projects">
      <SectionHeading
        id="featured-projects"
        title="Featured projects"
        description="Full-stack applications I've built, each with source code and a live demo."
        href="/projects"
        linkLabel="All projects"
      />
      <ProjectGrid projects={projects} />
    </Section>
  );
}
