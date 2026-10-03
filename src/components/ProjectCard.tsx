"use client";

import type { CSSProperties, PointerEvent } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, MoveUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import styles from "./WorkShowcase.module.css";

type ProjectCardProps = Project & {
  index?: number;
  wide?: boolean;
  onSelect?: (project: Project) => void;
};

const featuredCaptions: Record<string, string> = {
  healthcare: "Patient & pharmacy experience",
  marketplace: "Service discovery & booking",
  desktop: "Restaurant command workspace",
};

export default function ProjectCard({ index = 0, wide = false, onSelect, ...project }: ProjectCardProps) {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, { stiffness: 75, damping: 23 });
  const y = useSpring(pointerY, { stiffness: 75, damping: 23 });
  const rotateX = useTransform(y, [-1, 1], [1, -1]);
  const rotateY = useTransform(x, [-1, 1], [-1.5, 1.5]);
  const imageStyle = {
    "--image-aspect": `${project.imageWidth} / ${project.imageHeight}`,
  } as CSSProperties;

  function moveScene(event: PointerEvent<HTMLElement>) {
    if (reduceMotion || !wide || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 2);
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 2);
  }

  function resetScene() {
    pointerX.set(0);
    pointerY.set(0);
  }

  const preview = (
    <div style={imageStyle} className={`${styles.scene} ${styles[project.scene]} ${wide ? styles.chapterScene : styles.compactScene}`}>
      {wide ? <div className={styles.sceneAmbience} aria-hidden="true"><Image src={project.image} alt="" fill sizes="400px" className="object-cover" /></div> : null}
      <div className={styles.sceneTopline} aria-hidden="true"><span><i />{wide ? featuredCaptions[project.scene] ?? project.category : project.category}</span><span>{project.year}</span></div>
      <span className={styles.sceneOrbit} aria-hidden="true" />
      <motion.div className={styles.sceneObjects} style={reduceMotion || !wide ? undefined : { rotateX, rotateY }}>
        <div className={`${styles.desktopFrame} ${project.imageWidth < project.imageHeight ? styles.portraitFrame : ""}`}>
          {wide && !project.imageHasBrowserChrome ? <div className={styles.browserBar} aria-hidden="true"><div><i /><i /><i /></div><span>{new URL(project.liveUrl ?? project.github).hostname}</span><ArrowUpRight size={11} /></div> : null}
          <div className={styles.desktopImage}>
            <Image src={project.image} alt={project.imageAlt} fill className="object-contain" sizes={wide ? "(max-width: 767px) 85vw, (max-width: 1440px) 85vw, 1180px" : "(max-width: 767px) 85vw, (max-width: 1440px) 42vw, 640px"} />
          </div>
        </div>
      </motion.div>
      <div className={styles.sceneFooter} aria-hidden="true"><span>{project.imagePlaceholder ? "Project preview coming soon" : wide ? project.headline : project.imageCaption ?? "Explore the project"}</span><span className={styles.sceneArrow}><MoveUpRight /></span></div>
    </div>
  );

  const actions = (
    <div className={styles.projectActions}>
      {onSelect ? <button type="button" onClick={() => onSelect(project)} aria-label={`Explore ${project.title} engineering details`} className={styles.detailButton}>Explore the build <ArrowUpRight size={16} aria-hidden="true" /></button> : null}
      <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.liveLink} aria-label={`View ${project.title} on GitHub (opens in a new tab)`}>GitHub <ArrowUpRight size={14} aria-hidden="true" /></a>
      {project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.liveLink} aria-label={`Visit ${project.title} live site (opens in a new tab)`}>Live site <ArrowUpRight size={14} aria-hidden="true" /></a> : null}
    </div>
  );

  return (
    <motion.article initial={reduceMotion ? false : { opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }} className={`${styles.project} ${wide ? styles.chapter : styles.compact}`}>
      {wide ? <div className={styles.chapterMasthead}>
        <div className={styles.chapterTitle}><span className={styles.chapterNumber}>/ {String(index + 1).padStart(2, "0")}</span><div><p className={styles.chapterCategory}>{project.category} / {project.year}</p><h3>{project.title}<span className={styles.titleDot}>.</span></h3></div></div>
        <div className={styles.chapterSummary}><p className={styles.featuredStatement}>{project.featuredTitle ?? project.headline}</p><p>{project.featuredSummary ?? project.description}</p>{actions}</div>
      </div> : null}
      <div className={styles.previewWrap} onPointerMove={moveScene} onPointerLeave={resetScene}>
        {onSelect ? <button type="button" onClick={() => onSelect(project)} aria-label={`Explore ${project.title}`} className={styles.previewButton}>{preview}</button> : <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub (opens in a new tab)`} className={styles.previewButton}>{preview}</a>}
      </div>
      {wide ? <div className={styles.chapterFooter}><p>{project.outcome}</p><div>{project.tags.slice(0, 4).map((tag) => <span key={tag}>{tag}</span>)}</div></div> : <div className={styles.compactDetails}><p className={styles.chapterCategory}>{project.category} / {project.year}</p><h3>{project.title}</h3><p>{project.description}</p><div className={styles.compactTags}>{project.tags.slice(0, 4).map((tag) => <span key={tag}>{tag}</span>)}</div>{actions}</div>}
    </motion.article>
  );
}
