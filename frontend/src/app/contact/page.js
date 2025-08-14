import styles from './contact.module.css';

export default function ContactPage() {
  return (
    <section className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${styles.page}`}>
      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.title}>Contact</h1>
        <p className={styles.sub}>
          Reach us by phone or email. We’ll get back to you soon.
        </p>
      </header>

      <div className={styles.grid}>
        {/* Contact details */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Get in touch</h2>
          <ul className={styles.list}>
            <li className={styles.item}>
              <PhoneIcon className={styles.icon} />
              <a className={styles.link} href="tel:+64000000000">+64 00 000 0000</a>
            </li>
            <li className={styles.item}>
              <MailIcon className={styles.icon} />
              <a className={styles.link} href="mailto:hello@anythingelectronic.co.nz">
                hello@anythingelectronic.co.nz
              </a>
            </li>
            <li className={styles.item}>
              <ClockIcon className={styles.icon} />
              <span className={styles.badge}>Mon–Fri · 9:00–17:00 NZST</span>
            </li>
            <li className={styles.item}>
              <PinIcon className={styles.icon} />
              <span>Auckland, New Zealand</span>
            </li>
          </ul>
        </div>

        {/* Map / placeholder */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Find us</h2>
          <div className="mt-3">
            <div className={styles.map}>
              {/* Swap this for an embedded map later */}
              <span>Map placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* tiny inline icons */
function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <path
        d="M3 5c0-1.1.9-2 2-2h2c.9 0 1.7.6 1.9 1.5l.7 2.6c.2.8-.1 1.6-.7 2.1l-1 1a14.9 14.9 0 0 0 6.6 6.6l1-1c.5-.6 1.3-.9 2.1-.7l2.6.7c.9.2 1.5 1 1.5 1.9v2a2 2 0 0 1-2 2h-1C9.7 22 2 14.3 2 5V5a2 2 0 0 1 1-1.7z"
        fill="currentColor"
      />
    </svg>
  );
}
function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <path
        d="M20 4H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"
        fill="currentColor"
      />
    </svg>
  );
}
function ClockIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <path
        d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2zm1 5a1 1 0 1 0-2 0v5a1 1 0 0 0 .293.707l3 3a1 1 0 1 0 1.414-1.414L13 11.586V7z"
        fill="currentColor"
      />
    </svg>
  );
}
function PinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <path
        d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"
        fill="currentColor"
      />
    </svg>
  );
}
