'use client';

import { motion } from 'framer-motion';
import { BlogCard } from '@/components/sections/BlogCard';
import { insights } from '@/data/insights';

export default function InsightsPage() {
  return (
    <>
      <section className="section relative overflow-hidden" aria-labelledby="insights-hero-heading">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="eyebrow"
            >
              Insights
            </motion.div>
            <motion.h1
              id="insights-hero-heading"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 mb-6 text-4xl md:text-5xl lg:text-6xl font-bold"
            >
              Ideas on Work,{' '}
              <span className="text-primary">Culture & Strategy</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Perspectives from the PAC Africa team on talent, leadership, and organizational transformation across the continent.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="insights-grid-heading">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Latest Articles</span>
            <h2 id="insights-grid-heading">From Our Team</h2>
            <p>Thinking on talent, culture, and strategy from the people doing the work</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insights.map((insight, index) => (
              <BlogCard
                key={insight.slug}
                index={index}
                title={insight.title}
                excerpt={insight.excerpt}
                category={insight.category}
                date={insight.date}
                readTime={insight.readTime}
                href={`/insights/${insight.slug}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
