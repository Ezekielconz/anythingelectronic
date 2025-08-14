import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.wrap}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={styles.grid}>
          {/* Left: copy */}
          <div>
            <h1 className={styles.title}>
              Manufacturing &amp; <strong>electronic repairs</strong> across New&nbsp;Zealand
            </h1>

            <div className={styles.ctaRow}>
              <Link
                href="/shop"
                className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-white hover:bg-accent-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-600"
              >
                Products
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-md border border-border bg-background px-4 py-2 text-foreground hover:border-accent-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-600"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Right: image (intrinsic, no cropping) */}
          <div className={styles.media}>
            <Image
              src="/images/hero.png"
              alt="Anything Electronic workshop"
              width={1600}      // replace with the actual pixel width of hero.png if you know it
              height={900}      // replace with the actual pixel height
              priority
              sizes="(min-width: 768px) 560px, 100vw"
              className={styles.mediaImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
