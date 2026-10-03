import { Container } from "./container";
import { FadeIn } from "./fade-in";

export function PageHeader({ title, description }: { title: string; description?: string }) {
  return (
    <header className="relative border-b border-border/60 bg-card/20 pb-12 pt-14 backdrop-blur-sm sm:pb-16 sm:pt-20">
      <Container>
        <FadeIn direction="up">
          <h1 className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
            {title}
          </h1>
          {description ? (
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {description}
            </p>
          ) : null}
        </FadeIn>
      </Container>
    </header>
  );
}
