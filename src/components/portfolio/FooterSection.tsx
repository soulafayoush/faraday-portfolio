'use client';

import { motion } from 'framer-motion';
import { useLanguage } from './LanguageProvider';
import { Linkedin, ArrowUpRight, Mail } from 'lucide-react';

export function FooterSection() {
  const { t, dir } = useLanguage();

  return (
    <footer
      id="contact"
      className="relative py-32 md:py-40 px-6 md:px-12 lg:px-24 overflow-hidden"
      dir={dir}
    >
      {/* Section divider */}
      <div className="section-divider mb-20 md:mb-28" />

      <div className="max-w-4xl mx-auto">
        {/* Contact Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-4 mb-12">
            <p
              className="text-xs tracking-[0.3em] uppercase select-none"
              style={{ color: 'var(--color-secondary-text)' }}
            >
              Contact
            </p>
            <span className="w-8 h-px" style={{ backgroundColor: 'var(--color-border-accent)' }} />
          </div>

          {/* كارد البريد الإلكتروني المحسن جمالياً لمنع قفزات الـ Width */}
          <a
            href="mailto:contact@faraday.vc"
            className="group inline-flex items-center gap-4 luxury-card px-8 py-6 md:px-10 md:py-8 no-underline transition-all duration-500 hover:border-[rgba(168,85,247,0.3)]"
          >
            <Mail 
              className="w-5 h-5 transition-colors duration-500 group-hover:text-[#A855F7]"
              style={{ color: 'var(--color-accent-text)' }}
            />
            <span
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif transition-colors duration-500 group-hover:text-[#A855F7]"
              style={{
                fontFamily: 'var(--font-cormorant)',
                color: 'var(--color-primary-text)',
              }}
            >
              {t.footer.email}
            </span>
            {/* جعل السهم يتحرك بنعومة فائقة بناءً على اتجاه اللغة دون التأثير على عرض النص */}
            <ArrowUpRight 
              className={`w-5 h-5 opacity-0 transition-all duration-500 group-hover:opacity-100 will-change-transform ${
                dir === 'rtl' ? 'translate-x-2 group-hover:translate-x-0' : '-translate-x-2 group-hover:translate-x-0'
              }`}
              style={{ color: 'var(--color-accent-text)' }}
            />
          </a>
        </motion.div>

        {/* Links Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 1, delay: 0.2 }}
          className="luxury-card p-6 md:p-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            {/* LinkedIn Button */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-4 py-3 rounded-lg border transition-all duration-500 hover:border-[rgba(168,85,247,0.3)] hover:shadow-[0_0_20px_rgba(168,85,247,0.05)]"
              style={{
                borderColor: 'var(--color-card-border)',
                background: 'var(--color-card-surface)',
              }}
            >
              <Linkedin
                className="w-4 h-4 transition-colors duration-500 group-hover:text-[#A855F7]"
                style={{ color: 'var(--color-secondary-text)' }}
              />
              <span
                className="text-sm transition-all duration-500 group-hover:text-[#F5F5F7]"
                style={{ color: 'var(--color-secondary-text)' }}
              >
                {t.footer.linkedin}
              </span>
              <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 transition-all duration-500 group-hover:opacity-100"
                style={{ color: 'var(--color-accent-text)' }}
              />
            </a>

            {/* Copyright */}
            <p
              className="text-[11px] tracking-widest uppercase select-none"
              style={{ color: 'var(--color-secondary-text)' }}
            >
              {t.footer.copyright}
            </p>
          </div>
        </motion.div>

        {/* Decorative line under footer */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.4, ease: 'easeInOut' }}
          className="mt-16 h-px origin-center"
          style={{
            background: 'linear-gradient(90deg, transparent, var(--color-border-accent), transparent)',
          }}
        />
      </div>
    </footer>
  );
}