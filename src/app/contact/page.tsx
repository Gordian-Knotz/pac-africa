import type { Metadata } from 'next';
import ContactPage from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact Us | PAC Africa',
  description: 'Get in touch with PAC Africa. Offices in Nairobi, Dar es Salaam, and Kampala.',
  alternates: { canonical: '/contact' },
};

export default function Page() {
  return <ContactPage />;
}
