# Ahmed Sultan — Frontend Developer Portfolio

An editorial portfolio for React/TypeScript SaaS work: a concise homepage and five shareable case studies. Cream, charcoal, and lime in light and dark themes.

## Local development

Use Node.js 22 or newer.

```sh
npm ci
npm run dev
```

For the actual prerendered production output:

```sh
npm run build
npm run preview
```

The preview runs at http://127.0.0.1:4173 and serves real static pages and 404 responses. It is the preferred target for review and testing.

## Pages and content

- Homepage: TactiSport → LeadsMart → ScanFit; SECTION and maintenance ticketing as supporting work.
- Case studies: `/work/tactisport`, `/work/leadsmart`, `/work/scanfit`, `/work/section`, `/work/ticketing`.
- Typed summaries, evidence captions, case-study sections, and project links: `src/data/case-studies.ts`.
- Existing original screenshot records: `src/data/projects.ts`. These are reused by the case studies.
- Shared employment history: `src/data/experience.ts`.
- Contact details and default CV URL: `src/data/profile.ts`.
- Page components: `src/components/Portfolio.tsx`; visual tokens and responsive layouts: `src/index.css`.

The old courses and testimonials data are retained but are not homepage sections. Existing section anchors remain available; `#testimonials` leads to experience and `#courses` to capabilities.

## Rendering and assets

Vite builds the browser bundle and a build-only React server entry. `scripts/prerender.mjs` renders the six public pages and a 404 page, with unique titles, descriptions, canonical URLs, social metadata, and a sitemap. The browser hydrates the same components; no runtime server is deployed.

`npm run assets` creates responsive WebP images and six 1200×630 social previews. Generated media are ignored by Git and regenerated during builds. The original screenshots and their redactions remain unchanged. ScanFit uses a labeled workflow illustration, not a fabricated screenshot.

Fonts are bundled locally. Menus and image viewers use native dialogs with Escape handling and focus restoration. Theme persistence is optional: blocked local storage does not prevent rendering or toggling themes.

## Verification

```sh
npm run lint
npm run build
npm run verify
```

Static verification checks every prerendered route, unique titles and IDs, metadata, local links and fragments, image variants, content corrections, structured data, and not-found rendering. Results are written to `artifacts/static-verification.json`.

Once browser access is available, with the preview running:

```sh
npx playwright install chromium
npm run verify:browser
```

The browser suite covers the six pages at 360, 390, 768, 1440, and 1920 pixels in both themes, axe accessibility checks at 390/1440 pixels, theme persistence, storage failure, keyboard dialogs, navigation, no-JavaScript content, and 404 responses. It writes screenshots and a separate browser report under `artifacts/`. Optionally set `CHROME_PATH` to an installed Chrome executable.

Browser verification was **not run during implementation** because the browser security check was unavailable. No visual, interaction, screenshot, Lighthouse, or CLS results are claimed. Finish those checks, including manual 200% browser zoom and screen-reader review, before publishing. Lighthouse targets are mobile performance ≥90, accessibility ≥95, and CLS ≤0.1; record the device/throttling configuration and actual results.

## Publication checklist

- Completed: `public/ahmed-sultan.pdf` contains the owner-supplied September React/SaaS CV. Its one-page layout and text were reviewed, and the public file is byte-identical to the supplied PDF. The existing download URL is unchanged.
- Complete the browser and Lighthouse review above; inspect all four homepage desktop/mobile light/dark views and the project galleries.
- Deploy only after review. The implementation branch is `codex/portfolio-astra-redesign`, based on `origin/master`; this work has not been merged or published.
- Keep the existing Vercel project `ahmed-sultan-portfolio`, which serves `ahmedsultan.is-a.dev`. The similarly named `potfolio` project is not the custom-domain project.
- Web Analytics was enabled on the correct existing Hobby project on 6 September 2026. The React integration activates only on the production custom domain, so local and preview visits do not pollute traffic. Verify collection after deployment; no production collection has been tested.
- Review visitors, referrers, and case-study pages over comparable weekly periods. Page views are not CV downloads, contact conversions, or proof of recruiter interest.

No backend, contact form, CMS, framework migration, or paid analytics upgrade was added.
