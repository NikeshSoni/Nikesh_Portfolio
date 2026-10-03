import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border/80 bg-muted/70 px-3 py-1 text-xs font-mono font-medium text-foreground backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-primary/10 hover:text-primary",
        className,
      )}
      {...props}
    />
  );
}
