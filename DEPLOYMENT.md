# GitHub Pages Deployment Guide for Balasree Arts Academy

## Step-by-Step Deployment Instructions

### 1. Initialize Git Repository (if not already done)

```bash
cd "balasree-arts-academy"
git init
git add .
git commit -m "Initial commit - Balasree Arts Academy website"
```

### 2. Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click **"New"** to create a new repository
3. Name it: `balasree-arts-academy`
4. **Do NOT** initialize with README, .gitignore, or license (we already have these)
5. Click **"Create repository"**

### 3. Connect Local Repository to GitHub

Copy the commands from GitHub (they look like this):

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/balasree-arts-academy.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### 4. Configure next.config.js for GitHub Pages

Edit `next.config.js` to use the correct base path:

**Option A: If deploying to `username.github.io/balasree-arts-academy`**

```javascript
const nextConfig = {
  output: 'export',
  basePath: '/balasree-arts-academy',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
```

**Option B: If deploying to `username.github.io` (main domain)**

```javascript
const nextConfig = {
  output: 'export',
  basePath: '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
```

### 5. Build the Project

```bash
npm run build
```

This creates an `out/` folder with all static files ready for deployment.

### 6. Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select `main` (or `gh-pages` if using automated deployment)
   - **Folder**: Select `/ (root)`
4. Click **Save**

### 7. Deploy to GitHub Pages

**Manual Deployment (One-time):**

```bash
# Build the project
npm run build

# Create .nojekyll file to tell GitHub to serve files as-is
touch out/.nojekyll

# Add all files
git add out/ next.config.js

# Commit
git commit -m "Build and deploy to GitHub Pages"

# Push to GitHub
git push origin main
```

**Automated Deployment (Recommended):**

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build
        run: npm run build
      
      - name: Create .nojekyll
        run: touch out/.nojekyll
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
          cname: balasreearts.com  # Optional: if using custom domain
```

### 8. Verify Deployment

1. Go to your repository **Settings** → **Pages**
2. Look for the deployment URL (e.g., `https://username.github.io/balasree-arts-academy`)
3. Click the link to visit your live website
4. It may take 2-5 minutes for the site to become live

## Troubleshooting

### Site not showing up?
- Wait 2-5 minutes for GitHub Pages to process
- Clear browser cache (Ctrl+Shift+Del or Cmd+Shift+Del)
- Check Settings → Pages to confirm deployment status

### Images not loading?
- Ensure `basePath` in `next.config.js` matches your repository URL structure
- Verify images are in the `public/` folder
- Check that image paths use `/` (e.g., `/images/gallery/painting.jpg`)

### Navigation links broken?
- Verify `basePath` is correctly set in `next.config.js`
- Update `Header.tsx` logo path if needed

### 404 errors on pages?
- Ensure `trailingSlash: true` is set in `next.config.js`
- Rebuild and redeploy: `npm run build && git push`

## Custom Domain (Optional)

If you want to use a custom domain like `balasreearts.com`:

1. Update your domain registrar DNS settings
2. In GitHub repository **Settings** → **Pages** → **Custom domain**
3. Enter your domain and save
4. GitHub will create a `CNAME` file automatically

## Update Your Website

To make changes and redeploy:

```bash
# Make your changes
# Then:
git add .
git commit -m "Update website"
git push origin main
```

If using automated deployment (workflow), it will automatically build and deploy.

## Quick Reference Commands

```bash
# Development
npm run dev

# Build locally
npm run build

# Preview build
npm start

# Deploy (if not using GitHub Actions)
npm run build && git add out/ && git commit -m "Deploy" && git push
```

---

**Your website will be live at:**
- `https://username.github.io/balasree-arts-academy` (if using repository name)
- `https://balasreearts.com` (if using custom domain)

For more help, visit: https://docs.github.com/en/pages
