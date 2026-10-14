/**
 * Man Matters Next Step — Domain Types
 * Source: Technical PRD Data Model section
 */

export type ConcernCategory =
  | 'HEALTH_QUESTION'
  | 'ORDER_DELAY'
  | 'PACKAGE_ISSUE'
  | 'SUPPORT_FOLLOWUP'
  | 'PRODUCT_INFORMATION'
  | 'OTHER';

export type FollowUpState =
  | 'NOT_SENT'
  | 'SENT'
  | 'AWAITING_RESPONSE'
  | 'ANSWERED'
  | 'CLOSED';

export interface ConcernDraft {
  schemaVersion: string;
  category: ConcernCategory | null;
  productName: string;
  productStartDate: string;
  issueDate: string;
  factualDescription: string;
  expectedOutcome: string;
  previousActions: string[];
  previousActionOther: string;
  previousActionResult: string;
  desiredQuestion: string;
  selectedRouteId: string | null;
  followUpState: FollowUpState | null;
  userApproved: boolean;
}

export interface GuidanceRoute {
  id: string;
  categories: ConcernCategory[];
  title: string;
  description: string;
  whatToPrepare: string[];
  sourceUrl: string;
  sourceOwner: string;
  lastReviewedAt: string;
  reviewStatus: 'verified' | 'needs_review' | 'expired';
  disclaimer: string;
  active: boolean;
  ruleVersion: string;
}

export interface SummaryDocument {
  templateVersion: string;
  generatedAt: string;
  concern: ConcernDraft;
  route: GuidanceRoute | null;
  editableText: string;
  approvedAt: string | null;
}

/** Category metadata for UI display */
export interface CategoryOption {
  code: ConcernCategory;
  label: string;
  example: string;
  disclaimer?: string;
  bgColor: string;
  accentColor: string;
  iconName: string;
}

/** Previous action option for Step 4 */
export interface PreviousActionOption {
  id: string;
  label: string;
  exclusive?: boolean; // "No action yet" is exclusive
}

/** Follow-up status option */
export interface FollowUpOption {
  value: FollowUpState;
  label: string;
}

/** Step definition for the workflow */
export interface WorkflowStep {
  number: number;
  title: string;
  description: string;
}
