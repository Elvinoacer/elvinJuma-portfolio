"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="bg-[#070909] text-slate-200"
    >
      <Hero />
      <WorkSection />
      <SkillsSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ContactSection />
    </motion.div>
  );
}
