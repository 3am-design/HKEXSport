# HKEX Family Sports Day 2026

This checkout is the 2026 website. Use the existing 2025 design language as the foundation. Review and iterate in HTML/CSS; create separate design files only when requested.

- English and Traditional Chinese must remain usable at desktop and mobile widths.
- Event and programme content lives in `src/content/event-2026.js`.
- Example gallery, queue and result records live in `src/content/demo-2026.js` and must stay visibly labelled as demo data.
- Do not reconnect the 2025 API, analytics or gallery access configuration.
- Final timings, activities and operating rules require confirmed source information. Do not fill gaps with invented facts.
- Original briefs, local notes and 2025 backups are in ignored `.local/` and must not be published.
- Preserve GitHub Pages subpath support through `asset()` and Next.js links.
- Run lint and a static build for code changes; use rendered checks for layout or interaction changes.
- Commit, push and publish only when requested by the user. Initial repository setup and preview publishing were authorised for this setup task.
