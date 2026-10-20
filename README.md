# Daniel's Portfolio

Personal portfolio showcasing Cloud & AI research projects. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Project Grid** — Interactive cards with category filtering
- **Timeline View** — Chronological research journey
- **Project Modals** — Detailed markdown-rendered project descriptions
- **Dark/Light Theme** — Persisted via localStorage
- **Bilingual** — Full EN/ES internationalization

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Open [http://localhost:3000](http://localhost:3000)

## Content and checks

- Project order, filters and stacks: `src/data/projects.ts`.
- Card, introduction and timeline copy: `src/i18n/en.ts` and `src/i18n/es.ts`.
- English detail pages: `public/content/<contentId>.md`; Spanish equivalents: `public/content/es/<contentId>.md`.
- Keep a project's role, public links and measurement scope clear. Update dated milestones in both languages when figures change.

```bash
npm run lint
npm test
npm run build
```

The content check verifies translation parity, detail-page coverage, local Markdown links, timeline coverage and all grid/filter layouts using the existing Vite/React dependencies. The deployment workflow runs these checks before building.
