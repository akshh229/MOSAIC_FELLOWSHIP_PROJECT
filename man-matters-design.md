# Man Matters Next Step — Design Requirements

## Document purpose

This document defines the visual, interaction, responsive, content, accessibility, privacy and safety requirements for **Man Matters Next Step**: an independent fellowship prototype that helps an adult Man Matters customer organize a post-purchase concern, prepare a useful question and identify an existing support route.

The direction adapts the reference portfolio’s editorial scale, product-led storytelling, large rounded cards, contrasting sections and polished motion into a calm wellness-support product. It must not reproduce the reference creator’s identity, copy, project art, assets or exact page composition.

> **Required qualifier:** Independent fellowship prototype. Not official Man Matters support or medical advice.

## Product definition

### Working name

**Man Matters Next Step**

### Value proposition

**Prepare your concern. Find a clear next step.**

### Primary user

An adult Man Matters customer who has a real post-purchase question after an earlier answer was incomplete, unavailable or difficult to act on.

### Core outcome

The user should leave with:

- A concise, editable factual summary.
- A clearly written question.
- A reviewed existing support or guidance route.
- Control over copying, printing, downloading or clearing the summary.

### Product principles

1. **Calm before clever:** reduce cognitive load and avoid alarming visual language.
2. **Product before pitch:** show the real workflow early instead of relying only on marketing copy.
3. **Editorial, not clinical:** use warm materials, generous typography and intentional whitespace.
4. **Structured, not authoritative:** organize facts without pretending to evaluate them medically.
5. **Transparent:** show source links, review dates, privacy behavior and product limitations.
6. **Private by default:** use in-memory session data for the MVP; do not silently persist free text.
7. **Accessible:** keyboard, screen-reader, zoom and reduced-motion use are first-class requirements.

## MVP scope

### Required capabilities

- Guided concern form.
- Concern-category selection.
- Product name and approximate timeline capture.
- Factual description and previous-action capture.
- Field for the exact question the user wants answered.
- Fixed, reviewed support-routing rules.
- Route cards with source and last-reviewed date.
- Editable generated summary.
- Copy, print and explicit optional text download.
- Optional manually recorded follow-up status.
- Clear-session action.
- Fictional demo mode.

### Explicit exclusions

Do not design, build or imply:

- AI diagnosis or symptom interpretation.
- Photo-based hair or scalp scoring.
- Medication, dosage or treatment changes.
- Personalized product recommendations.
- Statements that a symptom is routine, harmless or safe.
- Fabricated doctor or support responses.
- Automatic complaint submission.
- Order-system integrations.
- Delivery resolution or refund eligibility decisions.
- Adherence streaks or routine reminders.
- Guaranteed callbacks, response times or outcomes.
- Collection of a full name, phone number, prescription image or scalp photograph.

## Brand personality

| Trait | Expression | Avoid |
|---|---|---|
| Calm | Warm neutrals, slow pacing, plain language | Alarmist red surfaces |
| Capable | Precise labels and obvious next actions | Busy dashboards |
| Human | Editorial typography and considerate copy | Robotic language |
| Transparent | Source dates and visible limitations | Hidden assumptions |
| Premium | Strong art direction and restrained motion | Excessive glass effects |
| Independent | Repeated prototype qualifier | Official-brand impersonation |

## Visual direction

### Aesthetic

- Warm editorial wellness design.
- Large asymmetric compositions with generous whitespace.
- Alternating warm-light and deep-green sections.
- Oversized rounded canvases containing actual product UI.
- Soft tonal gradients instead of saturated neon.
- Fine borders and paper-like shadows.
- Sparse line illustrations based on pathways, notes and conversation.
- Product screens as the main storytelling device.

### Reference translation

