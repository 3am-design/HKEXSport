# 2026 website structure

The existing 2025 blue/red palette, FSElliot Pro typeface, staggered image cards and bilingual navigation remain the visual foundation. Use HTML/CSS in this project for review and iteration. The temporary hero uses a text-free 2025 illustration with a visible demo label.

| Page                    | URL                                         | Current state                                                |
| ----------------------- | ------------------------------------------- | ------------------------------------------------------------ |
| Home                    | `/`                                         | Demo KV, countdown, event introduction, activity links       |
| About the event         | `/event-overview/`                          | Dedicated 2026 event introduction                            |
| Schedule and grouping   | `/event-overview/schedule/`                 | Editable draft programme; grouping pending                   |
| Venue                   | `/event-overview/venue/`                    | Venue and refreshments; new map and transport pending        |
| Adverse weather         | `/event-overview/adverse-weather/`          | Approved arrangements pending                                |
| Competitions            | `/competitions/`                            | Provisional individual, family and team sections             |
| Results                 | `/competitions/results/`                    | Demo filters by event, category and round                    |
| Activities and wellness | `/workshops-and-booths/`                    | Activity overview                                            |
| Community               | `/workshops-and-booths/community/`          | Draft introduction; partners pending                         |
| Workshops               | `/workshops-and-booths/workshops/`          | Proposed options, final selection pending                    |
| Booths                  | `/workshops-and-booths/booths/`             | Proposed game line-up                                        |
| Fitness assessment      | `/workshops-and-booths/fitness-assessment/` | Dedicated page; assessment details pending                   |
| Workshop status         | `/workshop-status/`                         | Demonstration of queues, called number and remaining tickets |
| Photo gallery           | `/gallery/`                                 | Single active tag filter and photo enlargement               |
| Website information     | `/terms-of-use/`                            | Preview explanation; final terms pending                     |

## Additional requirements received 2 October

- A separate event introduction page.
- Photo gallery with one active tag at a time. The All photos control resets the filter.
- A page showing queue and ticket status across workshops.
- Fewer final competition items, with more detailed result data. The current brief remains a provisional list until the organiser confirms the reduced selection.

## Content still to confirm

- Final desktop/mobile KV and 2026 brand lockup; current wordmark is a text placeholder.
- Final copy and Traditional Chinese translations.
- Competition selection, categories, rounds, eligibility, rules and scoring.
- The brief contains conflicting activity and closing-ceremony timings. Publish exact times only after confirmation.
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
5. Add CMS, live data and approved branding after the operating rules are agreed.
