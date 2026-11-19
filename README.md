# Joe Rossano

Personal site for Joe Rossano, Lead Software Engineer (native iOS, Swift and SwiftUI) in the Atlanta area. It replaces the Weebly site at [joe-rossano.weebly.com](https://joe-rossano.weebly.com/).

Copy comes from that site's Home, About, Apps, and Blog pages, plus Joe's resume. FairDose is an iOS GLP-1 injection tracker currently in development ([fairdose.app](https://fairdose.app)). The resume's phone number and email are not published. Gaps that are still open are listed below.

The layout follows the long-scroll shape of a contemporary iOS portfolio: headline, about grid with a draggable globe, tech stack, current R&D, a scoped assistant, testimonials, experience, how AI is used, blog, and a contact close. The palette is Joe's: Midnight `#0A0F1F`, Deep Navy `#0E1A4F`, Royal Blue `#1F4FE0`, Electric Sky `#00A8FF`, Cloud `#F4F7FC`, Slate `#94A3B8` (Tailwind token `ash`), and Amber `#FFB547`.

Royal Blue on Midnight is 2.95:1, under WCAG AA for text, so text links are Electric Sky (7.31:1 on Midnight, 6.29:1 on Deep Navy). Primary buttons are Royal Blue with Cloud labels (6.01:1). Slate on both dark surfaces clears AA.

## Run locally

```bash
npm install
npm run brand
npm run dev
```

Open [http://127.0.0.1:3000](http://127.0.0.1:3000). This environment runs the dev server on port **3847**:

```bash
npx next dev --turbopack -p 3847 -H 0.0.0.0
```

## Test and build

```bash
npm test
npm run lint
npm run build
```

`npm run build` writes a static export to `out/`. No server, database, or API key is required.

```bash
npx serve out
```

## Deploy on GitHub Pages

The site is a static export for the user site at the root of [https://jrossano.github.io](https://jrossano.github.io). There is no `basePath`. `trailingSlash` is on, so routes are `/about/index.html` and assets stay root-relative (`/brand/...`, `/apps/...`). `public/.nojekyll` is copied into `out/` so GitHub Pages serves the Next files as-is.

`.github/workflows/deploy.yml` runs on pushes to `main`:

1. `npm ci && npm run build`
2. `actions/upload-pages-artifact` with `path: out`
3. `actions/deploy-pages`

In the GitHub repo, set Settings → Pages → Source to GitHub Actions. The workflow needs the `pages` and `id-token` write permissions already declared in the file.

## Deploy on Vercel

Vercel can serve the same export. Framework preset: Next.js. Leave environment variables empty. Build command: `npm run build`.

To point Ask Joe at a model later, set `NEXT_PUBLIC_CHAT_ENDPOINT` and rebuild. See below.

## Ask Joe

The assistant is scoped to a local knowledge file, `content/knowledge.ts`, built only from `content/site.ts`.

- Quick-ask chips pass an entry id and return that prewritten answer.
- Typed questions are matched by phrase and keyword overlap (`lib/chat.ts`). A weak match returns a refusal instead of a guess.
- Default mode does not call the network.

`lib/chat.ts` exports `PortfolioAssistant` with two implementations:

- `LocalKnowledgeAssistant` — the default.
- `HttpLlmAssistant` — used when `NEXT_PUBLIC_CHAT_ENDPOINT` is set.

The endpoint receives:

```json
{ "messages": [{ "role": "user", "content": "..." }] }
```

and must respond:

```json
{ "answer": "..." }
```

The browser calls it directly, so the endpoint needs CORS for the site origin. Next inlines `NEXT_PUBLIC_*` at build time, including for the static export, so change the variable and rebuild.

## Brand

`npm run brand` (`scripts/prepare-brand.py`) copies Joe's files into `public/brand/` and resizes the preferred mark.

- `public/brand/jr-logo.jpg` is the original JPEG, kept unchanged.
- `public/brand/jr-logo-app-icon-transparent.png` is the 1024px app icon on a transparent background. The nav uses this file.
- `app/icon.png`, `app/apple-icon.png`, and the 32px and 16px favicons are Lanczos resizes of that PNG.

`public/brand/SOURCE.txt` records which files were used.

## Still open

1. **Blog URLs.** Posts still link to the live Weebly permalinks. Replace `url` in `content/site.ts` if the essays move.
2. **How you use AI.** The first-person line is only "I use GitHub Copilot in VS Code and Claude Opus in Xcode." Rewrite it when you want a fuller note. The competency cards stay as published.
3. **Apps with no resume client.** Dashboard, iRate for iMessage, Flappy Creeper, and Agile Roadmap are on the Weebly page only. Portfolio and IRIS are on the resume and were not in that gallery, so they have no screenshots.
4. **FairDose** is in development at [fairdose.app](https://fairdose.app). There is no App Store link because it is not released.

Contact is LinkedIn only. The resume phone number and email are not on the site.

## Pages

- `/` Home
- `/about/` Every resume role, competencies, the four additional published recommendations, certifications and education
- `/apps/` The Weebly case studies, plus Portfolio and IRIS from the resume
- `/blog/` Six posts

Featured recommendations on the home page are Hogan Lee (JPMorganChase), Patrick Lind (Eli Lilly), and James Schorey (Control Bionics). Barnabas Helmy, Dax Hafer, Rob Cadick, and Brian Van Pelt remain on About because they are on the current site.
