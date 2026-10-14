/**
 * Man Matters Next Step — Zod Validation Schemas
 * Source: PRD Validation Rules table
 */
import { z } from 'zod';

export const CONCERN_CATEGORIES = [
  'HEALTH_QUESTION',
  'ORDER_DELAY',
  'PACKAGE_ISSUE',
  'SUPPORT_FOLLOWUP',
  'PRODUCT_INFORMATION',
  'OTHER',
] as const;

export const FOLLOW_UP_STATES = [
  'NOT_SENT',
  'SENT',
  'AWAITING_RESPONSE',
  'ANSWERED',
  'CLOSED',
] as const;

export const PREVIOUS_ACTIONS = [
  'read_instructions',
  'used_app_chat',
  'called_support',
  'requested_consultation',
  'checked_order_tracking',
  'reviewed_cancellation',
  'asked_elsewhere',
  'no_action',
  'other',
] as const;

/* ─── Step 1: Category ─── */
export const categorySchema = z.object({
  category: z.enum(CONCERN_CATEGORIES, {
    required_error: 'Please select a concern category.',
  }),
});

/* ─── Step 2: Product and Timing ─── */
export const productTimingSchema = z.object({
  productName: z
    .string()
    .max(120, 'Product name must be 120 characters or fewer.')
    .optional()
    .default(''),
  productStartDate: z.string().optional().default(''),
  issueDate: z.string().optional().default(''),
});

/* ─── Step 3: What Happened ─── */
export const whatHappenedSchema = z.object({
  factualDescription: z
    .string()
    .min(10, 'Please provide at least 10 characters describing what happened.')
    .max(2000, 'Description must be 2,000 characters or fewer.'),
  expectedOutcome: z
    .string()
    .max(1000, 'Expected outcome must be 1,000 characters or fewer.')
    .optional()
    .default(''),
});

/* ─── Step 4: Previous Actions ─── */
export const previousActionsSchema = z.object({
  previousActions: z
    .array(z.string())
    .min(1, 'Please select at least one option.'),
  previousActionOther: z
    .string()
    .max(500, 'Other action must be 500 characters or fewer.')
    .optional()
    .default(''),
  previousActionResult: z
    .string()
    .max(1000, 'Result must be 1,000 characters or fewer.')
    .optional()
    .default(''),
});

/* ─── Step 5: Desired Question ─── */
export const questionSchema = z.object({
  desiredQuestion: z
    .string()
    .min(5, 'Please provide at least 5 characters for your question.')
    .max(500, 'Question must be 500 characters or fewer.'),
});

/* ─── Combined Draft ─── */
export const concernDraftSchema = z.object({
  schemaVersion: z.string().default('1.0.0'),
  category: z.enum(CONCERN_CATEGORIES).nullable(),
  productName: z.string().max(120).default(''),
  productStartDate: z.string().default(''),
  issueDate: z.string().default(''),
  factualDescription: z.string().min(10).max(2000).default(''),
  expectedOutcome: z.string().max(1000).default(''),
  previousActions: z.array(z.string()).default([]),
  previousActionOther: z.string().max(500).default(''),
  previousActionResult: z.string().max(1000).default(''),
  desiredQuestion: z.string().min(5).max(500).default(''),
  selectedRouteId: z.string().nullable().default(null),
  followUpState: z.enum(FOLLOW_UP_STATES).nullable().default(null),
  userApproved: z.boolean().default(false),
});

export type CategoryFormData = z.infer<typeof categorySchema>;
export type ProductTimingFormData = z.infer<typeof productTimingSchema>;
export type WhatHappenedFormData = z.infer<typeof whatHappenedSchema>;
export type PreviousActionsFormData = z.infer<typeof previousActionsSchema>;
export type QuestionFormData = z.infer<typeof questionSchema>;
