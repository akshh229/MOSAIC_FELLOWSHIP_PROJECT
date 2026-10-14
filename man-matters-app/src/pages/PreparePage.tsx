/**
 * Prepare Page — Guided 6-step workflow with introduction.
 * Per design docs: Introduction → Step 1-6 → Navigate to Summary.
 */
import { useState, useCallback, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppState } from '../state/AppContext';
import { categoryOptions, previousActionOptions } from '../config/guidance';
import { getRouteForCategory, isHealthRelatedCategory } from '../engine/routing';
import { generateSummary } from '../engine/summary';
import { getCategoryIcon, IconCheck, IconArrowLeft, IconArrowRight, IconAlertTriangle, IconInfo, IconShield, IconErrorCircle } from '../components/Icons';
import { Modal } from '../components/Modal';
import type { GuidanceRoute } from '../types';
import './PreparePage.css';

export function PreparePage() {
  const { state, dispatch } = useAppState();
  const navigate = useNavigate();
  const [showExitModal, setShowExitModal] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  const step = state.currentStep;

  // Focus management on step change
  useEffect(() => {
    const heading = mainRef.current?.querySelector('h2, h1');
    if (heading instanceof HTMLElement) {
      heading.focus();
    }
  }, [step]);

  const goNext = useCallback(() => {
    if (step === 0) {
      dispatch({ type: 'ACKNOWLEDGE_CONSENT' });
    } else if (step < 6) {
      dispatch({ type: 'SET_STEP', step: step + 1 });
    } else {
      // Step 6 complete — go to summary
      const route = getRouteForCategory(state.draft.category);
      if (route) {
        dispatch({ type: 'SET_ROUTE', routeId: route.id });
      }
      const summaryText = generateSummary(state.draft, route);
      dispatch({ type: 'SET_SUMMARY_TEXT', text: summaryText });
      dispatch({ type: 'COMPLETE_WORKFLOW' });
      navigate('/summary');
    }
  }, [step, state.draft, dispatch, navigate]);

  const goBack = useCallback(() => {
    if (step > 0) {
      dispatch({ type: 'SET_STEP', step: step - 1 });
    }
  }, [step, dispatch]);

  const handleExit = useCallback(() => {
    if (state.draft.category || state.draft.factualDescription) {
      setShowExitModal(true);
    } else {
      navigate('/');
    }
  }, [state.draft, navigate]);

  const confirmExit = useCallback(() => {
    dispatch({ type: 'CLEAR_ALL' });
    setShowExitModal(false);
    navigate('/');
  }, [dispatch, navigate]);

  return (
    <div className="prepare-page" ref={mainRef}>
      {/* Top Bar */}
      <div className="prepare-topbar">
        <div className="container prepare-topbar-inner">
          <div className="prepare-topbar-left">
            {step > 0 && (
              <button className="btn btn-icon btn-tertiary" onClick={goBack} aria-label="Go back">
                <IconArrowLeft size={20} />
              </button>
            )}
            <span className="prepare-product-name serif">Next Step</span>
          </div>
          <div className="prepare-topbar-center">
            <span className="chip chip-default">
              <IconShield size={14} aria-hidden="true" /> Session only
            </span>
          </div>
          <button className="btn btn-sm btn-secondary" onClick={handleExit}>
            Exit
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      {step > 0 && (
        <div className="prepare-progress">
          <div className="container">
            <div className="prepare-progress-meta">
              <span className="mono" style={{ fontSize: '0.8rem', color: 'var(--ink-muted)' }}>
                Step {step} of 6
              </span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${(step / 6) * 100}%` }} />
            </div>
          </div>
        </div>
      )}

      {/* Step Content */}
      <main id="main-content" className="prepare-main">
        <div className="container-form">
          {step === 0 && <IntroductionStep />}
          {step === 1 && <CategoryStep />}
          {step === 2 && <ProductTimingStep />}
          {step === 3 && <WhatHappenedStep />}
          {step === 4 && <PreviousActionsStep />}
          {step === 5 && <QuestionStep />}
          {step === 6 && <RouteStep />}
        </div>
      </main>

      {/* Sticky Action Bar */}
      <div className="prepare-actions no-print">
        <div className="container-form prepare-actions-inner">
          {step > 0 && (
            <button className="btn btn-secondary" onClick={goBack}>
              <IconArrowLeft size={16} /> Back
            </button>
          )}
          <div style={{ flex: 1 }} />
          <ContinueButton step={step} draft={state.draft} onContinue={goNext} />
        </div>
      </div>

      {/* Exit Confirmation Modal */}
      <Modal
        isOpen={showExitModal}
        title="Leave this session?"
        onClose={() => setShowExitModal(false)}
        actions={
          <>
            <button className="btn btn-secondary" onClick={() => setShowExitModal(false)}>Stay</button>
            <button className="btn btn-destructive" onClick={confirmExit}>Leave and clear</button>
          </>
        }
      >
        <p>Your answers will be cleared. This session's data is not saved anywhere and cannot be recovered.</p>
      </Modal>
    </div>
  );
}

/* ─── Continue Button with step-specific validation ─── */
function ContinueButton({ step, draft, onContinue }: { step: number; draft: any; onContinue: () => void }) {
  const [error, setError] = useState('');

  const handleClick = () => {
    setError('');
    if (step === 0) {
      // Check consent
      const checkbox = document.getElementById('consent-checkbox') as HTMLInputElement;
      if (!checkbox?.checked) {
        setError('Please acknowledge the statement above to continue.');
        checkbox?.focus();
        return;
      }
    }
    if (step === 1 && !draft.category) {
      setError('Please select a concern category.');
      return;
    }
    if (step === 3) {
      if (!draft.factualDescription || draft.factualDescription.trim().length < 10) {
        setError('Please describe what happened (at least 10 characters).');
        return;
      }
    }
    if (step === 4 && draft.previousActions.length === 0) {
      setError('Please select at least one option.');
      return;
    }
    if (step === 5) {
      if (!draft.desiredQuestion || draft.desiredQuestion.trim().length < 5) {
        setError('Please enter your question (at least 5 characters).');
        return;
      }
    }
    onContinue();
  };

  const label = step === 0 ? 'Start' : step === 6 ? 'View my summary' : 'Continue';

  return (
    <div>
      {error && (
        <p className="form-error" role="alert" style={{ marginBottom: '8px' }}>
          <IconErrorCircle size={16} color="var(--danger)" aria-hidden="true" />
          {error}
        </p>
      )}
      <button className="btn btn-primary" onClick={handleClick}>
        {label} <IconArrowRight size={16} />
      </button>
    </div>
  );
}

/* ─── Step 0: Introduction ─── */
function IntroductionStep() {
  return (
    <div className="step-card">
      <h2 className="h2 step-title" tabIndex={-1}>Before you start</h2>
      <p className="lead" style={{ marginTop: '16px', color: 'var(--ink-muted)' }}>
        This tool helps you organize the facts about a post-purchase concern,
        prepare a clear question, and identify an existing support route.
      </p>

      <div className="notice notice-info" style={{ marginTop: '32px' }}>
        <IconInfo size={20} aria-hidden="true" />
        <div>
          <strong>Not official support.</strong> This is an independent fellowship prototype,
          not a Man Matters product or service.
        </div>
      </div>

      <div className="notice notice-warning" style={{ marginTop: '16px' }}>
        <IconAlertTriangle size={20} aria-hidden="true" />
        <div>
          <strong>Not medical advice.</strong> This tool does not diagnose conditions,
          interpret symptoms, or recommend treatments. For health concerns,
          consult a qualified professional.
        </div>
      </div>

      <div style={{ marginTop: '24px', padding: '16px 20px', background: 'var(--canvas-soft)', borderRadius: 'var(--radius-md)' }}>
        <p style={{ fontSize: '0.9rem', color: 'var(--ink-muted)' }}>
          <strong>Your information stays in this session.</strong> Nothing is saved
          to any server or browser storage. Refreshing or closing the page will
          clear your data.
        </p>
      </div>

      <label className="checkbox-wrapper" style={{ marginTop: '32px' }} htmlFor="consent-checkbox">
        <input type="checkbox" id="consent-checkbox" />
        <span style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>
          I understand this tool prepares a summary and does not provide a diagnosis.
        </span>
      </label>
    </div>
  );
}

/* ─── Step 1: Concern Category ─── */
function CategoryStep() {
  const { state, dispatch } = useAppState();

  return (
    <div className="step-card">
      <h2 className="h2 step-title" tabIndex={-1}>What is your concern about?</h2>
      <p className="body-text" style={{ marginTop: '12px', color: 'var(--ink-muted)' }}>
        Choose the category that best fits your situation.
      </p>

      <fieldset className="category-fieldset" style={{ marginTop: '32px' }}>
        <legend className="sr-only">Concern category</legend>
        <div className="category-options">
          {categoryOptions.map((cat) => (
            <button
              key={cat.code}
              type="button"
              className={`selectable-card ${state.draft.category === cat.code ? 'selected' : ''}`}
              style={{ background: cat.bgColor }}
              onClick={() => dispatch({ type: 'SET_CATEGORY', category: cat.code })}
              aria-pressed={state.draft.category === cat.code}
            >
              <div className="category-icon" style={{ color: cat.accentColor }}>
                {getCategoryIcon(cat.iconName, { size: 24, color: cat.accentColor })}
              </div>
              <div>
                <span className="label-text" style={{ color: cat.accentColor }}>{cat.label}</span>
                <p style={{ fontSize: '0.85rem', color: 'var(--ink-muted)', marginTop: '4px' }}>
                  {cat.example}
                </p>
              </div>
              <div className="check-icon">
                <IconCheck size={14} color="white" aria-hidden="true" />
              </div>
            </button>
          ))}
        </div>
      </fieldset>

      {isHealthRelatedCategory(state.draft.category) && (
        <div className="notice notice-warning" style={{ marginTop: '24px' }}>
          <IconAlertTriangle size={20} aria-hidden="true" />
          <div>
            This tool will prepare a question for professional review; it will not interpret your concern.
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Step 2: Product and Timing ─── */
function ProductTimingStep() {
  const { state, dispatch } = useAppState();

  const update = (field: string, value: string) => {
    dispatch({ type: 'UPDATE_DRAFT', updates: { [field]: value } });
  };

  return (
    <div className="step-card">
      <h2 className="h2 step-title" tabIndex={-1}>Product and timing</h2>
      <p className="body-text" style={{ marginTop: '12px', color: 'var(--ink-muted)' }}>
        Enter what you know. Approximate dates are fine.
      </p>

      <div className="form-fields" style={{ marginTop: '32px' }}>
        <div className="form-group">
          <label className="form-label" htmlFor="product-name">
            What is the exact product name?
          </label>
          <p className="form-helper">Optional. Write "Not sure" if you do not know.</p>
          <input
            type="text"
            id="product-name"
            className="form-input"
            value={state.draft.productName}
            onChange={(e) => update('productName', e.target.value)}
            maxLength={120}
            placeholder="e.g. Hair Growth Serum"
          />
          <span className="char-guide">{state.draft.productName.length}/120</span>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="start-date">
            When did you start using or order it?
          </label>
          <p className="form-helper">Approximate date is fine. Write "Not sure" or use a date.</p>
          <input
            type="text"
            id="start-date"
            className="form-input"
            value={state.draft.productStartDate}
            onChange={(e) => update('productStartDate', e.target.value)}
            placeholder="e.g. Around September 2026 or Not sure"
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="issue-date">
            When did you first notice the issue or question?
          </label>
          <p className="form-helper">Approximate date is fine.</p>
          <input
            type="text"
            id="issue-date"
            className="form-input"
            value={state.draft.issueDate}
            onChange={(e) => update('issueDate', e.target.value)}
            placeholder="e.g. About 2 weeks ago or Not sure"
          />
        </div>
      </div>
    </div>
  );
}

/* ─── Step 3: What Happened ─── */
function WhatHappenedStep() {
  const { state, dispatch } = useAppState();

  const update = (field: string, value: string) => {
    dispatch({ type: 'UPDATE_DRAFT', updates: { [field]: value } });
  };

  return (
    <div className="step-card">
      <h2 className="h2 step-title" tabIndex={-1}>What happened?</h2>
      <p className="body-text" style={{ marginTop: '12px', color: 'var(--ink-muted)' }}>
        Describe only what you observed. Your wording will be preserved.
      </p>

      {isHealthRelatedCategory(state.draft.category) && (
        <div className="notice notice-info" style={{ marginTop: '20px' }}>
          <IconInfo size={20} aria-hidden="true" />
          <div style={{ fontSize: '0.85rem' }}>
            Describe the facts you noticed. This tool does not interpret medical information or classify symptoms.
          </div>
        </div>
      )}

      <div className="form-fields" style={{ marginTop: '24px' }}>
        <div className="form-group">
          <label className="form-label" htmlFor="description">
            Describe only what you observed
          </label>
          <p className="form-helper">Be factual. Include what you noticed, not what you think it means.</p>
          <textarea
            id="description"
            className="form-textarea"
            value={state.draft.factualDescription}
            onChange={(e) => update('factualDescription', e.target.value)}
            maxLength={2000}
            rows={5}
            placeholder="e.g. I noticed increased shedding after using the product for 3 weeks."
          />
          <span className="char-guide">{state.draft.factualDescription.length}/2000</span>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="expected">
            What did you expect instead? <span className="text-muted" style={{ fontWeight: 400 }}>(optional)</span>
          </label>
          <textarea
            id="expected"
            className="form-textarea"
            value={state.draft.expectedOutcome}
            onChange={(e) => update('expectedOutcome', e.target.value)}
            maxLength={1000}
            rows={3}
            placeholder="e.g. I expected to see less shedding, not more."
          />
          <span className="char-guide">{state.draft.expectedOutcome.length}/1000</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Step 4: Previous Actions ─── */
function PreviousActionsStep() {
  const { state, dispatch } = useAppState();
  const actions = state.draft.previousActions;

  const toggleAction = (id: string) => {
    const option = previousActionOptions.find((o) => o.id === id);
    let newActions: string[];

    if (option?.exclusive) {
      // "No action yet" is exclusive — selecting it deselects all others
      newActions = actions.includes(id) ? [] : [id];
    } else {
      // Deselect "no_action" when selecting another action
      newActions = actions.filter((a) => a !== 'no_action');
      if (newActions.includes(id)) {
        newActions = newActions.filter((a) => a !== id);
      } else {
        newActions = [...newActions, id];
      }
    }
    dispatch({ type: 'UPDATE_DRAFT', updates: { previousActions: newActions } });
  };

  return (
    <div className="step-card">
      <h2 className="h2 step-title" tabIndex={-1}>What have you already tried?</h2>
      <p className="body-text" style={{ marginTop: '12px', color: 'var(--ink-muted)' }}>
        Select all actions you have already taken.
      </p>

      <fieldset className="actions-fieldset" style={{ marginTop: '32px' }}>
        <legend className="sr-only">Previous actions taken</legend>
        <div className="actions-options">
          {previousActionOptions.map((opt) => (
            <label key={opt.id} className={`checkbox-wrapper action-option ${actions.includes(opt.id) ? 'selected' : ''}`}>
              <input
                type="checkbox"
                checked={actions.includes(opt.id)}
                onChange={() => toggleAction(opt.id)}
                name="previousActions"
              />
              <span>{opt.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {actions.includes('other') && (
        <div className="form-group" style={{ marginTop: '24px' }}>
          <label className="form-label" htmlFor="action-other">What else did you try?</label>
          <input
            type="text"
            id="action-other"
            className="form-input"
            value={state.draft.previousActionOther}
            onChange={(e) => dispatch({ type: 'UPDATE_DRAFT', updates: { previousActionOther: e.target.value } })}
            maxLength={500}
            placeholder="Describe the other action"
          />
        </div>
      )}

      {actions.length > 0 && !actions.includes('no_action') && (
        <div className="form-group" style={{ marginTop: '24px' }}>
          <label className="form-label" htmlFor="action-result">
            What happened after that? <span className="text-muted" style={{ fontWeight: 400 }}>(optional)</span>
          </label>
          <textarea
            id="action-result"
            className="form-textarea"
            value={state.draft.previousActionResult}
            onChange={(e) => dispatch({ type: 'UPDATE_DRAFT', updates: { previousActionResult: e.target.value } })}
            maxLength={1000}
            rows={3}
            placeholder="e.g. Support said they would follow up but I haven't heard back."
          />
        </div>
      )}
    </div>
  );
}

/* ─── Step 5: Question ─── */
function QuestionStep() {
  const { state, dispatch } = useAppState();

  return (
    <div className="step-card">
      <h2 className="h2 step-title" tabIndex={-1}>What question would you like answered?</h2>
      <p className="body-text" style={{ marginTop: '12px', color: 'var(--ink-muted)' }}>
        Write the single question you most want answered. Your wording will be preserved exactly.
      </p>

      <div style={{ marginTop: '24px', padding: '16px 20px', background: 'var(--surface-sage)', borderRadius: 'var(--radius-md)' }}>
        <p style={{ fontSize: '0.85rem', color: 'var(--ink-muted)', fontStyle: 'italic' }}>
          Suggested structure: I used/ordered [product] around [date]. I noticed [fact].
          I already tried [action]. Could you clarify [question]?
        </p>
      </div>

      <div className="form-group" style={{ marginTop: '24px' }}>
        <label className="form-label" htmlFor="desired-question">
          What single question would you most like answered?
        </label>
        <textarea
          id="desired-question"
          className="form-textarea"
          value={state.draft.desiredQuestion}
          onChange={(e) => dispatch({ type: 'UPDATE_DRAFT', updates: { desiredQuestion: e.target.value } })}
          maxLength={500}
          rows={4}
          placeholder="e.g. Is the increased shedding expected, and should I continue using the product?"
        />
        <span className="char-guide">{state.draft.desiredQuestion.length}/500</span>
      </div>

      {isHealthRelatedCategory(state.draft.category) && (
        <div className="notice notice-warning" style={{ marginTop: '24px' }}>
          <IconAlertTriangle size={20} aria-hidden="true" />
          <div style={{ fontSize: '0.85rem' }}>
            Your question will be included in the summary for a qualified professional. This tool will not answer health questions.
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Step 6: Route Suggestion ─── */
function RouteStep() {
  const { state } = useAppState();
  const route = getRouteForCategory(state.draft.category);

  return (
    <div className="step-card">
      <h2 className="h2 step-title" tabIndex={-1}>Suggested next route</h2>
      <p className="body-text" style={{ marginTop: '12px', color: 'var(--ink-muted)' }}>
        Based on your concern category, here is a reviewed route you can use.
      </p>

      {route ? (
        <RouteCard route={route} />
      ) : (
        <div className="notice notice-info" style={{ marginTop: '32px' }}>
          <IconInfo size={20} aria-hidden="true" />
          <div>
            No specific route matched your concern category.
            Your summary is still available to copy, print, or download.
            Consider visiting the Man Matters website directly for general support.
          </div>
        </div>
      )}

      <p style={{ marginTop: '24px', fontSize: '0.85rem', color: 'var(--ink-muted)', fontStyle: 'italic' }}>
        Opening a route does not guarantee a response or outcome.
      </p>
    </div>
  );
}

function RouteCard({ route }: { route: GuidanceRoute }) {
  const isVerified = route.reviewStatus === 'verified';

  return (
    <div className="card-route" style={{ marginTop: '32px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', flexWrap: 'wrap' }}>
        <h3 className="h3">{route.title}</h3>
        {route.reviewStatus === 'needs_review' && (
          <span className="chip chip-warning">Needs review</span>
        )}
        {isVerified && (
          <span className="chip chip-success">Verified</span>
        )}
      </div>
      <p className="body-text" style={{ marginTop: '12px', color: 'var(--ink-muted)' }}>
        {route.description}
      </p>

      {route.whatToPrepare.length > 0 && (
        <div style={{ marginTop: '16px' }}>
          <p className="label-text" style={{ marginBottom: '8px' }}>What to have ready:</p>
          <ul style={{ paddingLeft: '20px', color: 'var(--ink-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
            {route.whatToPrepare.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      <div style={{ marginTop: '20px', display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
        {isVerified ? (
          <a
            href={route.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
          >
            Open official page
            <IconArrowRight size={14} />
          </a>
        ) : (
          <button className="btn btn-secondary btn-sm" disabled title="This link has not been verified as currently active.">
            Open official page (unverified)
          </button>
        )}
      </div>

      <div style={{ marginTop: '16px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        <span className="mono" style={{ fontSize: '0.7rem', color: 'var(--ink-muted)' }}>
          Source: {route.sourceOwner}
        </span>
        <span className="mono" style={{ fontSize: '0.7rem', color: 'var(--ink-muted)' }}>
          Last reviewed: {route.lastReviewedAt}
        </span>
        <span className="mono" style={{ fontSize: '0.7rem', color: 'var(--ink-muted)' }}>
          Rule version: {route.ruleVersion}
        </span>
      </div>

      <p style={{ marginTop: '16px', fontSize: '0.8rem', color: 'var(--ink-muted)', fontStyle: 'italic' }}>
        {route.disclaimer}
      </p>
    </div>
  );
}
