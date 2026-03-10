import type { Metadata } from 'next';
import { QuoteForm } from './QuoteForm';

export const metadata: Metadata = {
  title: 'Get a Pallet Quote | PDX Pallet Supply Portland OR',
  description:
    'Request a pallet quote online. New or used pallets, any grade or size. Portland metro delivery or will-call pickup. We respond within 2 business hours.',
  alternates: { canonical: 'https://pdxpallets.com/quote' },
};

export default function QuotePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-dark via-brand to-brand-light text-white py-14 md:py-20">
        <div className="container max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-3">
            Get a Quote
          </h1>
          <p className="text-white/80 text-lg">
            Tell us what you need. We'll confirm availability and send pricing within 2 business hours.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="section bg-page">
        <div className="container">
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
