# Technical Product Requirements Document — Man Matters Next Step

**Document version:** 0.1  
**Status:** Technical draft for MVP  
**Product type:** Independent, static web prototype  
**Design status:** UI/UX requirements intentionally deferred  
**Source basis:** Mosaic Fellowship Part 1 research document supplied by the project owner[^1]

## Product Overview

**Man Matters Next Step** is a lightweight web tool for adult Man Matters customers who have an unresolved post-purchase product, order, packaging, or support question. It helps the user structure known facts, identify an appropriate existing support route through fixed reviewed rules, and create an editable summary that the user can copy, print, download, or manually send through an external support channel.[^1]

The MVP is a **support-preparation and navigation tool**, not a Man Matters support system. It must not diagnose a condition, assess treatment effectiveness, change medication instructions, recommend products, promise a response, submit complaints automatically, or represent itself as an official Man Matters application.[^1]

## Problem Definition

Some customers report difficulty reaching appropriate help or continuing a support interaction after purchase, while other customers report successful assistance. The proposed product therefore tests a narrow hypothesis: a structured concern summary and a clear next route may reduce the effort needed to prepare and communicate an unresolved question.[^1]

The underlying mechanism remains unvalidated. If testing shows that customers already provide complete information and the only constraint is response capacity, the appropriate solution is operational rather than another customer-facing application.[^1]

## MVP Objective

Build a safe, responsive, no-backend prototype that can test whether guided concern preparation improves task completion, clarity, and routing compared with the user’s current method, such as writing an unstructured chat message or using a notes application.

### Primary outcome

A user can complete a structured concern, review every generated statement, select or confirm an appropriate existing route, and export the final summary without the system interpreting medical information.

### Product principles

- **User-controlled:** Preserve the user’s wording and require review before export.
- **Deterministic:** Use fixed, versioned routing rules rather than generative AI.
- **Privacy-minimizing:** Keep entered data in runtime memory by default.
- **Safety-first:** Route health-related questions toward qualified professional help without giving treatment advice.
- **Transparent:** Show that the prototype is independent and that it cannot guarantee a response or resolution.
- **Reversible:** Allow users to edit, clear, or abandon all entered information at any time.

## Users and Roles

| Role | Description | MVP permissions |
|---|---|---|
| Customer | Adult user preparing an unresolved post-purchase question | Enter, edit, review, copy, print, download, and clear a concern summary |
| Content reviewer | Authorized project maintainer who reviews routes and safety wording before deployment | Update version-controlled configuration outside the runtime application |
| Research facilitator | Person conducting formative usability tests | Observe task completion using fictional or consented scenarios; no access to hidden customer data |

The MVP has no account system, administrator dashboard, clinician portal, support-agent portal, or Man Matters employee access.

## Scope

### Included

- Guided multi-step concern form.
- Concern categories defined in reviewed configuration.
- Exact product name as optional free text.
- Approximate product start date and issue date.
- Factual description of what happened.
- Actions already attempted.
- The user’s desired question or resolution.
- Fixed-rule support-route suggestion.
- Source URL and last-reviewed date for every guidance or route card.
- Editable generated summary.
- Explicit user confirmation before export.
- Copy-to-clipboard, print, and local text or PDF download.
- Optional manual follow-up status held only for the active session.
- Session reset and inactivity warning.
- Safety notices and escalation language.
- Basic privacy-preserving event counts only if explicitly enabled for a controlled test.

### Excluded

- AI diagnosis or medical interpretation.
- Generative AI summaries, chatbots, or fabricated clinician responses.
- Photo-based hair or scalp analysis.
- Personalized dosage, medication changes, treatment recommendations, or automated reassurance.
- Product recommendations or eligibility decisions.
- Automatic complaint submission or message sending.
- Man Matters account, order, payment, CRM, delivery, or support integrations.
- Automatic order tracking, refunds, cancellations, replacements, or cashback decisions.
- Authentication, cloud profiles, and cross-device synchronization.
- Default browser persistence, including `localStorage`, IndexedDB, cookies containing form data, or service-worker caching of submissions.
- Collection of full name, phone number, prescription image, scalp photograph, government ID, payment data, or medical records.
- Adherence streaks, reminders, progress scoring, and outcome prediction.
- Any branding or copy that implies official Man Matters ownership.

## Core User Flow

