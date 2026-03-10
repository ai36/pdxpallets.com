import Link from 'next/link';
import { Mail, Clock } from 'lucide-react';
import { EMAIL, HOURS, SITE_NAME, SITE_NAME_LEGAL } from '@/constants';

const FOOTER_LINKS = {
  Products: [
    { label: 'New Pallets', href: '/products/new-pallets' },
    { label: 'Used Pallets', href: '/products/used-pallets' },
    { label: 'Custom Orders', href: '/services/custom-orders' },
  ],
  Services: [
    { label: 'Delivery', href: '/services/delivery' },
    { label: 'Pallet Pickup', href: '/services/pickup' },
    { label: 'Volume Programs', href: '/services/custom-orders' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
    { label: 'Get a Quote', href: '/quote' },
  ],
};

export function SiteFooter() {
  return (
    <footer className="bg-footer text-footer-fg border-t border-footer-edge" aria-label="Site footer">
      <div className="container py-16">
        {/*
          Layout strategy:
          < sm  — Brand (100%) → Contact (100%) → Links×3 (3×33%)
          sm–lg — [Brand | Contact] (2×50%) then [Links×3] (3×33%)
          ≥ lg  — [Brand+Contact stacked (2fr=40%)] [Products] [Services] [Company] (1fr each=20%)
        */}
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-10">

          {/* Row 1 wrapper — 2-col at < lg; single stacked cell (33%) at lg */}
          <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-0 lg:grid-cols-1 lg:gap-y-8">

            {/* Brand: logo + tagline */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <Link
                href="/"
                className="inline-flex items-center gap-2 font-bold text-xl text-footer-fg mb-4 hover:text-footer-muted transition-colors"
              >
                <span aria-hidden="true">◆</span>
                {SITE_NAME}
              </Link>
              <p className="text-sm text-footer-muted leading-relaxed max-w-xs">
                Portland's pallet experts since 2003. New and used pallets for the PDX metro — delivered reliably, priced fairly.
              </p>
            </div>

            {/* Contact: email, hours, badges */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="space-y-2 text-sm text-footer-muted mb-6">
                <p>
                  <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-1.5 hover:text-footer-fg transition-colors">
                    <Mail className="w-3.5 h-3.5 shrink-0" aria-hidden="true" /> {EMAIL}
                  </a>
                </p>
                <p className="flex items-center justify-center gap-1.5 lg:justify-start">
                  <Clock className="w-3.5 h-3.5 shrink-0" aria-hidden="true" /> {HOURS}
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                <span className="inline-flex items-center rounded-md border border-footer-edge px-2 py-1 text-xs font-medium text-footer-dim">
                  ISPM-15 Certified
                </span>
                <span className="inline-flex items-center rounded-md border border-footer-edge px-2 py-1 text-xs font-medium text-footer-dim">
                  NWPCA Member
                </span>
              </div>
            </div>

          </div>

          {/* Row 2 wrapper — 3-col at < lg, invisible at lg */}
          <div className="grid grid-cols-3 gap-x-4 lg:contents">
            {Object.entries(FOOTER_LINKS).map(([section, links]) => (
              <div key={section} className="text-center lg:text-left">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-footer-dim mb-4">
                  {section}
                </h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-footer-muted hover:text-footer-fg transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-footer-edge">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-footer-dim">
            © {new Date().getFullYear()} {SITE_NAME_LEGAL}. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs text-footer-dim">
            <Link href="/privacy" className="hover:text-footer-muted transition-colors">Privacy Policy</Link>
            <Link href="/terms"   className="hover:text-footer-muted transition-colors">Terms</Link>
            <Link href="/sitemap.xml" className="hover:text-footer-muted transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
