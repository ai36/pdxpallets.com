import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Clock, Truck, ClipboardList, DollarSign } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pallet Pickup Portland OR | Will-Call & Surplus Buyback | PDX Pallet Supply',
  description:
    'Pick up pallets at our Portland yard or schedule a surplus buyback. Will-call ready in 2 hours. We buy back used pallets — turn your surplus into cash. Free quote.',
  alternates: { canonical: 'https://pdxpallets.com/services/pickup' },
};

const PICKUP_STEPS = [
  { step: '01', title: 'Call or request online', body: 'Tell us what you need — grade, size, quantity. We confirm availability and hold your order for up to 24 hours.' },
  { step: '02', title: 'Receive your ready-for-pickup confirmation', body: 'We\'ll text or email when your order is staged. Standard ready time is 2 hours from confirmation.' },
  { step: '03', title: 'Pull into our yard', body: 'Drive straight to the loading bay. Our crew loads your truck — no waiting around the yard trying to count pallets yourself.' },
  { step: '04', title: 'Pay and go', body: 'We accept credit cards, ACH, and net-30 for account holders. In and out in under 15 minutes for most orders.' },
];

const BUYBACK_GRADES = [
  { grade: 'Grade A / Undamaged 48×40', rate: 'Up to $7.00/unit', note: 'Clean GMA pallets in like-new condition' },
  { grade: 'Mixed / Grade B', rate: 'Up to $3.50/unit', note: 'Minor damage, full structure' },
  { grade: 'Broken / Grade C', rate: 'Up to $1.00/unit', note: 'Reclaimable material, qty-dependent' },
  { grade: 'Large pallet lots (500+)', rate: 'Custom pricing', note: 'Call for same-day assessment' },
];

