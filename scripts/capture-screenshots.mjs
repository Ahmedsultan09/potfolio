/**
 * One-off screenshot capture for portfolio project media.
 * Run: npx playwright install chromium && node scripts/capture-screenshots.mjs
 */
import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const shots = [
  {
    url: "https://www.leads-mart.com/",
    out: "public/projects/leadsmart/landing.png",
  },
  {
    url: "https://adsmanager-n.leads-mart.com/",
    out: "public/projects/leadsmart/platform.png",
  },
  {
    url: "https://tactisport.ai/en",
    out: "public/projects/tactisport/landing.png",
  },
  {
    url: "https://tactisport.ai/en#reports",
    out: "public/projects/tactisport/reports-1.png",
    waitMs: 2500,
  },
  {
    url: "https://app.tactisport.ai/",
    out: "public/projects/tactisport/portal.png",
  },
  {
    url: "https://maraqez.com/",
    out: "public/projects/maraqez/login.png",
  },
  {
    url: "https://github.com/Ahmedsultan09/ticketing-system",
    out: "public/projects/ticketing/dashboard.png",
  },
];

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
  });

  for (const shot of shots) {
    const outPath = path.join(root, shot.out);
    await mkdir(path.dirname(outPath), { recursive: true });
    console.log(`Capturing ${shot.url} -> ${shot.out}`);
    try {
      await page.goto(shot.url, { waitUntil: "networkidle", timeout: 60000 });
      if (shot.waitMs) await page.waitForTimeout(shot.waitMs);
      await page.screenshot({ path: outPath, fullPage: false });
      console.log("  ok");
    } catch (err) {
      console.error("  failed:", err.message);
      // Still try a screenshot of whatever loaded
      try {
        await page.screenshot({ path: outPath, fullPage: false });
        console.log("  saved partial");
      } catch {
        /* ignore */
      }
    }
  }

  // Extra TactiSport report tab shot: scroll to reports and click a tab if present
  try {
    await page.goto("https://tactisport.ai/en", {
      waitUntil: "networkidle",
      timeout: 60000,
    });
    const reportsLink = page.getByRole("link", { name: /reports/i }).first();
    if (await reportsLink.count()) {
      await reportsLink.click();
      await page.waitForTimeout(1500);
    }
    const pressure = page.getByRole("button", { name: /pressure viewer/i });
    if (await pressure.count()) {
      await pressure.click();
      await page.waitForTimeout(2000);
    }
    const out = path.join(root, "public/projects/tactisport/reports-2.png");
    await page.screenshot({ path: out, fullPage: false });
    console.log("Captured reports-2");
  } catch (err) {
    console.error("reports-2 failed:", err.message);
  }

  // Login to TactiSport portal for a richer portal shot
  try {
    await page.goto("https://app.tactisport.ai/", {
      waitUntil: "networkidle",
      timeout: 60000,
    });
    await page.waitForTimeout(1000);
    const email = page.locator('input[type="email"], input[name="email"]').first();
    const password = page
      .locator('input[type="password"], input[name="password"]')
      .first();
    if ((await email.count()) && (await password.count())) {
      await email.fill("mostafa@tacti-sport.com");
      await password.fill("tactisport@2026");
      const submit = page
        .locator('button[type="submit"], button:has-text("Sign"), button:has-text("Log")')
        .first();
      await submit.click();
      await page.waitForTimeout(4000);
      await page.screenshot({
        path: path.join(root, "public/projects/tactisport/portal.png"),
        fullPage: false,
      });
      console.log("Captured authenticated portal");

      // Try sample analytics dashboard route
      await page.goto("https://app.tactisport.ai/football-analytics-dashboard", {
        waitUntil: "networkidle",
        timeout: 60000,
      });
      await page.waitForTimeout(2500);
      await page.screenshot({
        path: path.join(root, "public/projects/tactisport/reports-1.png"),
        fullPage: false,
      });
      console.log("Captured analytics dashboard");
    }
  } catch (err) {
    console.error("portal login failed:", err.message);
  }

  await browser.close();
  console.log("Done");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
