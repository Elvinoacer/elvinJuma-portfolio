export interface TimelineProjectLink {
  label: string;
  query: string;
}

export interface TimelinePeriod {
  id: string;
  period: string;
  title: string;
  work: string;
  progression: string;
  projects: TimelineProjectLink[];
}

export interface TimelineChapter {
  year: "2024" | "2025" | "2026";
  title: string;
  statement: string;
  description: string;
  highlights: string[];
  periods: TimelinePeriod[];
}

/** Repository activity in the supplied portfolio review, recorded 3 October 2026.
 * These periods describe the visible record, not launches or continuous work.
 */
export const projectTimeline: TimelineChapter[] = [
  {
    year: "2024",
    title: "Foundations",
    statement: "Interfaces became applications.",
    description:
      "JavaScript, animation, and messaging experiments led into ClassMind: shared resources, institutional data, and application backends.",
    highlights: ["JavaScript & interfaces", "Realtime experiments", "ClassMind"],
    periods: [
      {
        id: "2024-may-october",
        period: "May–Oct 2024",
        title: "Learning through interfaces",
        work:
          "Forkify exercises, early messaging, React and Expo starters, a 3D portfolio, and an iPhone product-page study appear in the repository record.",
        progression:
          "A foundation in JavaScript, interface construction, animation, and application tooling. Learning exercises and starters keep their own place in this story.",
        projects: [
          { label: "Forkify", query: "forkify" },
          { label: "Messaging studies", query: "messaging" },
          { label: "iPhone study", query: "iphones-market" },
        ],
      },
      {
        id: "2024-december",
        period: "Dec 2024",
        title: "ClassMind and shared information",
        work:
          "ClassMind and early realtime chat work bring shared resources, messages, and institutional workflows into focus.",
        progression:
          "Meaningful application work was already present in 2024, with data models and backends supporting the interface.",
        projects: [
          { label: "ClassMind", query: "ClassMind" },
          { label: "Realtime work", query: "realtime" },
        ],
      },
    ],
  },
  {
    year: "2025",
    title: "Connected business software",
    statement: "Screens became working systems.",
    description:
      "Commerce and inventory work expanded into church operations, Concept Builders, JustInTime, and restaurant software running on a local network.",
    highlights: ["Commerce & inventory", "Business platforms", "Offline operations"],
    periods: [
      {
        id: "2025-january-april",
        period: "Jan–Apr 2025",
        title: "Exploring the whole stack",
        work:
          "Commersely, AI prototypes, communication studies, inventory work, and timetable and school sketches broaden the application work.",
        progression:
          "Commerce, AI, data modeling, and realtime systems introduced more connected workflows and new technical questions.",
        projects: [
          { label: "Commersely", query: "Commersely" },
          { label: "Inventory work", query: "inventory" },
          { label: "AI prototypes", query: "AI" },
        ],
      },
      {
        id: "2025-may-july",
        period: "May–Jul 2025",
        title: "Connecting customer and admin work",
        work:
          "Professional portfolios, e-commerce variants, the Commersely frontend and backend, notification tools, dashboards, and publishing appear together.",
        progression:
          "Customer journeys and administration began sharing a clearer foundation, with reusable experiments in notifications and other integrations.",
        projects: [
          { label: "Commerce", query: "commerce" },
          { label: "Notifications", query: "notification" },
          { label: "Publishing", query: "blog" },
        ],
      },
      {
        id: "2025-august-october",
        period: "Aug–Oct 2025",
        title: "Modeling real operations",
        work:
          "The church platform, Inventory V2, Concept Builders, payment demonstrations, and a dedicated communication service mark a larger operational scope.",
        progression:
          "The work moved further into business-specific relationships: stock movement, people, projects, payments, and coordination.",
        projects: [
          { label: "Church platform", query: "church" },
          { label: "Inventory V2", query: "Inventory-Management-System-V2" },
          { label: "Concept Builders", query: "Concept Builders" },
        ],
      },
      {
        id: "2025-november-december",
        period: "Nov–Dec 2025",
        title: "Marketplaces meet local infrastructure",
        work:
          "Zion Hill, JustInTime, Sasa Cleaners, and the Restaurant / Hotel Intranet extend the record into marketplace and hospitality workflows.",
        progression:
          "Multi-role applications sat alongside desktop and local-network engineering, including restaurant operations designed for unreliable internet.",
        projects: [
          { label: "JustInTime", query: "JustInTime" },
          { label: "Restaurant / Hotel Intranet", query: "hotel-intranet" },
          { label: "Zion Hill", query: "ZION-HILL" },
        ],
      },
    ],
  },
  {
    year: "2026",
    title: "SaaS, systems & healthcare",
    statement: "The scope kept growing.",
    description:
      "Virtual education, mobile services, AI search, and desktop automation developed alongside pharmacy SaaS and distinct healthcare applications.",
    highlights: ["Mobile & education", "Systems & automation", "Afyvia & Sphere Pharmacy"],
    periods: [
      {
        id: "2026-january-march",
        period: "Jan–Mar 2026",
        title: "Education, mobile, and product ecosystems",
        work:
          "GTSS, German Virtual School, Exam Prep Portal, Uni-Link, OppsLab, Kampus, Kitabu, and profile work appear in this period.",
        progression:
          "Education operations, mobile architecture, AI-assisted discovery, and focused utility applications widened the product range.",
        projects: [
          { label: "German Virtual School", query: "German Virtual School" },
          { label: "Kampus", query: "Kampus" },
          { label: "OppsLab", query: "OppsLab" },
          { label: "Kitabu", query: "Kitabu" },
        ],
      },
      {
        id: "2026-april-may",
        period: "Apr–May 2026",
        title: "Verification, automation, and domain depth",
        work:
          "The Moi Chapter election system, portfolio experiments, an automotive interface, GTSS Growth Engine, and the airline assignment add new forms of systems work.",
        progression:
          "Verification-sensitive workflows, automation and distribution, and broad academic domain modeling bring different engineering constraints into view.",
        projects: [
          { label: "Election system", query: "ELC_IEC_mu" },
          { label: "GTSS Growth Engine", query: "GTSS Growth" },
          { label: "Airline system", query: "kenya_airways_254" },
        ],
      },
      {
        id: "2026-june-july",
        period: "Jun–Jul 2026",
        title: "Industry workflows and field demos",
        work:
          "Architecture prototypes, Novaform, water-business sites, Piki, MajidOS, the Mama Oliech concept, and the pharmacy foundation appear in the record.",
        progression:
          "Industry-specific design and reusable business workflows connect the interface work to practical discovery, ordering, service, and operational needs.",
        projects: [
          { label: "Novaform", query: "Novaform" },
          { label: "Piki", query: "Piki" },
          { label: "MajidOS", query: "Majid" },
          { label: "Pharmacy foundation", query: "pharmarcy_template" },
        ],
      },
      {
        id: "2026-august",
        period: "Aug 2026",
        title: "Healthcare discovery and pharmacy networks",
        work:
          "Afyvia, clinic and laboratory sites, the distinct Aether network prototype, 20timeline, and Medivyx concentrate the work around healthcare and visual storytelling.",
        progression:
          "Patient journeys, medicine discovery, pharmacy-network interfaces, and portfolio storytelling receive closer attention. The projects retain their separate identities.",
        projects: [
          { label: "Afyvia", query: "Afyvia" },
          { label: "Healthcare sites", query: "healthcare" },
          { label: "Aether prototype", query: "gem-island-drift-crisp" },
          { label: "20timeline", query: "20timeline" },
          { label: "Medivyx", query: "Medivyx" },
        ],
      },
      {
        id: "2026-september",
        period: "Sep 2026",
        title: "Deeper pharmacy operations",
        work:
          "Sphere Pharmacy and Kephane join continued repository activity in Afyvia, portfolios, Concept Builders, and Commerseley.",
        progression:
          "Pharmacy operations, integrations, and refinement of established projects strengthen the connection between customer journeys and the work behind them.",
        projects: [
          { label: "Sphere Pharmacy", query: "Sphere Pharmacy" },
          { label: "Kephane", query: "Kephane" },
          { label: "Afyvia", query: "Afyvia" },
          { label: "Concept Builders", query: "Concept Builders" },
        ],
      },
      {
        id: "2026-october-review",
        period: "1–3 Oct 2026",
        title: "Making the body of work visible",
        work:
          "GitHub profile and course-repository activity accompanies the complete portfolio review prepared on 3 October 2026.",
        progression:
          "The record is organized into stronger project stories while preserving supporting services, experiments, learning work, and starters in the archive.",
        projects: [
          { label: "Portfolio work", query: "portfolio" },
          { label: "GitHub Pages course", query: "skills-github-pages" },
        ],
      },
    ],
  },
];
