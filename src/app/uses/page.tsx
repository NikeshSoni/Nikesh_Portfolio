import { usesGroups } from "@/data/uses";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/shared/container";
import { PageHeader } from "@/components/shared/page-header";

export const metadata = buildMetadata({
  title: "Uses",
  description: "The hardware, editor, tools, and tech stack I use for development.",
  path: "/uses",
});

export default function UsesPage() {
  return (
    <>
      <PageHeader title="Uses" description="The hardware, tools, and stack I use day to day." />
      <Container className="py-16 sm:py-20">
        <div className="divide-y divide-border border-y border-border">
          {usesGroups.map((g, i) => (
            <section key={g.title} aria-labelledby={`uses-${i}`} className="grid gap-4 py-8 md:grid-cols-[14rem_1fr] md:gap-10">
              <h2 id={`uses-${i}`} className="text-xl font-bold">
                {g.title}
              </h2>
              <ul className="space-y-2 text-base leading-7">
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Container>
    </>
  );
}
