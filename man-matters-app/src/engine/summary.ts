/**
 * Man Matters Next Step — Summary Composer
 * 
 * Per PRD FR-030: Output contains only labels, approved static wording,
 * selected route details, and user-entered text.
 * Per PRD FR-031: The system does not paraphrase free text or add inferred facts.
 * Per PRD FR-034: Missing values appear as "Not provided".
 */
import type { ConcernDraft, GuidanceRoute } from '../types';
import { categoryOptions, previousActionOptions } from '../config/guidance';

const TEMPLATE_VERSION = '1.0.0';

/**
 * Generates a factual summary from the user's draft.
 * Uses only the user's exact wording — no paraphrasing or inference.
 */
export function generateSummary(
  draft: ConcernDraft,
  route: GuidanceRoute | null
): string {
  const lines: string[] = [];

  // Category
  const categoryLabel =
    categoryOptions.find((c) => c.code === draft.category)?.label ??
    'Not provided';
  lines.push(`Concern type: ${categoryLabel}`);
  lines.push('');

  // Product and context
  lines.push(
    `Product: ${draft.productName?.trim() || 'Not provided'}`
  );
  lines.push(
    `Started using / ordered: ${draft.productStartDate?.trim() || 'Not provided'}`
  );
  lines.push(
    `Issue first noticed: ${draft.issueDate?.trim() || 'Not provided'}`
  );
  lines.push('');

  // What happened
  lines.push('What happened:');
  lines.push(draft.factualDescription?.trim() || 'Not provided');
  lines.push('');

  if (draft.expectedOutcome?.trim()) {
    lines.push('What was expected:');
    lines.push(draft.expectedOutcome.trim());
    lines.push('');
  }

  // Actions already taken
  if (draft.previousActions.length > 0) {
    const actionLabels = draft.previousActions
      .map((id) => {
        if (id === 'other' && draft.previousActionOther?.trim()) {
          return `Other: ${draft.previousActionOther.trim()}`;
        }
        return previousActionOptions.find((a) => a.id === id)?.label ?? id;
      })
      .filter(Boolean);

    lines.push('Actions already taken:');
    actionLabels.forEach((label) => lines.push(`- ${label}`));
    lines.push('');

    if (draft.previousActionResult?.trim()) {
      lines.push('What happened after:');
      lines.push(draft.previousActionResult.trim());
      lines.push('');
    }
  }

  // Question
  lines.push('Question:');
  lines.push(draft.desiredQuestion?.trim() || 'Not provided');
  lines.push('');

  // Route
  if (route) {
    lines.push(`Suggested route: ${route.title}`);
    lines.push(`Source: ${route.sourceUrl}`);
    lines.push(`Last reviewed: ${route.lastReviewedAt}`);
    if (route.reviewStatus === 'needs_review') {
      lines.push('Note: This route has not been verified as currently active.');
    }
    lines.push('');
  }

  return lines.join('\n');
}

/**
 * Generates the full export text with headers and disclaimers.
 * Per PRD FR-035: Exported summary states manual-send notice.
 */
export function generateExportText(
  _draft: ConcernDraft,
  _route: GuidanceRoute | null,
  editableText: string
): string {
  const lines: string[] = [];

  lines.push('MAN MATTERS NEXT STEP — PREPARED QUESTION');
  lines.push(
    'Independent fellowship prototype; not official support or medical advice.'
  );
  lines.push('');
  lines.push(`Created: ${new Date().toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })}`);
  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push(editableText);
  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push(
    'This summary was reviewed by the user and was not sent automatically.'
  );
  lines.push(
    'The user must manually send this summary through their chosen support channel.'
  );
  lines.push('');
  lines.push(
    'Man Matters Next Step is an independent fellowship prototype. It does not provide medical advice, diagnose conditions, or guarantee any response or outcome.'
  );

  return lines.join('\n');
}

export { TEMPLATE_VERSION };
