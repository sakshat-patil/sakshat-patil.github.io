#!/bin/bash
ng build --configuration production
git checkout production
find . -maxdepth 1 -type f -not \( -name ".git" -or -name ".gitignore" -or -name "production.sh" \) -delete
rm -rf assets
cp -r dist/sakshat-patil-portfolio/* ./
cp dist/sakshat-patil-portfolio/.htaccess ./.htaccess