| Reference pattern | Next Step adaptation |
|---|---|
| Bold portfolio hero | Clear product proposition and live summary preview |
| Product/project rail | Concern-category rail |
| Selected-work cards | Workflow and use-case cards |
| Project-specific palettes | Concern-category pastel palettes |
| Social metrics | Privacy and transparency statements |
| Product portfolio grid | Guided-form feature showcase |
| Numbered process | Describe, review, choose next route |
| Service cards | Privacy, safety and control cards |
| Creator story | Explanation of the support-preparation gap |
| Project-inquiry CTA | Prepare my question CTA |

## Colour system

These are project tokens, not extracted claims about the reference site’s exact CSS.

### Core tokens

| Token | Value | Use |
|---|---:|---|
| `canvas` | `#F5F1E8` | Primary warm background |
| `canvas-soft` | `#FBF8F2` | Alternate light section |
| `surface` | `#FFFFFF` | Form and primary cards |
| `surface-sage` | `#E8F0EA` | Calm explanatory cards |
| `surface-sand` | `#EFE2C8` | Process and context cards |
| `surface-blue` | `#E5EEF3` | Information and link cards |
| `ink` | `#18201C` | Primary text |
| `ink-muted` | `#5F6862` | Secondary text |
| `forest` | `#214A3B` | Main action and dark section |
| `forest-hover` | `#18372C` | Main-action hover |
| `sage` | `#769383` | Supporting accent |
| `gold` | `#D5AE5E` | Sparse warm highlight |
| `line` | `#D8D7CF` | Borders and dividers |
| `focus` | `#1769AA` | Keyboard focus ring |
| `info` | `#2F6684` | Information state |
| `warning` | `#9A641C` | Warning text and border |
| `warning-bg` | `#FFF2D6` | Warning background |
| `danger` | `#A83F3B` | Error/destructive action |
| `danger-bg` | `#FCE8E6` | Error surface |
| `success` | `#2E6A4F` | Copy/download success |

### Category accents

| Category | Background | Accent |
|---|---|---|
| Product question | `#E8F0EA` | `#39634F` |
| Delivery | `#E5EEF3` | `#35677E` |
| Packaging | `#EFE2C8` | `#8A6331` |
| Consultation/support | `#E9E6F3` | `#66598A` |
| Other | `#EEEDE8` | `#60655F` |

### Colour rules

- Normal text must meet at least 4.5:1 contrast.
- Large text may use 3:1 where WCAG permits.
- Meaningful icons, input boundaries and focus indicators must meet at least 3:1.
- Never communicate validity, category, warning or completion through color alone.
- Pastel surfaces are backgrounds only; text uses tested dark tokens.

## Typography

### Font roles

| Role | Recommended | Fallback | Purpose |
|---|---|---|---|
| Display serif | Instrument Serif or DM Serif Display | Georgia, serif | Selective emotional phrases |
| UI sans | Manrope or Inter | system-ui, sans-serif | Body, navigation and forms |
| Mono | IBM Plex Mono | ui-monospace, monospace | Step numbers and metadata |

Use open-source or properly licensed fonts. Do not copy a proprietary reference font.

### Type scale

| Style | Desktop | Mobile | Weight / line height |
|---|---:|---:|---|
| Display XL | `clamp(3.75rem, 7vw, 7.25rem)` | `clamp(2.75rem, 13vw, 4.25rem)` | 500 / 0.94 |
| H1 | `clamp(3rem, 5.4vw, 5.75rem)` | `2.75rem–3.75rem` | 520 / 0.98 |
| H2 | `clamp(2.25rem, 4vw, 4rem)` | `2rem–2.75rem` | 520 / 1.02 |
| H3 | `1.5rem–2rem` | `1.35rem–1.65rem` | 600 / 1.15 |
| Lead | `1.25rem–1.5rem` | `1.125rem–1.25rem` | 430 / 1.5 |
| Body | `1rem–1.125rem` | `1rem` | 430 / 1.6 |
| UI label | `0.875rem–1rem` | `0.875rem–1rem` | 600 / 1.35 |
| Eyebrow | `0.75rem` | `0.75rem` | 600 / 1.2 |

