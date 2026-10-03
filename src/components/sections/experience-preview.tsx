import { experience } from "@/data/experience";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { StaggerContainer, StaggerItem } from "@/components/shared/stagger";

export function ExperiencePreview() {
  return (
    <Section id="experience-preview">
      <SectionHeading
        id="experience-preview"
        title="Experience"
        description="My professional background in engineering and full-stack development."
        href="/experience"
        linkLabel="Full timeline"
      />
      <StaggerContainer className="divide-y divide-border/60 rounded-xl border border-border/70 bg-card/50 backdrop-blur-md px-6 sm:px-8 shadow-sm">
        {experience.map((item) => (
          <StaggerItem key={`${item.company}-${item.role}`}>
            <div className="grid gap-2 py-8 md:grid-cols-[14rem_1fr] md:gap-10">
              <p className="text-sm font-mono font-medium text-muted-foreground">
                <time>{item.dates}</time>
              </p>
              <div>
                <h3 className="font-heading text-xl font-extrabold text-foreground">{item.role}</h3>
                <p className="mt-1 text-base font-semibold text-primary">{item.company}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-muted-foreground marker:text-primary">
                  {item.responsibilities.slice(0, 2).map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
