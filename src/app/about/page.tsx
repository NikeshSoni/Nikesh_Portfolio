import Link from "next/link";
import { siteConfig } from "@/data/site";
import { experience } from "@/data/experience";
import { education } from "@/data/education";
import { buildMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { PageHeader } from "@/components/shared/page-header";
import { ImageFrame } from "@/components/shared/image-frame";
import { SocialLinks } from "@/components/shared/social-links";
import { FadeIn } from "@/components/shared/fade-in";

export const metadata = buildMetadata({
  title: "About",
  description: `About ${siteConfig.name}, a ${siteConfig.title.toLowerCase()} based in ${siteConfig.location}.`,
  path: "/about",
});

export default function AboutPage() {
  const current = experience.find((e) => e.dates.includes("Present")) ?? experience[0];
  const studying = education[education.length - 1];

  const facts = [
    { term: "Location", detail: siteConfig.location },
    { term: "Current role", detail: `${current.role} at ${current.company}` },
    { term: "Education", detail: `${studying.degree}, ${studying.institution}` },
  ];

  return (
    <>
      <PageHeader title="About Me" description={`${siteConfig.title} based in ${siteConfig.location}.`} />
      <Container className="grid gap-12 py-16 sm:py-20 md:grid-cols-[18rem_1fr] md:gap-16">
        <FadeIn direction="right">
          <ImageFrame
            src={siteConfig.profilePhoto}
            alt={`Portrait of ${siteConfig.name}`}
            sizes="(min-width: 768px) 288px, 100vw"
            className="aspect-square w-full max-w-xs rounded-2xl border border-border/80 shadow-lg"
          />
          <SocialLinks className="-ml-2 mt-6" />
        </FadeIn>
        <FadeIn direction="left" delay={0.15} className="max-w-2xl">
          <p className="text-lg leading-relaxed text-foreground">{siteConfig.description}</p>

          <dl className="mt-10 divide-y divide-border/60 rounded-xl border border-border/70 bg-card/60 p-6 backdrop-blur-md">
            {facts.map((f) => (
              <div key={f.term} className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr] sm:gap-6 first:pt-0 last:pb-0">
                <dt className="text-sm font-mono font-medium text-muted-foreground">{f.term}</dt>
                <dd className="text-base font-semibold text-foreground">{f.detail}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild variant="outline">
              <Link href="/skills">Skills</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/experience">Experience</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/education">Education</Link>
            </Button>
            <Button asChild>
              <Link href="/contact">Contact me</Link>
            </Button>
          </div>
        </FadeIn>
      </Container>
    </>
  );
}
