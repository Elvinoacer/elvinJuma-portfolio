// components/GradientOrb.tsx
"use client";

import { motion } from "framer-motion";

export default function GradientOrb() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        x: [-100, 100, -100],
        y: [-50, 50, -50],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
      className="fixed top-1/2 left-1/2 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-600/30 blur-[80px] pointer-events-none"
    />
  );
}