### Type rules

- Use serif emphasis for one phrase or line, not entire forms.
- Limit reading copy to roughly 60–70 characters per line.
- Use sentence case.
- Keep labels permanently visible above inputs.
- Never use a placeholder as the only label.
- Use tabular numerals for dates and steps.

## Layout system

### Containers

- Marketing max width: `1440px`.
- Reading width: `760px`.
- Form width: `720px`.
- Summary workspace: `1200px`.
- Desktop page padding: `clamp(32px, 5vw, 80px)`.
- Tablet padding: `32px`.
- Mobile padding: `20px`.

### Grid

- Desktop: 12 columns, 24px gutters.
- Tablet: 8 columns, 20px gutters.
- Mobile: 4 columns, 16px gutters.

### Spacing

Use `4, 8, 12, 16, 24, 32, 48, 64, 80, 112, 144px`.

- Marketing sections: 112–144px vertical padding desktop.
- Tablet sections: 72–96px.
- Mobile sections: 56–72px.
- Form groups: 32–48px separation.
- Cards: 24–40px desktop padding and 20–24px mobile padding.

## Shape and depth

### Radius

| Token | Value | Use |
|---|---:|---|
| `radius-sm` | `10px` | Inputs and compact controls |
| `radius-md` | `16px` | Notices and route cards |
| `radius-lg` | `24px` | Standard cards |
| `radius-xl` | `32px` | Hero/product canvases |
| `radius-pill` | `999px` | Buttons and chips |

### Borders

- Standard: `1px solid #D8D7CF`.
- Strong interactive: `1px solid #9AA79F`.
- Selected card: 2px forest border plus check icon.

### Shadows

```css
--shadow-soft: 0 12px 40px rgba(24, 32, 28, 0.08);
--shadow-card: 0 4px 16px rgba(24, 32, 28, 0.06);
--shadow-lift: 0 18px 54px rgba(24, 32, 28, 0.14);
```

## Information architecture

| Route | Purpose |
|---|---|
| `/` | Marketing and product explanation |
| `/prepare` | Guided workflow |
| `/summary` | Editable output and route recommendation |
| `/privacy` | Plain-language privacy behavior |
| `/safety` | Safety scope and medical boundary |
| `/about` | Prototype context and independent status |

The MVP may implement preparation and summary as states on one route if refresh and data-loss behavior are clearly communicated.

## Landing page

### Navigation

Content:

- Wordmark: `Next Step`.
- Qualifier: `Independent fellowship prototype`.
- Links: How it works, Privacy, Safety, FAQ.
- CTA: `Prepare my question`.

Design:

- Floating rounded shell on desktop.
- Warm translucent surface with light blur only if contrast remains sufficient.
- Compact mobile header and accessible menu sheet.
- Sticky after hero scroll; must never cover focused content.

### Hero

Content:

- Eyebrow: `Customer guidance after purchase`.
- H1: `Turn an unresolved concern into a clear next step.`
- Supporting copy explaining fact organization and question preparation.
- Primary CTA: `Prepare my question`.
- Secondary CTA: `See how it works`.
- Qualifier: `Not official support or medical advice.`

Composition:

- Desktop left: statement and actions.
- Desktop right: interactive summary preview in a soft-green canvas.
- Floating chips: `Your words`, `Editable`, `Not sent automatically`.
- Curved line linking concern inputs to the output.
- Mobile: headline, preview, actions and qualifier in one column.

Motion:

- Headline lines reveal upward with a 60ms stagger.
- Product canvas fades and rises 24px.
- Summary rows appear once and stay static.
- No continuous motion except an optional very slow background gradient drift.

### Transparency strip

Show:

- `Your wording stays editable`.
- `Nothing is sent automatically`.
- `Guidance links show source and review date`.

Use a horizontal desktop strip and a stacked mobile list.

