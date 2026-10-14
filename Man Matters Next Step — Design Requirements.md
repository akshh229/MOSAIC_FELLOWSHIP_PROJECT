# Man Matters Next Step — Design Requirements

## Document purpose

This document defines the complete visual, interaction, content, responsive and accessibility requirements for **Man Matters Next Step**, an independent fellowship prototype that helps an adult Man Matters customer prepare a post-purchase question, identify an existing support route, and generate an editable concern summary. It translates the reference website’s editorial typography, product-led storytelling, large visual cards, section rhythm and restrained motion into a calm wellness-support product without copying its identity, project content or proprietary assets.[^1]

The product must identify itself as an **independent fellowship concept**, not official Man Matters support. It must organize user-provided facts without diagnosis, treatment advice, automated medical interpretation or a guarantee that support will respond.[^2]

## Experience principles

1. **Calm before clever.** The interface should lower cognitive load and make the next action obvious.
2. **Product before pitch.** Show the guided workflow and editable summary early, as the reference uses real product UI and interactive ideas to explain value.[^1]
3. **Editorial, not clinical.** Use generous typography, warm surfaces and deliberate spacing; avoid hospital-blue clichés and sterile dashboard styling.
4. **Structured, not authoritative.** The UI may organize facts and reviewed links, but must not look like it has assessed the user medically.
5. **Transparent at every step.** Clearly state what the tool does, what it does not do, where guidance comes from and when links were reviewed.
6. **Private by default.** Explain that MVP inputs remain in the current session and are not automatically sent or stored.
7. **Accessible without compromise.** All flows must work with keyboard, screen readers, zoom, high contrast and reduced motion.

## Intended users

### Primary user

An adult Man Matters customer who has a real post-purchase question after an earlier answer was incomplete, unavailable or difficult to act on. The user wants to assemble product details, dates, what happened, prior actions and a clear question before contacting an existing channel.[^2]

### User states

Design for users who may be:

- Unsure what information support needs.
- Frustrated after a failed or incomplete contact.
- Anxious about a product experience without knowing whether it is medically significant.
- Using a low-end mobile device or intermittent connection.
- Unwilling to create an account or store sensitive information.
- Returning only once to create a concise summary.

## Scope

### Required MVP capabilities

- Guided concern form.
- Concern categories with fixed, reviewed routing rules.
- Product name and approximate timeline capture.
- Factual description and previous-action capture.
- A field for the exact question the user wants answered.
- Existing support or guidance route cards with source and last-reviewed date.
- Editable generated summary.
- Copy, print and explicit optional download.
- Optional manually recorded follow-up status.
- Session reset and clear-data action.
- Clearly labelled fictional demo mode.

The source research defines the smallest useful gap as turning an unresolved concern into a concise factual summary and choosing an existing route. Automatic sending is outside the MVP; the customer must review and approve the summary.[^2]



design or imply:

- AI diagnosis or symptom interpretation.
- Photo-based hair or scalp scoring.
- Medication, dose or treatment changes.
- Personalized product recommendations.
- Statements that a symptom is routine, safe or harmless.
- Fabricated doctor or support responses.
- Automatic complaint submission.
- Order-system integration, delivery resolution or refund eligibility.
- Adherence streaks or routine reminders.
- Guaranteed callbacks, response times or outcomes.
- Full names, phone numbers, prescription images or scalp-photo collection in the MVP.

These exclusions preserve the project’s defined safety boundary and keep it focused on preparation and navigation rather than medical or operational decision-making.[^2]

## Brand positioning

### Working name

**Man Matters Next Step**

### Descriptor

**Prepare your concern. Find a clear next step.**

### Required qualifier

> Independent fellowship prototype. Not official Man Matters support or medical advice.

Display the qualifier in the navigation utility area, landing-page safety section, form introduction, summary output and footer. It must be readable and must not be hidden inside terms.

### Personality

| Trait | Expression | Avoid |
|---|---|---|
| Calm | Warm neutrals, steady pacing, plain language | Alarmist red surfaces |
| Capable | Clear hierarchy, precise labels, visible progress | Overly playful illustrations |
| Human | Editorial type, considerate microcopy | Robotic or legalistic copy |
| Transparent | Source dates, limitations, privacy state | Hidden assumptions |
| Premium | Strong art direction, large cards, refined motion | Excessive glassmorphism or gradients |
| Independent | Neutral co-branding and qualifier | Official-brand impersonation |

## Visual direction

### Reference translation

The reference website uses a strong opening proposition, product visuals, distinct feature or project stories, large editorial headings, compact metadata, repeated cards, process steps, FAQs and a high-intent closing CTA. For this product, translate those patterns as follows:[^1]

| Reference pattern | Next Step adaptation |
|---|---|
| Portfolio hero with product UI | Hero with live concern-summary preview |
| Recent-work rail | Concern-category selector rail |
| Selected-work cards | Workflow and use-case story cards |
| Project-specific art direction | Category-specific pastel surfaces |
| Social proof metrics | Research transparency and prototype status |
| Product portfolio grid | Guided form feature showcase |
| Three-step process | Describe, review, take next step |
| Pricing cards | Privacy, safety and control cards |
| Founder story | Why the preparation gap matters |
| Final project inquiry | Start preparing a question |

### Overall aesthetic

