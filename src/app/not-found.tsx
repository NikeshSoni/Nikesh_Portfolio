import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <Container className="py-24 sm:py-32">
      <p className="font-heading text-6xl font-bold text-link sm:text-8xl">404</p>
      <h1 className="mt-6 text-3xl font-bold sm:text-4xl">Page not found</h1>
      <p className="mt-4 max-w-md text-lg leading-8 text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild size="lg">
          <Link href="/">Go home</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/projects">See projects</Link>
        </Button>
      </div>
    </Container>
  );
}
