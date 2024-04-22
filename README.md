# 🦝 MiguelPimentel.do

> A saturday afternoon at the beach. 🏖

![code size](https://img.shields.io/github/languages/code-size/semanticdata/miguelpimentel.do) ![repository size](https://img.shields.io/github/repo-size/semanticdata/miguelpimentel.do) ![commits](https://img.shields.io/github/commit-activity/t/semanticdata/miguelpimentel.do) ![last commit](https://img.shields.io/github/last-commit/semanticdata/miguelpimentel.do) ![is website up?](https://img.shields.io/website/https/miguelpimentel.do.svg)

This repository contains the source code for my personal website and blog. It is currently built with [Astro](https://astro.build/).

## 📑 Table of Contents

- [🦝 MiguelPimentel.do](#-miguelpimenteldo)
  - [📑 Table of Contents](#-table-of-contents)
  - [📄 Description](#-description)
  - [🛠️ Technology](#️-technology)
  - [🗺 Roadmap](#-roadmap)
  - [🔎 References](#-references)
  - [💜 Acknowledgements](#-acknowledgements)
  - [© License](#-license)

## 🛠️ Technology

The site uses various technologies cobbled together. Here's some of them:

- [Astro](https://astro.build/): website build tool that can act as a static site generator.
- [Prettier](https://github.com/prettier/prettier): an opinionated code formatter.
- [Sass](https://github.com/sass/sass): because CSS can be fun.
- [TypeScript](https://github.com/microsoft/TypeScript): superset of JavaScript.
- [Husky](https://github.com/typicode/husky): Git hooks manager.

## 🗺 Roadmap

List of things I'm considering doing to/with the site. Here's a [good resource](https://github.com/withastro/astro/blob/main/examples/component/README.md) on examples for reference.

<details>
<summary>Show/Hide</summary>

- [x] About page
- [x] Blog section
- [x] Notes section
- [x] Journal page
- [x] Uses page
- [x] Now page
- [x] Meta page
- [x] 404 error page
- [x] Projects page
- [x] RSS feed(s)
- [x] Syntax Highlighting
- [x] Fluid typography (with [Utopia](https://utopia.fyi))
- [ ] Robots.txt
- [ ] Sitemap
- [ ] Tags/Categories
- [ ] Explore other font combinations. (e.g. [Lobster](https://fonts.google.com/specimen/Lobster))
- [ ] Admonition-style callouts
- [ ] Recent posts/notes/projects
- [ ] GitHub Pages integration (`.github/workflows/deploy.yml`)(broken styles)
- [x] Vercel integration (`vercel.json`)
- [x] Netlify integration (`netlify.toml`)
- [x] HTTP headers

### Components

- [ ] Table of Contents (using `<details>` and `<summary>`)
- [ ] Card view (used in the Notes section)
- [ ] Theme toggle

</details>

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/semanticdata/miguelpimentel.do/tree/main/) [![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/semanticdata/miguelpimentel.do/tree/main)

<!-- [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/component/devcontainer.json) -->

## 🔎 References

Some CSS that I'd like to check out and hopefully implement the parts of it I like on the site.

<details>
<summary>Show/Hide</summary>

```css
:root {
  --accent: 136, 58, 234;
  --accent-light: 224, 204, 250;
  --accent-dark: 49, 10, 101;
  --accent-gradient: linear-gradient(
    45deg,
    rgb(var(--accent)),
    rgb(var(--accent-light)) 30%,
    white 60%
  );
}
html {
  font-family: system-ui, sans-serif;
  background: #13151a;
  background-size: 224px;
}
code {
  font-family:
    Menlo,
    Monaco,
    Lucida Console,
    Liberation Mono,
    DejaVu Sans Mono,
    Bitstream Vera Sans Mono,
    Courier New,
    monospace;
}
.astro-a {
  position: absolute;
  top: -32px;
  left: 50%;
  transform: translatex(-50%);
  width: 220px;
  height: auto;
  z-index: -1;
}
.text-gradient {
  background-image: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 400%;
  background-position: 0%;
}
.instructions {
  margin-bottom: 2rem;
  border: 1px solid rgba(var(--accent-light), 25%);
  background: linear-gradient(
    rgba(var(--accent-dark), 66%),
    rgba(var(--accent-dark), 33%)
  );
  padding: 1.5rem;
  border-radius: 8px;
}
.instructions code {
  font-size: 0.8em;
  font-weight: bold;
  background: rgba(var(--accent-light), 12%);
  color: rgb(var(--accent-light));
  border-radius: 4px;
  padding: 0.3em 0.4em;
}
.instructions strong {
  color: rgb(var(--accent-light));
}
.link-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(24ch, 1fr));
  gap: 2rem;
  padding: 0;
}
.link-card {
  list-style: none;
  display: flex;
  padding: 1px;
  background-color: #23262d;
  background-image: none;
  background-size: 400%;
  border-radius: 7px;
  background-position: 100%;
  transition: background-position 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
}
.link-card > a {
  width: 100%;
  text-decoration: none;
  line-height: 1.4;
  padding: calc(1.5rem - 1px);
  border-radius: 8px;
  color: white;
  background-color: #23262d;
  opacity: 0.8;
}
h2 {
  margin: 0;
  font-size: 1.25rem;
  transition: color 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}
p {
  margin-top: 0.5rem;
  margin-bottom: 0;
}
.link-card:is(:hover, :focus-within) {
  background-position: 0;
  background-image: var(--accent-gradient);
}
.link-card:is(:hover, :focus-within) h2 {
  color: rgb(var(--accent-light));
}
```

</details>

## 💜 Acknowledgements

This project is based on [Astro-naut](https://github.com/stevefrenzel/astro-naut) by [Steve Frenzel](https://stevefrenzel.dev/).

## © License

Source code in this repository is available under the [MIT License](LICENSE).
