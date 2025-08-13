'use client';

import Link from 'next/link';
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

  // close mobile menu on route change
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className={styles.header}>
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${styles.container}`}>
        <nav className="flex h-16 items-center justify-between" aria-label="Primary">
          {/* Brand */}
          <Link href="/" className={styles.brand}>
            <span aria-hidden className={styles.logoDot}></span>
            <span className="text-sm md:text-base">Anything Electronic</span>
          </Link>

          {/* Desktop links (no CTA) */}
          <div className={styles.links}>
            {LINKS.map((l) => {
              const active = isActive(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={active ? 'page' : undefined}
                  className={[
                    'px-3 py-2 text-sm transition-colors',
                    styles.link,
                    active ? styles.active : '',
                  ].join(' ')}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile toggle (hidden on desktop via CSS module) */}
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
        </nav>

        {/* Mobile panel */}
        <div
          id="mobile-nav"
          className={styles.mobile}
          style={{ display: open ? 'block' : 'none' }}  /* robust toggle */
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
                    'px-3 py-2 text-base',
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
