# Katya — React UX/UI proof

An independent one-page case for Misha showing three skills: extending a strong visual language directly in React, simplifying a product flow, and preparing structured context for an LLM. The visual reference is UNKNW’s public site. This is not affiliated with, endorsed by, or produced for UNKNW.

The gallery covers and project data are fictional. The page and interactive demo are in English. No requests leave the browser: there is no submission, API, database, analytics, authentication, or AI call.

## Run locally

Requires Node.js compatible with Next.js 16.

```bash
npm ci
npm run dev
npm run lint
npm run test:unit
npm run build
```

The first intended share is a private GitHub repository and protected Vercel preview. This project deliberately sends `noindex, nofollow`; update its canonical URL, sitemap, and crawler policy only as part of an explicit public-launch decision.

The production build uses Next.js webpack mode because Turbopack's CSS worker could not bind its internal port in the current sandbox. The source and output remain a standard Next.js application.

## What to try

1. Compare the layout, motion and aligned covers with the visual reference.
2. Filter the fictional gallery by service, industry or outcome.
3. Answer four questions to generate a human brief and JSON.
4. Copy the LLM context package; if clipboard access is unavailable, select its visible text manually.

## Data and assets

`CatalogItem` has an id, title, summary, services, industry, outcomes, verification date, content status, and agent tags. `BriefPayload` records intent, project type, stage, clarity need, timeframe, summary, recommended next step, and generated time.

The visual direction uses original code, layout, type hierarchy, and CSS/SVG graphics. It does not reuse UNKNW logos, case-study images, or client assets. Geist Sans, Geist Mono, and DM Serif Display ship locally through `next/font/local` under SIL OFL 1.1; their notices are in [src/app/fonts](src/app/fonts). No Google Fonts request is made during build or at runtime.

## Documentation

- [Research notes](docs/research.md)
- [Product and UX decisions](docs/decisions.md)
- [Verification record](docs/verification.md)
- [Unsent outreach draft](docs/outreach-draft.md)

Do not represent this prototype as UNKNW’s product, publish it, or send the outreach draft without the owner’s separate approval.
