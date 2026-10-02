# 2026 website structure

The existing 2025 blue/red palette, FSElliot Pro typeface, staggered image cards and bilingual navigation remain the visual foundation. Use HTML/CSS in this project for review and iteration. The homepage opens on a white photo-collage hero (see “Homepage redesign”); the generated anime illustration is no longer used on the homepage. All lettering and the countdown are editable HTML. The header and footer use the supplied official blue/red and white/red HKEX SVGs.

| Page                    | URL                                         | Current state                                                |
| ----------------------- | ------------------------------------------- | ------------------------------------------------------------ |
| Home                    | `/`                                         | White photo-collage hero, statement, activity index, photo strip, venue facts and closing band with countdown |
| About the event         | `/event-overview/`                          | Dedicated 2026 event introduction                            |
| Schedule and grouping   | `/event-overview/schedule/`                 | 2026 programme and group-seating guidance                   |
| Venue                   | `/event-overview/venue/`                    | 2025 bilingual venue map, walking-route PDF and refreshments        |
| Adverse weather         | `/event-overview/adverse-weather/`          | Participant copy directs readers to organiser communications                                |
| Competitions            | `/competitions/`                            | 2026 event details, categories, locations, capacities and Group Score System             |
| Results                 | `/competitions/results/`                    | Filters by event, category and round; local fixture records                    |
| Activities and wellness | `/workshops-and-booths/`                    | Activity overview                                            |
| Community               | `/workshops-and-booths/community/`          | Caregiver appreciation and community introduction                         |
| Workshops               | `/workshops-and-booths/workshops/`          | Activity descriptions, durations and session windows                    |
| Booths                  | `/workshops-and-booths/booths/`             | 2026 game line-up                                        |
| Fitness assessment      | `/workshops-and-booths/fitness-assessment/` | Dedicated introduction to the assessment zone                   |
| Workshop status         | `/workshop-status/`                         | Queues, called number and remaining tickets; local fixtures |
| Photo gallery           | `/gallery/`                                 | Single active tag filter and photo enlargement               |
| Terms of Use     | `/terms-of-use/`                            | 2025 bilingual terms carried forward with the 2026 event name                     |

## Additional requirements received 2 October

- A separate event introduction page.
- Photo gallery with one active tag at a time. The All photos control resets the filter.
- A page showing queue and ticket status across workshops.
- Fewer final competition items, with more detailed result data. The current brief remains a provisional list until the organiser confirms the reduced selection.

## Content still to confirm

- Final desktop/mobile KV; supplied HKEX logos are now used in the header/footer.
- Final copy and Traditional Chinese translations.
- Competition selection, categories, rounds, eligibility, rules and scoring.
- The brief contains conflicting activity and closing-ceremony timings. Use explicit labelled times from the 30 September update where clear; keep conflicting grid timings out of participant copy.
- Workshop selection (three from six options), supplementary activities, session times and capacity.
- Final venue map, entrance, accessibility, transport and weather arrangements.
- Queue operations: onsite or online ticket collection, per-person limits, no-shows, priority rules, update ownership and refresh frequency.
- Result approval: who can edit, verify, publish and correct scores, tie-breaks and team totals.
- Gallery taxonomy, upload ownership, visibility, consent and retention rules.
- Approved terms, privacy copy and contact details.

## Future data integration

Keep content behind small data adapters so layout review can continue before CMS integration.

**Gallery:** stable photo ID, image URL, caption in both languages, tag ID, alt text, publication state. The public view must receive only approved images.

**Workshop queues:** workshop ID, session ID/time, capacity, ticket availability, current called number, waiting count, status and server update timestamp. Staff authentication, ticket issuance, concurrency and no-show handling belong to the backend. The preview reads local fixtures only.

**Results:** competition → category → round → entries. Entries can carry a participant/team ID, relay members, rank, time/distance/score, attempts, points and DNS/DQ/qualification status. Match results require both sides and scores; team totals and tie-break rules need an agreed specification. Official publication should include verification state, publication time and correction history. Demo results are never treated as official.

## Working process

1. Edit copy/data and HTML/CSS here.
2. Review the site at desktop and mobile sizes in both languages.
3. Capture screens only for a specific review or handoff.
4. Publish reviewed changes to the GitHub Pages preview.
5. Add CMS, live data and final KV after the operating rules are agreed.

## Presentation update — 2 October

The site uses normal event copy without demo, provisional or placeholder notices, at Eric’s direction. Missing content may be carried forward from 2025. The bilingual venue maps, walking-route PDF, Terms of Use, social icons and footer layout are carried forward; the two supplied HKEX SVG files are copied unchanged.

