#!/bin/bash
read -p "Please input RewriteBase you want in .htaccess: " RewriteBase
ng build --prod --base-href ${RewriteBase}
echo "RewriteEngine On" > ./dist/SkyOnlinejudge-web/.htaccess
echo "RewriteBase "${RewriteBase} >> ./dist/SkyOnlinejudge-web/.htaccess
echo "RewriteCond %{REQUEST_FILENAME} !-f" >> ./dist/SkyOnlinejudge-web/.htaccess
echo "RewriteCond %{REQUEST_FILENAME} !-d" >> ./dist/SkyOnlinejudge-web/.htaccess
echo "RewriteRule !^exclude index.html [L,NC]" >> ./dist/SkyOnlinejudge-web/.htaccess