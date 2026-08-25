'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import {
  Target,
  Heart, 
  Zap, 
  Users, 
  Award, 
  TrendingUp 
} from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We deliver exceptional quality in every engagement, holding ourselves to the highest standards of professional excellence.',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'We act with honesty, transparency, and ethical courage in all our relationships and decisions.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We continuously seek better ways to solve challenges, embracing creativity and forward-thinking approaches.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe in the power of partnership, working closely with clients and each other to achieve shared success.',
  },
  {
    icon: Award,
    title: 'Impact',
    description: 'We measure our success by the tangible, lasting impact we create for our clients and their communities.',
  },
  {
    icon: TrendingUp,
    title: 'Growth',
    description: 'We are committed to continuous learning and development, both for ourselves and those we serve.',
  },
];

const focusAreas = [
  'Strategic HR Consulting',
  'Organizational Design & Development',
  'Leadership & Talent Development',
  'Change Management & Transformation',
  'Culture & Engagement',
  'Diversity, Equity & Inclusion',
  'Global Mobility & Immigration',
  'HR Technology & Analytics',
];

export default function AboutPage() {
  return (
    <>
      <section className="section relative overflow-hidden" aria-labelledby="about-hero-heading">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="eyebrow"
            >
              Our Firm
            </motion.div>
            <motion.h1
              id="about-hero-heading"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 mb-8 text-4xl md:text-5xl lg:text-6xl font-bold"
            >
              Activating Potential<br />
              <span className="text-primary">Across Africa</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              PAC Africa is a premier management consulting firm dedicated to helping organizations 
              across the continent unlock their full potential. With over 100 years of combined 
              experience, we partner with leaders to build capable teams, transform cultures, 
              and deliver sustainable results.
            </motion.p>
          </div>
        </div>
      </section>
      
      <section className="section bg-surface" aria-labelledby="focus-heading">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">What We Focus On</span>
            <h2 id="focus-heading">Our Practice Areas</h2>
            <p>Deep expertise across the full spectrum of human capital and organizational challenges</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {focusAreas.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="card p-6 group"
              >
                <h3 className="font-semibold group-hover:text-primary transition-colors">
                  {area}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="section" aria-labelledby="values-heading">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Our Values</span>
            <h2 id="values-heading">Guiding Principles</h2>
            <p>The values that shape every decision and interaction</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 h-full"
              >
                <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary">
                  <value.icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      
      <section className="section bg-primary text-white" aria-labelledby="cta-heading">
        <div className="container text-center">
          <motion.h2
            id="cta-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Ready to Work Together?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8 text-lg md:text-xl text-primary-100 max-w-2xl mx-auto"
          >
            Let's discuss how we can help activate your organization's potential.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="xl" variant="accent" asChild>
              <a href="/contact">Start a Conversation</a>
            </Button>
            <Button size="xl" variant="outline" className="bg-white/10 text-white hover:bg-white hover:text-secondary" asChild>
              <a href="/about">Learn More About Us</a>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
