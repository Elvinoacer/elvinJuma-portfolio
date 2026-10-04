"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { useMotionEnabled, systemPrefersReducedMotion } from "@/lib/motion-preference";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const motionEnabled = useMotionEnabled();

  useEffect(() => {
    // Only run smooth scroll on desktop with pointer/mouse and motion enabled
    if (!motionEnabled || systemPrefersReducedMotion()) return;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [motionEnabled]);

  return <>{children}</>;
}
