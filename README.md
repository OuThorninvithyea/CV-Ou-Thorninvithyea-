# Ou Thorninvithyea — Portfolio

Personal software-engineering portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Local development

Use Node.js 22 (see `.nvmrc` and `.node-version`).

```bash
nvm use
npm ci
npm run dev
```

The local site is available at `http://localhost:5173`.

## Quality checks

```bash
npm test
npm run build
```

GitHub Actions runs both checks for pushes to `main` and for pull requests.

## Deployment

The production site is deployed on Vercel at [cv-ou-thorninvithyea.vercel.app](https://cv-ou-thorninvithyea.vercel.app). Vercel builds the Vite application from `main` and serves the generated `dist/` directory.

## Content

- Portfolio content lives in `src/data/`.
- Static files, the downloadable CV, and optimized project previews live in `public/assets/`.
- Email delivery uses EmailJS configuration from `src/config/emailjs.js`.
