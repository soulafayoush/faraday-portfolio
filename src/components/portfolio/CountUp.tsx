'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

function parseNumericValue(value: string): number {
  const match = value.match(/[\d.]+/);
  return match ? parseFloat(match[0]) : 0;
}

function getPrefix(value: string): string {
  const match = value.match(/^[^\d]*/);
  return match ? match[0] : '';
}

function getSuffix(value: string): string {
  const match = value.match(/[^\d]*$/);
  return match && match[0].length < 5 ? match[0] : '';
}

export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!isInView) return;

    const target = parseNumericValue(value);
    const prefix = getPrefix(value);
    const suffix = getSuffix(value);
    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;

      if (Number.isInteger(target)) {
        setDisplay(`${prefix}${Math.round(current)}${suffix}`);
      } else {
        setDisplay(`${prefix}${current.toFixed(1)}${suffix}`);
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplay(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return <span ref={ref}>{display}</span>;
}
