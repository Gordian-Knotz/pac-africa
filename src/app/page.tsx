import type { Metadata } from 'next';
import HomePage from './HomeContent';

export const metadata: Metadata = {
  title: 'PAC Africa | Activating Your Potential',
  description: 'Strategic HR, organizational development, and transformative solutions for organizations across Africa. 100+ years combined experience.',
  alternates: { canonical: '/' },
};

export default function Page() {
  return <HomePage />;
}