- Warm editorial wellness aesthetic.
- Large asymmetric compositions with substantial whitespace.
- Alternating warm-light and deep-green sections.
- Oversized rounded canvases containing actual product UI.
- Soft tonal gradients rather than saturated neon.
- Fine borders and low-elevation shadows.
- Sparse line illustrations inspired by pathways, notes and conversation—not hair follicles, medical diagrams or clinical instruments.
- Product screenshots treated as central storytelling objects, not decorative mockups.
- No copied graphics, typefaces, imagery, project thumbnails, wording or layout measurements from the reference.

## Colour system

The following values are implementation tokens for this project, not claims about the reference website’s exact CSS.

### Core palette

| Token | Value | Use |
|---|---:|---|
| `canvas` | `#F5F1E8` | Primary warm page background |
| `canvas-soft` | `#FBF8F2` | Alternate light section |
| `surface` | `#FFFFFF` | Forms and primary cards |
| `surface-sage` | `#E8F0EA` | Calm explanatory cards |
| `surface-sand` | `#EFE2C8` | Process and context cards |
| `surface-blue` | `#E5EEF3` | Information and official-link cards |
| `ink` | `#18201C` | Primary text |
| `ink-muted` | `#5F6862` | Secondary text |
| `forest` | `#214A3B` | Primary action and dark sections |
| `forest-hover` | `#18372C` | Primary action hover |
| `sage` | `#769383` | Supporting accent |
| `gold` | `#D5AE5E` | Warm highlight used sparingly |
| `line` | `#D8D7CF` | Borders and separators |
| `focus` | `#1769AA` | Keyboard focus ring |
| `info` | `#2F6684` | Informational iconography |
| `warning` | `#9A641C` | Caution text and border |
| `warning-bg` | `#FFF2D6` | Safety notice background |
| `danger` | `#A83F3B` | Errors and destructive action |
| `danger-bg` | `#FCE8E6` | Error background |
| `success` | `#2E6A4F` | Copy/download success |

### Category accents

| Concern type | Background | Accent | Icon treatment |
|---|---|---|---|
| Product question | `#E8F0EA` | `#39634F` | Bottle + question mark line icon |
| Delivery | `#E5EEF3` | `#35677E` | Parcel + route line icon |
| Packaging | `#EFE2C8` | `#8A6331` | Open package line icon |
| Consultation/support | `#E9E6F3` | `#66598A` | Conversation bubble icon |
| Other | `#EEEDE8` | `#60655F` | Note icon |

### Contrast requirements

- Normal text must meet at least 4.5:1 contrast; large text may use 3:1 where WCAG permits.
- Meaningful icons, input boundaries and focus indicators must reach at least 3:1 against adjacent colors.
- Never communicate category, validity, warning or completion with color alone.
- Pastel surfaces are backgrounds only; text must use `ink` or another tested dark token.

WCAG 2.2 defines requirements for perceivable focus and pointer targets; the final palette must be checked with automated and manual contrast testing.[^3]

## Typography

### Font roles

| Role | Recommended family | Fallback | Purpose |
|---|---|---|---|
| Display serif | `Instrument Serif` or `DM Serif Display` | Georgia, serif | Selective emotional words and section statements |
| UI sans | `Manrope` or `Inter` | system-ui, sans-serif | Navigation, body, forms and controls |
| Mono label | `IBM Plex Mono` | ui-monospace, monospace | Step numbers, source dates and compact metadata |

Use open-source fonts or properly licensed alternatives. Do not attempt to identify or copy a proprietary reference font.

### Type scale

| Style | Desktop | Mobile | Weight / line height |
|---|---:|---:|---|
| Display XL | `clamp(3.75rem, 7vw, 7.25rem)` | `clamp(2.75rem, 13vw, 4.25rem)` | 500 / 0.94 |
| H1 product | `clamp(3rem, 5.4vw, 5.75rem)` | `2.75rem–3.75rem` | 520 / 0.98 |
| H2 | `clamp(2.25rem, 4vw, 4rem)` | `2rem–2.75rem` | 520 / 1.02 |
| H3 | `1.5rem–2rem` | `1.35rem–1.65rem` | 600 / 1.15 |
| Lead | `1.25rem–1.5rem` | `1.125rem–1.25rem` | 430 / 1.5 |
| Body | `1rem–1.125rem` | `1rem` | 430 / 1.6 |
| UI label | `0.875rem–1rem` | `0.875rem–1rem` | 600 / 1.35 |
| Eyebrow | `0.75rem` | `0.75rem` | 600 / 1.2; tracking 0.08em |

### Typography rules

- Use serif accents for one phrase or line, not entire forms.
- Limit body copy to approximately 60–70 characters per line.
- Use sentence case; avoid all-caps paragraphs.
- Keep labels persistent above controls; placeholders must be examples, never replacements for labels.
- Use tabular numerals for step and date metadata.
- Underline text links on hover and focus; links in paragraphs should remain identifiable without color alone.

## Grid and spacing

### Containers

- Maximum marketing container: `1440px`.
- Reading container: `760px`.
- Form container: `720px`.
- Summary workspace: `1200px` split into input and preview columns.
- Desktop side padding: `clamp(32px, 5vw, 80px)`.
- Tablet side padding: `32px`.
- Mobile side padding: `20px`.

### Grid

- Desktop: 12 columns, 24px gutters.
- Tablet: 8 columns, 20px gutters.
- Mobile: 4 columns, 16px gutters.
- Major sections may intentionally break the reading column with a full-width product canvas.

