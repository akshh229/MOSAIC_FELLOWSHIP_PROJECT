/**
 * About Page — Project context and creator information.
 */
import { Link } from 'react-router-dom';
import { IconArrowRight } from '../components/Icons';
import './InfoPage.css';

export function AboutPage() {
  return (
    <main id="main-content" className="info-page section">
      <div className="container-reading">
        <p className="eyebrow" style={{ marginBottom: '16px' }}>About</p>
        <h1 className="h1 info-title">Man Matters Next Step</h1>
        <p className="lead" style={{ marginTop: '20px', color: 'var(--ink-muted)' }}>
          An independent fellowship prototype exploring the post-purchase
          support-preparation gap.
        </p>

        <div className="card" style={{ marginTop: '48px', padding: '32px' }}>
          <h2 className="h3" style={{ marginBottom: '16px' }}>What is this?</h2>
          <p style={{ color: 'var(--ink-muted)', lineHeight: '1.7' }}>
            Man Matters Next Step is a client-side web application that helps
            customers organize facts about a post-purchase concern, write a
            clear question, and find a reviewed support route — before contacting
            the company.
          </p>
          <p style={{ marginTop: '16px', color: 'var(--ink-muted)', lineHeight: '1.7' }}>
            It was designed and built as a fellowship prototype. It is not
            built, operated, endorsed, or affiliated with Man Matters (Mosaic Wellness /
            Nugenix Technologies) in any way.
          </p>
        </div>

        <div className="card" style={{ marginTop: '24px', padding: '32px' }}>
          <h2 className="h3" style={{ marginBottom: '16px' }}>Hypothesis</h2>
          <p style={{ color: 'var(--ink-muted)', lineHeight: '1.7' }}>
            The core hypothesis is that some support interactions are less effective
            because the customer has not had an opportunity to organize their concern
            before contacting support. A structured preparation tool might reduce
            that gap.
          </p>
          <p style={{ marginTop: '16px', color: 'var(--ink-muted)', lineHeight: '1.7', fontStyle: 'italic' }}>
            This is a hypothesis, not a validated finding. The tool is designed
            to test the concept, not to make claims about Man Matters' support quality.
          </p>
        </div>

        <div className="card" style={{ marginTop: '24px', padding: '32px' }}>
          <h2 className="h3" style={{ marginBottom: '16px' }}>Key principles</h2>
          <ul className="info-list">
            <li><strong>Factual only:</strong> The tool uses the user's exact words. It does not paraphrase, infer, or interpret.</li>
            <li><strong>Deterministic routing:</strong> Routes are selected from a fixed configuration based on structured category — never from free-text analysis.</li>
            <li><strong>Medical boundaries:</strong> Health-related categories trigger safety notices. The tool never assesses medical significance.</li>
            <li><strong>Privacy by default:</strong> Data lives in runtime memory only. No server, no storage, no analytics.</li>
            <li><strong>Manual export only:</strong> Nothing is sent automatically. The user copies, prints, or downloads their summary.</li>
            <li><strong>Independent:</strong> The qualifier appears in navigation, footer, form introduction, and summary output.</li>
          </ul>
        </div>

        <div className="card" style={{ marginTop: '24px', padding: '32px' }}>
          <h2 className="h3" style={{ marginBottom: '16px' }}>Built by</h2>
          <p style={{ color: 'var(--ink-muted)', lineHeight: '1.7' }}>
            Designed and built by <strong>Akshat Raj</strong> as a fellowship prototype project.
          </p>
        </div>

        <div className="card" style={{ marginTop: '24px', padding: '32px' }}>
          <h2 className="h3" style={{ marginBottom: '16px' }}>Technology</h2>
          <p style={{ color: 'var(--ink-muted)', lineHeight: '1.7' }}>
            React, TypeScript, Vite. Client-side only. No backend. No database.
            No AI or machine learning is used at any point in the workflow.
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
