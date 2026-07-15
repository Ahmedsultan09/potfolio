/**
 * Capture TactiSport landing + authenticated platform report screenshots.
 */
import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(__dirname, "../public/projects/tactisport");

const EMAIL = process.env.TACTISPORT_EMAIL;
const PASSWORD = process.env.TACTISPORT_PASSWORD;

async function shot(page, name) {
  const file = path.join(outDir, name);
  await page.screenshot({ path: file, fullPage: false });
  console.log("saved", name);
}

async function main() {
  if (!EMAIL || !PASSWORD) {
    throw new Error("Set TACTISPORT_EMAIL and TACTISPORT_PASSWORD before running this script.");
  }

  await mkdir(outDir, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });
  const page = await context.newPage();

  // 1) Landing hero
  console.log("Landing...");
  await page.goto("https://tactisport.ai/en", {
    waitUntil: "domcontentloaded",
    timeout: 90000,
  });
  await page.waitForTimeout(3000);
  await shot(page, "landing.png");

  // 2) Landing reports section
  console.log("Landing reports...");
  const reportsNav = page.getByRole("link", { name: /^Reports$/i }).first();
  if (await reportsNav.count()) {
    await reportsNav.click();
    await page.waitForTimeout(2000);
  } else {
    await page.goto("https://tactisport.ai/en#reports", {
      waitUntil: "domcontentloaded",
      timeout: 60000,
    });
    await page.waitForTimeout(2000);
  }
  await shot(page, "reports-1.png");

  // Click a few report tabs for variety
  for (const label of ["Movement relations", "Pressure viewer", "Zone pathways"]) {
    const btn = page.getByRole("button", { name: new RegExp(label, "i") });
    if (await btn.count()) {
      await btn.first().click();
      await page.waitForTimeout(1800);
    }
  }
  await shot(page, "reports-2.png");

  // 3) Platform login
  console.log("Platform login...");
  await page.goto("https://app.tactisport.ai/", {
    waitUntil: "domcontentloaded",
    timeout: 90000,
  });
  await page.waitForTimeout(2000);

  const email = page.locator('input[type="email"], input[name="email"], input[placeholder*="mail" i]').first();
  const password = page.locator('input[type="password"]').first();
  await email.waitFor({ timeout: 30000 });
  await email.fill(EMAIL);
  await password.fill(PASSWORD);

  const submit = page.locator('button[type="submit"]').first();
  if (await submit.count()) {
    await submit.click();
  } else {
    await page.getByRole("button", { name: /sign|log|دخول|login/i }).first().click();
  }

  await page.waitForTimeout(5000);
  await shot(page, "portal.png");
  console.log("URL after login:", page.url());

  // Try public sample analytics dashboard (no auth needed in some builds)
  console.log("Analytics dashboard...");
  await page.goto("https://app.tactisport.ai/football-analytics-dashboard", {
    waitUntil: "domcontentloaded",
    timeout: 90000,
  });
  await page.waitForTimeout(4000);
  await shot(page, "reports-portal-1.png");

  // Formation viewer
  await page.goto("https://app.tactisport.ai/formation", {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });
  await page.waitForTimeout(3000);
  await shot(page, "reports-portal-2.png");

  // Navigate around authenticated app for match reports if possible
  const candidates = [
    "/my-matches",
    "/dashboard",
    "/operator/matches",
  ];
  for (const route of candidates) {
    try {
      console.log("Trying", route);
      await page.goto(`https://app.tactisport.ai${route}`, {
        waitUntil: "domcontentloaded",
        timeout: 45000,
      });
      await page.waitForTimeout(3000);
      const url = page.url();
      if (!/sign|login/i.test(url)) {
        await shot(page, `portal-${route.replace(/\//g, "").replace(/-/g, "") || "home"}.png`);
      }
    } catch (e) {
      console.log("skip", route, e.message);
    }
  }

  // If matches list has items, open first match reports
  try {
    await page.goto("https://app.tactisport.ai/my-matches", {
      waitUntil: "domcontentloaded",
      timeout: 45000,
    });
    await page.waitForTimeout(3000);
    const matchLink = page.locator('a[href*="/my-matches/"]').first();
    if (await matchLink.count()) {
      await matchLink.click();
      await page.waitForTimeout(3000);
      await shot(page, "portal-match.png");
      const reportsLink = page.locator('a[href*="/reports"]').first();
      if (await reportsLink.count()) {
        await reportsLink.click();
        await page.waitForTimeout(4000);
        await shot(page, "portal-match-reports.png");
      }
    }
  } catch (e) {
    console.log("match reports skip:", e.message);
  }

  await browser.close();
  console.log("Done");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
