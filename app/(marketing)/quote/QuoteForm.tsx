'use client';

import { useReducer, useEffect, useCallback } from 'react';
import { Check } from 'lucide-react';
import { EMAIL } from '@/constants';

// ─── Types ──────────────────────────────────────────────────────────────────

type PalletType = 'new' | 'used' | '';
type Grade = 'A' | 'B' | 'C' | '';
type Size = '48x40' | '42x42' | '48x48' | 'custom' | '';
type DeliveryMethod = 'delivery' | 'pickup' | '';
type Step = 1 | 2 | 3 | 4;
type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

interface FormState {
  step: Step;
  status: FormStatus;
  // Step 1
  palletType: PalletType;
  grade: Grade;
  size: Size;
  customSize: string;
  quantity: string;
  // Step 2
  delivery: DeliveryMethod;
  address: string;
  city: string;
  zip: string;
  notes: string;
  // Step 3
  name: string;
  company: string;
  email: string;
  phone: string;
  // Error
  error: string;
}

type Action =
  | { type: 'SET'; field: keyof FormState; value: string }
  | { type: 'NEXT' }
  | { type: 'BACK' }
  | { type: 'SUBMIT_START' }
  | { type: 'SUBMIT_SUCCESS' }
  | { type: 'SUBMIT_ERROR'; message: string };

// ─── Initial state ───────────────────────────────────────────────────────────

const STORAGE_KEY = 'pdx-quote-draft';

function loadSession(): Partial<FormState> {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Partial<FormState>) : {};
  } catch {
    return {};
  }
}

const INITIAL: FormState = {
  step: 1,
  status: 'idle',
  palletType: '',
  grade: '',
  size: '',
  customSize: '',
  quantity: '',
  delivery: '',
  address: '',
  city: '',
  zip: '',
  notes: '',
  name: '',
  company: '',
  email: '',
  phone: '',
  error: '',
};

function reducer(state: FormState, action: Action): FormState {
  switch (action.type) {
    case 'SET':
      return { ...state, [action.field]: action.value };
    case 'NEXT':
      return { ...state, step: Math.min(state.step + 1, 4) as Step, error: '' };
    case 'BACK':
      return { ...state, step: Math.max(state.step - 1, 1) as Step, error: '' };
    case 'SUBMIT_START':
      return { ...state, status: 'submitting', error: '' };
    case 'SUBMIT_SUCCESS':
      return { ...state, status: 'success' };
    case 'SUBMIT_ERROR':
      return { ...state, status: 'idle', error: action.message };
    default:
      return state;
  }
}

// ─── Step validation ─────────────────────────────────────────────────────────

function validateStep(state: FormState): string {
  if (state.step === 1) {
    if (!state.palletType) return 'Please select a pallet type.';
    if (state.palletType === 'used' && !state.grade) return 'Please select a grade.';
    if (!state.size) return 'Please select a size.';
    if (!state.quantity || Number(state.quantity) < 1) return 'Please enter a valid quantity.';
  }
  if (state.step === 2) {
    if (!state.delivery) return 'Please select delivery or pickup.';
    if (state.delivery === 'delivery') {
      if (!state.address) return 'Please enter a delivery address.';
      if (!state.city) return 'Please enter a city.';
      if (!state.zip) return 'Please enter a ZIP code.';
    }
  }
  if (state.step === 3) {
    if (!state.name) return 'Please enter your name.';
    if (!state.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email))
      return 'Please enter a valid email address.';
  }
  return '';
}

// ─── Component ───────────────────────────────────────────────────────────────

const STEPS = ['Product', 'Delivery', 'Contact', 'Review'];

