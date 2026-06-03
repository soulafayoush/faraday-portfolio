'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

// تحسين الـ Regex لضمان التقاط الأرقام العشرية بشكل دقيق تماماً
function parseNumericValue(value: string): number {
  const match = value.match(/[\d.]+/);
  return match ? parseFloat(match[0]) : 0;
}

function getPrefix(value: string): string {
  const match = value.match(/^[^\d.]*/); // إضافة النقطة لكي لا يعتبرها جزءاً من الـ prefix
  return match ? match[0] : '';
}

function getSuffix(value: string): string {
  const match = value.match(/[^\d.]*$/); // إضافة النقطة لكي لا يختلط الرقم العشري بالـ suffix
  return match && match[0].length < 5 ? match[0] : '';
}

export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' }); // متناسق مع الـ About Section للـ Mobile
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!isInView) return;

    const target = parseNumericValue(value);
    const prefix = getPrefix(value);
    const suffix = getSuffix(value);
    const duration = 2000;
    const startTime = Date.now();
    let animationFrameId: number; // متغير لحفظ معرف الأنميشن

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;

      if (Number.isInteger(target)) {
        setDisplay(`${prefix}${Math.round(current)}${suffix}`);
      } else {
        // الحفاظ على الخانات العشرية بدقة بناءً على الرقم الأصلي
        const decimalPlaces = value.includes('.') ? value.split('.')[1].match(/\d+/)?.[0].length || 1 : 1;
        setDisplay(`${prefix}${current.toFixed(decimalPlaces)}${suffix}`);
      }

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setDisplay(value); // حماية نهائية لضمان عرض النص الأصلي المترجم تماماً كما هو
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    // دالة التنظيف الحَرجة لمنع الـ Memory Leaks في الـ React
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isInView, value]);

  return <span ref={ref}>{display}</span>;
}