Workshop status uses the 2026 family yoga, Wing Chun and DIY dumbbell names/session bounds with local fixture counters. Results use bib numbers and team labels with fixture scores. Removing development notices does not make these values live or official; backend integration and publication checks remain outstanding.


## Programme detail update — 2 October

Competition cards now include source-backed categories, locations, available capacities and formats. The Group Score System is carried forward from 2025: group family/team competitions count, no participation points, and positions 1–5 receive 10/8/6/5/4 points. Both competition navigation menus link to this section.

The workshop page includes six activity descriptions and durations, two additional movement directions, and session windows from the updated schedule. Alternative activities remain grouped with “or”; their final selection is an internal content decision. Booth opening hours are included. The interface contains no draft-status banners.

Logo sizing is controlled by `--brand-header-width` and `--brand-footer-width` in the 2026 stylesheet, with desktop and mobile values.


## Landing KV update — 2 October

_Superseded by “Homepage redesign — 2 October” below: the illustration is no longer the full-screen hero. The asset notes remain valid._

The illustration is a text-free family running scene, redrawn with the built-in image tool in a Japanese 2D anime direction after feedback that the first version looked too realistic. Crisp character outlines, cel shading and a luminous blue sky replace the earlier realistic faces. The active asset is `public/images/2026/family-sports-day-kv-anime-v2.webp`, encoded losslessly at its native 1672 × 941 size. The PNG master (`family-sports-day-2026-anime-v2.png`) and exact prompt stay in ignored `output/imagegen/`; the generation receipt is in `.local/imagegen/`. The earlier master is retained for reference.

The hero fills the viewport, with a transparent white-logo header at the top and the existing white/blue header after scrolling or opening the menu. All event lettering and countdown remain HTML and bilingual. Mobile repositions the same image beneath the title and moves event details toward the bottom to keep faces clear. Short phone windows allow a 740px minimum to preserve legibility.

## Photography and workshop status refresh — 2 October

Nine original images generated and revised with the built-in image tool now use a more natural photographic treatment following feedback on artificial sharpness and repeated primary colours. The revision softens microcontrast, skin highlights and golden rim light while retaining colour depth and the existing action/interaction framing. Wardrobe and surroundings mix plum, lavender, olive, sage, taupe, cocoa and weathered blue-grey, with natural skin tones and gentler daylight. The series varies frontal running action, close family interaction, baton and smartwatch details, outdoor yoga, low-angle carnival play, community connection, a refreshment close-up and focused Wing Chun training. All active activity photographs across landing cards, overview, competitions, activity pages, venue refreshments and Gallery use the shared `photography` registry in `src/content/event-2026.js`. The anime KV, official logos and bilingual venue diagrams remain separate assets.

The active website files are native-size 1536 × 1024 WebP images at quality 94 in `public/images/2026/photography-natural/`. Original PNGs, exact edit prompts, reference paths and generation receipts are preserved in ignored `output/imagegen/photography-2026-natural/`. The earlier photographic series are retained separately for reference. These images are generated campaign imagery, not documentary photographs of the 2026 event or evidence of a specific menu, instructor or facility.

Workshop Status directly displays all three workshop cards; the redundant workshop select filter has been removed. Results filters and the single-tag Gallery filter remain functional.

## Homepage redesign — 2 October

The homepage layout follows the editorial pattern of monarque-evenements.com while keeping the HKEX blue/red palette and FS Elliot Pro. The full-screen anime KV hero is replaced by a white hero: oversized HTML lettering ("Family Sports Day" in blue, "2026" in red) with five photos of different sizes and crops placed around it. The countdown moved to the closing band: a solid red block above the footer, with no photo. The header is the blue/red logo on white throughout.

Sections, in order: hero → "Move. Connect. Enjoy." statement with the event introduction → "What's on" activity index (sticky photo that follows the hovered row; photos inline on mobile) → "The day at a glance" photo strip (`homeMoments` in `src/content/event-2026.js`) → venue and event facts → closing band. Only date, time, venue and audience from the existing content are used; no new operating details were added. Photos are the existing nine generated images reused with different crops.

Chinese display lettering falls back to PingFang TC / Noto Sans TC because FS Elliot Pro has no CJK glyphs. Entrance and scroll animations are guarded by `prefers-reduced-motion`. Inner pages and the footer still use the 2025-style templates and are the next stage of the redesign.

### Homepage revision — 2 October (feedback round 1)

