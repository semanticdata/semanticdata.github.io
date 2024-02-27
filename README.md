# 🦝 MiguelPimentel.do

<p align="">
  <img src="https://img.shields.io/github/languages/code-size/semanticdata/elva" />
  <img src="https://img.shields.io/github/repo-size/semanticdata/elva" />
  <img src="https://img.shields.io/github/commit-activity/t/semanticdata/elva" />
  <img src="https://img.shields.io/github/last-commit/semanticdata/elva" />
  <img src="https://img.shields.io/website/https/miguelpimentel.do.svg" />
</p>

My personal website built with [11ty](https://www.11ty.dev/) and elva.

## Changes from Upstream

- Switched from using `npm` to `pnpm`.
- Added Prettier alongside its config/ignore files.
- Added new script `run check` to check the code with Prettier.
- Added script `run format` to format the code with Prettier.
- Hid the _unused_ language toggle.
- Added new `Journal`, `Uses`, and `Projects` pages.
- Added [Pacifico](https://fonts.google.com/specimen/Pacifico) as font family for page titles.
- Added [Bitter](https://fonts.google.com/specimen/Bitter) as font family for other text.
- Implemented new `Notes` section.
- Implemented **Wikilinks** support via `.eleventy.js`.
- Implemented **Backlinks** support via `notes.11tydata.js`.
- Added new [Markdown-It](https://github.com/markdown-it/markdown-it) plugins:
  - [Attributes](https://www.npmjs.com/package/@gerhobbelt/markdown-it-attrs)
  - [Mark](https://www.npmjs.com/package/markdown-it-mark)
  - [Table of Contents](https://www.npmjs.com/package/markdown-it-table-of-contents)

## Useful Commands

### Install dependencies

```bash
pnpm install
```

### Update dependencies

```bash
pnpm update
```

### Start local server

```bash
pnpm start
```

### Check formatting with [Prettier](https://prettier.io/)

```bash
pnpm run check
```

### Format repo with [Prettier](https://prettier.io/)

```bash
pnpm run format
```

## Different Useful Commands Section for Testing Purposes

```bash
# Install dependencies
pnpm install
```

```bash
# Update dependencies
pnpm update
```

```bash
# Start local server
pnpm start
```

```bash
# Check formatting with Prettier
pnpm run check
```

```bash
# Format repo with Prettier
pnpm run format
```

## Another One

```bash
# Install dependencies
pnpm install

# Update dependencies
pnpm update

# Start local server
pnpm start

# Check formatting with Prettier
pnpm run check

# Format repo with Prettier
pnpm run format
```

## Frontmatter

Check them out here: [https://frontmatter.codes](https://frontmatter.codes)

### Example

```markdown
---
layout: page
title: Main page title, heading level one
date: 2023-08-04
modified: 2023-08-04
thumbnail: /assets/img/test.jpg
thumbnailDescription: An alt text description for the thumbnail image
tags: 'page-demo'
draft: true
eleventyExcludeFromCollections: true
seo:
  title: Custom title (defaults to title)
  description: SEO description
  slug: mmm-slugs
  changeFrequency: daily
  sitemapPriority: '1.0'
  excludeFromSitemap: true
  noIndex: true
---
```

### Descriptions

- `layout` — [Page layout](https://www.11ty.dev/docs/layouts/) for the page. Default is `post` for posts and `page` for pages.
- `title` — The title of the current page.
- `date` — [Published date](https://www.11ty.dev/docs/dates/). You can set special values here like `Last Modified`.
- `modified` — Modified date.
- `thumbnail` — Relative path to thumbnail / opengraph image. Size `1200px x 630px`.
- `thumbnailDescription` — Alt text for thumbnail.
- `tags` – [Tags](https://www.11ty.dev/docs/collections/#add-to-a-collection-using-tags) are currently used for custom body classes.
- `draft` — Draft pages will appear locally and on staging but not in production.
- `eleventyExcludeFromCollections` — [Hide from 11ty collections](https://www.11ty.dev/docs/collections/#how-to-exclude-content-from-collections).
- `seo.title` — Set custom page title for search engines and opengraph.
- `seo.description` — Set the page description for search engines and opengraph.
- `seo.slug` — Set a new slug for the page that is different from the filename.
- `seo.changeFrequency` — [How often does this page change](https://www.sitemaps.org/protocol.html#changefreqdef)?
- `seo.sitemapPriority` — [The priority of this URL relative to other URLs on your site](https://www.sitemaps.org/protocol.html#prioritydef).
- `seo.excludeFromSitemap` — Hide this page from your sitemap.xml.
- `seo.noIndex` — Discourage search engine indexing.

Nearly all front matter is optional, except for titles (and dates for posts).

## Image Embedding

```njk
{% image "/assets/img/en.jpg", "Yellow rapeseed flowers bloom against a clear blue sky", "100vw", "", "rounded", "lazy", "auto", "async", "2400", "1600" %}
```

## Personalization Checklist

- [ ] Setup a custom template for your open graph images (`.frontmatter/scripts/opengraph-template.html`)
- [ ] You many not need [Alpine.js](https://alpinejs.dev/) which can be removed from `/src/assets/js/bundle.njk`
- [ ] If you enable Photon CDN support [familiarize yourself with these limitations](https://jetpack.com/support/site-accelerator/#limitations)
- [ ] Set your preferred image sizes and formats in the image shortcode `/src/_config/shortcodes/image.js`
- [ ] If you add more front matter, you may wish to edit `frontmatter.json` to add [Front Matter CMS](https://frontmatter.codes/) support
- [ ] Use [Eleventy Fetch](https://www.11ty.dev/docs/plugins/fetch/) to grab some API data

## Acknowledgements and Attributions

This project is based on [elva](https://github.com/scottsweb/elva) and [eleventy-garden](https://github.com/binyamin/eleventy-garden).
