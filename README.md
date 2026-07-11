# Ahmed Sultan — Portfolio

Colorful, motion-led personal portfolio built with React, TypeScript, Tailwind CSS, Framer Motion, and React Three Fiber.

## Features

- Three.js hero with shader-framed portrait and gradient atmosphere
- Featured projects: TactiSport, Maraqez, Printer Maintenance Ticketing
- Experience timeline including TactiSport (part-time)
- Dark / light theme, SEO meta tags, accessible landmarks
- Content driven from `src/data/*`

## Tech stack

- React 19 + Vite 6 + TypeScript
- Tailwind CSS 3
- Framer Motion
- Three.js / `@react-three/fiber` / `@react-three/drei`
- Lucide icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

```bash
npm run build
npm run preview
```

## Content map

| Content | File |
|---------|------|
| Profile / socials / resume | `src/data/profile.ts` |
| Experience | `src/data/experience.ts` |
| Projects | `src/data/projects.ts` |
| Skills | `src/data/skills.ts` |
| Courses | `src/data/courses.ts` |
| Resume PDF | `public/ahmed-sultan.pdf` |
| Portrait | `public/images/portrait.jpg` |
| Project screenshots | `public/projects/**` |

## Screenshots

Refresh project media with:

```bash
npx playwright install chromium
node scripts/capture-screenshots.mjs
```

## License

MIT