### Spacing tokens

`4, 8, 12, 16, 24, 32, 48, 64, 80, 112, 144px`

- Marketing sections: 112–144px vertical padding desktop; 72–96px tablet; 56–72px mobile.
- Form steps: 32–48px between question groups.
- Cards: 24–40px padding desktop; 20–24px mobile.
- Keep dense UI only inside the product canvas; surrounding marketing layouts should breathe.

## Shape, border and depth

### Radius

| Token | Value | Use |
|---|---:|---|
| `radius-sm` | `10px` | Inputs, tags, compact controls |
| `radius-md` | `16px` | Notices and route cards |
| `radius-lg` | `24px` | Standard cards |
| `radius-xl` | `32px` | Hero and product canvases |
| `radius-pill` | `999px` | Buttons, filters and metadata chips |

### Borders

- Standard: `1px solid #D8D7CF`.
- Strong interactive: `1px solid #9AA79F`.
- Selected cards: 2px forest border plus subtle inner highlight.
- Dividers should be low contrast and used sparingly.

### Shadows

```css
--shadow-soft: 0 12px 40px rgba(24, 32, 28, 0.08);
--shadow-card: 0 4px 16px rgba(24, 32, 28, 0.06);
--shadow-lift: 0 18px 54px rgba(24, 32, 28, 0.14);
```

Avoid large black shadows. Elevation should feel like paper layered on a desk.

## Information architecture

### Routes

| Route | Purpose |
|---|---|
| `/` | Marketing and product explanation |
| `/prepare` | Guided concern workflow |
| `/summary` | Editable output and route recommendation |
| `/privacy` | Plain-language privacy behavior |
| `/safety` | Scope, medical boundary and urgent-care guidance |
| `/about` | Prototype context and independent status |

The MVP may implement `/prepare` and `/summary` as client-side states on one route, provided refresh behavior and data-loss expectations are clearly communicated.

## Landing page requirements

### Navigation

**Content**

- Wordmark: `Next Step`.
- Small qualifier: `Independent fellowship prototype`.
- Links: How it works, Privacy, Safety, FAQ.
- Primary CTA: `Prepare my question`.

**Design**

- Floating rounded navigation shell on desktop.
- Warm translucent surface with light blur only when contrast remains sufficient.
- On mobile, compact brand row and menu sheet.
- Sticky after the hero begins scrolling; never cover focused content.
- CTA remains visible but must not overpower the independent-status qualifier.

### Hero

**Content hierarchy**

- Eyebrow: `Customer guidance after purchase`.
- H1: `Turn an unresolved concern into a clear next step.`
- Supporting text: Explain that the tool helps organize facts and prepare a question for an existing support route.
- Primary CTA: `Prepare my question`.
- Secondary CTA: `See how it works`.
- Qualifier: `Not official support or medical advice.`

**Visual composition**

- Left: statement and actions.
- Right: oversized interactive summary mockup inside a soft-green product canvas.
- Include floating metadata chips such as `Your words`, `Editable`, `Not sent automatically`.
- Use a curved line connecting concern inputs to the summary, suggesting organization rather than medical analysis.
- On mobile, headline first, then preview, then CTA reinforcement.

**Hero animation**

- Headline lines reveal upward with 60ms stagger.
- Product canvas fades and rises 24px.
- Summary rows appear sequentially once, then remain static.
- No looping motion except an optional slow, subtle background gradient shift disabled under reduced motion.

### Trust strip

Replace portfolio metrics with three transparency statements:

- `Your wording stays editable`.
- `Nothing is sent automatically`.
- `Guidance links show their source and review date`.

Render as a desktop horizontal strip and mobile stacked list with simple line icons.

### Problem narrative

Use an editorial split section:

- Large serif-accent statement: `When the answer is unclear, the next message should not be.`
- Short paragraph explaining preparation and routing friction as a hypothesis being tested, not a universal claim.
- Side card titled `What this tool can change` versus `What it cannot change`.

Do not claim the application fixes staff availability, delivery execution, product quality or treatment outcomes.[^2]

### Three-step process

Use three large numbered cards, echoing the reference site’s numbered process section.[^1]

1. **Describe what happened** — product, dates, facts and previous actions.
2. **Review your summary** — edit every sentence before using it.
3. **Choose a next route** — open a reviewed existing support or guidance link.

Each card needs:

- Mono step number.
- Distinct pastel background.
- Simple illustration.
- One-sentence outcome.
- Optional 6–10 second product micro-demo with pause control.

### Product walkthrough

Create a dark-forest cinematic section containing the real product UI:

- Desktop split layout: form step on left, live summary on right.
- Sticky preview while the user scrolls through example questions.
- Category tabs update the fictional example.
- A visible `Fictional example` badge must remain present.
- Use high-contrast cream text and white cards.
- Do not insert real customer information.

### Concern category cards

Display five cards:

- Product question.
- Delivery concern.
- Packaging concern.
- Consultation or support.
- Something else.

Each card includes an icon, example, estimated information needed and a nonmedical disclaimer where relevant. Desktop uses a 3+2 editorial grid; mobile uses a vertical stack rather than a hidden carousel because selection must remain obvious.

### Privacy section

Use an oversized light canvas with a small UI illustration showing information appearing, being copied and then cleared.

Required messages:

