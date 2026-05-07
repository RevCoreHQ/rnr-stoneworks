'use client';

import { useEffect } from 'react';

const FORM_EMBED_SCRIPT = 'https://link.msgsndr.com/js/form_embed.js';
const FORM_IFRAME_SRC = 'https://api.leadconnectorhq.com/widget/form/KqfvKeoGrD6B0NmO7jMm';

function injectFormEmbedScript() {
  const existing = document.querySelector<HTMLScriptElement>(`script[src="${FORM_EMBED_SCRIPT}"]`);
  if (existing) {
    existing.remove();
  }
  const script = document.createElement('script');
  script.src = FORM_EMBED_SCRIPT;
  script.async = true;
  document.body.appendChild(script);
}

/**
 * Go High Level (LeadConnector) embedded form, leads stay in your GHL workflow.
 * To add qualification (budget, scope, pool, timeline), mirror those fields in the GHL form builder.
 */
export function ContactForm() {
  useEffect(() => {
    injectFormEmbedScript();
    return () => {
      const s = document.querySelector<HTMLScriptElement>(`script[src="${FORM_EMBED_SCRIPT}"]`);
      if (s) s.remove();
    };
  }, []);

  return (
    <div className="w-full space-y-5" id="contact-form">
      <div className="rounded-xl border border-cream-200 bg-white/90 p-4 sm:p-5 text-sm text-ink-600 leading-relaxed">
        <p className="font-display text-[11px] tracking-[0.16em] uppercase text-gold-700 mb-2">
          Help us route your inquiry
        </p>
        <p className="mb-2">
          In the message box below, consider including:
        </p>
        <ul className="list-disc pl-4 space-y-1 text-ink-600">
          <li>Rough budget band and whether this is a full-yard / multi-trade project or a single feature</li>
          <li>Whether a pool or spa is in scope, or if you are not sure yet</li>
          <li>Ideal start timing and any HOA, access, or drainage constraints</li>
        </ul>
      </div>

      <iframe
        src={FORM_IFRAME_SRC}
        style={{ width: '100%', height: '678px', border: 'none', borderRadius: '12px' }}
        id="inline-KqfvKeoGrD6B0NmO7jMm"
        referrerPolicy="strict-origin-when-cross-origin"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="website form"
        data-height="678"
        data-layout-iframe-id="inline-KqfvKeoGrD6B0NmO7jMm"
        data-form-id="KqfvKeoGrD6B0NmO7jMm"
        title="Request a free estimate, Rock N Roll Stoneworks"
      />
    </div>
  );
}
