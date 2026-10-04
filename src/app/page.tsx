import Hero from "@/components/Hero";
import ExpertiseSection from "@/components/ExpertiseSection";
import WorkSection from "@/components/WorkSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import ProjectTimeline from "@/components/ProjectTimeline";

export default function Home() {
  return <><Hero /><WorkSection /><ProjectTimeline compact /><ExpertiseSection /><ExperienceSection /><ContactSection /></>;
}
