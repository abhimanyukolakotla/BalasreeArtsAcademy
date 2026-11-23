# Balasree Arts Academy - Portfolio Website

A modern, responsive Next.js website showcasing the paintings and work of Balasree Arts Academy, designed to be hosted on GitHub Pages.

## Features

- **Gallery**: Display and filter paintings by category
- **About**: Learn about the academy, mission, team, and values
- **Contact**: Contact form with FAQ section
- **Home**: Hero section with call-to-action
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **GitHub Pages Ready**: Configured for static export and GitHub Pages deployment

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Hosting**: GitHub Pages

## Installation

1. **Clone the repository** (or create a new repo):
   ```bash
   git clone <repository-url>
   cd balasree-arts-academy
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to see the website locally.

## Project Structure

```
balasree-arts-academy/
├── public/
│   └── images/
│       └── gallery/          # Add your painting images here
├── src/
│   ├── components/
│   │   ├── Header.tsx        # Navigation header
│   │   ├── Footer.tsx        # Footer section
│   │   ├── GalleryCard.tsx   # Individual painting card
│   │   └── ContactForm.tsx   # Contact form
│   ├── pages/
│   │   ├── _app.tsx          # App wrapper
│   │   ├── index.tsx         # Home page
│   │   ├── gallery.tsx       # Gallery page
│   │   ├── about.tsx         # About page
│   │   └── contact.tsx       # Contact page
│   ├── styles/
│   │   └── globals.css       # Global styles
│   └── types/
│       └── index.ts          # TypeScript types
├── package.json
├── next.config.js
├── tsconfig.json
├── tailwind.config.js
└── postcss.config.js
```

## Adding Your Content

### 1. **Update Gallery Images**

Place your painting images in `public/images/gallery/` and update the sample paintings in `src/pages/gallery.tsx`:

```typescript
const samplePaintings: Painting[] = [
  {
    id: '1',
    title: 'Your Painting Title',
    artist: 'Artist Name',
    description: 'Painting description',
    imageUrl: '/images/gallery/your-image.jpg', // Use local images
    category: 'Religious',
    year: 2024,
  },
  // ... more paintings
];
```

### 2. **Update Contact Information**

Edit `src/pages/contact.tsx` with your actual contact details, address, and business hours.

### 3. **Update Team Information**

Edit `src/pages/about.tsx` with your team members' information.

### 4. **Add Logo**

Place your logo image in `public/` and update the Header component in `src/components/Header.tsx` to use it instead of the placeholder "B".

## Deployment to GitHub Pages

The GitHub Actions workflow in `.github/workflows/pages.yml` builds the static site
and deploys it only when manually requested. Pushing to `main` alone does not
deploy. In repository **Settings → Pages**, set the source to **GitHub Actions**.

### Deploying with Copilot

Send `deploy to github` as the entire prompt to run the repository hook. The
command is case-insensitive and ignores surrounding whitespace. It runs when
the prompt is submitted, not after the agent's response. The hook stages all
non-ignored changes, commits them if needed, and pushes the current branch's HEAD
to `origin/main`. Other prompts do not trigger deployment.
This includes changes made outside Copilot and existing commits on the branch.
After pushing, the hook starts the Pages workflow using GitHub CLI; deployment
completes only if that workflow succeeds. The hook runs in any trusted repository
using it, including Copilot cloud sessions, and requires Node.js, Git credentials,
permission to push to `main`, an authenticated `gh` with permission to run
workflows, and Bash (including on Windows). Restart Copilot after installing the
hook.

**Review files before using this automation:** all non-ignored files are committed
and pushed to the public repository, including untracked files. Environment files
are ignored, but other secrets may not be; already tracked files are not protected
by `.gitignore`. The hook never force-pushes: if `main` has advanced or diverged,
reconcile your branch and retry. A failed push leaves the commit locally for a
later retry. If starting the workflow fails, the push may already have succeeded;
retry the command after resolving the error. Branch protection, authentication,
or network errors can also prevent deployment; check the hook error and GitHub
Actions logs.

### Hosting under a subdirectory

If your site will be at `username.github.io/balasree-arts-academy`:

```javascript
const nextConfig = {
  output: 'export',
  basePath: '/balasree-arts-academy',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};
```

For `username.github.io`, remove the `basePath`.

### Manual deployment

```bash
npm run build
git add -A
git commit -m "Deploy to GitHub Pages"
git push origin main
gh workflow run pages.yml --ref main
```

The site will be available at:
- `https://username.github.io/balasree-arts-academy` (with subdirectory)
- `https://username.github.io` (for main domain)

## Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  gold: '#D4AF37',
  'dark-brown': '#3E2723',
}
```

### Fonts

Modify `src/styles/globals.css` to change typography.

### Layout

Adjust responsive breakpoints and spacing in `tailwind.config.js`.

## Contact Form Setup

The contact form currently logs submissions to the console. For production, integrate with:

- **Email Service**: EmailJS, Formspree, or Nodemailer
- **Backend**: Create an API route in `src/pages/api/contact.ts`
- **CMS**: Integrate with Strapi, Sanity, or similar

## SEO Optimization

- Update meta tags in each page's `<Head>` component
- Add your domain to the sitemap (create `public/sitemap.xml`)
- Submit to Google Search Console

## Performance Tips

- Optimize and compress images before uploading
- Use modern formats (WebP, AVIF) for images
- Implement lazy loading for gallery images
- Use Next.js Image component for automatic optimization

## Troubleshooting

**Images not showing in production?**
- Check that images are in the `public/` directory
- Verify image paths match the `basePath` configuration

**Styling issues?**
- Rebuild with `npm run build`
- Clear browser cache
- Ensure Tailwind config is correct

**Deployment failures?**
- Check GitHub Actions logs in repository
- Verify Pages uses GitHub Actions as its source and that you can push to `main`

## Support & Maintenance

- Keep dependencies updated: `npm update`
- Monitor build logs for warnings
- Test locally before pushing to production
- Backup content regularly

## License

All content and artwork are the property of Balasree Arts Academy.

## Contact

For inquiries about this website or the academy, visit the Contact page or email us at balasreek@gmail.com.

---

**Happy Showcasing! 🎨**
