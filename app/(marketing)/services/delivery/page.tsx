import type { Metadata } from 'next';
import Link from 'next/link';
import { Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pallet Delivery Portland OR | Same-Day & Scheduled | PDX Pallet Supply',
  description:
    'Pallet delivery across the Portland metro. Same-day available, scheduled routes, liftgate service. 48×40 GMA and all standard sizes. No minimum on delivery orders.',
  alternates: { canonical: 'https://pdxpallets.com/services/delivery' },
};

const ZONES = [
  { zone: 'Zone 1', area: 'Portland Metro Core', radius: '0–15 mi', eta: 'Same day', fee: 'From $45' },
  { zone: 'Zone 2', area: 'East Metro / Gresham / Troutdale', radius: '15–30 mi', eta: '1 business day', fee: 'From $75' },
  { zone: 'Zone 3', area: 'Hillsboro / Beaverton / Tualatin', radius: '15–25 mi', eta: 'Same / next day', fee: 'From $75' },
  { zone: 'Zone 4', area: 'Salem / Longview / Vancouver', radius: '30–60 mi', eta: '1–2 business days', fee: 'From $120' },
];

const FLEET = [
  { label: 'Flatbed trucks', detail: '24 ft · up to 400 pallets' },
  { label: 'Straight trucks', detail: '16 ft · up to 120 pallets' },
  { label: 'Liftgate units', detail: 'Ground-level unloading, no dock required' },
  { label: 'Box trucks', detail: 'Protected delivery for heat-treated / export pallets' },
];

