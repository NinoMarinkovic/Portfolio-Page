# Nino Marinkovic — Portfolio

Personal portfolio site built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before you deploy — replace these placeholders

All real content lives in **`lib/data.ts`**. Search that file for `REPLACE_WITH` / `TODO`:

- `profile.email` — your real contact email
- `projects[].repoUrl` — real GitHub repo URLs for each project (currently placeholder paths)
- Optionally add `liveUrl` to any project once it has a public live demo link

Nothing else needs to change to go live — copy, layout, and content sections are otherwise complete and based on your actual projects (WM Predictor 2026, Finance Tracker, Gambler's Luck, Tic Tac Toe Minimax AI).

## Deploy

Easiest path: push this repo to GitHub, then import it on [Vercel](https://vercel.com/new) — zero config needed, it detects Next.js automatically.

## Project structure

```
app/            → routes, layout, global styles
components/     → one component per section (Hero, Projects, Roadmap, ...)
lib/data.ts     → all content: profile info, projects, stack, roadmap
public/         → static assets (add a favicon / OG image here)
```

## Stack

Next.js 14 · TypeScript · Tailwind CSS · Framer Motion · lucide-react
