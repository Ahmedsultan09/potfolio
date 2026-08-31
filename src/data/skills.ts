export type SkillGroup = {
  id: string;
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Web & mobile",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "React Native",
      "Expo",
      "Vite",
      "React Router",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "Three.js",
    ],
  },
  {
    id: "state-data",
    title: "State & data",
    items: [
      "TanStack Query",
      "Zustand",
      "Redux Toolkit",
      "Axios",
      "REST APIs",
      "Formik",
      "Yup",
      "i18next",
    ],
  },
  {
    id: "backend",
    title: "Backend & cloud",
    items: [
      "Supabase",
      "PostgreSQL",
      "Authentication & row-level security",
      "AWS S3",
      "Realtime APIs",
    ],
  },
  {
    id: "ui-viz",
    title: "UI & visualization",
    items: [
      "Design systems",
      "Radix UI",
      "shadcn/ui",
      "Ant Design",
      "D3.js",
      "Recharts",
      "English / Arabic & RTL layouts",
      "Accessibility",
    ],
  },
];