export default function DeliveryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-dark via-brand to-brand-light text-white py-20 md:py-28">
        <div className="container max-w-3xl">
          <p className="mb-3 text-sm font-medium text-white/80">
            Same-Day Available · Scheduled Routes · Liftgate Service
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">
            Portland Pallet Delivery. On Time, Every Time.
          </h1>
          <p className="text-white/80 text-lg mb-8 max-w-xl">
            We deliver to any Portland metro address — docks, no-dock sites, and tight urban warehouses. Liftgate at no extra charge.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/quote" className="inline-flex h-11 items-center rounded-xl bg-white px-6 font-semibold text-brand hover:bg-white/90 transition-colors">
              Schedule a Delivery →
            </Link>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <div className="bg-brand-pale border-b border-brand-mid/40 py-4">
        <div className="container">
          <dl className="flex flex-wrap justify-center gap-8 text-center">
            {[
              { dt: 'On-time rate', dd: '98.4%' },
              { dt: 'Same-day cutoff', dd: '10 AM' },
              { dt: 'Metro zip codes served', dd: '140+' },
              { dt: 'Min. order for delivery', dd: 'None' },
            ].map(({ dt, dd }) => (
              <div key={dt}>
                <dd className="text-2xl font-bold text-brand">{dd}</dd>
                <dt className="text-xs text-muted mt-0.5">{dt}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Delivery zones */}
      <section className="section bg-page" aria-labelledby="zones-h2">
        <div className="container max-w-4xl">
          <div className="text-center mb-10">
            <h2 id="zones-h2" className="text-3xl font-bold text-ink tracking-tight mb-3">
              Delivery Zones &amp; ETAs
            </h2>
            <p className="text-muted text-lg max-w-xl mx-auto">
              We cover the full Portland metro. Same-day orders must be placed before 10 AM.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-edge">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-subtle border-b border-edge">
                  <th className="text-left px-5 py-3 font-semibold text-ink">Zone</th>
                  <th className="text-left px-5 py-3 font-semibold text-ink">Coverage Area</th>
                  <th className="text-left px-5 py-3 font-semibold text-ink">From PDX</th>
                  <th className="text-left px-5 py-3 font-semibold text-ink">ETA</th>
                  <th className="text-left px-5 py-3 font-semibold text-ink">Base Fee</th>
                </tr>
              </thead>
              <tbody>
                {ZONES.map((z, i) => (
                  <tr key={z.zone} className={i % 2 === 0 ? 'bg-card' : 'bg-subtle'}>
                    <td className="px-5 py-3 font-semibold text-brand">{z.zone}</td>
                    <td className="px-5 py-3 text-ink">{z.area}</td>
                    <td className="px-5 py-3 text-muted">{z.radius}</td>
                    <td className="px-5 py-3 text-ink">{z.eta}</td>
                    <td className="px-5 py-3 font-semibold text-ink">{z.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-dim mt-3 text-center">
            Fees vary by volume and frequency. Volume accounts receive negotiated flat rates. <Link href="/quote" className="text-brand hover:underline">Get a custom quote.</Link>
          </p>
        </div>
      </section>

      {/* Fleet */}
      <section className="section bg-subtle" aria-labelledby="fleet-h2">
        <div className="container max-w-4xl">
          <div className="text-center mb-10">
            <h2 id="fleet-h2" className="text-3xl font-bold text-ink tracking-tight mb-3">
              Right Truck for Every Site
            </h2>
            <p className="text-muted text-lg max-w-xl mx-auto">
              Dock, no-dock, street delivery — our fleet covers every situation without special surcharges.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {FLEET.map((f) => (
              <div key={f.label} className="flex items-start gap-4 rounded-xl border border-edge bg-card p-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-pale text-brand">
                  <Check className="w-4 h-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold text-ink">{f.label}</p>
                  <p className="text-sm text-muted mt-0.5">{f.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section bg-page" aria-labelledby="how-h2">
        <div className="container max-w-3xl">
          <h2 id="how-h2" className="text-3xl font-bold text-ink tracking-tight text-center mb-10">
            How Delivery Works
          </h2>
          <ol className="relative border-l-2 border-brand-pale space-y-8 pl-8">
            {[
              { step: '01', title: 'Request a quote online or by phone', body: 'Tell us your pallet type, quantity, grade, and delivery address. We confirm availability and pricing within the hour.' },
              { step: '02', title: 'We confirm and stage your order', body: 'Your pallets are pulled, inspected, and staged for your delivery window. No last-minute substitutions.' },
              { step: '03', title: 'Driver calls 30 min before arrival', body: 'You\'ll get a call before we show up — no waiting at the dock wondering when the truck will arrive.' },
              { step: '04', title: 'Delivery and sign-off', body: 'Count the load, sign the bill of lading. If anything doesn\'t match your order, we fix it on the spot or dispatch a correction same day.' },
            ].map(({ step, title, body }) => (
              <li key={step} className="relative">
                <span className="absolute -left-[2.35rem] flex h-8 w-8 items-center justify-center rounded-full bg-brand text-white text-xs font-bold">
                  {step}
                </span>
                <h3 className="font-semibold text-ink mb-1">{title}</h3>
                <p className="text-sm text-muted leading-relaxed">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-subtle">
        <div className="container max-w-2xl">
          <h2 className="text-2xl font-bold text-ink mb-8 text-center">Delivery FAQ</h2>
          <div className="space-y-4">
            {[
              { q: 'Do you charge extra for liftgate service?', a: 'No. Liftgate service is included in all delivery fees. Just mention it when you request a quote and we\'ll dispatch an appropriate truck.' },
              { q: 'What\'s the cutoff for same-day delivery?', a: '10 AM for Zone 1 (core Portland metro). We\'ll do our best on last-minute Zone 1 requests — call us directly.' },
              { q: 'Do you deliver on weekends?', a: 'Saturday delivery is available by arrangement for high-volume accounts. Standard schedule is Monday–Friday.' },
              { q: 'What if my order is short or includes the wrong grade?', a: 'Call us at delivery or same day. We\'ll send a correction load or credit your account — whichever is faster for your operation.' },
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
          <h2 className="text-2xl font-bold mb-3">Ready to schedule delivery?</h2>
          <p className="text-white/80 mb-6">Same-day available before 10 AM. Request a quote and we'll confirm your window.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/quote" className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-6 font-semibold text-brand hover:bg-white/90 transition-colors">
              Schedule Delivery →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
