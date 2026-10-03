import { skillGroups } from "@/data/skills";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { StaggerContainer, StaggerItem } from "@/components/shared/stagger";

const PREVIEW_COUNT = 6;

export function SkillsPreview() {
  const groups = skillGroups.filter((g) => ["frontend", "backend", "database", "tools"].includes(g.id));
  return (
    <Section id="skills-preview">
      <SectionHeading
        id="skills-preview"
        title="Skills & Technologies"
        description="The modern languages, frameworks, and tools I use to build scaleable digital experiences."
        href="/skills"
        linkLabel="All skills"
      />
      <StaggerContainer className="grid gap-8 sm:grid-cols-2">
        {groups.map((g) => (
          <StaggerItem key={g.id}>
            <div className="rounded-xl border border-border/70 bg-card/60 p-6 backdrop-blur-md transition-all hover:border-primary/40 hover:bg-card/80 shadow-sm">
              <h3 className="font-heading text-lg font-bold text-foreground">{g.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {g.skills.slice(0, PREVIEW_COUNT).map((s) => (
                  <li key={s}>
                    <Badge>{s}</Badge>
                  </li>
                ))}
                {g.skills.length > PREVIEW_COUNT ? (
                  <li>
                    <Badge className="text-muted-foreground font-sans">+{g.skills.length - PREVIEW_COUNT}</Badge>
                  </li>
                ) : null}
              </ul>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
