export type ExperienceItem = {
  id: string;
  title: string;
  company: string;
  location: string;
  type: "Full-Time" | "Part-Time";
  period: string;
  description: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "leadsmart",
    title: "Frontend Developer",
    company: "LeadsMart",
    location: "Heliopolis, Cairo, Egypt",
    type: "Full-Time",
    period: "Jan 2025 – Present",
    description: [
      "Redesigned the ads-manager frontend from Figma into a scalable React + TypeScript SPA with reusable UI modules and design-system patterns.",
      "Built interactive dashboards, leads workflows, campaign tooling, and analytics surfaces used by advertisers and internal ops teams.",
      "Implemented client state with Zustand and server state with TanStack Query across complex product flows.",
      "Shipped the companion mobile app with React Native and Expo for feature parity with the web platform.",
      "Collaborated with backend engineers in Agile workflows to deliver continuous product improvements.",
    ],
  },
  {
    id: "tactisport",
    title: "Frontend Developer",
    company: "TactiSport",
    location: "Remote",
    type: "Part-Time",
    period: "2025 – Present",
    description: [
      "Designed and built the TactiSport Portal end-to-end — a multi-role B2B SaaS platform delivering AI-powered tactical football analytics to coaches, clubs, and sports organizations.",
      "Architected and shipped a React 19 SPA from scratch within a monorepo (portal, landing site, backend), serving role-based experiences for clients, operators, and admins.",
      "Designed a granular RBAC permission system across five roles with route-level protection and reusable permission hooks.",
      "Engineered a custom tactical pitch renderer with composable React layers for Formation, Heatmap, Player, Movement Relations, Pressure, Zone Flow, and more.",
      "Delivered 12+ interactive tactical reports and a report ingestion pipeline with bulk ZIP uploads via AWS S3 presigned URLs.",
      "Built session booking & scheduling connecting coaching clients with analysis operators, plus an admin dashboard with real-time KPIs.",
      "Implemented full bilingual support (English & Arabic with RTL) and a theme-aware UI with GSAP & Framer Motion animations.",
    ],
  },
  {
    id: "bigdata",
    title: "Frontend Developer (Full-Stack Responsibilities)",
    company: "Big Data Egypt for Systems",
    location: "Nasr City, Cairo, Egypt",
    type: "Full-Time",
    period: "Dec 2023 – Jan 2025",
    description: [
      "Designed and developed a ticketing platform used by maintenance engineers to track machine repair workflows.",
      "Implemented backend services using Supabase including PostgreSQL schema, authentication, and API integrations.",
      "Built role-based dashboards for operators, engineers, and managers to manage service workflows.",
      "Created a PDF reporting system using Supabase Storage for machine maintenance documentation.",
      "Defined scalable frontend architecture and reusable component structures supporting long-term product expansion.",
    ],
  },
  {
    id: "lnkr",
    title: "Frontend Developer",
    company: "Lnkr",
    location: "Remote",
    type: "Part-Time",
    period: "Oct 2024 – Nov 2024",
    description: [
      "Developed SaaS dashboards for healthcare operations using React and Tailwind CSS.",
      "Integrated APIs using React Query and Axios with caching and mutation tracking.",
      "Collaborated in a remote team environment using GitHub workflows and code reviews.",
    ],
  },
];
