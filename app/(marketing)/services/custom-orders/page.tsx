import type { Metadata } from 'next';
import Link from 'next/link';
import { Ruler, Thermometer, Wrench, Tag, Package, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Custom Pallet Orders & Volume Programs Portland OR | PDX Pallet Supply',
  description:
    'Custom pallet sizes, heat-treated, ISPM-15, and export-spec pallets in Portland OR. Volume pricing programs for 500+ units/month. Net-30 accounts. Free quote.',
  alternates: { canonical: 'https://pdxpallets.com/services/custom-orders' },
};

const CUSTOM_OPTIONS = [
  {
    icon: Ruler,
    title: 'Non-Standard Dimensions',
    body: 'Need a 36×36, 48×42, or fully custom footprint? We source and stock specialty sizes on request. Minimums as low as 50 units.',
  },
  {
    icon: Thermometer,
    title: 'Heat-Treated / ISPM-15',
    body: 'All export shipments require ISPM-15 certification. We supply HT-stamped pallets with full documentation. FDA-compliant supply chains accommodated.',
  },
  {
    icon: Wrench,
    title: 'Repair & Recondition',
    body: 'Send us damaged Grade B/C inventory. We repair and certify to Grade A spec — typically 40% cheaper than buying new.',
  },
  {
    icon: Tag,
    title: 'Private Label / Marking',
    body: 'Custom stenciling, color coding, or RFID tagging for supply chain visibility. Minimums and setup fees apply — ask for details.',
  },
  {
    icon: Package,
    title: 'Specialty Materials',
    body: 'Plastic pallets, metal-banded, corrugated slip sheets. We source what we don\'t stock — one vendor relationship for your full pallet program.',
  },
  {
    icon: Calendar,
    title: 'Scheduled Release Programs',
    body: 'Lock in pricing and have pallets released weekly or monthly against a blanket PO. Ideal for operations with predictable but spiky demand.',
  },
];

const VOLUME_TIERS = [
  { tier: 'Standard', units: '1–99/mo', benefit: 'Market pricing, same-day availability' },
  { tier: 'Business', units: '100–499/mo', benefit: '5% volume discount + dedicated rep' },
  { tier: 'Volume', units: '500–999/mo', benefit: '10% discount + net-30 + priority staging' },
  { tier: 'Enterprise', units: '1,000+/mo', benefit: 'Custom contract + locked pricing + managed program' },
];

