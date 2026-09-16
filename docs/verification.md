# Verification record

## Technical checks

- `npm run lint` passed on 16 September 2026.
- `npx tsc --noEmit` passed.
- `npm run test:unit` passed all 3 tests covering allowed intake values, deterministic JSON/context formatting, and intersecting catalogue filters.
- `npm run build` passed: Next.js compiled, type-checked, and statically rendered `/`, `/icon.svg`, `/robots.txt`, and `/sitemap.xml`.
- The first Turbopack build failed only because its CSS worker could not bind an internal port in this sandbox (`Operation not permitted`). The build script now uses supported webpack mode; the full production build passed with that mode.
- Static HTML check found no duplicate IDs, missing in-page anchors, or external asset URLs. It confirmed `noindex, nofollow`; the generated robots route disallows all crawlers and sitemap contains no URLs.

## Browser review

- On 16 September Kate granted browser access and permission to view and save screenshots. Chrome was used to compare the public UNKNW first screen with this independent local prototype at 1297 × 768.
- Kate's screenshot review identified staggered covers, verbose case captions, a hidden navigation menu, generic copy, and weak background motion. The third pass now has aligned covers, one gallery, direct dock links, a personal hero, and moving red lines. The new first screen was inspected in Chrome at 1297 × 768; both first-row cover tops align.
- Kate rejected the Cyrillic headline and Cormorant Garamond. The English headline now uses DM Serif Display, an OFL substitute for the original commercial Grafier font. The fictional media graphics remain visibly different from UNKNW’s case imagery.

## Manual checks to complete

- Keyboard navigation and visible focus across entries, intake, filters, and copy action.
- Intake validation, generated summary, JSON serialization, and manual-copy fallback.
- Catalogue filtering at 360 px, 768 px, and desktop widths.
- Reduced-motion behaviour and a complete mobile visual pass.

Kate's assessment of the revised visual direction is still needed before any online preview.

## Security and content checks

- No credentials, outbound submission path, analytics, API request, or third-party image source.
- Local Geist Sans, Geist Mono and DM Serif Display replace `next/font/google`.
- `robots.ts` disallows crawlers, page metadata is `noindex, nofollow`, and `sitemap.ts` returns no public URLs.
- Content and graphics are original or synthetic; no UNKNW logo or case-study asset is used.