### Problem narrative

- Large editorial statement: `When the answer is unclear, the next message should not be.`
- Explain that the preparation gap is a hypothesis under validation.
- Add a split card: `What this tool can change` and `What it cannot change`.
- Do not claim the product fixes staffing, delivery, product quality or treatment results.

### Three-step process

1. **Describe what happened** — product, dates, facts and previous actions.
2. **Review your summary** — edit every sentence.
3. **Choose a next route** — open a reviewed existing support or guidance link.

Each card includes a mono step number, pastel surface, simple illustration, one-sentence outcome and optional short product micro-demo with pause control.

### Product walkthrough

- Dark-forest cinematic section.
- Desktop form on left and live summary on right.
- Sticky preview while example steps change.
- Category tabs update a fictional example.
- Persistent `Fictional example` badge.
- Cream text and white product cards.
- No real customer information.

### Category cards

Categories:

- Product or usage question.
- Delivery concern.
- Packaging or quantity concern.
- Consultation or support follow-up.
- Something else.

Each card has an icon, plain-language example, information checklist and contextual disclaimer. Use a 3+2 editorial desktop grid and a full visible stack on mobile.

### Privacy section

Required messages:

- Information stays in the current session in the MVP.
- Refreshing or closing can clear the draft.
- Nothing is sent automatically.
- Browser storage is not enabled by default.
- Do not enter a full name, phone number, prescription image or scalp photo.
- Free-text analytics are not used.

### Safety section

- Use a warm amber notice, not an alarming red banner.
- Heading: `This tool organizes questions. It does not answer medical questions.`
- Health questions route to a qualified professional.
- Add concise urgent-situation wording only after professional review.
- Link to the full Safety page.
- Never hide the main safety boundary in an accordion.

### FAQ

Questions:

- Is this official Man Matters support?
- Does this tool provide medical advice?
- Is my information stored?
- Does it contact support for me?
- What can I include in the summary?
- What should I avoid entering?
- What if I feel seriously unwell?
- How are support links selected?
- Can I edit the generated summary?
- What happens when I close the page?

Accordion triggers use buttons with `aria-expanded`. Content must remain keyboard and screen-reader accessible.

### Final CTA

- Deep-green full-width section.
- Heading: `Leave with a clearer question, not another open tab.`
- CTA: `Prepare my question`.
- Optional design target: `About 3–5 minutes. No account required.` Do not claim this as measured until tested.
- Repeat privacy and independent-prototype qualifiers.

### Footer

- Next Step wordmark.
- Independent-prototype qualifier.
- Privacy, Safety and About links.
- Clear-session action when applicable.
- Creator credit: `Designed and built by Akshat Raj`.

## Guided workflow

### Application shell

- Top bar: Back, product name, session-privacy status and Exit.
- Progress: `Step X of 6` plus horizontal indicator.
- Main card centered in a 720px column.
- Optional live summary rail on desktop after Step 2.
- Sticky Back/Continue action bar on mobile.
- Exit confirmation explains data loss.

### Introduction

- Explain purpose.
- Show `Not official support` and `Not medical advice` notices.
- Explain session-only data handling.
- Required checkbox: `I understand this tool prepares a summary and does not provide a diagnosis.`
- CTA: `Start`.

### Step 1 — concern category

Use large selectable cards with icon, label, example, visible check and border.

- Product or usage question.
- Delivery or order concern.
- Packaging or quantity concern.
- Consultation or support follow-up.
- Other.

For a health-related selection, display: `This tool will prepare a question for professional review; it will not interpret your concern.`

### Step 2 — product and timing

Fields:

- `What is the exact product name?` Optional if unknown.
- `When did you start using or order it?` Approximate date accepted.
- `When did you first notice the issue or question?` Approximate date accepted.

Use helper text: `Write “Not sure” if you do not know.` Do not require an order number in the public MVP.

