# Portrait treatment

Source: `public/images/potrait5.webp` (the owner's existing photograph).
Final asset: `public/images/elvin-editorial.webp` (1536 × 1024, compressed WebP).
Generated with the built-in image generation tool, then converted to WebP for delivery. Original generated PNG retained in the local Codex generated-images folder. The hero combines this asset with CSS masking, typography, scroll parallax, and a GPU light field.

## Project images and compositions

All 19 project families use the owner's supplied raster images in `public/images/projects` (PNG, JPG, and WebP). The local SVG covers remain available as fallback placeholder assets. Project imagery comes from the supplied files rather than generated interfaces.

Featured scene backgrounds and frames follow the image palettes:

- Afyvia: forest and sage, echoing the pharmacy homepage and care imagery.
- JustInTime: teal and cyan, echoing the services homepage.
- Restaurant / Hotel Manager: indigo and gold, echoing the operations dashboard.

Each image's full composition is preserved. `imageWidth` and `imageHeight` in `src/data/projects.ts` record source dimensions and determine the displayed aspect ratio. `imageHasBrowserChrome` suppresses the decorative browser bar when the source already contains one. Optional `featuredTitle` and `featuredSummary` give the homepage its own copy.

Optional `imageCaption` identifies family-level previews: the SME Digitalization Suite uses a representative commerce interface, and the Healthcare Digitalization Suite shows a related pharmacy workflow. Portrait detail previews stay centered at `65dvh`, capped at 600px, with the full image visible.

When replacing a project image, update its file path, source dimensions, and descriptive `imageAlt`, and set `imagePlaceholder` to `false`. Revisit the matching scene palette in `src/components/WorkShowcase.module.css` if the new image changes the visual direction.

## Image-generation prompt

Use case: identity-preserve. Asset type: background image for an exceptionally art-directed creative software engineer portfolio, not a standalone profile card. Edit target: supplied photograph of Elvin. Preserve this person's EXACT recognizable face, natural expression, hair, beard, skin features, and identity. Create a sophisticated black-and-white fine-art photographic composition in landscape 3:2. The man is positioned in the RIGHT third, from shoulders up, head fully visible from x=60% to 85%, facing camera, calm natural confident expression. Change the noisy futuristic room background to nearly black charcoal #10110f seamless negative space. His gray crewneck and shoulders dissolve subtly into black at the bottom. Raking side light, deep elegant shadows, photographic silver highlights on the face. The LEFT 55% must be essentially dark empty negative space for large HTML typography. Very restrained analog grain and a few subtle fine vertical glass refraction strips at the far right edge; no sci-fi room, no circuitry, no logos, no written text, no objects or frames, no borders, no colorful neon. This is a cinematic, high-contrast editorial fashion-studio photograph and should feel authentic and beautifully photographic rather than AI fantasy. Black background to all image edges. Do not change his facial identity, don't add glasses. Output 1536x1024.
