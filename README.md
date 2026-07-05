# J9INE — j9ine.com

Source for the J9INE website (Janean Benton — dance fitness, strength training, and the J9INE Wellness Hub), deployed on GitHub Pages at **https://www.j9ine.com**.

Plain HTML/CSS/JS, no build step.

## Structure

```
index.html          Home
about.html           About Janean
classes.html          Class schedule + location (XLNC Dance Studio)
wellness.html         Wellness hub (index of tip articles)
wellness/*.html       Individual wellness articles
contact.html          Contact form (Formspree)
css/styles.css        Design system (plum/gold/sage/cream, Playfair Display + Montserrat)
js/main.js            Mobile nav toggle + footer year
sitemap.xml, robots.txt   SEO
CNAME                 Custom domain for GitHub Pages (www.j9ine.com)
```

## Before going live

1. **Contact form** — `contact.html` posts to Formspree. Create a free form at
   [formspree.io](https://formspree.io), then replace `YOUR_FORM_ID` in the
   `<form action="...">` attribute with your real endpoint.
2. **Photos** — swap the gradient `.img-placeholder` blocks in `index.html` and
   `about.html` for real photos once available.
3. **Instagram handle** — currently linked as `@J9INEFit`; update everywhere
   (search for `instagram.com/J9INEFit`) if that changes.

## Local preview

Since this is a static site, just open `index.html` in a browser, or serve it
locally so relative paths behave exactly like production:

```
npx serve .
```

## Deploying (GitHub Pages)

1. Push this repo to `github.com/j9ine/j9ine.com`.
2. In the repo, go to **Settings → Pages**.
   - Source: `Deploy from a branch`
   - Branch: `main` / `(root)`
   - Custom domain: `www.j9ine.com` (should auto-fill from the `CNAME` file)
   - Check **Enforce HTTPS** once it becomes available (can take a few minutes
     to an hour after DNS is set up).
3. At your DNS provider for `j9ine.com`, add:

   | Type  | Host/Name | Value                    |
   |-------|-----------|--------------------------|
   | CNAME | www       | j9ine.github.io          |
   | A     | @         | 185.199.108.153          |
   | A     | @         | 185.199.109.153          |
   | A     | @         | 185.199.110.153          |
   | A     | @         | 185.199.111.153          |

   This makes `www.j9ine.com` the canonical site and `j9ine.com` (apex)
   auto-redirect to it once GitHub verifies both.

## Getting indexed by Google

1. Go to [Google Search Console](https://search.google.com/search-console),
   add `www.j9ine.com` as a property, and verify ownership (DNS TXT record or
   HTML file — separate from GitHub's own domain verification).
2. Submit `https://www.j9ine.com/sitemap.xml` under **Sitemaps**.
3. Use **URL Inspection** on the homepage and click **Request Indexing** to
   speed up the first crawl.