### Step 3 — what happened

Fields:

- `Describe only what you observed.`
- `What did you expect instead?` Optional.
- Category-specific factual prompts.

Rules:

- Use a helpful character guide, not a punitive countdown.
- Avoid leading language such as `What did the product cause?`
- Do not autocomplete medical conclusions.

### Step 4 — previous actions

Options:

- Read product instructions.
- Used app chat.
- Called support.
- Requested a consultation.
- Checked order tracking.
- Reviewed cancellation/replacement information.
- Asked elsewhere.
- No action yet.
- Other.

Optional field: `What happened after that?`

### Step 5 — question to ask

Prompt: `What single question would you most like answered?`

Neutral structure:

> I used or ordered [product] around [date]. I noticed [fact]. I already tried [action]. Could you clarify [question]?

Preserve user wording. Do not transform the question into treatment advice, diagnosis or a legal complaint.

### Step 6 — route suggestion

Routes must come from fixed, reviewed rules rather than a generative model.

Each route card includes:

- Route name.
- Best use case.
- What information to prepare.
- Official source URL.
- Last-reviewed date.
- `Open official page` action.
- `Opening a route does not guarantee a response or outcome.`

If uncertain, show `Review options`, not a definitive recommendation.

## Summary screen

### Layout

- Desktop: editable summary left and route card right.
- Mobile: summary first, route second and sticky action area.
- Status: `Your draft is ready to review`.
- Every generated sentence remains editable.

### Summary structure

1. Concern type.
2. Product or order context.
3. Relevant dates.
4. What happened.
5. Actions already taken.
6. Exact question.
7. Selected route.

### Actions

- Primary: `Copy summary`.
- Secondary: `Print`.
- Secondary: `Download text`.
- Tertiary: `Edit answers`.
- Destructive: `Clear everything` with confirmation.

Do not include `Send to Man Matters` in the MVP.

### Follow-up status

Optional values:

- Not contacted yet.
- Contact attempted.
- Waiting for response.
- Question answered.
- Need another route.

Always show: `Recorded only in this session; not synchronized with Man Matters.`

## Components

### Buttons

| Variant | Appearance | Use |
|---|---|---|
| Primary | Forest pill, cream text | Progression and final CTA |
| Secondary | White/transparent with strong border | Print and download |
| Tertiary | Text with arrow | Learn more and edit |
| Destructive | Pale red or white with danger text | Clear session |
| Icon | Prefer 44px square target | Close, copy, utility actions |

Support default, hover, active, focus-visible, disabled and loading states.

### Inputs

- 52–56px minimum height for single-line controls.
- White or warm background.
- Persistent labels.
- Helper text below fields.
- 2px visible focus ring.
- Error icon, border and specific text.
- Avoid validation while typing unless immediately useful.
- Use `fieldset` and `legend` for groups.

### Card types

- **Feature card:** pastel field, large icon/UI crop, concise title.
- **Route card:** white, strong border, source metadata and review date.
- **Safety card:** amber background and direct boundary statement.
- **Summary card:** paper-like white surface with ruled dividers.
- **Transparency card:** icon, one declaration and supporting detail.

### Chips

Use only for compact metadata such as `Editable`, `Session only`, `Official link` and `Fictional example`.

### Toasts

- Bottom center desktop; above sticky actions on mobile.
- `role="status"` for noncritical success.
- Do not rely only on a toast; update the source button state too.
- Allow at least four seconds before dismissal.

### Modals

Use only for destructive confirmation, exit with unsaved data or essential safety interruption. Trap focus, provide a labelled title, handle Escape appropriately and return focus to the invoking control.

## Motion system

### Timing

