import type { Metadata } from 'next';
import Link from 'next/link';
import { Package, Truck, DollarSign, MapPin, CheckCircle2 } from 'lucide-react';
import { SITE_URL } from '@/constants';

export const metadata: Metadata = {
  title: 'Portland Pallets. On Time, Every Time.',
  description:
    'We keep Portland\'s supply chains moving — new and used pallets, delivered fast and priced fairly. 200+ local businesses trust PDX Pallet Supply.',
  alternates: { canonical: SITE_URL },
};

// ─── STATIC DATA ─────────────────────────────────────────────────
const FEATURES = [
  {
    icon: Package,
    title: 'Inventory You Can Count On — Not Guess At',
    body: 'Deep stock of the sizes your operation actually uses: 48×40, 42×42, 36×36, and custom dimensions. Grade A, B, and C available daily. No back-order surprises. When you place an order at 8am, it\'s on a truck before noon.',
    cta: 'Check Availability',
    href: '/products/used-pallets',
  },
  {
    icon: Truck,
    title: 'Delivered to Your Dock — Not Dropped at the Curb',
    body: 'Our drivers know Portland\'s industrial corridors. We deliver to your dock, not the nearest curb. Every delivery includes a condition check and count confirmation before we leave. If it\'s not right, we fix it on the spot.',
    cta: 'See Delivery Coverage',
    href: '/services/delivery',
  },
  {
    icon: DollarSign,
    title: 'Volume Pricing That Respects Your Budget',
    body: 'Buying 50 pallets or 5,000? Our tiered pricing rewards volume without punishing smaller orders. Used Grade A pallets from $9.50/unit. New heat-treated from $14.00. Pricing in your inbox within the hour.',
    cta: 'Get Pricing',
    href: '/quote',
  },
];

const STATS = [
  { value: '500K+', label: 'Pallets supplied annually' },
  { value: '200+',  label: 'Active Portland-area clients' },
  { value: '20+',   label: 'Years in the PDX market' },
  { value: '98.4%', label: 'On-time delivery rate' },
];

const TESTIMONIALS = [
  {
    quote: 'We went through three pallet suppliers in two years. PDX Pallets was the first one that treated our timeline like it was their timeline. We haven\'t looked elsewhere since.',
    name: 'Marcus T.',
    title: 'Supply Chain Manager',
    company: 'Cascade Cold Storage, Portland OR',
  },
  {
    quote: 'I needed 300 Grade A used pallets for a client order with 4 days\' notice. They had them staged, counted, and delivered in 36 hours. That kind of execution keeps my business running.',
    name: 'Sandra K.',
    title: 'Operations Director',
    company: 'Pacific Rim Logistics, Gresham OR',
  },
  {
    quote: 'The pricing is fair, the pallets are consistently graded, and they always pick up the phone. That\'s rarer than it sounds in this industry.',
    name: 'David R.',
    title: 'Warehouse Manager',
    company: 'Willamette Valley Distributors',
  },
];

const FAQ_PREVIEW = [
  {
    q: 'Do you have pallets in stock right now?',
    a: 'Yes. We maintain standing inventory of the most common sizes and grades year-round. Grade A 48×40 used pallets are almost always available same-day.',
  },
  {
    q: 'What\'s the minimum order?',
    a: 'Our minimum is 10 pallets. Most clients order in lots of 50–500. We don\'t have a maximum — call us for large-volume requirements.',
  },
  {
    q: 'How quickly can you deliver?',
    a: 'Same-week delivery is standard across the PDX metro. Many orders ship next-day. Call us directly for urgent requests.',
  },
];

const PRODUCT_CATEGORIES = [
  {
    tag: 'Most Popular',
    title: 'Used Pallets',
    desc: 'Grade A, B & C — inspected daily. Starting at $9.50/unit.',
    href: '/products/used-pallets',
    accent: 'bg-kraft-pale border-kraft-mid',
    badge: 'bg-kraft text-white',
  },
  {
    tag: 'ISPM-15 Certified',
    title: 'New Pallets',
    desc: 'Heat-treated, export-ready. Built to spec. From $14.00/unit.',
    href: '/products/new-pallets',
    accent: 'bg-brand-pale border-brand-mid',
    badge: 'bg-brand text-white',
  },
];

