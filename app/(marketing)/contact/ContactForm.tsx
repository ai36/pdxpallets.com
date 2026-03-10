'use client';

import { useState, useTransition } from 'react';
import { Check } from 'lucide-react';
import { EMAIL } from '@/constants';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const [state, setState] = useState<FormState>('idle');
  const [, startTransition] = useTransition();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    startTransition(async () => {
      setState('submitting');
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error('Request failed');
        setState('success');
        form.reset();
      } catch {
        setState('error');
      }
    });
  }

  if (state === 'success') {
    return (
      <div role="status" aria-live="polite" className="rounded-2xl border border-ok bg-ok-pale p-8 text-center">
        <Check className="w-10 h-10 mx-auto mb-3 text-ok" aria-hidden="true" />
        <h3 className="font-bold text-ink mb-2">Message received</h3>
        <p className="text-sm text-muted mb-4">We'll reply within one business day — usually same day.</p>
        <Button variant="ghost" onClick={() => setState('idle')} className="text-brand hover:text-brand-dark">
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate aria-label="Contact form">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Input
          label="Full name" name="name" type="text" required
          autoComplete="name" autoCapitalize="words"
          placeholder="Jane Smith…"
        />
        <Input
          label="Company" name="company" type="text"
          autoComplete="organization"
          placeholder="Acme Warehouse Co.…"
        />
      </div>

      <Input
        label="Email" name="email" type="email" required
        autoComplete="email" inputMode="email" spellCheck={false}
        placeholder="jane@example.com…"
      />

      <Input
        label="Phone" name="phone" type="tel"
        autoComplete="tel" inputMode="tel"
        placeholder="(503) 555-0100…"
      />

      <div className="flex flex-col gap-1.5">
        <label htmlFor="subject" className="text-sm font-semibold text-ink">
          Subject <span className="ml-1 text-err" aria-hidden="true">*</span>
        </label>
        <select id="subject" name="subject" required aria-required="true" className="input w-full">
          <option value="">Select a subject…</option>
          <option value="product">Product availability</option>
          <option value="pricing">Pricing inquiry</option>
          <option value="delivery">Delivery question</option>
          <option value="account">Account / billing</option>
          <option value="buyback">Pallet buyback</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-semibold text-ink">
          Message <span className="ml-1 text-err" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message" name="message" required rows={5}
          aria-required="true"
          className="input w-full resize-y" placeholder="Tell us what you need…"
        />
      </div>

      {state === 'error' && (
        <p role="alert" aria-live="assertive" className="rounded-lg bg-err-pale border border-err/30 px-4 py-3 text-sm text-err">
          Something went wrong. Please try again or email us at{' '}
          <a href={`mailto:${EMAIL}`} className="font-medium underline">{EMAIL}</a>.
        </p>
      )}

      <Button type="submit" loading={state === 'submitting'} className="w-full">
        {state === 'submitting' ? 'Sending…' : 'Send Message →'}
      </Button>
    </form>
  );
}
