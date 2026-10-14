/**
 * Landing Page — Premium animated marketing page.
 * Features: Word-by-word blur reveal, 3D perspective cards, scroll-triggered
 * section entrances, horizontal sliding walkthrough, magnetic hover category
 * cards, smooth FAQ accordion, and glow-pulse CTA.
 */
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef, useCallback } from 'react';
import { categoryOptions, FAQ_ITEMS } from '../config/guidance';
import { getCategoryIcon, IconCheck, IconEdit, IconShield, IconLock, IconArrowRight, IconExternalLink, IconPlus } from '../components/Icons';
import { useScrollReveal } from '../hooks/useScrollReveal';
import heroEditorial from '../assets/hero-editorial-v2.webp';
import './LandingPage.css';

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <main id="main-content">
      <HeroSection onCTA={() => navigate('/prepare')} />
      <TransparencyStrip />
      <ProblemNarrative />
      <ThreeStepProcess />
      <ProductWalkthrough />
      <CategoryCards onSelect={() => navigate('/prepare')} />
      <PrivacySection />
      <SafetySection />
      <FAQSection />
      <FinalCTA onCTA={() => navigate('/prepare')} />
    </main>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO — Editorial photo collage + dimensional preparation window
   ═══════════════════════════════════════════════════════════════ */
