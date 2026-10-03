import { experience } from "@/data/experience";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/shared/container";
import { PageHeader } from "@/components/shared/page-header";
import { ExperienceTimeline } from "@/components/shared/timeline";

export const metadata = buildMetadata({
  title: "Experience",
  description: "Professional experience as a full-stack developer and frontend developer intern.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <>
      <PageHeader title="Experience" description="Where I've worked, what I built, and what I delivered." />
      <Container className="py-16 sm:py-20">
        <ExperienceTimeline items={experience} />
      </Container>
    </>
  );
}
