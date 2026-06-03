'use client';

import { motion } from 'framer-motion';
import { useLanguage } from './LanguageProvider';
import { Quote } from 'lucide-react';

export function TestimonialsSection() {
  const { t, dir } = useLanguage();

  const testimonials = [
    { text: t.testimonials.quote1.text, author: t.testimonials.quote1.author, role: t.testimonials.quote1.role },
    { text: t.testimonials.quote2.text, author: t.testimonials.quote2.author, role: t.testimonials.quote2.role },
    { text: t.testimonials.quote3.text, author: t.testimonials.quote3.author, role: t.testimonials.quote3.role },
  ];

  return (
    <section className="py-32 md:py-40 px-6 md:px-12 lg:px-24" dir={dir}>
      {/* Section divider */}
      <div className="section-divider mb-20 md:mb-28" />

      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1 }}
          className="mb-16 md:mb-20 flex items-center gap-4"
        >
          <h2 className="text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--color-secondary-text)' }}>
            {t.testimonials.heading}
          </h2>
          <span className="w-8 h-px" style={{ backgroundColor: 'var(--color-border-accent)' }} />
        </motion.div>

        {/* Featured Quote (Full Width) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="luxury-card p-8 md:p-12 mb-6"
        >
          <Quote className="w-8 h-8 mb-6 shrink-0" style={{ color: 'var(--color-accent-text)', opacity: 0.4 }} />

          <blockquote className="mb-8">
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed font-serif"
              style={{ color: 'var(--color-secondary-text)', fontFamily: 'var(--font-cormorant)' }}
            >
              &ldquo;{testimonials[0].text}&rdquo;
            </p>
          </blockquote>

          <div className="flex items-center gap-4 pt-6 border-t" style={{ borderColor: 'var(--color-border-subtle)' }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium"
              style={{
                background: 'var(--color-card-surface)',
                border: '1px solid var(--color-card-border)',
                color: 'var(--color-accent-text)',
              }}
            >
              {testimonials[0].author.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <p className="text-sm font-medium" style={{ color: 'var(--color-primary-text)' }}>
                {testimonials[0].author}
              </p>
              <p className="text-[11px] tracking-wider" style={{ color: 'var(--color-secondary-text)' }}>
                {testimonials[0].role}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Two Side-by-Side Quotes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.slice(1).map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="luxury-card p-6 md:p-8 flex flex-col"
            >
              <Quote className="w-6 h-6 mb-4 shrink-0" style={{ color: 'var(--color-accent-text)', opacity: 0.4 }} />

              <blockquote className="flex-1 mb-6">
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-secondary-text)' }}>
                  &ldquo;{item.text}&rdquo;
                </p>
              </blockquote>

              <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: 'var(--color-border-subtle)' }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium"
                  style={{
                    background: 'var(--color-card-surface)',
                    border: '1px solid var(--color-card-border)',
                    color: 'var(--color-accent-text)',
                  }}
                >
                  {item.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="text-sm font-medium" style={{ color: 'var(--color-primary-text)' }}>
                    {item.author}
                  </p>
                  <p className="text-[11px] tracking-wider" style={{ color: 'var(--color-secondary-text)' }}>
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