export function QuoteForm() {
  const [state, dispatch] = useReducer(reducer, INITIAL, (init) => ({
    ...init,
    ...loadSession(),
    status: 'idle' as FormStatus,
    error: '',
  }));

  // Persist draft to sessionStorage
  useEffect(() => {
    if (state.status !== 'success') {
      try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      } catch {
        // storage unavailable
      }
    }
  }, [state]);

  const set = useCallback((field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    dispatch({ type: 'SET', field, value: e.target.value });
  }, []);

  function handleNext(e: React.FormEvent) {
    e.preventDefault();
    const err = validateStep(state);
    if (err) { dispatch({ type: 'SET', field: 'error', value: err }); return; }
    dispatch({ type: 'NEXT' });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    dispatch({ type: 'SUBMIT_START' });
    try {
      const res = await fetch('/api/quotes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          palletType: state.palletType,
          grade: state.grade,
          size: state.size === 'custom' ? state.customSize : state.size,
          quantity: state.quantity,
          delivery: state.delivery,
          address: state.delivery === 'delivery' ? `${state.address}, ${state.city} OR ${state.zip}` : 'Will-call / pickup',
          notes: state.notes,
          name: state.name,
          company: state.company,
          email: state.email,
          phone: state.phone,
        }),
      });
      if (!res.ok) throw new Error('Failed');
      sessionStorage.removeItem(STORAGE_KEY);
      dispatch({ type: 'SUBMIT_SUCCESS' });
    } catch {
      dispatch({ type: 'SUBMIT_ERROR', message: 'Something went wrong. Please try again or call us directly.' });
    }
  }

  if (state.status === 'success') {
    return (
      <div className="mx-auto max-w-lg rounded-2xl border border-ok bg-ok-pale p-10 text-center">
        <Check className="w-12 h-12 mx-auto mb-4 text-ok" aria-hidden="true" />
        <h2 className="text-2xl font-bold text-ink mb-2">Quote request received</h2>
        <p className="text-muted mb-2">We'll confirm availability and send pricing within <strong>2 business hours</strong>.</p>
        <p className="text-sm text-muted">
          Questions? Email us at <a href={`mailto:${EMAIL}`} className="text-brand font-medium hover:underline">{EMAIL}</a>
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      {/* Step indicator */}
      <nav aria-label="Quote form steps" className="mb-8">
        <ol className="flex items-center gap-0">
          {STEPS.map((label, i) => {
            const n = (i + 1) as Step;
            const done = state.step > n;
            const active = state.step === n;
            return (
              <li key={label} className="flex flex-1 items-center">
                <div className="flex flex-col items-center flex-1">
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                      done ? 'bg-brand text-white' : active ? 'bg-brand text-white' : 'bg-subtle text-dim border border-edge'
                    }`}
                    aria-current={active ? 'step' : undefined}
                  >
                    {done ? <Check className="w-4 h-4" /> : n}
                  </span>
                  <span className={`mt-1 text-xs ${active ? 'text-brand font-semibold' : 'text-dim'}`}>{label}</span>
                </div>
                {i < STEPS.length - 1 && (
                  <div className={`h-px flex-1 mx-2 mb-5 transition-colors ${done ? 'bg-brand' : 'bg-edge'}`} aria-hidden="true" />
                )}
              </li>
            );
          })}
        </ol>
      </nav>

      {state.error && (
        <p role="alert" className="mb-5 rounded-lg bg-err-pale border border-err/30 px-4 py-3 text-sm text-err">
          {state.error}
        </p>
      )}

      {/* Step 1 — Product */}
      {state.step === 1 && (
        <form onSubmit={handleNext} className="space-y-6" noValidate>
          <h2 className="text-xl font-bold text-ink">What do you need?</h2>

          <fieldset>
            <legend className="block text-sm font-medium text-ink mb-2">Pallet type <span className="text-err" aria-hidden="true">*</span></legend>
            <div className="grid grid-cols-2 gap-3">
              {(['new', 'used'] as const).map((t) => (
                <label key={t} className={`flex items-center gap-3 rounded-xl border-2 p-4 cursor-pointer transition-colors ${state.palletType === t ? 'border-brand bg-brand-pale' : 'border-edge bg-card hover:border-brand/40'}`}>
                  <input type="radio" name="palletType" value={t} checked={state.palletType === t} onChange={set('palletType')} className="sr-only" />
                  <span className="font-semibold text-ink capitalize">{t} Pallets</span>
                </label>
              ))}
            </div>
          </fieldset>

          {state.palletType === 'used' && (
            <fieldset>
              <legend className="block text-sm font-medium text-ink mb-2">Grade <span className="text-err" aria-hidden="true">*</span></legend>
              <div className="grid grid-cols-3 gap-3">
                {(['A', 'B', 'C'] as const).map((g) => (
                  <label key={g} className={`flex flex-col items-center gap-1 rounded-xl border-2 p-4 cursor-pointer transition-colors ${state.grade === g ? 'border-brand bg-brand-pale' : 'border-edge bg-card hover:border-brand/40'}`}>
                    <input type="radio" name="grade" value={g} checked={state.grade === g} onChange={set('grade')} className="sr-only" />
                    <span className="font-bold text-lg text-ink">Grade {g}</span>
                    <span className="text-xs text-muted text-center">
                      {g === 'A' ? 'No broken boards' : g === 'B' ? 'Minor wear' : 'Heavy wear / repair'}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>
          )}

          <div>
            <label htmlFor="size" className="block text-sm font-medium text-ink mb-1.5">
              Size <span className="text-err" aria-hidden="true">*</span>
            </label>
            <select id="size" value={state.size} onChange={set('size')} className="input w-full">
              <option value="">Select a size…</option>
              <option value="48x40">48×40 GMA (standard)</option>
              <option value="42x42">42×42</option>
              <option value="48x48">48×48</option>
              <option value="custom">Custom / other</option>
            </select>
          </div>

          {state.size === 'custom' && (
            <div>
              <label htmlFor="customSize" className="block text-sm font-medium text-ink mb-1.5">
                Custom dimensions (e.g. 36×36)
              </label>
              <input id="customSize" type="text" value={state.customSize} onChange={set('customSize')} className="input w-full" placeholder="W × L in inches" />
            </div>
          )}

          <div>
            <label htmlFor="quantity" className="block text-sm font-medium text-ink mb-1.5">
              Quantity <span className="text-err" aria-hidden="true">*</span>
            </label>
            <input
              id="quantity"
              type="number"
              min="1"
              value={state.quantity}
              onChange={set('quantity')}
              className="input w-full"
              placeholder="e.g. 100"
            />
          </div>

          <div className="flex justify-end">
            <button type="submit" className="inline-flex h-11 items-center rounded-xl bg-brand px-7 font-semibold text-white hover:bg-brand-dark transition-colors">
              Next: Delivery →
            </button>
          </div>
        </form>
      )}

      {/* Step 2 — Delivery */}
      {state.step === 2 && (
        <form onSubmit={handleNext} className="space-y-6" noValidate>
          <h2 className="text-xl font-bold text-ink">Delivery or pickup?</h2>

          <fieldset>
            <legend className="sr-only">Fulfillment method</legend>
            <div className="grid grid-cols-2 gap-3">
              {([
                { value: 'delivery', label: 'Deliver to me', sub: 'We bring it to your site' },
                { value: 'pickup', label: 'I\'ll pick up', sub: 'Will-call at our Portland yard' },
              ] as const).map(({ value, label, sub }) => (
                <label key={value} className={`flex flex-col gap-1 rounded-xl border-2 p-4 cursor-pointer transition-colors ${state.delivery === value ? 'border-brand bg-brand-pale' : 'border-edge bg-card hover:border-brand/40'}`}>
                  <input type="radio" name="delivery" value={value} checked={state.delivery === value} onChange={set('delivery')} className="sr-only" />
                  <span className="font-semibold text-ink">{label}</span>
                  <span className="text-xs text-muted">{sub}</span>
                </label>
              ))}
            </div>
          </fieldset>

          {state.delivery === 'delivery' && (
            <div className="space-y-4">
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-ink mb-1.5">Street address <span className="text-err" aria-hidden="true">*</span></label>
                <input id="address" type="text" value={state.address} onChange={set('address')} className="input w-full" placeholder="123 Industrial Blvd" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-ink mb-1.5">City <span className="text-err" aria-hidden="true">*</span></label>
                  <input id="city" type="text" value={state.city} onChange={set('city')} className="input w-full" placeholder="Portland" />
                </div>
                <div>
                  <label htmlFor="zip" className="block text-sm font-medium text-ink mb-1.5">ZIP <span className="text-err" aria-hidden="true">*</span></label>
                  <input id="zip" type="text" value={state.zip} onChange={set('zip')} className="input w-full" placeholder="97201" />
                </div>
              </div>
            </div>
          )}

          <div>
            <label htmlFor="notes" className="block text-sm font-medium text-ink mb-1.5">Special instructions <span className="text-dim font-normal">(optional)</span></label>
            <textarea id="notes" value={state.notes} onChange={set('notes')} rows={3} className="input w-full resize-y" placeholder="Dock height, liftgate needed, time window, etc." />
          </div>

          <div className="flex justify-between">
            <button type="button" onClick={() => dispatch({ type: 'BACK' })} className="inline-flex h-11 items-center rounded-xl border border-edge bg-card px-6 font-semibold text-ink hover:bg-subtle transition-colors">
              ← Back
            </button>
            <button type="submit" className="inline-flex h-11 items-center rounded-xl bg-brand px-7 font-semibold text-white hover:bg-brand-dark transition-colors">
              Next: Contact →
            </button>
          </div>
        </form>
      )}

      {/* Step 3 — Contact */}
      {state.step === 3 && (
        <form onSubmit={handleNext} className="space-y-5" noValidate>
          <h2 className="text-xl font-bold text-ink">Your contact details</h2>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-ink mb-1.5">Full name <span className="text-err" aria-hidden="true">*</span></label>
              <input id="name" type="text" value={state.name} onChange={set('name')} autoComplete="name" className="input w-full" placeholder="Jane Smith" />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-ink mb-1.5">Company</label>
              <input id="company" type="text" value={state.company} onChange={set('company')} autoComplete="organization" className="input w-full" placeholder="Acme Warehouse Co." />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-ink mb-1.5">Email <span className="text-err" aria-hidden="true">*</span></label>
            <input id="email" type="email" value={state.email} onChange={set('email')} autoComplete="email" className="input w-full" placeholder="jane@example.com" />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-ink mb-1.5">Phone</label>
            <input id="phone" type="tel" value={state.phone} onChange={set('phone')} autoComplete="tel" className="input w-full" placeholder="(503) 555-0100" />
          </div>

          <div className="flex justify-between pt-2">
            <button type="button" onClick={() => dispatch({ type: 'BACK' })} className="inline-flex h-11 items-center rounded-xl border border-edge bg-card px-6 font-semibold text-ink hover:bg-subtle transition-colors">
              ← Back
            </button>
            <button type="submit" className="inline-flex h-11 items-center rounded-xl bg-brand px-7 font-semibold text-white hover:bg-brand-dark transition-colors">
              Review Order →
            </button>
          </div>
        </form>
      )}

      {/* Step 4 — Review */}
      {state.step === 4 && (
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-xl font-bold text-ink">Review your request</h2>

          <div className="rounded-2xl border border-edge bg-card divide-y divide-edge overflow-hidden">
            {[
              { label: 'Pallet type', value: state.palletType === 'new' ? 'New Pallets' : `Used Pallets — Grade ${state.grade}` },
              { label: 'Size', value: state.size === 'custom' ? state.customSize : state.size },
              { label: 'Quantity', value: `${state.quantity} units` },
              { label: 'Fulfillment', value: state.delivery === 'delivery' ? `Delivery to ${state.address}, ${state.city} OR ${state.zip}` : 'Will-call pickup' },
              ...(state.notes ? [{ label: 'Notes', value: state.notes }] : []),
              { label: 'Name', value: state.name + (state.company ? ` — ${state.company}` : '') },
              { label: 'Email', value: state.email },
              ...(state.phone ? [{ label: 'Phone', value: state.phone }] : []),
            ].map(({ label, value }) => (
              <div key={label} className="flex gap-4 px-5 py-3">
                <span className="w-28 shrink-0 text-xs font-semibold text-dim uppercase tracking-wide pt-0.5">{label}</span>
                <span className="text-sm text-ink">{value}</span>
              </div>
            ))}
          </div>

          {state.error && (
            <p role="alert" className="rounded-lg bg-err-pale border border-err/30 px-4 py-3 text-sm text-err">
              {state.error}
            </p>
          )}

          <div className="flex justify-between">
            <button type="button" onClick={() => dispatch({ type: 'BACK' })} className="inline-flex h-11 items-center rounded-xl border border-edge bg-card px-6 font-semibold text-ink hover:bg-subtle transition-colors">
              ← Edit
            </button>
            <button
              type="submit"
              disabled={state.status === 'submitting'}
              className="inline-flex h-11 items-center rounded-xl bg-brand px-7 font-semibold text-white hover:bg-brand-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {state.status === 'submitting' ? 'Sending…' : 'Submit Quote Request →'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
