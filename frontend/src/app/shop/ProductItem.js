'use client';

import Image from 'next/image';
import styles from './shop.module.css';

export default function ProductItem({
  name,
  price,               // e.g. 'NZ$129' (string) or number
  description,
  imageSrc,            // e.g. '/images/products/vt1.png'
  pdfHref,             // e.g. '/pdf/vt1.pdf'
}) {
  const priceLabel = typeof price === 'number' ? `NZ$${price}` : price;

  return (
    <article className={styles.productCard}>
      <div className={styles.productImageWrap}>
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={name}
            width={640}
            height={480}
            sizes="(min-width: 768px) 360px, 100vw"
            className={styles.productImage}
          />
        ) : (
          <div className={styles.productImageFallback} aria-hidden>
            <svg width="40" height="40" viewBox="0 0 24 24">
              <rect x="4" y="6" width="16" height="12" rx="2" fill="currentColor"/>
              <path d="M7 9h6M7 12h10M7 15h8" stroke="#fff" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
          </div>
        )}
      </div>

      <div className={styles.productBody}>
        <header className={styles.productHead}>
          <h3 className={styles.productTitle}>{name}</h3>
          {priceLabel ? <div className={styles.productPrice}>{priceLabel}</div> : null}
        </header>

        {description ? <p className={styles.productDesc}>{description}</p> : null}

        <div className={styles.productActions}>
          <a
            href={pdfHref || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.pdfBtn} ${!pdfHref ? styles.pdfBtnDisabled : ''}`}
            aria-disabled={!pdfHref}
            onClick={(e) => { if (!pdfHref) e.preventDefault(); }}
          >
            Instruction sheet (PDF)
          </a>
        </div>
      </div>
    </article>
  );
}