- "HKEX" eyebrow removed from the hero title (header logo already carries the brand).
- Display lettering moved from Heavy (900) to Regular (400) and sizes were reduced across the page; small labels and buttons are regular weight. The weight is one variable, `--home-display-weight`, in `preview-2026.scss`.
- "Move. Connect. Enjoy." is smaller and has four photos floating around it (slow CSS drift, disabled under `prefers-reduced-motion`).
- The photo strip has no scrollbar. It drifts on its own, pauses while the pointer or focus is inside it, and shows left/right arrows when the pointer reaches either edge (hidden on touch devices). The list is rendered three times so the loop is seamless; the extra copies are `aria-hidden`.
- The closing band is solid red (`#d62742`, chosen so white text passes AA contrast) with the countdown and link. The anime KV is not shown on the homepage; the asset stays in `public/images/2026/`.

### Photography, motion and inner pages — 2 October (feedback round 2)

**Photos.** 22 Getty Images preview files supplied by Eric (509 × 339 px) replace the generated photos on the homepage, section pages, competitions, workshops and gallery. They live in `public/images/2026/getty-preview/<Getty ID>.webp` and are placeholders for layout review: they are unlicensed comps and too small for retina. Eric explicitly requested publishing the current public demo with these existing images on 2 October. Swap each file for the licensed original under the same name before final production release. The homepage index stage uses 4:3 instead of the earlier 4:5 portrait because of the source size; with hi-res files it can return to portrait (`.home-index__stage` aspect-ratio). Relay and Wing Chun remain generated images because the gallery captions describe them. `12.jpg` (Kai Tak Youth Sports Ground main stand, 2560 × 1440) became `public/images/2026/venue/kai-tak-youth-sports-ground.webp` (1920 px) and is the homepage venue photo. Three supplied photos are unused (salad bowl, night carousel, pizza).

| Slot | Getty ID |
| --- | --- |
| Hero | 640761067, 2154071156, 1362311403, 1357673126, 1430939966 |
| Statement floats | 1275872864, 1225403728, 2162734587, 1371234941 |
| Programme index / registry | sprint 1372077133, yoga 1223943716, games 1465760652, community 1368138956, fitness 1279640595, refreshments 1299543305, team 1275872985, family 640761067 |
| Photo strip | 1413208884, 1415909275, 1319818077, 1254581580, 925159158, 2162734585 |
| Section headers | reuse the above; see `headPhotos` in `EventPages.js` |

**Motion.** `src/components/motion.js` holds two helpers. `Reveal` makes an element rise from below the first time it scrolls into view (content already on screen at load stays put; nothing is hidden without JS). `usePointerParallax` moves `[data-depth]` children with the pointer, with a slow CSS drift on the images inside. The homepage hero and statement, and the inner-page header photos, use it. Both are disabled for `prefers-reduced-motion`; pointer parallax is also off on touch.

**Inner pages.** One template now: a left-aligned light title with the parent section as eyebrow and up to two floating photos (`InnerHead` takes `photos`); content sections split into a sticky title on the left and content on the right with a hairline between (`Section`); competitions are rows (description left, facts right) with a sticky text sub-navigation; workshop cards, booth options, the session list and the group-score table use hairlines instead of tinted boxes; the Overview and Activities cards are a simple photo grid (`Cards`). Weights follow the homepage: Regular for display and headings. Header navigation links are Regular too.

### Homepage polish — 2 October (feedback round 3)

- Circular arrow buttons no longer grow on hover; the disc turns red (navy on the red closing band). The two venue links have a 72 px gap and cannot shrink into each other.
- The photo strip has no captions. Over its outer sixth the pointer becomes a red circle with an arrow; clicking there scrolls that way. The two arrow buttons are now keyboard-only (visible on focus). Touch devices swipe as before.
- Hero lettering is smaller (max 104 px, `min(6.2vw, 11svh)`) and the five hero photos are larger (14–21 vw).
- Motion is gentler: pointer parallax travels roughly half as far and follows more slowly, the idle drift is ±4–5 px over 9–13 s, scroll reveals rise 28 px over about 1.3 s, entrance animations rise 24–36 px, and the strip drifts at 25 px/s.

### Homepage polish — 2 October (feedback round 4)

- Page scrolling is eased with Lenis (`lenis` dependency, started in `src/app/(pages)/layout.js`; off for `prefers-reduced-motion`).
- The photo strip is a plain endless loop: no pause, edge cursor or arrows, no user control.
- Pointer parallax on the hero, statement and inner-page photos is roughly halved again.
- Language toggle reads "繁中" / "EN" as plain text without a border box. Hairline above the "The event" row removed; the What's on list now aligns with its photo and has equal-width rules.
