"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  scale?: boolean;
  className?: string;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  direction = "up",
  scale = false,
  className,
}: FadeInProps) {
  const reduce = useReducedMotion();

  const getInitial = () => {
    if (reduce) return { opacity: 0 };

    const offset = 20;
    const initial: { opacity: number; x?: number; y?: number; scale?: number } = { opacity: 0 };

    if (direction === "up") initial.y = offset;
    if (direction === "down") initial.y = -offset;
    if (direction === "left") initial.x = offset;
    if (direction === "right") initial.x = -offset;
    if (scale) initial.scale = 0.95;

    return initial;
  };

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        className={className}
        initial={getInitial()}
        whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
