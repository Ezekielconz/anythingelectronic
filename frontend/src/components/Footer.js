import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${styles.inner}`}>
        <div className={styles.grid}>
          {/* Left: Logo + copyright */}
          <div className={styles.brandLeft}>
            <div className={styles.logoRow}>
              <span aria-hidden className={styles.logoDot}></span>
              <span>Anything Electronic</span>
            </div>
            <p className={styles.copy}>
              © 2025 Anything Electronic. All rights reserved.
            </p>
          </div>

          {/* Middle: Contact */}
          <div className={styles.contact}>
            <a className={styles.link} href="tel:+64000000000">
              <PhoneIcon className={styles.icon} />
              +64 00 000 0000
            </a>
            <a className={styles.link} href="mailto:hello@anythingelectronic.co.nz">
              <MailIcon className={styles.icon} />
              hello@anythingelectronic.co.nz
            </a>
          </div>

          {/* Right: Compact logo mark */}
          <div className={styles.brandRight}>
            <span aria-hidden className={styles.logoMark}></span>
          </div>
        </div>
      </div>
    </footer>
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
