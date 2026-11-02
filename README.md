# NC A&T Department of Chemistry — website (Astro)

Homepage + interior pages built from the approved **Concept G "Vision"** design.
Astro 5 + Tailwind v4. Static output.

## Run it locally

> ⚠️ The project path contains `&` and spaces (`D:\NC A&T - Chemistry`), which breaks
> npm's Windows script shim (`npm run dev` → `'T' is not recognized`). Call Astro
> **directly with Node** instead, as shown below.

1. Open a terminal (PowerShell, CMD, or Git Bash).
2. Go into this folder:
   ```
   cd "D:\NC A&T - Chemistry\NC A&T - Chemistry"
   ```
3. Install dependencies (first time only):
   ```
   node "./node_modules/npm/bin/npm-cli.js" install
   ```
4. Start the dev server (hot-reloads on save):
   ```
   node ./node_modules/astro/astro.js dev
   ```
5. Open the printed URL — usually **http://localhost:4321/**
6. Stop with `Ctrl + C`.

## Other commands

```
node ./node_modules/astro/astro.js build      # production build -> dist/
node ./node_modules/astro/astro.js preview    # serve the built dist/ locally
```

## Project structure

```
site/
├─ public/            static assets served at site root
│  ├─ assets/         logos, favicons, fonts
│  └─ Photos/         images (people/, site/, banners)
├─ src/
│  ├─ pages/          one file = one route (index, about, academics,
│  │                  research, people, news, apply, give, contact,
│  │                  accessibility, 404, people/[slug] = faculty profiles)
│  ├─ layouts/        BaseLayout (head/theme) + SiteLayout (shared chrome)
│  ├─ components/     Header, Hero, FacultyCard, NextStep, …
│  ├─ data/           site.ts · department.ts · faculty.ts  (edit content here)
│  ├─ styles/         global.css (ported Concept G design + Tailwind theme)
│  └─ scripts/        site.js (theme toggle, molecular canvas, filters, etc.)
└─ astro.config.mjs
```

## Editing content

- **Faculty / staff** → `src/data/faculty.ts` (add a person = append one object; a
  profile page is generated automatically). Headshots go in
  `public/Photos/people/<slug>.webp` and are referenced via the `photo` field.
- **Programs, research areas, contacts** → `src/data/department.ts`
- **Homepage cards, nav, news, events** → `src/data/site.ts`

> A permanent fix for the npm issue is to move the repo to a path without `&`
> (e.g. `D:\ncat-chemistry`); then plain `npm run dev` / `npm run build` work.
