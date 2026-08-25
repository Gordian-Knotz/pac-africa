import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { insights } from '@/data/insights';
import type { Metadata } from 'next';

interface InsightPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({ params }: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = insights.find((i) => i.slug === slug);
  if (!insight) return {};
  return {
    title: `${insight.title} | PAC Africa Insights`,
    description: insight.excerpt,
  };
}

export default async function InsightDetailPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const insight = insights.find((i) => i.slug === slug);

  if (!insight) {
    notFound();
  }

  return (
    <article className="section">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all mb-8"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Insights
          </Link>

          <span className="inline-block mb-4 px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
            {insight.category}
          </span>

          <h1 className="mb-4">{insight.title}</h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-10">
            <time dateTime={insight.date} className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" aria-hidden="true" />
              {new Date(insight.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </time>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" aria-hidden="true" />
              {insight.readTime}
            </span>
          </div>

          <div
            className="prose prose-lg max-w-none [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-5 [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:mt-6 [&_h3]:mb-2 [&_h4]:mt-4 [&_h4]:mb-2 [&_ul]:mb-5 [&_ol]:mb-5 [&_li]:text-muted-foreground [&_li]:mb-2 [&_a]:text-primary [&_a]:underline"
            dangerouslySetInnerHTML={{ __html: insight.html }}
          />
        </div>
      </div>
    </article>
  );
}
