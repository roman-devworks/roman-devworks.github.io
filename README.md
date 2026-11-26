# roman-devworks.github.io

The documentation site for all of the Roman Devworks applications.

## Deploy to GitHub Pages

The site is built with Astro and deployed by [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

1. In the repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**. Do not select **Deploy from a branch**: that makes GitHub Pages run Jekyll against the Astro source files.
2. Push to `main` or run **Deploy to GitHub Pages** manually from the Actions tab. The workflow installs dependencies, runs `npm run check`, builds the site, and deploys `dist`.
3. For the custom domain, configure the `docs` DNS record as a CNAME to `roman-devworks.github.io`, set `docs.roman-devworks.com` as the custom domain under **Settings → Pages**, and enable HTTPS when available. `public/CNAME` is copied into the published site.

If a Pages build log mentions Jekyll or invalid YAML front matter in an `.astro` file, verify that the Pages source is set to **GitHub Actions**.
