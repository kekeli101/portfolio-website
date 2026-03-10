# Deploying Your Portfolio to Vercel

This guide will help you deploy your Owusu Prince portfolio website to Vercel in just a few minutes.

## Prerequisites

Before you start, make sure you have:
- A GitHub account (you already have one: `kekeli101`)
- A Vercel account (free tier is perfect for this)
- Your repository pushed to GitHub (already done ✓)

## Step 1: Create a Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Click **Sign Up**
3. Choose **Continue with GitHub** to sign up using your GitHub account
4. Authorize Vercel to access your GitHub repositories
5. Complete the onboarding process

## Step 2: Import Your Repository

1. Once logged into Vercel, click **Add New...** → **Project**
2. Click **Import Git Repository**
3. Find and select `kekeli101/portfolio-website` from your GitHub repositories
4. Click **Import**

## Step 3: Configure Project Settings

Vercel should auto-detect your project as a React + Vite application. Here's what to verify:

### Framework Preset
- **Framework:** Vite (should be auto-selected)

### Build Settings
- **Build Command:** `pnpm build`
- **Output Directory:** `dist`
- **Install Command:** `pnpm install`

These settings are usually auto-detected correctly. If not, set them manually.

### Environment Variables
Your project doesn't require any environment variables for basic deployment. If you add features later that need secrets, you can add them here.

## Step 4: Deploy

1. Click **Deploy**
2. Vercel will build and deploy your site
3. Wait for the build to complete (usually 1-2 minutes)
4. You'll see a success message with your live URL

## Step 5: Access Your Live Site

Once deployment is complete, you'll get a URL like:
- `https://portfolio-website-[random].vercel.app`

You can also:
- **Set a custom domain** in Vercel's dashboard under Project Settings → Domains
- **View deployment logs** if anything goes wrong
- **Rollback to previous deployments** if needed

## Automatic Deployments

Great news! Once you've connected your GitHub repository to Vercel:
- Every push to the `main` branch automatically triggers a new deployment
- You can see deployment history in the Vercel dashboard
- Preview deployments are created for pull requests

## Making Updates

To update your portfolio after deployment:

1. Make changes locally or in your code editor
2. Commit and push to GitHub:
   ```bash
   git add -A
   git commit -m "Update portfolio"
   git push origin main
   ```
3. Vercel automatically deploys the changes
4. Your live site updates within 1-2 minutes

## Troubleshooting

### Build Fails
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Try running `pnpm build` locally to test

### Site Shows Blank Page
- Check browser console for errors (F12 → Console tab)
- Verify all image URLs are using HTTPS CDN links
- Clear browser cache and hard refresh (Ctrl+Shift+R)

### Custom Domain Issues
- Update your domain's DNS records as shown in Vercel
- DNS changes can take 24-48 hours to propagate
- Use Vercel's DNS provider for faster setup

## Next Steps

After deployment:
1. Test all links and navigation on the live site
2. Share your portfolio URL with recruiters and collaborators
3. Update your LinkedIn, GitHub, and Twitter bios with the link
4. Continue adding projects and content as you build

## Alternative: Deploy from CLI

If you prefer using the command line:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from your project directory
cd portfolio-website
vercel

# Follow the prompts to connect your GitHub account
```

## Support

If you encounter issues:
- Check [Vercel Documentation](https://vercel.com/docs)
- Review [Vite Deployment Guide](https://vitejs.dev/guide/ssr.html)
- Contact Vercel support through your dashboard

---

**That's it!** Your portfolio is now live on Vercel and will automatically update whenever you push changes to GitHub. 🚀
