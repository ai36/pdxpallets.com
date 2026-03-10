import type { Metadata } from 'next';
import Link from 'next/link';
import { DollarSign, Search, Recycle, Package, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Used Pallets Portland OR | Grade A, B & C | PDX Pallet Supply',
  description:
    'Buy used pallets in Portland, OR. Grade A, B & C available. 48×40, 42×42 and more. ISPM-15 sourced. Delivery & pickup available. Cut pallet costs 30–40%. Free quote.',
  alternates: { canonical: 'https://pdxpallets.com/products/used-pallets' },
};

const GRADES = [
  {
    grade: 'A',
    price: '$9.50+',
    color: 'border-ok bg-ok-pale',
    badge: 'bg-ok text-white',
    items: ['No broken boards', 'All stringers intact', 'Uniform appearance', 'Export & food-adjacent use', 'ISPM-15 sourced'],
  },
  {
    grade: 'B',
    price: '$6.00+',
    color: 'border-warn bg-warn-pale',
    badge: 'bg-warn text-ink',
    items: ['Minor cosmetic damage', 'Full structural integrity', 'Ideal for warehousing', 'Cost-effective option'],
  },
  {
    grade: 'C',
    price: '$3.50+',
    color: 'border-edge bg-subtle',
    badge: 'bg-muted text-white',
    items: ['Functional, heavy wear', 'Repaired sections', 'Internal movement', 'Maximum cost savings'],
  },
];

export default function UsedPalletsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-kraft-dark via-kraft to-brand-dark text-white py-20 md:py-28">
        <div className="container max-w-3xl">
          <p className="mb-3 text-sm font-medium text-kraft-mid">
            Grade A · Grade B · Grade C · Inspected & Sorted Daily
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">
            Grade A Used Pallets. Portland Prices.
          </h1>
          <p className="text-white/80 text-lg mb-8 max-w-xl">
            Inspected, sorted, and priced by grade — the most cost-effective pallet supply in the Portland metro.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/quote" className="inline-flex h-11 items-center rounded-xl bg-white px-6 font-semibold text-brand hover:bg-white/90 transition-colors">
              Check Today's Availability →
            </Link>
            <a href="#grades" className="inline-flex h-11 items-center rounded-xl border border-white/30 bg-white/10 px-6 font-semibold text-white hover:bg-white/20 transition-colors">
              Learn the Grade System
            </a>
          </div>
        </div>
      </section>

      {/* Savings banner */}
      <div className="bg-kraft-pale border-b border-kraft-mid py-4">
        <div className="container text-center">
          <p className="flex items-center justify-center gap-2 text-sm font-semibold text-kraft-dark">
            <DollarSign className="w-4 h-4 shrink-0" aria-hidden="true" /> Cut your pallet cost by <strong>30–40%</strong> vs. new — without sacrificing function
          </p>
        </div>
      </div>

      {/* Grade breakdown */}
      <section id="grades" className="section bg-page" aria-labelledby="grades-h2">
        <div className="container">
          <div className="text-center mb-10">
            <h2 id="grades-h2" className="text-3xl font-bold text-ink tracking-tight mb-3">
              Graded Honestly. Priced Competitively.
            </h2>
            <p className="text-muted text-lg max-w-xl mx-auto">
              Every pallet is physically inspected and assigned a grade by trained crew — not sorted by eye from a loader.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {GRADES.map(({ grade, price, color, badge, items }) => (
              <div key={grade} className={`rounded-2xl border-2 p-8 ${color}`}>
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-bold ${badge}`}>
                    Grade {grade}
                  </span>
                  <span className="font-bold text-ink text-lg">{price}<span className="text-sm font-normal text-muted">/unit</span></span>
                </div>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink">
                      <Check className="w-4 h-4 text-ok mt-0.5 shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/quote"
                  className="mt-6 block w-full text-center rounded-lg border border-edge bg-white/60 py-2.5 text-sm font-semibold text-ink hover:bg-white transition-colors"
                >
                  Get Grade {grade} Quote →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section bg-subtle">
        <div className="container">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { icon: Search, title: 'Every Pallet Inspected', body: 'What you order — Grade A, B, or C — is exactly what arrives. No mixed loads. No downgrades discovered at your dock.' },
              { icon: Recycle, title: 'Sustainable Choice', body: 'Our reclaimed pallet program diverts thousands of pallets per month from waste streams. A direct, measurable sustainability improvement.' },
              { icon: Package, title: 'Most Common Sizes Always In Stock', body: '48×40 GMA dominates our inventory — always available. We also typically carry 42×42, 48×48, and specialty sizes.' },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border border-edge bg-card p-8">
                <f.icon className="w-8 h-8 mb-3" aria-hidden="true" />
                <h3 className="font-bold text-ink mb-2">{f.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="section bg-page">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-bold text-ink text-center mb-8">Half the Cost. Same Operational Result.</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              { quote: 'We switched from new to Grade A used two years ago and saved over $18,000 annually on pallet spend. The pallets are indistinguishable in function.', name: 'Robert F.', title: 'Procurement Manager, Metro Industrial Supply' },
              { quote: 'Their grade system is reliable. I\'ve ordered Grade B pallets three times and they\'ve always arrived consistent with what I expected. No unpleasant surprises.', name: 'Tricia N.', title: 'Warehouse Supervisor, Beaverton Cold Chain Partners' },
            ].map((t) => (
              <figure key={t.name} className="rounded-2xl border border-edge bg-card p-6">
                <div className="text-kraft text-sm font-bold mb-3">★★★★★</div>
                <blockquote className="text-sm text-muted leading-relaxed mb-4">"{t.quote}"</blockquote>
                <figcaption className="text-sm font-semibold text-ink">— {t.name} <span className="font-normal text-dim">{t.title}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-subtle">
        <div className="container max-w-2xl">
          <h2 className="text-2xl font-bold text-ink mb-8 text-center">Used Pallet FAQ</h2>
          <div className="space-y-4">
            {[
              { q: 'How do you define Grade A, B, and C?', a: 'Grade A: No broken boards, intact stringers, uniform appearance. Grade B: Minor cosmetic damage, full structural integrity. Grade C: Functional, heavier wear — best for internal movement.' },
              { q: 'Are used pallets safe for food applications?', a: 'Grade A pallets from known supply chains can be suitable. We can provide sourcing documentation on request. For regulated environments, we recommend new heat-treated inventory.' },
              { q: 'Can I mix grades in one order?', a: 'Yes. Many clients order a primary grade with a lower-grade supplement for internal movement. Specify in your quote request and we\'ll stage them separately.' },
              { q: 'What if I receive pallets that don\'t match my order?', a: 'Call us the same day. We send a replacement load or issue a credit — whichever resolves your operation fastest.' },
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
          <h2 className="text-2xl font-bold mb-3">Check today's availability</h2>
          <p className="text-white/80 mb-6">Stock changes daily. Request a quote and we'll confirm what's on the yard.</p>
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
