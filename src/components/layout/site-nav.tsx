"use client";

import { useEffect, useRef, useState, ComponentType } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Home,
  User,
  Briefcase,
  Sparkles,
  Building2,
  GraduationCap,
  FileText,
  BookOpen,
  Laptop,
  Mail,
  ChevronRight,
  Code2,
  Send,
} from "lucide-react";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import { allNav, primaryNav } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/shared/social-links";

// Icon mapping for navigation routes
const navIcons: Record<string, ComponentType<{ className?: string }>> = {
  "/": Home,
  "/about": User,
  "/projects": Briefcase,
  "/skills": Sparkles,
  "/experience": Building2,
  "/education": GraduationCap,
  "/resume": FileText,
  "/blog": BookOpen,
  "/uses": Laptop,
  "/contact": Mail,
};

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <LazyMotion features={domAnimation}>
      <nav aria-label="Main" className="hidden lg:block">
        <ul className="flex items-center gap-1 bg-muted/30 p-1.5 rounded-full border border-border/40 backdrop-blur-sm">
          {primaryNav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <li key={item.href} className="relative">
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative z-10 flex h-9 items-center justify-center rounded-full px-4 text-xs font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                    active
                      ? "text-primary-foreground font-semibold"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {item.label}
                  {active && (
                    <m.span
                      layoutId="desktop-active-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-primary shadow-sm shadow-primary/30"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </LazyMotion>
  );
}

export function MobileNav({ onOpenIde }: { onOpenIde?: () => void }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setOpen((o) => !o)}
        className="relative z-50 inline-flex size-10 items-center justify-center rounded-full border border-border/70 bg-card/80 text-foreground backdrop-blur-md shadow-sm transition-all hover:border-primary/50 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <LazyMotion features={domAnimation}>
          <m.div
            key={open ? "close" : "open"}
            initial={{ scale: 0.6, rotate: -90, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0.6, rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </m.div>
        </LazyMotion>
      </button>

      <LazyMotion features={domAnimation}>
        <AnimatePresence>
          {open && (
            <>
              {/* Backdrop */}
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setOpen(false)}
                className="fixed inset-0 z-40 bg-background/60 backdrop-blur-md"
              />

              {/* Drawer Content */}
              <m.nav
                id="mobile-menu"
                aria-label="Mobile Navigation"
                initial={{ opacity: 0, y: -20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="fixed inset-x-3 top-20 z-40 max-h-[85vh] overflow-y-auto rounded-3xl border border-border/80 bg-background/95 p-5 shadow-2xl backdrop-blur-2xl sm:inset-x-6 sm:p-6"
              >
                {/* Header info in drawer */}
                <div className="mb-4 flex items-center justify-between border-b border-border/50 pb-3">
                  <div>
                    <p className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground">
                      Navigation
                    </p>
                  </div>
                  {onOpenIde && (
                    <button
                      type="button"
                      onClick={() => {
                        setOpen(false);
                        onOpenIde();
                      }}
                      className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/40 bg-purple-500/10 px-3 py-1 font-mono text-xs font-medium text-purple-600 dark:text-purple-300 transition-colors hover:bg-purple-500/20"
                    >
                      <Code2 className="size-3.5" />
                      <span>IDE Mode</span>
                    </button>
                  )}
                </div>

                {/* Navigation links grid */}
                <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                  {allNav.map((item, i) => {
                    const active = isActive(pathname, item.href);
                    const Icon = navIcons[item.href] || ChevronRight;

                    return (
                      <m.li
                        key={item.href}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.02, duration: 0.2 }}
                      >
                        <Link
                          href={item.href}
                          aria-current={active ? "page" : undefined}
                          className={cn(
                            "group flex h-12 items-center justify-between rounded-2xl px-4 text-base font-medium transition-all duration-200",
                            active
                              ? "bg-primary text-primary-foreground font-semibold shadow-md shadow-primary/20"
                              : "bg-muted/40 text-foreground hover:bg-muted hover:text-primary",
                          )}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={cn(
                                "flex size-8 items-center justify-center rounded-xl transition-colors",
                                active
                                  ? "bg-primary-foreground/20 text-primary-foreground"
                                  : "bg-background/80 text-muted-foreground group-hover:text-primary",
                              )}
                            >
                              <Icon className="size-4" />
                            </div>
                            <span>{item.label}</span>
                          </div>
                          <ChevronRight
                            className={cn(
                              "size-4 opacity-50 transition-transform group-hover:translate-x-0.5",
                              active ? "opacity-100 text-primary-foreground" : "",
                            )}
                          />
                        </Link>
                      </m.li>
                    );
                  })}
                </ul>

                {/* Bottom Footer Actions inside Mobile Menu */}
                <div className="mt-6 border-t border-border/50 pt-5 space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <Button asChild className="w-full justify-center gap-2 rounded-xl shadow-sm" size="sm">
                      <Link href="/contact">
                        <Send className="size-4" />
                        <span>Get in Touch</span>
                      </Link>
                    </Button>

                    <Button asChild variant="outline" className="w-full justify-center gap-2 rounded-xl" size="sm">
                      <Link href="/resume">
                        <FileText className="size-4" />
                        <span>Resume</span>
                      </Link>
                    </Button>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs font-mono text-muted-foreground">Social Links</span>
                    <SocialLinks />
                  </div>
                </div>
              </m.nav>
            </>
          )}
        </AnimatePresence>
      </LazyMotion>
    </div>
  );
}
