import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { events } from '@/data/events';
import type { Metadata } from 'next';

interface EventPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) return {};
  return {
    title: `${event.title} | PAC Africa Events & Programs`,
    description: event.summary,
  };
}

export default async function EventDetailPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);

  if (!event) {
    notFound();
  }

  return (
    <article className="section">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all mb-8"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Events & Programs
          </Link>

          <span className="inline-block mb-4 px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
            {event.category}
          </span>

          <h1 className="mb-10">{event.title}</h1>

          <div
            className="prose prose-lg max-w-none [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-5 [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:mt-6 [&_h3]:mb-2 [&_h5]:mt-6 [&_h5]:mb-2 [&_ul]:mb-5 [&_ol]:mb-5 [&_li]:text-muted-foreground [&_li]:mb-2 [&_a]:text-primary [&_a]:underline [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:my-6 [&_hr]:my-8 [&_hr]:border-border"
            dangerouslySetInnerHTML={{ __html: event.html }}
          />

          <div className="mt-12 card p-6 md:p-8 text-center">
            <h3 className="text-xl font-semibold mb-2">Interested in this program?</h3>
            <p className="text-muted-foreground mb-6">Get in touch for upcoming dates, pricing, and enrollment details.</p>
            <Link href="/contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
