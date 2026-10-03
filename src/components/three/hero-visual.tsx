"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { StaticWireframe } from "./static-wireframe";

// three.js is only downloaded if every check in canRunWebGL() passes.
const HeroScene = dynamic(() => import("./hero-scene"), {
  ssr: false,
  loading: () => <StaticWireframe />,
});

type NavigatorExtras = Navigator & {
  deviceMemory?: number;
  connection?: { saveData?: boolean; effectiveType?: string };
};

function canRunWebGL() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  if (!window.matchMedia("(min-width: 1024px)").matches) return false;

  const nav = navigator as NavigatorExtras;
  if (nav.deviceMemory && nav.deviceMemory < 4) return false;
  if (nav.hardwareConcurrency && nav.hardwareConcurrency < 4) return false;
  if (nav.connection?.saveData) return false;
  if (nav.connection?.effectiveType && /(^|-)(2g|3g)$/.test(nav.connection.effectiveType)) return false;

  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl2") ?? canvas.getContext("webgl");
    if (!gl) return false;
    gl.getExtension("WEBGL_lose_context")?.loseContext();
    return true;
  } catch {
    return false;
  }
}

export function HeroVisual() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!canRunWebGL()) return;

    let cancelled = false;
    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const schedule = () => {
      if ("requestIdleCallback" in window) {
        idleId = window.requestIdleCallback(() => !cancelled && setEnabled(true), { timeout: 3000 });
      } else {
        timeoutId = setTimeout(() => !cancelled && setEnabled(true), 2000);
      }
    };

    // Wait for the page to finish loading, then for an idle moment.
    if (document.readyState === "complete") schedule();
    else window.addEventListener("load", schedule, { once: true });

    return () => {
      cancelled = true;
      window.removeEventListener("load", schedule);
      if (idleId !== undefined) window.cancelIdleCallback(idleId);
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div aria-hidden="true" className="hidden aspect-square w-full max-w-md lg:block">
      {enabled ? <HeroScene /> : <StaticWireframe />}
    </div>
  );
}
