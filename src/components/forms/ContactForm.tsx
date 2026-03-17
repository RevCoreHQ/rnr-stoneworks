'use client';

import { useEffect } from 'react';

export function ContactForm() {
  useEffect(() => {
    // Load the GHL form embed script
    if (!document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://link.msgsndr.com/js/form_embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <iframe
      src="https://api.leadconnectorhq.com/widget/form/KqfvKeoGrD6B0NmO7jMm"
      style={{ width: '100%', height: '678px', border: 'none', borderRadius: '3px' }}
      id="inline-KqfvKeoGrD6B0NmO7jMm"
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
      title="website form"
    />
  );
}
