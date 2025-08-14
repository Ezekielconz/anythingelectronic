import Image from 'next/image';
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
              <Image
                src="/images/logow.svg"           /* use your logo asset */
                alt="Anything Electronic"
                width={220}
                height={48}
                className={styles.logoImg}
                priority
              />
            </div>
            <p className={styles.copy}>
              © 2025 Anything Electronic. All rights reserved.
            </p>
          </div>

          {/* Middle: Location + contact */}
          <div className={styles.contact}>
            <address className={styles.address}>
              <a
                className={styles.link}
                href="https://maps.google.com/?q=7%20Bullen%20Street%20Tahunanui%20Nelson%207011"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPinIcon className={styles.icon} />
                7 Bullen Street, Tahunanui, Nelson 7011
              </a>

              <a className={styles.link} href="tel:+6435485336">
                <PhoneIcon className={styles.icon} />
                +64 3 548 5336
              </a>

              <a className={styles.link} href="mailto:sales@anythingelectronic.co.nz">
                <MailIcon className={styles.icon} />
                sales@anythingelectronic.co.nz
              </a>
            </address>
          </div>

          {/* Right: Compact logo mark (keep or swap for socials later) */}
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

function MapPinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <path
        d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"
        fill="currentColor"
      />
    </svg>
  );
}
