import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Clock } from 'lucide-react';
import { EMAIL, HOURS } from '@/constants';
import { ContactForm } from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact PDX Pallet Supply | Portland OR',
  description:
    'Contact PDX Pallet Supply in Portland, OR. Questions about pallets, delivery, pricing, or buyback. We reply same business day.',
  alternates: { canonical: 'https://pdxpallets.com/contact' },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-dark via-brand to-brand-light text-white py-16 md:py-20">
        <div className="container max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">Get in Touch</h1>
          <p className="text-white/80 text-lg">
            Questions about stock, pricing, or delivery? We reply same business day — usually faster.
          </p>
        </div>
      </section>

      <section className="section bg-page">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">

            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-bold text-ink mb-6">Contact Information</h2>
              <div className="space-y-5">
                {[
                  { icon: Mail, label: 'Email', content: <a href={`mailto:${EMAIL}`} className="text-brand hover:underline">{EMAIL}</a> },
                  { icon: Clock, label: 'Hours', content: <span className="text-muted">{HOURS}</span> },
                ].map(({ icon: Icon, label, content }) => (
                  <div key={label} className="flex items-start gap-4">
                    <Icon className="w-6 h-6 mt-0.5 text-brand shrink-0" aria-hidden="true" />
                    <div>
                      <p className="text-xs font-semibold text-dim uppercase tracking-wider mb-0.5">{label}</p>
                      <p className="text-sm">{content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-brand-pale border border-brand-mid/30 p-6">
                <h3 className="font-semibold text-ink mb-2">Need a quote instead?</h3>
                <p className="text-sm text-muted mb-4">
                  For pricing on a specific product, quantity, and delivery address, use our quote form.
                </p>
                <Link
                  href="/quote"
                  className="inline-flex h-11 items-center rounded-xl bg-brand px-5 text-sm font-semibold text-white hover:bg-brand-dark transition-colors"
                >
                  Request a Quote →
                </Link>
              </div>
            </div>

            {/* Contact form (client) */}
            <div>
              <h2 className="text-2xl font-bold text-ink mb-6">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
