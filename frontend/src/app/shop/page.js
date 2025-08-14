import Link from 'next/link';
import styles from './shop.module.css';

/** Edit these as you add categories/items */
const CATEGORIES = [
  { slug: 'glow-timers',        title: 'Glow Timers',        blurb: 'Reliable diesel glow control modules.',        items: ['VT1 series', 'VT1-24', 'VT1-12D'] },
  { slug: 'lighting',           title: 'Lighting',           blurb: '12–24V lighting controllers & modules.',       items: ['Daytime running light module', 'Tail/stop controller'] },
  { slug: 'performance',        title: 'Performance',        blurb: 'Charging and performance accessories.',        items: ['Charge rite', 'Rev limiter'] },
  { slug: 'sensor',             title: 'Sensor',             blurb: 'Vehicle & trailer sensor add-ons.',            items: ['Load / level sensor', 'Aux inputs'] },
  { slug: 'tacho',              title: 'Tacho',              blurb: 'Tachometer adapters & pickups.',               items: ['Tacho adapter', 'Signal conditioner'] },
  { slug: 'test-equipment',     title: 'Test Equipment',     blurb: 'Benchtop testers and looms.',                  items: ['Module test box', 'Breakout loom'] },
  { slug: 'trailer-lighting',   title: 'Trailer Lighting',   blurb: 'Trailer/ute lighting control modules.',        items: ['VT7-32', 'Indicator interface'] },
  { slug: 'turbo-timers',       title: 'Turbo Timers',       blurb: 'Safe turbo cooldown timers.',                  items: ['TT compact', 'TT heavy-duty'] },
  { slug: 'voltage-reducers',   title: 'Voltage Reducers',   blurb: 'Drop 24V → 12V for accessories.',              items: ['VR10', 'VR20'] },
  { slug: 'other',              title: 'Other',              blurb: 'Misc modules and accessories.',                items: ['Relay packs', 'Harness kits'] },
];

export default function ShopPage() {
  return (
    <section className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${styles.page}`}>
      {/* Hero */}
      <header className={styles.header}>
        <span className={styles.kicker}>Shop</span>
        <h1 className={styles.title}>Electronics by Anything Electronic</h1>
        <p className={styles.sub}>
          Order by email or phone—no online checkout. Every order is checked for compatibility.
        </p>
        <div className={styles.ctaRow}>
          <a className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-white hover:bg-accent-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-600" href="mailto:hello@anythingelectronic.co.nz?subject=Shop%20enquiry">
            Email to order
          </a>
          <a className="inline-flex items-center rounded-md border border-border bg-background px-4 py-2 text-foreground hover:border-accent-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-600" href="tel:+64000000000">
            Call us
          </a>
        </div>
      </header>

      {/* Category cards */}
      <div className={styles.grid}>
        {CATEGORIES.map((c) => (
          <a key={c.slug} href={`#${c.slug}`} className={styles.card}>
            <div className={styles.media} aria-hidden>
              <Icon slug={c.slug} />
            </div>
            <div className={styles.cardBody}>
              <h2 className={styles.cardTitle}>{c.title}</h2>
              <p className={styles.cardText}>{c.blurb}</p>
              <span className={styles.cardLink}>View details</span>
            </div>
          </a>
        ))}
      </div>

      {/* Details list (simple + crawlable) */}
      <div className={styles.detailsWrap}>
        {CATEGORIES.map((c) => (
          <section key={c.slug} id={c.slug} className={styles.detail}>
            <div className={styles.detailHead}>
              <h3 className={styles.detailTitle}>{c.title}</h3>
              <p className={styles.detailBlurb}>{c.blurb}</p>
            </div>

            <ul className={styles.list}>
              {c.items.map((it, i) => <li key={i}>{it}</li>)}
            </ul>

            <div className={styles.orderRow}>
              <Link
                href={`/contact?subject=${encodeURIComponent('Order: ' + c.title)}`}
                className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-white hover:bg-accent-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-600"
              >
                Enquire about {c.title}
              </Link>
              <a
                className={styles.secondaryLink}
                href={`mailto:hello@anythingelectronic.co.nz?subject=${encodeURIComponent('Order: ' + c.title)}`}
              >
                Email with photos / specs →
              </a>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

/* tiny inline “category” icons so you don’t need assets yet */
function Icon({ slug, ...props }) {
  const common = { width: 40, height: 40, viewBox: '0 0 24 24', 'aria-hidden': true, ...props };
  switch (slug) {
    case 'glow-timers':
      return (
        <svg {...common}><rect x="4" y="6" width="16" height="12" rx="2" fill="currentColor"/><path d="M7 9h6M7 12h10M7 15h8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>
      );
    case 'lighting':
    case 'trailer-lighting':
      return (
        <svg {...common}><path d="M12 3v7l5 8H7l5-8" fill="currentColor"/></svg>
      );
    case 'performance':
      return (
        <svg {...common}><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" fill="none"/><path d="M12 12l5-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
      );
    case 'sensor':
      return (
        <svg {...common}><rect x="5" y="5" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.6" fill="none"/><circle cx="12" cy="12" r="3" fill="currentColor"/></svg>
      );
    case 'tacho':
      return (
        <svg {...common}><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" fill="none"/><path d="M12 12l4 2M12 7v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
      );
    case 'test-equipment':
      return (
        <svg {...common}><rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" fill="none"/><path d="M7 9h3M7 12h6M7 15h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
      );
    case 'turbo-timers':
      return (
        <svg {...common}><path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 0v9l6 3" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round"/></svg>
      );
    case 'voltage-reducers':
      return (
        <svg {...common}><path d="M7 3h10l2 4H5l2-4Zm-2 8h14v8H5v-8Z" stroke="currentColor" strokeWidth="1.6" fill="none"/><path d="M9 15h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
      );
    default:
      return (
        <svg {...common}><rect x="5" y="5" width="14" height="14" rx="2" fill="currentColor"/></svg>
      );
  }
}
