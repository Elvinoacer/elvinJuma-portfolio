# Social sharing card

`public/images/elvin-juma-og-2026.jpg` is the portfolio's shared Open Graph and Twitter/X image: 1200 × 630 pixels, sRGB JPEG. The root layout declares the image URL, actual dimensions, content type, and descriptive alternative text. Route layouts inherit it. A new filename replaces the previous small logo URL so scrapers can fetch a distinct asset.

The design follows the live portfolio: charcoal `#10110f`, ivory `#f4f3ed`, lime `#d7fb78`, condensed display lettering, serif accents, and a monochrome portrait. It uses the existing editorial photo and original portrait as identity references. Generated with the built-in image generation tool and exported using Sharp at 1200 × 630 with JPEG quality 90 and 4:4:4 chroma sampling.

The LinkedIn URL is centralized in `src/data/site.ts`. The homepage contact section, contact page, and shared footer consume this value. The downloadable résumé's visible LinkedIn URL and clickable PDF annotation use the same canonical profile, without the self-profile query parameter.

## Artwork prompt

Use case: identity-preserve / ads-marketing.
Asset type: premium Open Graph social sharing preview for Elvin Juma's personal software engineering portfolio.
Create a FINISHED, exceptionally polished editorial brand card, wide landscape 1.90476:1 (target 2400 x 1260, intended display 1200 x 630).
Input image 1 is the existing monochrome editorial portrait and visual style reference. Input image 2 is the original portrait identity reference. Preserve Elvin's exact recognizable face, smile, facial structure, eyes, short textured hair, beard and natural skin texture. Do not invent a different person or over-retouch him.

Art direction: the website uses almost-black charcoal #10110f, warm ivory #f4f3ed, acid lime #d7fb78, tall condensed bold typography resembling Barlow Condensed, minimal Manrope sans serif, small monospaced detail, thin rules and editorial serif accents. Make this feel like the same visual identity, distilled into a breathtaking restrained designer's calling card. Elegant and human. Fine analog photographic grain. No glossy AI look.

Composition: left 57% for an impeccably typeset identity composition; right 43% for a large close portrait with full head visible, naturally smiling, facing camera, shoulders dissolving into the dark backdrop. Keep face strongly recognizable and clearly visible at small preview size. Black and white portrait with silver highlights, dimensional soft side light. Very subtle vertical glass refraction near far right edge only, matching input 1. A restrained lime fine-line accent may sit behind the portrait near the edge; no clutter. Everything has generous 52px-equivalent safe margins within a 1200x630 card.

Exact text and hierarchy, NOTHING ELSE:
1. Top left tiny understated monogram "ej." with a lime dot, with small readable uppercase label "FULL-STACK SOFTWARE ENGINEER" beside it.
2. Left main identity in huge confident condensed type on TWO lines, dominant across the left half:
"ELVIN"
"JUMA."
Use warm ivory solid for ELVIN and warm ivory for JUMA with lime final period. Name must be instantly readable even in a tiny social thumbnail. Beautiful tightly controlled tracking, no distortion.
3. Below name, smaller elegant lime italic serif line on two short lines if needed:
"An engineer with"
"an artist’s eye."
4. A fine horizontal footer rule, then bottom left restrained monospaced "KENYA / WORLDWIDE", bottom right under portrait "elvin-juma-portfolio.vercel.app". Keep these comfortably readable.
Do not place headline over the face. Crisp real graphic design, absolutely accurate spelling, professionally balanced whitespace, no logo badges, no social icons, no buttons, no fabricated metrics, no extra words, no laptop, no floating cards, no thick border, no mockup frame. A single final edge-to-edge image.


## Verification

- Production `npm run build` completed successfully, including TypeScript and all static routes.
- ESLint passed for the two modified TypeScript files.
- Rendered HTML for `/`, `/about`, `/contact`, and `/projects` contains the same absolute OG and Twitter image URL, the correct 1200 × 630 OG dimensions, JPEG MIME type, and image alternative text.
- Every LinkedIn anchor in those four pages points to the updated profile.
- The final JPEG and updated one-page résumé were visually inspected. The résumé's displayed URL and PDF link annotation were checked after reopening the file.
