'use client';

import { useState, useEffect } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const PROJECT = process.env.NEXT_PUBLIC_PROJECT_NAME ?? 'app';
const OPT_OUT_COOKIE = `${PROJECT}_analytics_optout`;
const SEEN_COOKIE = `${PROJECT}_cookie_seen`;
const COOKIE_DAYS = 365;

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
  return match ? decodeURIComponent(match[1]) : null;
}

function setCookie(name: string, value: string) {
  const expires = new Date(Date.now() + COOKIE_DAYS * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires};path=/;SameSite=Lax`;
}

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [gaEnabled, setGaEnabled] = useState(true);

  useEffect(() => {
    const optedOut = getCookie(OPT_OUT_COOKIE) === '1';
    const seen = getCookie(SEEN_COOKIE) === '1';
    if (optedOut) setGaEnabled(false);
    if (!seen) setShowBanner(true);
  }, []);

  function accept() {
    setCookie(SEEN_COOKIE, '1');
    setShowBanner(false);
  }

  function decline() {
    setCookie(OPT_OUT_COOKIE, '1');
    setCookie(SEEN_COOKIE, '1');
    setGaEnabled(false);
    setShowBanner(false);
  }

  return (
    <>
      {gaEnabled && GA_ID && <GoogleAnalytics gaId={GA_ID} />}

      {showBanner && (
        <div
          role="dialog"
          aria-label="Cookie consent"
          aria-live="polite"
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-footer-edge bg-footer text-footer-fg"
        >
          <div className="container py-4 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
            <p className="text-sm text-footer-muted max-w-xl">
              We use analytics to improve this site. Data is collected anonymously.{' '}
              You can opt out at any time.
            </p>
            <div className="flex shrink-0 gap-3">
              <button
                type="button"
                onClick={decline}
                className="inline-flex h-9 items-center rounded-lg border border-footer-edge px-4 text-sm font-medium text-footer-muted hover:text-footer-fg transition-colors"
              >
                Opt out
              </button>
              <button
                type="button"
                onClick={accept}
                className="inline-flex h-9 items-center rounded-lg bg-brand px-4 text-sm font-semibold text-white hover:bg-brand-dark transition-colors"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
