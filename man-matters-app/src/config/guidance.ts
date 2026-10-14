/**
 * Man Matters Next Step — Guidance Route Configuration
 * 
 * Version-controlled, deterministic routing data.
 * Per PRD: Each active route requires id, source URL, review date, rule version.
 * 
 * IMPORTANT: URLs listed here are PLACEHOLDERS derived from publicly known
 * Man Matters domains. They have NOT been verified as currently active.
 * All routes are marked reviewStatus: 'needs_review' until an authorized
 * reviewer confirms each URL is live and appropriate.
 * This is a release blocker per the PRD safety requirements.
 */
import type { GuidanceRoute, CategoryOption, PreviousActionOption, FollowUpOption } from '../types';

export const RULE_VERSION = '1.0.0-draft';
export const CONFIG_VERSION = '1.0.0-draft';

export const guidanceRoutes: GuidanceRoute[] = [
  {
    id: 'route-health-professional',
    categories: ['HEALTH_QUESTION'],
    title: 'Consult a qualified professional',
    description:
      'For product-use or health-related questions, speak with a qualified healthcare professional. Man Matters offers consultations through their platform.',
    whatToPrepare: [
      'Product name and how long you have used it',
      'What you observed and when',
      'Previous actions or advice received',
      'Your specific question',
    ],
    sourceUrl: 'https://manmatters.com/consult',
    sourceOwner: 'Man Matters (unverified)',
    lastReviewedAt: '2026-10-01',
    reviewStatus: 'needs_review',
    disclaimer:
      'This link points to a Man Matters page that may offer consultation booking. Availability, eligibility, and response times are not guaranteed by this tool. Verify the page is current before proceeding.',
    active: true,
    ruleVersion: RULE_VERSION,
  },
  {
    id: 'route-order-support',
    categories: ['ORDER_DELAY'],
    title: 'Order and delivery support',
    description:
      'For delivery delays or order-status questions, use the official support channels on the Man Matters website or app.',
    whatToPrepare: [
      'Order date or approximate timeline',
      'Product name if known',
      'Current delivery status if available',
      'Your specific question about the order',
    ],
    sourceUrl: 'https://manmatters.com/contact-us',
    sourceOwner: 'Man Matters (unverified)',
    lastReviewedAt: '2026-10-01',
    reviewStatus: 'needs_review',
    disclaimer:
      'This link points to a general Man Matters contact page. Response times and resolution are not guaranteed by this tool.',
    active: true,
    ruleVersion: RULE_VERSION,
  },
  {
    id: 'route-packaging-support',
    categories: ['PACKAGE_ISSUE'],
    title: 'Packaging or quantity concern support',
    description:
      'For packaging, quantity, or product-condition concerns, contact Man Matters support with documentation of the issue.',
    whatToPrepare: [
      'Product name and order date',
      'Description of the packaging issue',
      'Details about quantity or condition',
      'Your specific question or request',
    ],
    sourceUrl: 'https://manmatters.com/contact-us',
    sourceOwner: 'Man Matters (unverified)',
    lastReviewedAt: '2026-10-01',
    reviewStatus: 'needs_review',
    disclaimer:
      'This tool does not determine whether a package is authentic, contaminated, or defective. Contact Man Matters directly for product-quality assessment.',
    active: true,
    ruleVersion: RULE_VERSION,
  },
  {
    id: 'route-followup-support',
    categories: ['SUPPORT_FOLLOWUP'],
    title: 'Follow up on previous support contact',
    description:
      'If a previous support interaction did not resolve your question, contact Man Matters again with your updated summary.',
    whatToPrepare: [
      'Date and channel of previous contact',
      'What was discussed or promised',
      'What remains unresolved',
      'Your updated question',
    ],
    sourceUrl: 'https://manmatters.com/contact-us',
    sourceOwner: 'Man Matters (unverified)',
    lastReviewedAt: '2026-10-01',
    reviewStatus: 'needs_review',
    disclaimer:
      'Re-contacting support does not guarantee a different outcome. Include your previous interaction details for context.',
    active: true,
    ruleVersion: RULE_VERSION,
  },
  {
    id: 'route-product-info',
    categories: ['PRODUCT_INFORMATION'],
    title: 'Official product information',
    description:
      'For general questions about product instructions or published information, check the official Man Matters product pages or contact support.',
    whatToPrepare: [
      'Product name',
      'The specific information you are looking for',
      'What you have already checked',
    ],
    sourceUrl: 'https://manmatters.com',
    sourceOwner: 'Man Matters (unverified)',
    lastReviewedAt: '2026-10-01',
    reviewStatus: 'needs_review',
    disclaimer:
      'Product information on this tool is not personalized. Always refer to the official product packaging and consult a professional for medical questions.',
    active: true,
    ruleVersion: RULE_VERSION,
  },
  {
    id: 'route-general-support',
    categories: ['OTHER'],
    title: 'General Man Matters support',
    description:
      'For concerns that do not match another category, contact Man Matters through their general support page.',
    whatToPrepare: [
      'A clear description of your concern',
      'Any relevant dates or product names',
      'Your specific question',
    ],
    sourceUrl: 'https://manmatters.com/contact-us',
    sourceOwner: 'Man Matters (unverified)',
    lastReviewedAt: '2026-10-01',
    reviewStatus: 'needs_review',
    disclaimer:
      'This is a general support link. Verify that it is the correct channel for your specific concern.',
    active: true,
    ruleVersion: RULE_VERSION,
  },
];

