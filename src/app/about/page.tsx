import type { Metadata } from 'next';
import AboutPage from './AboutContent';

export const metadata: Metadata = {
  title: 'About Us | PAC Africa',
  description: 'PAC Africa is a premier management consulting firm helping organizations across the continent unlock their full potential through strategic HR, organizational development, and transformation.',
  alternates: { canonical: '/about' },
};

export default function Page() {
  return <AboutPage />;
}
