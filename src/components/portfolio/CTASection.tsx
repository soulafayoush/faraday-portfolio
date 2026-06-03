'use client';

import { motion } from 'framer-motion';
import { useLanguage } from './LanguageProvider';
import { ArrowUpRight } from 'lucide-react';

export function CTASection() {
  const { t, dir } = useLanguage();

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24" dir={dir}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="luxury-card p-12 md:p-16 lg:p-20 text-center relative overflow-hidden"
      >
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full opacity-[0.06]"
            style={{ background: 'radial-gradient(ellipse, #6B21A8 0%, transparent 70%)' }}
          />
        </div>

        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif mb-6"
            style={{ fontFamily: 'var(--font-cormorant)', color: 'var(--color-primary-text)' }}
          >
            {t.cta.heading}
          </h2>
          <p className="text-sm md:text-base max-w-xl mx-auto mb-10"
            style={{ color: 'var(--color-secondary-text)' }}
          >
            {t.cta.subheading}
          </p>
          <a
            href="mailto:contact@faraday.vc"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-lg border transition-all duration-500 hover:border-[rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
            style={{
              borderColor: 'var(--color-accent-text)',
              background: 'rgba(168, 85, 247, 0.06)',
              color: 'var(--color-accent-text)',
            }}
          >
            <span className="text-sm tracking-[0.1em] uppercase font-medium">{t.cta.button}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
