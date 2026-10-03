import { Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/shared/container";
import { PageHeader } from "@/components/shared/page-header";
import { SocialLinks } from "@/components/shared/social-links";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata = buildMetadata({
  title: "Contact",
  description: `Get in touch with ${siteConfig.name} by email or through social links.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact" description="Send a message about a project or role. I'll reply by email." />
      <Container className="grid gap-16 py-16 sm:py-20 lg:grid-cols-[1.2fr_0.8fr]">
        <section aria-labelledby="form-heading">
          <h2 id="form-heading" className="mb-6 text-2xl font-bold">
            Send a message
          </h2>
          <ContactForm email={siteConfig.email} />
        </section>

        <section aria-labelledby="details-heading">
          <h2 id="details-heading" className="mb-6 text-2xl font-bold">
            Contact details
          </h2>
          <ul className="space-y-4 text-base">
            <li className="flex items-start gap-3">
              <Mail className="mt-1 size-5 shrink-0 text-link" aria-hidden="true" />
              <div className="min-w-0">
                <p className="text-sm text-muted-foreground">Email</p>
                <a href={`mailto:${siteConfig.email}`} className="break-all hover:text-link hover:underline">
                  {siteConfig.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-1 size-5 shrink-0 text-link" aria-hidden="true" />
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p>{siteConfig.location}</p>
              </div>
            </li>
          </ul>
          <h3 className="mb-2 mt-10 text-lg font-bold">Find me online</h3>
          <SocialLinks className="-ml-3" />
        </section>
      </Container>
    </>
  );
}
