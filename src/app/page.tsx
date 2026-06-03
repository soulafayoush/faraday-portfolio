'use client';

import { Navigation } from '@/components/portfolio/Navigation';
import { HeroSection } from '@/components/portfolio/HeroSection';
import { AboutSection } from '@/components/portfolio/AboutSection';
import { TrustedBySection } from '@/components/portfolio/TrustedBySection';
import { ProcessSection } from '@/components/portfolio/ProcessSection';
import { SelectedWork } from '@/components/portfolio/SelectedWork';
import { TestimonialsSection } from '@/components/portfolio/TestimonialsSection';
import { CTASection } from '@/components/portfolio/CTASection';
import { JournalSection } from '@/components/portfolio/JournalSection';
import { FooterSection } from '@/components/portfolio/FooterSection';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--color-background-base)' }}>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TrustedBySection />
      <ProcessSection />
      <SelectedWork />
      <TestimonialsSection />
      <CTASection />
      <JournalSection />
      <FooterSection />
    </main>
  );
}
