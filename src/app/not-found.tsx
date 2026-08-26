import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="section flex items-center justify-center min-h-[60vh]">
      <div className="container text-center">
        <span className="eyebrow">404</span>
        <h1 className="mt-4 mb-6 text-4xl md:text-5xl font-bold">Page not found</h1>
        <p className="mb-10 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 btn btn-primary"
        >
          Back to Home
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
