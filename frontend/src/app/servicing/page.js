import Image from 'next/image';
import styles from './servicing.module.css';

const CATEGORIES = [
  {
    slug: 'airflow-sensors',
    title: 'Airflow Sensors',
    blurb: 'MAF/MAP testing, repair and calibration.',
    img: '/services/airflow.jpg', // drop a photo here (optional)
    symptoms: [
      'Hesitation / rough idle',
      'Poor fuel economy',
      'Check-engine light / fault codes',
    ],
    weDo: [
      'Sensor element replacement or reconditioning',
      'Connector & trace repair',
      'Calibration and bench test',
    ],
    turnaround: '1–3 business days',
  },
  {
    slug: 'engine-control',
    title: 'Engine Control Units (ECU)',
    blurb: 'Board-level ECU repair & testing.',
    img: '/services/ecu.jpg',
    symptoms: [
      'No start / intermittent start',
      'Misfire or random stalling',
      'No communication with scan tool',
    ],
    weDo: [
      'Failed drivers & power stage replacement',
      'Reflow / rework cracked joints',
      'Load and communication tests',
    ],
    turnaround: '3–5 business days',
  },
  {
    slug: 'dash-clusters',
    title: 'Dash / Instrument Clusters',
    blurb: 'Speedo, tacho, LCD and backlight repairs.',
    img: '/services/dash.jpg',
    symptoms: [
      'Dead gauges or dim/blank display',
      'Flickering backlight',
      'Incorrect readings',
    ],
    weDo: [
      'Stepper motors & LCD replacement',
      'Power supply repair',
      'Full function test',
    ],
    turnaround: '2–4 business days',
  },
  {
    slug: 'throttle-control',
    title: 'Throttle Control',
    blurb: 'Electronic throttle body / TPS servicing.',
    img: '/services/throttle.jpg',
    symptoms: ['Limp mode', 'Unstable idle', 'Throttle response issues'],
    weDo: ['TPS replacement / set-up', 'Bore & plate clean', 'Relearn procedure'],
    turnaround: '2–3 business days',
  },
  // Add more: ABS, Body Control, Climate Control, Lighting, Ignition, etc.
];

export default function ServicingPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Hero */}
      <div className={styles.hero}>
        <span className={styles.kicker}>Servicing</span>
        <h1 className={styles.title}>Electronic repairs you can rely on</h1>
        <p className={styles.sub}>
          We diagnose and repair automotive and industrial electronics—proper board work,
          quality parts, and documented testing. No online checkout; every job is assessed first.
        </p>
      </div>

      {/* Category tiles */}
      <div className={styles.tiles}>
        {CATEGORIES.map((c) => (
          <a key={c.slug} href={`#${c.slug}`} className={styles.tile}>
            <div className={styles.tileMedia} aria-hidden>
              {c.img ? (
                <Image
                  src={c.img}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 320px, 100vw"
                  style={{ objectFit: 'contain' }}
                />
              ) : (
                <span className={styles.mediaPlaceholder}>Image</span>
              )}
            </div>
            <div className={styles.tileBody}>
              <h2 className={styles.tileTitle}>{c.title}</h2>
              <p className={styles.tileText}>{c.blurb}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Detail sections */}
      <div className={styles.detailsWrap}>
        {CATEGORIES.map((c) => (
          <section key={c.slug} id={c.slug} className={styles.detail}>
            <header className={styles.detailHead}>
              <h2 className={styles.detailTitle}>{c.title}</h2>
              <div className={styles.pills}>
                <span className={styles.pill}>
                  <ClockIcon /> {c.turnaround}
                </span>
                <span className={styles.pillAlt}>
                  Service only • No retail parts
                </span>
              </div>
              <p className={styles.detailBlurb}>{c.blurb}</p>
            </header>

            <div className={styles.detailGrid}>
              <div className={styles.detailCol}>
                <details className={styles.block} open>
                  <summary className={styles.blockTitle}>
                    <WrenchIcon /> What we do
                  </summary>
                  <ul className={styles.list}>
                    {c.weDo.map((d, i) => <li key={i}>{d}</li>)}
                  </ul>
                </details>
              </div>
              <div className={styles.detailCol}>
                <details className={styles.block}>
                  <summary className={styles.blockTitle}>
                    <AlertIcon /> Common symptoms
                  </summary>
                  <ul className={styles.list}>
                    {c.symptoms.map((s, i) => <li key={i}>{s}</li>)}
                  </ul>
                </details>
              </div>
            </div>

            <div className={styles.ctaRow}>
              <a href="/contact" className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-white hover:bg-accent-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-600">
                Book a diagnostic
              </a>
              <a href="mailto:hello@anythingelectronic.co.nz" className="inline-flex items-center rounded-md border border-border bg-background px-4 py-2 text-foreground hover:border-accent-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-600">
                Email photos / fault codes
              </a>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

/* tiny inline icons */
function ClockIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden {...props}>
      <path d="M12 3a9 9 0 1 0 .001 18.001A9 9 0 0 0 12 3Zm1 4a1 1 0 1 0-2 0v4.2c0 .27.11.53.3.72l2.8 2.8a1 1 0 1 0 1.4-1.42L13 10.8V7Z" fill="currentColor"/>
    </svg>
  );
}
function WrenchIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden {...props}>
      <path d="M22 6.5a5 5 0 0 1-7 4.58L7.41 18.7a2 2 0 1 1-2.83-2.83L12.17 8.3A5 5 0 1 1 22 6.5Z" fill="currentColor"/>
    </svg>
  );
}
function AlertIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden {...props}>
      <path d="M12 2 1 21h22L12 2Zm1 15h-2v2h2v-2Zm0-8h-2v6h2V9Z" fill="currentColor"/>
    </svg>
  );
}
