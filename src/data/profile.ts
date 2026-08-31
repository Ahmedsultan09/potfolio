export const profile = {
  name: "Ahmed Sultan",
  title: "Frontend Engineer",
  headline:
    "I build landing pages, portals, dashboards, and mobile apps across different industries with React, Next.js, TypeScript, and React Native.",
  summary:
    "Frontend engineer building landing pages, portals, dashboards, and mobile apps across industries, including role-based tools and English/Arabic interfaces.",
  email: "asultan.dev@gmail.com",
  phone: "+20 111 123 6361",
  phoneHref: "tel:+201111236361",
  location: "Cairo, Egypt",
  resumeUrl: "/ahmed-sultan.pdf",
  portraitUrl: "/images/portrait.jpg",
  social: {
    linkedin: "https://www.linkedin.com/in/ahmed-sultan09/",
    github: "https://github.com/Ahmedsultan09",
  },
} as const;

export const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#testimonials", label: "Teams" },
  { href: "#contact", label: "Contact" },
] as const;
