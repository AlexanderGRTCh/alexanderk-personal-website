# Alexander Kemos Personal Website

A clean, fast portfolio that showcases projects, skills, and contact details in a focused way. Built for clarity, approachability, and responsive behavior on every device. Developed with Astro and Tailwind, leveraging AI-assisted coding for efficiency and modern workflows.

Overview
This site presents featured and archived projects, short playbooks in MDX, and a contact form routed through a privacy friendly form backend. It is designed to be easy to extend and simple to deploy to any static host.

Key Features
Responsive layout with a compact top navigation, an animated active pill, and strong dark appearance support
Content driven pages for Projects and Playbooks using Astro Content collections and MDX
Accessible forms that submit to UseBasin without a custom server
Lightweight styling with Tailwind CSS and utility layers for cards, buttons, and typography
Fast first paint with an optimized hero avatar and minimal JavaScript

Tech Stack
Astro for the site framework and build pipeline
Tailwind CSS for styling and component utilities
MDX support for content rich project and playbook pages
TypeScript support in templates and configuration

Repository Layout
Root folder contains the license and this README
Main app code lives in shining-shepherd
Public assets such as the avatar image live in shining-shepherd/public/assets
Site pages and layout are in shining-shepherd/src

Notable Paths
shining-shepherd/src/pages: route files including the homepage, projects, playbooks, contact, and request CV
shining-shepherd/src/layouts/Layout.astro: global page frame and navigation behavior
shining-shepherd/src/styles/global.css: Tailwind layers and custom utilities
shining-shepherd/src/content/config.ts: content collection schemas
shining-shepherd/src/content/projects: project entries in MDX
shining-shepherd/src/content/playbooks: playbook entries in MDX

Getting Started
1. Ensure Node.js 18 or newer is installed.
2. From the project root, change directory into shining-shepherd.
3. Install dependencies with npm install.
4. Start a local server with npm run dev and open the printed address.

Build and Preview
1. Build a production site with npm run build.
2. Preview the output locally with npm run preview.

Content and Data
Projects are stored under shining-shepherd/src/content/projects as MDX files. Each file uses frontmatter fields defined in shining-shepherd/src/content/config.ts. The typical fields are title, description, thumbnail, tags, and optional links such as demoUrl and githubUrl. Playbooks live in shining-shepherd/src/content/playbooks and follow a similar pattern.

Navigation and Mobile Behavior
The top navigation uses a subtle glass like banner with an animated pill that follows the active link. On phones, the links form a single row that scrolls horizontally. As you move through sections, the row slides and centers the current item so only nearby items are kept in view. This keeps the header compact while preserving one tap access to every section.

Styling
The design relies on Tailwind utility layers stored in shining-shepherd/src/styles/global.css. Components such as cards, buttons, pills, and timeline items are built with small, composable class sets. Dark appearance is supported out of the box and the navigation banner adapts its contrast for better readability in dark environments.

Forms
The contact and request CV forms submit to UseBasin. To use your own endpoint, update the action attribute in the form tags found in shining-shepherd/src/pages/contact.astro and shining-shepherd/src/pages/request-cv/index.astro. No environment variables are required for local development.

Assets
Place site images under shining-shepherd/public/assets. The hero avatar is referenced at /assets/Web1.jpg. Replace the file or path to update the displayed image without changing imports.

Deployment
The site builds to static output and can be hosted on any static provider. Common options include Vercel, Netlify, Cloudflare Pages, and GitHub Pages. Use npm run build inside shining-shepherd and deploy the dist directory created by Astro.

CI and Deployment
This site auto-deploys to Cloudflare Pages using the Git integration. Cloudflare builds directly from this repository and publishes the static output after each push.

Cloudflare Pages settings
Root directory shining-shepherd
Build command npm ci && npm run build
Output directory dist
Node version 18 or 20
Production branch main
Preview deployments enabled for non main branches

Notes
Using a subfolder as the project root lets the repository keep documentation and meta files at the top level while Cloudflare builds only the app code. No extra CI workflow is required.

Notes for Recruiters and Clients
This project demonstrates modern front end tooling, content modeling, accessibility minded navigation, and production ready build and deploy workflows. It was assembled with a balance of hand written code and AI assisted iteration to move quickly while keeping a high standard of quality.

License
MIT License. See the LICENSE file at the project root for details.
