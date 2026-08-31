# Ahmed Sultan — Frontend Engineering Portfolio

A selection from Ahmed Sultan's work across landing pages, portals, dashboards, and mobile apps, with project screenshots, contribution summaries, experience, skills, and a downloadable CV. Built with React, TypeScript, and Vite.

## Features

- Selected highlights, in order: LeadsMart, TactiSport, SECTION, and Printer Maintenance Ticketing
- Screenshot carousels with product details, technologies, and individual contributions
- Experience at LeadsMart, TactiSport, Big Data Egypt for Systems, and Lnkr
- Light and dark themes, responsive layouts, a CSS-framed portrait, and reduced-motion support
- Keyboard-accessible navigation, descriptive image text, and search and social-preview metadata
- Profile, project, experience, skill, and course data in `src/data/*`

## Selected work

These projects highlight different domains and interface types from a broader body of work; they are not a complete project list.

- **LeadsMart:** Campaign management, lead dashboards, and analytics across web and mobile.
- **TactiSport:** Interactive football reports, tactical pitch visualization, and role-based portal interfaces.
- **SECTION:** Frontend work for an English/Arabic furniture showroom, including a Three.js photo hero, galleries, project stories, and inquiry forms.
- **Printer Maintenance Ticketing:** Repair tickets, maintenance visits, spare-parts tracking, and role-based service dashboards.

## Tech stack

- React 19 + Vite 6 + TypeScript
- Tailwind CSS 3
- Framer Motion
- Lucide icons

Three.js is used in the featured SECTION project, not in the portfolio's own hero.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

Check the code, create a production build, and preview it locally:

```bash
npm run lint
npm run build
npm run preview
```

## Content map

| Content | File |
|---------|------|
| Profile, social links, and CV link | `src/data/profile.ts` |
| Experience | `src/data/experience.ts` |
| Projects | `src/data/projects.ts` |
| Skills | `src/data/skills.ts` |
| Courses | `src/data/courses.ts` |
| Teams and approved testimonials | `src/data/testimonials.ts` |
| Section headings and supporting copy | `src/components/sections/` |
| Search and social-preview descriptions | `index.html` |
| Downloadable CV | `public/ahmed-sultan.pdf` |
| Portrait | `public/images/portrait.jpg` |
| Project screenshots | `public/projects/**` |

## Screenshots

Project images are stored under `public/projects/`; each carousel's order and image descriptions are defined in `src/data/projects.ts`.

SECTION uses six desktop captures from a local production preview: the English
hero, collections overview, process carousel, SODIC project story, inquiry first
step, and Arabic hero. The images live in `public/projects/section/` and appear
in that order. Mobile hero captures are separate review assets, not carousel
slides. No admin screens or submitted inquiry data are included.

The repository includes an older capture helper:

```bash
npx playwright install chromium
node scripts/capture-screenshots.mjs
```

Review its URLs and output paths before running it: they do not match every image currently used by the portfolio. Keep private account data out of any replacement screenshots.

## License

MIT
