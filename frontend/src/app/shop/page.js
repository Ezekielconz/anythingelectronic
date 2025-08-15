'use client';

import { useEffect, useMemo, useState, useCallback } from 'react';
import ProductItem from './ProductItem';
import styles from './shop.module.css';

export default function ShopPage() {
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState(null);

  const slugs = useMemo(() => new Set(categories.map((c) => c.slug)), [categories]);

  // Fetch categories from public/data/products.json
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch('/data/products.json', { cache: 'no-store' });
        if (!res.ok) throw new Error(`Failed to load products.json (${res.status})`);
        const json = await res.json();
        const list = Array.isArray(json) ? json : json?.categories || [];
        if (mounted) setCategories(list);
      } catch (err) {
        console.error(err);
        if (mounted) setCategories([]);
      }
    })();
    return () => { mounted = false; };
  }, []);

  // Initialize active tab from hash or first category when data arrives
  useEffect(() => {
    if (!categories.length) return;
    const hash = typeof window !== 'undefined' ? window.location.hash.slice(1) : '';
    const start = slugs.has(hash) ? hash : categories[0].slug;
    setActive(start);
  }, [categories, slugs]);

  // Keep tab in sync with hash changes
  useEffect(() => {
    if (!categories.length) return;
    const onHash = () => {
      const hash = window.location.hash.slice(1);
      if (slugs.has(hash)) setActive(hash);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, [categories, slugs]);

  // Click/keyboard handlers
  const select = useCallback((slug) => {
    setActive(slug);
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', `${window.location.pathname}#${slug}`);
    }
  }, []);

  const onTabKey = (e) => {
    if (!active || !categories.length) return;
    const idx = categories.findIndex((c) => c.slug === active);
    if (idx < 0) return;

    if (e.key === 'ArrowRight') {
      e.preventDefault();
      select(categories[(idx + 1) % categories.length].slug);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      select(categories[(idx - 1 + categories.length) % categories.length].slug);
    } else if (e.key === 'Home') {
      e.preventDefault();
      select(categories[0].slug);
    } else if (e.key === 'End') {
      e.preventDefault();
      select(categories[categories.length - 1].slug);
    }
  };

  const activeCat = categories.find((c) => c.slug === active);

  return (
    <section className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${styles.page}`}>
      {/* Tabs */}
      <div className={styles.tabsWrap}>
        <div
          role="tablist"
          aria-label="Product categories"
          className={styles.tabs}
          onKeyDown={onTabKey}
        >
          {categories.length ? (
            categories.map((c) => {
              const isActive = active === c.slug;
              return (
                <button
                  key={c.slug}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${c.slug}`}
                  id={`tab-${c.slug}`}
                  tabIndex={isActive ? 0 : -1}
                  className={`${styles.tab} ${isActive ? styles.tabActive : ''}`}
                  onClick={() => select(c.slug)}
                >
                  {c.title}
                </button>
              );
            })
          ) : (
            <span className={styles.sub}>Loading categories…</span>
          )}
        </div>
      </div>

      {/* Panel */}
      <div className={styles.panels}>
        {activeCat ? (
          <section
            role="tabpanel"
            id={`panel-${activeCat.slug}`}
            aria-labelledby={`tab-${activeCat.slug}`}
            className={styles.panel}
          >
            <header className={styles.panelHead}>
              <h2 className={styles.panelTitle}>{activeCat.title}</h2>
              <p className={styles.panelBlurb}>{activeCat.blurb}</p>
            </header>

            {activeCat.items?.length ? (
              <div className={styles.itemsGrid}>
                {activeCat.items.map((item, i) => (
                  <ProductItem key={i} {...item} />
                ))}
              </div>
            ) : (
              <p className={styles.emptyNote}>
                No products listed here yet. Please{' '}
                <a className={styles.inlineLink} href="mailto:sales@anythingelectronic.co.nz">
                  email us
                </a>{' '}
                for details.
              </p>
            )}
          </section>
        ) : (
          <section className={styles.panel}>
            <p className={styles.emptyNote}>Loading products…</p>
          </section>
        )}
      </div>

      {/* Footer CTA */}
      <header className={styles.header}>
        <p className={styles.sub}>
          Order by email or phone—no online checkout. Every order is checked for compatibility.
        </p>
        <div className={styles.ctaRow}>
          <a
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-white hover:bg-accent-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-600"
            href="mailto:sales@anythingelectronic.co.nz?subject=Shop%20enquiry"
          >
            Email to order
          </a>
          <a
            className="inline-flex items-center rounded-md border border-border bg-background px-4 py-2 text-foreground hover:border-accent-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-600"
            href="tel:+6435485336"
          >
            Call us
          </a>
        </div>
      </header>
    </section>
  );
}