| Motion | Duration | Easing |
|---|---:|---|
| Hover/press | 120–180ms | `ease-out` |
| Field feedback | 180–220ms | `ease-out` |
| Card reveal | 350–500ms | `cubic-bezier(0.22,1,0.36,1)` |
| Step transition | 280–420ms | `cubic-bezier(0.22,1,0.36,1)` |
| Hero reveal | 600–850ms | `cubic-bezier(0.16,1,0.3,1)` |
| Modal/sheet | 220–320ms | `ease-out` |

### Allowed motion

- Fade plus 12–24px vertical reveal.
- Staggered hero typography.
- Card lift of 2–4px on hover.
- Selection check animation.
- Progress interpolation.
- Crossfade between fictional examples.
- Summary-line reveal after completion.
- Compact copy success animation.
- Slow decorative gradient drift.

### Prohibited motion

- Infinite marquees.
- Scroll hijacking.
- Large parallax behind text.
- Rapid scaling.
- Bouncing safety notices.
- Auto-advancing steps.
- Typewriter animation for user health text.
- Motion suggesting medical analysis.

### Reduced motion

With `prefers-reduced-motion: reduce`:

- Replace spatial transitions with short opacity changes or immediate states.
- Remove parallax, drift, stagger and animated progress movement.
- Retain only motion required to explain state.
- Never disable focus or status feedback.

## Responsive requirements

### Desktop: 1200px+

- 12-column grid.
- Hero split around 5/7.
- Form and summary may be side by side.
- Product walkthrough may use sticky panels.
- Full navigation visible.
- Asymmetric feature cards can span 5–8 columns.

### Tablet: 768–1199px

- 8-column grid.
- Hero stacks below roughly 960px.
- Sticky preview becomes static if viewport height is limited.
- Feature cards use two columns.
- Navigation collapses.

### Mobile: below 768px

- Single-column content.
- Preserve visual quality through typography and surfaces, not off-screen elements.
- Full-width forms.
- Sticky action area with safe-area padding.
- Summary follows current question.
- Categories remain visible in a vertical list.
- No horizontal scroll at 320px.
- DOM order follows reading order.

### Short viewports

- Do not force full-screen sections.
- Sticky areas cannot cover focused controls or errors.
- Modals become scrollable sheets with visible close controls.

## Accessibility

Target **WCAG 2.2 AA**.

- Visible and programmatically associated labels for every control.
- `fieldset` and `legend` for grouped options.
- Full keyboard operation.
- Logical DOM and focus order.
- Text-based, field-linked errors.
- Focus moves to an error summary or first invalid field after failed continuation.
- Visible, unobscured focus indicators.
- Prefer 44×44px targets for major controls.
- Accessible names for interactive icons.
- Decorative icons hidden from assistive technology.
- Accordions expose expanded/collapsed state.
- Status updates use restrained live regions.
- Support 200% zoom and 320px reflow.
- Never rely on color, shape, location or motion alone.
- Print/download output retains headings and disclaimer.

## Content design

### Voice

- Direct, calm and nonjudgmental.
- Use `you` and concrete verbs.
- Prefer `What happened?` to clinical terminology.
- Accept uncertainty and approximate dates.
- Separate observations from interpretations.
- Avoid medical reassurance and blame.

### Language rules

| Use | Avoid |
|---|---|
| Prepare a question | Get an answer |
| Suggested next route | Correct department |
| What did you observe? | What did the product cause? |
| Approximate date is fine | Exact date required |
| Open official page | Contact us |
| Not sent automatically | Submitted |
| Question for a professional | AI assessment |
| Clear this session | Delete medical record |

### Disclaimer hierarchy

1. Always-visible independent/nonmedical qualifier.
2. Contextual notice before health-related free text.
3. Disclaimer inside copied, printed and downloaded output.
4. Full Safety page.

## Illustration and imagery

### Illustration system

- Monoline illustrations with rounded endpoints.
- Paths, notes, cards, speech bubbles, parcels and checkmarks.
- Forest ink on pastel fields with one warm accent.
- Slight handcrafted irregularity is acceptable.
- Illustrations explain preparation, editing, routing and control.

