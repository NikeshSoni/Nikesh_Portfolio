import { StaggerContainer, StaggerItem } from "@/components/shared/stagger";
import type { ExperienceItem } from "@/types";

export function ExperienceTimeline({ items }: { items: ExperienceItem[] }) {
  return (
    <StaggerContainer className="relative space-y-12 border-l border-primary/30 pl-6 sm:pl-10">
      {items.map((item) => (
        <StaggerItem key={`${item.company}-${item.role}`} className="relative">
          <span
            aria-hidden="true"
            className="absolute -left-[31px] top-2 size-3.5 rounded-full border-2 border-primary bg-background shadow-[0_0_10px_rgba(139,92,246,0.5)] sm:-left-[48px]"
          />
          <h2 className="font-heading text-2xl font-extrabold text-foreground">{item.role}</h2>
          <p className="mt-1 flex flex-col gap-0.5 text-base text-muted-foreground sm:flex-row sm:gap-4">
            <span className="font-semibold text-primary">{item.company}</span>
            <span className="hidden sm:inline text-border">•</span>
            <time className="font-mono text-sm">{item.dates}</time>
          </p>

          <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-foreground">Responsibilities</h3>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-base leading-relaxed text-muted-foreground marker:text-primary">
            {item.responsibilities.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>

          <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-foreground">Achievements</h3>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-base leading-relaxed text-muted-foreground marker:text-primary">
            {item.achievements.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
