import { Container } from "./container";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  bordered?: boolean;
}

/** Labelled page section. Headings inside should use id `${id}-heading`. */
export function Section({ id, children, className, bordered = true }: SectionProps) {
  return (
    <section
      aria-labelledby={`${id}-heading`}
      className={cn("py-16 sm:py-24", bordered && "border-t border-border", className)}
    >
      <Container>{children}</Container>
    </section>
  );
}
