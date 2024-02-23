# semanticdata.github.io

<p align="">
  <img src="https://img.shields.io/github/languages/code-size/semanticdata/semanticdata.github.io" />
  <img src="https://img.shields.io/github/repo-size/semanticdata/semanticdata.github.io" />
  <img src="https://img.shields.io/github/commit-activity/t/semanticdata/semanticdata.github.io" />
  <img src="https://img.shields.io/github/last-commit/semanticdata/semanticdata.github.io" />
  <img src="https://img.shields.io/website/https/miguelpimentel.do.svg" />
</p>

Previous personal website powered by [Zola](https://www.getzola.org/), and themed with [serene](https://github.com/isunjn/serene).

## Table of Contents

<details>
<summary>Show/Hide</summary>

- [semanticdata.github.io](#semanticdatagithubio)
  - [Table of Contents](#table-of-contents)
  - [Changes from Upstream](#changes-from-upstream)
    - [Accessibility](#accessibility)
  - [Useful Commands](#useful-commands)
  - [Acknowledgments](#acknowledgments)
  - [License](#license)

</details>

<!-- ## Screenshot

![website screenshot](screenshot-1.png) -->

## Changes from Upstream

- New *layout*: `Page`.
- New header *partial* `_header-journal.html`.
- New `/now`, `/uses`, and `/meta` sections and pages.

### Accessibility

Replaced all failing[^1] color variables with shades of the same color that returned passing scores.

| Variable                  | Old Color | New Color | Old Score | New Score |
| ------------------------- | --------- | --------- | --------- | --------- |
| `primary-color`           | `#698BCF` | `#3F537C` | `3.39`    | `7.67`    |
| `primary-color-dark`      | `#698BCF` | `#96ADDD` | `4.75`    | `7.14`    |
| `text-pale-color`         | `#9AA2B9` | `#4C515C` | `2.55`    | `7.96`    |
| `text-pale-color-dark`    | `#5d6470` | `#ADB1B7` | `2.70`    | `7.47`    |
| `callout-note-color`      | `#698BCF` | `#3F537C` | `3.39`    | `7.67`    |
| `callout-note-color-dark` | `#698BCF` | `#96ADDD` | `4.75`    | `7.14`    |

## Useful Commands

| **Command**  | Description                                                                       |
| ------------ | --------------------------------------------------------------------------------- |
| `zola build` | Only builds the site into the `/public` folder, which is ignored in `.gitignore`. |
| `zola serve` | Builds and serves the site locally, watches for changes, refreshes automatically. |

## Acknowledgments

The icons used throughout the site are kindly provided by [UXWing](https://uxwing.com/license/), and [Remix Icon](https://remixicon.com/license/).

## License

Source code in this repository is available under the [MIT License](LICENSE).

[^1]: Color Contrast Checker: passing scores ≥ 7.00.