1. The user opens the application and sees the independent-prototype, privacy, and safety notices.
2. The user confirms that they understand the tool does not provide medical advice or official support.
3. The user selects a concern category.
4. The user enters only the facts they know; unknown fields can remain blank or be marked unknown.
5. The system validates format and completeness without judging the health meaning of the content.
6. The deterministic routing engine evaluates non-clinical structured fields.
7. The system displays a suggested existing route, source, review date, limitations, and any safety notice.
8. The system generates a factual draft summary using field labels and the user’s original wording.
9. The user edits and explicitly approves the summary.
10. The user copies, prints, or downloads the summary and manually uses the external route.
11. The user may record a session-only follow-up state or clear the session.

## Functional Requirements

### Session and consent

| ID | Requirement | Priority | Acceptance criteria |
|---|---|---:|---|
| FR-001 | Display independent-prototype notice before the form | Must | The first screen states that the tool is not official Man Matters support |
| FR-002 | Display medical and urgent-care boundary | Must | The user must acknowledge the boundary before continuing |
| FR-003 | Keep concern data in runtime state by default | Must | Refreshing or closing the page removes entered concern data |
| FR-004 | Provide a clear-all action | Must | One confirmed action removes all runtime concern data and returns to the start state |
| FR-005 | Warn before destructive navigation | Should | If unsaved text exists, in-app navigation to reset asks for confirmation |

### Concern capture

| ID | Requirement | Priority | Acceptance criteria |
|---|---|---:|---|
| FR-010 | Capture concern category | Must | User can choose one reviewed category and can return to change it |
| FR-011 | Capture product name | Must | Free text is optional, preserves exact user wording, and does not autocomplete unverified products |
| FR-012 | Capture approximate dates | Must | Partial or unknown dates are accepted; no false precision is introduced |
| FR-013 | Capture factual description | Must | User can describe what happened in plain text; the app does not classify symptoms |
| FR-014 | Capture prior actions | Must | User can state what they already tried or whom they contacted |
| FR-015 | Capture desired question | Must | User can enter the exact question they want answered |
| FR-016 | Support unknown values | Must | Every nonessential field can be skipped or marked unknown |
| FR-017 | Validate inputs safely | Must | Validation checks length, format, and required workflow fields only; it does not infer diagnosis or urgency from ordinary free text |
| FR-018 | Enforce input limits | Must | Limits are visible, prevent excessive payloads, and preserve text already entered during recoverable validation errors |

### Routing

| ID | Requirement | Priority | Acceptance criteria |
|---|---|---:|---|
| FR-020 | Use deterministic reviewed rules | Must | The same structured input and rule version always return the same route result |
| FR-021 | Separate health, order, delivery, packaging, and general-support routes | Must | Each supported category maps only to approved route cards |
| FR-022 | Show route provenance | Must | Every route card displays source URL, owner label, and last-reviewed date |
| FR-023 | Avoid outcome promises | Must | No route result promises response time, refund, replacement, treatment outcome, or resolution |
| FR-024 | Handle no-match cases | Must | If no reviewed rule matches, show a neutral general-support option and advise the user to verify current official channels |
| FR-025 | Fail safely on invalid configuration | Must | Invalid or missing rules suppress the affected recommendation and show a neutral fallback |
| FR-026 | Route health questions to professional review | Must | Health-related categories never generate product, dosage, or treatment guidance |

### Summary generation

| ID | Requirement | Priority | Acceptance criteria |
|---|---|---:|---|
| FR-030 | Generate a structured factual draft | Must | Output contains only labels, approved static wording, selected route details, and user-entered text |
| FR-031 | Preserve user wording | Must | The system does not paraphrase free text or add inferred facts |
| FR-032 | Allow full review and editing | Must | User can edit the generated draft before any export action becomes available |
| FR-033 | Require approval | Must | Copy, print, and download remain disabled until the user confirms the final text |
| FR-034 | Mark missing information honestly | Must | Missing values appear as “Not provided” or are omitted according to reviewed templates; values are never fabricated |
| FR-035 | Include route disclaimer | Must | Exported summary states that the user must send it manually and that no response is guaranteed |

### Export and follow-up

