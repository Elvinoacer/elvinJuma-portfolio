"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900/20 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <p className="text-blue-400 font-mono text-lg mb-2">
            Hello, I&apos;m
          </p>
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
            Elvin Omondi
          </h1>
          <div className="text-2xl md:text-4xl font-semibold min-h-[60px]">
            <TypeAnimation
              sequence={[
                "Full-Stack Developer",
                1500,
                "UI/UX Enthusiast",
                1500,
                "Tech Blogger",
                1500,
                "Open Source Contributor",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-300"
        >
          I build exceptional digital experiences with modern web technologies.
          Focused on creating performant, accessible, and visually appealing
          applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/projects"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View My Work
          </Link>
          <Link
            href="/contact"
            className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10 px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
          >
            Contact Me
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
          <div className="animate-bounce w-6 h-6 mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-blue-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
