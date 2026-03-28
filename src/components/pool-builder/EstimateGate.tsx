'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

interface EstimateGateProps {
  summary: string;
  onUnlock: () => void;
}

export function EstimateGate({ summary, onUnlock }: EstimateGateProps) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    cityZip: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
          cityZip: form.cityZip,
          service: 'Pool Estimate',
          message: summary,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.');
        return;
      }

      onUnlock();
    } catch {
      setError('Unable to submit. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    'w-full px-4 py-3 rounded-sm border border-gold-200/60 bg-white font-body text-sm text-ink-900 placeholder:text-ink-300 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-colors';

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="border-t border-gold-200/40 pt-5 mt-5">
        <p className="font-display font-semibold text-ink-900 text-sm mb-1">
          Unlock Your Estimate
        </p>
        <p className="font-body text-ink-400 text-xs mb-4">
          Enter your info below and we&apos;ll reveal your personalized price range — plus a team member will follow up to discuss your project.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="First Name"
              required
              value={form.firstName}
              onChange={(e) => update('firstName', e.target.value)}
              className={inputClass}
            />
            <input
              type="text"
              placeholder="Last Name"
              required
              value={form.lastName}
              onChange={(e) => update('lastName', e.target.value)}
              className={inputClass}
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            className={inputClass}
          />
          <input
            type="tel"
            placeholder="Phone"
            required
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            className={inputClass}
          />
          <input
            type="text"
            placeholder="City or ZIP Code"
            required
            value={form.cityZip}
            onChange={(e) => update('cityZip', e.target.value)}
            className={inputClass}
          />

          {error && (
            <p className="font-body text-red-600 text-xs">{error}</p>
          )}

          <Button type="submit" size="md" className="w-full">
            {submitting ? 'Submitting...' : 'Reveal My Estimate'}
          </Button>
        </form>
      </div>
    </motion.div>
  );
}
