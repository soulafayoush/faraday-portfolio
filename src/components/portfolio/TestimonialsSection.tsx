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

  // دالة ذكية ومحمية لاستخراج الحروف الأولى للأسماء العربية والإنجليزية دون التسبب في تشوه التصميم
  const getInitials = (name: string) => {
    if (!name) return '';
    const cleanWords = name.trim().split(/\s+/).filter(word => word.length > 0);
    
    // تأخذ أول حرف من أول كلمتين على الأكثر لتجنب الأشكال الطويلة داخل الدائرة
    return cleanWords
      .slice(0, 2)
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  return (
    <section className="py-32 md:py-40 px-6 md:px-12 lg:px-24 overflow-hidden" dir={dir}>
      {/* Section divider */}
      <div className="section-divider mb-20 md:mb-28" />

      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }} // توحيد الهوامش للأجهزة الذكية
          transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-16 md:mb-20 flex items-center gap-4"
        >
          <h2 className="text-xs tracking-[0.3em] uppercase select-none" style={{ color: 'var(--color-secondary-text)' }}>
            {t.testimonials.heading}
          </h2>
          <span className="w-8 h-px" style={{ backgroundColor: 'var(--color-border-accent)' }} />
        </motion.div>

        {/* Featured Quote (Full Width Card) */}
        {testimonials[0] && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="luxury-card p-8 md:p-12 mb-6 transition-all duration-500 hover:border-[rgba(168,85,247,0.2)]"
          >
            {/* أيقونة الاقتباس الفاخرة مع عكس الاتجاه تلقائياً في العربية */}
            <Quote 
              className={`w-8 h-8 mb-6 shrink-0 opacity-30 transition-transform duration-500 ${
                dir === 'rtl' ? 'scale-x-[-1]' : ''
              }`} 
              style={{ color: 'var(--color-accent-text)' }} 
            />

            <blockquote className="mb-8">
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed font-serif transition-colors duration-500"
                style={{ color: 'var(--color-primary-text)', fontFamily: 'var(--font-cormorant)' }}
              >
                &ldquo;{testimonials[0].text}&rdquo;
              </p>
            </blockquote>

            <div className="flex items-center gap-4 pt-6 border-t select-none" style={{ borderColor: 'var(--color-border-subtle)' }}>
              {/* الدائرة الرمزية المحدثة بالدالة الآمنة */}
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-medium shrink-0 tracking-wider transition-colors duration-500"
                style={{
                  background: 'var(--color-card-surface)',
                  border: '1px solid var(--color-card-border)',
                  color: 'var(--color-accent-text)',
                }}
              >
                {getInitials(testimonials[0].author)}
              </div>
              <div>
                <p className="text-sm font-medium" style={{ color: 'var(--color-primary-text)' }}>
                  {testimonials[0].author}
                </p>
                <p className="text-[11px] tracking-wider opacity-80" style={{ color: 'var(--color-secondary-text)' }}>
                  {testimonials[0].role}
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Two Side-by-Side Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.slice(1).map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: 'easeOut' }}
              className="luxury-card p-6 md:p-8 flex flex-col transition-all duration-500 hover:border-[rgba(168,85,247,0.2)]"
            >
              <Quote 
                className={`w-6 h-6 mb-4 shrink-0 opacity-30 transition-transform duration-500 ${
                  dir === 'rtl' ? 'scale-x-[-1]' : ''
                }`} 
                style={{ color: 'var(--color-accent-text)' }} 
              />

              <blockquote className="flex-1 mb-6">
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-secondary-text)' }}>
                  &ldquo;{item.text}&rdquo;
                </p>
              </blockquote>

              <div className="flex items-center gap-3 pt-4 border-t select-none" style={{ borderColor: 'var(--color-border-subtle)' }}>
                {/* الدائرة الرمزية المحمية */}
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-medium shrink-0"
                  style={{
                    background: 'var(--color-card-surface)',
                    border: '1px solid var(--color-card-border)',
                    color: 'var(--color-accent-text)',
                  }}
                >
                  {getInitials(item.author)}
                </div>
                <div>
                  <p className="text-sm font-medium" style={{ color: 'var(--color-primary-text)' }}>
                    {item.author}
                  </p>
                  <p className="text-[11px] tracking-wider opacity-80" style={{ color: 'var(--color-secondary-text)' }}>
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