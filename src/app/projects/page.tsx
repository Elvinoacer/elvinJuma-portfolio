"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const containerRef = useRef(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Adjusted values for better mobile visibility
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  const [titleRef, titleInView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const [gridRef, gridInView] = useInView({
    threshold: 0.05,
    triggerOnce: false,
  });

  const [showScrollPrompt, setShowScrollPrompt] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile on mount
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Modified auto-scroll to be less aggressive on mobile
  useEffect(() => {
    const timer = setTimeout(
      () => {
        setShowScrollPrompt(false);
        if (projectsRef.current && !isMobile) {
          projectsRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      },
      isMobile ? 500 : 1500
    );

    return () => clearTimeout(timer);
  }, [isMobile]);

  const handleScrollToProjects = () => {
    setShowScrollPrompt(false);
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({
        behavior: "smooth",
        block: isMobile ? "center" : "start",
      });
    }
  };

  // Background particles effect
  useEffect(() => {
    if (typeof window !== "undefined") {
      const canvas = document.createElement("canvas");
      canvas.style.position = "fixed";
      canvas.style.top = "0";
      canvas.style.left = "0";
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      canvas.style.pointerEvents = "none";
      canvas.style.zIndex = "-1";
      canvas.style.opacity = "0.3";
      document.body.appendChild(canvas);

      const ctx = canvas.getContext("2d");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      interface Particle {
        x: number;
        y: number;
        size: number;
        speedX: number;
        speedY: number;
        color: string;
      }

      const particles: Particle[] = [];
      const particleCount = isMobile ? 20 : 60;

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: Math.random() * 1 - 0.5,
          speedY: Math.random() * 1 - 0.5,
          color: `hsl(${Math.random() * 60 + 200}, 80%, 60%)`,
        });
      }

      function animateParticles() {
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();

          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const distance = Math.sqrt(
              Math.pow(p.x - p2.x, 2) + Math.pow(p.y - p2.y, 2)
            );

            if (distance < 100) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(100, 200, 255, ${1 - distance / 100})`;
              ctx.lineWidth = 0.3;
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }

          p.x += p.speedX;
          p.y += p.speedY;

          if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
          if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
        }

        requestAnimationFrame(animateParticles);
      }

      animateParticles();

      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        document.body.removeChild(canvas);
      };
    }
  }, [isMobile]);

  return (
    <motion.section
      ref={containerRef}
      style={{ opacity }}
      className="relative overflow-hidden min-h-[100vh] w-full py-10 px-4 sm:px-6 lg:px-8"
    >
      {/* Scroll prompt */}
      {showScrollPrompt && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="text-center p-6 max-w-md bg-gray-900 rounded-xl mx-4"
          >
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-white">
              View My Projects
            </h2>
            <p className="text-sm md:text-base text-gray-300 mb-4">
              Let me show you what I&apos;ve been working on...
            </p>
            <motion.button
              onClick={handleScrollToProjects}
              className="px-4 py-2 md:px-6 md:py-3 text-sm md:text-base bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold"
              whileHover={{ scale: isMobile ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Projects
            </motion.button>
          </motion.div>
        </motion.div>
      )}

      {/* Animated background elements */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute top-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-2xl md:blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-0 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-2xl md:blur-3xl opacity-20 animate-blob animation-delay-4000" />
        <div className="absolute bottom-0 left-1/2 w-64 h-64 md:w-96 md:h-96 bg-emerald-600 rounded-full mix-blend-multiply filter blur-2xl md:blur-3xl opacity-20 animate-blob" />
      </motion.div>

      <div className="max-w-7xl mx-auto">
        {/* Animated title */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mt-5 mb-12 md:mb-20"
        >
          <motion.h1
            className="text-3xl md:text-5xl lg:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 pb-2 md:pb-4"
            whileHover={{ scale: isMobile ? 1 : 1.02 }}
          >
            What I Build
          </motion.h1>
          <motion.p
            className="text-base md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Explore my collection of innovative solutions and creative
            implementations
          </motion.p>

          {/* Scroll prompt button */}
          <motion.div
            className="flex flex-col items-center justify-center mt-6"
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <motion.p
              className="text-xs md:text-sm text-gray-400 mb-2"
              animate={{
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              Keep scrolling
            </motion.p>
            <motion.button
              onClick={handleScrollToProjects}
              className="p-1 md:p-2 rounded-full bg-gray-800 bg-opacity-50 border border-gray-600"
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: isMobile ? 1 : 1.1,
                backgroundColor: "rgba(55, 65, 81, 0.8)",
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-6 md:w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          ref={gridRef}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: isMobile ? 0.05 : 0.1,
                delayChildren: isMobile ? 0.1 : 0.2,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: isMobile ? 20 : 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: isMobile ? 0.4 : 0.6,
                    ease: "easeOut",
                  },
                },
              }}
              whileHover={{
                y: isMobile ? 0 : -10,
                transition: { duration: 0.3 },
              }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Floating CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: isMobile ? 0.5 : 1, duration: 0.6 }}
          className="text-center mt-12 md:mt-24"
        >
          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-4 md:mb-6"
            animate={{
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Want to see more?
          </motion.p>
          <motion.a
            href="/contact"
            className="inline-block px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg"
            whileHover={{
              scale: isMobile ? 1 : 1.05,
              boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(20px, -30px) scale(1.05);
          }
          66% {
            transform: translate(-15px, 15px) scale(0.95);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </motion.section>
  );
}
