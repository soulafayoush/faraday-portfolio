'use client';

import { motion } from 'framer-motion';
import { useLanguage } from './LanguageProvider';

export function ProcessSection() {
  const { t, dir } = useLanguage();

  const steps = [
    { num: t.process.step1.num, title: t.process.step1.title, desc: t.process.step1.desc },
    { num: t.process.step2.num, title: t.process.step2.title, desc: t.process.step2.desc },
    { num: t.process.step3.num, title: t.process.step3.title, desc: t.process.step3.desc },
    { num: t.process.step4.num, title: t.process.step4.title, desc: t.process.step4.desc },
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
          viewport={{ once: true, margin: '-40px' }} // توحيد الـ margin لتجربة تمرير سلسة
          transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-16 md:mb-20 flex items-center gap-4"
        >
          <h2 className="text-xs tracking-[0.3em] uppercase select-none" style={{ color: 'var(--color-secondary-text)' }}>
            {t.process.heading}
          </h2>
          <span className="w-8 h-px" style={{ backgroundColor: 'var(--color-border-accent)' }} />
          <span className="text-xs select-none" style={{ color: 'var(--color-secondary-text)' }}>02</span>
        </motion.div>

        {/* Steps Timeline Container */}
        <div className="space-y-0">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group relative flex gap-6 md:gap-10"
            >
              {/* المحور العمودي والدوائر: حركة راسية ناعمة وثابتة لمنع التشوه البصري */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex flex-col items-center shrink-0 select-none"
              >
                {/* الدائرة الحاضنة للرقم */}
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center transition-all duration-500 group-hover:border-[rgba(168,85,247,0.4)] group-hover:shadow-[0_0_15px_rgba(168,85,247,0.05)]"
                  style={{
                    borderColor: 'var(--color-card-border)',
                    background: 'var(--color-card-surface)',
                  }}
                >
                  <span className="text-xs font-medium accent-gradient">{step.num}</span>
                </div>
                
                {/* الخط الرابط بين الخطوات */}
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 min-h-[80px] transition-colors duration-500 group-hover:bg-[rgba(168,85,247,0.25)]"
                    style={{ backgroundColor: 'var(--color-border-subtle)' }}
                  />
                )}
              </motion.div>

              {/* المحتوى النصي: يتحرك أفقياً بنعومة فائقة بناءً على لغة الواجهة */}
              <motion.div 
                initial={{ opacity: 0, x: dir === 'rtl' ? 25 : -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.8, delay: i * 0.12, ease: 'easeOut' }}
                className="pb-12 md:pb-16 flex-1 will-change-transform"
              >
                <h3 className="text-xl md:text-2xl font-serif mb-3 transition-colors duration-500 group-hover:text-[#A855F7]"
                  style={{ fontFamily: 'var(--font-cormorant)', color: 'var(--color-primary-text)' }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed max-w-lg"
                  style={{ color: 'var(--color-secondary-text)' }}
                >
                  {step.desc}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}