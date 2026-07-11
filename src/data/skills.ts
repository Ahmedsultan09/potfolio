export type SkillGroup = {
  id: string;
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
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
    title: "State & Data",
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
    title: "Backend & Cloud",
    items: [
      "Supabase",
      "PostgreSQL",
      "Auth & RLS",
      "AWS S3",
      "Realtime APIs",
    ],
  },
  {
    id: "ui-viz",
    title: "UI & Visualization",
    items: [
      "Design systems",
      "Radix UI",
      "shadcn/ui",
      "Ant Design",
      "D3.js",
      "Recharts",
      "RTL / bilingual UI",
      "Accessibility",
    ],
  },
];
