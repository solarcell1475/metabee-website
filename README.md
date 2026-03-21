# MetaBee Technology Website

Official website for MetaBee Technology Limited — www.metabee.com.hk

## Overview

MetaBee is a Hong Kong-based technology company specializing in low-altitude economy infrastructure and autonomous drone control systems. This website showcases our products (NavKit-S, Sky-Guard Console, Hive-Link/LAWN) and company information.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS
- **Deployment:** Static export compatible

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

For Apache hosting, clean routes (e.g. `/about-us`, `/products/navkit-s`) are handled by `public/.htaccess`, which is exported to `out/.htaccess`.

## Project Structure

- `app/` — Pages (Home, About Us, Projects, Products, Contact Us)
- `components/` — Header, Footer
- `public/assets/images/` — Logo, hero, products, figures (see IMAGE_MANIFEST.md)

## Color Scheme

- Background: `#0a0a0a`
- Accent: `#f0b429` (amber, from MetaBee logo)
- Text: `#e5e5e5` / `#737373`
