'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardTitle } from '@/components/ui/Card';
import { events, speakers } from '@/data/events';

export default function EventsPage() {
  return (
    <>
      <section className="section relative overflow-hidden" aria-labelledby="events-hero-heading">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="eyebrow"
            >
              Events &amp; Programs
            </motion.div>
            <motion.h1
              id="events-hero-heading"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 mb-6 text-4xl md:text-5xl lg:text-6xl font-bold"
            >
              Certifications, Workshops{' '}
              <span className="text-primary">& Executive Programs</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Hands-on certification programmes, workshops, and executive roundtables run by PAC Africa and our partners.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="events-grid-heading">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Our Programs</span>
            <h2 id="events-grid-heading">Upcoming & Recurring Programs</h2>
            <p>Contact us for current dates, pricing, and enrollment for any of these programs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <motion.article
                key={event.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full">
                  <CardContent className="p-6 h-full flex flex-col">
                    <span className="inline-block mb-3 px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full w-fit">
                      {event.category}
                    </span>
                    <CardTitle className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      <Link href={`/events/${event.slug}`}>{event.title}</Link>
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">{event.summary}</p>
                    <Link
                      href={`/events/${event.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-surface" aria-labelledby="speakers-heading">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Our Network</span>
            <h2 id="speakers-heading">Trainers &amp; Speakers</h2>
            <p>Experienced practitioners who have led our programs and events</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {speakers.map((speaker, index) => (
              <motion.div
                key={speaker.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
                className="card p-6"
              >
                <h3 className="text-lg font-semibold mb-2">{speaker.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-6">{speaker.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
