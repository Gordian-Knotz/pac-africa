import type { Metadata } from 'next';
import EventsPage from './EventsContent';

export const metadata: Metadata = {
  title: 'Events & Programs | PAC Africa',
  description: 'Certification programmes, workshops, and executive roundtables run by PAC Africa and our partners.',
  alternates: { canonical: '/events' },
};

export default function Page() {
  return <EventsPage />;
}
