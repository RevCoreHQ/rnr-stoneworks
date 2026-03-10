'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const services = [
  'Paver Installations',
  'Fire Pits & Fireplaces',
  'Outdoor Kitchens',
  'Water Features',
  'Retaining Walls & Stairs',
  'Outdoor Lighting',
  'Artificial Turf',
  'Decks & Pergolas',
  'Stamped Concrete',
  'Stone Veneers',
  'Swimming Pools',
  'Other / Not Sure',
];

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const formData = new FormData(e.currentTarget);
    const payload = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      service: formData.get('service') as string,
      cityZip: formData.get('cityZip') as string,
      message: formData.get('message') as string,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong');
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-brand-100 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-brand-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-display font-bold text-stone-900 mb-2">Message Received</h3>
        <p className="text-stone-600">Thank you! We will be in touch within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-stone-700 mb-1.5">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            autoComplete="given-name"
            className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
            placeholder="John"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-stone-700 mb-1.5">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            autoComplete="family-name"
            className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
            placeholder="Smith"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1.5">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-1.5">
          Phone <span className="text-red-500">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
          placeholder="(303) 555-0000"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-stone-700 mb-1.5">
          Service Interested In
        </label>
        <select
          id="service"
          name="service"
          className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all bg-white"
        >
          <option value="">Select a service...</option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="cityZip" className="block text-sm font-medium text-stone-700 mb-1.5">
          City / ZIP Code <span className="text-red-500">*</span>
        </label>
        <input
          id="cityZip"
          name="cityZip"
          type="text"
          required
          className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
          placeholder="Lafayette, CO 80026"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1.5">
          Tell Us About Your Project
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none"
          placeholder="Describe your project, budget range, or any questions..."
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-600 bg-red-50 rounded-lg px-4 py-3">{errorMsg}</p>
      )}

      <Button type="submit" className={cn('w-full', status === 'loading' && 'opacity-70 cursor-not-allowed')} size="lg">
        {status === 'loading' ? 'Sending...' : 'Send My Request'}
      </Button>

      <p className="text-xs text-stone-400 text-center">
        We respond within one business day. No spam, ever.
      </p>
    </form>
  );
}
