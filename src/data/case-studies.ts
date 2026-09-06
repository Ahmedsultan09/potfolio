import { projects } from "./projects";

export type Evidence = {
  src: string;
  alt: string;
  title: string;
  caption: string;
};
export type StorySection = { id: string; title: string; paragraphs: string[] };
export type CaseStudy = {
  id: string;
  title: string;
  category: string;
  headline: string;
  summary: string;
  contribution: string;
  role: string;
  audience: string;
  period: string;
  status: string;
  facts: string[];
  tech: string[];
  cover?: Evidence;
  screenshots: Evidence[];
  sections: StorySection[];
  links: { label: string; href: string }[];
};

function shot(
  id: string,
  filename: string,
  title: string,
  caption: string,
): Evidence {
  const source = projects
    .find((p) => p.id === id)
    ?.screenshots.find((s) => s.src.endsWith(filename));
  if (!source) throw new Error(`Missing evidence: ${id}/${filename}`);
  return { ...source, title, caption };
}

const tacticShots = [
  shot(
    "tactisport",
    "report-pressure-hd.png",
    "Read the pressure",
    "Pitch positions, tactical zones, and pressure indicators sit alongside the report interpretation. The visual connects the numbers to a football situation.",
  ),
  shot(
    "tactisport",
    "report-relations-hd.png",
    "Follow the relationships",
    "Movement relations make pass and carry routes visible on the pitch. This is one of the report types supported by the renderer.",
  ),
  shot(
    "tactisport",
    "report-zone-pathways-hd.png",
    "Inspect the build-up",
    "The nine-zone report organizes build-up pathways spatially, giving a different view of the same tactical problem.",
  ),
  shot(
    "tactisport",
    "report-zone-routes-hd.png",
    "Compare routes",
    "Ranked routes and final-third entries give analysts another way to inspect progression. These are product capabilities, not measures of my business impact.",
  ),
];
const leadsShots = [
  shot(
    "leadsmart",
    "platform-dashboard-hd.png",
    "Get the operational picture",
    "The ads-manager dashboard brings campaign, lead, spending, and wallet information together. Private account details remain masked.",
  ),
  shot(
    "leadsmart",
    "platform-campaigns-hd.png",
    "Manage campaigns",
    "The campaign workspace supports the day-to-day work of advertisers. It is application UI rather than the product marketing homepage.",
  ),
  shot(
    "leadsmart",
    "platform-leads-hd.png",
    "Review leads",
    "Lead analytics give teams a view into their incoming sales work. Private totals remain masked in this capture.",
  ),
  shot(
    "leadsmart",
    "platform-insights-hd.png",
    "Explore market insights",
    "Trends and insights sit within the same product navigation as the operational workflows.",
  ),
];
const sectionShots = [
  shot(
    "section",
    "landing-hero-hd.png",
    "Explore the showroom",
    "The English homepage introduces the brand through an interactive photo hero.",
  ),
  shot(
    "section",
    "landing-ar-hd.png",
    "Read it in Arabic",
    "The Arabic homepage uses right-to-left navigation and layout. Compare it with the English capture to see the language treatment.",
  ),
  shot(
    "section",
    "landing-collections-hd.png",
    "Browse collections",
    "Collections organize the offer into categories such as wall cladding, kitchens, and dressing rooms.",
  ),
  shot(
    "section",
    "inquiry-hd.png",
    "Start an inquiry",
    "The guided inquiry begins by asking which furniture or interior project category the visitor needs.",
  ),
];
const ticketShots = [
  shot(
    "ticketing",
    "dashboard-hd.png",
    "See the service operation",
    "The operations dashboard provides a starting point for maintenance work across clients, machines, and tickets.",
  ),
  shot(
    "ticketing",
    "tickets-hd.png",
    "Work through the register",
    "The ticket register brings repair work into one structured view for the people coordinating service.",
  ),
  shot(
    "ticketing",
    "regular-visits-hd.png",
    "Plan regular visits",
    "Maintenance scheduling supports planned service alongside incoming repairs.",
  ),
  shot(
    "ticketing",
    "spare-parts-hd.png",
    "Track spare parts",
    "A shared catalog connects spare-parts tracking with the field-service workflow.",
  ),
];

