import type { Metadata } from 'next';
import Link from 'next/link';
import { Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About PDX Pallet Supply | Portland\'s Pallet Experts Since 2003',
  description:
    'Portland-based pallet supplier since 2003. ISPM-15 certified, NWPCA member. Family-owned, locally operated. Learn how we supply the PDX metro with new and used pallets.',
  alternates: { canonical: 'https://pdxpallets.com/about' },
};

const TEAM = [
  { name: 'Marcus T.', role: 'Owner & Operations', bio: 'Built PDX Pallet Supply from a single pickup truck in 2003. Still walks the yard every morning.' },
  { name: 'Sandra R.', role: 'Sales & Accounts', bio: '14 years managing volume relationships. The reason most of our enterprise accounts have stayed for 5+ years.' },
  { name: 'James W.', role: 'Yard Supervisor', bio: 'Oversees grading, staging, and fleet operations. If it leaves our yard, it\'s been through James.' },
];

const MILESTONES = [
  { year: '2003', event: 'Founded with a single route serving inner SE Portland' },
  { year: '2007', event: 'Opened first dedicated yard in NE Portland, expanded fleet to 4 trucks' },
  { year: '2011', event: 'Achieved ISPM-15 certification for heat-treated export pallets' },
  { year: '2015', event: 'Joined NWPCA; launched volume accounts program' },
  { year: '2019', event: 'Expanded to serve 140+ Portland metro zip codes' },
  { year: '2023', event: '20 years in business — still family-owned and operated' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-dark via-brand to-brand-light text-white py-20 md:py-28">
        <div className="container max-w-3xl">
          <p className="mb-3 text-sm font-medium text-white/80">Family-Owned · Portland Since 2003 · ISPM-15 Certified</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">
            Twenty Years Moving Pallets in Portland.
          </h1>
          <p className="text-white/80 text-lg max-w-xl">
            We started with a pickup truck and a route in SE Portland. Today we supply the full metro area — same ownership, same commitment to not making your job harder.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section bg-page">
        <div className="container max-w-3xl">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold text-ink tracking-tight mb-4">
                We Exist to Simplify Your Pallet Supply Chain
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                Most supply managers treat pallets as a low-priority afterthought — until a delivery is short, a grade doesn't match, or a supplier disappears. We built PDX Pallet Supply to be the vendor that never causes that problem.
              </p>
              <p className="text-muted leading-relaxed mb-4">
                We operate with a small team, a well-stocked yard, and a direct phone line you can actually reach. No call centers, no chatbots. When you call, you talk to someone who knows what's on the yard today.
              </p>
              <p className="text-muted leading-relaxed">
                That's it. We've been doing it this way since 2003 and it still works.
              </p>
            </div>
            <div className="rounded-2xl bg-brand-pale border border-brand-mid/30 p-8">
              <dl className="space-y-5">
                {[
                  { dt: 'Years in business', dd: '20+' },
                  { dt: 'Pallets moved annually', dd: '400,000+' },
                  { dt: 'Active accounts', dd: '300+' },
                  { dt: 'Metro zip codes served', dd: '140+' },
                ].map(({ dt, dd }) => (
                  <div key={dt} className="flex items-center justify-between border-b border-brand-mid/20 pb-4 last:border-0 last:pb-0">
                    <dt className="text-sm text-muted">{dt}</dt>
                    <dd className="text-2xl font-bold text-brand">{dd}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-subtle" aria-labelledby="history-h2">
        <div className="container max-w-2xl">
          <h2 id="history-h2" className="text-2xl font-bold text-ink text-center mb-10">Our History</h2>
          <ol className="relative border-l-2 border-brand-pale space-y-6 pl-8">
            {MILESTONES.map(({ year, event }) => (
              <li key={year} className="relative">
                <span className="absolute -left-[2.1rem] flex h-7 w-7 items-center justify-center rounded-full bg-brand text-white text-xs font-bold">
                  ·
                </span>
                <span className="text-xs font-bold text-brand uppercase tracking-widest">{year}</span>
                <p className="text-sm text-ink mt-0.5">{event}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-page" aria-labelledby="team-h2">
        <div className="container max-w-3xl">
          <h2 id="team-h2" className="text-2xl font-bold text-ink text-center mb-10">The People Behind the Pallets</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {TEAM.map((member) => (
              <div key={member.name} className="rounded-2xl border border-edge bg-card p-7 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-pale text-brand text-2xl font-bold">
                  {member.name[0]}
                </div>
                <h3 className="font-bold text-ink">{member.name}</h3>
                <p className="text-xs text-brand font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-subtle">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-bold text-ink text-center mb-10">How We Operate</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {[
              { title: 'Grade honestly', body: 'We don\'t ship Grade B and call it Grade A. Our grading is done by trained crew members who stake their name on each load.' },
              { title: 'Quote accurately', body: 'The price we quote is the price on your invoice. No fuel surcharges added after the fact, no "market adjustment" surprises.' },
              { title: 'Answer the phone', body: 'Our direct line goes to a person who knows the yard. If we can\'t fix your problem today, we\'ll tell you why and when we can.' },
              { title: 'Own our mistakes', body: 'If a load is wrong, we correct it same day — replacement or credit, whichever gets your operation moving again faster.' },
            ].map(({ title, body }) => (
              <div key={title} className="rounded-xl border border-edge bg-card p-6">
                <h3 className="font-semibold text-ink mb-2">{title}</h3>
                <p className="text-sm text-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section bg-page">
        <div className="container max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-ink mb-6">Certifications &amp; Memberships</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {['ISPM-15 Certified Heat Treatment', 'NWPCA Member', 'Oregon Business License', 'USDA Compliant Supply Chain'].map((cert) => (
              <span key={cert} className="rounded-full border border-brand-mid/40 bg-brand-pale px-4 py-2 text-sm font-medium text-brand">
                <Check className="inline-block w-3.5 h-3.5 mr-1" aria-hidden="true" /> {cert}
              </span>
            ))}
          </div>
          <p className="text-sm text-muted max-w-md mx-auto">
            Certification documentation available on request for export shipments and regulatory supply chains.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand py-16 text-white text-center">
        <div className="container max-w-lg">
          <h2 className="text-2xl font-bold mb-3">Let's talk pallets</h2>
          <p className="text-white/80 mb-6">
            Whether you need 20 pallets this week or 2,000 a month, we can help. No sales pitch — just a straight conversation about what you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-6 font-semibold text-brand hover:bg-white/90 transition-colors">
              Get in Touch →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
