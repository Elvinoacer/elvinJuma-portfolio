"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { projects, featuredProjects, type Project } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import ProjectDetails from "@/components/ProjectDetails";
import styles from "./WorkShowcase.module.css";

export default function WorkSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const reduceMotion = useReducedMotion();

  return (
    <section id="work" aria-labelledby="work-title" className={styles.workSection}>
      <div className={styles.shell}>
        <div className={styles.sectionOverline}><span><i />01 / Selected work</span><span>2025 — Present</span></div>
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className={styles.workHeading}>
          <h2 id="work-title">Built for<br /><span>the <em>real world.</em></span></h2>
          <div><ArrowDownRight className={styles.headingArrow} strokeWidth={1} aria-hidden="true" /><p>Care. Commerce.<br />Everyday operations.<br /><span>Three systems, shaped around the people who use them.</span></p></div>
        </motion.div>
        <div className={styles.chapters}>{featuredProjects.map((project, index) => <ProjectCard key={project.id} {...project} index={index} wide onSelect={setSelectedProject} />)}</div>
        <div className={styles.archiveLink}><p>SaaS, systems, mobile, and the work that came before.</p><Link href="/projects">Explore all work <span>{projects.length}</span><ArrowUpRight aria-hidden="true" /></Link></div>
      </div>
      {selectedProject ? <ProjectDetails project={selectedProject} onClose={() => setSelectedProject(null)} /> : null}
    </section>
  );
}
