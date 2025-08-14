'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import styles from './NavBar.module.css';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/servicing', label: 'Servicing' },
  { href: '/shop', label: 'Shop' },
  { href: '/contact', label: 'Contact' },
];

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className={styles.header}>
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${styles.container}`}>
        {/* grid bar: brand | links (center) | actions */}
        <nav className={styles.bar} aria-label="Primary">
          {/* Brand with image logo */}
          <Link href="/" className={styles.brand}>
            <Image
              src="/images/logo.svg"
              alt="Anything Electronic"
              width={260}
              height={72}
              priority
              className={styles.logoImg}
              sizes="(min-width: 768px) 260px, 180px"
            />
          </Link>

          {/* Desktop links (centered) */}
          <div className={styles.links}>
            {LINKS.map((l) => {
              const active = isActive(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={active ? 'page' : undefined}
                  className={[
                    styles.link,
                    active ? styles.active : '',
                  ].join(' ')}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>

          {/* Actions (mobile toggle) */}
          <div className={styles.actions}>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              className={styles.toggle}
            >
              <span className="sr-only">Toggle navigation</span>
              {open ? (
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
                  <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile panel */}
        <div
          id="mobile-nav"
          className={styles.mobile}
          style={{ display: open ? 'block' : 'none' }}
        >
          <div className={styles.mobileList}>
            {LINKS.map((l) => {
              const active = isActive(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={active ? 'page' : undefined}
                  className={[
                    styles.mobileLink,
                    active ? styles.mobileActive : '',
                  ].join(' ')}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
