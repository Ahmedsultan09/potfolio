export const profile = {
  name: "Ahmed Sultan",
  title: "Frontend Developer",
  headline:
    "I build dashboards, multi-step workflows, and English/Arabic interfaces. Building production applications since 2023.",
  summary:
    "Frontend Developer | React, TypeScript & Next.js. SaaS dashboards, complex workflows, and English/Arabic interfaces. Based in Cairo, Egypt.",
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
