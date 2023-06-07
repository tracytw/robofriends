## Features

**Change background color**
click left/right side "Change Color"
**Search robot by name**
input keyword to search specific robot
**Scroll style in robot list**
use `{props.children}` as parent component to wrap self-closing component

## Sources

**Robot Img** [RoboHash](https://robohash.org/)
**Robot Info** [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
**SEGA @font-face** [Sega Logo Font](https://www.cufonfonts.com/font/sega-logo-font)

## Publish GitHub Pages

[Creact React App / Deployment / GitHub Pages](https://create-react-app.dev/docs/deployment/)

**Step 1: Add homepage to package.json**
● "homepage": "https://`myusername`.github.io/`my-app`",

**Step 2: Install gh-pages and add deploy to scripts in package.json**
● npm install --save gh-pages
● Add the following scripts in
"scripts": {
"predeploy": "npm run build",
"deploy": "gh-pages -d build",}

**Step 3: Deploy the site by running npm run deploy**
● npm run deploy

**Step 4: project’s settings use gh-pages**
● GitHub / repository / Settings / Pages / Branch / gh-pages
● copy URL
● GitHub / repository / About / Edit / paste URL in Website
