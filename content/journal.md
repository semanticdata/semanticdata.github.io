+++
title = "journal"
description = "My attempt at maintaining a public journal."
template = "page.html"

[extra]
lang = 'en'
math = false
mermaid = false
copy = false
comment = false
# toc = false
+++
<br>
{% important() %}
This page is currently under construction. It contains <u><b><i>only</i></b></u> placeholder text.
{% end %}

## 2023-11

### Notes

- I was sick earlier this week. Missed two days at work. Bounced back by Thursday.

### GitHub

- Created [Zola Book](https://github.com/semanticdata/zola-book), a fork of [book](https://github.com/getzola/book). Added contents in the form of Zola and Tera Documentation. When I first discovered the book theme, I was put off by the mobile version overlapping the menu on top of the page by default. Today I managed to put together some code that addresses these problems. You can find more info on [PR #25](https://github.com/getzola/book/pull/25) at the upstream repo.
- Created new GitHub [Projects Roadmap](https://github.com/users/semanticdata/projects/5). This is part of my effort to learn more about GitHub Projects, Pull Requests, and Issues.
- Updated Obsidian [Starter Vault](https://github.com/semanticdata/obsidian-starter-vault). Updated community extensions and added new CSS snippets.
- Updated Zola workflows within my [dotfiles](https://github.com/semanticdata/dotfiles) repo.
- Fully migrated the [blog](https://miguelpimentel.do) to [semanticdata.github.io](https://github.com/semanticdata/semanticdata.github.io). Now uses Mabuya as upstream to update the underlying template core.
- Slowly improving [Agouta](https://github.com/semanticdata/agouta) layout. Used [Zola Dinkleberg](https://github.com/semanticdata/zola-dinkleberg) as inspiration for the layout.
- Improved legibility of [Mabuya](https://github.com/semanticdata/mabuya). Achieved perfect scores in Lighthouse. (100/100 in all categories)
- Created [Zola Particles](https://github.com/semanticdata/zola-particles). Initially it looked promising for layout ideas I had. Right now is evident it does not meet my usage requirements. I tentatively plan to take it a different direction I was originally. This considering I won't be using it myself anymore.
- Paused development for [Zola Docs](https://github.com/semanticdata/zola-docs). I was able to achieve some of the functionality I wanted to replicate.

> [Link Of The Day](https://en.wikipedia.org/wiki/Sahara_pump_theory)

## 2023-10

### GitHub

- Created new repo [upload-pages-artifact](https://github.com/semanticdata/upload-pages-artifact). Forked to bump `node16` to `node20`, as the former was deprecated by GitHub.
- Created new repo [upload-artifact](https://github.com/semanticdata/upload-artifact). Forked to bump `node16` to `node20`, as the former was deprecated by GitHub.
- Created new repo [deploy-pages](https://github.com/semanticdata/deploy-pages). Forked to bump `node16` to `node20`, as the former was deprecated by GitHub.
- With the three new GitHub actions, I can craft new workflows that use my own actions instead of the ones that have not been updated.
- Renamed [zola-minima] to Agouta. Inspired by the Hispaniolan solenodon.

> [Link Of The Day](https://en.wikipedia.org/wiki/False_friend)
