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

      {/* Heading - توحيد الـ viewport لسرعة تفاعل الموبايل */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
        className="mb-12 text-center"
      >
        <div className="flex items-center justify-center gap-4 mb-4 select-none">
          <p className="text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--color-secondary-text)' }}>
            {t.trustedBy.heading}
          </p>
          <span className="w-8 h-px" style={{ backgroundColor: 'var(--color-border-accent)' }} />
        </div>
      </motion.div>

      {/* Scrolling Logo Strip الحاضن الأساسي */}
      <div className="relative w-full overflow-hidden">
        
        {/* التلاشي الأيسر الثابت هندسياً لضمان النعومة الفاخرة للأطراف */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none transition-all duration-300"
          style={{
            background: 'linear-gradient(to right, var(--color-background-base), transparent)',
          }}
        />
        
        {/* التلاشي الأيمن الثابت هندسياً */}
        <div 
          className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none transition-all duration-300"
          style={{
            background: 'linear-gradient(to left, var(--color-background-base), transparent)',
          }}
        />

        {/* مسار التحريك اللانهائي: تم تكرار المصفوفة 3 مرات لتغطية الشاشات العريضة جداً (Ultra-wide)
          واستخدام كلاس تحريك مرن يتعامل مع اتجاه الصفحة تلقائياً
        */}
        <div 
          className={`flex w-max gap-0 will-change-transform ${
            dir === 'rtl' ? 'animate-[scroll-x-rtl_30s_linear_infinite]' : 'animate-[scroll-x-ltr_30s_linear_infinite]'
          } hover:[animation-play-state:paused]`}
        >
          {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
            <div key={i} className="shrink-0 flex items-center justify-center px-8 md:px-14 select-none">
              <span 
                className="text-sm md:text-base tracking-[0.2em] uppercase whitespace-nowrap transition-all duration-500 hover:text-[#A855F7] hover:opacity-100 cursor-default font-medium"
                style={{ color: 'var(--color-secondary-text)', opacity: 0.3 }}
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