"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={cn("size-10 rounded-full border border-border bg-card/50", className)} aria-hidden="true" />
    );
  }

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <LazyMotion features={domAnimation}>
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        className={cn(
          "relative inline-flex size-10 items-center justify-center rounded-full border border-border/70 bg-card/80 p-2 text-foreground backdrop-blur-md transition-all hover:border-primary/50 hover:bg-card hover:text-primary hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
          className,
        )}
      >
        <m.div
          key={isDark ? "dark" : "light"}
          initial={{ scale: 0.5, rotate: -90, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          exit={{ scale: 0.5, rotate: 90, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <Sun className="size-5 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
          ) : (
            <Moon className="size-5 text-indigo-600 drop-shadow-[0_0_8px_rgba(79,70,229,0.3)]" />
          )}
        </m.div>
      </button>
    </LazyMotion>
  );
}
