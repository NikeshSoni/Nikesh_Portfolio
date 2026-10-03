import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GitHubIcon } from "@/components/shared/icons";
import type { Project } from "@/types";

export function ProjectLinks({ project, size = "sm" }: { project: Project; size?: "sm" | "default" }) {
  return (
    <>
      <Button asChild variant="outline" size={size}>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.name} source code on GitHub (opens in a new tab)`}
        >
          <GitHubIcon className="size-4" />
          GitHub
        </a>
      </Button>
      <Button asChild size={size}>
        <a
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.name} live demo (opens in a new tab)`}
        >
          <ExternalLink />
          Live demo
        </a>
      </Button>
    </>
  );
}
