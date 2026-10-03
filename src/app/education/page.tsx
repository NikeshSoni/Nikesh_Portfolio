import { ExternalLink } from "lucide-react";
import { certifications, education } from "@/data/education";
import { buildMetadata } from "@/lib/seo";
import { Card, CardHeader } from "@/components/ui/card";
import { Container } from "@/components/shared/container";
import { PageHeader } from "@/components/shared/page-header";

export const metadata = buildMetadata({
  title: "Education",
  description: "Academic background in computer science and computer applications, plus professional certifications.",
  path: "/education",
});

export default function EducationPage() {
  return (
    <>
      <PageHeader title="Education" description="Academic background and certifications." />
      <Container className="space-y-16 py-16 sm:py-20">
        <section aria-labelledby="degrees-heading">
          <h2 id="degrees-heading" className="mb-6 text-2xl font-bold">
            Academic background
          </h2>
          <ul className="grid gap-4 md:grid-cols-2">
            {education.map((e) => (
              <li key={e.degree}>
                <Card className="h-full">
                  <CardHeader>
                    <h3 className="text-xl font-bold">{e.degree}</h3>
                    <p className="font-medium text-link">{e.institution}</p>
                    <p className="text-sm text-muted-foreground">
                      <time>{e.dates}</time>
                    </p>
                  </CardHeader>
                </Card>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="certs-heading">
          <h2 id="certs-heading" className="mb-6 text-2xl font-bold">
            Certifications
          </h2>
          <ul className="grid gap-4 md:grid-cols-2">
            {certifications.map((c) => (
              <li key={c.name}>
                <Card className="h-full">
                  <CardHeader>
                    <h3 className="text-lg font-bold">{c.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {c.issuer}, {c.date}
                    </p>
                    {c.link ? (
                      <a
                        href={c.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-flex items-center gap-1 rounded-sm text-sm font-medium text-link hover:underline"
                      >
                        View certificate
                        <ExternalLink className="size-3.5" aria-hidden="true" />
                        <span className="sr-only">(opens in a new tab)</span>
                      </a>
                    ) : null}
                  </CardHeader>
                </Card>
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </>
  );
}
