"use client";

import { useState, useSyncExternalStore, type CSSProperties } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, Search, X } from "lucide-react";
import { projectCatalog, projectDomains, projectScopes, type CatalogEntry } from "@/data/project-catalog";
import { featuredProjects, projects, type Project } from "@/data/projects";
import { getImageMeta } from "@/data/image-meta";
import styles from "./ProjectExplorer.module.css";

const ProjectDetails = dynamic(() => import("./ProjectDetails"));
const FILTER_EVENT = "portfolio:filters";
const scopeOrder = ["flagship", "application", "website", "service", "study", "starter", "fork"];
const searchText = new Map(projectCatalog.map((entry) => [entry.repo, `${entry.title} ${entry.repo} ${entry.summary} ${entry.significance} ${entry.status} ${entry.technologies ?? ""}`.toLowerCase()]));
const projectByRepo = new Map(projects.map((project) => [project.github.split("/").pop(), project]));
const flagshipByRepo = new Map(featuredProjects.map((project) => [project.github.split("/").pop(), project]));

function subscribeFilters(notify: () => void) {
  window.addEventListener("popstate", notify);
  window.addEventListener(FILTER_EVENT, notify);
  return () => { window.removeEventListener("popstate", notify); window.removeEventListener(FILTER_EVENT, notify); };
}

function PortfolioEntry({ entry, onSelect }: { entry: CatalogEntry; onSelect: (project: Project) => void }) {
  const imageProject = projectByRepo.get(entry.repo);
  const flagship = flagshipByRepo.get(entry.repo);
  const meta = imageProject ? getImageMeta(imageProject.image) : undefined;
  const scopeLabel = projectScopes.find((scope) => scope.id === entry.scope)?.label ?? entry.scope;
  return (
    <details className={styles.entry} id={`repo-${entry.repo}`}>
      <summary className={styles.entrySummary}>
        <span className={styles.entryMark} aria-hidden="true">{entry.title.slice(0, 2).toUpperCase()}</span>
        <span className={styles.entryTitle}><strong>{entry.title}</strong><span>{entry.summary}</span></span>
        <span className={styles.entryScope}>{scopeLabel}</span>
        <span className={styles.entryYear}>{entry.startYear}</span>
        <ChevronDown size={16} className={styles.entryChevron} aria-hidden="true" />
      </summary>
      <div className={styles.entryBody}>
        <div className={styles.entryVisual}>
          {imageProject ? <div className={styles.imageFrame}><Image src={imageProject.image} alt={imageProject.imageAlt} fill sizes="(max-width: 600px) 75vw, 240px" className="object-contain" placeholder={meta ? "blur" : "empty"} blurDataURL={meta?.blurDataURL} /></div> : <div className={styles.placeholder} role="img" aria-label={`${entry.title}: screenshot to come`}><span className={styles.placeholderOrbit} /><span>{entry.title.split(" ").slice(0, 2).map((word) => word[0]).join("")}</span><small>SCREENSHOT TO COME</small></div>}
        </div>
        <div className={styles.entryNarrative}><p className={styles.eyebrow}>Why this work belongs here</p><p>{entry.significance}</p><dl><div><dt>Repository activity</dt><dd>{entry.period}</dd></div><div><dt>Scope & status</dt><dd>{entry.status}</dd></div></dl>{entry.parentRepo ? <p className={styles.related}>Part of <a href={`https://github.com/Elvinoacer/${entry.parentRepo}`} target="_blank" rel="noopener noreferrer">{entry.parentRepo} <ArrowUpRight size={11} aria-hidden="true" /></a></p> : null}<div className={styles.entryActions}>{flagship ? <button type="button" onClick={() => onSelect(flagship)}>Read the full story <ArrowUpRight size={14} aria-hidden="true" /></button> : null}<a href={`https://github.com/Elvinoacer/${entry.repo}`} target="_blank" rel="noopener noreferrer" aria-label={`View ${entry.repo} on GitHub (opens in a new tab)`}>View repository <ArrowUpRight size={14} aria-hidden="true" /></a><code>{entry.repo}</code></div></div>
      </div>
    </details>
  );
}

