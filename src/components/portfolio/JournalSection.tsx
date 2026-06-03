'use client';

import { motion } from 'framer-motion';
import { useLanguage } from './LanguageProvider';
import { ArrowUpRight, Clock } from 'lucide-react';

export function JournalSection() {
  const { t, dir } = useLanguage();

  // تجميع المقالات في مصفوفة ديناميكية مع الحفاظ الصارم على مسميات الـ i18n الأصلية
  const articles = [
    {
      id: 1,
      title: t.journal.article1.title,
      readTime: t.journal.article1.readTime,
      tag: 'Strategy',
      dotColor: 'var(--color-accent-text)'
    },
    {
      id: 2,
      title: t.journal.article2.title,
      readTime: t.journal.article2.readTime,
      tag: 'Analysis',
      dotColor: '#FBBF24'
    }
  ];

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
        viewport={{ once: true, margin: '-40px' }} // توحيد الـ margin لدعم الهواتف بسلاسة
        transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
        className="mb-16 md:mb-20 flex items-center gap-4"
      >
        <h2
          className="text-xs tracking-[0.3em] uppercase select-none"
          style={{ color: 'var(--color-secondary-text)' }}
        >
          {t.journal.heading}
        </h2>
        <span className="w-8 h-px" style={{ backgroundColor: 'var(--color-border-accent)' }} />
      </motion.div>

      {/* Articles List Container */}
      <div className="max-w-3xl space-y-4">
        {articles.map((article, index) => (
          <motion.a
            key={article.id}
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
            className="luxury-card group block p-6 md:p-8 cursor-pointer no-underline rounded-xl transition-all duration-500 hover:border-[rgba(168,85,247,0.25)] hover:shadow-[0_0_25px_rgba(168,85,247,0.04)] will-change-transform"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex-1">
                {/* Tag & Dot Category */}
                <div className="flex items-center gap-2 mb-3 select-none">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: article.dotColor }} />
                  <span 
                    className="text-[10px] tracking-[0.2em] uppercase font-medium"
                    style={{ color: 'var(--color-secondary-text)' }}
                  >
                    {article.tag}
                  </span>
                </div>
                
                {/* Article Title & Arrow Icon */}
                <h3
                  className="text-lg md:text-xl font-serif transition-colors duration-500 group-hover:text-[#A855F7] inline-flex items-center gap-2"
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    color: 'var(--color-primary-text)',
                  }}
                >
                  {article.title}
                  <ArrowUpRight 
                    className={`w-4 h-4 opacity-0 transition-all duration-500 group-hover:opacity-100 will-change-transform ${
                      dir === 'rtl' ? 'translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0' : '-translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0'
                    }`}
                    style={{ color: 'var(--color-accent-text)' }}
                  />
                </h3>
              </div>
              
              {/* Reading Time */}
              <div className="flex items-center gap-2 shrink-0 select-none">
                <Clock className="w-3 h-3" style={{ color: 'var(--color-secondary-text)' }} />
                <span
                  className="text-xs tracking-wider"
                  style={{ color: 'var(--color-secondary-text)' }}
                >
                  {article.readTime}
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}