- Information stays in the current session in the MVP.
- Refreshing or closing may clear the draft.
- No automatic submission.
- No default browser storage on shared devices.
- Do not enter full name, phone number, prescription image or scalp photograph.
- Free-text analytics are prohibited.

These data-handling constraints come directly from the proposed MVP specification.[^2]

### Safety section

Use a warm amber notice inside a calm, spacious section—not a red emergency banner.

Required hierarchy:

- `This tool organizes questions. It does not answer medical questions.`
- Health-related routes should encourage contacting a qualified professional.
- Include a concise urgent-situation message approved by a clinician before real-user testing.
- Link to the full Safety page.
- Never animate the warning or bury it inside an accordion.

### FAQ

Two-column heading/content composition with accessible accordions:

- Is this official Man Matters support?
- Does this tool give medical advice?
- Is my information stored?
- Does it contact support for me?
- What can I include in the summary?
- What should I avoid entering?
- What if I feel seriously unwell?
- How are support links selected?
- Can I change the generated summary?
- What happens when I close the page?

Accordion triggers must be buttons with `aria-expanded`; content must remain reachable with keyboard and screen readers.

### Final CTA

- Deep-green full-width section.
- Large heading: `Leave with a clearer question, not another open tab.`
- Primary CTA: `Prepare my question`.
- Supporting line: `About 3–5 minutes. No account required.` Use this only as an estimated design target until tested; do not present it as measured fact.
- Repeat independent-status and privacy qualifier.
- Decorative pathway line may converge into a single arrow near the CTA.

### Footer

- Next Step wordmark.
- Independent prototype qualifier.
- Privacy, Safety, About and Reset data.
- `Designed and built by Akshat Raj` may appear as creator credit.
- No copied contact details or creator language from the reference.

## Guided workflow

### Shell

- Top bar: Back, product name, privacy status and Exit.
- Progress: `Step X of 6` plus horizontal indicator.
- Main question card centered in a 720px column.
- Optional desktop live summary rail after Step 2.
- Bottom action area: Back and Continue; sticky on mobile with safe-area padding.
- Exit action opens a confirmation explaining whether current session data will be lost.

### Step 0 — introduction

**Goal:** Establish scope, privacy and safety before data entry.

Required elements:

- Brief description.
- `This is not medical advice` notice.
- `Not official support` label.
- Data-handling summary.
- Checkbox: `I understand this tool prepares a summary and does not provide a diagnosis.`
- CTA: `Start`.

### Step 1 — concern category

Use large selectable cards with icon, label and example. Selection requires a visible check, border and text—not color alone.

Categories:

- Product or usage question.
- Delivery or order concern.
- Packaging or quantity concern.
- Consultation or support follow-up.
- Other.

If a health-related category is selected, show a static note that the tool will prepare a question for professional review, not interpret the concern.

### Step 2 — product and timing

Fields:

- `What is the exact product name?` Text, optional if unknown.
- `When did you start using or order it?` Approximate date allowed.
- `When did you first notice the issue or question?` Approximate date allowed.
- `Order number` excluded from the public MVP unless a privacy review explicitly approves it.

Use helper text such as `Write “Not sure” if you do not know.` Unknown values must be allowed.[^2]

### Step 3 — what happened

Fields:

- `Describe only what you observed.`
- `What did you expect instead?` Optional.
- Category-specific factual prompts.

Design requirements:

- Textarea with character guidance, not a punitive countdown.
- Examples must be factual and non-diagnostic.
- Avoid leading prompts such as `Did the product cause...`.
- Do not auto-complete medical conclusions.

### Step 4 — actions already taken

Checkboxes:

- Read the product instructions.
- Used app chat.
- Called support.
- Requested a consultation.
- Checked order tracking.
- Reviewed cancellation/replacement information.
- Asked elsewhere.
- No action yet.
- Other.

Follow-up textarea: `What happened after that?` Optional.

### Step 5 — question to ask

Prompt: `What single question would you most like answered?`

- Give a neutral structure: `I used/ordered [product] around [date]. I noticed [fact]. I already tried [action]. Could you clarify [question]?`
- Keep user wording editable.
- Do not transform the question into a diagnosis, treatment instruction or legal complaint.

### Step 6 — route suggestion

Route cards must be generated by fixed, reviewed rules—not a generative model.

Each card includes:

- Route name.
- Best use case.
- What to have ready.
- Official source URL.
- Last-reviewed date.
- `Open official page` action.
- Disclaimer: `Opening a route does not guarantee a response or outcome.`

If a route is uncertain, show `Review options` rather than claiming a definitive match.

## Summary screen

### Layout

- Desktop: editable summary left, next-route card right.
- Mobile: summary first, route second, actions sticky at bottom.
- A slim progress statement: `Your draft is ready to review`.
- Every generated sentence must remain editable.

### Summary structure

1. Concern type.
2. Product or order context.
3. Relevant dates.
4. What happened.
5. Actions already taken.
6. Exact question.
7. Chosen route.

### Actions

- `Copy summary` — primary.
- `Print` — secondary.
- `Download text` — secondary.
- `Edit answers` — tertiary.
- `Clear everything` — destructive and confirmed.

Do not include `Send to Man Matters` in the MVP. The source specification requires sending to happen outside the prototype at the customer’s choice.[^2]

### Success states

- Copy: toast and inline state `Copied` for 2–3 seconds.
- Print: open print-optimized view without navigation.
- Download: explicit confirmation that a file will be saved to the device.
- Clear: confirmation modal, then return to the introduction.

