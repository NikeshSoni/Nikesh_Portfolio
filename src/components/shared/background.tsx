"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";

export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none">
      {/* Dynamic Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.4] dark:opacity-[0.25] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Floating Ambient Glowing Light Spheres */}
      <LazyMotion features={domAnimation}>
        <m.div
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="absolute -top-32 left-1/4 size-[500px] rounded-full bg-gradient-to-tr from-purple-600/20 via-indigo-500/15 to-pink-500/10 blur-[120px] dark:from-purple-600/30 dark:via-indigo-600/20 dark:to-violet-800/15"
        />

        <m.div
          animate={{
            x: [0, -35, 25, 0],
            y: [0, 35, -30, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="absolute top-1/3 -right-24 size-[450px] rounded-full bg-gradient-to-br from-blue-500/15 via-cyan-500/15 to-violet-500/10 blur-[110px] dark:from-blue-600/25 dark:via-indigo-500/20 dark:to-cyan-600/15"
        />

        <m.div
          animate={{
            x: [0, 25, -30, 0],
            y: [0, -25, 35, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="absolute -bottom-24 left-1/3 size-[550px] rounded-full bg-gradient-to-tl from-indigo-500/15 via-violet-600/10 to-emerald-500/10 blur-[130px] dark:from-indigo-900/30 dark:via-purple-900/20 dark:to-pink-900/15"
        />
      </LazyMotion>

      {/* Radial Vignette */}
      <div className="absolute inset-0 bg-background/30 backdrop-blur-[1px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_100%)]" />
    </div>
  );
}
