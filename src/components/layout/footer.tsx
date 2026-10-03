import Link from "next/link";
import { allNav } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/shared/container";
import { SocialLinks } from "@/components/shared/social-links";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card/40 backdrop-blur-md py-12 sm:py-16 transition-colors duration-300">
      <Container>
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <p className="font-heading text-xl font-bold tracking-tight text-foreground">{siteConfig.name}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{siteConfig.title}</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-4 inline-block font-mono text-sm text-primary transition-colors hover:underline"
            >
              {siteConfig.email}
            </a>
          </div>
          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-1 sm:grid-cols-3">
              {allNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex h-9 items-center font-medium text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-border/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-mono text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <SocialLinks className="-ml-3 sm:ml-0" />
        </div>
      </Container>
    </footer>
  );
}
