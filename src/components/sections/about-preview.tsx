import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/shared/section";
import { ImageFrame } from "@/components/shared/image-frame";
import { FadeIn } from "@/components/shared/fade-in";

export function AboutPreview() {
  return (
    <Section id="about-preview">
      <div className="grid items-center gap-10 md:grid-cols-[18rem_1fr] md:gap-16">
        <FadeIn direction="right">
          <ImageFrame
            src={siteConfig.profilePhoto}
            alt={`Portrait of ${siteConfig.name}`}
            sizes="(min-width: 768px) 288px, 100vw"
            className="aspect-square w-full max-w-xs rounded-2xl border border-border/80 shadow-lg transition-transform hover:scale-[1.02]"
          />
        </FadeIn>
        <FadeIn direction="left" delay={0.15}>
          <div>
            <div className="flex items-center gap-3">
              <span className="h-7 w-1.5 rounded-full bg-gradient-to-b from-primary to-indigo-500" />
              <h2 id="about-preview-heading" className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
                About me
              </h2>
            </div>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">{siteConfig.description}</p>
            <Button asChild variant="outline" className="mt-8">
              <Link href="/about">More about me</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