| ID | Requirement | Priority | Acceptance criteria |
|---|---|---:|---|
| FR-040 | Copy summary | Must | Copies plain text and provides success or error feedback |
| FR-041 | Print summary | Must | Opens a print-friendly browser view without unrelated controls |
| FR-042 | Download summary | Should | Downloads a local `.txt` file; optional client-side PDF export may be added without sending data to a server |
| FR-043 | Do not send automatically | Must | No control invokes email, WhatsApp, support APIs, or complaint submission with the user’s content |
| FR-044 | Record optional follow-up state | Should | User may select “not sent,” “sent,” “awaiting response,” “answered,” or “closed” for the active session only |
| FR-045 | Label manual state | Must | Follow-up state is clearly described as user-recorded and not synchronized with Man Matters |

## Concern Taxonomy

The initial taxonomy should remain small and configurable:

| Code | Category | Intended handling |
|---|---|---|
| `HEALTH_QUESTION` | Product-use or health-related question | Prepare facts and direct toward qualified professional or approved official consultation route; no interpretation |
| `ORDER_DELAY` | Delivery or order-status issue | Link to reviewed official order/support resources; no tracking claim |
| `PACKAGE_ISSUE` | Missing, damaged, leaking, sealed, or quantity concern | Provide a factual documentation checklist and reviewed replacement/support route; no authenticity judgment |
| `SUPPORT_FOLLOWUP` | Earlier contact did not resolve the question | Capture prior channel, approximate contact date, unresolved question, and next approved route |
| `PRODUCT_INFORMATION` | General question about product instructions or published information | Link only to reviewed official information and support; do not personalize instructions |
| `OTHER` | Concern does not match a reviewed category | Generate summary and neutral general-support fallback |

Categories and labels are configuration data, not hard-coded presentation logic. Final wording and visual grouping will be updated after design requirements are supplied.

## Routing Logic

The routing engine must consume only structured selections and approved configuration. It must not use keywords in health-related free text to diagnose, triage, or recommend treatment.

```text
IF category = HEALTH_QUESTION
  THEN show professional-review route + medical boundary
ELSE IF category = ORDER_DELAY
  THEN show current official order/support route
ELSE IF category = PACKAGE_ISSUE
  THEN show documentation checklist + current official replacement/support route
ELSE IF category = SUPPORT_FOLLOWUP
  THEN show reviewed follow-up route + include prior-contact fields in summary
ELSE IF category = PRODUCT_INFORMATION
  THEN show reviewed official product-information route + support fallback
ELSE
  THEN show general-support fallback
```

A separately reviewed urgent-care notice must always remain accessible. The MVP should not attempt automated emergency detection from free text because a simple keyword approach can miss context or produce unsafe false reassurance.

## Technical Architecture

### Recommended implementation

A client-only single-page application is sufficient for the first prototype, consistent with the source document’s recommendation of a responsive static page with no paid AI, backend, authentication, or order integration.[^1]

| Layer | Recommendation | Rationale |
|---|---|---|
| Language | TypeScript | Reduces schema and rule-handling errors |
| UI runtime | React | Supports a maintainable step-based form and editable summary |
| Build tool | Vite | Produces a small static deployment with simple local development |
| Form handling | React Hook Form plus Zod | Centralizes validation and typed schemas without server processing |
| State | Component/context state or a small reducer | Runtime-only state; no persistence library required |
| Routing rules | Versioned local JSON or TypeScript configuration | Reviewable, deterministic, testable, and independent of AI |
| Styling | Deferred | Final component library, tokens, layout, and responsive styling await design requirements |
| Testing | Vitest, React Testing Library, Playwright | Unit, component, accessibility, and end-to-end coverage |
| Hosting | Static host with HTTPS | No application server required |
| CI | GitHub Actions or equivalent | Automated lint, type-check, test, and build verification |

Plain HTML, CSS, and JavaScript would also meet the functional requirement. React and TypeScript are recommended for maintainability and automated validation, not because the MVP requires a complex framework.

### Logical components

```text
App Shell
  ├── Disclosure and Consent Gate
  ├── Concern Form
  │     ├── Category Step
  │     ├── Product and Date Step
  │     ├── Incident Step
  │     └── Previous Action and Question Step
  ├── Validation Layer
  ├── Deterministic Route Engine
  ├── Guidance Repository
  ├── Summary Composer
  ├── Review and Approval
  ├── Export Adapter
  └── Session Reset / Follow-up State
```

### Data flow

