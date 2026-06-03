'use client';

import { motion } from 'framer-motion';
import { useLanguage } from './LanguageProvider';

const LOGOS = [
  'SEQUOIA', 'ACCel', 'a16z', 'GOLDMAN SACHS', 'FIRST ROUND',
  'SPARK', 'BESSEMER', 'TRUE VENTURES',
];

export function TrustedBySection() {
  const { t, dir } = useLanguage();

  return (
    <section id="trusted" className="py-20 md:py-28 px-6 md:px-12 lg:px-24 overflow-hidden" dir={dir}>
      {/* Section divider */}
      <div className="section-divider mb-16 md:mb-20" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mb-12 text-center"
      >
        <div className="flex items-center justify-center gap-4 mb-4">
          <p className="text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--color-secondary-text)' }}>
            {t.trustedBy.heading}
          </p>
          <span className="w-8 h-px" style={{ backgroundColor: 'var(--color-border-accent)' }} />
        </div>
      </motion.div>

      {/* Scrolling Logo Strip */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background: dir === 'rtl'
              ? 'linear-gradient(to right, var(--color-background-base), transparent)'
              : 'linear-gradient(to left, var(--color-background-base), transparent)',
          }}
        />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background: dir === 'rtl'
              ? 'linear-gradient(to left, var(--color-background-base), transparent)'
              : 'linear-gradient(to right, var(--color-background-base), transparent)',
          }}
        />

        {/* Scrolling track */}
        <div className="flex animate-scroll-x">
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <div key={i} className="shrink-0 flex items-center justify-center px-8 md:px-12">
              <span className="text-sm md:text-base tracking-[0.2em] uppercase whitespace-nowrap transition-colors duration-300 hover:text-[#A855F7] cursor-default"
                style={{ color: 'var(--color-secondary-text)', opacity: 0.35 }}
              >
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
