import type { Metadata } from 'next';
import Link from 'next/link';
import { Thermometer, Ruler, Mountain } from 'lucide-react';

export const metadata: Metadata = {
  title: 'New Pallets Portland OR | ISPM-15 Certified | Wholesale',
  description:
    'Buy new heat-treated pallets in Portland, OR. ISPM-15 certified, Southern Yellow Pine, standard and custom dimensions. Same-week delivery across the PDX metro. Get a free quote.',
  alternates: { canonical: 'https://pdxpallets.com/products/new-pallets' },
};

const SPECS = [
  { label: 'Standard sizes',      value: '48×40 GMA · 42×42 · 48×48 · 40×40' },
  { label: 'Wood species',        value: 'Southern Yellow Pine (SYP)' },
  { label: 'Heat treatment',      value: 'HT / ISPM-15 certified, all stock' },
  { label: 'Configurations',      value: 'Stringer & Block (4-way)' },
  { label: 'Static capacity',     value: '2,500–3,000 lbs' },
  { label: 'Dynamic capacity',    value: '1,500–1,800 lbs' },
  { label: 'Min. order',          value: '25 units (standard)' },
  { label: 'Lead time',           value: 'Same-week (stock sizes)' },
  { label: 'Custom lead time',    value: '5–7 business days' },
];

const FEATURES = [
  {
    icon: Thermometer,
    title: 'ISPM-15 Certified — Ship Anywhere Without Delays',
    body: 'Every new pallet carries the HT stamp required by ISPM-15. If your freight crosses borders, your pallets must be compliant. Ours always are. No scrambling for documentation, no customs holdups.',
  },
  {
    icon: Ruler,
    title: 'Standard and Custom Dimensions — Same Lead Times',
    body: 'We stock the industry standards: 48×40 GMA, 42×42, 48×48, and 40×40. Need something outside the standard? Our custom program produces non-standard dimensions with the same lead times as stock items.',
  },
  {
    icon: Mountain,
    title: 'Southern Yellow Pine — The Density That Handles Real Loads',
    body: 'SYP offers superior density, nail-holding strength, and resistance to splitting under load. Heavier loads, fewer failures, lower replacement costs over time.',
  },
];

export default function NewPalletsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-dark to-brand text-white py-20 md:py-28">
        <div className="container max-w-3xl">
          <p className="mb-3 text-sm font-medium text-white/80">
            New Pallet Inventory · Heat-Treated · ISPM-15 Certified
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">
            New Pallets. Built for Portland Business.
          </h1>
          <p className="text-white/80 text-lg mb-8 max-w-xl">
            ISPM-15 certified, heat-treated new pallets in standard and custom dimensions — ready to ship this week.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/quote" className="inline-flex h-11 items-center rounded-xl bg-white px-6 font-semibold text-brand hover:bg-white/90 transition-colors">
              Get a Bulk Quote →
            </Link>
            <a href="#specs" className="inline-flex h-11 items-center rounded-xl border border-white/30 bg-white/10 px-6 font-semibold text-white hover:bg-white/20 transition-colors">
              View Specifications
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section bg-page" aria-labelledby="features-h2">
        <div className="container">
          <h2 id="features-h2" className="text-3xl font-bold text-ink text-center mb-10 tracking-tight">
            Precision-Built. Certified. Ready When You Need Them.
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl border border-edge bg-card p-8">
                <f.icon className="w-8 h-8 mb-4" aria-hidden="true" />
                <h3 className="font-bold text-ink mb-3 leading-snug">{f.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs table */}
      <section id="specs" className="section bg-subtle" aria-labelledby="specs-h2">
        <div className="container max-w-3xl">
          <h2 id="specs-h2" className="text-2xl font-bold text-ink mb-8 text-center">Product Specifications</h2>
          <div className="overflow-hidden rounded-2xl border border-edge bg-card">
            <table className="w-full text-sm">
              <tbody>
                {SPECS.map(({ label, value }, i) => (
                  <tr key={label} className={i % 2 === 0 ? 'bg-card' : 'bg-subtle'}>
                    <td className="py-3 px-6 font-medium text-ink w-1/2 border-r border-edge">{label}</td>
                    <td className="py-3 px-6 text-muted">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="section bg-page">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-bold text-ink text-center mb-8">Specs They Trust. Loads That Don't Fail.</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                quote: 'Before PDX Pallets, we were constantly chasing ISPM-15 documentation from different suppliers. Now we have one source, one certificate, zero customs problems.',
                name: 'Kevin O.',
                title: 'Export Operations Manager, Columbia River Trading Co.',
              },
              {
                quote: 'Every pallet arrives to spec. No surprises in the middle of a loading shift. The consistency is what matters in a high-volume warehouse.',
                name: 'Anita M.',
                title: 'Logistics Supervisor, Pacific Northwest Foods',
              },
            ].map((t) => (
              <figure key={t.name} className="rounded-2xl border border-edge bg-card p-6">
                <div className="text-kraft text-sm font-bold mb-3">★★★★★</div>
                <blockquote className="text-sm text-muted leading-relaxed mb-4">"{t.quote}"</blockquote>
                <figcaption className="text-sm font-semibold text-ink">
                  — {t.name} <span className="font-normal text-dim">{t.title}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-subtle">
        <div className="container max-w-2xl">
          <h2 className="text-2xl font-bold text-ink mb-8 text-center">New Pallet FAQ</h2>
          <div className="space-y-4">
            {[
              { q: 'Are all new pallets heat-treated?', a: 'Yes. Every new pallet we stock is heat-treated (HT) and bears the IPPC stamp required for ISPM-15 compliance.' },
              { q: 'What is your minimum order?', a: 'Minimum order is 25 units for standard sizes. Custom orders minimum is 50 units.' },
              { q: 'What\'s your production lead time for custom dimensions?', a: 'Standard custom orders produce in 5–7 business days from order confirmation.' },
              { q: 'Do you carry stringer and block pallets?', a: 'We stock both. Stringer (3-runner) pallets are standard inventory. Block pallets (4-way entry) are available by order.' },
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
          <h2 className="text-2xl font-bold mb-3">Ready to order?</h2>
          <p className="text-white/80 mb-6">Request a bulk quote — pricing in your inbox within the hour.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/quote" className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-6 font-semibold text-brand hover:bg-white/90 transition-colors">
              Request a Bulk Quote →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