```text
User input
  → typed runtime form state
  → structural validation
  → deterministic rule evaluation
  → route card + source metadata
  → factual summary template
  → user review and edit
  → explicit approval
  → local copy, print, or download
  → optional session-only follow-up state
```

No concern content should cross the network after the initial static application assets load.

## Data Model

```ts
type ConcernCategory =
  | "HEALTH_QUESTION"
  | "ORDER_DELAY"
  | "PACKAGE_ISSUE"
  | "SUPPORT_FOLLOWUP"
  | "PRODUCT_INFORMATION"
  | "OTHER";

type FollowUpState =
  | "NOT_SENT"
  | "SENT"
  | "AWAITING_RESPONSE"
  | "ANSWERED"
  | "CLOSED";

interface ConcernDraft {
  schemaVersion: string;
  sessionId?: string; // ephemeral random value; never exported unless needed for a controlled test
  category: ConcernCategory;
  productName?: string;
  productStartDate?: string;
  issueDate?: string;
  factualDescription: string;
  previousActions?: string;
  priorSupportChannel?: string;
  priorContactDate?: string;
  desiredQuestion: string;
  selectedRouteId?: string;
  followUpState?: FollowUpState;
  userApproved: boolean;
}

interface GuidanceRoute {
  id: string;
  category: ConcernCategory[];
  title: string;
  description: string;
  sourceUrl: string;
  sourceOwner: string;
  lastReviewedAt: string;
  disclaimer: string;
  active: boolean;
  ruleVersion: string;
}

interface SummaryDocument {
  templateVersion: string;
  generatedAt: string;
  concern: ConcernDraft;
  route?: GuidanceRoute;
  editableText: string;
  approvedAt?: string;
}
```

### Data rules

- `factualDescription` and `desiredQuestion` are required for summary generation.
- Dates may be partial or omitted; unknown values must remain unknown.
- `userApproved` defaults to `false` and resets to `false` after any summary edit.
- `sourceUrl`, `lastReviewedAt`, and `ruleVersion` are mandatory for active route entries.
- Runtime state must not be written to browser persistence by default.
- Export must exclude ephemeral session identifiers.
- Text fields must be rendered as text, never injected as HTML.

## Configuration Management

Guidance and route data should live in a version-controlled file separate from components. The build must fail when configuration validation detects:

- Missing route ID.
- Duplicate route ID.
- Missing or invalid source URL.
- Missing review date.
- Unsupported category.
- Empty disclaimer.
- Active route with expired review status, once a review-expiry policy is defined.

Each production release should record the configuration version. A future content-management system is out of scope until an authorized owner and update workflow exist.

## Validation Rules

| Field | Rule |
|---|---|
| Product name | Optional; trim outer whitespace; maximum 120 characters |
| Dates | Optional ISO-compatible value or explicit unknown state; prevent impossible calendar dates |
| Factual description | Required; 10–2,000 characters |
| Previous actions | Optional; maximum 1,000 characters |
| Prior support channel | Optional reviewed selection plus “Other” |
| Desired question | Required; 5–500 characters |
| Editable summary | Maximum 5,000 characters |

These are technical guardrails, not medical completeness rules. Limits should be configurable after usability testing.

## Safety Requirements

- Do not infer diagnosis, severity, treatment suitability, side effects, or expected outcomes.
- Do not state that a symptom or product reaction is normal, harmless, or caused by a named product.
- Do not recommend starting, stopping, increasing, reducing, or switching a treatment.
- Do not turn published product information into personalized instructions.
- Do not claim that a package is authentic, counterfeit, contaminated, or defective.
- Do not delay urgent help; keep a clearly visible instruction to seek immediate local assistance when the user believes the situation is urgent.
- Require clinical review of all health-facing static wording before real-user testing.
- Test health scenarios against a pre-reviewed route key; any unsafe route blocks release.[^1]

## Privacy and Security

### Privacy baseline

The source specification requires inputs to remain in memory, no default cloud storage, no phone number or full name collection, no prescription or scalp images, and no analytics that capture free text.[^1]

- Collect only fields necessary to prepare the concern.
- Do not collect direct identity fields in the MVP.
- Do not transmit free text to analytics, error monitoring, AI services, or third parties.
- Do not include form values in URLs, query parameters, logs, filenames, telemetry, or crash reports.
- Disable browser persistence of the concern unless a later version adds a separate, explicit privacy design.
- Exclude user-entered text from service-worker caches.
- Label public demonstrations as fictional and use only hypothetical data.

