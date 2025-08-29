# Deploying to GitHub Pages

This guide will help you deploy your Angular portfolio to GitHub Pages.

## Prerequisites

1. Make sure you have access to the GitHub repository: https://github.com/sakshat-patil/sakshat-patil.github.io
2. Ensure you have the necessary permissions to push to the repository

## Method 1: Automatic Deployment (Recommended)

### Step 1: Push your code to GitHub

```bash
# Add all files
git add .

# Commit changes
git commit -m "Add Angular portfolio with GitHub Pages configuration"

# Push to GitHub
git push origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository: https://github.com/sakshat-patil/sakshat-patil.github.io
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Choose "gh-pages" branch and "/ (root)" folder
6. Click "Save"

### Step 3: Wait for deployment

The GitHub Actions workflow will automatically:
- Build your Angular project
- Deploy it to the gh-pages branch
- Make it available at: https://sakshat-patil.github.io/sakshat-patil.github.io/

## Method 2: Manual Deployment

### Step 1: Build for GitHub Pages

```bash
npm run build-github-pages
```

### Step 2: Deploy manually

1. Go to your repository: https://github.com/sakshat-patil/sakshat-patil.github.io
2. Create a new branch called "gh-pages"
3. Upload the contents of `dist/sakshat-patil-portfolio/` to the gh-pages branch
4. Enable GitHub Pages as described in Method 1, Step 2

## Troubleshooting

### If the site doesn't load properly:

1. Check that the base href is correct in `angular.json`
2. Ensure all assets are being loaded correctly
3. Check the browser console for any errors
4. Verify that the gh-pages branch contains all the built files

### If GitHub Actions fails:

1. Check the Actions tab in your repository
2. Look for any build errors
3. Ensure all dependencies are properly installed
4. Verify that the Node.js version is compatible

## Custom Domain (Optional)

If you want to use a custom domain:

1. Go to repository Settings > Pages
2. Enter your custom domain in the "Custom domain" field
3. Add a CNAME file to your repository with your domain
4. Update your DNS settings to point to GitHub Pages

## Notes

- The site will be available at: https://sakshat-patil.github.io/sakshat-patil.github.io/
- Any changes pushed to the main branch will automatically trigger a new deployment
- The build process includes optimization and minification for production
