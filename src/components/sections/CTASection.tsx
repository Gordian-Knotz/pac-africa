'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

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
}: CTASectionProps) {
  return (
    <section className="section" aria-labelledby="cta-heading">
      <div className="container">
        <div className="on-dark-surface relative overflow-hidden rounded-[2.5rem] bg-secondary px-6 py-16 md:px-16 md:py-20 shadow-[var(--shadow-clay)]">
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-accent">
                Take Action
              </span>
            </motion.div>

            <motion.h2
              id="cta-heading"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              className="mt-5 mb-6 text-3xl md:text-4xl lg:text-5xl font-bold text-white"
            >
              {title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              className="mb-10 text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
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
      </div>
    </section>
  );
}
