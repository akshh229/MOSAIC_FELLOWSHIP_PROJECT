/**
 * Man Matters Next Step — Application State (Runtime Only)
 * 
 * Per PRD FR-003: Keep concern data in runtime state by default.
 * No localStorage, sessionStorage, IndexedDB, or cookies.
 */
import { createContext, useContext, useReducer, type ReactNode } from 'react';
import type { ConcernDraft, ConcernCategory, FollowUpState } from '../types';

export interface AppState {
  /** Has user acknowledged the consent gate? */
  consentAcknowledged: boolean;
  /** Current step in the workflow (0 = intro, 1-6 = steps) */
  currentStep: number;
  /** The concern draft being built */
  draft: ConcernDraft;
  /** Generated summary text (user-editable) */
  summaryText: string;
  /** Whether summary has been manually edited */
  summaryManuallyEdited: boolean;
  /** Whether user has approved the summary for export */
  summaryApproved: boolean;
  /** Timestamp of summary approval */
  approvedAt: string | null;
  /** Whether the workflow is complete (reached summary) */
  workflowComplete: boolean;
}

const initialDraft: ConcernDraft = {
  schemaVersion: '1.0.0',
  category: null,
  productName: '',
  productStartDate: '',
  issueDate: '',
  factualDescription: '',
  expectedOutcome: '',
  previousActions: [],
  previousActionOther: '',
  previousActionResult: '',
  desiredQuestion: '',
  selectedRouteId: null,
  followUpState: null,
  userApproved: false,
};

const initialState: AppState = {
  consentAcknowledged: false,
  currentStep: 0,
  draft: { ...initialDraft },
  summaryText: '',
  summaryManuallyEdited: false,
  summaryApproved: false,
  approvedAt: null,
  workflowComplete: false,
};

type Action =
  | { type: 'ACKNOWLEDGE_CONSENT' }
  | { type: 'SET_STEP'; step: number }
  | { type: 'SET_CATEGORY'; category: ConcernCategory }
  | { type: 'UPDATE_DRAFT'; updates: Partial<ConcernDraft> }
  | { type: 'SET_SUMMARY_TEXT'; text: string }
  | { type: 'EDIT_SUMMARY'; text: string }
  | { type: 'APPROVE_SUMMARY' }
  | { type: 'COMPLETE_WORKFLOW' }
  | { type: 'SET_FOLLOW_UP'; state: FollowUpState }
  | { type: 'SET_ROUTE'; routeId: string }
  | { type: 'REGENERATE_SUMMARY'; text: string }
  | { type: 'CLEAR_ALL' };

function appReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'ACKNOWLEDGE_CONSENT':
      return { ...state, consentAcknowledged: true, currentStep: 1 };

    case 'SET_STEP':
      return { ...state, currentStep: action.step };

    case 'SET_CATEGORY':
      return {
        ...state,
        draft: { ...state.draft, category: action.category },
      };

    case 'UPDATE_DRAFT':
      return {
        ...state,
        draft: { ...state.draft, ...action.updates },
        // Reset approval if concern content changes
        summaryApproved: false,
        approvedAt: null,
      };

    case 'SET_SUMMARY_TEXT':
      return { ...state, summaryText: action.text };

    case 'EDIT_SUMMARY':
      return {
        ...state,
        summaryText: action.text,
        summaryManuallyEdited: true,
        summaryApproved: false,
        approvedAt: null,
      };

    case 'APPROVE_SUMMARY':
      return {
        ...state,
        summaryApproved: true,
        approvedAt: new Date().toISOString(),
        draft: { ...state.draft, userApproved: true },
      };

    case 'COMPLETE_WORKFLOW':
      return { ...state, workflowComplete: true };

    case 'SET_FOLLOW_UP':
      return {
        ...state,
        draft: { ...state.draft, followUpState: action.state },
      };

    case 'SET_ROUTE':
      return {
        ...state,
        draft: { ...state.draft, selectedRouteId: action.routeId },
      };

    case 'REGENERATE_SUMMARY':
      return {
        ...state,
        summaryText: action.text,
        summaryManuallyEdited: false,
        summaryApproved: false,
        approvedAt: null,
      };

    case 'CLEAR_ALL':
      return { ...initialState };

    default:
      return state;
  }
}

interface AppContextValue {
  state: AppState;
  dispatch: React.Dispatch<Action>;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppState() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppState must be used within AppProvider');
  }
  return context;
}

export { initialState, initialDraft };