### Application security

- Serve exclusively over HTTPS.
- Use a restrictive Content Security Policy.
- Allow network connections only to required static assets and explicitly approved route domains.
- Avoid third-party scripts where possible.
- Escape all user content and prohibit `dangerouslySetInnerHTML` for concern fields.
- Add `rel="noopener noreferrer"` to external links.
- Pin and review dependencies; run automated dependency and secret scanning.
- Set secure response headers through the static host, including `X-Content-Type-Options`, a restrictive `Referrer-Policy`, and anti-framing policy.
- Do not expose source maps in production if they contain sensitive deployment details; source maps never contain user data.

### Analytics

Default public deployment should have no behavioral analytics. A controlled usability test may collect only explicit, non-content events such as step completion, validation error category, route shown, task duration, and export action after participant consent. Event payloads must never include product names, dates, concern text, questions, copied summaries, URLs containing form state, or stable cross-session identifiers.

## Non-Functional Requirements

| ID | Area | Requirement |
|---|---|---|
| NFR-001 | Performance | Initial compressed first-party JavaScript target below 200 KB where practical; usable on a typical Indian mobile connection |
| NFR-002 | Responsiveness | Functional from 320 px mobile width through desktop; final layout awaits design specification |
| NFR-003 | Accessibility | Target WCAG 2.2 AA behavior: keyboard operation, visible focus, semantic labels, error association, status announcements, and no color-only meaning |
| NFR-004 | Reliability | No user-entered field is lost during normal forward/back navigation within the session |
| NFR-005 | Determinism | Identical structured inputs and rule version produce identical route output |
| NFR-006 | Availability | Static hosting target of 99.5% monthly availability for pilot use; no support resolution SLA is implied |
| NFR-007 | Browser support | Latest two stable versions of Chrome, Edge, Firefox, and Safari; current Android Chrome and iOS Safari |
| NFR-008 | Maintainability | Strict TypeScript, linting, formatted code, schema-validated configuration, and documented release process |
| NFR-009 | Observability | Technical errors may be counted without user-entered text; health and concern content must never enter logs |
| NFR-010 | Content freshness | Route cards show review dates and can be disabled centrally in configuration before deployment |

## Error Handling

- Validation errors must identify the field and explain the correction without medical judgment.
- Clipboard failure must offer manual text selection.
- Print or download failure must preserve the approved summary in runtime state.
- Missing route configuration must fall back to neutral guidance rather than crash.
- External links must be marked as external; the application must not claim that a destination is currently available unless checked through an authorized process.
- Runtime exceptions must show a reset option and must not include concern content in error reports.

## Testing Strategy

### Unit tests

- Schema validation for every field and boundary.
- Route engine tests for every category, fallback, inactive route, and invalid configuration.
- Summary composer tests proving that no unstated facts are added.
- Approval reset after summary edits.
- Export sanitization and exclusion of ephemeral identifiers.
- Session reset and refresh behavior.

### Component tests

- Required-field, optional-field, and unknown-state behavior.
- Keyboard navigation and focus movement after errors.
- Route source and review-date display.
- Approval gating for copy, print, and download.
- Clear-all confirmation.
- No free-text leakage into rendered URLs or telemetry calls.

### End-to-end tests

- Health question route with no treatment advice.
- Delayed order route with no tracking or delivery promise.
- Packaging concern with no authenticity determination.
- Unresolved support follow-up with prior-contact context.
- Other category using general fallback.
- Copy, print, local download, reset, reload, and external-link flow.
- Mobile and desktop viewport coverage.
- JavaScript error and invalid-configuration recovery.

### Safety tests

Use matched fictional scenarios reviewed before testing. Release is blocked if any scenario generates diagnosis, treatment advice, false reassurance, an unsupported support channel, a guaranteed outcome, or an inaccurate statement not entered by the user.

### Accessibility tests

Combine automated checks with manual keyboard, screen-reader, zoom, contrast, and error-recovery testing. Automated accessibility checks alone are not sufficient for release.

## MVP Acceptance Criteria

The MVP is technically releasable for controlled testing only when:

