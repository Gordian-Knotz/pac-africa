'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="section flex items-center justify-center min-h-[60vh]">
      <div className="container text-center">
        <span className="eyebrow">Error</span>
        <h1 className="mt-4 mb-6 text-4xl md:text-5xl font-bold">Something went wrong</h1>
        <p className="mb-10 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
          We hit an unexpected error. Please try again, or head back to the homepage.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={() => reset()} className="btn btn-primary">
            Try Again
          </button>
          <a href="/" className="btn btn-outline">
            Back to Home
          </a>
        </div>
      </div>
    </section>
  );
}
