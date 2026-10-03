"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Code2, FileDown } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { ThemeToggle } from "@/components/theme-toggle";
import { DesktopNav, MobileNav } from "./site-nav";
import { VsCodeModal } from "@/components/shared/vscode-modal";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [ideModalOpen, setIdeModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard shortcut Ctrl+K / Cmd+K to toggle IDE Mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIdeModalOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          scrolled
            ? "border-b border-border/80 bg-background/85 shadow-lg shadow-primary/5 backdrop-blur-xl dark:shadow-black/40 py-2.5"
            : "border-b border-border/40 bg-background/60 backdrop-blur-md py-3.5",
        )}
      >
        {/* Subtle accent border line when scrolled */}
        <div
          className={cn(
            "absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent transition-opacity duration-300 pointer-events-none",
            scrolled ? "opacity-100" : "opacity-0",
          )}
        />

        <Container className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Logo & Status Badge */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="group relative flex items-center gap-2.5 rounded-xl font-heading text-lg sm:text-xl font-bold tracking-tight text-foreground transition-all hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {/* Code Avatar Box */}
              <div className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-500/20 via-indigo-500/20 to-primary/20 border border-purple-500/30 text-purple-600 dark:text-purple-400 shadow-xs transition-transform duration-300 group-hover:scale-105 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                <Code2 className="size-5" />
              </div>

              <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text font-extrabold tracking-tight group-hover:from-primary group-hover:to-purple-600 transition-all">
                {siteConfig.name}
              </span>
            </Link>

            {/* Pulse Status Badge (Desktop) */}
            <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-[11px] font-mono font-medium text-emerald-600 dark:text-emerald-400 shadow-xs">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500"></span>
              </span>
              <span>Available for work</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <DesktopNav />

          {/* Header Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            {/* VS Code IDE Mode Trigger */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIdeModalOpen(true)}
              className="gap-1.5 rounded-full border-purple-500/30 bg-purple-500/10 text-purple-600 dark:text-purple-300 hover:bg-purple-500/20 hover:border-purple-500/50 font-mono text-xs shadow-xs transition-all h-9 px-3"
              title="Open Interactive VS Code Mode (Ctrl+K)"
            >
              <Code2 className="size-3.5 text-purple-500" />
              <span className="hidden sm:inline">IDE Mode</span>
              <span className="hidden xl:inline-block ml-0.5 rounded bg-purple-500/20 px-1 py-0.5 text-[10px] text-purple-700 dark:text-purple-300">
                ⌘K
              </span>
            </Button>

            <ThemeToggle />

            {/* Resume Button */}
            <Button
              asChild
              size="sm"
              className="hidden sm:inline-flex gap-1.5 rounded-full shadow-xs hover:shadow-md hover:scale-105 transition-all h-9 px-4 font-medium"
            >
              <Link href="/resume">
                <FileDown className="size-3.5" />
                <span>Resume</span>
              </Link>
            </Button>

            {/* Mobile Menu */}
            <MobileNav onOpenIde={() => setIdeModalOpen(true)} />
          </div>
        </Container>
      </header>

      {/* VS Code Interactive IDE Modal */}
      <VsCodeModal isOpen={ideModalOpen} onClose={() => setIdeModalOpen(false)} />
    </>
  );
}