export default function PickupPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-kraft-dark via-kraft to-brand text-white py-20 md:py-28">
        <div className="container max-w-3xl">
          <p className="mb-3 text-sm font-medium text-kraft-mid">
            Will-Call Ready in 2 Hours · Pallet Buyback · Account Pickup Lanes
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">
            Pick Up On Your Schedule. Sell Your Surplus.
          </h1>
          <p className="text-white/80 text-lg mb-8 max-w-xl">
            Will-call from our Portland yard in as little as 2 hours. Or let us buy back your surplus pallets — we'll turn them into cash on the spot.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/quote" className="inline-flex h-11 items-center rounded-xl bg-white px-6 font-semibold text-brand hover:bg-white/90 transition-colors">
              Reserve a Pickup Order →
            </Link>
          </div>
        </div>
      </section>

      {/* Location strip */}
      <div className="bg-kraft-pale border-b border-kraft-mid py-5">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-kraft-dark">
            <span className="flex items-center gap-2 font-medium">
              <MapPin className="w-4 h-4 shrink-0" aria-hidden="true" /> Portland, OR
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 shrink-0" aria-hidden="true" /> Mon–Fri 7 AM – 5 PM · Sat 8 AM – 12 PM
            </span>
            <span className="flex items-center gap-2">
              <Truck className="w-4 h-4 shrink-0" aria-hidden="true" /> Forklift loading included
            </span>
          </div>
        </div>
      </div>

      {/* Will-call process */}
      <section className="section bg-page" aria-labelledby="willcall-h2">
        <div className="container max-w-3xl">
          <div className="text-center mb-10">
            <h2 id="willcall-h2" className="text-3xl font-bold text-ink tracking-tight mb-3">
              Will-Call Pickup in 4 Steps
            </h2>
            <p className="text-muted text-lg max-w-xl mx-auto">
              Reserve your pallets online or by phone. We stage them. You drive in and out — no hunting the yard.
            </p>
          </div>
          <ol className="relative border-l-2 border-brand-pale space-y-8 pl-8">
            {PICKUP_STEPS.map(({ step, title, body }) => (
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

      {/* Buyback section */}
      <section className="section bg-subtle" aria-labelledby="buyback-h2">
        <div className="container max-w-4xl">
          <div className="text-center mb-10">
            <h2 id="buyback-h2" className="text-3xl font-bold text-ink tracking-tight mb-3">
              Sell Your Surplus Pallets
            </h2>
            <p className="text-muted text-lg max-w-xl mx-auto">
              Don't let used pallets pile up. We buy back Grade A, B, and C pallets — and we pick them up or you drop them off.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-edge mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-card border-b border-edge">
                  <th className="text-left px-5 py-3 font-semibold text-ink">Pallet Type</th>
                  <th className="text-left px-5 py-3 font-semibold text-ink">Buyback Rate</th>
                  <th className="text-left px-5 py-3 font-semibold text-ink">Notes</th>
                </tr>
              </thead>
              <tbody>
                {BUYBACK_GRADES.map((r, i) => (
                  <tr key={r.grade} className={i % 2 === 0 ? 'bg-subtle' : 'bg-card'}>
                    <td className="px-5 py-3 font-medium text-ink">{r.grade}</td>
                    <td className="px-5 py-3 font-bold text-brand">{r.rate}</td>
                    <td className="px-5 py-3 text-muted">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {[
              { icon: ClipboardList, title: 'Free Assessment', body: 'Send us photos or bring a sample load. We quote your lot within 2 hours.' },
              { icon: DollarSign, title: 'Same-Day Payment', body: 'ACH, check, or credit — your choice. No net-30 run-around on buyback transactions.' },
              { icon: Truck, title: 'We Pick Up Large Lots', body: 'Lots of 200+ pallets? We send a truck to you. No transport cost on your end.' },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border border-edge bg-card p-6">
                <f.icon className="w-8 h-8 mb-3" aria-hidden="true" />
                <h3 className="font-bold text-ink mb-2">{f.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Account holders */}
      <section className="section bg-page">
        <div className="container max-w-3xl">
          <div className="rounded-2xl bg-brand-pale border border-brand-mid/30 p-8 md:p-10">
            <h2 className="text-2xl font-bold text-ink mb-3">Account Holders Get Priority Pickup Lanes</h2>
            <p className="text-muted mb-6">
              Open a net-30 account and skip the will-call queue. Dedicated pickup lane, guaranteed staging within 1 hour, and a private yard contact for time-sensitive orders.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/quote" className="inline-flex h-11 items-center rounded-xl bg-brand px-5 text-sm font-semibold text-white hover:bg-brand-dark transition-colors">
                Open an Account →
              </Link>
              <Link href="/contact" className="inline-flex h-11 items-center gap-2 rounded-xl border border-edge bg-white px-5 text-sm font-semibold text-ink hover:bg-subtle transition-colors">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-subtle">
        <div className="container max-w-2xl">
          <h2 className="text-2xl font-bold text-ink mb-8 text-center">Pickup &amp; Buyback FAQ</h2>
          <div className="space-y-4">
            {[
              { q: 'How quickly can I pick up after ordering?', a: 'Standard will-call orders are staged within 2 hours. For urgent same-day needs, call us directly — we often stage within 45 minutes for in-stock items.' },
              { q: 'Do I need a forklift or pallet jack at pickup?', a: 'No. Our yard crew loads your truck with our forklifts. You just need to be in a vehicle with a flat floor or deckover trailer.' },
              { q: 'How do I start a pallet buyback?', a: 'Send photos of your surplus to our email or call us. We\'ll assess grade and quantity, give you a firm quote, and schedule pickup or drop-off.' },
              { q: 'Is there a minimum quantity for buyback?', a: 'We\'ll take as few as 20 pallets. For lots under 50, drop-off at our yard is required. We dispatch pickup trucks for lots of 200+.' },
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
          <h2 className="text-2xl font-bold mb-3">Reserve your pallets or get a buyback quote</h2>
          <p className="text-white/80 mb-6">Will-call ready in 2 hours. Buyback quotes within the hour.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/quote" className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-6 font-semibold text-brand hover:bg-white/90 transition-colors">
              Get a Quote →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
