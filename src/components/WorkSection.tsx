"use client";

import { useState, type CSSProperties } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, MoveRight } from "lucide-react";
import { featuredProjects, type Project } from "@/data/projects";
import { projectDomains, portfolioRepositoryCount } from "@/data/project-domains";
import ProjectCard from "./ProjectCard";
import styles from "./WorkStory.module.css";

const ProjectDetails = dynamic(() => import("./ProjectDetails"));

export default function WorkSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const active = featuredProjects[activeIndex];

  return (
    <section id="work" aria-labelledby="work-title" className={styles.section}>
      <div className={styles.shell}>
        <nav className={styles.readingPaths} aria-label="Choose how to explore the portfolio">
          <a href="#selected-story"><span>01 / THE SHORT TOUR</span>Eight stories worth a closer look <ArrowDownRight size={18} aria-hidden="true" /></a>
          <Link href="/projects#explorer" prefetch={false}><span>02 / FIND YOUR WORLD</span>Explore every project <ArrowUpRight size={18} aria-hidden="true" /></Link>
          <a href="#journey"><span>03 / FOLLOW THE THREAD</span>How the work evolved <ArrowDownRight size={18} aria-hidden="true" /></a>
        </nav>
        <div className={styles.heading}>
          <div><p className={styles.eyebrow}>Selected stories / 2024—2026</p><h2 id="work-title">Real problems.<br /><span>Connected <em>systems.</em></span></h2></div>
          <p>Behind every interface is someone trying to get something done. These are the systems I built around that work.</p>
        </div>
        <div className={styles.storyLayout}>
          <div className={styles.storyIndex}>
            <p className={styles.indexLabel}>Choose a story <span>{String(activeIndex + 1).padStart(2, "0")} / {featuredProjects.length}</span></p>
            <div className={styles.storyButtons} role="group" aria-label="Featured project stories">
              {featuredProjects.map((project, index) => <button key={project.id} type="button" aria-pressed={activeIndex === index} aria-controls="selected-story" onClick={() => setActiveIndex(index)} className={styles.storyButton}>
                <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
                <span><strong>{project.title}</strong><small>{project.domain ?? project.category}</small></span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </button>)}
            </div>
            <p className={styles.indexNote}>Different industries.<br />One habit: follow the whole workflow.</p>
          </div>
          <div id="selected-story" className={styles.activeStory}>
            <p className="sr-only" aria-live="polite" aria-atomic="true">Selected story: {active.title}</p>
            <ProjectCard key={active.id} {...active} index={activeIndex} wide onSelect={setSelectedProject} />
            {active.story ? <ol className={styles.storyBeats} aria-label={`${active.title} story`}>
              <li><span>01 / THE PERSON</span><p>{active.story.customer}</p></li>
              <li><span>02 / THE WORKFLOW</span><p>{active.story.operations}</p></li>
              <li><span>03 / THE ENGINEERING</span><p>{active.story.engineering}</p></li>
            </ol> : null}
            <div className={styles.storyNavigation}><span>{active.period ? `Repository activity: ${active.period}` : active.year}</span><button type="button" onClick={() => setActiveIndex((activeIndex + 1) % featuredProjects.length)}>Next story <MoveRight size={18} aria-hidden="true" /></button></div>
          </div>
        </div>
        <div id="industries" className={styles.worlds}>
          <div className={styles.worldsHeading}><div><p className={styles.eyebrow}>The wider body of work</p><h3>Find the world<br />you care about.</h3></div><p>Flagship systems, focused applications, websites, and the building blocks behind them. Every repository has a place.</p></div>
          <div className={styles.domainGrid}>{projectDomains.map((domain) => <Link key={domain.id} prefetch={false} href={`/projects?domain=${domain.id}#explorer`} className={styles.domainCard} style={{ "--domain-accent": domain.accent } as CSSProperties}><span className={styles.domainCount}>{String(domain.count).padStart(2, "0")} REPOSITORIES</span><h4>{domain.label}</h4><p>{domain.description}</p><ArrowUpRight size={22} aria-hidden="true" /></Link>)}</div>
          <Link href="/projects#explorer" prefetch={false} className={styles.completeLink}>Explore the complete collection <span>{portfolioRepositoryCount} repositories, in context</span><ArrowUpRight aria-hidden="true" /></Link>
        </div>
      </div>
      {selectedProject ? <ProjectDetails project={selectedProject} onClose={() => setSelectedProject(null)} /> : null}
    </section>
  );
}