export default function CustomOrdersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-ink via-brand-dark to-brand text-white py-20 md:py-28">
        <div className="container max-w-3xl">
          <p className="mb-3 text-sm font-medium text-white/80">
            Custom Sizes · ISPM-15 · Volume Programs · Net-30 Accounts
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">
            Your Pallet Program. Built Around You.
          </h1>
          <p className="text-white/80 text-lg mb-8 max-w-xl">
            Custom dimensions, heat-treated export specs, volume contracts, and managed replenishment — for operations that need more than off-the-shelf.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/quote" className="inline-flex h-11 items-center rounded-xl bg-white px-6 font-semibold text-brand hover:bg-white/90 transition-colors">
              Request a Custom Quote →
            </Link>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <div className="bg-brand-pale border-b border-brand-mid/40 py-4">
        <div className="container">
          <dl className="flex flex-wrap justify-center gap-8 text-center">
            {[
              { dt: 'Custom orders fulfilled', dd: '3,200+' },
              { dt: 'Volume accounts active', dd: '85+' },
              { dt: 'Min. custom order', dd: '50 units' },
              { dt: 'Quote turnaround', dd: '< 4 hrs' },
            ].map(({ dt, dd }) => (
              <div key={dt}>
                <dd className="text-2xl font-bold text-brand">{dd}</dd>
                <dt className="text-xs text-muted mt-0.5">{dt}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Custom options */}
      <section className="section bg-page" aria-labelledby="custom-h2">
        <div className="container">
          <div className="text-center mb-10">
            <h2 id="custom-h2" className="text-3xl font-bold text-ink tracking-tight mb-3">
              What We Can Source or Build
            </h2>
            <p className="text-muted text-lg max-w-xl mx-auto">
              If your pallet needs fall outside stock inventory, we have supplier relationships to close the gap.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CUSTOM_OPTIONS.map((opt) => (
              <div key={opt.title} className="rounded-2xl border border-edge bg-card p-7">
                <opt.icon className="w-8 h-8 mb-3" aria-hidden="true" />
                <h3 className="font-bold text-ink mb-2">{opt.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{opt.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volume tiers */}
      <section className="section bg-subtle" aria-labelledby="volume-h2">
        <div className="container max-w-4xl">
          <div className="text-center mb-10">
            <h2 id="volume-h2" className="text-3xl font-bold text-ink tracking-tight mb-3">
              Volume Pricing Programs
            </h2>
            <p className="text-muted text-lg max-w-xl mx-auto">
              The more you buy, the better the rate — and the more hands-on support you get.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {VOLUME_TIERS.map((t, i) => (
              <div
                key={t.tier}
                className={`rounded-2xl border-2 p-7 ${i === 3 ? 'border-brand bg-brand-pale' : 'border-edge bg-card'}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-lg font-bold ${i === 3 ? 'text-brand' : 'text-ink'}`}>{t.tier}</span>
                  {i === 3 && (
                    <span className="rounded-full bg-brand px-3 py-0.5 text-xs font-semibold text-white">
                      Best Value
                    </span>
                  )}
                </div>
                <p className="text-2xl font-bold text-ink mb-1">{t.units}</p>
                <p className="text-sm text-muted">{t.benefit}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-muted mt-6">
            All tiers include access to our full product catalog. <Link href="/quote" className="text-brand hover:underline">Contact us to discuss your program.</Link>
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-page" aria-labelledby="process-h2">
        <div className="container max-w-3xl">
          <h2 id="process-h2" className="text-3xl font-bold text-ink tracking-tight text-center mb-10">
            How Custom Orders Work
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { step: '1', title: 'Tell us your spec', body: 'Dimensions, treatment, quantity, timeline, compliance requirements. The more detail, the faster we respond.' },
              { step: '2', title: 'We source and quote', body: 'Within 4 business hours you have a firm quote with lead time, pricing, and spec sheet for review.' },
              { step: '3', title: 'Approve and deliver', body: 'Sign off on the spec, we produce or procure, then deliver or stage for pickup per your schedule.' },
            ].map(({ step, title, body }) => (
              <div key={step} className="text-center rounded-2xl border border-edge bg-card p-7">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white text-xl font-bold">
                  {step}
                </div>
                <h3 className="font-bold text-ink mb-2">{title}</h3>
                <p className="text-sm text-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Net-30 callout */}
      <section className="section bg-subtle">
        <div className="container max-w-3xl">
          <div className="rounded-2xl bg-kraft-pale border border-kraft-mid p-8 md:p-10 text-center">
            <h2 className="text-2xl font-bold text-ink mb-3">Net-30 Accounts for Qualified Buyers</h2>
            <p className="text-muted mb-6 max-w-lg mx-auto">
              Stop paying invoice by invoice. Open a net-30 account with a 5-minute credit application — approval typically within 1 business day. Available for volume and enterprise tiers.
            </p>
            <Link href="/quote" className="inline-flex h-11 items-center rounded-xl bg-brand px-7 font-semibold text-white hover:bg-brand-dark transition-colors">
              Apply for Net-30 →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-page">
        <div className="container max-w-2xl">
          <h2 className="text-2xl font-bold text-ink mb-8 text-center">Custom Orders FAQ</h2>
          <div className="space-y-4">
            {[
              { q: 'What\'s the minimum for a custom order?', a: 'For non-standard sizes and heat-treated orders, the minimum is 50 units. Repair/recondition orders start at 25 pallets.' },
              { q: 'How long do custom orders take?', a: 'In-region sourcing typically takes 3–5 business days. ISPM-15 certification adds 1–2 days for treatment. Rush orders (48-hour) available for surcharge.' },
              { q: 'Do you offer blanket PO or standing order programs?', a: 'Yes. Volume and Enterprise accounts can establish a blanket PO with scheduled weekly or monthly releases. We hold inventory against your commitment.' },
              { q: 'Can you match a pallet spec from my current supplier?', a: 'In most cases yes. Send us the spec sheet or a sample pallet and we\'ll match or exceed it.' },
            ].map(({ q, a }) => (
              <div key={q} className="rounded-xl border border-edge bg-card p-6">
                <h3 className="font-semibold text-ink mb-2">{q}</h3>
                <p className="text-sm text-muted leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand py-16 text-white text-center">
        <div className="container max-w-lg">
          <h2 className="text-2xl font-bold mb-3">Tell us what you need</h2>
          <p className="text-white/80 mb-6">Custom quote within 4 hours. No commitment required.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/quote" className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-6 font-semibold text-brand hover:bg-white/90 transition-colors">
              Request Custom Quote →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
