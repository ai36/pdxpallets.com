'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu as MenuIcon, X as XIcon, ChevronDown } from 'lucide-react';
import { SITE_NAME, NAV_LINKS } from '@/constants';

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header
      className={[
        'sticky top-0 z-50 transition-all duration-150',
        scrolled
          ? 'bg-card border-b border-edge shadow-sm'
          : 'bg-card/95 backdrop-blur-sm',
      ].join(' ')}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          aria-label={`${SITE_NAME} — Home`}
          className="flex items-center gap-2 font-bold text-brand text-lg tracking-tight"
        >
          <span className="text-2xl" aria-hidden="true">◆</span>
          <span>{SITE_NAME}</span>
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((item) =>
            item.children ? (
              <div key={item.label} className="relative group">
                <button
                  className="flex min-h-12 items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-muted hover:text-ink hover:bg-subtle transition-colors"
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown size={15} aria-hidden="true" />
                </button>
                <div className="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
                  <div className="w-48 rounded-xl border border-edge bg-card shadow-lg py-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        aria-current={pathname === child.href ? 'page' : undefined}
                        className={[
                          'block px-4 py-3 text-sm transition-colors hover:bg-subtle',
                          pathname === child.href ? 'text-brand font-medium' : 'text-ink',
                        ].join(' ')}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? 'page' : undefined}
                className={[
                  'inline-flex min-h-[48px] items-center px-3 py-2 rounded-md text-sm font-medium transition-colors',
                  pathname === item.href
                    ? 'text-brand bg-brand-pale'
                    : 'text-muted hover:text-ink hover:bg-subtle',
                ].join(' ')}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/quote"
            className="inline-flex h-12 items-center rounded-lg bg-brand px-4 text-sm font-semibold text-white hover:bg-brand-dark transition-colors"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          className="md:hidden flex items-center justify-center h-11 w-11 rounded-lg hover:bg-subtle transition-colors"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <XIcon size={22} /> : <MenuIcon size={22} />}
        </button>
      </div>

      {/* Mobile Menu — right drawer */}
      <div aria-hidden={!mobileOpen}>
        {/* Backdrop */}
        <div
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
          className={[
            'fixed inset-0 z-40 bg-ink/50 transition-opacity duration-300 md:hidden',
            mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none',
          ].join(' ')}
        />

        {/* Drawer */}
        <nav
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className={[
            'fixed inset-y-0 right-0 z-50 w-72 bg-card shadow-2xl flex flex-col transition-transform duration-300 ease-in-out md:hidden',
            mobileOpen ? 'translate-x-0' : 'translate-x-full',
          ].join(' ')}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-5 h-16 border-b border-edge shrink-0">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-brand text-lg tracking-tight"
              onClick={() => setMobileOpen(false)}
            >
              <span className="text-xl" aria-hidden="true">◆</span>
              <span>{SITE_NAME}</span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center h-9 w-9 rounded-lg hover:bg-subtle transition-colors"
              aria-label="Close menu"
            >
              <XIcon size={20} />
            </button>
          </div>

          {/* Nav links */}
          <div className="flex-1 overflow-y-auto py-4 px-4 space-y-1">
            {NAV_LINKS.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <p className="px-3 pt-3 pb-1 text-xs font-semibold uppercase tracking-widest text-dim">
                      {item.label}
                    </p>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        aria-current={pathname === child.href ? 'page' : undefined}
                        className={[
                          'block px-3 py-3 rounded-lg text-base font-medium transition-colors',
                          pathname === child.href ? 'text-brand bg-brand-pale' : 'text-ink hover:bg-subtle',
                        ].join(' ')}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    aria-current={pathname === item.href ? 'page' : undefined}
                    className={[
                      'block px-3 py-3 rounded-lg text-base font-medium transition-colors',
                      pathname === item.href ? 'text-brand bg-brand-pale' : 'text-ink hover:bg-subtle',
                    ].join(' ')}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="px-4 py-5 border-t border-edge shrink-0">
            <Link
              href="/quote"
              className="block w-full text-center py-3 rounded-xl bg-brand text-white font-semibold text-base hover:bg-brand-dark transition-colors"
            >
              Get a Free Quote →
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