export const categoryOptions: CategoryOption[] = [
  {
    code: 'HEALTH_QUESTION',
    label: 'Product or usage question',
    example: 'E.g., "I noticed something different after using the product for two weeks."',
    disclaimer: 'This tool will prepare a question for professional review; it will not interpret your concern.',
    bgColor: 'var(--cat-product-bg)',
    accentColor: 'var(--cat-product-accent)',
    iconName: 'product',
  },
  {
    code: 'ORDER_DELAY',
    label: 'Delivery or order concern',
    example: 'E.g., "My order has not arrived and it has been 10 days."',
    bgColor: 'var(--cat-delivery-bg)',
    accentColor: 'var(--cat-delivery-accent)',
    iconName: 'delivery',
  },
  {
    code: 'PACKAGE_ISSUE',
    label: 'Packaging or quantity concern',
    example: 'E.g., "The package arrived open and one item seems to be missing."',
    bgColor: 'var(--cat-packaging-bg)',
    accentColor: 'var(--cat-packaging-accent)',
    iconName: 'packaging',
  },
  {
    code: 'SUPPORT_FOLLOWUP',
    label: 'Consultation or support follow-up',
    example: 'E.g., "I contacted support last week but my question was not fully answered."',
    disclaimer: 'This tool will prepare a question for professional review; it will not interpret your concern.',
    bgColor: 'var(--cat-consultation-bg)',
    accentColor: 'var(--cat-consultation-accent)',
    iconName: 'conversation',
  },
  {
    code: 'OTHER',
    label: 'Something else',
    example: 'E.g., "I have a question that does not fit the other categories."',
    bgColor: 'var(--cat-other-bg)',
    accentColor: 'var(--cat-other-accent)',
    iconName: 'note',
  },
];

export const previousActionOptions: PreviousActionOption[] = [
  { id: 'read_instructions', label: 'Read the product instructions' },
  { id: 'used_app_chat', label: 'Used app chat' },
  { id: 'called_support', label: 'Called support' },
  { id: 'requested_consultation', label: 'Requested a consultation' },
  { id: 'checked_order_tracking', label: 'Checked order tracking' },
  { id: 'reviewed_cancellation', label: 'Reviewed cancellation/replacement information' },
  { id: 'asked_elsewhere', label: 'Asked elsewhere' },
  { id: 'no_action', label: 'No action yet', exclusive: true },
  { id: 'other', label: 'Other' },
];

export const followUpOptions: FollowUpOption[] = [
  { value: 'NOT_SENT', label: 'Not contacted yet' },
  { value: 'SENT', label: 'Contact attempted' },
  { value: 'AWAITING_RESPONSE', label: 'Waiting for response' },
  { value: 'ANSWERED', label: 'Question answered' },
  { value: 'CLOSED', label: 'Need another route' },
];

export const FAQ_ITEMS = [
  {
    question: 'Is this official Man Matters support?',
    answer:
      'No. This is an independent fellowship prototype created to help you prepare a clear question. It is not built, operated, or endorsed by Man Matters.',
  },
  {
    question: 'Does this tool provide medical advice?',
    answer:
      'No. This tool organizes the facts you provide and suggests an existing support route. It does not interpret symptoms, diagnose conditions, or recommend treatments. For health concerns, consult a qualified healthcare professional.',
  },
  {
    question: 'Is my information stored?',
    answer:
      'In the current version, your information exists only in your browser\'s active session memory. It is not saved to any server, database, or browser storage. Refreshing or closing the page will clear your data.',
  },
  {
    question: 'Does it contact support for me?',
    answer:
      'No. Nothing is sent automatically. You review and approve your summary, then manually copy, print, or download it to use when you contact support yourself.',
  },
  {
    question: 'What can I include in the summary?',
    answer:
      'You can include the product name, approximate dates, what you observed, actions you already took, and the question you want answered. All information is optional except a brief description and your question.',
  },
  {
    question: 'What should I avoid entering?',
    answer:
      'Do not enter your full name, phone number, prescription images, scalp photographs, payment details, or government identification. This tool does not need or protect that level of personal information.',
  },
  {
    question: 'What if I feel seriously unwell?',
    answer:
      'If you feel seriously unwell or believe you are experiencing a medical emergency, stop using this tool and seek immediate local medical assistance. Call your local emergency number or visit the nearest hospital.',
  },
  {
    question: 'How are support links selected?',
    answer:
      'Support routes are selected using fixed rules based on your concern category. They are not generated by AI. Each route shows its source URL and the date it was last reviewed. Routes may become outdated; always verify that a link is current before relying on it.',
  },
  {
    question: 'Can I edit the generated summary?',
    answer:
      'Yes. Every sentence in the generated summary is editable. You can change any text before copying, printing, or downloading it. The summary uses your exact words and does not add medical interpretations.',
  },
  {
    question: 'What happens when I close the page?',
    answer:
      'Your information is cleared from memory when you close or refresh the page. Nothing is saved. If you want to keep your summary, use the copy, print, or download option before leaving.',
  },
];