### Avoid

- Before-and-after hair imagery.
- Clinical scalp photographs.
- Doctor stock photography implying endorsement.
- Efficacy charts or unverified testimonials.
- Anxiety-inducing error art.
- Copied reference-site imagery.

### UI mockups

- Use fictional information.
- Show `Fictional example` clearly.
- Never show real customer data.

## Privacy-by-design

- Show `Session only` near the workflow header.
- Explain the meaning in plain language.
- Make `Clear everything` available at every step.
- Do not use local storage by default.
- Do not send free text to analytics, logs, session replay or error-monitoring payloads.
- Explain that downloaded files remain on the user’s device.
- Any future persistence requires a fresh consent, retention, access and deletion design.

## States

### Empty

- Summary: `Your summary will build here as you answer.`
- Route: `A reviewed route will appear after you choose a concern type.`

### Loading

- Most MVP actions should be immediate and local.
- If route content loads remotely, use a subtle skeleton briefly.
- Provide text status for longer waits.
- Never imply medical analysis.

### Validation error

- Specific inline message.
- Icon and text in addition to color.
- Preserve entered data.
- Focus an error summary when multiple fields fail.

### Guidance unavailable

Show: `This route could not be loaded. Your summary is still available.` Keep copy and print actions. Do not invent fallback contact information.

### Stale source

- Mark `Needs review`.
- Disable an unverified destination.
- Never show an unverified response-time promise.

## Print and download

### Print

- White background and black text.
- Remove navigation, decoration and motion.
- Include title, creation date, summary, selected route, source URL, review date and disclaimer.
- Support A4 and US Letter.
- Avoid orphaned headings and clipped content.

### Text file

```text
MAN MATTERS NEXT STEP — PREPARED QUESTION
Independent fellowship prototype; not official support or medical advice.

Concern type:
Product/context:
Relevant dates:
What happened:
Actions already taken:
Question:
Suggested route:
Source:
Last reviewed:

This summary was reviewed by the user and was not sent automatically.
```

## Performance

- Prefer static/server-rendered marketing content.
- Load workflow JavaScript only where required.
- Use SVG/CSS for line art.
- No autoplay video in the initial viewport.
- Responsive images with reserved dimensions.
- Lazy-load below-fold media.
- Include only used font weights.
- Product remains usable if decorative motion fails.

### Build targets

- Aim below 180KB compressed initial JavaScript for the landing route.
- Local interactions should respond in under 100ms.
- Aim below 350KB for each responsive hero-media variant.
- No blocking third-party scripts.
- No session replay on free-text workflow pages.

## Analytics

### Permitted

- Landing CTA selected.
- Workflow started.
- Step number completed.
- Approved aggregate category ID.
- Summary copied, printed or downloaded.
- Route ID opened.
- Workflow reset.

### Prohibited

- Product name text.
- Free-text concern description.
- User question.
- Dates entered.
- Generated summary.
- Names, phone numbers or images.

## Validation design

The product concept remains provisional until genuine customer interviews and workflow inspection support the preparation/routing gap.

### Prototype modes

- **Public demo:** fictional data only.
- **Facilitated test:** fictional scenario before any real detail.
- **Research build:** log only completion and errors, not free text.

### Test tasks

1. Prepare a fictional product concern.
2. Correct an approximate date.
3. Add a previous support attempt.
4. Edit the generated question.
5. Identify the product’s independent and nonmedical status.
6. Open the relevant route.
7. Copy or print the summary.
8. Clear the session.

### Design gates

- Target at least 4 of 5 formative participants producing a complete useful summary without prompting; treat this as a design gate, not statistical proof.
- Every participant must understand that the tool neither diagnoses nor automatically submits.
- Any unsafe routing result blocks release.
- Compare the prototype with a plain notes template before expanding it.

## Screen inventory

