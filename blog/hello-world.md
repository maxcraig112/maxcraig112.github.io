---
title: How I Built This Site
description: A walkthrough of how I built this site using compiiile, GitHub Actions, and GitHub Pages.
---

# How I Built This Site

*May 25, 2026*

I wanted a personal site that was dead simple to maintain — write a Markdown file, push it, and it's live. No CMS, no build configuration, no theme files to wrestle with. Here's what I landed on.

## The Stack

- **[compiiile](https://github.com/compiiile/compiiile)** — renders a folder of Markdown files into a static site with zero configuration
- **GitHub Actions** — builds and deploys on every push to `main`
- **GitHub Pages** — free hosting, automatic HTTPS

That's genuinely it. No framework, no templating language, no front matter required.

## Why compiiile

I looked at Jekyll, Hugo, and a few others. They all want you to learn their conventions — layouts, partials, config formats. compiiile just reads your Markdown files and builds a site. The folder structure becomes the navigation. A `README.md` becomes the home page.

The dark theme is built in, full-text search works out of the box, and hot reload works during development.

## Folder Structure

```text
maxcraig112.github.io/
├── README.md          ← home page
├── blog/
│   └── *.md           ← posts (this file lives here)
├── projects/
│   └── README.md
├── contact.md
├── public/            ← static assets (images, etc.)
├── compiiile.config.js
└── package.json
```

Adding a new post is just creating a new `.md` file in `blog/` and linking to it from `blog/README.md`.

## Deployment

A GitHub Actions workflow handles everything automatically:

```yaml
- run: npm install
- run: npm run build        # outputs to .compiiile/dist
- uses: actions/upload-pages-artifact@v3
  with:
    path: .compiiile/dist
```

Push to `main`, wait ~30 seconds, it's live.

## One Trick: Mermaid Diagrams

compiiile doesn't render Mermaid diagrams out of the box — that requires compiiile-pro. Instead I added a small custom integration to `compiiile.config.js` that injects the Mermaid CDN on every page and swaps out fenced `mermaid` code blocks for rendered SVGs at runtime:

```js
injectScript("page", `
  import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';
  mermaid.initialize({ startOnLoad: false, theme: 'dark' });
  const blocks = document.querySelectorAll('code.language-mermaid');
  for (const code of blocks) {
    const { svg } = await mermaid.render('m-' + Math.random().toString(36).slice(2), code.textContent.trim());
    const div = document.createElement('div');
    div.innerHTML = svg;
    code.parentElement.replaceWith(div);
  }
`);
```

## Source

The full source is on GitHub: [github.com/maxcraig112/maxcraig112.github.io](https://github.com/maxcraig112/maxcraig112.github.io)
