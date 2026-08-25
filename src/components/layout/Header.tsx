'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ThemeToggle } from '@/components/layout/ThemeToggle';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Programs', href: '/events' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-3 md:top-5 left-0 right-0 z-50" role="banner">
      <div className="container">
        <nav
          className={cn(
            'mx-auto flex h-14 md:h-16 max-w-4xl items-center justify-between rounded-full bg-[var(--color-surface)]/90 backdrop-blur-md px-4 md:px-6 shadow-[var(--shadow-clay)] transition-shadow duration-300',
            isScrolled && 'shadow-[var(--shadow-clay-hover)]'
          )}
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="flex items-center gap-1 text-lg font-bold text-foreground"
            aria-label="PAC Africa Home"
          >
            <span className="text-foreground">PAC</span>
            <span className="text-primary">Africa</span>
          </Link>

          <div className="hidden md:flex md:items-center md:gap-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button variant="primary" size="sm" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 rounded-full"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </nav>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mx-auto mt-2 max-w-4xl overflow-hidden rounded-3xl bg-[var(--color-surface)] shadow-[var(--shadow-clay)]"
            >
              <div className="p-4 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-xl px-3 py-2.5 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-[var(--color-surface-hover)] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-3 flex gap-3">
                  <Button variant="primary" className="flex-1" asChild>
                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Get Started</Link>
                  </Button>
                  <Button variant="outline" className="flex-1" asChild>
                    <Link href="/services" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
