'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface StatCardProps {
  value: string;
  label: string;
  index?: number;
  className?: string;
  role?: string;
}

export function StatCard({ value, label, index = 0, className, role }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
      className={cn('text-center', className)}
      role={role}
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2" aria-hidden="true">
        {value}
      </div>
      <div className="text-sm text-muted-foreground font-medium">{label}</div>
    </motion.div>
  );
}
