# Personal_Website

A resume/portfolio website I can reference and keep updated with my latest
projects. Built with [Astro](https://astro.build) and deployed to GitHub Pages,
with a daily tech briefing as the front page.

## Commands

| Command           | What it does                                   |
| ----------------- | ---------------------------------------------- |
| `npm install`     | Install dependencies (first time only)         |
| `npm run dev`     | Local dev server at http://localhost:4321      |
| `npm run build`   | Build the static site into `dist/`             |
| `npm run preview` | Serve the built `dist/` locally                |
| `npm run check`   | Type-check everything                          |

## Where things live

| To change…               | Edit                                         |
| ------------------------ | -------------------------------------------- |
| Name, tagline, socials   | `src/consts.ts`                              |
| Jobs, skills, education  | `src/data/resume.ts`                         |
| Resume PDF               | drop it at `public/resume.pdf`               |
| Projects                 | Markdown in `src/content/projects/`          |
| Thoughts (blog posts)    | Markdown in `src/content/thoughts/`          |
| Photos                   | images in `src/assets/gallery/`              |
| Daily briefings          | JSON in `src/content/roundups/` (automated)  |
| Colors, fonts, spacing   | `src/styles/global.css`                      |

Frontmatter fields for each content type are defined (and validated) in
`src/content.config.ts`. A thought with `draft: true` is visible in
`npm run dev` only.

## Daily briefing

The front page is the newest file in `src/content/roundups/`. Those files are
written by the "Daily AI, Space, Tech & Auto Briefing" Claude routine: each
morning it researches the news, emails the briefing, then commits the same
content as `src/content/roundups/<YYYY-MM-DD>.json` and pushes to `main`,
which triggers a deploy. The file format is in
[src/content/roundups/FORMAT.md](src/content/roundups/FORMAT.md). An invalid
file fails the build, and the site keeps the previous edition.

## Deploying (GitHub Pages)

1. Push this repo to GitHub.
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Every push to `main` deploys via `.github/workflows/deploy.yml`.

The site URL and base path are detected automatically, so it works as either
`<user>.github.io` or `<user>.github.io/<repo>`. For a custom domain, set
`site` in `astro.config.mjs` and add the domain under Settings → Pages.