- All Must functional requirements pass.
- All routing decisions are deterministic and covered by tests.
- Health scenarios provide no treatment advice and pass reviewer approval.
- No network request contains concern-form data.
- Refresh and close clear entered concern data.
- Copy and print work in supported browsers; download works if included in the release.
- Users can edit and approve the summary before export.
- Every active route has an approved source and visible review date.
- Accessibility checks reveal no critical or serious blocker in the core flow.
- The public build clearly identifies itself as an independent fellowship prototype.
- The deployment uses fictional data until a consented research protocol is active.

## Success Measurement

The source document recommends formative evaluation rather than claims about market prevalence or medical outcomes.[^1]

| Metric | Measurement | Initial decision gate |
|---|---|---|
| Useful summary completion | User includes product if known, timing, concern, previous action, and clear question without facilitator prompting | At least 4 of 5 formative participants |
| Safe route selection | Result compared with a pre-reviewed fictional-scenario key | All health scenarios avoid treatment advice; any unsafe route blocks release |
| Effort vs. baseline | Compare task time, errors, and comprehension against chat or notes; alternate task order | Continue only if performance improves without reducing comprehension |
| Perceived added value | Ask which method the participant would use for a real future concern and why | Require specific reasons, not only favorable ratings |
| Actual resolution | With separate consent, record whether clarification was requested and whether the question was answered | Exploratory; do not attribute support capacity or clinical outcome to the prototype |

Hair growth, product efficacy, repurchase, complaint reduction, and health outcomes are not valid primary MVP success metrics.

## Delivery Plan

### Phase 0 — Validation gate

- Complete five genuine Man Matters interviews.
- Inspect the current signed-in app journey with consent.
- Verify that preparation or routing friction exists.
- Compare the concept with a simple notes template.
- Stop or re-scope if the actual bottleneck is support capacity, fulfillment, or an already-solved workflow.

### Phase 1 — Technical foundation

- Initialize TypeScript application and CI.
- Define schemas, configuration validation, and runtime-only state.
- Implement source metadata and content-version structure.
- Add privacy and security headers in the deployment environment.

### Phase 2 — Core workflow

- Implement consent gate, guided form, route engine, and fallback.
- Implement summary composer, editing, approval, and reset.
- Add copy and print; add local download if it meets the release schedule.

### Phase 3 — Verification

- Complete unit, component, end-to-end, safety, accessibility, and browser tests.
- Conduct clinician/content review of health-facing language.
- Run tests with fictional scenarios before any real concern data.

### Phase 4 — Formative pilot

- Run the approved five-person task comparison.
- Collect only consented non-content measurements.
- Decide whether to iterate, integrate later with authorized support, improve discoverability, or discontinue.

## Technical Risks

| Risk | Impact | Mitigation |
|---|---|---|
| Existing app already solves the workflow | Duplicate product with little value | Inspect current authenticated journey before development |
| Support capacity is the real bottleneck | Better summaries do not improve resolution | Measure clarification separately from response time and final resolution |
| Route information becomes outdated | Users reach an incorrect channel | Show source and review date; version and disable routes centrally |
| Health wording drifts into advice | User safety and compliance risk | Fixed wording, clinician review, safety tests, no generative AI |
| Free text leaks through telemetry | Privacy breach | No default analytics; payload allowlist; automated network tests |
| Shared-device exposure | Sensitive information remains accessible | Runtime-only state, no default persistence, clear-all control, inactivity warning |
| Users assume official affiliation | Misplaced trust | Persistent independent-prototype disclosure and restrained branding |
| Summary is mistaken for a submitted ticket | User waits without sending | Explicit manual-send notice before and inside every export |
| Over-engineering delays validation | Effort spent before the problem is confirmed | Static client-only MVP and validation gate before integrations |

## Future Considerations

The following may be evaluated only after the MVP demonstrates value and Mosaic authorizes access:

- Deep links into an official support journey.
- Secure submission to a support system with explicit consent and delivery confirmation.
- Server-side route-content management with authorization and audit history.
- Optional encrypted user-controlled persistence.
- Case-status synchronization.
- Multilingual content reviewed for safety and accuracy.
- Authorized support-agent view.

Each future integration requires a new privacy, security, access-control, data-retention, and ownership design. No current MVP decision should imply permission to access Mosaic systems or customer records.

## Open Technical Decisions

