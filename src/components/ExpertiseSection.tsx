"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Braces, Database, Layers3 } from "lucide-react";

const capabilities = [
  { title: "Interfaces with intention.", label: "FRONTEND ENGINEERING", icon: Braces, description: "Responsive, accessible experiences with the small details that make software feel good to use.", tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Motion"] },
  { title: "Systems you can build on.", label: "BACKEND & ARCHITECTURE", icon: Database, description: "Data models and access boundaries for multi-tenant products, with payment handling, real-time messaging, and local systems that work offline.", tools: ["Node.js", "PostgreSQL", "Prisma", "SQLite", "Socket.IO", "Electron"] },
  { title: "From what if to shipped.", label: "PRODUCT OWNERSHIP", icon: Layers3, description: "Turning field feedback into practical business software. Requirements, integrations, deployment, and continuous refinement across SaaS, mobile, and AI search projects.", tools: ["M-Pesa / Daraja", "IntaSend", "Linux", "Expo", "LangChain", "Pinecone"] },
];
const code = [
  { file: "interface.tsx", lines: ["const experience = {", "  clarity: 'before cleverness',", "  accessibility: 'by default',", "  details: 'never an afterthought',", "};", "", "export default thoughtfulUI;"] },
  { file: "architecture.ts", lines: ["const system = {", "  data: 'PostgreSQL / SQLite',", "  identity: 'tenant + role boundaries',", "  connections: 'realtime / local network',", "};", "", "// Built for the context it runs in."] },
  { file: "process.ts", lines: ["async function build(workflow) {", "  const insight = await understand(workflow);", "  const product = await make(insight);", "  await ship(product);", "  return refine(product, await fieldFeedback());", "}", "// The next iteration starts with users."] },
];

export default function ExpertiseSection() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  return <section id="expertise" className="expertise-section"><div className="page-shell"><div className="section-overline"><span>02 / THE WAY I BUILD</span><span>CRAFT + SYSTEMS + OWNERSHIP</span></div><div className="expertise-heading"><h2>A creative eye.<br /><span>An engineering mind.</span></h2><p>Good software needs both.<br />I work across the whole picture.</p></div><div className="expertise-layout"><div className="capability-list" role="tablist" aria-label="Engineering capabilities" aria-orientation="vertical">{capabilities.map((item, i) => <button key={item.label} id={`capability-${i}`} type="button" role="tab" aria-selected={active === i} aria-controls="capability-panel" tabIndex={active === i ? 0 : -1} onClick={() => setActive(i)} onKeyDown={(event) => { let next = i; if (event.key === "ArrowDown") next = (i + 1) % 3; else if (event.key === "ArrowUp") next = (i + 2) % 3; else if (event.key === "Home") next = 0; else if (event.key === "End") next = 2; else return; event.preventDefault(); setActive(next); document.getElementById(`capability-${next}`)?.focus(); }} className={`capability-item ${active === i ? "active" : ""}`}><span className="capability-icon"><item.icon size={22} strokeWidth={1.5} /></span><span><span className="eyebrow">{item.label}</span><strong>{item.title}</strong></span><ArrowUpRight size={20} /></button>)}</div><div id="capability-panel" role="tabpanel" aria-labelledby={`capability-${active}`} tabIndex={0} className="capability-panel"><motion.div key={active} initial={reduced ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}><div className="code-window"><div className="code-window-header"><div aria-hidden="true"><i /><i /><i /></div><span>{code[active].file}</span><span className="accent-text">TS</span></div><pre aria-label="Illustrative engineering philosophy">{code[active].lines.map((line, i) => <span key={i} className="code-line"><span aria-hidden="true">{String(i + 1).padStart(2, "0")}</span><code>{line}</code></span>)}</pre></div><p className="capability-description">{capabilities[active].description}</p><div className="capability-tags">{capabilities[active].tools.map(tool => <span key={tool}>{tool}</span>)}</div></motion.div></div></div></div></section>;
}
