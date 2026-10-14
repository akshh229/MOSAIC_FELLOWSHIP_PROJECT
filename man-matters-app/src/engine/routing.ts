/**
 * Man Matters Next Step — Deterministic Routing Engine
 * 
 * Per PRD FR-020: The same structured input and rule version always return the same route.
 * Per PRD: Must NOT use keywords in health-related free text for diagnosis or triage.
 * Routes are selected based ONLY on the structured concern category.
 */
import type { ConcernCategory, GuidanceRoute } from '../types';
import { guidanceRoutes } from '../config/guidance';

/**
 * Finds the best matching route for a given concern category.
 * Uses only structured category selection — never free text analysis.
 */
export function getRouteForCategory(
  category: ConcernCategory | null
): GuidanceRoute | null {
  if (!category) return null;

  // Find active routes matching this category
  const matching = guidanceRoutes.filter(
    (route) => route.active && route.categories.includes(category)
  );

  if (matching.length === 0) {
    // Fallback to general support
    return getFallbackRoute();
  }

  // Return the first matching active route
  return matching[0];
}

/**
 * Returns the general-support fallback route.
 * Per PRD FR-024: If no reviewed rule matches, show neutral general-support.
 */
export function getFallbackRoute(): GuidanceRoute | null {
  const fallback = guidanceRoutes.find(
    (route) => route.id === 'route-general-support' && route.active
  );
  return fallback ?? null;
}

/**
 * Returns all routes for a given category (for "Review options" display).
 */
export function getRoutesForCategory(
  category: ConcernCategory | null
): GuidanceRoute[] {
  if (!category) return [];
  
  const matching = guidanceRoutes.filter(
    (route) => route.active && route.categories.includes(category)
  );

  if (matching.length === 0) {
    const fallback = getFallbackRoute();
    return fallback ? [fallback] : [];
  }

  return matching;
}

/**
 * Validates that a route is safe to display with an active link.
 * Per PRD: Disable unverified external actions.
 */
export function isRouteVerified(route: GuidanceRoute): boolean {
  return route.reviewStatus === 'verified';
}

/**
 * Whether a category is health-related (requires medical boundary notice).
 */
export function isHealthRelatedCategory(category: ConcernCategory | null): boolean {
  return category === 'HEALTH_QUESTION' || category === 'SUPPORT_FOLLOWUP';
}
