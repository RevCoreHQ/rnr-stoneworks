'use client';

import dynamic from 'next/dynamic';

const ContactForm = dynamic(
  () => import('@/components/forms/ContactForm').then((m) => ({ default: m.ContactForm })),
  {
    ssr: false,
    loading: () => (
      <div
        className="min-h-[240px] w-full rounded-xl bg-cream-100 animate-pulse"
        aria-label="Loading contact form"
      />
    ),
  },
);

export function ContactFormIsland() {
  return <ContactForm />;
}