- Final visual system, navigation pattern, component library, and motion behavior await design requirements.
- Exact official route URLs and support-channel ownership require verification immediately before release.
- The clinician/content reviewer and approval process must be named.
- Route-review expiry interval must be defined.
- Whether client-side PDF export is necessary should be decided after testing plain text and print.
- Whether any analytics are allowed must be decided through the research consent protocol.
- Hosting provider and deployment domain remain to be selected.
- Final product name and permitted use of the Man Matters name require stakeholder confirmation.

## Definition of Done

A feature is done when its typed implementation, validation, unit coverage, component or end-to-end coverage, accessibility behavior, privacy behavior, error state, and acceptance criteria are complete; reviewed content is supplied through validated configuration; no user-entered concern content leaves the browser; and the release documentation records the application version, rule version, source review dates, test status, and known limitations.

---

## References

1. [Mosaic_Fellowship_Part1_Man_Matters.docx](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/79211369/1cc3bdca-dc5a-4eb2-b110-9b0fbe10bdaa/Mosaic_Fellowship_Part1_Man_Matters.docx?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Checksum-Mode=ENABLED&X-Amz-Credential=ASIA2F3EMEYEWIAA7NNT%2F20261014%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20261014T170141Z&X-Amz-Expires=1296&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDNwWsbuUllv6TCHRygCui7XWrCeDIbsuxm4xNY22UR4wIhAJBupMwmPkBKCwUFFU%2BGQ67K%2BjUJ2ADczo4bVhXX3%2BCwKokFCLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQARoMNjk5NzUzMzA5NzA1IgwadVELL5vAcrIdJ4kq3QR0tf6oSPQ8Dc91uj7t9wbsTaOr9G96I2wMKwTWNPN4xHE4bFwndVwlZ8gQUKnnNvvauNPuU8UCVTtQCtCaVrnZ2AAb%2FyOptI3h6od4K0OhTLvVnHUynseL4qPOq3OQcfjr%2Fa9vHCClkDKdDgJT9oLMC3QgzdM7SLFKzqVIiYIUsXK%2FL%2BO32h2sipNR3wC7eNZsAmwYMbQMchw%2B0mQ85gWIMcl181T8rmRKmGOrCOUiRI5XOjD4WlmixDjMgbaF24NFf9xJAMFp0eOEC7Y%2B7cxJ2rbdLJhOvPdMtfHR7kvShM7Fne%2Fa%2BMdU2yzgWBYh52GssbuOD%2F%2BNSBUJoYJshGgm0MGA2lqyB18QCSebLKQ%2BiHnS%2ByGFEvQ6krgI3sIUvUv2lCZ33WDIKU3hJa7oEeDiXUxXBx75EpPDNbeERhS4cf2UIKg8sGDRlw7dl1q389y561QrsObu5gR9vfEp46y84YPRXnAYFkdnQHgUe0FLkva2udlQMRKtuWXtfHskQaPtTC1yRWoCSYVYON7hq5kldMVscgb4K6Y1Pl4O7Uodp1wazlqBPc%2Fbmms9yIP6mO70C%2BA60hKKT7u4NzGlSxA0ZgmQ4%2Fc3GL3nliv4fSu%2B9Nc3koPXVBCfDmQr0QSC2sNgyAYcB45q7vrOW%2FjlgvdBmiA8ZMJcauHufX674t7u0ruNtvzK0w9V5ne2ZAwShEKUeFWuOD8BnSgz2xfWrpEMInx5oSNH8gHSxXNnxnxnKEnrlTPrad0TOoJtFIS7ddyQjIZHNDQRzy9RvBmJHNz5c6zjYqr8ILfFJv94kjCy2b7WBjqXAdZ7QBfpQDwthofX71s9Rt6Itgw7SUbLEQY23eUT4DS9ENcCi4H%2FUK3ZU%2BdmJHU9QXIIZLqT2y%2BvplX6hGQJJtQ6FNmbLc0oWzaZXI9GW7FFTRjmZNxZ%2BVc%2FcjhDud8tMy8V605lAbRY05%2BX01rgtXnEPpoTtomnWirxAtFvVt%2FXxr6WhovmU5JyxnOp4CKbymCyp18ABhI%3D&X-Amz-SignedHeaders=host&x-id=GetObject&X-Amz-Signature=2a2b3fb4544527d01d4967d44c88eb50b1a42419f08097490a58bc3df81e0290) - Part 1 Customer Conversations and Problem Discovery Selected Mosaic brand Man Matters Applicant Not ...

