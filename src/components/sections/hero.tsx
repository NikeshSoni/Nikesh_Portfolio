import Link from "next/link";
import { MapPin, ArrowRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { SocialLinks } from "@/components/shared/social-links";
import { HeroVisual } from "@/components/three/hero-visual";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative py-16 sm:py-24 lg:py-32">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          {/* Status Badge */}
          <FadeIn direction="down" delay={0.1}>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 backdrop-blur-md mb-6">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              <span>Available for new projects</span>
            </div>
          </FadeIn>

          {/* Subtitle / Role */}
          <FadeIn direction="up" delay={0.15}>
            <p className="text-lg font-mono font-semibold text-primary tracking-wide">
              {siteConfig.title}
            </p>
          </FadeIn>

          {/* Main Title */}
          <FadeIn direction="up" delay={0.2}>
            <h1 id="hero-heading" className="mt-3 font-heading text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-primary via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                {siteConfig.name}
              </span>
            </h1>
          </FadeIn>

          {/* Description */}
          <FadeIn direction="up" delay={0.25}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>
          </FadeIn>

          {/* Location */}
          <FadeIn direction="up" delay={0.3}>
            <p className="mt-4 flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <MapPin className="size-4 text-primary" aria-hidden="true" />
              {siteConfig.location}
            </p>
          </FadeIn>

          {/* CTA Buttons & Social Links */}
          <FadeIn direction="up" delay={0.35} className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="flex flex-wrap gap-3.5">
              <Button asChild size="lg" className="group">
                <Link href="/projects">
                  <span>View Projects</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  <Sparkles className="size-4 text-primary" />
                  <span>Get in touch</span>
                </Link>
              </Button>
            </div>
            <SocialLinks className="-ml-2 sm:ml-2" />
          </FadeIn>
        </div>

        {/* 3D Visual Mesh Scene */}
        <FadeIn direction="left" delay={0.3} className="justify-self-center w-full">
          <HeroVisual />
        </FadeIn>
      </Container>
    </section>
  );
}