### Follow-up state

Optional status after summary use:

- Not contacted yet.
- Contact attempted.
- Waiting for response.
- Question answered.
- Need another route.

Label clearly: `Recorded only in this session; not synchronized with Man Matters.`

## Components

### Buttons

| Variant | Appearance | Use |
|---|---|---|
| Primary | Forest pill, cream text | Main progression and final CTA |
| Secondary | Transparent/white, strong border | Print, download, secondary navigation |
| Tertiary | Text with arrow | Learn more and edit |
| Destructive | White or pale red, danger text | Clear data |
| Icon | 44px minimum preferred | Close, copy and navigation utilities |

States: default, hover, active, focus-visible, disabled and loading. Disabled controls must explain unmet conditions where practical.

### Inputs

- Height: 52–56px minimum for single-line fields.
- Background: white or warm canvas.
- Persistent visible labels.
- Helper text below input.
- 2px focus ring with sufficient contrast.
- Errors use icon, border and specific text.
- Do not validate while the user is typing unless feedback is genuinely helpful.
- Related radio buttons or checkboxes use `fieldset` and `legend`.

Accessible forms require visible, programmatically associated labels and text-based, field-linked errors; keyboard focus and live announcements must be managed when errors appear.[^4][^5]

### Cards

**Feature card:** 24–32px radius, pastel field, large icon or UI crop, concise heading.

**Route card:** white, strong border, source metadata, external-link icon, last-reviewed date.

**Safety card:** amber background, shield icon, direct boundary statement.

**Summary card:** paper-like white surface, subtle ruled dividers, edit affordance on hover and focus.

**Transparency card:** icon, one declarative sentence, supporting detail.

### Chips

Use for metadata only: `Editable`, `Session only`, `Official link`, `Fictional example`. Do not use chips for long actions or hide important status inside color-coded pills.

### Toasts

- Bottom-center desktop, above sticky actions on mobile.
- `role="status"` for noncritical success messages.
- Must not be the only confirmation; relevant button state should also update.
- Auto-dismiss after at least 4 seconds unless user interaction requires longer.

### Modals

Use only for destructive confirmation, exit with unsaved data or essential safety interruption. Trap focus, provide a labelled title, support Escape unless doing so would cause accidental data loss, and return focus to the invoking control.

## Motion system

The reference emphasizes motion, scroll storytelling and interactive product explanation. This project should retain that polish while avoiding movement that increases anxiety or obscures form completion.[^1]

### Timing

| Motion | Duration | Easing |
|---|---:|---|
| Hover/press | 120–180ms | `ease-out` |
| Field feedback | 180–220ms | `ease-out` |
| Card reveal | 350–500ms | cubic-bezier(0.22, 1, 0.36, 1) |
| Step transition | 280–420ms | cubic-bezier(0.22, 1, 0.36, 1) |
| Hero reveal | 600–850ms | cubic-bezier(0.16, 1, 0.3, 1) |
| Modal/sheet | 220–320ms | `ease-out` |

### Allowed motion

- Fade plus 12–24px vertical reveal.
- Staggered hero typography.
- Gentle card lift of 2–4px on hover.
- Selection border and check animation.
- Progress-bar interpolation.
- Crossfade between fictional examples.
- Summary line reveal after a step completes.
- Copy checkmark and compact success state.
- Slow gradient drift in decorative hero background.

### Prohibited motion

- Infinite marquees.
- Scroll hijacking.
- Large parallax behind text.
- Rapid scale effects.
- Bouncing safety alerts.
- Auto-advancing form steps.
- Typewriter animation for user-entered health text.
- Motion that implies the system is medically analyzing the entry.

### Reduced motion

When `prefers-reduced-motion: reduce` is active:

- Replace spatial transitions with short opacity changes or immediate state changes.
- Remove parallax, drift, stagger and animated progress interpolation.
- Keep only motion essential to understanding state.
- Never disable focus feedback or status communication.

The media feature exists specifically so sites can minimize nonessential motion for users who request it.[^6]

## Responsive behavior

### Desktop — 1200px and above

- 12-column layouts.
- Hero split approximately 5/7.
- Form and live summary may appear side by side.
- Product walkthrough uses sticky panels.
- Navigation displays all links.
- Large cards may span 5–8 columns to create editorial asymmetry.

### Tablet — 768px to 1199px

- 8-column layouts.
- Hero may remain split at wide tablet; stack under approximately 960px.
- Sticky preview becomes static if vertical space is limited.
- Feature cards use two columns.
- Navigation collapses to compact links or menu.

### Mobile — below 768px

- Single-column content.
- Preserve visual drama through typography and colored canvases, not off-screen positioning.
- Forms use full width.
- Sticky action bar respects safe-area inset.
- Summary preview follows current question rather than staying beside it.
- All category choices remain visible in a vertical list.
- Decorative assets move after essential content in DOM order.
- No horizontal scrolling at 320px width.

### Landscape and short viewports

- Avoid full-screen sections that trap content.
- Sticky bars must not cover labels, errors or focused fields.
- Modals should become scrollable sheets with visible close controls.

## Accessibility requirements

Target **WCAG 2.2 AA**.

