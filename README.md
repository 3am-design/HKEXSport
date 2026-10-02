# HKEX Family Sports Day 2026

Website for the 2026 event, built on the team's 2025 Next.js website. The browser is the main design review surface; screenshots can be exported when needed.

- Preview: https://3am-design.github.io/HKEXSport/
- Event: 12 December 2026, 13:00–18:00 (Hong Kong time)
- Venue: Kai Tak Youth Sports Ground
- Presentation: 2026 event copy, official HKEX logos, with 2025 assets/content carried forward where replacements are not yet supplied.

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
| Gallery photos and local queue/result records     | `src/content/demo-2026.js`           |
| Page layouts and content sections                      | `src/components/EventPages.js`       |
| Gallery filter, queue status, results filters          | `src/components/InteractivePages.js` |
| Shared header and footer                               | `src/app/common/`                    |
| 2026 layout rules                                      | `src/app/assets/preview-2026.scss`   |
| Inherited 2025 design system and fonts                 | `src/app/assets/`                    |
| Reused website images                                  | `public/images/`                     |

See [site structure and delivery scope](docs/structure.md).

## Preview boundaries

The site includes no registration submission, ticket issuing, live queue updates, real participant records or official results. The interface uses normal event copy; queue and result records currently come from local display fixtures. Current imagery combines Getty preview comps supplied for layout review, generated images and the supplied venue photograph. Eric authorised publishing this demo with the existing images on 2 October; Getty files still need licensed originals before final production release.

KV refinements, translations, competition list/rules, timings, venue plan, ticket workflow, terms and gallery permissions remain subject to approval. The preview requests search engines not to index it; it is still publicly accessible.

Original briefs, source decks, 2025 backups and review captures stay outside the published files. Assets and fonts remain the property of their respective owners; this repository grants no redistribution licence.
