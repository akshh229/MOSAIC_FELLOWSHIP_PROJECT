/**
 * Safety Page — Medical boundary statements and emergency instructions.
 * Per PRD FR-006: Prominent emergency redirect and safety boundaries.
 */
import { Link } from 'react-router-dom';
import { IconAlertTriangle, IconArrowRight, IconCheck } from '../components/Icons';
import './InfoPage.css';

export function SafetyPage() {
  return (
    <main id="main-content" className="info-page section">
      <div className="container-reading">
        <p className="eyebrow" style={{ marginBottom: '16px', color: 'var(--warning)' }}>Safety</p>
        <h1 className="h1 info-title">This tool does not provide medical advice</h1>
        <p className="lead" style={{ marginTop: '20px', color: 'var(--ink-muted)' }}>
          Man Matters Next Step helps you organize a factual question for a support
          channel or healthcare professional. It does not answer medical questions,
          interpret symptoms, or recommend treatments.
        </p>

        {/* Emergency Banner */}
        <div className="card-safety" style={{ marginTop: '40px', padding: '32px', textAlign: 'center' }}>
          <IconAlertTriangle size={36} color="var(--danger)" aria-hidden="true" />
          <h2 className="h3" style={{ marginTop: '16px', color: 'var(--danger)' }}>
            If you feel seriously unwell
          </h2>
          <p style={{ marginTop: '12px', color: 'var(--ink)', fontWeight: 500, fontSize: '1.05rem' }}>
            Stop using this tool immediately. Call your local emergency number
            or go to the nearest hospital.
          </p>
          <p style={{ marginTop: '8px', color: 'var(--ink-muted)', fontSize: '0.9rem' }}>
            In India: <strong>112</strong> (national emergency) |{' '}
            <strong>108</strong> (ambulance)
          </p>
        </div>

        {/* What this tool does NOT do */}
        <div className="card" style={{ marginTop: '32px', padding: '32px' }}>
          <h2 className="h3" style={{ marginBottom: '24px' }}>What this tool does NOT do</h2>
          <div className="info-checklist">
            <CheckItemDanger text="Does not diagnose any condition" />
            <CheckItemDanger text="Does not interpret symptoms or side effects" />
            <CheckItemDanger text="Does not recommend starting, stopping, or changing any treatment" />
            <CheckItemDanger text="Does not determine whether a product is authentic or defective" />
            <CheckItemDanger text="Does not replace advice from a qualified healthcare professional" />
            <CheckItemDanger text="Does not assess the severity or urgency of a health concern" />
          </div>
        </div>

        {/* What this tool DOES do */}
        <div className="card" style={{ marginTop: '24px', padding: '32px' }}>
          <h2 className="h3" style={{ marginBottom: '24px' }}>What this tool does</h2>
          <div className="info-checklist">
            <CheckItem text="Helps you organize scattered facts into a structured summary" />
            <CheckItem text="Preserves your exact wording without adding interpretation" />
            <CheckItem text="Shows existing support routes with source URLs and review dates" />
            <CheckItem text="Lets you copy, print, or download your summary for manual use" />
            <CheckItem text="Reminds you of medical boundaries at key interaction points" />
          </div>
        </div>

        {/* About health-related categories */}
        <div className="card" style={{ marginTop: '24px', padding: '32px' }}>
          <h2 className="h3" style={{ marginBottom: '16px' }}>Health-related categories</h2>
          <p style={{ color: 'var(--ink-muted)', lineHeight: '1.7' }}>
            When you select a health-related category (such as "Product or usage question"
            or "Consultation follow-up"), this tool:
          </p>
          <ul className="info-list">
            <li>Displays a medical boundary notice immediately</li>
            <li>Adds safety context to the summary output</li>
            <li>Directs the suggested route to a qualified professional rather than general support</li>
            <li>Does not parse, analyze, or classify any free-text you enter</li>
          </ul>
          <p style={{ marginTop: '16px', color: 'var(--ink-muted)', lineHeight: '1.7' }}>
            The tool uses the <strong>structured category only</strong> (your selection from
            a fixed list) to determine routing. It never analyzes the content of your free-text
            descriptions for keywords, medical terms, or symptom patterns.
          </p>
        </div>

        {/* About routes */}
        <div className="card" style={{ marginTop: '24px', padding: '32px' }}>
          <h2 className="h3" style={{ marginBottom: '16px' }}>About suggested routes</h2>
          <p style={{ color: 'var(--ink-muted)', lineHeight: '1.7' }}>
            Each route shown by this tool is selected deterministically from a fixed
            configuration file based on your concern category. Routes are not AI-generated.
            Each route displays:
          </p>
          <ul className="info-list">
            <li>The source URL and source owner</li>
            <li>The date it was last reviewed</li>
            <li>A verification status (verified, needs review, or expired)</li>
            <li>A route-specific disclaimer</li>
          </ul>
          <p style={{ marginTop: '16px', color: 'var(--ink-muted)', lineHeight: '1.7' }}>
            Unverified routes display a disabled link until an authorized reviewer confirms
            the URL is current and appropriate. Opening a route does not guarantee a
            response or resolution.
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

function CheckItemDanger({ text }: { text: string }) {
  return (
    <div className="info-check-item">
      <span style={{ color: 'var(--danger)', fontWeight: 600, flexShrink: 0 }}>✕</span>
      <span>{text}</span>
    </div>
  );
}
