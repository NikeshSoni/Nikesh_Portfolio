"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

interface StaggerProps {
  children: React.ReactNode;
  delay?: number;
  staggerChildren?: number;
  className?: string;
}

export function StaggerContainer({
  children,
  delay = 0,
  staggerChildren = 0.08,
  className,
}: StaggerProps) {
  const reduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        className={className}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: reduce ? 0 : staggerChildren,
              delayChildren: delay,
            },
          },
        }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        className={className}
        variants={{
          hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.96 },
          show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] },
          },
        }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
