import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pallet FAQ | PDX Pallet Supply Portland OR',
  description:
    'Answers to common questions about buying pallets in Portland: grades, sizes, delivery, heat treatment, ISPM-15, pricing, and ordering. PDX Pallet Supply FAQ.',
  alternates: { canonical: 'https://pdxpallets.com/faq' },
};

const FAQ_SECTIONS = [
  {
    section: 'Grades & Quality',
    items: [
      {
        q: 'What is the difference between Grade A, B, and C pallets?',
        a: 'Grade A pallets have no broken boards, intact stringers, and uniform appearance — suitable for export and food-adjacent use. Grade B pallets have minor cosmetic damage but full structural integrity, ideal for warehousing. Grade C pallets are functional with heavy wear and repaired sections, best for internal movement.',
      },
      {
        q: 'How do you grade pallets — is it subjective?',
        a: 'We use a documented grading rubric with specific pass/fail criteria per board and stringer. Every pallet is physically handled by a trained crew member. The grade criteria are available on request.',
      },
      {
        q: 'Can I inspect pallets before buying?',
        a: 'Yes. Will-call customers are welcome to inspect staged inventory before loading. For large custom orders, we can send a photo audit prior to delivery.',
      },
      {
        q: 'What if the grade doesn\'t match when my order arrives?',
        a: 'Call us the same day. We dispatch a correction load or issue a credit — whichever resolves your operation faster. We track these incidents internally and address the root cause.',
      },
    ],
  },
  {
    section: 'Sizes & Types',
    items: [
      {
        q: 'What pallet sizes do you stock?',
        a: '48×40 GMA is our primary inventory and is always available. We typically carry 42×42 and 48×48 as well. Specialty and non-standard sizes are available through custom orders with a 50-unit minimum.',
      },
      {
        q: 'Do you sell heat-treated (HT) and ISPM-15 pallets?',
        a: 'Yes. We supply ISPM-15 certified heat-treated pallets for export shipments. Full certification documentation is included. Lead time is typically 3–5 business days for treatment.',
      },
      {
        q: 'Do you carry plastic pallets?',
        a: 'Not in standard inventory, but we source them through our supplier network. Contact us with your spec and quantity and we\'ll provide a quote.',
      },
      {
        q: 'What\'s the difference between a 2-way and 4-way pallet?',
        a: 'A 2-way pallet can only be entered by a forklift from two sides. A 4-way pallet (notched or full 4-way) allows forklift entry from all four sides — generally more versatile. Most GMA 48×40 pallets are 4-way.',
      },
    ],
  },
  {
    section: 'Pricing & Orders',
    items: [
      {
        q: 'How is pricing determined?',
        a: 'Pricing depends on pallet type (new vs. used), grade, size, and quantity. Volume discounts apply at 100, 500, and 1,000 units/month. We publish starting prices on our product pages; final pricing is confirmed at quote.',
      },
      {
        q: 'Can I mix grades in one order?',
        a: 'Yes. Many customers order a primary grade supplemented with a lower grade for internal movement. Specify your split in the quote request and we stage them separately so there\'s no confusion at the dock.',
      },
      {
        q: 'Do you offer net-30 payment terms?',
        a: 'Yes, for qualified accounts. Applications take about 5 minutes and are typically approved within 1 business day. Available for accounts at 100+ units/month.',
      },
      {
        q: 'Is there a minimum order?',
        a: 'No minimum for standard in-stock products. Custom orders have a 50-unit minimum. Delivery orders have no minimum but delivery fees apply.',
      },
    ],
  },
  {
    section: 'Delivery & Pickup',
    items: [
      {
        q: 'What areas do you deliver to?',
        a: 'We deliver to 140+ zip codes in the Portland metro, including East Metro/Gresham, Hillsboro/Beaverton/Tualatin, and can reach Salem and Longview/Vancouver. See our Delivery page for zone details.',
      },
      {
        q: 'Do you offer same-day delivery?',
        a: 'Yes, for Zone 1 (core Portland metro) with orders placed before 10 AM. We do our best on late requests — call us directly.',
      },
      {
        q: 'How quickly can I pick up from your yard?',
        a: 'Standard will-call orders are staged within 2 hours of confirmation. Urgent same-day orders can often be staged in 45 minutes — call ahead.',
      },
      {
        q: 'Do you buy back used pallets?',
        a: 'Yes. We buy Grade A, B, and C pallets. Rates depend on grade and condition. We pick up lots of 200+ at no cost to you. See our Pickup page for buyback rates.',
      },
    ],
  },
];

export default function FAQPage() {
  const allFaqs = FAQ_SECTIONS.flatMap(s => s.items);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-dark via-brand to-brand-light text-white py-16 md:py-20">
        <div className="container max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-white/80 text-lg">
            Everything you need to know about buying, grading, and receiving pallets from PDX Pallet Supply.
          </p>
        </div>
      </section>

      {/* FAQ sections */}
      <section className="section bg-page">
        <div className="container max-w-3xl">
          <div className="space-y-14">
            {FAQ_SECTIONS.map(({ section, items }) => (
              <div key={section}>
                <h2 className="text-xl font-bold text-ink mb-6 pb-3 border-b border-edge">{section}</h2>
                <div className="space-y-4">
                  {items.map(({ q, a }) => (
                    <div key={q} className="rounded-xl border border-edge bg-card p-6">
                      <h3 className="font-semibold text-ink mb-2">{q}</h3>
                      <p className="text-sm text-muted leading-relaxed">{a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="section bg-subtle">
        <div className="container max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-ink mb-3">Still have a question?</h2>
          <p className="text-muted mb-6">
            Our team picks up the phone and knows the yard. Ask us anything.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="inline-flex h-11 items-center rounded-xl bg-brand px-6 font-semibold text-white hover:bg-brand-dark transition-colors">
              Send a Message →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
