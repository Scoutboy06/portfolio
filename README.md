# Elias Wennerlund — portfolio

A static portfolio built with Hugo. No Node dependencies are required.

## Local development

Use Hugo 0.152.2 (the version pinned in the deployment workflow):

```sh
hugo server --bind 127.0.0.1 --baseURL http://localhost:1313/
```

Production build:

```sh
hugo --gc --minify
```

## Editing content

- Project descriptions and links: `content/projects/`
- Work and education: `layouts/career/list.html`
- Homepage introduction: `layouts/index.html`
- Shared styles: `assets/css/globals.css`
- Contact links: `data/social.yaml`

The blog remains available at its existing URL, but is hidden from navigation until it has published posts. Typographic project covers are visual labels, not screenshots of the software. Inet’s start date is deliberately approximate (summer 2026); exact dates for previous roles have not been supplied.
