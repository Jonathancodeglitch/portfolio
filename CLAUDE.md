# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm run dev`: dev server at http://localhost:3000
- `npm run build` / `npm start`: production build and serve
- `npm run lint`: ESLint (flat config, `eslint-config-next/core-web-vitals`)

There is no test suite and no TypeScript; the project is plain JS/JSX.

## Stack

Next.js 16 (App Router), React 19, Tailwind CSS v4 (configured through `@import "tailwindcss"` and `@theme` in `app/globals.css`; there is no `tailwind.config.js`). Icons come from `lucide-react`, with FontAwesome also installed. Carousels use `embla-carousel-react` with the autoplay and auto-scroll plugins. Path alias `@/*` maps to the repo root (see `jsconfig.json`), so imports look like `@/app/components/...`.

## Architecture

This is a single-page portfolio. `app/page.jsx` stacks section components from `app/components/` inside the `Conatiner` wrapper (the misspelled filename `conatainer.jsx` and component name are used throughout, so keep them as they are when importing). `Banner` appears several times as a divider between sections.

- **Content is hardcoded in components.** Project data (`projects` array in `selectedWork.jsx`), work experience, tech logos, and so on are defined as constants at the top of each section file. To edit content, change those arrays.
- **Media** lives in `public/`: project demo videos and posters in `public/videos/`, tech logos in `public/image/`. `loopVideo.jsx` plays the project videos. `next.config.mjs` allows remote images from `placehold.co` only.
- **In-page navigation:** `scrollToSection(id)` in `app/components/utility.js` smooth-scrolls to an element id and updates the URL hash. Sections expose ids (`projects`, `about`, `contact`) and use `scroll-mt-*` to offset the fixed header in `navigation.jsx`. A new nav target needs a matching `id` on its section.
- **Server vs. client:** components are Server Components by default. Only the ones that need state, effects, or browser APIs (`navigation`, `hero`, `technologiesUsed`, `loopVideo`) are marked `"use client"`.
- **Styling:** mostly Tailwind utilities with arbitrary values (`bg-[#000]`, `text-[#FAB12F]`, and so on). `globals.css` defines custom theme tokens (`font-heading`, which all `h1`–`h6` use; `animate-marquee`) and the Embla carousel classes (`.embla__*`, `--slide-*` variables). The `font-heading` family ("ES Rebond Grotesque TRIAL") has no `@font-face` in the repo, so it falls back unless that font is installed locally.