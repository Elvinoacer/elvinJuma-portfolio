"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [outerPos, setOuterPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on non-touch devices
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target?.closest("a") ||
        target?.closest("button") ||
        target?.closest(".cursor-link") ||
        target?.closest("[role='button']") ||
        target?.closest("input") ||
        target?.closest("textarea")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  // Smooth lerp for outer ring
  useEffect(() => {
    let animationFrameId: number;
    const lerp = () => {
      setOuterPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.2,
        y: prev.y + (pos.y - prev.y) * 0.2,
      }));
      animationFrameId = requestAnimationFrame(lerp);
    };
    animationFrameId = requestAnimationFrame(lerp);
    return () => cancelAnimationFrame(animationFrameId);
  }, [pos]);

  if (!isVisible) return null;

  return (
    <>
      <div
        className="pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-75 hidden md:block"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          width: "6px",
          height: "6px",
          backgroundColor: "#66d9ed",
        }}
      />
      <div
        className={`pointer-events-none fixed z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#66d9ed] transition-[width,height,background-color] duration-200 hidden md:block ${
          isHovered
            ? "w-12 h-12 bg-[#66d9ed]/10 border-[#66d9ed]"
            : "w-8 h-8 bg-transparent opacity-80"
        }`}
        style={{
          left: `${outerPos.x}px`,
          top: `${outerPos.y}px`,
        }}
      />
    </>
  );
}
