'use client';

import { motion } from 'framer-motion';
import { ContactForm } from '@/components/sections/ContactForm';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: 'Jasmine Centre, Pio Gama Pinto Road, Westlands, Nairobi, Kenya',
    href: 'https://maps.google.com',
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: '+254 700 000 000',
    href: 'tel:+254700000000',
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: 'info@pac.africa',
    href: 'mailto:info@pac.africa',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: 'Mon - Fri: 8:00 AM - 5:00 PM (EAT)',
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="section relative overflow-hidden" aria-labelledby="contact-hero-heading">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="eyebrow"
            >
              Get in Touch
            </motion.div>
            <motion.h1
              id="contact-hero-heading"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 mb-6 text-4xl md:text-5xl lg:text-6xl font-bold"
            >
              Let's Start a{' '}
              <span className="text-primary">Conversation</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Ready to activate your organization's potential? We'd love to hear about your challenges and explore how we can help.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="contact-main-heading">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 id="contact-main-heading" className="text-2xl md:text-3xl font-bold mb-6">
                  Let's Connect
                </h2>
                <p className="text-muted-foreground mb-10 leading-relaxed">
                  Whether you have a specific project in mind or just want to explore possibilities, our team is ready to listen and help you find the right path forward.
                </p>

                <div className="space-y-6" role="list" aria-label="Contact information">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex gap-4"
                      role="listitem"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {item.details}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{item.details}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 p-6 bg-surface rounded-xl">
                  <h3 className="font-semibold mb-4">Quick Links</h3>
                  <ul className="space-y-3" role="list">
                    <li>
                      <a href="/services" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        Explore Our Services
                      </a>
                    </li>
                    <li>
                      <a href="/insights" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        Read Our Insights
                      </a>
                    </li>
                    <li>
                      <a href="/about" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        Learn About Us
                      </a>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="card p-6 md:p-8"
              >
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface" aria-labelledby="offices-heading">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Our Presence</span>
            <h2 id="offices-heading">Offices Across Africa</h2>
            <p>Strategically located to serve our clients across the continent</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { city: 'Nairobi', country: 'Kenya (HQ)', address: 'Jasmine Centre, Pio Gama Pinto Road, Westlands', phone: '+254 700 000 000' },
              { city: 'Dar es Salaam', country: 'Tanzania', address: 'Sinza Kivulini, Raha Street', phone: '+255 700 000 000' },
              { city: 'Kampala', country: 'Uganda', address: 'Plot 11, Archer Road, Lower Kololo Terrace', phone: '+256 700 000 000' },
            ].map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6"
              >
                <h3 className="text-xl font-bold mb-1">{office.city}</h3>
                <p className="text-primary text-sm font-medium mb-3">{office.country}</p>
                <address className="not-italic text-muted-foreground space-y-2">
                  <p>{office.address}</p>
                  <a href={`tel:${office.phone}`} className="hover:text-primary transition-colors">{office.phone}</a>
                </address>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
