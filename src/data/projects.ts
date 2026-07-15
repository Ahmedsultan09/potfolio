export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  featured?: boolean;
  metrics: { value: string; label: string }[];
  tech: string[];
  highlights: string[];
  links: { label: string; href: string }[];
  screenshots: { src: string; alt: string }[];
};

export const projects: Project[] = [
  {
    id: "leadsmart",
    title: "LeadsMart",
    tagline: "Ads manager & lead-generation platform",
    description:
      "Full-stack advertising and lead platform for advertisers - wallet-funded Facebook/TikTok campaigns, lead management, analytics, billing, and a React Native companion app.",
    featured: true,
    metrics: [
      { value: "Web + Mobile", label: "Product coverage" },
      { value: "EN / AR", label: "Interface languages" },
      { value: "2", label: "Campaign channels" },
    ],
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "TanStack Query",
      "Zustand",
      "React Router",
      "Tailwind CSS",
      "Radix UI",
      "React Native",
      "Expo",
      "i18next",
      "Chart.js",
      "Recharts",
    ],
    highlights: [
      "Migrated and redesigned the ads-manager SPA with lazy-loaded routes and a reusable component system",
      "Built leads dashboards, campaign flows, and performance analytics for advertisers and internal teams",
      "Implemented RBAC-aware navigation and permission-gated product surfaces",
      "Shipped React Native / Expo mobile app with near feature parity to web",
      "Integrated bilingual EN/AR shell with RTL support across key product flows",
    ],
    links: [
      { label: "Landing", href: "https://www.leads-mart.com/" },
      { label: "Platform", href: "https://adsmanager-n.leads-mart.com/" },
    ],
    screenshots: [
      {
        src: "/projects/leadsmart/landing-hero-hd.png",
        alt: "LeadsMart marketing landing page hero",
      },
      {
        src: "/projects/leadsmart/landing-dashboard-hd.png",
        alt: "LeadsMart landing page product dashboard preview",
      },
      {
        src: "/projects/leadsmart/platform-dashboard-hd.png",
        alt: "LeadsMart desktop ads manager dashboard with private account details masked",
      },
      {
        src: "/projects/leadsmart/platform-leads-hd.png",
        alt: "LeadsMart desktop leads analytics dashboard with private totals masked",
      },
      {
        src: "/projects/leadsmart/platform-campaigns-hd.png",
        alt: "LeadsMart desktop campaign management workspace",
      },
      {
        src: "/projects/leadsmart/platform-insights-hd.png",
        alt: "LeadsMart desktop trends and market insights dashboard",
      },
    ],
  },
  {
    id: "tactisport",
    title: "TactiSport",
    tagline: "AI-powered tactical football analytics",
    description:
      "Multi-role B2B SaaS delivering interactive tactical reports, pitch visualizations, scheduling, and admin tooling to coaches, clubs, and sports organizations.",
    featured: true,
    metrics: [
      { value: "12+", label: "Interactive reports" },
      { value: "5", label: "Permissioned roles" },
      { value: "EN / AR", label: "Interface languages" },
    ],
    tech: [
      "React 19",
      "Vite 7",
      "TanStack Query",
      "Zustand",
      "React Router v7",
      "Tailwind CSS v4",
      "Ant Design",
      "Radix UI",
      "D3.js",
      "Recharts",
      "GSAP",
      "Framer Motion",
      "AWS S3",
      "Formik",
      "i18next",
    ],
    highlights: [
      "End-to-end portal with five-role RBAC and route-level protection",
      "Custom tactical pitch renderer with composable analysis layers",
      "12+ interactive reports including Formation, Pressure, and Movement Relations",
      "Bulk ZIP report ingestion via AWS S3 presigned URLs",
      "Bilingual EN/AR with RTL and full dark/light theming",
    ],
    links: [
      { label: "Landing", href: "https://tactisport.ai/en" },
      { label: "Platform", href: "https://app.tactisport.ai/" },
    ],
    screenshots: [
      {
        src: "/projects/tactisport/landing-hero-hd.png",
        alt: "TactiSport marketing landing page hero",
      },
      {
        src: "/projects/tactisport/landing-reports-hd.png",
        alt: "TactiSport landing tactical results studio demo",
      },
      {
        src: "/projects/tactisport/football-analytics-hd.png",
        alt: "TactiSport Football Analytics report dashboard",
      },
      {
        src: "/projects/tactisport/report-relations-hd.png",
        alt: "TactiSport movement relations report with dense pass and carry routes",
      },
      {
        src: "/projects/tactisport/report-pressure-hd.png",
        alt: "TactiSport pressure analysis with tactical pitch positioning",
      },
      {
        src: "/projects/tactisport/report-zone-pathways-hd.png",
        alt: "TactiSport nine-zone build-up pathways report",
      },
      {
        src: "/projects/tactisport/report-zone-routes-hd.png",
        alt: "TactiSport ranked routes and final-third entry analysis",
      },
      {
        src: "/projects/tactisport/report-tactical-results-hd.png",
        alt: "TactiSport tactical results distributions and reviewed phases",
      },
    ],
  },
  {
    id: "ticketing",
    title: "Printer Maintenance Ticketing",
    tagline: "Field-service ops for Big Data Egypt",
    description:
      "Multi-role ticketing platform coordinating managers, field engineers, and operators across clients, branches, and machines - including regular maintenance visits and spare parts.",
    metrics: [
      { value: "3", label: "Role portals" },
      { value: "4", label: "Operations modules" },
      { value: "RLS", label: "Data security" },
    ],
    tech: [
      "React",
      "Vite",
      "Supabase",
      "TanStack Query",
      "Tailwind CSS",
      "Material UI",
      "Formik",
      "PDF export",
    ],
    highlights: [
      "Role-based portals for managers, engineers, and operators with Supabase RLS",
      "Ticket lifecycle with assignment RPCs and hierarchy-aware machine management",
      "Regular visits module with scheduling, overdue locking, and PDF reports",
      "Spare-parts catalog and per-ticket tracking",
      "Operational dashboards with live metrics and Excel migration tooling",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Ahmedsultan09/ticketing-system",
      },
    ],
    screenshots: [
      {
        src: "/projects/ticketing/dashboard-hd.png",
        alt: "Big Data Egypt ticketing system operations dashboard",
      },
      {
        src: "/projects/ticketing/tickets-hd.png",
        alt: "Big Data Egypt complete support-ticket register",
      },
      {
        src: "/projects/ticketing/machines-hd.png",
        alt: "Big Data Egypt machine inventory cards",
      },
      {
        src: "/projects/ticketing/clients-hd.png",
        alt: "Big Data Egypt client organization coverage view",
      },
      {
        src: "/projects/ticketing/regular-visits-hd.png",
        alt: "Big Data Egypt regular maintenance visit planning dashboard",
      },
      {
        src: "/projects/ticketing/visit-results-hd.png",
        alt: "Big Data Egypt visit-results overview",
      },
      {
        src: "/projects/ticketing/accounts-hd.png",
        alt: "Big Data Egypt role-based user accounts management",
      },
      {
        src: "/projects/ticketing/engineers-hd.png",
        alt: "Big Data Egypt engineer performance dashboard",
      },
      {
        src: "/projects/ticketing/spare-parts-hd.png",
        alt: "Big Data Egypt spare-parts catalog management",
      },
      {
        src: "/projects/ticketing/spare-insights-hd.png",
        alt: "Big Data Egypt spare-parts request insights",
      },
    ],
  },
];
