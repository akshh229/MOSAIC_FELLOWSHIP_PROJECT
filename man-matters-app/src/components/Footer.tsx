/**
 * Footer component.
 * Per design docs: Next Step wordmark, qualifier, links, creator credit.
 */
import { Link, useNavigate } from 'react-router-dom';
import { useAppState } from '../state/AppContext';
import { useState } from 'react';
import { Modal } from './Modal';
import './Footer.css';

export function Footer() {
  const { state, dispatch } = useAppState();
  const navigate = useNavigate();
  const [showClearModal, setShowClearModal] = useState(false);

  return (
    <>
      <footer className="site-footer" role="contentinfo">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-brand">
              <span className="footer-wordmark serif">Next Step</span>
              <p className="footer-qualifier">
                Independent fellowship prototype. Not official Man Matters support or medical advice.
              </p>
            </div>

            <nav className="footer-nav" aria-label="Footer navigation">
              <Link to="/privacy" className="footer-link">Privacy</Link>
              <Link to="/safety" className="footer-link">Safety</Link>
              <Link to="/about" className="footer-link">About</Link>
              {state.consentAcknowledged && (
                <button
                  className="footer-link footer-link-btn"
                  onClick={() => setShowClearModal(true)}
                >
                  Clear session
                </button>
              )}
            </nav>

            <p className="footer-credit">
              Designed and built by Akshat Raj
            </p>
          </div>
        </div>
      </footer>

      <Modal
        isOpen={showClearModal}
        title="Clear this session?"
        onClose={() => setShowClearModal(false)}
        variant="destructive"
        actions={
          <>
            <button className="btn btn-secondary" onClick={() => setShowClearModal(false)}>Cancel</button>
            <button className="btn btn-destructive" onClick={() => {
              dispatch({ type: 'CLEAR_ALL' });
              setShowClearModal(false);
              navigate('/');
            }}>Clear everything</button>
          </>
        }
      >
        <p>This will remove all your answers and the generated summary from this session. This action cannot be undone.</p>
      </Modal>
    </>
  );
}
