# Arjun Sharma: Portfolio

Next.js 15 (App Router), TypeScript, Tailwind CSS, shadcn/ui-style components, Framer Motion (hero entrance only), React Three Fiber (one lazy-loaded hero shape).

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Edit content

All content lives in `src/data/` (site, socials, projects, skills, experience, education, resume, uses, blog). Components never contain personal content.

## Add your files (paths are fixed; nothing breaks while they're missing)

| File | Where |
|---|---|
| Profile photo | `public/images/profile.jpg` |
| Project thumbnails | `public/images/projects/{society-management,google-docs,crypto-dashboard,ai-career-auditor}.png` |
| Open Graph image (1200x630) | `public/images/og-image.png` |
| Resume PDF | `public/resume/arjun-sharma-resume.pdf` |
| Favicon (optional) | replace `src/app/icon.svg` or add `public/favicon.ico` |

Until a file exists, the site shows a neutral empty frame, hides the resume View/Download buttons, and omits the OG image tag.

## Still to confirm

- `email` in `src/data/site.ts` (currently the example.com address you sent)
- Operating system on the Uses page (`src/data/uses.ts`)
- Real certificate URLs (add `link` in `src/data/education.ts`)
- Blog article bodies (`src/data/blog.ts`)
