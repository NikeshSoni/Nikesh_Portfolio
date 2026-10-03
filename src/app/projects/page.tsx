import { projects } from "@/data/projects";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/shared/container";
import { PageHeader } from "@/components/shared/page-header";
import { ProjectGrid } from "@/components/projects/project-grid";

export const metadata = buildMetadata({
  title: "Projects",
  description: "Full-stack projects built with Next.js, React, Node.js, and TypeScript, with source code and live demos.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Projects"
        description="Full-stack applications with source code and live demos. Open a project for its full feature list."
      />
      <Container className="py-16 sm:py-20">
        <ProjectGrid projects={projects} />
      </Container>
    </>
  );
}
