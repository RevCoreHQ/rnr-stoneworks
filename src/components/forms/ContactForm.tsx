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

export function ContactForm() {
  useEffect(() => {
    injectFormEmbedScript();
    return () => {
      const s = document.querySelector<HTMLScriptElement>(`script[src="${FORM_EMBED_SCRIPT}"]`);
      if (s) s.remove();
    };
  }, []);

  return (
    <div className="w-full">
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
        title="Request a free estimate — Rock N Roll Stoneworks"
      />
    </div>
  );
}