- Every form control has a visible `abel>` and programmatic association.
- Checkbox and radio groups use `<fieldset>` and `egend>`.
- All controls work with keyboard alone.
- Reading order follows DOM order at every breakpoint.
- Error messages identify the problem in text, associate with the field and explain recovery.
- On failed submission, focus moves to an error summary or first invalid field.
- Focus indicators remain visible and unobscured.
- Pointer targets meet at least WCAG minimums; prefer 44×44px for primary controls.
- Icons have accessible names when interactive and are hidden from assistive technology when decorative.
- Accordions expose expanded state.
- Toasts and generated-summary updates use suitable live regions without excessive announcements.
- Content remains usable at 200% zoom and 320px width.
- Information never relies solely on color, location, shape or motion.
- Print and downloaded output use readable headings and preserve disclaimers.

WCAG 2.2 includes requirements for visible focus and minimum target sizing, while accessible-form guidance emphasizes persistent labels, descriptive errors and keyboard operation.[^7][^4][^3]

## Content design

### Voice

- Direct, calm and nonjudgmental.
- Use `you` and concrete verbs.
- Prefer `What happened?` over `Describe the adverse event.`
- Say `Not sure` rather than forcing precision.
- Separate facts from interpretations.
- Avoid medical reassurance and blame.

### Preferred language

| Use | Avoid |
|---|---|
| `Prepare a question` | `Get an answer` |
| `Suggested next route` | `Correct department` |
| `What did you observe?` | `What did the product cause?` |
| `Approximate date is fine` | `Exact date required` |
| `Open official page` | `Contact us` |
| `Not sent automatically` | `Submitted` |
| `Question for a professional` | `AI assessment` |
| `Clear this session` | `Delete medical record` |

### Disclaimer hierarchy

1. **Always visible short qualifier:** independent prototype; not official support or medical advice.
2. **Contextual form notice:** shown before health-related free text.
3. **Summary disclaimer:** repeated in copied, printed and downloaded output.
4. **Full Safety page:** detailed scope and emergency language.

Legal or safety content should remain concise on task screens; link to expanded detail without hiding the central limitation.

## Illustration and imagery

### Illustration system

- Monoline drawings with rounded endpoints.
- Use paths, notes, cards, speech bubbles, parcels and checkmarks.
- Forest ink on pastel fields with one warm accent.
- Slight hand-crafted irregularity is acceptable, but icons must remain recognizable.
- Illustrations should explain preparation, editing, routing and control.

### Avoid

- Before-and-after hair imagery.
- Clinical scalp photography.
- Doctor stock photography implying endorsement.
- Medical cross imagery unless reviewed for context.
- Product claims, efficacy charts or unverified testimonials.
- Anxiety-inducing error illustrations.
- Copied imagery or project art from the reference website.

### Product UI mockups

- Use clearly fictional information.
- Label demos `Fictional example`.
- Keep exact product names generic unless confirmed current and necessary.
- Obscure no real customer data because none should be present.

## Privacy-by-design UI

- Show a `Session only` status near the form header.
- Provide a plain-language tooltip explaining what that means.
- Offer `Clear everything` from every workflow step.
- Do not use local storage by default.
- Warn before refresh or exit only when technically reliable and not disruptive.
- Do not send free text to analytics, logging, session replay or error-monitoring payloads.
- If download is selected, state that the file will exist on the user’s device.
- If future persistence is added, redesign consent, retention, access and deletion rather than silently extending this MVP.

The project source specifically proposes in-memory handling, explicit optional download and no default cloud or browser storage.[^2]

## Empty, loading and error states

### Empty

- Summary panel: `Your summary will build here as you answer.`
- Route panel: `A reviewed route will appear after you choose a concern type.`
- No generic skeletons for sections that are not loading.

### Loading

Most MVP actions should be local and immediate. If a link catalogue or guidance file loads remotely:

- Use a subtle skeleton for under one second.
- Provide text status for longer waits.
- Never imply that the tool is medically analyzing data.

### Validation error

- Inline specific error.
- Error icon plus text; not red alone.
- Preserve all entered data.
- Focus the error summary on Continue when multiple errors exist.

### Guidance unavailable

- `This route could not be loaded. Your summary is still available.`
- Provide copy and print actions.
- Do not invent a fallback contact detail.

### Unsupported or stale source

- Mark route card `Needs review`.
- Disable the external action if the destination cannot be verified.
- Never show a guaranteed response time.

## Print and download design

### Print view

- White background and black text.
- Remove navigation, decorative imagery and animations.
- Include title, creation date, editable summary content, selected route, source URL, review date and disclaimer.
- Fit to A4 and US Letter without clipped text.
- Page breaks must not separate a heading from its content.

### Text download

File structure:

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

Do not default to PDF if text or print provides the same value with less complexity.

## Performance requirements

- Prefer server-rendered/static marketing content.
- Load form JavaScript only where needed.
- Use SVG or CSS for decorative line art.
- Avoid autoplay video in the initial viewport.
- Optimize product screenshots and supply responsive image sizes.
- Reserve dimensions to prevent layout shift.
- Lazy-load below-fold media.
- Keep custom fonts to the few weights actually used.
- The experience must remain fully usable if decorative motion fails.

### Product quality budgets

Use these as build targets, not claims about the reference:

- Initial JavaScript: aim below 180KB compressed for the landing route.
- Interaction feedback: under 100ms where actions are local.
- Hero media: aim below 350KB per responsive variant.
- No blocking third-party scripts.
- No session-replay script on free-text workflow pages.

## Analytics requirements

Permitted events:

