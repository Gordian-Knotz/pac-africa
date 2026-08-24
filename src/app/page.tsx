'use client';

import { Hero } from '@/components/sections/Hero';
import { ServiceCard } from '@/components/sections/ServiceCard';
import { StatCard } from '@/components/sections/StatCard';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { CTASection } from '@/components/sections/CTASection';
import { cn } from '@/lib/utils';
import { 
  Lightbulb, 
  Users, 
  Target, 
  Briefcase, 
  RefreshCw, 
  Globe 
} from 'lucide-react';

const services = [
  {
    title: 'Innovation',
    description: 'Drive creative solutions and foster a culture of innovation through design thinking, ideation workshops, and innovation labs tailored to your organizational context.',
    icon: <Lightbulb className="h-7 w-7" />,
    href: '/services#innovation',
  },
  {
    title: 'Organization Development',
    description: 'Build high-performing organizations through structure design, culture transformation, change management, and leadership development programs.',
    icon: <Users className="h-7 w-7" />,
    href: '/services#org-dev',
  },
  {
    title: 'Strategy',
    description: 'Develop and execute winning strategies with strategic planning, business model innovation, market entry strategies, and performance measurement frameworks.',
    icon: <Target className="h-7 w-7" />,
    href: '/services#strategy',
  },
  {
    title: 'HR Support',
    description: 'Comprehensive HR solutions including talent acquisition, performance management, compensation design, HR policy development, and compliance.',
    icon: <Briefcase className="h-7 w-7" />,
    href: '/services#hr-support',
  },
  {
    title: 'Transformation',
    description: 'Lead successful organizational transformations with digital transformation, agile adoption, merger integration, and restructuring expertise.',
    icon: <RefreshCw className="h-7 w-7" />,
    href: '/services#transformation',
  },
  {
    title: 'Mobility',
    description: 'Global mobility and talent deployment solutions including expatriate management, immigration compliance, relocation services, and remote work frameworks.',
    icon: <Globe className="h-7 w-7" />,
    href: '/services#mobility',
  },
];

const stats = [
  { value: '100+', label: 'Years Combined Experience' },
  { value: '500+', label: 'Projects Delivered' },
  { value: '50+', label: 'Clients Across Africa' },
  { value: '98%', label: 'Client Satisfaction Rate' },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      
      <section className="section" aria-labelledby="services-heading">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Our Services</span>
            <h2 id="services-heading">Comprehensive Solutions for Every Challenge</h2>
            <p>
              Six specialized practice areas designed to activate your organization's full potential
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a
              href="/services"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              View All Services
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      
      <section className="section bg-surface" aria-labelledby="stats-heading">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12" role="list" aria-label="Key statistics">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} index={index} {...stat} role="listitem" />
            ))}
          </div>
        </div>
      </section>
      
      <WhyChooseUs />
      
      <CTASection />
    </>
  );
}
