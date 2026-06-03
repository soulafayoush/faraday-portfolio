'use client';

import { motion } from 'framer-motion';
import { useLanguage } from './LanguageProvider';
import { ArrowUpRight, Clock } from 'lucide-react';

export function JournalSection() {
  const { t, dir } = useLanguage();

  return (
    <section
      id="journal"
      className="py-32 md:py-40 px-6 md:px-12 lg:px-24"
      dir={dir}
    >
      {/* Section divider */}
      <div className="section-divider mb-20 md:mb-28" />

      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1 }}
        className="mb-16 md:mb-20 flex items-center gap-4"
      >
        <h2
          className="text-xs tracking-[0.3em] uppercase"
          style={{ color: 'var(--color-secondary-text)' }}
        >
          {t.journal.heading}
        </h2>
        <span className="w-8 h-px" style={{ backgroundColor: 'var(--color-border-accent)' }} />
      </motion.div>

      {/* Articles */}
      <div className="max-w-3xl space-y-4">
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="luxury-card group block p-6 md:p-8 cursor-pointer no-underline"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--color-accent-text)' }} />
                <span className="text-[10px] tracking-[0.2em] uppercase"
                  style={{ color: 'var(--color-secondary-text)' }}
                >
                  Strategy
                </span>
              </div>
              <h3
                className="text-lg md:text-xl font-serif transition-all duration-500 group-hover:text-[#A855F7] flex items-center gap-2"
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  color: 'var(--color-primary-text)',
                }}
              >
                {t.journal.article1.title}
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0"
                  style={{ color: 'var(--color-accent-text)' }}
                />
              </h3>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <Clock className="w-3 h-3" style={{ color: 'var(--color-secondary-text)' }} />
              <span
                className="text-xs tracking-wider"
                style={{ color: 'var(--color-secondary-text)' }}
              >
                {t.journal.article1.readTime}
              </span>
            </div>
          </div>
        </motion.a>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="luxury-card group block p-6 md:p-8 cursor-pointer no-underline"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#FBBF24' }} />
                <span className="text-[10px] tracking-[0.2em] uppercase"
                  style={{ color: 'var(--color-secondary-text)' }}
                >
                  Analysis
                </span>
              </div>
              <h3
                className="text-lg md:text-xl font-serif transition-all duration-500 group-hover:text-[#A855F7] flex items-center gap-2"
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  color: 'var(--color-primary-text)',
                }}
              >
                {t.journal.article2.title}
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0"
                  style={{ color: 'var(--color-accent-text)' }}
                />
              </h3>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <Clock className="w-3 h-3" style={{ color: 'var(--color-secondary-text)' }} />
              <span
                className="text-xs tracking-wider"
                style={{ color: 'var(--color-secondary-text)' }}
              >
                {t.journal.article2.readTime}
              </span>
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
}
