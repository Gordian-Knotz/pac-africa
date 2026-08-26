import type { Metadata } from 'next';
import InsightsPage from './InsightsContent';

export const metadata: Metadata = {
  title: 'Insights | PAC Africa',
  description: 'Perspectives on HR strategy, organizational culture, leadership, and business transformation from PAC Africa.',
  alternates: { canonical: '/insights' },
};

export default function Page() {
  return <InsightsPage />;
}
