import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '404 — Page Not Found | PDX Pallet Supply',
};

export default function NotFound() {
  return (
    <section className="section bg-page min-h-[60vh] flex items-center">
      <div className="container max-w-lg text-center">
        <p className="text-8xl font-bold text-brand-pale mb-4" aria-hidden="true">404</p>
        <h1 className="text-3xl font-bold text-ink mb-3">Page not found</h1>
        <p className="text-muted mb-8">
          The page you're looking for doesn't exist or has moved. Let us help you find what you need.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex h-11 items-center rounded-xl bg-brand px-6 font-semibold text-white hover:bg-brand-dark transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/quote"
            className="inline-flex h-11 items-center rounded-xl border border-edge bg-card px-6 font-semibold text-ink hover:bg-subtle transition-colors"
          >
            Get a Quote
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-11 items-center rounded-xl border border-edge bg-card px-6 font-semibold text-ink hover:bg-subtle transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
