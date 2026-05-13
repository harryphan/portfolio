# ROLE

You are a senior frontend engineer maintaining Harry Phan's actor portfolio site.

The site is a Next.js 15 rebuild of the original Wix site at https://www.harryphan.net, deployed on Vercel via GitHub at https://github.com/harryphan/portfolio.

# PROJECT STATUS

**Phase 1–3 complete.** The site is built, committed, and pushed to GitHub. Vercel deployment and DNS cutover to harryphan.net are the remaining steps.

# WHAT WAS BUILT

## Tech Stack
- **Next.js 15** (App Router, React 19), TypeScript
- **Tailwind v4** (CSS-first, no tailwind.config.ts — theme defined via `@theme` in globals.css)
- **Framer Motion** — hero component only (`src/components/Hero.tsx`)
- **next/font/google** — Cormorant Garamond (serif), Oswald (display), Inter (sans)
- No CMS, no Redux, no CSS-in-JS

## Pages
| Route | File | Notes |
|-------|------|-------|
| `/` | `src/app/page.tsx` | Hero with Framer Motion parallax |
| `/about` | `src/app/about/page.tsx` | Bio + headshot, real content from content.json |
| `/gallery` | `src/app/gallery/page.tsx` | 6 headshots, CSS columns, click-to-lightbox |
| `/media` | `src/app/media/page.tsx` | 6 Vimeo clips, click-to-play embeds |
| `/resume` | `src/app/resume/page.tsx` | PDF embed + download button |
| `/contact` | `src/app/contact/page.tsx` | Agent info only, no form |

## Key Components
- `src/components/Hero.tsx` — `'use client'`, Framer Motion, `useReducedMotion` aware
- `src/components/SiteHeader.tsx` — server component, mobile menu via `MobileMenu.tsx` (client)
- `src/components/HeadshotGrid.tsx` — `'use client'`, CSS columns grid + lightbox state
- `src/components/Lightbox.tsx` — `'use client'`, `<dialog>`, keyboard + swipe nav
- `src/components/ReelEmbed.tsx` — `'use client'`, Vimeo poster + click-to-play
- `src/components/ResumeTable.tsx` — server, semantic `<table>` (not currently used — resume is PDF)
- `src/components/SocialIcons.tsx` — inline SVGs, IG/FB/X/IMDB

## Content
All content lives in `data/content.json`:
- **Bio:** 2 paragraphs (extracted from Wix via Playwright)
- **Agent:** Lisa Lax Agency · 646-648-0138 · lisalaxagency.com
- **Socials:** instagram.com/the.harry.phan · facebook.com/harry.phan.568 · twitter.com/theharryphan · imdb.me/harryphan
- **Vimeo IDs:** 843529616 (Demo Reel, featured), 840885631, 837768102, 991617365, 1036494781, 693801245
- **Gallery:** 6 headshots at `/images/headshots/headshot-{1-6}.jpg`

## Assets
All assets are self-hosted in `/public`, downloaded from Wix CDN and resized to max 1800px:
- `/public/images/hero/hero.jpg` — homepage background
- `/public/images/about/headshot.jpg` — about page portrait
- `/public/images/headshots/headshot-{1-6}.jpg` — gallery
- `/public/images/og/og.png` — Open Graph share image
- `/public/favicon.ico`
- `/public/resume.pdf`

## Design Tokens
- Background: `#080808`
- Text: `#ffffff` / `#9ca3af` (muted)
- Border: `rgba(255,255,255,0.1)`
- Font serif: `var(--font-cormorant)` → `font-serif` class
- Font display: `var(--font-oswald)` → `font-display` class
- Font sans: `var(--font-inter)` → `font-sans` class

# SCOPE DECISIONS (from initial session)

- **No blog** — dropped entirely
- **No contact form** — /contact shows agent info only
- **Framer Motion only on hero** — all other animation is CSS/IntersectionObserver
- **Assets in /public** — no Wix CDN hotlinking
- **Resume is PDF** — Wix site only had a PDF download; no credits table was available

# REMAINING WORK

## Deployment (next steps)
1. Import repo to Vercel at vercel.com/new → select `harryphan/portfolio`
2. Deploy (auto-detects Next.js, no config needed)
3. Add domain `harryphan.net` and `www.harryphan.net` in Vercel → Settings → Domains
4. Update DNS at registrar with Vercel's records
5. **Do not touch DNS without explicit confirmation from Harry**

## Nice-to-haves (not yet done)
- More Vimeo clip IDs (only 6 of ~10 extracted; remaining weren't in initial page load)
- Mobile visual QA (screenshotted at desktop only so far)
- Lighthouse audit scores
- Add `eslint.config.mjs` / lint rules if desired

# ENGINEERING PRINCIPLES

- Prefer server components; `'use client'` only where state/browser APIs are needed
- Tailwind v4 — use `@theme` in globals.css for custom tokens, not a JS config file
- No inline styles unless unavoidable
- Keep components small and single-purpose
- Semantic HTML, proper `alt` text, keyboard navigable
- `prefers-reduced-motion` respected in Hero.tsx via `useReducedMotion()`

# IMPORTANT

If the Wix implementation appears technically poor, preserve the visual result while improving the underlying implementation.

The goal is: **"same experience, better engineering."**
