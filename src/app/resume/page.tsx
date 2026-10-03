import { Download, Eye } from "lucide-react";
import { siteConfig } from "@/data/site";
import { resume } from "@/data/resume";
import { skillGroups } from "@/data/skills";
import { experience } from "@/data/experience";
import { certifications, education } from "@/data/education";
import { buildMetadata } from "@/lib/seo";
import { assetExists } from "@/lib/assets";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { PageHeader } from "@/components/shared/page-header";

export const metadata = buildMetadata({
  title: "Resume",
  description: `Resume of ${siteConfig.name}, ${siteConfig.title}: experience, education, skills, and certifications.`,
  path: "/resume",
});

export default function ResumePage() {
  const hasPdf = assetExists(resume.file);

  return (
    <>
      <PageHeader title="Resume" description={`Last updated ${resume.lastUpdated}.`} />
      <Container className="py-12 sm:py-16">
        {hasPdf ? (
          <div className="mb-10 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href={resume.file} target="_blank" rel="noopener noreferrer">
                <Eye />
                View PDF
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={resume.file} download>
                <Download />
                Download PDF
              </a>
            </Button>
          </div>
        ) : null}

        <article
          aria-label={`${siteConfig.name} resume`}
          className="max-w-4xl rounded-lg border border-border bg-card p-6 sm:p-10"
        >
          <header className="border-b border-border pb-6">
            <h2 className="text-3xl font-bold sm:text-4xl">{siteConfig.name}</h2>
            <p className="mt-1 text-lg text-link">{siteConfig.title}</p>
            <ul className="mt-4 flex flex-col gap-1 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:gap-x-6">
              <li>{siteConfig.location}</li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="break-all hover:text-link hover:underline">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={siteConfig.url} className="break-all hover:text-link hover:underline">
                  {siteConfig.url.replace("https://", "")}
                </a>
              </li>
            </ul>
          </header>

          <section aria-labelledby="r-summary" className="mt-8">
            <h3 id="r-summary" className="text-xl font-bold">
              Summary
            </h3>
            <p className="mt-3 text-base leading-7 text-muted-foreground">{siteConfig.description}</p>
          </section>

          <section aria-labelledby="r-experience" className="mt-10">
            <h3 id="r-experience" className="text-xl font-bold">
              Experience
            </h3>
            <ul className="mt-4 space-y-8">
              {experience.map((e) => (
                <li key={`${e.company}-${e.role}`}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h4 className="font-heading text-lg font-bold">
                      {e.role}, <span className="text-link">{e.company}</span>
                    </h4>
                    <time className="text-sm text-muted-foreground">{e.dates}</time>
                  </div>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-base leading-7 text-muted-foreground marker:text-link">
                    {[...e.responsibilities, ...e.achievements].map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="r-skills" className="mt-10">
            <h3 id="r-skills" className="text-xl font-bold">
              Skills
            </h3>
            <dl className="mt-4 space-y-3">
              {skillGroups.map((g) => (
                <div key={g.id} className="grid gap-1 sm:grid-cols-[8rem_1fr] sm:gap-4">
                  <dt className="text-sm font-medium">{g.title}</dt>
                  <dd className="text-sm leading-6 text-muted-foreground">{g.skills.join(", ")}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section aria-labelledby="r-education" className="mt-10">
            <h3 id="r-education" className="text-xl font-bold">
              Education
            </h3>
            <ul className="mt-4 space-y-4">
              {education.map((e) => (
                <li key={e.degree} className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h4 className="font-heading text-base font-bold">{e.degree}</h4>
                    <p className="text-sm text-muted-foreground">{e.institution}</p>
                  </div>
                  <time className="text-sm text-muted-foreground">{e.dates}</time>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="r-certs" className="mt-10">
            <h3 id="r-certs" className="text-xl font-bold">
              Certifications
            </h3>
            <ul className="mt-4 space-y-2 text-base text-muted-foreground">
              {certifications.map((c) => (
                <li key={c.name}>
                  <span className="text-foreground">{c.name}</span>, {c.issuer}, {c.date}
                </li>
              ))}
            </ul>
          </section>
        </article>
      </Container>
    </>
  );
}
