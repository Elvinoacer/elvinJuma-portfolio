"use client";

import { motion } from "framer-motion";
import Hero from "../components/Hero";
import GitHubActivity from "../components/GitHubActivity";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsPreview from "../components/ProjectsPreview";
import ExperienceSection from "../components/ExperienceSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-[#030712] text-slate-200"
    >
      <Hero />
      <GitHubActivity />
      <ProjectsPreview />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
    </motion.div>
  );
}
