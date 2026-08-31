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
    tagline: "Campaigns, leads, and analytics on web and mobile",
    description:
      "An advertising platform where teams fund Facebook and TikTok campaigns through a wallet, manage leads, review analytics, and handle billing. A React Native companion app brings these workflows to mobile.",
    featured: true,
    metrics: [
      { value: "Web + Mobile", label: "Connected apps" },
      { value: "EN / AR", label: "Bilingual interfaces" },
      { value: "2", label: "Facebook & TikTok" },
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
      "Migrated and redesigned the ads-manager frontend with reusable components and lazy-loaded routes.",
      "Built lead dashboards, campaign flows, and performance analytics for advertisers and internal teams.",
      "Added role-based navigation and permission checks for product screens and actions.",
      "Shipped a React Native and Expo app with nearly all of the web platform's features.",
      "Built English/Arabic navigation and right-to-left layouts across key product flows.",
    ],
    links: [
      { label: "Visit website", href: "https://www.leads-mart.com/" },
      { label: "Open platform", href: "https://adsmanager-n.leads-mart.com/" },
    ],
    screenshots: [
      {
        src: "/projects/leadsmart/landing-hero-hd.png",
        alt: "LeadsMart homepage introduction to its advertising platform",
      },
      {
        src: "/projects/leadsmart/landing-dashboard-hd.png",
        alt: "LeadsMart homepage showing a preview of the product dashboard",
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
    tagline: "Interactive reports for tactical football analysis",
    description:
      "A football analytics platform for coaches, clubs, and sports organizations. It presents AI-powered tactical analysis through interactive reports and pitch visualizations, alongside session scheduling and administration tools.",
    featured: true,
    metrics: [
      { value: "12+", label: "Interactive reports" },
      { value: "5", label: "User roles" },
      { value: "EN / AR", label: "Bilingual interfaces" },
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
      "Built the portal frontend with access controls for five roles and protected routes.",
      "Created a tactical pitch renderer with reusable layers for different types of analysis.",
      "Delivered 12+ interactive reports, including Formation, Pressure, and Movement Relations.",
      "Built bulk ZIP report uploads using AWS S3 presigned URLs.",
      "Added English/Arabic support, right-to-left layouts, and light and dark themes.",
    ],
    links: [
      { label: "Visit website", href: "https://tactisport.ai/en" },
      { label: "Open platform", href: "https://app.tactisport.ai/" },
    ],
    screenshots: [
      {
        src: "/projects/tactisport/landing-hero-hd.png",
        alt: "TactiSport homepage introduction to its football analytics platform",
      },
      {
        src: "/projects/tactisport/landing-reports-hd.png",
        alt: "TactiSport homepage demonstration of the tactical results studio",
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
    id: "section",
    title: "SECTION",
    tagline: "A bilingual furniture showroom with an interactive photo hero",
    description:
      "An English/Arabic website for an Egyptian furniture and interior fit-out brand. Visitors can explore a Three.js photo hero, browse collections and project stories, and describe their needs through a guided inquiry form.",
    featured: true,
    metrics: [
      { value: "EN / AR", label: "Bilingual interfaces" },
      { value: "WebGL", label: "Interactive photo hero" },
      { value: "Responsive", label: "Desktop & mobile layouts" },
    ],
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Three.js",
    ],
    highlights: [
      "Built the Three.js photo hero with fallbacks for reduced motion, low-data settings, and unavailable WebGL.",
      "Created responsive English/Arabic layouts, including right-to-left navigation and mobile collection browsing.",
      "Built reusable collection galleries and project stories with client and collaborator credits.",
      "Developed the inquiry form interface with client-side validation and consent controls.",
      "Built lead-management screens for contact status and internal notes.",
      "Added localized metadata, canonical and language-alternate links, and structured data to public pages.",
    ],
    links: [
      { label: "Visit website", href: "https://section-furniture.com/en" },
    ],
    screenshots: [
      {
        src: "/projects/section/landing-hero-hd.png",
        alt: "SECTION English homepage with a floating photo gallery and the headline Spaces revealed in light",
      },
      {
        src: "/projects/section/landing-collections-hd.png",
        alt: "SECTION collections overview showing wall cladding, kitchens, and dressing rooms",
      },
      {
        src: "/projects/section/landing-process-hd.png",
        alt: "SECTION process carousel showing the concept and briefing stage with navigation controls",
      },
      {
        src: "/projects/section/project-story-hd.png",
        alt: "SECTION SODIC project story with interior photography and collaborator attribution",
      },
      {
        src: "/projects/section/inquiry-hd.png",
        alt: "First step of the SECTION inquiry form, with furniture and interior project categories",
      },
      {
        src: "/projects/section/landing-ar-hd.png",
        alt: "SECTION Arabic homepage with right-to-left navigation and the interactive photo hero",
      },
    ],
  },
  {
    id: "ticketing",
    title: "Printer Maintenance Ticketing",
    tagline: "Maintenance tickets and field-service workflows",
    description:
      "A ticketing platform for Big Data Egypt's managers, field engineers, and operators. It connects repair tickets to clients, branches, and machines, with tools for scheduled maintenance visits and spare-parts tracking.",
    metrics: [
      { value: "3", label: "Role-based portals" },
      { value: "4", label: "Operations modules" },
      { value: "RLS", label: "Row-level access" },
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
      "Built portals for managers, engineers, and operators, with Supabase row-level security.",
      "Implemented ticket assignment through database functions and organized machines by client and branch.",
      "Built maintenance-visit scheduling, overdue locking, and PDF reports.",
      "Created a spare-parts catalog with per-ticket tracking.",
      "Developed dashboards with live operational metrics and tools to migrate Excel records.",
    ],
    links: [
      {
        label: "GitHub repository",
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