function HeroSection({ onCTA }: { onCTA: () => void }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 150);
    return () => clearTimeout(t);
  }, []);

  const titleWords = ['A', 'clearer', 'way', 'to'];
  const accentWords = ['take', 'the', 'next', 'step.'];

  return (
    <section className={`hero section ${visible ? 'hero--visible' : ''}`} aria-labelledby="hero-heading">
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">
            <span className="hero-status-dot" aria-hidden="true" />
            A private space to get organised
          </p>

          <h1 id="hero-heading" className="hero-title" aria-label="A clearer way to take the next step.">
            {titleWords.map((word, i) => (
              <span key={i} className="hero-word" style={{ transitionDelay: `${200 + i * 80}ms` }} aria-hidden="true">
                {word}{' '}
              </span>
            ))}
            <br className="hero-break" />
            {accentWords.map((word, i) => (
              <span
                key={`a-${i}`}
                className="hero-word hero-word--accent serif"
                style={{ transitionDelay: `${200 + (titleWords.length + i) * 80}ms` }}
                aria-hidden="true"
              >
                {word}{' '}
              </span>
            ))}
          </h1>

          <p className="lead hero-lead">
            Gather what matters, shape the question in your own words, and find
            the right existing route — before you decide to contact anyone.
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary btn-lg btn-glow" onClick={onCTA}>
              Prepare my question <IconArrowRight size={18} />
            </button>
            <a href="#how-it-works" className="btn btn-ghost-hero">
              See how it works <IconArrowRight size={16} />
            </a>
          </div>

          <p className="hero-qualifier">
            Independent fellowship prototype · Not official support or medical advice.
          </p>
        </div>

        <div className="hero-preview">
          <div className="hero-photo-wrap">
            <img className="hero-photo" src={heroEditorial} alt="A person taking time to write a note in warm natural light." />
            <span className="hero-photo-stamp mono" aria-hidden="true">Take your time<br />01 / 03</span>
          </div>
          <div className="hero-canvas-3d" aria-label="An example of a private concern note being prepared">
            <div className="hero-canvas">
              <div className="hero-canvas-topline">
                <span className="hero-canvas-index mono">01</span>
                <span className="hero-canvas-title">Start with what happened</span>
                <span className="hero-canvas-pulse" aria-hidden="true" />
              </div>
              <p className="hero-canvas-copy">“I want to ask a clear question about my recent experience.”</p>
              <div className="hero-canvas-footer">
                <span className="chip chip-default">Your words</span>
                <span className="hero-canvas-arrow" aria-hidden="true">↗</span>
              </div>
            </div>
          </div>
          <div className="hero-float-note mono" aria-hidden="true">
            no account<br />needed
          </div>
        </div>
      </div>

      <div className="hero-sun" aria-hidden="true" />
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   TRANSPARENCY STRIP — Horizontal slide-in with dashed borders
   ═══════════════════════════════════════════════════════════════ */
function TransparencyStrip() {
  const ref = useScrollReveal();
  return (
    <section className="transparency-strip border-dash-t border-dash-b" aria-label="Transparency statements" ref={ref as any}>
      <div className="container">
        <div className="strip-items">
          {[
            { icon: <IconEdit size={22} color="var(--forest)" aria-hidden="true" />, text: 'Your wording stays editable' },
            { icon: <IconLock size={22} color="var(--forest)" aria-hidden="true" />, text: 'Nothing is sent automatically' },
            { icon: <IconExternalLink size={22} color="var(--forest)" aria-hidden="true" />, text: 'Guidance links show their source and review date' },
          ].map((item, i) => (
            <div key={i} className={`strip-item reveal-slide-left stagger-${i + 1}`}>
              {item.icon}
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PROBLEM NARRATIVE — Scroll-reveal title + 3D tilt cards
   ═══════════════════════════════════════════════════════════════ */
function ProblemNarrative() {
  const ref = useScrollReveal();
  return (
    <section className="problem section" style={{ background: 'var(--canvas-soft)' }} ref={ref as any}>
      <div className="container container-reading">
        <h2 className="h2 problem-title reveal">
          <span className="serif">When the answer is unclear,</span>{' '}
          the next message should not be.
        </h2>
        <p className="lead reveal stagger-2" style={{ marginTop: '24px', color: 'var(--ink-muted)' }}>
          Sometimes a support interaction ends without a clear answer.
          The preparation gap — not knowing what to include, whom to contact,
          or how to frame the question — is a hypothesis this prototype explores.
          It is not a universal claim.
        </p>
        <div className="problem-cards" style={{ marginTop: '48px' }}>
          <div className="card card-feature tilt-card reveal stagger-3" style={{ background: 'var(--surface-sage)' }}>
            <h3 className="h3">What this tool can change</h3>
            <ul style={{ marginTop: '16px', paddingLeft: '20px', color: 'var(--ink-muted)', lineHeight: '1.8' }}>
              <li>Help you organize scattered details into a clear summary</li>
              <li>Give you a structure for your question</li>
              <li>Show you a reviewed existing support route</li>
              <li>Let you copy, print, or download what you wrote</li>
            </ul>
          </div>
          <div className="card card-feature tilt-card reveal stagger-4" style={{ background: 'var(--surface-sand)' }}>
            <h3 className="h3">What it cannot change</h3>
            <ul style={{ marginTop: '16px', paddingLeft: '20px', color: 'var(--ink-muted)', lineHeight: '1.8' }}>
              <li>Staff availability or response times</li>
              <li>Delivery execution or logistics</li>
              <li>Product quality or treatment outcomes</li>
              <li>Whether your concern is medically significant</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   THREE-STEP PROCESS — Staggered 3D card entrance
   ═══════════════════════════════════════════════════════════════ */
function ThreeStepProcess() {
  const ref = useScrollReveal();
  const steps = [
    {
      number: '01',
      title: 'Describe what happened',
      description: 'Enter the product, approximate dates, facts, and any actions you already tried.',
      bg: 'var(--surface-sage)',
    },
    {
      number: '02',
      title: 'Review your summary',
      description: 'Edit every sentence. The summary uses your words — nothing is added or interpreted.',
      bg: 'var(--surface-sand)',
    },
    {
      number: '03',
      title: 'Choose a next route',
      description: 'Open a reviewed existing support or guidance link. The route is not sent for you.',
      bg: 'var(--surface-blue)',
    },
  ];

  return (
    <section className="process section" id="how-it-works" aria-labelledby="process-heading" ref={ref as any}>
      <div className="container">
        <p className="eyebrow reveal" style={{ textAlign: 'center', marginBottom: '16px' }}>How it works</p>
        <h2 id="process-heading" className="h2 reveal stagger-2" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
          Three steps to a clearer question
        </h2>
        <div className="process-grid">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`card card-feature process-card tilt-card reveal stagger-${i + 3}`}
              style={{ background: step.bg }}
            >
              <span className="mono process-number">{step.number}</span>
              <h3 className="h3" style={{ marginTop: '16px' }}>{step.title}</h3>
              <p className="body-text" style={{ marginTop: '12px', color: 'var(--ink-muted)' }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PRODUCT WALKTHROUGH — Dark section with sliding tab transitions
   ═══════════════════════════════════════════════════════════════ */
function ProductWalkthrough() {
  const [activeTab, setActiveTab] = useState(0);
  const [slideDir, setSlideDir] = useState<'left' | 'right'>('right');
  const [animKey, setAnimKey] = useState(0);
  const ref = useScrollReveal();

  const examples = [
    {
      category: 'Product question',
      product: 'Hair Growth Serum',
      description: 'I noticed increased shedding after 3 weeks of daily use on the recommended areas.',
      question: 'Is this expected during the initial period, and should I continue?',
      route: 'Consult a qualified professional',
    },
    {
      category: 'Delivery concern',
      product: 'Wellness Kit',
      description: 'My order placed 12 days ago still shows "processing" with no tracking update.',
      question: 'Can you provide an updated delivery estimate or tracking number?',
      route: 'Order and delivery support',
    },
    {
      category: 'Packaging concern',
      product: 'Biotin Tablets',
      description: 'The seal on the bottle was broken when I received it, and only 28 of 30 tablets are inside.',
      question: 'Can I get a replacement for this package?',
      route: 'Packaging or quantity concern support',
    },
  ];

  const handleTabChange = useCallback((newIndex: number) => {
    setSlideDir(newIndex > activeTab ? 'right' : 'left');
    setActiveTab(newIndex);
    setAnimKey((k) => k + 1);
  }, [activeTab]);

  return (
    <section className="walkthrough section" aria-labelledby="walkthrough-heading" ref={ref as any}>
      <div className="container">
        <p className="eyebrow reveal" style={{ textAlign: 'center', marginBottom: '16px', color: 'var(--gold)' }}>
          See it in action
        </p>
        <h2 id="walkthrough-heading" className="h2 reveal stagger-2" style={{ textAlign: 'center', color: 'var(--canvas-soft)', maxWidth: '700px', margin: '0 auto' }}>
          From scattered concern to structured question
        </h2>

        <div className="walkthrough-tabs reveal stagger-3" role="tablist" aria-label="Example categories">
          {examples.map((ex, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={activeTab === i}
              className={`walkthrough-tab ${activeTab === i ? 'active' : ''}`}
              onClick={() => handleTabChange(i)}
            >
              {ex.category}
            </button>
          ))}
        </div>

        <div className="walkthrough-content reveal-scale stagger-4" role="tabpanel">
          <span className="chip chip-warning" style={{ marginBottom: '16px' }}>Fictional example</span>
          <div
            key={animKey}
            className={`walkthrough-card walkthrough-slide-${slideDir}`}
          >
            {[
              { label: 'Category', value: examples[activeTab].category },
              { label: 'Product', value: examples[activeTab].product },
              { label: 'What happened', value: examples[activeTab].description },
              { label: 'Question', value: examples[activeTab].question, bold: true },
              { label: 'Suggested route', value: examples[activeTab].route, isRoute: true },
            ].map((row, i) => (
              <div key={i} className={`walkthrough-card-row ${row.isRoute ? 'walkthrough-card-route' : ''}`}>
                <span className="mono walkthrough-label">{row.label}</span>
                <span style={row.bold ? { fontWeight: 500 } : undefined}>{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CATEGORY CARDS — 3D magnetic tilt + staggered entrance
   ═══════════════════════════════════════════════════════════════ */
function CategoryCards({ onSelect }: { onSelect: () => void }) {
  const ref = useScrollReveal();

  return (
    <section className="categories section" style={{ background: 'var(--canvas-soft)' }} aria-labelledby="categories-heading" ref={ref as any}>
      <div className="container">
        <p className="eyebrow reveal" style={{ textAlign: 'center', marginBottom: '16px' }}>Concern categories</p>
        <h2 id="categories-heading" className="h2 reveal stagger-2" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
          Choose what fits your situation
        </h2>
        <div className="category-grid">
          {categoryOptions.map((cat, i) => (
            <CategoryCardItem key={cat.code} cat={cat} index={i} />
          ))}
        </div>
        <div className="reveal stagger-6" style={{ textAlign: 'center', marginTop: '48px' }}>
          <button className="btn btn-primary btn-glow" onClick={onSelect}>
            Start preparing your question <IconArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

function CategoryCardItem({ cat, index }: { cat: typeof categoryOptions[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const intensity = 6;
    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(var(--perspective-card)) rotateX(${-y * intensity}deg) rotateY(${x * intensity}deg) translateY(-6px)`;
      el.style.boxShadow = 'var(--shadow-3d)';
    };
    const handleLeave = () => {
      el.style.transform = '';
      el.style.boxShadow = '';
    };

    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);
    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`card card-feature category-card reveal stagger-${Math.min(index + 3, 6)}`}
      style={{ background: cat.bgColor, transition: 'transform 400ms var(--ease-soft), box-shadow 400ms var(--ease-soft)' }}
    >
      <div className="category-icon" style={{ color: cat.accentColor }}>
        {getCategoryIcon(cat.iconName, { size: 28, color: cat.accentColor })}
      </div>
      <h3 className="h3" style={{ marginTop: '12px', color: cat.accentColor }}>{cat.label}</h3>
      <p className="body-text" style={{ marginTop: '8px', color: 'var(--ink-muted)', fontSize: '0.9rem' }}>
        {cat.example}
      </p>
      {cat.disclaimer && (
        <p style={{ marginTop: '12px', fontSize: '0.8rem', color: 'var(--warning)', fontStyle: 'italic' }}>
          {cat.disclaimer}
        </p>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PRIVACY — Scroll-reveal with staggered checklist
   ═══════════════════════════════════════════════════════════════ */
function PrivacySection() {
  const ref = useScrollReveal();
  const items = [
    'Information stays in the current session memory.',
    'Refreshing or closing the page clears the draft.',
    'Nothing is sent automatically to anyone.',
    'Browser storage is not used by default.',
    'Do not enter a full name, phone number, prescription image, or scalp photo.',
    'Free-text analytics are not used.',
  ];

  return (
    <section className="privacy-home section" aria-labelledby="privacy-heading" ref={ref as any}>
      <div className="container container-reading">
        <div className="card card-feature reveal-scale" style={{ background: 'var(--surface)', padding: '48px 40px', textAlign: 'center' }}>
          <IconLock size={40} color="var(--forest)" aria-hidden="true" />
          <h2 id="privacy-heading" className="h2" style={{ marginTop: '24px' }}>
            Your information stays in this session
          </h2>
          <div className="privacy-items">
            {items.map((text, i) => (
              <div key={i} className={`privacy-item reveal stagger-${Math.min(i + 1, 6)}`}>
                <IconCheck size={18} color="var(--success)" aria-hidden="true" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SAFETY — Scroll-reveal with warning card
   ═══════════════════════════════════════════════════════════════ */
function SafetySection() {
  const ref = useScrollReveal();
  return (
    <section className="safety-home section" style={{ background: 'var(--canvas-soft)' }} aria-labelledby="safety-heading" ref={ref as any}>
      <div className="container container-reading">
        <div className="card-safety reveal-scale" style={{ padding: '40px', textAlign: 'center' }}>
          <IconShield size={40} color="var(--warning)" aria-hidden="true" />
          <h2 id="safety-heading" className="h3" style={{ marginTop: '20px', color: 'var(--warning)' }}>
            This tool organizes questions. It does not answer medical questions.
          </h2>
          <p className="body-text reveal stagger-2" style={{ marginTop: '16px', color: 'var(--ink-muted)', maxWidth: '560px', margin: '16px auto 0' }}>
            If your concern is health-related, this tool will help you prepare a clear question
            for a qualified healthcare professional. It will not interpret your symptoms,
            diagnose a condition, or recommend treatments.
          </p>
          <p className="body-text reveal stagger-3" style={{ marginTop: '16px', fontWeight: 600, color: 'var(--danger)' }}>
            If you feel seriously unwell, stop using this tool and seek immediate local medical assistance.
          </p>
          <a href="/safety" className="btn btn-tertiary reveal stagger-4" style={{ marginTop: '16px' }}>
            Read full safety information <IconArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FAQ — Dashed borders + smooth content slide
   ═══════════════════════════════════════════════════════════════ */
function FAQSection() {
  const ref = useScrollReveal();
  return (
    <section className="faq section" id="faq" aria-labelledby="faq-heading" ref={ref as any}>
      <div className="container container-reading">
        <h2 id="faq-heading" className="h2 reveal" style={{ marginBottom: '48px' }}>
          Frequently asked questions
        </h2>
        <div className="faq-list" role="list">
          {FAQ_ITEMS.map((item, i) => (
            <FAQItem key={i} question={item.question} answer={item.answer} id={`faq-${i}`} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer, id, index }: { question: string; answer: string; id: string; index: number }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`accordion-item border-dash-b reveal stagger-${Math.min(index + 1, 6)}`} role="listitem" style={{ border: 'none' }}>
      <button
        className="accordion-trigger"
        aria-expanded={open}
        aria-controls={`${id}-content`}
        id={`${id}-trigger`}
        onClick={() => setOpen(!open)}
      >
        <span>{question}</span>
        <IconPlus size={20} className="accordion-icon" aria-hidden="true" />
      </button>
      <div
        id={`${id}-content`}
        role="region"
        aria-labelledby={`${id}-trigger`}
        className={`accordion-content ${open ? 'open' : ''}`}
        ref={contentRef}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FINAL CTA — Parallax text + glow CTA
   ═══════════════════════════════════════════════════════════════ */
function FinalCTA({ onCTA }: { onCTA: () => void }) {
  const ref = useScrollReveal();
  return (
    <section className="final-cta section" aria-labelledby="final-cta-heading" ref={ref as any}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 id="final-cta-heading" className="h2 reveal" style={{ color: 'var(--canvas-soft)', maxWidth: '700px', margin: '0 auto' }}>
          <span className="serif">Leave with a clearer question,</span>{' '}
          not another open tab.
        </h2>
        <p className="lead reveal stagger-2" style={{ color: 'rgba(251,248,242,0.7)', marginTop: '20px' }}>
          About 3–5 minutes. No account required.
        </p>
        <div className="reveal stagger-3" style={{ marginTop: '32px' }}>
          <button className="btn btn-primary btn-lg btn-glow btn-inverted" onClick={onCTA}>
            Prepare my question <IconArrowRight size={18} />
          </button>
        </div>
        <p className="reveal stagger-4" style={{ marginTop: '20px', fontSize: '0.8rem', color: 'rgba(251,248,242,0.5)' }}>
          Independent fellowship prototype. Not official Man Matters support or medical advice.
        </p>
      </div>
    </section>
  );
}
