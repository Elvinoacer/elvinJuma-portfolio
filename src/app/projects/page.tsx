"use client";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { HiTerminal, HiCode, HiLightningBolt } from "react-icons/hi";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Projects() {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  const [headerRef, headerInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [gridRef, gridInView] = useInView({
    threshold: 0.05,
    triggerOnce: true,
  });

  // Check for mobile on mount
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-slate-950 overflow-hidden py-16 sm:py-20 md:py-24"
    >
      {/* --- BACKGROUND LAYERS --- */}

      {/* 1. Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* 2. Dynamic Glowing Orbs */}
      <motion.div
        animate={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
        }}
        className="absolute top-1/4 left-1/4 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-emerald-500/10 blur-[80px] sm:blur-[100px] md:blur-[120px] rounded-full pointer-events-none mix-blend-screen"
      />
      <motion.div
        animate={{
          x: mousePosition.x * -0.02,
          y: mousePosition.y * -0.02,
        }}
        className="absolute bottom-1/4 right-1/4 w-[250px] sm:w-[350px] md:w-[500px] h-[250px] sm:h-[350px] md:h-[500px] bg-cyan-500/10 blur-[80px] sm:blur-[100px] md:blur-[120px] rounded-full pointer-events-none mix-blend-screen"
      />
      <motion.div
        animate={{
          x: mousePosition.x * 0.015,
          y: mousePosition.y * -0.015,
        }}
        className="absolute top-1/2 right-1/3 w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] bg-emerald-600/5 blur-[60px] sm:blur-[80px] md:blur-[100px] rounded-full pointer-events-none mix-blend-screen"
      />

      {/* 3. Subtle Grain Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* --- HEADER SECTION --- */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-10 sm:mb-12 md:mb-16"
        >
          <span className="inline-block py-1 px-2.5 sm:px-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4">
            // Portfolio
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-slate-100 mb-4 sm:mb-6 tracking-tight leading-tight">
            Crafting digital experiences{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              that make an impact.
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mx-auto px-2">
            A showcase of my recent work—from full-stack web applications to
            innovative AI solutions. Each project represents a unique challenge
            solved with clean code and creative thinking.
          </p>
        </motion.div>

        {/* --- STATS BAR --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-10 sm:mb-12 md:mb-16"
        >
          <div className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-emerald-500/30 transition-colors duration-500">
            <div className="grid grid-cols-3 gap-3 sm:gap-6">
              <StatItem
                icon={<HiCode />}
                value={`${projects.length}+`}
                label="Projects"
              />
              <StatItem
                icon={<HiLightningBolt />}
                value="4+"
                label="Years Exp."
              />
              <StatItem
                icon={<HiTerminal />}
                value="100%"
                label="Satisfaction"
              />
            </div>
          </div>
        </motion.div>

        {/* --- TERMINAL HEADER --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={gridInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto mb-6 sm:mb-8"
        >
          <div className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-lg sm:rounded-xl overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-slate-900/80 border-b border-white/5">
              <div className="flex gap-1 sm:gap-1.5">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80"></div>
              </div>
              <span className="text-slate-500 text-[10px] sm:text-xs font-mono ml-1 sm:ml-2 flex items-center gap-1">
                <HiTerminal className="text-emerald-500" />
                <span className="hidden xs:inline">projects --list --featured</span>
                <span className="xs:hidden">projects</span>
              </span>
            </div>
            <div className="p-3 sm:p-4 font-mono text-xs sm:text-sm">
              <span className="text-emerald-400">$</span>
              <span className="text-slate-400 ml-2">
                Rendering {projects.length} projects...
              </span>
              <span className="ml-2 inline-block w-1.5 sm:w-2 h-3 sm:h-4 bg-emerald-500 animate-pulse"></span>
            </div>
          </div>
        </motion.div>

        {/* --- PROJECTS GRID --- */}
        <motion.div
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
              whileHover={isMobile ? {} : { y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden hover:border-emerald-500/30 transition-all duration-500 h-full">
                <ProjectCard {...project} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* --- BOTTOM CTA --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center gap-5 sm:gap-8 border-t border-white/5 pt-12 sm:pt-16 md:pt-20 mt-12 sm:mt-16 md:mt-20"
        >
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 text-center max-w-2xl px-2">
            Interested in working together?{" "}
            <span className="text-white font-bold">Let&apos;s build something amazing.</span>
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
            <motion.a
              href="/contact"
              className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-emerald-500 text-slate-950 font-bold text-sm sm:text-base rounded-lg sm:rounded-xl overflow-hidden transition-transform hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)] text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer" />
              <span className="relative z-10">Get In Touch</span>
            </motion.a>

            <motion.a
              href="https://github.com/Elvinoacer"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-slate-900 border border-white/10 rounded-lg sm:rounded-xl text-slate-300 font-medium text-sm sm:text-base hover:bg-slate-800 hover:text-white hover:border-emerald-500/30 transition-all duration-300 text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              View GitHub
            </motion.a>
          </div>
        </motion.div>
      </div>

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
    </section>
  );
}

// --- Helper Components ---

function StatItem({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
        <span className="text-emerald-400 text-base sm:text-lg md:text-xl">{icon}</span>
        <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">
          {value}
        </span>
      </div>
      <p className="text-[10px] sm:text-xs md:text-sm text-slate-400">{label}</p>
    </div>
  );
}
