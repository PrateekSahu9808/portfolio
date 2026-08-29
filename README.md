# Prateek Sahu — Frontend Developer Portfolio

Personal portfolio site for job applications, recruiter screening, and sharing with hiring managers. Content is sourced from the resume in `public/PrateekSahu_Resume.pdf`.

## Stack

- React 19
- TypeScript
- Vite
- Hand-written CSS (no UI kit, no animation library, no form backend)

React Router is not used. The site is a single page with section anchors, which is a better fit for a resume-length portfolio.

## Local development

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

```bash
npm run build
npm run preview
```

`build` type-checks and emits a static `dist/` folder. `preview` serves that folder locally.

## Deploy

The build output is static files in `dist/`. Any static host works.

### Vercel

1. Push this project to GitHub.
2. Import the repo in [Vercel](https://vercel.com).
3. Framework preset: Vite. Build command: `npm run build`. Output: `dist`.
4. Deploy.

### Netlify

1. Push to GitHub and import in [Netlify](https://netlify.com), or drag the `dist` folder onto Netlify Drop after `npm run build`.
2. Build command: `npm run build`. Publish directory: `dist`.

### GitHub Pages

If the site is served from `https://<user>.github.io/<repo>/`, set the Vite base path first:

```ts
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  base: '/<repo>/',
})
```

Then build and publish `dist/` with GitHub Pages (Actions or the `gh-pages` branch).

After you have a live URL, add it as `og:url` in `index.html`.

## Updating content

Resume facts live in `src/data/content.ts`. Replace `public/PrateekSahu_Resume.pdf` when the PDF changes. UI components read from the data file and should not hard-code new employers, skills, or metrics.
