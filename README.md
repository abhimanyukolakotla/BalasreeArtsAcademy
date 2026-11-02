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

### 1. **Create a GitHub Repository**

If you haven't already, create a new repository named `balasree-arts-academy` on GitHub.

### 2. **Configure Repository Settings**

- Go to repository **Settings** → **Pages**
- Select **Deploy from a branch**
- Select **gh-pages** branch and **/ (root)** folder
- Save

### 3. **Update next.config.js** (if using a subdirectory)

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

### 4. **Deploy**

```bash
# Install gh-pages package (optional)
npm install --save-dev gh-pages

# Build and deploy
npm run build

# Commit and push to GitHub
git add -A
git commit -m "Deploy to GitHub Pages"
git push origin main
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
- Ensure `.nojekyll` file exists in the output directory
- Verify `gh-pages` branch exists

## Support & Maintenance

- Keep dependencies updated: `npm update`
- Monitor build logs for warnings
- Test locally before pushing to production
- Backup content regularly

## License

All content and artwork are the property of Balasree Arts Academy.

## Contact

For inquiries about this website or the academy, visit the Contact page or email us at info@balasreearts.com.

---

**Happy Showcasing! 🎨**
