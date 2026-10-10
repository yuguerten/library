# The Left Library

A curated, museum-style library of left-wing history, theory and books.
Built with [Astro](https://astro.build), deployed to GitHub Pages.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321/library/
npm run build    # outputs static site to ./dist
npm run preview  # preview the production build
```

## Content

Everything is plain data you can edit without touching the templates:

- **Books** — `src/data/books.ts`
  Each book has `title`, `author`, `year`, `summary`, `category`, `status`
  (`free` / `reading` / `finished`), tags, and a `hue` for the generated cover.
  To use a **real cover image**, set the `image` field to a URL — otherwise a
  styled CSS cover is generated automatically.
- **History** — `src/data/history.ts`
  Each entry has `year`, `title`, `location`, `body`, and an `era` (`early`,
  `industrial`, `revolutionary`, `modern`).

Add new entries by appending to the arrays — the site rebuilds automatically.

## Deploying to GitHub Pages

The site is configured with `base: '/library'`, so it is built to live at:

```
https://yuguerten.github.io/library/
```

### Option A — dedicated repo served as a project page (recommended)

Create a repo named **`library`** under your GitHub account and push this
project to it. GitHub serves it automatically at
`https://yuguerten.github.io/library/` once you:

1. Enable **Settings → Pages → Source: GitHub Actions**.
2. Push to `main` — the included
   `.github/workflows/deploy.yml` builds and publishes `dist/` to the
   `gh-pages` branch.

### Option B — subfolder of your `yuguerten.github.io` repo

If you keep this project inside your main `yuguerten.github.io` repo (e.g. in a
`library/` subfolder), build locally with `npm run build` and copy the contents
of `dist/` into the `library/` subfolder, then commit and push. GitHub Pages
serves it at `/library/`.

> If you ever want the site at the root (`https://yuguerten.github.io/`),
> change `base` in `astro.config.mjs` to `'/'` and delete the `.github/workflows`
> folder.
