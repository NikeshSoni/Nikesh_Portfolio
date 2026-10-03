import { skillGroups } from "@/data/skills";
import { buildMetadata } from "@/lib/seo";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/shared/container";
import { PageHeader } from "@/components/shared/page-header";
import { StaggerContainer, StaggerItem } from "@/components/shared/stagger";

export const metadata = buildMetadata({
  title: "Skills",
  description: "Frontend, backend, database, and tooling skills: Next.js, React, TypeScript, Node.js, MongoDB, PostgreSQL, and more.",
  path: "/skills",
});

export default function SkillsPage() {
  return (
    <>
      <PageHeader title="Skills & Stack" description="The languages, frameworks, databases, and development tools I use to build scalable web applications." />
      <Container className="py-16 sm:py-20">
        <StaggerContainer className="grid gap-8 sm:grid-cols-2">
          {skillGroups.map((g) => (
            <StaggerItem key={g.id}>
              <section aria-labelledby={`${g.id}-heading`} className="rounded-2xl border border-border/70 bg-card/60 p-6 sm:p-8 backdrop-blur-md shadow-sm transition-all hover:border-primary/40 hover:bg-card/80">
                <h2 id={`${g.id}-heading`} className="font-heading text-xl font-bold text-foreground mb-4">
                  {g.title}
                </h2>
                <ul className="flex flex-wrap gap-2.5">
                  {g.skills.map((s) => (
                    <li key={s}>
                      <Badge className="px-3.5 py-1.5 text-sm">{s}</Badge>
                    </li>
                  ))}
                </ul>
              </section>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </>
  );
}
