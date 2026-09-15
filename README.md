# Daneshwari Khanawali — Website (Sindagi)

- **Live:** https://shreekantha3.github.io/sindagi-daneshwari-khanawali/
- **Repo:** `shreekantha3/sindagi-daneshwari-khanawali` (branch `main` = source, `gh-pages` = deployed bundle where applicable)
- **Stack:** static Vite + Tailwind CSS, no backend. `base: '/sindagi-daneshwari-khanawali/'` for GitHub Pages project-site hosting.

## Owner update guide (no coding needed beyond these steps)
- **Phone / hours:** edit `index.html` — search for `tel:` (call links) and `Hours:`.
  If the phone is missing, the page shows a "find us on Maps" fallback by design — never invent a number.
- **Photos:** drop owner photos into `public/` and reference them from `index.html`, then rebuild.
- **Map:** the Visit section embeds Google Maps (`output=embed`, lazy-loaded). To repoint it, change the iframe `src` query.
- **Rebuild + publish:** `npm ci && npm run build`, commit, push `main`
  (branch-deployed sites: also refresh the `gh-pages` branch with `dist/` — see `scripts/deploy_site.sh`).

## QA notes
- Build must pass with 0 warnings; every address links to the Google Maps listing;
  JSON-LD `LocalBusiness` schema in `<head>`; title <= 60 chars.
