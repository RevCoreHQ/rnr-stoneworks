import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/site-config';
import { Phone } from 'lucide-react';

interface CTASectionProps {
  headline?: string;
  description?: string;
  variant?: 'dark' | 'light' | 'brand';
}

function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

export function CTASection({
  headline = 'Ready to Transform Your Outdoor Space?',
  description = 'Get a free estimate from our team. We will visit your property, listen to your vision, and provide a detailed proposal — no obligation.',
  variant = 'dark',
}: CTASectionProps) {
  const bgClasses = {
    dark: 'bg-stone-900 text-white',
    light: 'bg-parchment-50 text-stone-900',
    brand: 'bg-brand-800 text-white',
  };

  return (
    <section className={cn(bgClasses[variant], 'section-padding relative overflow-hidden')}>
      {/* Amber accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-amber/50 to-transparent" />

      {/* Decorative orbs */}
      {variant === 'dark' && (
        <>
          <div className="orb w-[400px] h-[400px] bg-brand-700/10 -top-[20%] -right-[10%]" />
          <div className="orb w-[300px] h-[300px] bg-brand-600/5 -bottom-[15%] -left-[10%]" />
        </>
      )}

      <div className="container-narrow text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-5">
          {headline}
        </h2>
        <p
          className={cn(
            'text-lg leading-relaxed mb-8 max-w-2xl mx-auto',
            variant === 'dark'
              ? 'text-stone-300'
              : variant === 'brand'
              ? 'text-brand-100'
              : 'text-stone-600'
          )}
        >
          {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/contact" size="lg" variant={variant === 'light' ? 'primary' : 'secondary'}>
            Get Your Free Estimate
          </Button>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="inline-flex items-center gap-2 text-lg font-medium hover:opacity-80 transition-opacity"
          >
            <Phone className="w-5 h-5" />
            {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
