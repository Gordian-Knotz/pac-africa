import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

function Facebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12.06C22 6.507 17.523 2 12 2S2 6.507 2 12.06c0 5.02 3.657 9.184 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.877h2.773l-.443 2.91h-2.33V22c4.78-.756 8.437-4.92 8.437-9.94z" />
    </svg>
  );
}

function Twitter(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05a3.9 3.9 0 0 0-6.65 3.56 11.1 11.1 0 0 1-8.06-4.09 3.9 3.9 0 0 0 1.2 5.2 3.86 3.86 0 0 1-1.76-.49c-.04 1.9 1.32 3.68 3.29 4.08a3.9 3.9 0 0 1-1.76.07 3.9 3.9 0 0 0 3.64 2.71A7.86 7.86 0 0 1 2 18.57a11.1 11.1 0 0 0 6.01 1.76c7.21 0 11.15-6.02 11.15-11.24l-.01-.51c.77-.55 1.43-1.24 1.31-1.58z" />
    </svg>
  );
}

function Linkedin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 8.98h4v12H3v-12zM9 8.98h3.84v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1v6.31h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96v5.7H9v-12z" />
    </svg>
  );
}

function Instagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const navigation = {
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Contact', href: '/contact' },
    ],
    services: [
      { label: 'Innovation', href: '/services#innovation' },
      { label: 'Organization Development', href: '/services#org-dev' },
      { label: 'Strategy', href: '/services#strategy' },
      { label: 'HR Support', href: '/services#hr-support' },
      { label: 'Transformation', href: '/services#transformation' },
      { label: 'Mobility', href: '/services#mobility' },
    ],
    resources: [
      { label: 'Blog', href: '/case-studies' },
      { label: 'Insights', href: '/case-studies' },
      { label: 'Careers', href: '/contact' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  };
  
  const contactInfo = {
    address: '123 Business Avenue, Nairobi, Kenya',
    phone: '+254 700 000 000',
    email: 'info@pacafrica.com',
  };
  
  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  ];
  
  return (
    <footer className="bg-secondary text-white" role="contentinfo">
      <div className="container py-16 lg:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="inline-block mb-6" aria-label="PAC Africa Home">
              <span className="text-2xl font-bold text-white">PAC</span>
              <span className="text-primary"> Africa</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-xs leading-relaxed">
              Activating potential across Africa through strategic HR, 
              organizational development, and transformative solutions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          
          <nav aria-label="Company">
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <nav aria-label="Services">
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <nav aria-label="Resources">
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {navigation.resources.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <address className="not-italic space-y-4 text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" aria-hidden="true" />
                <a href="tel:+254700000000" className="hover:text-primary transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" aria-hidden="true" />
                <a href="mailto:info@pacafrica.com" className="hover:text-primary transition-colors">
                  {contactInfo.email}
                </a>
              </div>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} PAC Africa. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Crafted with precision for African excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
