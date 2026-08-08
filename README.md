# Jaswant Singh Hada — Official Website

Personal website for **Jaswant Singh Hada**, former MLA from Shujalpur (Shajapur district, Madhya Pradesh), Bharatiya Janata Party. Built as a static site for GitHub Pages.

## Structure

```
index.html        # Single-page site: hero, about, journey, focus areas, gallery, contact
css/style.css     # All styling (saffron/cream theme, responsive)
js/script.js      # Mobile nav, scroll-reveal animations, animated counters
images/           # Put jaswant-singh-hada.jpg (main portrait) here
images/gallery/   # Put gallery photos here
```

## Before publishing — remaining placeholders

Search `index.html` for `TODO`:

1. **Hero photo** — save the chosen campaign graphic as `images/jaswant-singh-hada.jpg` (frame is sized 1:1 / square).
2. **Gallery photos** — add images to `images/gallery/` and update the gallery `<figure>` elements.

Contact details, social links, and the quote are final.

## Deploy to GitHub Pages

```bash
git init
git add .
git commit -m "Initial website"
git branch -M main
git remote add origin https://github.com/hada-jaswant/hada-jaswant.github.io.git
git push -u origin main
```

Because the repository is named `hada-jaswant.github.io`, GitHub Pages serves it automatically at **https://hada-jaswant.github.io** (enable Pages in repo Settings → Pages → Deploy from branch → `main` if needed).

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```
