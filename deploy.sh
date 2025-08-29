#!/bin/bash

# Build the Angular project
echo "Building Angular project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "Build successful!"
    
    # Copy built files to a temporary directory
    echo "Preparing files for deployment..."
    rm -rf deploy-temp
    mkdir deploy-temp
    cp -r dist/sakshat-patil-portfolio/* deploy-temp/
    
    echo "Files ready for deployment to GitHub Pages"
    echo "Next steps:"
    echo "1. Go to your GitHub repository: https://github.com/sakshat-patil/sakshat-patil.github.io"
    echo "2. Go to Settings > Pages"
    echo "3. Set source to 'Deploy from a branch'"
    echo "4. Select 'gh-pages' branch and '/ (root)' folder"
    echo "5. Or manually upload the contents of 'deploy-temp' folder to the gh-pages branch"
    
else
    echo "Build failed!"
    exit 1
fi
