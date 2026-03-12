# Deploying Your Portfolio to Render

This guide will help you deploy your Owusu Prince portfolio website to Render in just a few minutes.

## Prerequisites

Before you start, make sure you have:
- A GitHub account (you already have one: `kekeli101`)
- A Render account (free tier is perfect for this)
- Your repository pushed to GitHub (already done ✓)

## Step 1: Create a Render Account

1. Go to [render.com](https://render.com)
2. Click **Sign Up**
3. Choose **Continue with GitHub** to sign up using your GitHub account
4. Authorize Render to access your GitHub repositories
5. Complete the onboarding process

## Step 2: Create a New Static Site

1. Once logged into Render, click **New +** in the top right
2. Select **Static Site**
3. Click **Connect** next to your `portfolio-website` repository
4. If you don't see it, click **Configure account** to grant Render access to more repos

## Step 3: Configure Deployment Settings

Fill in the following settings:

### Basic Settings
- **Name:** `portfolio-website` (or any name you prefer)
- **Branch:** `main`

### Build Settings
- **Build Command:** `pnpm install && pnpm build`
- **Publish Directory:** `dist/public`

### Environment
- No environment variables needed for basic deployment

## Step 4: Deploy

1. Click **Create Static Site**
2. Render will start building your site (watch the logs in real-time)
3. Build typically takes 2-3 minutes
4. Once complete, you'll see a success message

## Step 5: Access Your Live Site

Once deployment is complete, you'll get a URL like:
- `https://portfolio-website-xxxxx.onrender.com`

You can also:
- **Set a custom domain** in Render's dashboard under Settings → Custom Domain
- **View deployment logs** if anything goes wrong
- **Redeploy** manually if needed

## Automatic Deployments

Great news! Once you've connected your GitHub repository to Render:
- Every push to the `main` branch automatically triggers a new deployment
- You can see deployment history in the Render dashboard
- Preview deployments are created for pull requests (with Pro plan)

## Making Updates

To update your portfolio after deployment:

1. Make changes locally or in your code editor
2. Commit and push to GitHub:
   ```bash
   git add -A
   git commit -m "Update portfolio"
   git push origin main
   ```
3. Render automatically detects the push and redeploys
4. Your live site updates within 2-3 minutes

## Troubleshooting

### Build Fails
- Check the build logs in Render dashboard
- Ensure the **Publish Directory** is set to `dist/public`
- Verify all dependencies are in `package.json`
- Try running `pnpm build` locally to test

### Site Shows Blank Page
- Check browser console for errors (F12 → Console tab)
- Verify all image URLs are using HTTPS CDN links
- Clear browser cache and hard refresh (Ctrl+Shift+R)
- Check that `vercel.json` rewrites are not interfering (Render doesn't use this file)

### Custom Domain Issues
- Update your domain's DNS records as shown in Render
- DNS changes can take 24-48 hours to propagate
- Use Render's DNS provider for faster setup

## Render vs Vercel

| Feature | Render | Vercel |
|---------|--------|--------|
| **Free Tier** | Yes | Yes |
| **Build Time** | 2-3 min | 1-2 min |
| **Custom Domain** | Yes | Yes |
| **Auto Redeploy** | Yes | Yes |
| **Uptime** | 99.9% | 99.95% |
| **Support** | Good | Excellent |

Both are excellent choices. Render is slightly more affordable for paid plans, while Vercel has slightly faster builds.

## Next Steps

After deployment:
1. Test all links and navigation on the live site
2. Share your portfolio URL with recruiters and collaborators
3. Update your LinkedIn, GitHub, and Twitter bios with the link
4. Continue adding projects and content as you build

## Support

If you encounter issues:
- Check [Render Documentation](https://render.com/docs)
- Review [Render Static Sites Guide](https://render.com/docs/static-sites)
- Contact Render support through your dashboard

---

**That's it!** Your portfolio is now live on Render and will automatically update whenever you push changes to GitHub. 🚀
