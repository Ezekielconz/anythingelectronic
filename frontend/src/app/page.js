// src/app/page.js
import Hero from '@/components/Hero';
import { ServicesSection, ProcessSection, CTABand } from '@/components/HomeSections';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <ProcessSection />
      <CTABand />
    </>
  );
}
