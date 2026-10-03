import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "./fade-in";

interface SectionHeadingProps {
  id: string;
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
}

export function SectionHeading({ id, title, description, href, linkLabel }: SectionHeadingProps) {
  return (
    <FadeIn direction="up">
      <div className="mb-10 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="h-7 w-1.5 rounded-full bg-gradient-to-b from-primary to-indigo-500" />
            <h2 id={`${id}-heading`} className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
              {title}
            </h2>
          </div>
          {description ? (
            <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>
        {href && linkLabel ? (
          <Link
            href={href}
            className="group inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border/80 bg-card/60 px-4 py-2 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-card hover:text-primary hover:shadow-sm"
          >
            <span>{linkLabel}</span>
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        ) : null}
      </div>
    </FadeIn>
  );
}
