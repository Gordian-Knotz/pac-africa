import type { Metadata } from 'next';
import ServicesPage from './ServicesContent';

export const metadata: Metadata = {
  title: 'Services | PAC Africa',
  description: 'Strategic HR, organization development, innovation, transformation, and mobility services for organizations across Africa.',
  alternates: { canonical: '/services' },
};

export default function Page() {
  return <ServicesPage />;
}
