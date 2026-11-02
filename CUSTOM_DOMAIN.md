# Custom Domain Setup for GitHub Pages

## Overview

You can use a custom domain (like `balasreearts.com`) instead of `username.github.io/balasree-arts-academy`.

## Prerequisites

- A custom domain (purchased from a domain registrar like GoDaddy, Namecheap, etc.)
- Your GitHub repository already deployed to GitHub Pages
- Access to your domain registrar's DNS settings

## Option 1: Using GitHub's Automatic DNS Configuration (Recommended)

### Step 1: Add Domain to GitHub

1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Under "Custom domain", enter your domain (e.g., `balasreearts.com`)
4. Click **Save**

GitHub will create a `CNAME` file automatically in your repository.

### Step 2: Configure DNS at Your Domain Registrar

You need to point your domain to GitHub's servers. The DNS records depend on your domain setup:

**For a root domain (e.g., `balasreearts.com`):**

Add these **A records** to your DNS settings:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**For a subdomain (e.g., `www.balasreearts.com`):**

Add this **CNAME record**:
```
CNAME  www  username.github.io
```

Replace `username` with your actual GitHub username.

### Step 3: Verify DNS Setup

```bash
# Check if DNS is configured correctly
nslookup balasreearts.com
```

Or use online tools like:
- https://dns.google/
- https://mxtoolbox.com/

### Step 4: Wait for DNS Propagation

DNS changes can take 24-48 hours to propagate worldwide. You can check status at:
- https://www.whatsmydns.net/

### Step 5: Enable HTTPS

Once DNS is configured:

1. Go back to **Settings** → **Pages**
2. Check "Enforce HTTPS" (wait a few minutes if it's not available)
3. Your site will now be secured with SSL/TLS

## Option 2: Using CNAME File (Manual)

If you prefer to set it up manually:

### Step 1: Create CNAME File

Create a file named `CNAME` in your `public/` folder (it will be copied to the root during build):

```
balasreearts.com
```

Or create it in the root of your repository after building.

### Step 2: Update next.config.js

Remove the `basePath` since you're using a root domain:

```javascript
const nextConfig = {
  output: 'export',
  basePath: '',  // Empty for root domain
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
```

### Step 3: Push to GitHub

```bash
npm run build
git add .
git commit -m "Add custom domain configuration"
git push origin main
```

## Common Domain Registrar Instructions

### GoDaddy

1. Log in to GoDaddy
2. Go to **My Products** → Select your domain
3. Click **DNS**
4. Add **A records** pointing to GitHub's IPs (see above)
5. Save changes

### Namecheap

1. Log in to Namecheap
2. Click **Manage** next to your domain
3. Go to **Advanced DNS**
4. Add **A records** with GitHub's IP addresses
5. Save changes

### Google Domains (now Squarespace Domains)

1. Go to your domain settings
2. Click **DNS**
3. Add **A records** pointing to GitHub's IPs
4. Save changes

### Cloudflare

1. Add your domain to Cloudflare
2. Update your registrar's nameservers to Cloudflare's
3. In Cloudflare dashboard, add **A records** pointing to GitHub's IPs
4. Enable HTTPS proxying if desired

## Verify Custom Domain is Working

Once DNS propagates (can take 24-48 hours):

1. Visit your custom domain: `https://balasreearts.com`
2. You should see your Balasree Arts Academy website
3. Check browser URL bar for the green lock (HTTPS)

## Troubleshooting

### Domain still shows "Domain not found"

- **Solution**: DNS changes take 24-48 hours. Use https://whatsmydns.net/ to check propagation
- **Alternative**: Try accessing from a different network or clear browser cache

### Site shows GitHub 404

- **Solution**: Check that CNAME file exists in your repository root
- **Alternative**: Go to **Settings** → **Pages** and re-enter your domain

### HTTPS certificate not appearing

- **Solution**: 
  1. Remove and re-add the domain in **Settings** → **Pages**
  2. Wait 15-20 minutes
  3. Check "Enforce HTTPS" checkbox

### Subdomain not working (www.balasreearts.com)

- **Solution**: Add CNAME record: `www` → `username.github.io`
- Make sure you're using the CNAME record, not A records, for subdomains

## Update next.config.js for Custom Domain

Since you're using a custom domain at the root, update your config:

```javascript
const nextConfig = {
  output: 'export',
  basePath: '',  // Empty string for custom root domain
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
```

Then rebuild and deploy:

```bash
npm run build
git add .
git commit -m "Update for custom domain"
git push origin main
```

## SSL/TLS Certificate

GitHub Pages automatically provides free SSL/TLS certificates through Let's Encrypt. Once your domain is properly configured:

1. Go to **Settings** → **Pages**
2. You'll see "Your site is published at https://balasreearts.com"
3. Enable "Enforce HTTPS"
4. Certificate is now active

## Using Both URLs

Your old GitHub Pages URL and custom domain can coexist:
- `https://username.github.io/balasree-arts-academy` - Still works
- `https://balasreearts.com` - New primary URL

To redirect the old URL to the custom domain, GitHub handles this automatically once you set up the custom domain.

## Additional Resources

- GitHub Pages Documentation: https://docs.github.com/en/pages
- DNS Checker: https://www.whatsmydns.net/
- DNS Propagation Checker: https://dnschecker.org/
- Cloudflare (free DNS service): https://www.cloudflare.com/

---

**Summary:**
1. Purchase domain from registrar
2. Add domain in GitHub **Settings** → **Pages**
3. Update DNS records at registrar (point to GitHub IPs)
4. Wait 24-48 hours for propagation
5. Enable HTTPS
6. Update `next.config.js` with empty `basePath`
7. Rebuild and deploy

Your custom domain will be live! 🚀
