# MDLF Nursery Page — Deployment Notes

This package is a static front-end page built with **HTML, CSS, and JavaScript**.

## Deployment

1. Upload the complete package to the server without changing the folder structure.
2. Keep `index.html`, `styles.css`, `script.js`, and the `assets/` folder together.
3. The page entry file is `index.html`.
4. All images, SVG files, AVIF/WebP backgrounds, and fonts are loaded with relative paths from the `assets/` folder.
5. No build process, npm, or framework is required.

## Important

- Please make sure the server supports **AVIF** and **WebP** files with the correct MIME types.
- Do not rename or move asset files unless their paths are also updated in the HTML/CSS.
- The layout includes both **desktop and mobile responsive versions**.
- Please test the page on both desktop and mobile after deployment.

## Registration Form

The registration form currently includes **front-end validation only**.

It is **not yet connected** to:
- Email
- Database
- CRM
- Backend endpoint

Please connect the form submission to the website's preferred backend solution if required.

## Main Files

```text
index.html
styles.css
script.js
assets/
```
