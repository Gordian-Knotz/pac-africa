'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
  className?: string;
}

export function CTASection({
  title = 'Ready to Activate Your Potential?',
  description = 'Let\'s discuss how PAC Africa can help your organization achieve its goals. Schedule a consultation with our experts today.',
  primaryText = 'Get Started',
  primaryHref = '/contact',
  secondaryText = 'View Services',
  secondaryHref = '/services',
  className,
}: CTASectionProps) {
  return (
    <section className="section relative overflow-hidden" aria-labelledby="cta-heading">
      <div className="absolute inset-0 bg-secondary" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" aria-hidden="true" />
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="eyebrow text-accent">Take Action</span>
          </motion.div>
          
          <motion.h2
            id="cta-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="mt-4 mb-6 text-3xl md:text-4xl lg:text-5xl font-bold text-white"
          >
            {title}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="mb-10 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="xl" variant="accent" asChild>
              <Link href={primaryHref}>
                {primaryText}
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="bg-white/10 text-white hover:bg-white hover:text-secondary" asChild>
              <Link href={secondaryHref}>{secondaryText}</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
