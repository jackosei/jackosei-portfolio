'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { usePrefersMotion } from '@/hooks/usePrefersMotion';

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export default function AnimateIn({ children, delay = 0, className }: Props) {
  const canAnimate = usePrefersMotion();     // true on desktop, false on mobile

  if (!canAnimate) {
    // Render without motion props – no layout shift, nothing to hydrate
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
