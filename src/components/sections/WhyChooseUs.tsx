'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { CheckCircle2, Users, Lightbulb, Target } from 'lucide-react';

interface WhyChooseUsProps {
  className?: string;
}

const reasons = [
  {
    icon: CheckCircle2,
    title: 'Proven Expertise',
    description: 'Over 100 years of combined experience delivering HR and organizational solutions across Africa. Our team has worked with multinational corporations, governments, and growing enterprises.',
  },
  {
    icon: Users,
    title: 'Local Knowledge, Global Standards',
    description: 'Deep understanding of African markets, cultures, and regulatory environments combined with international best practices and methodologies.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation-Driven Approach',
    description: 'We leverage cutting-edge technology, data analytics, and modern HR practices to deliver solutions that are both innovative and practical.',
  },
];

export function WhyChooseUs({ className }: WhyChooseUsProps) {
  return (
    <section className="section bg-surface" aria-labelledby="why-choose-us-heading">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Why PAC Africa</span>
          <h2 id="why-choose-us-heading">Partner with Confidence</h2>
          <p>
            Three reasons organizations across Africa trust us to activate their potential
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.article
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
              className="card group p-8"
            >
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <reason.icon className="h-8 w-8" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
