import { chromium } from "playwright";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(__dirname, "../public/projects/tactisport");
const email = process.env.TACTISPORT_EMAIL;
const password = process.env.TACTISPORT_PASSWORD;

async function main() {
  if (!email || !password) {
    throw new Error("Set TACTISPORT_EMAIL and TACTISPORT_PASSWORD before running this script.");
  }

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  await page.goto("https://app.tactisport.ai/", { waitUntil: "domcontentloaded", timeout: 90000 });
  await page.waitForTimeout(1500);
  await page.locator('input[type="email"], input[name="email"]').first().fill(email);
  await page.locator('input[type="password"]').first().fill(password);
  await page.locator('button[type="submit"]').first().click();
  await page.waitForTimeout(5000);
  console.log("logged in", page.url());

  // Prefer a COMPLETE match
  const doneTab = page.getByRole("button", { name: /Done/i }).or(page.getByText(/^Done/i));
  if (await doneTab.count()) {
    await doneTab.first().click();
    await page.waitForTimeout(1500);
  }

  // Open first match
  const openMatch = page.getByText(/OPEN MATCH/i).first();
  if (await openMatch.count()) {
    await openMatch.click();
    await page.waitForTimeout(4000);
    console.log("match page", page.url());
    await page.screenshot({ path: path.join(outDir, "portal-match.png"), fullPage: false });
  }

  // Go to reports if link exists
  const reports = page.getByRole("link", { name: /report/i }).or(page.locator('a[href*="reports"]'));
  if (await reports.count()) {
    await reports.first().click();
    await page.waitForTimeout(4000);
    console.log("reports page", page.url());
    await page.screenshot({ path: path.join(outDir, "portal-match-reports.png"), fullPage: false });
  }

  // Click report type buttons if present
  for (const [name, file] of [
    [/Pressure/i, "portal-pressure.png"],
    [/Movement/i, "portal-movement.png"],
    [/Formation|Team Shape/i, "portal-shape.png"],
    [/Zone/i, "portal-zone.png"],
  ]) {
    const btn = page.getByRole("button", { name }).or(page.getByText(name));
    if (await btn.count()) {
      await btn.first().click();
      await page.waitForTimeout(3000);
      await page.screenshot({ path: path.join(outDir, file), fullPage: false });
      console.log("saved", file);
    }
  }

  // Also browse reports on analytics dashboard
  await page.goto("https://app.tactisport.ai/football-analytics-dashboard", {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });
  await page.waitForTimeout(3000);
  const browse = page.getByRole("button", { name: /Browse Reports/i });
  if (await browse.count()) {
    await browse.click();
    await page.waitForTimeout(1500);
    // click a few report items in the drawer/list
    const items = page.locator('[role="menuitem"], button, a').filter({ hasText: /Pressure|Movement|Zone|Possession|Shape/i });
    const count = Math.min(await items.count(), 4);
    for (let i = 0; i < count; i++) {
      try {
        await items.nth(i).click({ timeout: 3000 });
        await page.waitForTimeout(2500);
        await page.screenshot({
          path: path.join(outDir, `analytics-${i + 1}.png`),
          fullPage: false,
        });
        console.log("analytics", i + 1);
        if (await browse.count()) await browse.click().catch(() => {});
        await page.waitForTimeout(800);
      } catch {
        /* continue */
      }
    }
  }

  await browser.close();
  console.log("Done");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
