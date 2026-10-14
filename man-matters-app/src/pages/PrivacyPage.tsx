/**
 * Privacy Page — Comprehensive privacy position statement.
 * Per PRD: No analytics cookies, no local storage by default, no server-side storage.
 */
import { Link } from 'react-router-dom';
import { IconCheck, IconArrowRight } from '../components/Icons';
import './InfoPage.css';

export function PrivacyPage() {
  return (
    <main id="main-content" className="info-page section">
      <div className="container-reading">
        <p className="eyebrow" style={{ marginBottom: '16px' }}>Privacy</p>
        <h1 className="h1 info-title">Your information stays in this session</h1>
        <p className="lead" style={{ marginTop: '20px', color: 'var(--ink-muted)' }}>
          Man Matters Next Step is designed so your concern data exists only
          in your browser's active session memory. Nothing is sent to a server,
          saved in browser storage, or accessible to anyone else.
        </p>

        <div className="card" style={{ marginTop: '48px', padding: '32px' }}>
          <h2 className="h3" style={{ marginBottom: '24px' }}>What this means in practice</h2>
          <div className="info-checklist">
            <CheckItem text="Your answers are stored in runtime memory (React state). They are not written to localStorage, sessionStorage, IndexedDB, or cookies." />
            <CheckItem text="Refreshing or closing the browser tab clears all data." />
            <CheckItem text="No information is sent to any server, API, or third-party service." />
            <CheckItem text="No analytics, tracking pixels, or identifiers are used." />
            <CheckItem text="The summary you create is not transmitted automatically. You must copy, print, or download it yourself." />
            <CheckItem text="Downloaded files stay on your device. This tool does not access your file system." />
          </div>
        </div>

        <div className="card" style={{ marginTop: '24px', padding: '32px' }}>
          <h2 className="h3" style={{ marginBottom: '24px' }}>What not to enter</h2>
          <p style={{ color: 'var(--ink-muted)', lineHeight: '1.7' }}>
            Although this tool does not transmit data, you should still avoid
            entering the following types of information:
          </p>
          <ul className="info-list">
            <li>Full legal name</li>
            <li>Phone number or email address</li>
            <li>Prescription images or medical records</li>
            <li>Photographs of your body (including scalp)</li>
            <li>Payment details (card number, UPI ID)</li>
            <li>Government identification numbers</li>
          </ul>
          <p style={{ marginTop: '16px', color: 'var(--ink-muted)', fontSize: '0.9rem' }}>
            These are not needed for this tool's purpose. If a support channel
            requires personal details, share them directly with that channel,
            not through this tool.
          </p>
        </div>

        <div className="card" style={{ marginTop: '24px', padding: '32px' }}>
          <h2 className="h3" style={{ marginBottom: '16px' }}>Font and CDN resources</h2>
          <p style={{ color: 'var(--ink-muted)', lineHeight: '1.7' }}>
            This tool loads fonts from Google Fonts CDN. Google may see your IP address
            for this request. No other external resources are loaded at runtime.
          </p>
        </div>

        <div className="card" style={{ marginTop: '24px', padding: '32px' }}>
          <h2 className="h3" style={{ marginBottom: '16px' }}>Future changes</h2>
          <p style={{ color: 'var(--ink-muted)', lineHeight: '1.7' }}>
            If a future version adds optional browser storage for draft persistence,
            it will require explicit opt-in confirmation and display a visible
            indicator that data is being stored locally.
          </p>
        </div>

        <div style={{ marginTop: '48px', textAlign: 'center' }}>
          <Link to="/prepare" className="btn btn-primary">
            Prepare my question <IconArrowRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <div className="info-check-item">
      <IconCheck size={18} color="var(--success)" aria-hidden="true" />
      <span>{text}</span>
    </div>
  );
}
