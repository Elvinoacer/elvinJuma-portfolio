"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const featuredLogos = [
  {
    name: "BlogDuWebdesign",
    logo: "/images/logo-bdwd.png",
    href: "https://www.blogduwebdesign.com",
    isPng: true,
  },
  {
    name: "Featured",
    logo: "/images/featured.com-logo.svg",
    href: "https://blog.featured.com",
  },
  {
    name: "Hostinger",
    logo: "/images/hostinger-logo.svg",
    href: "https://www.hostinger.com",
  },
  {
    name: "Upwork",
    logo: "/images/upwork-logo.svg",
    href: "https://www.upwork.com",
  },
  {
    name: "CareerFoundry",
    logo: "/images/careerfoundry-logo.svg",
    href: "https://careerfoundry.com",
  },
  {
    name: "Frontend Mentor",
    logo: "/images/frontend-mentor-logo.svg",
    href: "https://www.frontendmentor.io",
  },
  {
    name: "WeAreDevelopers",
    logo: "/images/WeAreDevelopers-logo.svg",
    href: "https://www.wearedevelopers.com",
  },
  {
    name: "Colorlib",
    logo: "/images/colorlib-logo.svg",
    href: "https://colorlib.com",
  },
  {
    name: "Masai",
    logo: "/images/masai-logo.svg",
    href: "https://www.masaischool.com",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto scroll featured logos every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (featuredLogos.length - 4));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? featuredLogos.length - 5 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % (featuredLogos.length - 4));
  };

  return (
    <section
      id="hero-section"
      className="relative flex min-h-screen flex-col justify-between overflow-hidden pt-28 pb-10 sm:pt-36 sm:pb-14 bg-[#0f0f11]"
    >
      {/* 3D Floating Cubes Backdrop Image (Exact match to image.png) */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden z-0">
        <div className="relative w-full max-w-5xl h-[650px] opacity-75 sm:opacity-85 mix-blend-screen transition-opacity duration-1000">
          <Image
            src="/images/hero-3d-bg.jpg"
            alt="3D Geometric Cubes"
            fill
            priority
            className="object-contain object-center scale-110"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          {/* Subtle Radial Vignette Fade */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#0f0f11_75%)]" />
        </div>
      </div>

      {/* Main Center Content (ELVIN JUMA + Subtitle) */}
      <div className="relative z-10 mx-auto flex flex-col items-center justify-center text-center px-4 sm:px-6 my-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <h1 className="text-6xl font-black uppercase tracking-tight text-white sm:text-7xl md:text-8xl lg:text-[7.5rem] leading-none select-none drop-shadow-2xl">
            ELVIN JUMA
          </h1>

          {/* Glowing dot interactive accent */}
          <div
            className="absolute -right-3 bottom-3 sm:-right-4 sm:bottom-4 h-4 w-4 rounded-full border-2 border-[#66d9ed] bg-transparent shadow-[0_0_15px_#66d9ed] animate-pulse"
            aria-hidden="true"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 sm:mt-8"
        >
          <h2 className="font-sans text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.25em] text-slate-200 select-none">
            SOFTWARE ENGINEER, FRONT END &amp; APP DEVELOPER.
          </h2>
        </motion.div>
      </div>

      {/* "AS FEATURED IN" Carousel Section */}
      <div className="relative z-10 mt-auto pt-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-center font-mono text-[11px] uppercase tracking-[0.3em] text-slate-500 mb-6">
            AS FEATURED IN
          </p>

          <div className="relative flex items-center justify-center gap-4 sm:gap-8">
            {/* Prev Arrow */}
            <button
              onClick={handlePrev}
              className="text-slate-600 hover:text-white transition-colors p-1 cursor-link"
              aria-label="Previous logos"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Logos Strip */}
            <div className="flex items-center justify-center gap-8 sm:gap-14 overflow-hidden max-w-4xl py-2">
              {featuredLogos
                .slice(currentIndex, currentIndex + 5)
                .concat(
                  currentIndex + 5 > featuredLogos.length
                    ? featuredLogos.slice(0, (currentIndex + 5) % featuredLogos.length)
                    : []
                )
                .slice(0, 5)
                .map((brand) => (
                  <a
                    key={brand.name}
                    href={brand.href}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="group relative flex h-9 items-center justify-center opacity-60 transition-all duration-300 hover:opacity-100 hover:scale-105 shrink-0 cursor-link"
                  >
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      width={130}
                      height={32}
                      className="max-h-7 w-auto object-contain filter brightness-0 invert opacity-75 group-hover:opacity-100 transition-opacity"
                    />
                  </a>
                ))}
            </div>

            {/* Next Arrow */}
            <button
              onClick={handleNext}
              className="text-slate-600 hover:text-white transition-colors p-1 cursor-link"
              aria-label="Next logos"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
