/**
 * Confirmation Modal — Focus-trapping, Escape-closing, accessible dialog.
 * Per design docs: Use only for destructive confirmation, exit with unsaved data,
 * or essential safety interruption.
 */
import { useEffect, useRef, useCallback, type ReactNode } from 'react';
import { IconClose } from './Icons';

interface ModalProps {
  isOpen: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
  actions: ReactNode;
  variant?: 'default' | 'destructive';
}

export function Modal({ isOpen, title, children, onClose, actions, variant: _variant = 'default' }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  // Focus trap and restore
  useEffect(() => {
    if (isOpen) {
      previousFocus.current = document.activeElement as HTMLElement;
      // Focus the modal after a brief delay for animation
      setTimeout(() => {
        modalRef.current?.focus();
      }, 50);
    } else if (previousFocus.current) {
      previousFocus.current.focus();
      previousFocus.current = null;
    }
  }, [isOpen]);

  // Escape key handler
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape' && isOpen) {
      onClose();
    }
    // Focus trap
    if (e.key === 'Tab' && modalRef.current) {
      const focusable = modalRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    }
  }, [isOpen, onClose]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div 
      className="modal-overlay" 
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="presentation"
    >
      <div
        ref={modalRef}
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex={-1}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
          <h2 id="modal-title" className="modal-title">{title}</h2>
          <button
            className="btn btn-icon"
            onClick={onClose}
            aria-label="Close dialog"
            style={{ background: 'transparent', border: 'none', flexShrink: 0 }}
          >
            <IconClose size={20} />
          </button>
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-actions">{actions}</div>
      </div>
    </div>
  );
}
