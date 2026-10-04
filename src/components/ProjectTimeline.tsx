import Link from "next/link";
import { projectTimeline } from "@/data/project-timeline";
import styles from "./ProjectTimeline.module.css";

interface ProjectTimelineProps {
  compact?: boolean;
  id?: string;
}

function DirectionArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path d="M6 18 18 6M6 6h12v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Static narrative with native disclosure; no animation runtime or client state. */
export default function ProjectTimeline({ compact = false, id = "journey" }: ProjectTimelineProps) {
  const headingId = `${id}-title`;

  return (
    <section id={id} aria-labelledby={headingId} className={`${styles.timeline} ${compact ? styles.compact : styles.full}`}>
      <div className={styles.shell}>
        <div className={styles.overline}>
          <span><i aria-hidden="true" />The development record</span>
          <span>2024 — 2026</span>
        </div>
        <div className={styles.heading}>
          <h2 id={headingId}>The work has<br /><span>a history.</span></h2>
          <p>From JavaScript foundations to connected business software, mobile platforms, and pharmacy systems. Each chapter adds a different kind of engineering.</p>
        </div>

        {compact ? (
          <ol className={styles.chapters} aria-label="Development chapters">
            {projectTimeline.map((chapter) => (
              <li key={chapter.year} className={styles.chapterCard}>
                <span className={styles.cardYear}>{chapter.year}</span>
                <h3>{chapter.title}</h3>
                <p className={styles.cardStatement}>{chapter.statement}</p>
                <p className={styles.cardDescription}>{chapter.description}</p>
                <ul className={styles.cardHighlights} aria-label={`${chapter.year} focus`}>
                  {chapter.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
                <Link href={`/projects?year=${chapter.year}#explorer`} className={styles.chapterLink} aria-label={`Explore projects first recorded in ${chapter.year}`}>
                  Explore {chapter.year}<DirectionArrow />
                </Link>
              </li>
            ))}
          </ol>
        ) : (
          <ol className={styles.yearRail} aria-label="Repository activity timeline">
            {projectTimeline.map((chapter) => (
              <li key={chapter.year} className={styles.yearChapter}>
                <div className={styles.yearIntro}>
                  <span className={styles.yearNumber}>{chapter.year}</span>
                  <h3>{chapter.title}</h3>
                  <p>{chapter.statement}</p>
                  <Link href={`/projects?year=${chapter.year}#explorer`} className={styles.yearLink}>
                    Explore {chapter.year}<DirectionArrow />
                  </Link>
                </div>
                <ol className={styles.periods} aria-label={`${chapter.year} repository activity periods`}>
                  {chapter.periods.map((period) => (
                    <li key={period.id} className={styles.period}>
                      <details className={styles.disclosure}>
                        <summary>
                          <span className={styles.periodDate}>{period.period}</span>
                          <span className={styles.periodTitle}>{period.title}</span>
                          <span className={styles.expandIcon} aria-hidden="true"><i /><i /></span>
                        </summary>
                        <div className={styles.periodBody}>
                          <p>{period.work}</p>
                          <p className={styles.progression}>{period.progression}</p>
                          <ul className={styles.projectLinks} aria-label={`Explore work from ${period.period}`}>
                            {period.projects.map((project) => (
                              <li key={project.query}>
                                <Link href={`/projects?q=${encodeURIComponent(project.query)}#explorer`}>
                                  <span>{project.label}</span><DirectionArrow />
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </details>
                    </li>
                  ))}
                </ol>
              </li>
            ))}
          </ol>
        )}

        <div className={styles.footer}>
          <p>Dates reflect visible repository activity.<br />Record reviewed 3 October 2026; dates do not establish releases or time spent.</p>
          {compact ? <Link href="/projects#journey" className={styles.archiveLink}>Follow the full timeline<DirectionArrow /></Link> : <Link href="#explorer" className={styles.archiveLink}>Explore the complete archive<DirectionArrow /></Link>}
        </div>
      </div>
    </section>
  );
}
