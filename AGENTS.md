# HKEX Family Sports Day 2026

This checkout is the 2026 website. Use the existing 2025 design language as the foundation. Review and iterate in HTML/CSS; create separate design files only when requested.

- English and Traditional Chinese must remain usable at desktop and mobile widths.
- Event and programme content lives in `src/content/event-2026.js`.
- Gallery, queue and result records live in `src/content/demo-2026.js`. Present the website with normal event copy, without demo/provisional labels, as requested on 2 October. Local queue/result fixtures are still not connected to a backend.
- Do not reconnect the 2025 API, analytics or gallery access configuration.
- Use 2026 brief content where available and carry forward 2025 content/assets for gaps. Keep provenance and unresolved operating details in documentation, not placeholder notices in the website. Do not invent exact timings or operating rules.
- The homepage opens on a white, full-viewport photo-collage hero (large editable HTML lettering in FS Elliot Regular, 4–5 photos of varied size, no "HKEX" eyebrow). It closes on a solid red countdown band with no photo. The anime KV is not used on the homepage. The header uses the blue/red logo on white throughout. Keep display lettering light (Regular 400); avoid Heavy.
- Use the supplied blue/red HKEX SVG in the header and on inner-page headers, and the white/red SVG in the 2025-style footer. The venue map switches between the carried-forward English and Chinese assets.
- Photography: most photos are Getty Images 509 px preview files in `public/images/2026/getty-preview/` (named by Getty ID), used for layout review only. These remain unlicensed preview comps. On 2 October, Eric explicitly requested publishing the current public demo with the existing images; replace each file with the licensed original under the same name before final production release. `photography` and `stock` in `src/content/event-2026.js` map them to slots. Relay and Wing Chun stay as generated images; the venue photo is the supplied Kai Tak Youth Sports Ground image.
- Motion: sections rise in on scroll (`Reveal`), hero, statement and inner-page header photos drift and follow the pointer (`usePointerParallax`), both in `src/components/motion.js`. All of it is off for `prefers-reduced-motion` and touch pointers.
- Original briefs, local notes and 2025 backups are in ignored `.local/` and must not be published.
- Preserve GitHub Pages subpath support through `asset()` and Next.js links.
- Run lint and a static build for code changes; use rendered checks for layout or interaction changes.
- Commit, push and publish only when requested by the user. Initial repository setup and preview publishing were authorised for this setup task.
