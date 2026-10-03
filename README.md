# Elvin Juma — portfolio

Next.js 16, React 19, TypeScript, Tailwind CSS, and Motion. A responsive portfolio with an editorial portrait hero, an optional WebGL light field, distinct project scenes, a filterable archive, project detail dialogs, and a contact form.

## Development

Install dependencies with `yarn install`, then run `yarn dev`. Open http://localhost:3000. If Turbopack stalls on a slow filesystem, use `yarn next dev --webpack`.

- `yarn lint` — ESLint
- `yarn tsc --noEmit` — TypeScript
- `yarn build` — production build
- `yarn start` — production server

All fonts are self-hosted. Their licenses are in `src/app/fonts`. Motion respects the device's reduced-motion setting; the hero has a pause control and stops rendering when offscreen or the tab is hidden.

## Content

- `src/data/site.ts` — identity, résumé, social links, experience
- `src/data/projects.ts` — project families, engineering details, categories, GitHub and live links
- `public/Elvin_Omondi_Juma_Resume.pdf` — current résumé, linked throughout the site
- `public/images/projects` — the 19 supplied project images and retained SVG placeholder assets
- `public/images` — project and portrait assets
- `src/components/Hero.module.css` — hero art direction
- `src/components/WorkShowcase.module.css` — project compositions

The homepage features Afyvia, JustInTime, and the offline Restaurant / Hotel Manager. The archive groups related versions, socket services, and deployments into 19 project families, with category filters, technology search, and a 2024–2026 engineering timeline. Project dialogs describe the problem, engineering approach, build highlights, and related repositories.

### Replace project images and links

All 19 project families use the supplied local PNG, JPG, or WebP images. The SVG placeholder covers remain available as fallback assets. To replace an image, add the new file to `public/images/projects` and update its record in `src/data/projects.ts`:

```ts
image: "/images/projects/afyvia.webp",
imageWidth: 1366,
imageHeight: 768,
imageAlt: "Afyvia pharmacy network homepage with medicine search and patient care imagery",
imagePlaceholder: false,
imageHasBrowserChrome: false,
github: "https://github.com/Elvinoacer/pharmacy_template_tier2",
liveUrl: "https://afyvia.gtss.software",
```

Set `imageWidth` and `imageHeight` to the actual source dimensions so the frame follows the image's aspect ratio. Images retain their full composition; no fixed 16:9 crop is required. Update `imageAlt` to describe the replacement and keep `imagePlaceholder` set to `false` to omit the pending-preview caption.

Optional `imageCaption` explains a preview's relationship to a project family. The SME Digitalization Suite uses a representative commerce interface; the Healthcare Digitalization Suite shows a related pharmacy workflow. Update or remove these captions when replacing the images. Portrait images are centered in detail previews, limited to 65% of the viewport height and capped at 600px.

Set `imageHasBrowserChrome` to `true` when a screenshot already includes a browser toolbar; this skips the extra decorative browser bar. Omit it or use `false` for images without browser chrome. Change `featured` to choose the homepage projects. Optional `featuredTitle` and `featuredSummary` provide homepage copy while the archive and dialogs use the main project title and description.

The featured compositions take their colors from the supplied images: forest and sage for Afyvia, teal and cyan for JustInTime, and indigo and gold for Restaurant / Hotel Manager. If a replacement changes the visual direction, adjust the matching scene in `src/components/WorkShowcase.module.css`.

GitHub links use absolute `https://github.com/Elvinoacer/...` URLs so browsers open the repository correctly. `repositories` contains related repository names under that account. `liveUrl` is optional: add a deployment URL when available, or omit it to show GitHub only. Afyvia and JustInTime use deployment URLs embedded in the supplied résumé. External project availability is separate from the portfolio's local checks.

## Contact email

Create `.env.local` with the SMTP credentials supplied by your mail provider:

```dotenv
EMAIL_SERVER_HOST=smtp.example.com
EMAIL_SERVER_PORT=465
EMAIL_SERVER_USER=portfolio@example.com
EMAIL_SERVER_PASSWORD=your-app-password
EMAIL_FROM=portfolio@example.com
EMAIL_TO=you@example.com
```

Port 465 uses TLS immediately; other configured ports use the transport's normal STARTTLS negotiation. `EMAIL_FROM` defaults to `EMAIL_SERVER_USER` if omitted. Visitor email addresses are used as `replyTo`, never as the SMTP sender. Server-side validation and HTML escaping run before delivery. Without valid SMTP configuration, the form returns an error and offers a direct email link.

Testing validation does not require sending a real email. Verify actual delivery separately with your configured provider before relying on the form in production.
