import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";
import { render, routes } from "../dist-ssr/entry-server.js";

const template = await readFile("dist/index.html", "utf8");
const escape = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
for (const route of routes) {
  const page = render(route);
  const meta = `<title>${escape(page.title)}</title>
    <meta name="description" content="${escape(page.description)}" />
    <link rel="canonical" href="${page.canonical}" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${escape(page.title)}" />
    <meta property="og:description" content="${escape(page.description)}" />
    <meta property="og:url" content="${page.canonical}" />
    <meta property="og:image" content="${page.image}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${escape(page.title)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escape(page.title)}" />
    <meta name="twitter:description" content="${escape(page.description)}" />
    <meta name="twitter:image" content="${page.image}" />
    ${page.notFound ? '<meta name="robots" content="noindex" />' : ""}
    ${page.person ? `<script type="application/ld+json">${JSON.stringify(page.person).replaceAll("<", "\\u003c")}</script>` : ""}`;
  const output =
    route === "/"
      ? "dist/index.html"
      : route === "/404"
        ? "dist/404.html"
        : `dist${route}/index.html`;
  await mkdir(dirname(output), { recursive: true });
  await writeFile(
    output,
    template
      .replace("<!--page-meta-->", meta)
      .replace("<!--app-html-->", page.html),
  );
  console.log(`Rendered ${route}`);
}
await writeFile(
  "dist/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes
    .filter((r) => r !== "/404")
    .map((r) => `<url><loc>https://ahmedsultan.is-a.dev${r}</loc></url>`)
    .join("")}</urlset>`,
);
