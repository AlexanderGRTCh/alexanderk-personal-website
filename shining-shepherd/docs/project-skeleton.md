# Project skeleton (quick lookup)

## Stack and commands
- Astro 5 with Tailwind and MDX (`astro.config.mjs`), default static build to `dist/`.
- Scripts (`package.json`): `npm run dev`, `npm run build`, `npm run preview`, `npm run astro`.
- Tailwind config in `tailwind.config.js`; PostCSS in `postcss.config.js`; TS settings in `tsconfig.json`.

## Layout, styles, and navigation
- `src/layouts/Layout.astro`: wraps every page, imports `src/styles/global.css`, builds pill-style nav that tracks scroll/hash, and sets background blobs on home only.
- `src/styles/global.css`: Tailwind base/components/utilities plus custom classes (`btn*`, `card`, `pill`, `input`, `section*`, nav pill styling, timeline, avatar accents).
- `src/components/Welcome.astro`: original Astro starter welcome component (not used in main pages).

## Pages
- `src/pages/index.astro`: landing page with sections (home/about/projects/skills/experience/contact). Pulls projects via `getCollection('projects')`, builds featured/highlighted cards linking to `/projects/{slug}`. Skills/experience data are inline arrays. Contact form posts directly to UseBasin.
- `src/pages/about.astro`: simple about text.
- `src/pages/contact.astro`: standalone contact form posting to UseBasin; GitHub/LinkedIn buttons.
- `src/pages/projects.astro`: lists all projects from content collection, sorted by title, linking to `/projects/{slug}`.
- `src/pages/projects/[...slug].astro`: content-driven project detail route with `getStaticPaths()` from the projects collection; renders thumbnail, tags, body, and demo/code links.
- `src/pages/projects/[slug].astro`: alternate project detail route with a hard-coded `slugMap` (project1/project2/project3 plus aliases `match-engine`, `cloud-security-pipeline`). Also renders project body and links.
- `src/pages/playbooks.astro` and `src/pages/playbooks/[slug].astro`: list and detail pages for the playbooks collection, with tags and MDX content.
- `src/pages/request-cv/index.astro`: CV request form (UseBasin endpoint) with preset message and hidden subject fields.
- `src/pages/no-demo.astro`: placeholder page for projects without live demos.

## Content collections
- `src/content/config.ts`: defines `projects` (title, description, thumbnail, tags, optional demoUrl/githubUrl, optional featured) and `playbooks` (title, description, tags) collections.
- `src/content/projects/`: MDX entries `project1.mdx` (Cloud Security Pipeline), `project2.mdx` (Tennis Momentum Match Engine), `project3.mdx` (Python Data Pipeline demo). Slugs derive from filenames.
- `src/content/playbooks/playbook1.mdx`: sample playbook entry.

## Assets
- Public assets in `public/assets/` (hero photo `FC2.jpg`, project illustrations `project-*.svg`, reports/screenshots, misc PNG/JPG). `favicon.svg` in `public/`.
- Build artifacts in `dist/` (static output, including per-project folders and the generated `_astro` assets).

## Forms and external services
- All forms post directly to UseBasin endpoint `https://usebasin.com/f/9cc815c9e668`; no serverless/API route in this reset.
- `import.meta.env.BASE_URL` used for the CV link; no `.env` file present in repo.

## Notes on routing
- Two project detail routes coexist: `[...slug].astro` (collection-driven) and `[slug].astro` (alias map). Links from the list/home pages currently use the collection slugs. If both remain, ensure deployment picks the intended one.
