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

  useEffect(() => {
    if (isHovered) {
      const interval = setInterval(() => {
        setGradientPos({
          x: Math.random() * 100,
          y: Math.random() * 100,
        });
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative overflow-hidden rounded-2xl shadow-2xl w-full max-w-md mx-auto"
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
        className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/30 to-emerald-900/20 bg-[length:200%_200%]"
      />

      {/* Glow effect */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-white/10 backdrop-blur-sm"
        />
      )}

      {/* Content container */}
      <div className="relative z-10 p-6 md:p-8 bg-gray-900/80 backdrop-blur-sm h-full">
        {/* Image with parallax effect */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative overflow-hidden rounded-xl mb-6 aspect-video"
        >
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </motion.div>

        {/* Title with animated underline */}
        <motion.h3
          className="text-2xl md:text-3xl font-bold mb-3 text-white"
          whileHover={{ x: 5 }}
        >
          {title}
          <motion.span
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            className="block h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 mt-1"
            transition={{ duration: 0.3 }}
          />
        </motion.h3>

        {/* Description */}
        <motion.p
          className="text-gray-300 mb-6 text-sm md:text-base"
          whileHover={{ x: 2 }}
        >
          {description}
        </motion.p>

        {/* Tags with floating animation */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((t, index) => (
            <motion.span
              key={index}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -3,
                scale: 1.05,
                background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
                boxShadow: "0 4px 14px rgba(139, 92, 246, 0.4)",
              }}
              className="bg-gray-700 text-white px-3 py-1 rounded-full text-xs md:text-sm font-medium cursor-default"
            >
              {t}
            </motion.span>
          ))}
        </div>

        {/* Animated button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-auto"
        >
          <Link
            target="_blank"
            href={link}
            className="inline-block w-full text-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-2 px-6 rounded-lg shadow-lg transition-all duration-300"
          >
            <motion.span
              className="flex items-center justify-center gap-2"
              whileHover={{ gap: 3 }}
            >
              View Project
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                animate={isHovered ? { x: 3 } : { x: 0 }}
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </motion.svg>
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
