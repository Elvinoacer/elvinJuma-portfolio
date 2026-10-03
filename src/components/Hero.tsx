"use client";

import { useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, FileDown, X, Pause, Play } from "lucide-react";
import { site } from "@/data/site";
import LightField from "./LightField";
import styles from "./Hero.module.css";

function subscribeMotionPreference(onChange: () => void) {
  const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  preference.addEventListener("change", onChange);
  return () => preference.removeEventListener("change", onChange);
}

function readMotionPreference() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// Match the server snapshot during hydration, then read the actual device preference.
const serverMotionPreference = () => false;

export default function Hero() {
  const overview = useRef<HTMLDialogElement>(null);
  const root = useRef<HTMLElement>(null);
  const reduced = useSyncExternalStore(subscribeMotionPreference, readMotionPreference, serverMotionPreference);
  const [paused, setPaused] = useState(false);
  const pointerX = useMotionValue(0);
  const portraitX = useSpring(pointerX, { stiffness: 45, damping: 25 });
  const { scrollYProgress } = useScroll({ target: root, offset: ["start start", "end start"] });
  const portraitY = useTransform(scrollYProgress,[0,1],[0,140]);
  const textY = useTransform(scrollYProgress,[0,1],[0,-60]);
  const activeMotion = !reduced && !paused;
  return (
    <section ref={root} id="hero-section" className={styles.hero} onPointerMove={(event) => { if (!activeMotion || event.pointerType !== "mouse") return; const bounds=event.currentTarget.getBoundingClientRect();pointerX.set(((event.clientX-bounds.left)/bounds.width-.5)*18); }} onPointerLeave={() => pointerX.set(0)}>
      <motion.div className={styles.portrait} style={{position:"absolute",x:activeMotion ? portraitX : 0,y:activeMotion ? portraitY : 0}}><Image src="/images/elvin-editorial.webp" alt="" fill priority sizes="100vw" className={styles.portraitImage} /><div className={styles.portraitShade} /></motion.div>
      <div className={styles.lightField}><LightField paused={paused} /></div>
      <div className={styles.grain} aria-hidden="true" />
      <div className={styles.verticalGrid} aria-hidden="true"><i /><i /><i /><i /></div>
      <div className={`${styles.topline} page-shell`}><p><span className="status-dot" /> AVAILABLE FOR THE RIGHT OPPORTUNITY</p><p>PRODUCT ENGINEER <span> / </span> KENYA · WORLDWIDE</p></div>
      <div className={`${styles.stage} page-shell`}>
        <div className={styles.identity}><span className={styles.identityStar} aria-hidden="true">✳</span><div>ELVIN JUMA<span>FULL-STACK SOFTWARE ENGINEER</span></div></div>
        <motion.div style={{y:activeMotion ? textY : 0}} className={styles.titleBlock}>
          <h1 className={styles.title}><span className={styles.titleLine}><span>ENGINEER.</span></span><span className={styles.middleLine}><span className={styles.fineLine} /><em>with an</em><span className={styles.titleAsterisk} aria-hidden="true">✳</span></span><span className={`${styles.titleLine} ${styles.outlinedLine}`}><span>ARTIST’S EYE.</span></span></h1>
        </motion.div>
        <div className={styles.heroNote}><span>01 / THE HUMAN BEHIND THE CODE</span><p>Curious by nature.<br />Intentional by design.</p><span className={styles.noteCross}>+</span></div>
        <div className={styles.bottomContent}><p>I turn real workflows into software.<br />From web platforms to <em>offline systems.</em></p><div className={styles.actions}><a href="#work" className={styles.workButton}><span>Discover the work</span><ArrowDown size={19} /></a><button onClick={() => overview.current?.showModal()} className={styles.quickView}>Short on time?<span>Get the 30-second version <ArrowUpRight size={14} /></span></button></div></div>
      </div>
      <div className={`${styles.heroFooter} page-shell`}><span>THINK DEEPLY. BUILD BEAUTIFULLY.</span><a href="#work" aria-label="Scroll to selected work" className={styles.scrollCue}><span /><span>SCROLL TO EXPLORE</span></a><button onClick={() => setPaused(!paused)} className={styles.motionToggle} disabled={!!reduced} aria-pressed={activeMotion} aria-label={reduced ? "Ambient motion disabled by device preference" : paused ? "Enable ambient motion" : "Pause ambient motion"}>{paused ? <Play size={12} /> : <Pause size={12} />} MOTION {paused || reduced ? "OFF" : "ON"}</button></div>
      <dialog ref={overview} className="overview-dialog" aria-labelledby="overview-title" onClick={(event) => { if (event.target === event.currentTarget) overview.current?.close(); }}>
        <div className="overview-panel">
          <div className="flex items-center justify-between gap-4"><p className="eyebrow accent-text">THE 30-SECOND OVERVIEW</p><button className="icon-button" aria-label="Close overview" onClick={() => overview.current?.close()}><X size={20} /></button></div>
          <h2 id="overview-title" className="mt-8 text-4xl font-semibold tracking-tight sm:text-5xl">Your next<br />product engineer.</h2>
          <p className="mt-5 leading-relaxed text-[#a2a59b]">I’m {site.name}, a full-stack software engineer based in {site.location} and founder of GTSS. I build business software across web, desktop, and mobile, with work in multi-tenant SaaS, real-time systems, and AI search.</p>
          <div className="overview-facts"><div><span>BUILDING SINCE</span><strong>2024</strong></div><div><span>CURRENTLY</span><strong>Founder & Product Engineer, GTSS</strong></div><div><span>CORE STACK</span><strong>Next.js · TypeScript · PostgreSQL</strong></div><div><span>LOOKING FOR</span><strong>Full-time & select freelance work</strong></div></div>
          <p className="text-sm leading-relaxed text-[#a2a59b]">Selected work: Afyvia, JustInTime, Restaurant Manager, Concept Builders, and German Virtual School.</p>
          <div className="mt-8 flex flex-wrap gap-3"><a href={site.resume} target="_blank" rel="noopener noreferrer" className="button-primary">View résumé <FileDown size={17} /></a><a href={`mailto:${site.email}`} className="button-secondary">Get in touch <ArrowUpRight size={17} /></a></div>
        </div>
      </dialog>
    </section>
  );
}
