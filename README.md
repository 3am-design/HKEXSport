# HKEX Family Sports Day 2026

Working website preview for the 2026 event, built on the team's 2025 Next.js website. The browser is the main design review surface; screenshots can be exported when needed.

- Preview: https://3am-design.github.io/HKEXSport/
- Event: 12 December 2026, 13:00–18:00 (Hong Kong time)
- Venue: Kai Tak Youth Sports Ground
- Status: draft copy, provisional programme, demo artwork and data

## Development

Node.js 22 is used for deployment.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. The site supports English and Traditional Chinese.

```sh
npm run lint
npm run build
npm run preview
```

The static export is in `out/`. For a Pages-compatible build:

```sh
NEXT_PUBLIC_BASE_PATH=/HKEXSport npm run build
```

GitHub Actions publishes `main` to GitHub Pages. This project uses [Next.js static export](https://nextjs.org/docs/app/guides/static-exports); it does not depend on the 2025 API.

## Where to edit

| Area                                                   | File                                 |
| ------------------------------------------------------ | ------------------------------------ |
| Event copy, programme, navigation, proposed activities | `src/content/event-2026.js`          |
| Clearly labelled sample photos, queues and results     | `src/content/demo-2026.js`           |
| Page layouts and content sections                      | `src/components/EventPages.js`       |
| Gallery filter, queue status, results filters          | `src/components/InteractivePages.js` |
| Shared header and footer                               | `src/app/common/`                    |
| 2026 layout rules                                      | `src/app/assets/preview-2026.scss`   |
| Inherited 2025 design system and fonts                 | `src/app/assets/`                    |
| Reused website images                                  | `public/images/`                     |

See [site structure and delivery scope](docs/structure.md).

## Preview boundaries

The site includes no registration submission, ticket issuing, live queue updates, real participant records or official results. Sample data is labelled in the interface. Gallery images are reference assets from the 2025 website, not 2026 event photography.

Final KV, brand lockup, translations, competition list/rules, timings, venue plan, ticket workflow, terms and gallery permissions remain subject to approval. The preview requests search engines not to index it; it is still publicly accessible.

Original briefs, source decks, 2025 backups and review captures stay outside the published files. Assets and fonts remain the property of their respective owners; this repository grants no redistribution licence.
