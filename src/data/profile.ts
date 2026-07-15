export const profile = {
  name: "Ahmed Sultan",
  title: "Frontend Engineer",
  headline:
    "I design and ship production web and mobile products — from lead-generation platforms and bilingual admin tools to data-rich dashboards — with React, TypeScript, and thoughtful UI systems.",
  summary:
    "3+ years shipping production React and Next.js platforms — dashboards, RBAC, bilingual RTL products, and data-heavy operational tools.",
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
