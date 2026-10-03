"use client";

import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { GitHubWidget } from "@/components/shared/github-widget";
import { SpotifyWidget } from "@/components/shared/spotify-widget";

export function DevActivitySection() {
  return (
    <section className="py-16 sm:py-20 bg-muted/20 border-y border-border/40">
      <Container>
        <FadeIn direction="up">
          <SectionHeading
            id="dev-activity"
            title="Live Developer Activity & Pulse"
            description="Real-time commit contributions, coding streak, and current Spotify work music."
          />
        </FadeIn>

        <div className="mt-10 grid gap-6 lg:grid-cols-3 items-start">
          <FadeIn direction="up" delay={0.15} className="lg:col-span-2">
            <GitHubWidget />
          </FadeIn>

          <FadeIn direction="up" delay={0.25} className="lg:col-span-1">
            <SpotifyWidget />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
