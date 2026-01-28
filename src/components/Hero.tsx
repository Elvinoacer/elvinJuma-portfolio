"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Optional: Parallax effect on mouse move (disabled on mobile)
  useEffect(() => {
    if (isMobile) return;
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  return (
    <>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s linear infinite;
        }
      `}</style>

      <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-slate-950 text-white selection:bg-emerald-500/30 px-4 sm:px-6">
        {/* --- BACKGROUND LAYERS --- */}

        {/* 1. Grid Pattern with Mask */}
        <div className="absolute inset-0 z-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] md:h-[310px] md:w-[310px] rounded-full bg-emerald-500 opacity-20 blur-[80px] sm:blur-[100px]"></div>
        </div>

        {/* 2. Dynamic Glowing Orbs (Replaces static gradient) */}
        <motion.div
          animate={
            isMobile
              ? {}
              : {
                  x: mousePosition.x * 0.05,
                  y: mousePosition.y * 0.05,
                }
          }
          className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-emerald-500/20 rounded-full blur-2xl sm:blur-3xl -z-10 mix-blend-screen"
        />
        <motion.div
          animate={
            isMobile
              ? {}
              : {
                  x: mousePosition.x * -0.05,
                  y: mousePosition.y * -0.05,
                }
          }
          className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-cyan-500/20 rounded-full blur-2xl sm:blur-3xl -z-10 mix-blend-screen"
        />

        {/* 3. Subtle Grain Overlay (Adds texture/premium feel) */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        ></div>

        {/* --- CONTENT LAYER --- */}

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
          {/* Greeting Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 sm:mb-8"
          >
            <span className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs sm:text-sm font-medium tracking-wide backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-emerald-500"></span>
              </span>
              Available for Hire
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 sm:mb-6"
          >
            <span className="block text-slate-300 mb-1 sm:mb-2 text-lg sm:text-xl md:text-3xl lg:text-4xl font-normal">
              I&apos;m
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-slate-400">
              Elvin Omondi
            </span>
          </motion.h1>

          {/* Type Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[32px] sm:h-[40px] md:h-[50px] lg:h-[60px] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-emerald-400 mb-6 sm:mb-8"
          >
            <TypeAnimation
              sequence={[
                "Full-Stack Developer",
                1000,
                "UI/UX Enthusiast",
                1000,
                "Problem Solver",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 text-slate-400 leading-relaxed"
          >
            Building digital experiences that blend{" "}
            <span className="text-slate-100 font-medium">
              technical excellence
            </span>{" "}
            with{" "}
            <span className="text-slate-100 font-medium">visual mastery</span>.
            Focused on performance, accessibility, and clean code.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full"
          >
            <Link
              href="/projects"
              className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm sm:text-base md:text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)] w-full sm:w-auto text-center"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer" />
              <span>View Work</span>
            </Link>

            <Link
              href="/contact"
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm text-white font-medium text-sm sm:text-base md:text-lg transition-all hover:bg-white/10 hover:scale-105 hover:border-white/20 w-full sm:w-auto text-center"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-1.5 sm:gap-2">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-500">
              Scroll
            </span>
            <div className="w-[1px] h-8 sm:h-12 bg-gradient-to-b from-emerald-500 to-transparent"></div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
