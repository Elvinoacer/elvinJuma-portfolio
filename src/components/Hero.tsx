"use client";

import { useRef } from "react";
import { ArrowDown, ArrowUpRight, FileDown, X } from "lucide-react";
import { site } from "@/data/site";
import GenerativeSculpture from "./GenerativeSculpture";

export default function Hero() {
  const overview = useRef<HTMLDialogElement>(null);
  return (
    <section id="hero-section" className="hero-section">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-topline page-shell">
        <p className="eyebrow"><span className="status-dot" /> OPEN FOR THE RIGHT OPPORTUNITY</p>
        <p className="eyebrow hero-location">ELDORET, KENYA <span> / </span> AVAILABLE WORLDWIDE</p>
      </div>
      <div className="hero-stage page-shell">
        <div className="hero-copy">
          <p className="hero-intro"><span className="small-cross">✳</span> Elvin Juma — Full-stack engineer</p>
          <h1 className="hero-title">
            <span className="hero-line"><span>Ideas into</span></span>
            <span className="hero-line"><span className="accent-text">exceptional</span></span>
            <span className="hero-line"><span>digital things<span className="hero-period">.</span></span></span>
          </h1>
          <p className="hero-description">I turn complex problems into thoughtful software.<br className="hidden sm:block" /> From the first sketch to the last line of production code.</p>
          <div className="hero-actions">
            <a className="button-primary" href="#work">Explore my work <ArrowDown size={18} /></a>
            <button className="overview-button" onClick={() => overview.current?.showModal()}>The 30-second overview <ArrowUpRight size={17} /></button>
          </div>
        </div>
        <div className="hero-art">
          <div className="art-coordinate art-coordinate-top"><span>FIG. 01</span><span>CONTINUOUS EXPLORATION</span></div>
          <GenerativeSculpture />
          <div className="art-caption"><span className="art-cross">+</span><p>Curiosity in motion.<br /><span>Engineering at the core.</span></p><span className="art-cross">+</span></div>
        </div>
      </div>
      <div className="hero-bottom page-shell">
        <div className="hero-footnote"><span className="hero-footnote-line" /> INDEPENDENT MIND. PRODUCT INSTINCT.</div>
        <a href="#work" className="hero-scroll">SCROLL TO DISCOVER <ArrowDown size={14} /></a>
      </div>
      <div className="stack-strip"><div className="page-shell stack-strip-inner"><span className="eyebrow">MY EVERYDAY TOOLKIT</span><div className="stack-names"><span>Next.js</span><span>React</span><span>TypeScript</span><span>PostgreSQL</span><span>Prisma</span></div><span className="stack-plus" aria-hidden="true">✳</span></div></div>
      <dialog ref={overview} className="overview-dialog" aria-labelledby="overview-title" onClick={(event) => { if (event.target === event.currentTarget) overview.current?.close(); }}>
        <div className="overview-panel">
          <div className="flex items-center justify-between gap-4"><p className="eyebrow accent-text">THE 30-SECOND OVERVIEW</p><button className="icon-button" aria-label="Close overview" onClick={() => overview.current?.close()}><X size={20} /></button></div>
          <h2 id="overview-title" className="mt-8 text-4xl font-semibold tracking-tight sm:text-5xl">Your next<br />product engineer.</h2>
          <p className="mt-5 leading-relaxed text-[#a2a59b]">I’m {site.name}, a founding engineer and full-stack developer based in {site.location}. I build the interface, the systems behind it, and the path to production.</p>
          <div className="overview-facts"><div><span>EXPERIENCE</span><strong>{site.yearsShipping} years shipping</strong></div><div><span>CURRENTLY</span><strong>Founding Engineer, GTSS</strong></div><div><span>CORE STACK</span><strong>Next.js · TypeScript · PostgreSQL</strong></div><div><span>LOOKING FOR</span><strong>Full-time & select freelance work</strong></div></div>
          <p className="text-sm leading-relaxed text-[#a2a59b]">Selected work: German Virtual School, Concept Builders, and Great Thumbs Software Solutions.</p>
          <div className="mt-8 flex flex-wrap gap-3"><a href={site.resume} target="_blank" rel="noopener noreferrer" className="button-primary">View résumé <FileDown size={17} /></a><a href={`mailto:${site.email}`} className="button-secondary">Get in touch <ArrowUpRight size={17} /></a></div>
        </div>
      </dialog>
    </section>
  );
}
