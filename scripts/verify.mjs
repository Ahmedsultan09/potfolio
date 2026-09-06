import assert from "node:assert/strict";
import { readFile, stat, mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { parseHTML } from "linkedom";
import { routes, render } from "../dist-ssr/entry-server.js";

const root = resolve("dist");
const reports = [];
const fileFor = (route) =>
  route === "/"
    ? `${root}/index.html`
    : route === "/404"
      ? `${root}/404.html`
      : `${root}${route}/index.html`;
const titles = new Set();
for (const route of routes) {
  const html = await readFile(fileFor(route), "utf8");
  const { document } = parseHTML(html);
  assert.equal(document.querySelectorAll("h1").length, 1, `${route}: one h1`);
  assert.ok(
    document.querySelector("main")?.textContent.trim().length > 100,
    `${route}: prerendered content`,
  );
  assert.ok(
    !html.includes("<!--app-html-->") && !html.includes("<!--page-meta-->"),
    "No template markers",
  );
  assert.ok(!titles.has(document.title), "Unique title");
  titles.add(document.title);
  assert.equal(
    document.querySelector('link[rel="canonical"]').getAttribute("href"),
    `https://ahmedsultan.is-a.dev${route === "/" ? "/" : route}`,
  );
  for (const key of ["og:title", "og:description", "og:image", "og:url"])
    assert.ok(
      document
        .querySelector(`meta[property="${key}"]`)
        ?.getAttribute("content"),
      `${route}: ${key}`,
    );
  const social = new URL(
    document.querySelector('meta[property="og:image"]').getAttribute("content"),
  );
  assert.equal(social.hostname, "ahmedsultan.is-a.dev");
  assert.ok((await stat(`${root}${social.pathname}`)).size > 1000);
  const ids = [...document.querySelectorAll("[id]")].map((n) => n.id);
  assert.equal(new Set(ids).size, ids.length, `${route}: unique IDs`);
  for (const img of document.querySelectorAll("img")) {
    assert.ok(img.hasAttribute("alt"), `${route}: image alternative`);
    assert.ok(
      Number(img.getAttribute("width")) > 0 &&
        Number(img.getAttribute("height")) > 0,
      `${route}: image dimensions`,
    );
    assert.ok(
      (await stat(`${root}${img.getAttribute("src")}`)).size > 0,
      `${route}: image exists`,
    );
    for (const candidate of (img.getAttribute("srcset") || "")
      .split(",")
      .filter(Boolean))
      await stat(`${root}${candidate.trim().split(" ")[0]}`);
  }
  for (const anchor of document.querySelectorAll("a[href]")) {
    const href = anchor.getAttribute("href");
    assert.ok(
      !/^(javascript:|https?:\/\/localhost)/i.test(href),
      `${route}: safe link`,
    );
    if (/^https?:/.test(href)) continue;
    if (href.startsWith("mailto:")) {
      assert.equal(href, "mailto:asultan.dev@gmail.com");
      continue;
    }
    const target = new URL(href, `https://ahmedsultan.is-a.dev${route}`);
    if (
      target.pathname.endsWith(".pdf") ||
      /\.(png|jpg|webp)$/.test(target.pathname)
    ) {
      await stat(`${root}${target.pathname}`);
      continue;
    }
    assert.ok(
      routes.includes(target.pathname),
      `${route}: known route ${href}`,
    );
    if (target.hash) {
      const targetDoc = parseHTML(
        await readFile(fileFor(target.pathname), "utf8"),
      ).document;
      assert.ok(
        targetDoc.getElementById(target.hash.slice(1)),
        `${route}: anchor ${href}`,
      );
    }
  }
  const content =
    document.querySelector(".case-story") || document.querySelector("main");
  const words = content.textContent.trim().split(/\s+/).length;
  reports.push({
    route,
    title: document.title,
    words,
    images: document.querySelectorAll("img").length,
    status: "passed",
  });
}
const home = parseHTML(await readFile(fileFor("/"), "utf8")).document;
const text = home.querySelector("main").textContent;
assert.ok(text.indexOf("TactiSport") < text.indexOf("ScanFit"));
assert.ok(text.includes("Mar – Jul 2026"));
assert.ok(!/3\+ years|Shipped a React Native/i.test(text));
const tacticJob = [...home.querySelectorAll(".job-list article")].find((n) =>
  n.textContent.includes("TactiSport"),
);
assert.ok(
  tacticJob.textContent.includes("Mar – Jul 2026") &&
    !tacticJob.textContent.includes("2025"),
);
for (const alias of [
  "top",
  "projects",
  "experience",
  "skills",
  "testimonials",
  "courses",
  "contact",
])
  assert.ok(home.getElementById(alias));
assert.match(render("/work/does-not-exist").html, /This page isn’t/);
assert.ok(render("/work/does-not-exist").notFound);
assert.equal(
  render("/work/tactisport/").canonical,
  "https://ahmedsultan.is-a.dev/work/tactisport",
);
assert.equal(
  home.querySelectorAll('script[type="application/ld+json"]').length,
  1,
);
const person = JSON.parse(
  home.querySelector('script[type="application/ld+json"]').textContent,
);
assert.equal(person.name, "Ahmed Sultan");
assert.equal(person.address.addressCountry, "EG");
await mkdir("artifacts", { recursive: true });
await writeFile(
  "artifacts/static-verification.json",
  JSON.stringify(
    {
      checkedAt: new Date().toISOString(),
      reports,
      browserVerification:
        "Pending: browser security check unavailable during implementation",
    },
    null,
    2,
  ),
);
console.log(JSON.stringify(reports, null, 2));
console.log(
  "PASS: prerendered routes, metadata, local links, anchors, media, content, structured data, and 404 rendering.",
);
