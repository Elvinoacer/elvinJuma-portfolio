"use client";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsPreview from "../components/ProjectsPreview";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-[#080a0e] text-white"
    >
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ProjectsPreview />
      <Testimonials />
      <ContactSection />
    </motion.div>
  );
}