- Landing CTA selected.
- Workflow started.
- Step completed, using step number only.
- Concern category selected, only if approved as non-sensitive aggregate metadata.
- Summary copied, printed or downloaded.
- Route link opened, using route ID only.
- Workflow reset.

Prohibited analytics:

- Product name text.
- Free-text concern description.
- Desired question.
- Dates entered by the user.
- Generated summary.
- Names, phone numbers, images or prescription information.

Display analytics consent only if the implementation actually uses optional tracking. Do not add a decorative cookie banner without a corresponding data behavior.

## Validation prototype

The research does not yet include five genuine customer conversations, and the proposed mechanism remains unverified. The visual system must therefore support research rather than presenting the concept as a proven product.[^2]

### Prototype modes

- **Public demo:** fictional data only.
- **Facilitated usability test:** participant can use a fictional scenario before any real detail.
- **Research build:** event logging limited to completion and errors; no free text.

### Test tasks

1. Prepare a product concern using a fictional scenario.
2. Correct an approximate date.
3. Add a previous support attempt.
4. Edit the generated question.
5. Identify the independent status and medical boundary.
6. Open the relevant reviewed route.
7. Copy or print the summary.
8. Clear the session.

### Design gates

- At least 4 of 5 formative participants should produce a useful summary containing product/context, timing, concern, prior action and a clear question without facilitator prompting. This is a proposed design gate, not statistical proof.[^2]
- Every test participant must correctly understand that the tool does not diagnose or submit automatically.
- All health scenarios must avoid treatment advice; any unsafe route blocks release.
- Compare the prototype against a plain notes template before investing in additional features.

## Screen inventory

| ID | Screen | Priority |
|---|---|---|
| M01 | Marketing home | P0 |
| M02 | Mobile navigation sheet | P0 |
| P00 | Workflow introduction | P0 |
| P01 | Concern category | P0 |
| P02 | Product and timing | P0 |
| P03 | What happened | P0 |
| P04 | Previous actions | P0 |
| P05 | Desired question | P0 |
| P06 | Route suggestion | P0 |
| S01 | Editable summary | P0 |
| S02 | Print layout | P0 |
| S03 | Clear-session confirmation | P0 |
| I01 | Privacy | P0 |
| I02 | Safety | P0 |
| I03 | About/prototype context | P1 |
| F01 | Optional follow-up status | P1 |
| E01 | Guidance unavailable | P0 |
| E02 | Validation error summary | P0 |
| E03 | 404 | P1 |

## Design deliverables

1. Moodboard translating the reference into a calm wellness-product aesthetic.
2. Color, typography, spacing, radius, shadow and motion tokens.
3. Desktop and mobile landing-page designs.
4. Complete six-step workflow at desktop and mobile widths.
5. Summary, print and download states.
6. Component library with interactive and error states.
7. Privacy and safety pages.
8. Fictional example data set.
9. Clickable prototype with reduced-motion variant.
10. Accessibility annotations and keyboard order.
11. Responsive specifications for 320, 390, 768, 1024 and 1440px.
12. Usability-test script and findings template.

## Acceptance criteria

### Visual

- Warm editorial aesthetic is consistent across marketing and product screens.
- Product UI appears in or immediately after the hero.
- At least one dark cinematic product section provides visual contrast.
- Every category has a coherent accent without changing core interaction meaning.
- No reference-site assets, copy, personal details or project imagery are reproduced.

### Functional design

- User can complete the entire journey without an account.
- Unknown information is allowed.
- User can return to previous steps without losing input.
- Every generated sentence is editable.
- Route cards show source and review date.
- Copy, print and explicit download are available.
- Nothing is sent automatically.
- Clear-session behavior is visible and confirmed.

### Safety and privacy

- Independent status and nonmedical boundary appear before data entry and in output.
- No diagnosis, dosing, treatment change, medical prediction or automatic reassurance is produced.
- No full name, phone number, prescription image or scalp photo is requested.
- Free text is excluded from analytics and logs.
- Default persistence is disabled.
- Safety language receives professional review before testing with real health concerns.

### Accessibility

- WCAG 2.2 AA contrast and focus requirements pass.
- All steps are keyboard operable.
- Labels remain visible and programmatically connected.
- Errors are specific, announced and recoverable.
- 200% zoom and 320px reflow pass.
- Reduced-motion mode removes nonessential movement.
- Print output is readable and structurally ordered.

## Build sequence

### Phase 1 — foundation

- Confirm product name and independent-status language.
- Confirm reviewed route catalogue and source dates.
- Approve safety copy.
- Create tokens and core components.
- Build fictional example data.

### Phase 2 — core workflow

- Implement introduction and six steps.
- Add in-memory data model.
- Implement validation and keyboard behavior.
- Build editable summary and route cards.

### Phase 3 — storytelling

- Build landing page with hero product UI, process, walkthrough, privacy, safety and FAQ.
- Add restrained motion and reduced-motion behavior.
- Complete responsive layouts.

### Phase 4 — output and QA

- Add copy, print, download and clear controls.
- Run accessibility, zoom, keyboard and screen-reader checks.
- Verify no free text reaches analytics or logs.
- Verify source links and review dates.

### Phase 5 — validation

- Test fictional scenarios first.
- Complete genuine customer interviews before claiming validated need.
- Compare against a notes template.
- Revise or abandon the standalone concept if existing support already solves preparation and routing.[^2]

