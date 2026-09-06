// Run after browser access is available: npm run verify:browser (preview must be running).
import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";

const base = process.env.PREVIEW_URL || "http://127.0.0.1:4173";
const paths = [
  "/",
  "/work/tactisport",
  "/work/leadsmart",
  "/work/scanfit",
  "/work/section",
  "/work/ticketing",
];
const browser = await chromium.launch(
  process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {},
);
const reports = [];
await mkdir("artifacts/screenshots", { recursive: true });
try {
  for (const width of [360, 390, 768, 1440, 1920]) {
    for (const theme of ["light", "dark"]) {
      const context = await browser.newContext({
        viewport: { width, height: 900 },
        reducedMotion: "reduce",
      });
      await context.addInitScript(
        (t) => localStorage.setItem("theme", t),
        theme,
      );
      const page = await context.newPage();
      const errors = [];
      page.on("pageerror", (e) => errors.push(e.message));
      page.on("console", (m) => {
        if (m.type() === "error") errors.push(m.text());
      });
      for (const path of paths) {
        const response = await page.goto(base + path);
        assert.equal(response.status(), 200);
        await page.evaluate(() => document.fonts.ready);
        assert.equal(await page.locator("h1").count(), 1);
        assert.ok(await page.locator("h1").isVisible());
        assert.ok(
          await page.evaluate(
            () => document.documentElement.scrollWidth <= innerWidth,
          ),
          `${width} ${theme} ${path}: overflow`,
        );
        assert.equal(
          await page
            .locator("html")
            .evaluate((n) => n.classList.contains("dark")),
          theme === "dark",
        );
        assert.deepEqual(errors, [], `${path}: console errors`);
        if (width === 390 || width === 1440) {
          const audit = await new AxeBuilder({ page })
            .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
            .analyze();
          assert.deepEqual(
            audit.violations.map((v) => ({
              id: v.id,
              nodes: v.nodes.map((n) => n.target),
            })),
            [],
            `${theme} ${path}: accessibility`,
          );
          if (path === "/" || path === "/work/tactisport") {
            // Scroll through lazy-loaded assets before capturing the full page.
            await page.evaluate(async () => {
              for (let y = 0; y < document.body.scrollHeight; y += 700) {
                window.scrollTo(0, y);
                await new Promise((r) => setTimeout(r, 80));
              }
              window.scrollTo(0, 0);
            });
            await page.screenshot({
              path: `artifacts/screenshots/${path === "/" ? "home" : "tactisport"}-${width}-${theme}.png`,
              fullPage: true,
            });
          }
        }
        if (path === "/" && width === 1440)
          assert.ok(
            (await page.locator("#projects").boundingBox()).y < 900,
            "Selected work begins in desktop viewport",
          );
        reports.push({ width, theme, path, status: "passed" });
      }
      await context.close();
    }
  }
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  await page.goto(base);
  await page
    .getByRole("button", { name: "Open navigation", exact: true })
    .click();
  assert.ok(await page.locator("#navigation-dialog").isVisible());
  for (let i = 0; i < 8; i++) {
    await page.keyboard.press("Tab");
    assert.ok(
      await page.evaluate(() =>
        document
          .querySelector("#navigation-dialog")
          .contains(document.activeElement),
      ),
    );
  }
  await page.keyboard.press("Escape");
  assert.equal(
    await page.evaluate(() =>
      document.activeElement.getAttribute("aria-label"),
    ),
    "Open navigation",
  );
  await page.getByRole("button", { name: "Switch to dark theme" }).click();
  await page.reload();
  assert.ok(
    await page.locator("html").evaluate((n) => n.classList.contains("dark")),
  );
  await page.goto(base + "/work/tactisport");
  await page
    .getByRole("button", { name: /02.*Follow the relationships/ })
    .click();
  assert.match(
    await page.locator(".gallery-main figcaption").innerText(),
    /Follow the relationships/,
  );
  await page.getByRole("button", { name: /Enlarge screenshot:/ }).click();
  assert.ok(await page.locator(".image-dialog").isVisible());
  await page.keyboard.press("Escape");
  assert.match(
    await page.evaluate(() =>
      document.activeElement.getAttribute("aria-label"),
    ),
    /Enlarge screenshot:/,
  );
  await page.getByRole("link", { name: "Back to selected work" }).click();
  assert.equal(new URL(page.url()).pathname, "/");
  await page.goBack();
  assert.equal(new URL(page.url()).pathname, "/work/tactisport");
  const missing = await page.goto(base + "/work/does-not-exist");
  assert.equal(missing.status(), 404);
  assert.match(await page.locator("h1").innerText(), /This page isn’t/);
  await context.close();
  const noJs = await browser.newContext({ javaScriptEnabled: false });
  const staticPage = await noJs.newPage();
  for (const path of paths) {
    await staticPage.goto(base + path);
    assert.ok((await staticPage.locator("main").innerText()).length > 200);
  }
  await noJs.close();
  const noStorage = await browser.newContext();
  await noStorage.addInitScript(() => {
    Object.defineProperty(window, "localStorage", {
      get() {
        throw new Error("Storage blocked");
      },
    });
  });
  const restricted = await noStorage.newPage();
  const storageErrors = [];
  restricted.on("pageerror", (e) => storageErrors.push(e.message));
  await restricted.goto(base);
  await restricted
    .getByRole("button", { name: "Switch to dark theme" })
    .click();
  assert.ok(
    await restricted
      .locator("html")
      .evaluate((n) => n.classList.contains("dark")),
  );
  assert.deepEqual(storageErrors, []);
  await noStorage.close();
  await writeFile(
    "artifacts/browser-verification.json",
    JSON.stringify({ checkedAt: new Date().toISOString(), reports }, null, 2),
  );
  console.log(
    `PASS: ${reports.length} viewport/theme/route checks; keyboard dialogs, theme persistence, no-JS, storage failure, navigation and 404.`,
  );
} finally {
  await browser.close();
}
