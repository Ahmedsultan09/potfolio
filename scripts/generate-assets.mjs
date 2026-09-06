import sharp from "sharp";
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

// Original product screenshots remain intact; generated files are display variants.
async function images(directory) {
  const result = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) result.push(...(await images(path)));
    else if (path.endsWith(".png")) result.push(path);
  }
  return result;
}
for (const source of await images("public/projects")) {
  const stem = source
    .replace("public/projects/", "public/media/")
    .replace(/\.png$/, "");
  await mkdir(dirname(stem), { recursive: true });
  await Promise.all(
    [480, 960, 1600].map((width) =>
      sharp(source)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 85 })
        .toFile(`${stem}-${width}.webp`),
    ),
  );
}
await mkdir("public/media", { recursive: true });
for (const width of [320, 640])
  await sharp("public/images/portrait.jpg")
    .resize({ width })
    .webp({ quality: 88 })
    .toFile(`public/media/portrait-${width}.webp`);

const socialPages = [
  {
    id: "home",
    name: "Ahmed Sultan",
    line1: "Interfaces for",
    line2: "complex SaaS products.",
    tag: "Frontend Developer · React, TypeScript & Next.js",
    image: "public/projects/tactisport/report-pressure-hd.png",
  },
  {
    id: "tactisport",
    name: "TactiSport",
    line1: "Football data.",
    line2: "A clearer picture.",
    tag: "12+ reports · Tactical pitch renderer · 5 roles",
    image: "public/projects/tactisport/report-pressure-hd.png",
  },
  {
    id: "leadsmart",
    name: "LeadsMart",
    line1: "The interface behind",
    line2: "the campaign.",
    tag: "Campaigns · Leads · English / Arabic UI",
    image: "public/projects/leadsmart/platform-dashboard-hd.png",
  },
  {
    id: "scanfit",
    name: "ScanFit",
    line1: "Document photos.",
    line2: "Upload-ready PDFs.",
    tag: "Open source · TypeScript core + React UI · Public alpha",
  },
  {
    id: "section",
    name: "SECTION",
    line1: "A showroom in",
    line2: "two directions.",
    tag: "Next.js · English / Arabic · Interactive website",
    image: "public/projects/section/landing-hero-hd.png",
  },
  {
    id: "ticketing",
    name: "Maintenance Ticketing",
    line1: "A shared view of",
    line2: "field-service work.",
    tag: "React · Supabase · Role-specific workflows",
    image: "public/projects/ticketing/dashboard-hd.png",
  },
];
const xml = (s) => s.replaceAll("&", "&amp;").replaceAll("<", "&lt;");
await mkdir("public/social", { recursive: true });
for (const page of socialPages) {
  const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg"><rect width="1200" height="630" fill="#f5f1e7"/><rect x="0" y="0" width="1200" height="12" fill="#c5ff0f"/><text x="56" y="84" font-family="sans-serif" font-size="22" fill="#191814">AHMED SULTAN / SELECTED WORK</text><line x1="56" y1="113" x2="1144" y2="113" stroke="#b5b1a7"/><text x="56" y="180" font-family="sans-serif" font-size="23" fill="#626059">${xml(page.name)}</text><text x="56" y="270" font-family="sans-serif" font-weight="600" font-size="48" letter-spacing="-2" fill="#191814">${xml(page.line1)}</text><text x="56" y="335" font-family="serif" font-style="italic" font-size="48" fill="#191814">${xml(page.line2)}</text><text x="56" y="415" font-family="sans-serif" font-size="16" fill="#626059">${xml(page.tag)}</text><rect x="56" y="495" width="190" height="50" fill="#191814"/><text x="79" y="526" font-family="sans-serif" font-size="16" fill="#f5f1e7">Explore the work ↗</text><text x="56" y="595" font-family="sans-serif" font-size="17" fill="#626059">ahmedsultan.is-a.dev</text>${!page.image ? '<rect x="820" y="180" width="210" height="285" fill="#fffdf5" stroke="#191814"/><text x="855" y="290" font-family="sans-serif" font-size="50" fill="#191814">.pdf</text><path d="M855 335H985M855 355H960M855 375H985" stroke="#b5b1a7" stroke-width="6"/><rect x="935" y="422" width="140" height="52" fill="#c5ff0f"/><text x="953" y="455" font-family="sans-serif" font-size="18" fill="#191814">Local first</text>' : ""}</svg>`;
  const layers = page.image
    ? [
        {
          input: await sharp(await readFile(page.image))
            .resize(440, 350, { fit: "contain", background: "#191814" })
            .png()
            .toBuffer(),
          left: 704,
          top: 167,
        },
      ]
    : [];
  await sharp(Buffer.from(svg))
    .composite(layers)
    .png()
    .toFile(`public/social/${page.id}.png`);
}
console.log("Generated responsive images and six social previews.");
await writeFile(
  "public/robots.txt",
  "User-agent: *\nAllow: /\nSitemap: https://ahmedsultan.is-a.dev/sitemap.xml\n",
);
