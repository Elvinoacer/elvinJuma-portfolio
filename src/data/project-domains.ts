// Lightweight navigation metadata. Keep this separate from the full catalogue
// so the homepage does not load all 107 repository descriptions.
export const portfolioRepositoryCount = 107;

export const projectDomains = [
  {
    "id": "healthcare",
    "label": "Healthcare & pharmacy",
    "description": "Pharmacy operations, shared networks, patient journeys, and clinic or laboratory demonstrations.",
    "accent": "#78d5b7",
    "count": 16
  },
  {
    "id": "hospitality",
    "label": "Hospitality & restaurants",
    "description": "Local ordering, staff coordination, restaurant products, and hospitality concepts.",
    "accent": "#b9a7f1",
    "count": 4
  },
  {
    "id": "commerce",
    "label": "Commerce & inventory",
    "description": "Storefronts, customer journeys, inventory, procurement, and commerce administration.",
    "accent": "#e9b185",
    "count": 12
  },
  {
    "id": "education",
    "label": "Education & campus",
    "description": "Learning systems, campus mobile platforms, academic resources, and opportunity discovery.",
    "accent": "#a9bfff",
    "count": 11
  },
  {
    "id": "community",
    "label": "Community & elections",
    "description": "Church operations, institutional responsibilities, election verification, and audit workflows.",
    "accent": "#d0b7dd",
    "count": 4
  },
  {
    "id": "business",
    "label": "Business & automation",
    "description": "Service marketplaces, business operations, AI tools, growth automation, and local-business websites.",
    "accent": "#d7fb78",
    "count": 16
  },
  {
    "id": "construction",
    "label": "Construction & design",
    "description": "Architecture catalogues, enquiries, design purchases, and client project delivery.",
    "accent": "#c6dbaa",
    "count": 4
  },
  {
    "id": "mobility",
    "label": "Mobility & travel",
    "description": "Ride and delivery prototypes, airline workflow modeling, and automotive sales interfaces.",
    "accent": "#99cee5",
    "count": 4
  },
  {
    "id": "creative",
    "label": "Portfolio & publishing",
    "description": "Personal portfolios, interactive storytelling, publishing, and visual interface studies.",
    "accent": "#e5afcf",
    "count": 11
  },
  {
    "id": "foundations",
    "label": "Engineering foundations",
    "description": "Communication studies, integration experiments, developer utilities, learning exercises, and scaffolds.",
    "accent": "#adb6a6",
    "count": 25
  }
] as const;

export type ProjectDomainId = (typeof projectDomains)[number]["id"];
