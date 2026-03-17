import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ContactForm } from '@/components/forms/ContactForm';
import { siteConfig } from '@/data/site-config';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact Rock N Roll Stoneworks, Free Estimate | Lafayette & Boulder, CO',
  description:
    'Get a free estimate for paver installation, fire pits, outdoor kitchens, or any hardscape project. Call (303) 587-3035 or fill out our form. Lafayette, CO.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: siteConfig.url },
          { name: 'Contact', url: `${siteConfig.url}/contact` },
        ])}
      />
      <div className="section-pad relative overflow-hidden grain-light">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
          <Breadcrumbs items={[{ label: 'Contact', href: '/contact' }]} />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left - Info */}
            <div className="lg:col-span-2">
              <p className="text-gold-700 font-medium text-sm tracking-wide uppercase mb-3">
                Get In Touch
              </p>
              <h1 className="text-4xl sm:text-5xl font-display font-bold text-ink-900 mb-6">
                Request Your Free Estimate
              </h1>
              <p className="text-lg text-ink-500 leading-relaxed mb-8">
                Tell us about your project and we will be in touch within one business day with a consultation plan. Or call us directly, we are happy to talk.
              </p>

              <div className="space-y-5">
                <a href={`tel:${siteConfig.phoneRaw}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-gold-50 flex items-center justify-center shrink-0 group-hover:bg-gold-100 transition-colors">
                    <Phone className="w-5 h-5 text-gold-700" />
                  </div>
                  <div>
                    <p className="text-sm text-ink-400">Call Us</p>
                    <p className="font-semibold text-ink-900">{siteConfig.phone}</p>
                  </div>
                </a>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-gold-50 flex items-center justify-center shrink-0 group-hover:bg-gold-100 transition-colors">
                    <Mail className="w-5 h-5 text-gold-700" />
                  </div>
                  <div>
                    <p className="text-sm text-ink-400">Email</p>
                    <p className="font-semibold text-ink-900">{siteConfig.email}</p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-50 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-gold-700" />
                  </div>
                  <div>
                    <p className="text-sm text-ink-400">Location</p>
                    <p className="font-semibold text-ink-900">{siteConfig.address.full}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-50 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-gold-700" />
                  </div>
                  <div>
                    <p className="text-sm text-ink-400">Hours</p>
                    <p className="font-semibold text-ink-900">Mon–Fri {siteConfig.hours.weekday}</p>
                    <p className="text-sm text-ink-400">Saturday {siteConfig.hours.saturday}</p>
                    <p className="text-sm text-ink-400">Sunday: {siteConfig.hours.sunday}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-5 bg-gold-50 rounded-2xl border border-gold-100">
                <p className="text-sm font-semibold text-gold-900 mb-1">Belgard Authorized Contractor</p>
                <p className="text-sm text-gold-700">ICPI Certified · 2-Year Guarantee · Full payment only upon satisfaction</p>
              </div>
            </div>

            {/* Right - Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