export const caseStudies: CaseStudy[] = [
  {
    id: "tactisport",
    title: "TactiSport",
    category: "SaaS · Data visualization",
    headline: "Making football data readable on the pitch.",
    summary:
      "A football analytics portal that helps coaches and analysts explore tactical reports, movement, and pressure.",
    contribution:
      "I built the portal frontend, a layered tactical pitch renderer, and 12+ interactive reports, with permission-aware interfaces for five roles.",
    role: "Frontend Developer · Part-time",
    audience: "Coaches, analysts & club operations",
    period: "March–July 2026",
    status: "Professional work",
    facts: ["12+ interactive reports", "5 user roles", "English / Arabic"],
    tech: ["React", "TypeScript", "D3.js", "Recharts", "TanStack Query"],
    cover: tacticShots[0],
    screenshots: tacticShots,
    links: [
      { label: "Product website", href: "https://tactisport.ai/en" },
      {
        label: "Platform · sign-in required",
        href: "https://app.tactisport.ai/",
      },
    ],
    sections: [
      {
        id: "problem",
        title: "A report needs a football context.",
        paragraphs: [
          "Coaches and analysts need to connect tactical data with what happens on a pitch. Formations, pressure, player positions, and movement relations describe different aspects of play. Presenting them as a long list of numbers would leave the reader to reconstruct the spatial relationships.",
          "TactiSport brings those reports into a portal alongside booking and administration. The frontend has to serve people reviewing analysis as well as the operators and administrators managing the work. That means both the report experience and the surrounding navigation need to reflect the user’s task.",
        ],
      },
      {
        id: "responsibility",
        title: "My part: the portal and its visual language.",
        paragraphs: [
          "I built the portal frontend, including a tactical pitch renderer and more than twelve interactive reports. The renderer uses React layers for formations, heatmaps, positions, movement relationships, pressure, and zone flow. D3.js and Recharts support the visualization work.",
          "My scope also included protected routes and reusable permission hooks for five roles, bulk ZIP report uploads through AWS S3 presigned URLs, session booking, and administration screens. The interfaces support English and Arabic, right-to-left layouts, and light and dark themes. This case study focuses on my frontend contribution rather than ownership of the analysis engine.",
        ],
      },
      {
        id: "approach",
        title: "One pitch, different layers of information.",
        paragraphs: [
          "The implementation uses reusable pitch layers across report types. A common spatial surface gives formations, movement, and pressure a shared frame of reference. Each report can then expose the information relevant to its own question. The tradeoff is that a shared renderer needs clear boundaries between common geometry and report-specific presentation.",
          "Permissions shape which navigation, screens, and actions the frontend presents. Those checks make the interface relevant to the current role; they are not a substitute for server-side authorization. The upload interface uses presigned URLs to send report files to S3, while authorization and URL issuance remain responsibilities of the backend.",
        ],
      },
      {
        id: "result",
        title: "Concrete scope, visible evidence.",
        paragraphs: [
          "The delivered frontend includes 12+ interactive tactical reports, access-aware interfaces for five roles, and bilingual layouts. The walkthrough shows pressure, movement relations, and zone analysis without requiring a product account. Its captions explain what to look at rather than asking the screenshots to tell the entire story.",
          "The displayed analysis values belong to the product’s report examples. They are not evidence of a performance improvement or commercial result attributable to me. This portfolio does not publish a measured before-and-after outcome for the work. The live platform may require authentication; the screenshots remain the public demonstration.",
        ],
      },
    ],
  },
  {
    id: "leadsmart",
    title: "LeadsMart",
    category: "SaaS · Campaign operations",
    headline: "The interface behind the campaign.",
    summary:
      "An advertising platform for campaigns, sales leads, analytics, billing, and wallet operations.",
    contribution:
      "I built React and TypeScript product workflows, permission-aware navigation, and English/Arabic interfaces, plus a React Native companion app.",
    role: "Frontend Developer · Full-time",
    audience: "Advertisers & internal operations teams",
    period: "January 2025–Present",
    status: "Professional work",
    facts: ["Facebook & TikTok workflows", "English / Arabic", "Web + mobile"],
    tech: ["React", "TypeScript", "TanStack Query", "Zustand", "React Native"],
    cover: leadsShots[0],
    screenshots: leadsShots,
    links: [
      { label: "Product website", href: "https://www.leads-mart.com/" },
      {
        label: "Platform · sign-in required",
        href: "https://adsmanager-n.leads-mart.com/",
      },
    ],
    sections: [
      {
        id: "problem",
        title: "Campaigns are only one part of the work.",
        paragraphs: [
          "Advertising teams work across campaign creation, incoming leads, reporting, funding, and billing. LeadsMart connects Facebook and TikTok campaign workflows with the operational screens around them. A useful interface needs to help people move between those tasks and understand the state of their work.",
          "Advertisers and internal operations teams do not need identical screens or actions. The product also serves English and Arabic readers. Navigation, permissions, and language direction therefore belong to the everyday product experience, alongside the dashboards and forms.",
        ],
      },
      {
        id: "responsibility",
        title: "My part: turning product flows into working UI.",
        paragraphs: [
          "I rebuilt the ads-manager frontend from Figma designs using React, TypeScript, and reusable components. My work includes lead dashboards, campaign creation and management, analytics, billing, and wallet workflows. I integrated APIs and worked with backend engineers as part of the product team.",
          "I implemented permission-gated routes and navigation, along with English/Arabic interfaces and right-to-left layouts. I also built a React Native and Expo companion app, using shared TypeScript modules where applicable. The mobile work is described here as built; this case study does not claim that the app has been publicly launched.",
        ],
      },
      {
        id: "approach",
        title: "Separate product data from interface state.",
        paragraphs: [
          "The frontend uses TanStack Query for API data and Zustand for client state. Those tools give the two kinds of state distinct places to live: fetched product records and their request lifecycle on one side, local interface state on the other. This separation requires care around mutations so the displayed product data stays consistent after an action.",
          "Reusable components and lazy-loaded routes support the different screens in the ads manager. Shared UI can make related workflows more consistent, but a reusable component still needs to accommodate the actual task. The English/Arabic treatment includes navigation and layout direction, rather than replacing strings alone.",
          "The mobile companion carries related workflows into React Native and Expo. Shared TypeScript modules provide common logic, while the app still needs platform-specific interface implementation. Frontend permission checks control presentation; backend authorization remains necessary for protected data and actions.",
        ],
      },
      {
        id: "result",
        title: "A connected set of operational workflows.",
        paragraphs: [
          "The visible work spans campaign management, lead analytics, trends, and the ads-manager dashboard. The walkthrough provides a credential-free view of those screens. Account information and private totals remain masked in the existing captures, so the demonstration can focus on the interface and its structure.",
          "The evidence establishes delivered functionality across web, bilingual interfaces, and a companion app. It does not establish a measured conversion increase, revenue impact, or application-speed improvement. Product screenshots may show account-level figures; those figures should not be read as my performance metrics. The external platform link is secondary because viewing it may require sign-in.",
        ],
      },
    ],
  },
  {
    id: "scanfit",
    title: "ScanFit",
    category: "Open source · Browser tooling",
    headline: "From a document photo to an upload-ready PDF.",
    summary:
      "An open-source browser scan-to-PDF library with a TypeScript core and optional React components.",
    contribution:
      "I created a local document-processing workflow with perspective correction, explicit PDF size limits, and a review step before export.",
    role: "Creator & maintainer",
    audience: "Developers building document-upload flows",
    period: "Public alpha",
    status: "Open source · Public alpha",
    facts: [
      "Local browser processing",
      "TypeScript core + React UI",
      "Explicit size-limit outcomes",
    ],
    tech: ["TypeScript", "React", "Web Workers", "Canvas"],
    screenshots: [],
    links: [
      { label: "Try the public alpha", href: "https://scanfit-two.vercel.app" },
      {
        label: "View source",
        href: "https://github.com/Ahmedsultan09/scanfit",
      },
      {
        label: "npm package",
        href: "https://www.npmjs.com/package/@scanfit/browser",
      },
    ],
    sections: [
      {
        id: "problem",
        title: "A file picker does not prepare a document.",
        paragraphs: [
          "A document-upload form may expect a PDF below a specific byte limit, while the person using it has photos of paper. The gap includes importing or capturing images, correcting perspective, organizing pages, and fitting the result within the upload requirement. The result also needs to remain inspectable before it is submitted.",
          "ScanFit handles that preparation in the browser. It returns a PDF File to the host application after the user reviews it. The host remains responsible for attaching the file to a form or uploading it; scanning and submission are separate steps.",
        ],
      },
      {
        id: "responsibility",
        title: "My part: the library and its integration surface.",
        paragraphs: [
          "I created ScanFit as an open-source TypeScript library with a framework-independent core and optional React components. The core manages document-processing sessions. React components provide the ready-made scanner experience, with customization and headless integration options for applications that need their own interface.",
          "The workflow supports importing supported image formats or capturing pages, correcting document corners and perspective, reviewing pages, and exporting against an explicit byte limit. The public repository, npm package, and hosted demo make this work available for inspection. It is a public alpha rather than a release-certified beta.",
        ],
      },
      {
        id: "approach",
        title: "Make constraints part of the result.",
        paragraphs: [
          "Document processing runs locally, with worker-based processing and browser canvas facilities. This avoids a document-processing upload service in the library’s default workflow. The tradeoff is dependence on browser capabilities and available memory, and the host page and its third-party scripts still need to be trustworthy.",
          "An export request includes an exact maximum byte count and quality limits. A result can be ready, cannot-fit, or cancelled. The cannot-fit outcome is important: meeting a file-size requirement must not silently mean violating the specified quality floor. The application receives an explicit outcome it can explain to the user.",
          "The review step shows the page previews associated with the export before the file is accepted. This gives the user a chance to inspect the processed document. The framework-independent core keeps the session and processing model separate from the optional React presentation, at the cost of more integration work for a fully custom interface.",
        ],
      },
      {
        id: "result",
        title: "Public code, with the alpha boundaries visible.",
        paragraphs: [
          "The public alpha is published and has a hosted demo. Start with synthetic sample documents when exploring it. The workflow illustration on this page explains the processing stages; it is not a screenshot of the application. The live demo and source links are the places to inspect the working implementation.",
          "Physical-device testing, broader document fixtures, and user pilots remain release gates in the repository. Detection can be wrong, and some inputs cannot fit the requested limit. The library does not provide OCR, existing-PDF import, searchable text, or persistent document storage. Refreshing or closing the browser loses unfinished work. These limits are part of the current product scope, not hidden behind a general reliability claim.",
        ],
      },
    ],
  },
  {
    id: "section",
    title: "SECTION",
    category: "Next.js · Bilingual website",
    headline: "A showroom that works in two directions.",
    summary:
      "An English/Arabic furniture and interior fit-out website with an interactive photo hero and guided inquiries.",
    contribution:
      "I built the Next.js frontend, bilingual layouts, interactive hero with fallbacks, collection galleries, and inquiry interface.",
    role: "Frontend Developer",
    audience: "Furniture & interior project clients",
    period: "Selected project",
    status: "Website",
    facts: ["English / Arabic", "Next.js", "WebGL fallbacks"],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Three.js"],
    cover: sectionShots[0],
    screenshots: sectionShots,
    links: [
      { label: "Visit the website", href: "https://section-furniture.com/en" },
    ],
    sections: [
      {
        id: "problem",
        title: "Help people explore, then explain what they need.",
        paragraphs: [
          "SECTION presents furniture and interior fit-out work to English and Arabic readers. Visitors need to browse collections and project stories, understand the offer, and describe a potential project. The website combines a visual introduction with those practical browsing and inquiry tasks.",
        ],
      },
      {
        id: "responsibility",
        title: "My part: the public frontend.",
        paragraphs: [
          "I built the Next.js and TypeScript frontend, including a Three.js photo hero, responsive English/Arabic layouts, collection galleries, project stories with collaborator credits, and the guided inquiry interface. The form includes client-side validation and consent controls. My work also included localized metadata, canonical and language-alternate links, and structured data.",
        ],
      },
      {
        id: "approach",
        title: "An interactive opening with a simpler path available.",
        paragraphs: [
          "The photo hero uses Three.js, with fallbacks for reduced motion, low-data settings, and unavailable WebGL. This gives the visual experience a supported alternative when the interactive version is inappropriate or unavailable. Supporting both paths adds implementation work, but makes the core introduction less dependent on animation.",
          "English and Arabic pages include different reading directions, navigation, and mobile layouts. The paired captures below show that treatment in the actual site. Reusable galleries and project-story components organize the visual content, while the inquiry interface turns a broad contact request into a sequence of choices.",
        ],
      },
      {
        id: "result",
        title: "Visual work with an accessible route through it.",
        paragraphs: [
          "The site provides bilingual browsing, collections, project stories, and a guided inquiry interface. The screenshots show the homepage in both languages, the collection overview, and the first inquiry step. The live public site is linked for further exploration.",
          "This case study describes frontend implementation. Client-side validation alone is not a complete submission-security boundary, and no conversion uplift or performance improvement is claimed here.",
        ],
      },
    ],
  },
  {
    id: "ticketing",
    title: "Printer Maintenance Ticketing",
    category: "SaaS · Field-service operations",
    headline: "A shared view of field-service work.",
    summary:
      "A service platform connecting repair tickets, maintenance visits, machines, and spare parts for Big Data Egypt.",
    contribution:
      "I built role-specific dashboards and service workflows, including maintenance scheduling, spare-parts tracking, and PDF reporting.",
    role: "Frontend Developer · Full-stack responsibilities",
    audience: "Managers, field engineers & operators",
    period: "December 2023–January 2025",
    status: "Professional work",
    facts: [
      "3 role-specific portals",
      "Maintenance scheduling",
      "PDF reporting",
    ],
    tech: ["React", "Supabase", "TanStack Query", "Tailwind CSS"],
    cover: ticketShots[0],
    screenshots: ticketShots,
    links: [
      {
        label: "View source",
        href: "https://github.com/Ahmedsultan09/ticketing-system",
      },
    ],
    sections: [
      {
        id: "problem",
        title: "A repair belongs to a larger service history.",
        paragraphs: [
          "Maintenance work connects people, clients, branches, machines, visits, and parts. A ticket register alone does not describe the entire operation. Managers, engineers, and operators need views that match their responsibilities while referring to the same service records.",
        ],
      },
      {
        id: "responsibility",
        title: "My part: the workflows and supporting data layer.",
        paragraphs: [
          "At Big Data Egypt, I built the React ticketing frontend and took on supporting full-stack responsibilities with Supabase. My scope included the PostgreSQL schema, authentication, API integration, role-specific dashboards, maintenance scheduling, spare-parts tracking, PDF reports, and document storage.",
          "The platform organizes machines by client and branch, supports ticket assignment through database functions, and includes tools for importing Excel records. These capabilities bring repair coordination and the records around it into a shared application.",
        ],
      },
      {
        id: "approach",
        title: "Match each interface to the work behind the role.",
        paragraphs: [
          "Managers, engineers, and operators have role-specific portals. The interface presents the workflows relevant to each group, while Supabase row-level security constrains access at the data layer. This is a different responsibility from simply hiding a navigation item in the browser.",
          "Reusable frontend components support the different operational screens. Maintenance reports are generated as PDFs and stored using Supabase Storage. Connecting reporting with service records reduces the number of separate interfaces required to complete the workflow; this describes the architecture, not a measured productivity gain.",
        ],
      },
      {
        id: "result",
        title: "From a ticket to the surrounding operation.",
        paragraphs: [
          "The screenshots demonstrate an operations dashboard, ticket register, planned maintenance visits, and spare-parts catalog. Together they show the scope beyond a single CRUD screen. The repository link provides an additional way to inspect the work.",
          "No before-and-after timing, adoption, or commercial results are published in this case study. Its evidence is the implemented functionality and the visible application screens.",
        ],
      },
    ],
  },
];

export const siteUrl = "https://ahmedsultan.is-a.dev";
export function getPage(pathname: string) {
  const path = pathname.replace(/\/+$/, "") || "/";
  const project = caseStudies.find((p) => path === `/work/${p.id}`);
  return { path, project, notFound: path !== "/" && !project };
}
