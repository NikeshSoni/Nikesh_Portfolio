import { siteConfig } from "@/data/site";
import { socials } from "@/data/socials";
import { buildMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/hero";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { DevActivitySection } from "@/components/sections/dev-activity";
import { SkillsPreview } from "@/components/sections/skills-preview";
import { ExperiencePreview } from "@/components/sections/experience-preview";
import { AboutPreview } from "@/components/sections/about-preview";
import { ContactCta } from "@/components/sections/contact-cta";

export const metadata = buildMetadata({ description: siteConfig.description, path: "/" });

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.title,
  url: siteConfig.url,
  sameAs: socials.map((s) => s.href),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Hero />
      <DevActivitySection />
      <FeaturedProjects />
      <SkillsPreview />
      <ExperiencePreview />
      <AboutPreview />
      <ContactCta />
    </>
  );
}
