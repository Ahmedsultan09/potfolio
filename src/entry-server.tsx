import { renderToString } from "react-dom/server";
import App from "./App";
import { caseStudies, getPage, siteUrl } from "./data/case-studies";
import { profile } from "./data/profile";
export const routes = ["/", ...caseStudies.map((p) => `/work/${p.id}`), "/404"];
export function render(pathname: string) {
  const { project, notFound, path } = getPage(pathname);
  return {
    html: renderToString(<App pathname={pathname} />),
    title: notFound
      ? "Page not found — Ahmed Sultan"
      : project
        ? `${project.title} — Frontend case study by Ahmed Sultan`
        : "Ahmed Sultan — Frontend Developer | React, TypeScript & Next.js",
    description: project
      ? `${project.summary} ${project.contribution}`
      : profile.summary,
    canonical: `${siteUrl}${path === "/" ? "/" : path}`,
    image: `${siteUrl}/social/${project?.id || "home"}.png`,
    notFound,
    person:
      path === "/"
        ? {
            "@context": "https://schema.org",
            "@type": "Person",
            name: profile.name,
            jobTitle: profile.title,
            url: siteUrl,
            image: `${siteUrl}${profile.portraitUrl}`,
            sameAs: [profile.social.linkedin, profile.social.github],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Cairo",
              addressCountry: "EG",
            },
            knowsAbout: [
              "React",
              "TypeScript",
              "Next.js",
              "Frontend development",
              "English/Arabic interfaces",
            ],
          }
        : null,
  };
}
