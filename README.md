# duynhancv

Personal CV site of **Nguyen Huynh Duy Nhan**, COBOL Developer working on life insurance core systems (IBM i · SMART/400 · LifeAsia · DB2).

**Live:** https://duy-nhan.github.io/duynhancv/

## Stack
Plain HTML, CSS and JavaScript, with no framework and no build step. Hosted on GitHub Pages and deployed by GitHub Actions.

## Structure
```
site/                    # the published website
  index.html, styles.css, script.js
  assets/                # portrait photo, certificate PDF
CV_Updated.md            # CV content (source for the site)
.github/workflows/       # deploy pipeline
```

## Deploy
Push to `main`. The workflow checks `site/` for unfilled placeholders, then publishes it to GitHub Pages.