// ─── PAGE ─────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <FeaturesSection />
      <StatsSection />
      <ProductCategoriesSection />
      <TestimonialsSection />
      <FAQPreview />
      <CTABanner />

      {/* LocalBusiness JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'PDX Pallet Supply',
            description: 'New and used pallet supplier serving Portland, OR and the PDX metro area',
            url: SITE_URL,
            email: 'orders@pdxpallets.com',
            openingHours: 'Mo-Fr 07:00-17:00',
            priceRange: '$$',
            areaServed: ['Portland OR', 'Beaverton OR', 'Gresham OR', 'Hillsboro OR', 'Vancouver WA'],
          }),
        }}
      />
    </>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand to-brand-light text-white">
      {/* Decorative triangles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='84'%3E%3Cpolygon points='24,0 48,42 0,42' fill='none' stroke='white' stroke-width='1'/%3E%3Cpolygon points='0,42 48,42 24,84' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="container relative py-24 md:py-32 lg:py-40">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white">
            <MapPin className="w-4 h-4" aria-hidden="true" /> Portland, OR · Serving the PDX Metro Since 2003
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl lg:tracking-tighter mb-6">
            Portland Pallets.{' '}
            <span className="text-kraft-mid">On Time,</span>{' '}
            Every Time.
          </h1>

          <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-lg">
            We keep Portland's supply chains moving — new and used pallets, delivered fast and priced fairly. 200+ local businesses trust us for consistent stock and same-week delivery.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/quote"
              className="inline-flex h-12 items-center rounded-xl bg-white px-6 font-semibold text-brand hover:bg-white/90 transition-colors shadow-lg"
            >
              Get a Free Quote →
            </Link>
            <Link
              href="/products/used-pallets"
              className="inline-flex h-12 items-center rounded-xl border border-white/30 bg-white/10 px-6 font-semibold text-white hover:bg-white/20 transition-colors"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}

// ─── TRUST BAR ────────────────────────────────────────────────────
function TrustBar() {
  return (
    <div className="bg-subtle border-b border-edge overflow-hidden">
      <div className="container py-3">
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-1">
          <li className="flex items-center gap-1.5 text-sm font-medium text-muted whitespace-nowrap">
            <MapPin className="w-3.5 h-3.5 shrink-0" aria-hidden="true" /> Portland-Based
          </li>
          <li className="flex items-center gap-1.5 text-sm font-medium text-muted whitespace-nowrap">
            <CheckCircle2 className="w-3.5 h-3.5 shrink-0" aria-hidden="true" /> ISPM-15 Certified
          </li>
          <li className="flex items-center gap-1.5 text-sm font-medium text-muted whitespace-nowrap">
            <Truck className="w-3.5 h-3.5 shrink-0" aria-hidden="true" /> Same-Week Delivery
          </li>
          <li className="text-sm font-medium text-muted whitespace-nowrap">20+ Years in Business</li>
          <li className="text-sm font-medium text-muted whitespace-nowrap">★★★★★ Rated</li>
        </ul>
      </div>
    </div>
  );
}

// ─── FEATURES ─────────────────────────────────────────────────────
function FeaturesSection() {
  return (
    <section className="section bg-page" aria-labelledby="features-heading">
      <div className="container">
        <div className="text-center mb-12">
          <h2 id="features-heading" className="text-3xl font-bold tracking-tight md:text-4xl mb-4 text-ink">
            Why Portland's Best Operations Run on PDX Pallets
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            From corner warehouses in NW Portland to distribution centers across the metro — our clients stopped worrying about pallets.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-edge bg-card p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <f.icon className="w-8 h-8 mb-4" aria-hidden="true" />
              <h3 className="text-lg font-bold text-ink mb-3 leading-snug">{f.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-6">{f.body}</p>
              <Link
                href={f.href}
                className="text-sm font-semibold text-brand hover:underline"
              >
                {f.cta} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── STATS ────────────────────────────────────────────────────────
function StatsSection() {
  return (
    <section className="bg-brand text-white py-16" aria-label="Company statistics">
      <div className="container">
        <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map(({ value, label }) => (
            <div key={label} className="text-center">
              <dt className="text-3xl font-bold md:text-4xl mb-1">{value}</dt>
              <dd className="text-sm text-white/75">{label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

// ─── PRODUCT CATEGORIES ───────────────────────────────────────────
function ProductCategoriesSection() {
  return (
    <section className="section bg-page" aria-labelledby="products-heading">
      <div className="container">
        <div className="text-center mb-10">
          <h2 id="products-heading" className="text-3xl font-bold tracking-tight md:text-4xl text-ink mb-3">
            New and Used — We Stock Both
          </h2>
          <p className="text-muted text-lg">
            Choose the grade and type that matches your application and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 max-w-3xl mx-auto">
          {PRODUCT_CATEGORIES.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className={`group rounded-2xl border p-8 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${cat.accent}`}
            >
              <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold mb-4 ${cat.badge}`}>
                {cat.tag}
              </span>
              <h3 className="text-xl font-bold text-ink mb-2">{cat.title}</h3>
              <p className="text-muted text-sm mb-4">{cat.desc}</p>
              <span className="text-sm font-semibold text-brand group-hover:underline">
                Browse {cat.title} →
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/services/custom-orders"
            className="inline-flex items-center text-sm font-medium text-muted hover:text-ink transition-colors"
          >
            Need non-standard dimensions? → Custom Orders
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── TESTIMONIALS ─────────────────────────────────────────────────
function TestimonialsSection() {
  return (
    <section className="section bg-subtle" aria-labelledby="testimonials-heading">
      <div className="container">
        <div className="text-center mb-12">
          <h2 id="testimonials-heading" className="text-3xl font-bold tracking-tight md:text-4xl text-ink mb-3">
            Portland Businesses Don't Shop Around Anymore
          </h2>
          <p className="text-muted text-lg">
            Once you've had a reliable pallet supplier, you forget what the headaches felt like.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-edge bg-card p-8 flex flex-col"
            >
              <div className="text-kraft text-sm font-bold mb-4" aria-hidden="true">★★★★★</div>
              <blockquote className="text-sm text-muted leading-relaxed flex-1 mb-6">
                "{t.quote}"
              </blockquote>
              <figcaption>
                <p className="font-semibold text-ink text-sm">{t.name}</p>
                <p className="text-xs text-dim">{t.title}</p>
                <p className="text-xs text-dim">{t.company}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ PREVIEW ──────────────────────────────────────────────────
function FAQPreview() {
  return (
    <section className="section bg-page" aria-labelledby="faq-preview-heading">
      <div className="container max-w-3xl">
        <div className="text-center mb-10">
          <h2 id="faq-preview-heading" className="text-3xl font-bold tracking-tight text-ink mb-3">
            Common Questions. Straight Answers.
          </h2>
        </div>

        <div className="space-y-4">
          {FAQ_PREVIEW.map(({ q, a }) => (
            <div key={q} className="rounded-xl border border-edge bg-card p-6">
              <h3 className="font-semibold text-ink mb-2">{q}</h3>
              <p className="text-sm text-muted leading-relaxed">{a}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/faq"
            className="text-sm font-semibold text-brand hover:underline"
          >
            See All FAQs →
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── CTA BANNER ───────────────────────────────────────────────────
function CTABanner() {
  return (
    <section className="bg-gradient-to-br from-brand-dark to-brand py-20 text-white">
      <div className="container text-center max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
          Your next order is one conversation away.
        </h2>
        <p className="text-white/80 text-lg mb-8">
          No commitments. No sales pressure. Just accurate pricing, honest availability, and a supplier that shows up. Every time.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/quote"
            className="inline-flex h-12 items-center justify-center rounded-xl bg-white px-7 font-semibold text-brand hover:bg-white/90 transition-colors shadow-lg"
          >
            Get a Free Quote →
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-xl border border-white/30 bg-white/10 px-7 font-semibold text-white hover:bg-white/20 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
