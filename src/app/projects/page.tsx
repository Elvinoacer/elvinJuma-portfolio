import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ArrowDown } from "lucide-react";
import ProjectExplorer from "@/components/ProjectExplorer";
import ProjectTimeline from "@/components/ProjectTimeline";
import { featuredProjects } from "@/data/projects";
import { portfolioRepositoryCount, projectDomains } from "@/data/project-domains";
import styles from "./PortfolioPage.module.css";

export default function Projects() {
  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <Link href="/" className={styles.back}><ArrowLeft size={14} aria-hidden="true" /> Back to the story</Link>
        <header className={styles.hero}>
          <div className={styles.heroCopy}><p className={styles.eyebrow}>The complete engineering portfolio</p><h1>The work.<br /><span>And the way <em>here.</em></span></h1><p>From first experiments to pharmacy networks, local marketplaces, and software that keeps a kitchen moving. Follow a story, find an industry, or go straight to a project.</p><nav className={styles.jumpLinks} aria-label="Portfolio shortcuts"><a href="#explorer">Find a project <ArrowDown size={16} aria-hidden="true" /></a><a href="#journey">Follow the timeline <ArrowDown size={16} aria-hidden="true" /></a></nav></div>
          <div className={styles.scopeObject} aria-label={`${portfolioRepositoryCount} reviewed repositories across ${projectDomains.length} industries, from 2024 to 2026`}><span className={styles.objectRing} aria-hidden="true" /><span className={styles.objectRingTwo} aria-hidden="true" /><div className={styles.objectPanel}><span>THE BODY OF WORK</span><strong>{portfolioRepositoryCount}<i>↗</i></strong><p>repositories, in context</p><div><span>{projectDomains.length} industries</span><span>2024—2026</span></div></div></div>
        </header>
        <section className={styles.featured} aria-labelledby="deeper-builds"><div className={styles.sectionTitle}><h2 id="deeper-builds">Start with the deeper builds.</h2><span>Eight connected systems / the short list</span></div><div className={styles.featuredGrid}>{featuredProjects.map((project, index) => <a key={project.id} href={`/projects?q=${encodeURIComponent(project.repoSlug ?? project.github.split("/").pop() ?? project.title)}#explorer`}><span>{String(index + 1).padStart(2, "0")} / {project.domain ?? project.category}</span><h3>{project.title}</h3><p>{project.scopeLabel ?? project.headline}</p><ArrowUpRight size={18} aria-hidden="true" /></a>)}</div></section>
        <ProjectExplorer />
      </div>
      <ProjectTimeline />
      <div className={`${styles.shell} ${styles.contact}`}><h2>What are we<br />building next?</h2><Link href="/contact">Let&apos;s talk <ArrowUpRight size={24} aria-hidden="true" /></Link></div>
    </div>
  );
}
