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

  // Changed the opacity transform to maintain better visibility
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.8]); // Reduced opacity fade

  const [titleRef, titleInView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const [gridRef, gridInView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const [showScrollPrompt, setShowScrollPrompt] = useState(true);

  // Auto-scroll to projects after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScrollPrompt(false);
      if (projectsRef.current) {
        projectsRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleScrollToProjects = () => {
    setShowScrollPrompt(false);
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Background particles effect (unchanged)
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
      const particleCount = window.innerWidth < 768 ? 30 : 80;

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
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

          // Create circles
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();

          // Create connections
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const distance = Math.sqrt(
              Math.pow(p.x - p2.x, 2) + Math.pow(p.y - p2.y, 2)
            );

            if (distance < 150) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(100, 200, 255, ${1 - distance / 150})`;
              ctx.lineWidth = 0.5;
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }

          // Move particles
          p.x += p.speedX;
          p.y += p.speedY;

          // Bounce off edges
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
  }, []);

  return (
    <motion.section
      ref={containerRef}
      style={{ opacity }}
      className="relative overflow-hidden min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8"
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
            className="text-center p-8 max-w-md bg-gray-900 rounded-xl"
          >
            <h2 className="text-2xl font-bold mb-4 text-white">
              View My Projects
            </h2>
            <p className="text-gray-300 mb-6">
              Let me show you what I&apos;ve been working on...
            </p>
            <motion.button
              onClick={handleScrollToProjects}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold"
              whileHover={{ scale: 1.05 }}
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
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-emerald-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      </motion.div>

      <div className="max-w-7xl mx-auto">
        {/* Animated title */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 50 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 pb-4"
            whileHover={{ scale: 1.02 }}
          >
            What I Build
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Explore my collection of innovative solutions and creative
            implementations
          </motion.p>

          {/* New scroll prompt button */}
          <motion.div
            className="flex flex-col items-center justify-center mt-8"
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.p
              className="text-sm text-gray-400 mb-2"
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
              className="p-2 rounded-full bg-gray-800 bg-opacity-50 border border-gray-600"
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(55, 65, 81, 0.8)",
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
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

        {/* Projects grid with staggered animation */}
        <motion.div
          ref={gridRef}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut",
                  },
                },
              }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Floating CTA at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-24"
        >
          <motion.p
            className="text-xl text-gray-300 mb-6"
            animate={{
              scale: [1, 1.05, 1],
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
            className="inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>

      {/* Add these styles to your globals.css */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
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
