/**
 * Summary Page — Editable output and route recommendation.
 * Per design docs: Desktop split layout, editable summary, route card,
 * copy/print/download/edit/clear actions, follow-up status.
 */
import { useState, useCallback, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAppState } from '../state/AppContext';
import { guidanceRoutes, followUpOptions } from '../config/guidance';
import { generateSummary, generateExportText } from '../engine/summary';
import { getRouteForCategory } from '../engine/routing';
import { useToast } from '../components/Toast';
import { Modal } from '../components/Modal';
import { IconCopy, IconPrint, IconDownload, IconEdit, IconCheck, IconArrowRight, IconExternalLink, IconAlertTriangle } from '../components/Icons';
import type { FollowUpState } from '../types';
import './SummaryPage.css';

export function SummaryPage() {
  const { state, dispatch } = useAppState();
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [showClearModal, setShowClearModal] = useState(false);
  const [showRegenerateModal, setShowRegenerateModal] = useState(false);
  const [copyState, setCopyState] = useState<'idle' | 'copied'>('idle');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const route = state.draft.selectedRouteId
    ? guidanceRoutes.find((r) => r.id === state.draft.selectedRouteId) ?? null
    : getRouteForCategory(state.draft.category);

  // ─── Empty State ───
  if (!state.workflowComplete || !state.draft.category) {
    return (
      <main id="main-content" className="summary-page">
        <div className="container-form" style={{ paddingTop: '120px', paddingBottom: '120px', textAlign: 'center' }}>
          <h1 className="h2">Your summary will appear here</h1>
          <p className="lead" style={{ marginTop: '16px', color: 'var(--ink-muted)', maxWidth: '480px', margin: '16px auto 0' }}>
            Complete the guided workflow to generate your concern summary.
            No fictional data will be shown here.
          </p>
          <Link to="/prepare" className="btn btn-primary" style={{ marginTop: '32px' }}>
            Start preparing your question <IconArrowRight size={16} />
          </Link>
        </div>
      </main>
    );
  }

  // ─── Handlers ───
  const handleEditSummary = useCallback((text: string) => {
    dispatch({ type: 'EDIT_SUMMARY', text });
  }, [dispatch]);

  const handleApprove = useCallback(() => {
    dispatch({ type: 'APPROVE_SUMMARY' });
    showToast('Summary approved. You can now copy, print, or download it.');
  }, [dispatch, showToast]);

  const handleCopy = useCallback(async () => {
    const exportText = generateExportText(state.draft, route, state.summaryText);
    try {
      await navigator.clipboard.writeText(exportText);
      setCopyState('copied');
      showToast('Summary copied to clipboard');
      setTimeout(() => setCopyState('idle'), 3000);
    } catch {
      // Fallback: select text for manual copy
      if (textareaRef.current) {
        textareaRef.current.select();
        showToast('Could not copy automatically. Please select and copy the text manually.', 'error');
      }
    }
  }, [state.draft, state.summaryText, route, showToast]);

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  const handleDownload = useCallback(() => {
    const exportText = generateExportText(state.draft, route, state.summaryText);
    const blob = new Blob([exportText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `man-matters-next-step-summary-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('File downloaded to your device. It stays on your device only.');
  }, [state.draft, state.summaryText, route, showToast]);

  const handleEditAnswers = useCallback(() => {
    dispatch({ type: 'SET_STEP', step: 1 });
    navigate('/prepare');
  }, [dispatch, navigate]);

  const handleClear = useCallback(() => {
    dispatch({ type: 'CLEAR_ALL' });
    setShowClearModal(false);
    navigate('/');
  }, [dispatch, navigate]);

  const handleRegenerate = useCallback(() => {
    const newText = generateSummary(state.draft, route);
    dispatch({ type: 'REGENERATE_SUMMARY', text: newText });
    setShowRegenerateModal(false);
    showToast('Summary regenerated from your current answers.');
  }, [state.draft, route, dispatch, showToast]);

  const handleFollowUp = useCallback((value: FollowUpState) => {
    dispatch({ type: 'SET_FOLLOW_UP', state: value });
  }, [dispatch]);

  return (
    <main id="main-content" className="summary-page">
      <div className="container-summary">
        <div className="summary-header">
          <div>
            <p className="eyebrow" style={{ color: 'var(--sage)', marginBottom: '8px' }}>Your prepared question</p>
            <h1 className="h2">
              {state.summaryApproved ? 'Summary approved' : 'Your draft is ready to review'}
            </h1>
          </div>
          {state.summaryApproved && (
            <span className="chip chip-success">
              <IconCheck size={14} /> Approved
            </span>
          )}
        </div>

        <div className="summary-layout">
          {/* ─── Left: Editable Summary ─── */}
          <div className="summary-left">
            <div className="card-summary">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h2 className="h3">Concern summary</h2>
                {state.summaryManuallyEdited && (
                  <button className="btn btn-tertiary btn-sm" onClick={() => setShowRegenerateModal(true)}>
                    Regenerate from answers
                  </button>
                )}
              </div>
              <textarea
                ref={textareaRef}
                className="summary-textarea"
                value={state.summaryText}
                onChange={(e) => handleEditSummary(e.target.value)}
                maxLength={5000}
                aria-label="Editable concern summary"
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
                <span className="char-guide">{state.summaryText.length}/5000</span>
                {state.summaryManuallyEdited && !state.summaryApproved && (
                  <span style={{ fontSize: '0.8rem', color: 'var(--warning)' }}>
                    Edited — approval reset
                  </span>
                )}
              </div>

              {/* Approval */}
              {!state.summaryApproved && (
                <div style={{ marginTop: '24px', textAlign: 'center' }}>
                  <p style={{ fontSize: '0.9rem', color: 'var(--ink-muted)', marginBottom: '16px' }}>
                    Review the summary above. When you are satisfied, approve it to enable export.
                  </p>
                  <button className="btn btn-primary" onClick={handleApprove}>
                    <IconCheck size={16} /> Approve summary
                  </button>
                </div>
              )}

              {/* Export Actions */}
              {state.summaryApproved && (
                <div className="summary-export-actions">
                  <button
                    className={`btn btn-primary ${copyState === 'copied' ? 'btn-copied' : ''}`}
                    onClick={handleCopy}
                  >
                    {copyState === 'copied' ? (
                      <><IconCheck size={16} /> Copied</>
                    ) : (
                      <><IconCopy size={16} /> Copy summary</>
                    )}
                  </button>
                  <button className="btn btn-secondary" onClick={handlePrint}>
                    <IconPrint size={16} /> Print
                  </button>
                  <button className="btn btn-secondary" onClick={handleDownload}>
                    <IconDownload size={16} /> Download text
                  </button>
                </div>
              )}

              <div className="summary-meta-actions" style={{ marginTop: '24px' }}>
                <button className="btn btn-tertiary btn-sm" onClick={handleEditAnswers}>
                  <IconEdit size={14} /> Edit answers
                </button>
                <button className="btn btn-sm btn-destructive" onClick={() => setShowClearModal(true)}>
                  Clear everything
                </button>
              </div>
            </div>

            {/* Disclaimers for print */}
            <div className="print-only" style={{ marginTop: '24px', fontSize: '0.8rem', color: '#666' }}>
              <p><strong>Man Matters Next Step</strong> — Independent fellowship prototype</p>
              <p>Not official Man Matters support or medical advice.</p>
              <p>This summary was reviewed by the user and was not sent automatically.</p>
              <p>Created: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
          </div>

          {/* ─── Right: Route Card & Follow-up ─── */}
          <div className="summary-right">
            {route ? (
              <div className="card-route">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                  <h3 className="h3">{route.title}</h3>
                  {route.reviewStatus === 'needs_review' && (
                    <span className="chip chip-warning">Needs review</span>
                  )}
                </div>
                <p style={{ marginTop: '12px', color: 'var(--ink-muted)', fontSize: '0.9rem' }}>
                  {route.description}
                </p>
                <div style={{ marginTop: '20px' }}>
                  {route.reviewStatus === 'verified' ? (
                    <a
                      href={route.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                    >
                      Open official page <IconExternalLink size={14} />
                    </a>
                  ) : (
                    <button className="btn btn-secondary btn-sm" disabled>
                      Open official page (unverified)
                    </button>
                  )}
                </div>
                <div style={{ marginTop: '16px', fontSize: '0.7rem', color: 'var(--ink-muted)', fontFamily: 'var(--font-mono)' }}>
                  <p>Source: {route.sourceOwner}</p>
                  <p>Last reviewed: {route.lastReviewedAt}</p>
                </div>
                <p style={{ marginTop: '12px', fontSize: '0.8rem', color: 'var(--ink-muted)', fontStyle: 'italic' }}>
                  {route.disclaimer}
                </p>
              </div>
            ) : (
              <div className="notice notice-info">
                <div>
                  <p><strong>No specific route available.</strong></p>
                  <p style={{ marginTop: '8px' }}>
                    Your summary is still available to copy, print, or download.
                    Consider visiting the Man Matters website directly.
                  </p>
                </div>
              </div>
            )}

            {/* Follow-up Status */}
            <div className="card" style={{ marginTop: '24px' }}>
              <h3 className="label-text" style={{ marginBottom: '12px' }}>Follow-up status</h3>
              <select
                className="form-input"
                value={state.draft.followUpState ?? ''}
                onChange={(e) => handleFollowUp(e.target.value as FollowUpState)}
                aria-label="Follow-up status"
                style={{ minHeight: '44px' }}
              >
                <option value="">Select status (optional)</option>
                {followUpOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <p style={{ marginTop: '12px', fontSize: '0.8rem', color: 'var(--ink-muted)', fontStyle: 'italic' }}>
                Recorded only in this session; not synchronized with Man Matters.
              </p>
            </div>

            {/* Manual Send Notice */}
            <div className="notice notice-info" style={{ marginTop: '24px' }}>
              <IconAlertTriangle size={18} aria-hidden="true" />
              <div style={{ fontSize: '0.85rem' }}>
                <strong>Nothing is sent automatically.</strong> Copy, print, or download
                your summary, then manually send it through your chosen support channel.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clear Modal */}
      <Modal
        isOpen={showClearModal}
        title="Clear everything?"
        onClose={() => setShowClearModal(false)}
        variant="destructive"
        actions={
          <>
            <button className="btn btn-secondary" onClick={() => setShowClearModal(false)}>Cancel</button>
            <button className="btn btn-destructive" onClick={handleClear}>Clear everything</button>
          </>
        }
      >
        <p>This will remove all your answers and the generated summary. This cannot be undone.</p>
      </Modal>

      {/* Regenerate Modal */}
      <Modal
        isOpen={showRegenerateModal}
        title="Regenerate summary?"
        onClose={() => setShowRegenerateModal(false)}
        actions={
          <>
            <button className="btn btn-secondary" onClick={() => setShowRegenerateModal(false)}>Keep edits</button>
            <button className="btn btn-primary" onClick={handleRegenerate}>Regenerate</button>
          </>
        }
      >
        <p>This will replace your manually edited summary with a fresh version generated from your current answers. Your edits will be lost.</p>
      </Modal>
    </main>
  );
}
