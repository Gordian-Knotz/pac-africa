'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Lightbulb, Users, Target, Briefcase, RefreshCw, Globe } from 'lucide-react';

const services = [
  {
    id: 'innovation',
    title: 'Innovation',
    description: 'Drive creative solutions and foster a culture of innovation through design thinking, ideation workshops, and innovation labs tailored to your organizational context.',
    longDescription: 'We help organizations build systematic innovation capabilities that deliver measurable business outcomes. Our approach combines design thinking methodologies with practical implementation frameworks, ensuring that innovation becomes embedded in your organizational DNA rather than remaining a one-off initiative.',
    icon: Lightbulb,
    features: ['Design Thinking Workshops', 'Innovation Lab Setup', 'Ideation Facilitation', 'Innovation Strategy & Roadmap', 'Culture of Innovation Programs', 'Innovation Metrics & KPIs'],
  },
  {
    id: 'org-dev',
    title: 'Organization Development',
    description: 'Build high-performing organizations through structure design, culture transformation, change management, and governance & risk oversight.',
    longDescription: 'Our organization development practice helps you align structure, culture, and capabilities with your strategic objectives. We work with leadership teams to diagnose organizational health, design fit-for-purpose structures, and implement sustainable change — including governance frameworks and risk oversight that keep growth on a sound footing.',
    icon: Users,
    features: ['Organizational Design', 'Culture Assessment & Transformation', 'Change Management', 'Leadership Development', 'Governance & Risk Management', 'Employee Engagement'],
  },
  {
    id: 'strategy',
    title: 'Strategy',
    description: 'Develop and execute winning strategies with strategic planning, business model innovation, market entry strategies, and performance measurement frameworks.',
    longDescription: 'We partner with executive teams to clarify strategic direction, make bold choices, and build execution capabilities. Our strategy practice combines rigorous analysis with creative thinking to develop strategies that win in African markets.',
    icon: Target,
    features: ['Strategic Planning', 'Business Model Innovation', 'Market Entry Strategy', 'Performance Measurement', 'Scenario Planning', 'Strategy Execution'],
  },
  {
    id: 'hr-support',
    title: 'HR Support',
    description: 'Comprehensive HR solutions including talent acquisition, performance management, compensation design, statutory payroll processing, and HR audits.',
    longDescription: 'From strategic HR advisory to operational support, we help you build HR functions that drive business performance. Our team brings deep expertise across the full HR lifecycle, including statutory payroll processing (NHIF, NSSF, PAYE, NITA, HELB) and HR audits, tailored to East African regulatory environments.',
    icon: Briefcase,
    features: ['Talent Acquisition', 'Performance Management', 'Compensation & Benefits', 'HR Policy & Compliance', 'Payroll Processing (NHIF, NSSF, PAYE, NITA, HELB)', 'HR Audit & Administration'],
  },
  {
    id: 'transformation',
    title: 'Transformation',
    description: 'Lead successful organizational transformations with digital transformation, agile adoption, merger integration, and restructuring expertise.',
    longDescription: 'Transformation is about fundamentally changing how organizations operate and deliver value. We guide leaders through complex transformations with proven frameworks, hands-on support, and a focus on sustainable results.',
    icon: RefreshCw,
    features: ['Digital Transformation', 'Agile Adoption', 'Merger Integration', 'Restructuring', 'Operating Model Design', 'Transformation PMO'],
  },
  {
    id: 'mobility',
    title: 'Mobility',
    description: 'Global mobility and talent deployment solutions including expatriate management, immigration compliance, relocation services, and remote work frameworks.',
    longDescription: 'As African businesses expand globally and international organizations invest in Africa, mobility becomes a strategic capability. We provide end-to-end mobility solutions that ensure compliance, cost-effectiveness, and employee experience.',
    icon: Globe,
    features: ['Expatriate Management', 'Immigration & Compliance', 'Relocation Services', 'Remote Work Frameworks', 'Global Mobility Policy', 'Cross-Cultural Training'],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="section relative overflow-hidden" aria-labelledby="services-hero-heading">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="eyebrow"
            >
              Our Services
            </motion.div>
            <motion.h1
              id="services-hero-heading"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 mb-6 text-4xl md:text-5xl lg:text-6xl font-bold"
            >
              Six Practice Areas,{' '}
              <span className="text-primary">One Goal</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Comprehensive solutions designed to activate your organization's full potential across Africa.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="services-grid-heading">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Our Services</span>
            <h2 id="services-grid-heading">Specialized Expertise for Every Challenge</h2>
            <p>
              Deep domain knowledge combined with cross-functional collaboration to deliver holistic solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
              >
                <Card className="h-full group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardContent className="relative p-6 md:p-8 h-full flex flex-col">
                    <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <service.icon className="h-8 w-8" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground mb-6 flex-1">
                      {service.description}
                    </CardDescription>
                    <ul className="space-y-3 mb-6 flex-1" role="list" aria-label={`${service.title} service features`}>
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all" asChild>
                      <Link href={`/services#${service.id}`}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-surface" aria-labelledby="approach-heading">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">How We Work</span>
            <h2 id="approach-heading">Our Approach</h2>
            <p>A proven methodology that ensures sustainable results</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discover', description: 'Deep diagnostic to understand your context, challenges, and aspirations' },
              { step: '02', title: 'Design', description: 'Co-create tailored solutions with your leadership team' },
              { step: '03', title: 'Deliver', description: 'Implement with hands-on support and rigorous project management' },
              { step: '04', title: 'Embed', description: 'Build internal capabilities for sustained impact' },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 relative"
              >
                <div className="text-4xl font-bold text-primary/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="cta-heading">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              id="cta-heading"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to Start Your Transformation?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-8 text-lg text-muted-foreground"
            >
              Let's discuss which of our practice areas can help activate your organization's potential.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button size="xl" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link href="/about">Learn About Us</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
