import Link from "next/link";
import { Mail, Send } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/shared/section";
import { FadeIn } from "@/components/shared/fade-in";

export function ContactCta() {
  return (
    <Section id="contact-cta">
      <FadeIn direction="up">
        <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-card via-card to-primary/10 p-8 sm:p-12 md:p-16 shadow-xl backdrop-blur-xl">
          <div className="absolute -right-16 -top-16 size-64 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl">
            <h2 id="contact-cta-heading" className="font-heading text-3xl font-extrabold tracking-tight sm:text-5xl text-foreground">
              Let&apos;s build something <span className="bg-gradient-to-r from-primary via-indigo-500 to-purple-500 bg-clip-text text-transparent">extraordinary</span> together.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Have a project in mind, an open role, or just want to connect? Send me a message and I&apos;ll get back to you promptly.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  <Send className="size-4 transition-transform group-hover:translate-x-1" />
                  <span>Send Message</span>
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={`mailto:${siteConfig.email}`}>
                  <Mail className="size-4 text-primary" />
                  <span>Email Directly</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