export default function ProjectExplorer() {
  const locationSearch = useSyncExternalStore(subscribeFilters, () => window.location.search, () => "");
  const params = new URLSearchParams(locationSearch);
  const query = params.get("q") ?? "";
  const domain = projectDomains.some((item) => item.id === params.get("domain")) ? params.get("domain") ?? "" : "";
  const scope = projectScopes.some((item) => item.id === params.get("scope")) ? params.get("scope") ?? "" : "";
  const year = ["2024", "2025", "2026"].includes(params.get("year") ?? "") ? params.get("year") ?? "" : "";
  const [expansion, setExpansion] = useState<{ key: string; ids: string[] }>({ key: "", ids: [] });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const filterKey = `${query}|${domain}|${scope}|${year}`;
  const isFiltered = Boolean(query || domain || scope || year);
  const keywords = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  const baseMatches = projectCatalog.filter((entry) => (!scope || entry.scope === scope) && (!year || String(entry.startYear) === year) && keywords.every((word) => searchText.get(entry.repo)?.includes(word)));
  const matches = baseMatches.filter((entry) => !domain || entry.domain === domain);
  const groups = projectDomains.map((item) => ({ ...item, entries: matches.filter((entry) => entry.domain === item.id).sort((a, b) => scopeOrder.indexOf(a.scope) - scopeOrder.indexOf(b.scope)) })).filter((item) => item.entries.length > 0);
  const openIds = expansion.key === filterKey ? expansion.ids : isFiltered ? groups.map((group) => group.id) : [];
  const allOpen = groups.length > 0 && groups.every((group) => openIds.includes(group.id));

  function updateFilter(key: string, value: string) {
    const url = new URL(window.location.href);
    if (value) url.searchParams.set(key, value); else url.searchParams.delete(key);
    url.hash = "explorer";
    window.history.replaceState(null, "", url);
    window.dispatchEvent(new Event(FILTER_EVENT));
  }

  function resetFilters() {
    const url = new URL(window.location.href);
    ["q", "domain", "scope", "year"].forEach((key) => url.searchParams.delete(key));
    window.history.replaceState(null, "", url);
    setExpansion({ key: "", ids: [] });
    window.dispatchEvent(new Event(FILTER_EVENT));
  }

  function toggleGroup(id: string) {
    setExpansion({ key: filterKey, ids: openIds.includes(id) ? openIds.filter((item) => item !== id) : [...openIds, id] });
  }

  return (
    <section id="explorer" aria-labelledby="explorer-title" className={styles.explorer}>
      <div className={styles.heading}><div><p className={styles.eyebrow}>The complete collection</p><h2 id="explorer-title">Every project.<br /><span>In its own context.</span></h2></div><p>Start with an industry. Open a project when it catches your eye. Or search straight for a name, technology, or problem.</p></div>
      <div className={styles.filters}>
        <div className={styles.search}><label htmlFor="project-search" className="sr-only">Search all projects</label><Search size={18} aria-hidden="true" /><input id="project-search" type="search" value={query} onChange={(event) => updateFilter("q", event.target.value)} placeholder="Search all projects…" autoComplete="off" />{query ? <button type="button" onClick={() => updateFilter("q", "")} aria-label="Clear project search"><X size={16} aria-hidden="true" /></button> : null}</div>
        <label className={styles.select}><span>Scope</span><select value={scope} onChange={(event) => updateFilter("scope", event.target.value)}><option value="">Every scale</option>{projectScopes.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}</select></label>
        <label className={styles.select}><span>First recorded</span><select value={year} onChange={(event) => updateFilter("year", event.target.value)}><option value="">All years</option>{[2026, 2025, 2024].map((value) => <option key={value} value={value}>{value}</option>)}</select></label>
      </div>
      <div className={styles.domainFilters} role="group" aria-label="Filter by industry"><button type="button" aria-pressed={!domain} onClick={() => updateFilter("domain", "")}>All industries <span>{baseMatches.length}</span></button>{projectDomains.map((item) => <button key={item.id} type="button" aria-pressed={domain === item.id} onClick={() => updateFilter("domain", item.id)}>{item.label}<span>{baseMatches.filter((entry) => entry.domain === item.id).length}</span></button>)}</div>
      <div className={styles.resultBar}><p role="status" aria-atomic="true">{matches.length} of {projectCatalog.length} repositories{isFiltered ? " match your selection" : " · grouped by the work they serve"}</p><div>{isFiltered ? <button type="button" onClick={resetFilters}>Reset filters</button> : null}{groups.length ? <button type="button" onClick={() => setExpansion({ key: filterKey, ids: allOpen ? [] : groups.map((group) => group.id) })}>{allOpen ? "Collapse all" : "Expand all"}</button> : null}</div></div>
      {groups.length ? <div className={styles.groups}>{groups.map((group) => <section key={group.id} className={styles.domainGroup} style={{ "--domain-accent": group.accent } as CSSProperties} aria-labelledby={`domain-title-${group.id}`}>
        <h3 id={`domain-title-${group.id}`}><button type="button" className={styles.groupButton} aria-expanded={openIds.includes(group.id)} aria-controls={`domain-content-${group.id}`} onClick={() => toggleGroup(group.id)}><span className={styles.groupIdentity}><span className={styles.groupNumber}>{String(group.entries.length).padStart(2, "0")}</span><span><strong>{group.label}</strong><small>{group.description}</small></span></span><span className={styles.groupPreview}>{group.entries.slice(0, 3).map((entry) => entry.title).join(" / ")}</span><ChevronDown size={22} aria-hidden="true" /></button></h3>
        <div id={`domain-content-${group.id}`} hidden={!openIds.includes(group.id)} className={styles.groupContent}>{openIds.includes(group.id) ? group.entries.map((entry) => <PortfolioEntry key={entry.repo} entry={entry} onSelect={setSelectedProject} />) : null}</div>
      </section>)}</div> : <div className={styles.empty}><Search size={30} aria-hidden="true" /><h3>No projects match that combination.</h3><p>Try fewer filters, a project name, or a technology such as Next.js.</p><button type="button" onClick={resetFilters}>Explore the complete collection <ArrowUpRight size={16} aria-hidden="true" /></button></div>}
      <div className={styles.context}><p><strong>107 repositories, not 107 separate products.</strong> Supporting services stay connected to their parent applications. Earlier versions, demos, studies, starters, and the upstream fork keep their own identities.</p><p>Dates show repository creation → latest reviewed push in Kenya time, as reviewed on 3 October 2026. They describe recorded activity, not launch dates or continuous work. Some source repositories require access.</p><Link href="#journey">See how the work developed <ArrowUpRight size={14} aria-hidden="true" /></Link></div>
      {selectedProject ? <ProjectDetails project={selectedProject} onClose={() => setSelectedProject(null)} /> : null}
    </section>
  );
}
