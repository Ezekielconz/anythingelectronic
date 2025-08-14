import Link from 'next/link';
import styles from './HomeSections.module.css';

export function ServicesSection() {
  return (
    <section className={styles.section}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className={styles.titleRow}>
          <h2 className={styles.title}>What we do</h2>
          <p className={styles.sub}>Repairs, diagnostics, and manufacturing for consumer and industrial electronics.</p>
        </header>

        <div className={styles.cards}>
          <article className={styles.card}>
            <div className={styles.cardHead}>
              <span className={styles.iconWrap} aria-hidden>
                <ToolIcon />
              </span>
              <h3 className={styles.cardTitle}>Repairs &amp; Servicing</h3>
            </div>
            <p className={styles.cardText}>
              Board-level fixes, component replacements, and preventative maintenance.
            </p>
            <Link className={styles.cardLink} href="/servicing#repairs">
              Learn more <ArrowIcon />
            </Link>
          </article>

          <article className={styles.card}>
            <div className={styles.cardHead}>
              <span className={styles.iconWrap} aria-hidden>
                <ScopeIcon />
              </span>
              <h3 className={styles.cardTitle}>Diagnostics</h3>
            </div>
            <p className={styles.cardText}>
              Fast fault finding with detailed reporting before any work proceeds.
            </p>
            <Link className={styles.cardLink} href="/servicing#diagnostics">
              Learn more <ArrowIcon />
            </Link>
          </article>

          <article className={styles.card}>
            <div className={styles.cardHead}>
              <span className={styles.iconWrap} aria-hidden>
                <ChipIcon />
              </span>
              <h3 className={styles.cardTitle}>Manufacturing</h3>
            </div>
            <p className={styles.cardText}>
              Small-run assembly and testing with quality control you can trust.
            </p>
            <Link className={styles.cardLink} href="/servicing#manufacturing">
              Learn more <ArrowIcon />
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className={styles.section}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className={styles.titleRow}>
          <h2 className={styles.title}>How it works</h2>
          <p className={styles.sub}>A straightforward, transparent process from booking to return shipping.</p>
        </header>

        <div className={styles.timeline}>
          <div className={styles.step}>
            <div className={styles.stepNum}>Step 1</div>
            <div className={styles.stepTitle}>Book</div>
            <p className={styles.stepText}>Tell us what’s wrong or what you need built.</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNum}>Step 2</div>
            <div className={styles.stepTitle}>Diagnose</div>
            <p className={styles.stepText}>We inspect and quote—no surprises.</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNum}>Step 3</div>
            <div className={styles.stepTitle}>Repair / Build</div>
            <p className={styles.stepText}>Experienced techs, quality parts, proper ESD handling.</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNum}>Step 4</div>
            <div className={styles.stepTitle}>Test &amp; Return</div>
            <p className={styles.stepText}>Final QA and fast return shipping or pickup.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CTABand() {
  return (
    <section className={styles.section} aria-label="Get started">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>Ready to get started?</h2>
          <p className={styles.ctaText}>Book a repair or send us your manufacturing brief.</p>
          <div className={styles.ctaRow}>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-white hover:bg-accent-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-600"
            >
              Contact us
            </Link>
            <Link
              href="/servicing"
              className="inline-flex items-center rounded-md border border-border bg-background px-4 py-2 text-foreground hover:border-accent-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-600"
            >
              Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* tiny inline icons */
function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden {...props}>
      <path d="M5 12h14M13 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function ToolIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...props}>
      <path d="M14 7l3-3 2 2-3 3M2 22l7-7" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
      <circle cx="9" cy="15" r="3" stroke="currentColor" strokeWidth="1.6" fill="none"/>
    </svg>
  );
}
function ScopeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...props}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" fill="none"/>
      <path d="M12 4v4M12 16v4M4 12h4M16 12h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}
function ChipIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...props}>
      <rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" fill="none"/>
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}
