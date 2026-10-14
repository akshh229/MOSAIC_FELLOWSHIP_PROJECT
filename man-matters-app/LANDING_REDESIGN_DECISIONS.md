# Landing redesign decision log

## Direction

The landing page now uses an original editorial approach rather than reproducing the reference site. It uses a warm, tactile palette, characterful typography, a generated lifestyle image, and product-led interaction to make the service feel more human and less like a generic AI interface.

## Decisions

| Decision | Alternatives considered | Rationale |
| --- | --- | --- |
| Use an original lifestyle image in the hero | Copy a reference image; use product UI alone | An original image creates warmth and visual focus without copying another site or implying affiliation. |
| Use Manrope, DM Serif Display, and DM Mono | Retain Inter and IBM Plex Mono | The new pairing feels editorial and contemporary while retaining highly legible body and metadata text. |
| Use parchment, ink, olive, ochre, and rust | Retain sage/forest pastel palette | The new palette provides stronger contrast, more memorable art direction, and works across safety-conscious content. |
| Use a dimensional note window and existing sliding walkthrough | Static hero grid; heavy WebGL | This gives a premium interactive feeling while remaining fast, accessible, and understandable on low-end mobile devices. |
| Keep medical and support boundaries explicit | Conversion-first claims or outcome language | The application remains a private preparation tool and does not diagnose, recommend treatment, or submit concerns automatically. |

## Guardrails

- Hero imagery is contextual only: it does not assess hair, scalp, symptoms, medication, or results.
- All motion respects `prefers-reduced-motion`.
- Existing routes, privacy behavior, user controls, and independent-prototype qualifier remain intact.
