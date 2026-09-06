export type ExperienceItem = {
  id: string;
  title: string;
  company: string;
  location: string;
  type: "Full-Time" | "Part-Time";
  period: string;
  description: string[];
  summary: string;
  caseStudy?: string;
};

export const experience: ExperienceItem[] = [
  {
    id: "leadsmart",
    title: "Frontend Developer",
    company: "LeadsMart",
    location: "Heliopolis, Cairo, Egypt",
    type: "Full-Time",
    period: "Jan 2025 – Present",
    summary:
      "React and TypeScript workflows for campaigns, leads, analytics, billing, and wallet operations. Built English/Arabic interfaces and a React Native companion app.",
    caseStudy: "/work/leadsmart",
    description: [
      "Rebuilt the ads-manager frontend from Figma designs using React, TypeScript, and reusable components.",
      "Developed dashboards, lead-management workflows, campaign tools, and analytics for advertisers and internal operations teams.",
      "Managed client state with Zustand and API data with TanStack Query.",
      "Built a React Native and Expo companion app, bringing the web platform's workflows to mobile.",
      "Worked with backend engineers in an Agile team to deliver product updates.",
    ],
  },
  {
    id: "tactisport",
    title: "Frontend Developer",
    company: "TactiSport",
    location: "Remote",
    type: "Part-Time",
    period: "Mar – Jul 2026",
    summary:
      "A tactical pitch renderer, 12+ interactive reports, and a portal supporting five frontend roles. Worked across visualization, permissions, and bilingual layouts.",
    caseStudy: "/work/tactisport",
    description: [
      "Designed and built the portal frontend for a B2B football analytics platform used by coaches, clubs, and sports organizations.",
      "Built a React 19 app from scratch in a monorepo shared with the landing site and backend, with distinct interfaces for clients, operators, and admins.",
      "Implemented access control for five roles, with protected routes and reusable permission hooks.",
      "Created a tactical pitch renderer with React layers for formations, heatmaps, player positions, movement relations, pressure, and zone flow.",
      "Delivered 12+ interactive tactical reports and bulk ZIP report uploads using AWS S3 presigned URLs.",
      "Built session booking between coaching clients and analysis operators, plus an admin dashboard with real-time metrics.",
      "Added English/Arabic support, right-to-left layouts, light and dark themes, and GSAP and Framer Motion animations.",
    ],
  },
  {
    id: "bigdata",
    title: "Frontend Developer (Full-Stack Responsibilities)",
    company: "Big Data Egypt for Systems",
    location: "Nasr City, Cairo, Egypt",
    type: "Full-Time",
    period: "Dec 2023 – Jan 2025",
    summary:
      "Field-service tools for managers, engineers, and operators. Full-stack responsibilities included Supabase data modeling, authentication, and PDF reporting.",
    caseStudy: "/work/ticketing",
    description: [
      "Designed and built a ticketing platform for maintenance engineers to track machine repairs.",
      "Implemented the PostgreSQL schema, authentication, and API integrations with Supabase.",
      "Built dashboards for operators, engineers, and managers, with tools matched to each role's service workflow.",
      "Created PDF maintenance reports and stored the documents in Supabase Storage.",
      "Organized the frontend around reusable components to support new features.",
    ],
  },
  {
    id: "lnkr",
    title: "Frontend Developer",
    company: "Lnkr",
    location: "Remote",
    type: "Part-Time",
    period: "Oct 2024 – Nov 2024",
    summary:
      "Healthcare operations dashboards with React and Tailwind CSS. Integrated APIs using React Query and Axios while collaborating in a remote team.",
    description: [
      "Built healthcare operations dashboards with React and Tailwind CSS.",
      "Integrated APIs with React Query and Axios, including caching and mutation tracking.",
      "Worked in a remote team using GitHub workflows and code reviews.",
    ],
  },
];
