'use client';

import { motion } from 'framer-motion';
import { BlogCard } from '@/components/sections/BlogCard';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    title: 'Building a Talent Pipeline for Africa\'s Leading Telco',
    excerpt: 'How we helped Safaricom design and implement a comprehensive talent acquisition strategy that reduced time-to-hire by 40% and improved candidate quality scores by 35%.',
    category: 'Talent Sourcing',
    date: '2024-03-15',
    readTime: '8 min read',
    href: '/case-studies/safaricom-talent-pipeline',
    image: '/images/case-study-1.jpg',
  },
  {
    title: 'AI and the Future of Work: Navigating the Transition',
    excerpt: 'A deep dive into how African organizations can prepare their workforce for AI adoption while maintaining human-centric values and inclusive growth.',
    category: 'AI & Jobs',
    date: '2024-02-28',
    readTime: '12 min read',
    href: '/case-studies/ai-future-of-work',
    image: '/images/case-study-2.jpg',
  },
  {
    title: 'Leadership Development at Scale: The KCB Group Journey',
    excerpt: 'How we partnered with KCB Group to build a continent-wide leadership development program that has graduated 500+ leaders across 6 countries.',
    category: 'Leadership',
    date: '2024-01-20',
    readTime: '10 min read',
    href: '/case-studies/kcb-leadership',
    image: '/images/case-study-3.jpg',
  },
  {
    title: 'Culture Transformation in a Merger: Equity Bank Case Study',
    excerpt: 'Lessons from guiding one of Africa\'s largest banking mergers through cultural integration, achieving 92% employee retention post-merger.',
    category: 'Culture',
    date: '2023-12-10',
    readTime: '9 min read',
    href: '/case-studies/equity-culture',
    image: '/images/case-study-4.jpg',
  },
  {
    title: 'Remote Work Excellence: Building Distributed Teams Across Africa',
    excerpt: 'Practical frameworks for managing high-performing remote teams across multiple African time zones, cultures, and regulatory environments.',
    category: 'Remote Work',
    date: '2023-11-05',
    readTime: '7 min read',
    href: '/case-studies/remote-work-africa',
    image: '/images/case-study-5.jpg',
  },
  {
    title: 'Organizational Design for Growth: East African Breweries',
    excerpt: 'How we restructured EABL\'s operating model to support their pan-African expansion strategy while maintaining operational excellence.',
    category: 'Strategy',
    date: '2023-10-12',
    readTime: '11 min read',
    href: '/case-studies/eabl-org-design',
    image: '/images/case-study-6.jpg',
  },
];

const categories = ['All', 'Talent Sourcing', 'AI & Jobs', 'Leadership', 'Culture', 'Remote Work', 'Strategy'];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="section relative overflow-hidden" aria-labelledby="case-studies-hero-heading">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="eyebrow"
            >
              Case Studies & Insights
            </motion.div>
            <motion.h1
              id="case-studies-hero-heading"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 mb-6 text-4xl md:text-5xl lg:text-6xl font-bold"
            >
              Real Stories,{' '}
              <span className="text-primary">Real Impact</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Explore how organizations across Africa are activating their potential with PAC Africa.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="case-studies-grid-heading">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Featured Work</span>
            <h2 id="case-studies-grid-heading">Our Latest Case Studies</h2>
            <p>Deep dives into transformations, innovations, and leadership journeys across the continent</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10" role="group" aria-label="Filter by category">
            {categories.map((category) => (
              <button
                key={category}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all',
                  category === 'All'
                    ? 'bg-primary text-white'
                    : 'bg-surface border border-border hover:bg-primary/10 hover:border-primary hover:text-primary'
                )}
                aria-pressed={category === 'All'}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <BlogCard key={study.href} index={index} {...study} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/case-studies">
                View All Insights
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section bg-surface" aria-labelledby="newsletter-heading">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2
              id="newsletter-heading"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Stay Updated with Our Latest Insights
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-8 text-lg text-muted-foreground"
            >
              Subscribe to our newsletter for monthly insights on HR, leadership, and organizational transformation in Africa.
            </motion.p>
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="input flex-1"
                aria-label="Email address for newsletter"
              />
              <Button size="lg" type="submit">
                Subscribe
              </Button>
            </motion.form>
            <p className="mt-4 text-sm text-muted-foreground">
              No spam. Unsubscribe anytime. See our <a href="#" className="underline hover:text-primary">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