| ID | Screen | Priority |
|---|---|---|
| M01 | Marketing home | P0 |
| M02 | Mobile navigation | P0 |
| P00 | Workflow introduction | P0 |
| P01 | Concern category | P0 |
| P02 | Product and timing | P0 |
| P03 | What happened | P0 |
| P04 | Previous actions | P0 |
| P05 | Desired question | P0 |
| P06 | Route suggestion | P0 |
| S01 | Editable summary | P0 |
| S02 | Print layout | P0 |
| S03 | Clear confirmation | P0 |
| I01 | Privacy | P0 |
| I02 | Safety | P0 |
| I03 | About | P1 |
| F01 | Follow-up status | P1 |
| E01 | Guidance unavailable | P0 |
| E02 | Validation errors | P0 |
| E03 | 404 | P1 |

## Design deliverables

1. Moodboard translating the reference aesthetic into calm wellness support.
2. Colour, typography, spacing, radius, shadow and motion tokens.
3. Desktop and mobile landing designs.
4. Six-step workflow at desktop and mobile widths.
5. Summary, print and download states.
6. Component library with all interaction states.
7. Privacy and Safety pages.
8. Fictional example data set.
9. Clickable prototype with reduced-motion variant.
10. Accessibility annotations and keyboard order.
11. Breakpoint specifications for 320, 390, 768, 1024 and 1440px.
12. Usability-test script and findings template.

## Acceptance criteria

### Visual

- Consistent warm editorial aesthetic.
- Product UI appears in or directly after the hero.
- At least one dark cinematic product section.
- Category accents are coherent and never the only signal.
- No copied content, identity, assets or project imagery.

### Functional

- Complete journey without an account.
- Unknown information is accepted.
- Back navigation preserves input.
- Every generated sentence is editable.
- Route cards show source and review date.
- Copy, print and explicit download work.
- Nothing sends automatically.
- Clear-session behavior is visible and confirmed.

### Safety and privacy

- Independent and nonmedical status appears before data entry and in output.
- No diagnosis, dose, treatment change, prediction or reassurance is generated.
- No full name, phone number, prescription image or scalp photo is requested.
- Free text never reaches analytics or logs.
- Persistence is off by default.
- Health-facing safety copy receives professional review before real-user testing.

### Accessibility

- WCAG 2.2 AA contrast and focus checks pass.
- Entire journey is keyboard operable.
- Labels remain visible and connected.
- Errors are specific, announced and recoverable.
- 200% zoom and 320px reflow pass.
- Reduced-motion removes nonessential movement.
- Print output remains readable and ordered.

## Build sequence

### Phase 1 — foundation

- Confirm name and independent-status language.
- Confirm route catalogue and review dates.
- Approve safety copy.
- Create tokens and core components.
- Build fictional examples.

### Phase 2 — workflow

- Implement introduction and six steps.
- Add in-memory state.
- Implement validation and keyboard behavior.
- Build editable summary and route cards.

### Phase 3 — storytelling

- Build hero, process, walkthrough, privacy, safety and FAQ.
- Add restrained motion and reduced-motion handling.
- Complete responsive layouts.

### Phase 4 — output and QA

- Add copy, print, text download and clear actions.
- Test keyboard, screen reader, zoom and reflow.
- Verify no free text reaches logs or analytics.
- Verify route links and review dates.

### Phase 5 — validation

- Test fictional scenarios first.
- Complete genuine customer interviews before claiming validated need.
- Compare with a notes template.
- Revise or abandon the standalone tool if the current signed-in support journey already solves preparation and routing.

## Handoff rules

- Treat the reference as inspiration for editorial scale, product storytelling, expressive cards, section contrast and motion—not as a pixel-perfect template.
- Keep this product calmer, safer and more task-oriented than a creator portfolio.
- Maintain support links, policies and dates in a reviewed content catalogue.
- Use fictional data in public screenshots.
- Do not collect real health-related data until privacy, safety and professional-review requirements are satisfied.
