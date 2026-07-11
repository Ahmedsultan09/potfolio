export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  featured?: boolean;
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
      "Full-stack advertising and lead platform for advertisers — wallet-funded Facebook/TikTok campaigns, lead management, analytics, billing, and a React Native companion app.",
    featured: true,
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
        src: "/projects/leadsmart/landing.png",
        alt: "LeadsMart marketing landing page",
      },
      {
        src: "/projects/leadsmart/platform.png",
        alt: "LeadsMart ads manager platform",
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
        src: "/projects/tactisport/landing.png",
        alt: "TactiSport marketing landing page hero",
      },
      {
        src: "/projects/tactisport/landing-reports.png",
        alt: "TactiSport landing tactical results studio demo",
      },
      {
        src: "/projects/tactisport/scouting.png",
        alt: "TactiSport player scouting profiles on the landing page",
      },
      {
        src: "/projects/tactisport/matches.png",
        alt: "TactiSport portal matches board with status filters",
      },
      {
        src: "/projects/tactisport/zone-pathways.png",
        alt: "TactiSport zone pathways tactical pitch overview",
      },
      {
        src: "/projects/tactisport/movement-relations.png",
        alt: "TactiSport movement relations pitch with route arrows",
      },
      {
        src: "/projects/tactisport/loss-heatmap.png",
        alt: "TactiSport loss and pressure heatmap on the pitch",
      },
      {
        src: "/projects/tactisport/inspect.png",
        alt: "TactiSport inspect proof layer with transition cards",
      },
      {
        src: "/projects/tactisport/tactical-results.png",
        alt: "TactiSport tactical results studio with phase completion rings",
      },
    ],
  },
  {
    id: "maraqez",
    title: "Maraqez",
    tagline: "Arabic EdTech center management",
    description:
      "RTL-first SPA for private education centers — students, teachers, QR attendance, exams, payments, and branded PDF/QR exports.",
    tech: [
      "React 19",
      "TypeScript",
      "Vite",
      "TanStack Query",
      "Zustand",
      "Tailwind CSS",
      "Formik",
      "jsPDF",
      "JSQR",
    ],
    highlights: [
      "Full RTL Arabic admin shell with role-based navigation for center owners and teachers",
      "QR-code attendance scanning with payment validation before check-in",
      "Student financial hub with wallets, discounts, and Arabic invoice PDFs",
      "Reusable data grids with filtering, sorting, and pagination",
      "Dashboard analytics for students, revenue, and exam attendance",
    ],
    links: [{ label: "Live site", href: "https://maraqez.com/" }],
    screenshots: [
      {
        src: "/projects/maraqez/login.png",
        alt: "Maraqez Arabic login screen",
      },
      {
        src: "/projects/maraqez/dashboard.png",
        alt: "Maraqez education center dashboard",
      },
    ],
  },
  {
    id: "ticketing",
    title: "Printer Maintenance Ticketing",
    tagline: "Field-service ops for Big Data Egypt",
    description:
      "Multi-role ticketing platform coordinating managers, field engineers, and operators across clients, branches, and machines — including regular maintenance visits and spare parts.",
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
        src: "/projects/ticketing/dashboard.png",
        alt: "Ticketing system manager dashboard",
      },
      {
        src: "/projects/ticketing/tickets.png",
        alt: "Ticketing system ticket workflow",
      },
    ],
  },
];
