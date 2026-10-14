/**
 * Navigation — Floating rounded shell on desktop, compact mobile header.
 * Per design docs: Wordmark "Next Step", qualifier, links, CTA.
 * Sticky after hero scroll; never covers focused content.
 */
import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IconMenu, IconClose } from './Icons';
import { useAppState } from '../state/AppContext';
import { Modal } from './Modal';
import './Navigation.css';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showClearModal, setShowClearModal] = useState(false);
  const { state, dispatch } = useAppState();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleCTAClick = useCallback(() => {
    navigate('/prepare');
    setMobileMenuOpen(false);
  }, [navigate]);

  const handleClearSession = useCallback(() => {
    dispatch({ type: 'CLEAR_ALL' });
    setShowClearModal(false);
    navigate('/');
  }, [dispatch, navigate]);

  return (
    <>
      <nav
        className={`main-nav ${scrolled ? 'main-nav--scrolled' : ''}`}
        aria-label="Main navigation"
      >
        <div className="nav-inner container">
          <div className="nav-brand">
            <Link to="/" className="nav-wordmark" aria-label="Next Step - Home">
              <span className="nav-wordmark-text">Next Step</span>
            </Link>
            <span className="nav-qualifier">Independent fellowship prototype</span>
          </div>

          {/* Desktop Links */}
          <div className="nav-links" role="list">
            <a href="/#how-it-works" className="nav-link" role="listitem">How it works</a>
            <Link to="/privacy" className="nav-link" role="listitem">Privacy</Link>
            <Link to="/safety" className="nav-link" role="listitem">Safety</Link>
            <a href="/#faq" className="nav-link" role="listitem">FAQ</a>
          </div>

          <div className="nav-actions">
            {state.consentAcknowledged && (
              <button
                className="btn btn-sm btn-destructive no-print"
                onClick={() => setShowClearModal(true)}
                style={{ marginRight: '8px' }}
              >
                Clear session
              </button>
            )}
            <button className="btn btn-primary btn-sm nav-cta" onClick={handleCTAClick}>
              Prepare my question
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="nav-menu-toggle btn btn-icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <IconClose size={24} /> : <IconMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Sheet */}
        {mobileMenuOpen && (
          <div className="mobile-menu" id="mobile-menu" role="navigation" aria-label="Mobile navigation">
            <div className="mobile-menu-links">
              <a href="/#how-it-works" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>How it works</a>
              <Link to="/privacy" className="mobile-menu-link">Privacy</Link>
              <Link to="/safety" className="mobile-menu-link">Safety</Link>
              <a href="/#faq" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
              <Link to="/about" className="mobile-menu-link">About</Link>
            </div>
            <button className="btn btn-primary" onClick={handleCTAClick} style={{ width: '100%', marginTop: '16px' }}>
              Prepare my question
            </button>
            {state.consentAcknowledged && (
              <button
                className="btn btn-destructive"
                onClick={() => { setShowClearModal(true); setMobileMenuOpen(false); }}
                style={{ width: '100%', marginTop: '8px' }}
              >
                Clear session
              </button>
            )}
          </div>
        )}
      </nav>

      {/* Clear Session Modal */}
      <Modal
        isOpen={showClearModal}
        title="Clear this session?"
        onClose={() => setShowClearModal(false)}
        variant="destructive"
        actions={
          <>
            <button className="btn btn-secondary" onClick={() => setShowClearModal(false)}>
              Cancel
            </button>
            <button className="btn btn-destructive" onClick={handleClearSession}>
              Clear everything
            </button>
          </>
        }
      >
        <p>
          This will remove all your answers and the generated summary from this session.
          This action cannot be undone. Nothing has been saved elsewhere.
        </p>
      </Modal>
    </>
  );
}
