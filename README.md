# Md. Zobayer Amin: portfolio

Next.js 15 (App Router, JavaScript), Tailwind CSS 3, Framer Motion, Lucide.

## Run
    npm install
    npm run dev      # http://localhost:3000
    npm run build && npm start

If the build runs out of memory on a small machine (PowerShell):
    $env:NODE_OPTIONS="--max-old-space-size=4096"

## Environment (optional)
    NEXT_PUBLIC_SITE_URL=https://your-domain    # used for metadata, Open Graph, sitemap

## Where to edit things
- `content/site.js`: name, email, links, roles, tools
- `content/projects.js`: the four featured projects (links, stack, status)
- `content/caseStudies.js`: case-study text and screenshots for each project
- `content/design.js`: TaskTap sections and screens
- `content/experience.js`: education, work, research
- `public/images/`: portrait, project screenshots, TaskTap screens (WebP)

## Pages
/, /projects (search and filters), /projects/[slug] (4 case studies), /design (TaskTap gallery with lightbox), /about, /experience, /contact (mailto-based form, no server).

## Deploy (Vercel)
1. Push this folder to a GitHub repo.
2. Import it on vercel.com (framework: Next.js, no extra settings).
3. After you have a domain, set NEXT_PUBLIC_SITE_URL and redeploy.
