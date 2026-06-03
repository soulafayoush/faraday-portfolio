'use client';

import { motion } from 'framer-motion';
import { useLanguage } from './LanguageProvider';
import { Linkedin, ArrowUpRight, Mail } from 'lucide-react';

export function FooterSection() {
  const { t, dir } = useLanguage();

  return (
    <footer
      id="contact"
      className="relative py-32 md:py-40 px-6 md:px-12 lg:px-24"
      dir={dir}
    >
      {/* Section divider */}
      <div className="section-divider mb-20 md:mb-28" />

      <div className="max-w-4xl mx-auto">
        {/* Contact Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-4 mb-12">
            <p
              className="text-xs tracking-[0.3em] uppercase"
              style={{ color: 'var(--color-secondary-text)' }}
            >
              Contact
            </p>
            <span className="w-8 h-px" style={{ backgroundColor: 'var(--color-border-accent)' }} />
          </div>

          <a
            href="mailto:contact@faraday.vc"
            className="group inline-flex items-center gap-4 luxury-card px-8 py-6 md:px-10 md:py-8 no-underline"
          >
            <Mail className="w-5 h-5 transition-colors duration-500"
              style={{ color: 'var(--color-accent-text)' }}
            />
            <span
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif transition-all duration-500 group-hover:text-[#A855F7] group-hover:tracking-wide"
              style={{
                fontFamily: 'var(--font-cormorant)',
                color: 'var(--color-primary-text)',
              }}
            >
              {t.footer.email}
            </span>
            <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0"
              style={{ color: 'var(--color-accent-text)' }}
            />
          </a>
        </motion.div>

        {/* Links Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="luxury-card p-6 md:p-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-4 py-3 rounded-lg border transition-all duration-500 hover:border-[rgba(168,85,247,0.3)]"
              style={{
                borderColor: 'var(--color-card-border)',
                background: 'var(--color-card-surface)',
              }}
            >
              <Linkedin
                className="w-4 h-4 transition-colors duration-500"
                style={{ color: 'var(--color-secondary-text)' }}
              />
              <span
                className="text-sm transition-all duration-500 group-hover:text-[#F5F5F7]"
                style={{ color: 'var(--color-secondary-text)' }}
              >
                {t.footer.linkedin}
              </span>
              <ArrowUpRight className="w-3 h-3 opacity-0 transition-all duration-500 group-hover:opacity-100"
                style={{ color: 'var(--color-accent-text)' }}
              />
            </a>

            {/* Copyright */}
            <p
              className="text-[11px] tracking-widest uppercase"
              style={{ color: 'var(--color-secondary-text)' }}
            >
              {t.footer.copyright}
            </p>
          </div>
        </motion.div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="mt-16 h-px origin-center"
          style={{
            background: 'linear-gradient(90deg, transparent, var(--color-border-accent), transparent)',
          }}
        />
      </div>
    </footer>
  );
}