## Handoff notes

- The reference website is a stylistic influence: editorial scale, strong product storytelling, expressive cards, section contrast and polished motion.[^1]
- It is not a component template to reproduce pixel for pixel.
- The Next Step interface must feel calmer, safer and more task-oriented than a creator portfolio.
- Exact support links, policy text, medical wording and review dates must come from an approved content catalogue, not hard-coded assumptions.
- All public screenshots must contain fictional information and the independent-prototype label.
- Do not launch real-user health data collection until privacy, safety and clinician-review requirements are satisfied.

---

## References

1. [Suryansh Chourasia: Designer Who Codes Websites & Products](https://www.suryanshchourasia.in/) - Selected work Landing pages and websites. Suryansh Services and pricing Fixed prices, agreed before ...

2. [Mosaic_Fellowship_Part1_Man_Matters.docx](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/79211369/8d333a13-1eff-4580-8533-acb91b622c77/Mosaic_Fellowship_Part1_Man_Matters.docx?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Checksum-Mode=ENABLED&X-Amz-Credential=ASIA2F3EMEYEYQD3ZMLM%2F20261014%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20261014T170216Z&X-Amz-Expires=1260&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCIdg9bkYkFv69wWUVtzDfrjKpOXHHsmt4HuA5usCDw8AIhAP9u86B6sfJzMXGCnBzWEMRXbrDtNt9KVFE14kfYKRQEKokFCLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQARoMNjk5NzUzMzA5NzA1IgzocQhG4R1wGZDeMH4q3QTtTxtvJar8ZRL2kqGhUOv40yFQxiLprsqLe0HuGX5RZzqf558N%2FKDvcfmIQwmJfW1ujyFgmBx3lBVw0tpLU%2FwsDjbUcoTGcu14MJO3zCveuko54YhffkliOTwR8E1aF1Mk8IA%2F3fIYItYtfRt7vtXWNqmIOztD1D3XhElk46y6CPrajDTgHp7y%2BVSRd1r5nCWDHEh%2Br3mQmoXZHYWoawTTIZdUX4X3EyiBeaMY8ZkMhYL4zkhNAPgv3JYVTQGCqwzTTjjeOloHsRrmehJnxBOwfdWZP7CTBJzHd4fUlhov1pT158oGp7KM722nnbsE3td4UPE9hM3AxrgiOeXI61FuxqPtiWOsLfZjpzR5fN5EOC%2FAMi9xc71HiUpziXi4%2FGIYAu7TA%2BTsRURkjqisJ%2FeqHMLl49rlRSWYBKehGEdiHxlqquw5mRQs4LwF1ZRiPv6MCeP%2Bti2W2X7DR0wJahFv%2FH0eMoqwWHAEDWsc9VBMPzDEX9yeRv7fs2pUsiqPVIV60tRIevNeyd1VK4r%2FiT%2B8A37w88%2F7u7XTtZwuYrRHFBzKyLsGIjLwnqF3xNMvmJ7Ybs9AE0bfKDQjgAypIWDdIoIoSJrl4NlcUZ4vzBv36wORxUC8%2B5kFkcmLHWhpe1v9te112zyW%2F62mH60xfJ1Zhxg49QeZLF0fkCYKcVDpygeOzEX%2F10US4uaGOh3Ih3WuVn%2FiYehSYX%2FR%2FubX9%2Fz0eHy50R9OF8tcZsnhEsfxrV4N%2F4lT6neiN03Arl5E4DpzZ%2BiRunEFaakOpgaNNKaY3p9iRSWw3YY0JAn7tjCx2b7WBjqXAbUb%2Fhx114pT%2BfG4aYxglxVy5EZoJmWph1xN5pfxgqgKDWn0W5twqEfUoJPgH6BvK8mZp9Z0A37uCCPcAQ9wYzE7%2FGk%2BiraCx8ud4vV4yhwcgBR8HXzfggGNCdryLmmGZEC48aODj9hwfvjDmnHuDK9HjUGssMJHsgZ5q5yMtHHbNoybZBq21LXo%2F3c83ll1nTFxF8CW%2FRU%3D&X-Amz-SignedHeaders=host&x-id=GetObject&X-Amz-Signature=018e6177c5a7e010eef934ed0e3167f880f67d4ac05facc562fdb7efa37aba6a) - Part 1 Customer Conversations and Problem Discovery Selected Mosaic brand Man Matters Applicant Not ...

3. [Web Content Accessibility Guidelines (WCAG) 2.2 - W3C](https://www.w3.org/TR/WCAG22/) - The size of the target for pointer inputs is at least 24 by 24 CSS pixels, except when: Spacing Unde...

4. [web.dev › learn › accessibilityForms - web.dev](https://web.dev/learn/accessibility/forms/) - When creating accessible forms, there's a lot you can do to prevent users from making form errors. E...

5. [web.dev › learn › formsAccessibility - web.dev](https://web.dev/learn/forms/accessibility/) - In a previous module about validation, you learned how to show error messages in case of invalid dat...

6. [prefers-reduced-motion CSS media feature - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) - The prefers-reduced-motion CSS media feature is used to detect if a user has enabled a setting on th...

7. [webaim.org › techniques › formvalidationUsable and Accessible Form Validation and Error Recovery](https://webaim.org/techniques/formvalidation/) - Form validation ensures that web forms are filled out with all necessary information in the correct ...

