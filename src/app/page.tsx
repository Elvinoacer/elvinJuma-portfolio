"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import ExpertiseSection from "@/components/ExpertiseSection";
import WorkSection from "@/components/WorkSection";
import ExperienceSection from "@/components/ExperienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#0f0f11] text-[#e2e8f0]"
    >
      <Hero />
      <ExpertiseSection />
      <WorkSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ContactSection />
    </motion.div>
  );
}
