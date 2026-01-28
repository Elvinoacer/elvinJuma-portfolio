"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  link,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [gradientPos, setGradientPos] = useState({ x: 50, y: 50 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isHovered && !isMobile) {
      const interval = setInterval(() => {
        setGradientPos({
          x: Math.random() * 100,
          y: Math.random() * 100,
        });
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered, isMobile]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={isMobile ? {} : { scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative overflow-hidden rounded-lg sm:rounded-2xl w-full h-full"
    >
      {/* Animated gradient background */}
      <motion.div
        animate={{
          backgroundPosition: `${gradientPos.x}% ${gradientPos.y}%`,
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-cyan-900/20 to-slate-900/30 bg-[length:200%_200%]"
      />

      {/* Glow effect */}
      {isHovered && !isMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-emerald-500/10 backdrop-blur-sm"
        />
      )}

      {/* Content container */}
      <div className="relative z-10 p-4 sm:p-6 md:p-8 bg-slate-900/80 backdrop-blur-sm h-full">
        {/* Image with parallax effect */}
        <motion.div
          whileHover={isMobile ? {} : { scale: 1.02 }}
          className="relative overflow-hidden rounded-lg sm:rounded-xl mb-4 sm:mb-6 aspect-video border border-white/5"
        >
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            animate={isHovered && !isMobile ? { scale: 1.1 } : { scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
        </motion.div>

        {/* Title with animated underline */}
        <motion.h3
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 text-white leading-tight"
          whileHover={isMobile ? {} : { x: 5 }}
        >
          {title}
          <motion.span
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            className="block h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 mt-1"
            transition={{ duration: 0.3 }}
          />
        </motion.h3>

        {/* Description */}
        <motion.p
          className="text-slate-400 mb-4 sm:mb-6 text-xs sm:text-sm md:text-base leading-relaxed line-clamp-3"
          whileHover={isMobile ? {} : { x: 2 }}
        >
          {description}
        </motion.p>

        {/* Tags with floating animation */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
          {tags.slice(0, isMobile ? 4 : tags.length).map((t, index) => (
            <motion.span
              key={index}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={
                isMobile
                  ? {}
                  : {
                      y: -3,
                      scale: 1.05,
                      background: "linear-gradient(90deg, #10b981, #06b6d4)",
                      boxShadow: "0 4px 14px rgba(16, 185, 129, 0.3)",
                    }
              }
              className="bg-slate-800 text-slate-300 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium cursor-default border border-white/5 hover:text-white transition-colors"
            >
              {t}
            </motion.span>
          ))}
          {isMobile && tags.length > 4 && (
            <span className="text-slate-500 text-[10px] sm:text-xs px-2 py-0.5 sm:py-1">
              +{tags.length - 4} more
            </span>
          )}
        </div>

        {/* Animated button */}
        <motion.div
          whileHover={isMobile ? {} : { scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="mt-auto"
        >
          <Link
            target="_blank"
            href={link}
            className="group relative inline-block w-full text-center bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm md:text-base py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl shadow-lg transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer" />
            <motion.span
              className="flex items-center justify-center gap-1.5 sm:gap-2 relative z-10"
              whileHover={isMobile ? {} : { gap: 3 }}
            >
              View Project
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3 h-3 sm:w-4 sm:h-4"
                animate={isHovered && !isMobile ? { x: 3 } : { x: 0 }}
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </motion.svg>
            </motion.span>
          </Link>
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
    </motion.div>
  );
}
