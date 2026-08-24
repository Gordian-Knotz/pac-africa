'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/Card';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  index?: number;
  className?: string;
}

export function ServiceCard({ title, description, icon, href, index = 0, className }: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
      className={cn('group', className)}
    >
      <Card className="h-full group relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <CardContent className="relative p-6 h-full flex flex-col">
          <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
            {icon}
          </div>
          <CardTitle className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          <CardDescription className="text-muted-foreground flex-1">
            {description}
          </CardDescription>
          <div className="mt-4 pt-4 flex items-center justify-between shadow-[inset_0_1px_0_var(--clay-rim)]">
            <span className="text-sm font-medium text-primary flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
              Learn more
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </div>
        </CardContent>
      </Card>
    </motion.article>
  );
}
