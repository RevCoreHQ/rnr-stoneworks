import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ContactForm } from '@/components/forms/ContactForm';
import { siteConfig } from '@/data/site-config';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact Rock N Roll Stoneworks — Free Estimate | Lafayette & Boulder, CO',
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
      <div className="section-padding">
        <div className="container-wide">
          <Breadcrumbs items={[{ label: 'Contact', href: '/contact' }]} />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left - Info */}
            <div className="lg:col-span-2">
              <p className="text-brand-700 font-medium text-sm tracking-wide uppercase mb-3">
                Get In Touch
              </p>
              <h1 className="text-4xl sm:text-5xl font-display font-bold text-stone-900 mb-6">
                Request Your Free Estimate
              </h1>
              <p className="text-lg text-stone-600 leading-relaxed mb-8">
                Tell us about your project and we will be in touch within one business day with a consultation plan. Or call us directly — we are happy to talk.
              </p>

              <div className="space-y-5">
                <a href={`tel:${siteConfig.phoneRaw}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center shrink-0 group-hover:bg-brand-100 transition-colors">
                    <Phone className="w-5 h-5 text-brand-700" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-500">Call Us</p>
                    <p className="font-semibold text-stone-900">{siteConfig.phone}</p>
                  </div>
                </a>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center shrink-0 group-hover:bg-brand-100 transition-colors">
                    <Mail className="w-5 h-5 text-brand-700" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-500">Email</p>
                    <p className="font-semibold text-stone-900">{siteConfig.email}</p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-brand-700" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-500">Location</p>
                    <p className="font-semibold text-stone-900">{siteConfig.address.full}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-brand-700" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-500">Hours</p>
                    <p className="font-semibold text-stone-900">Mon–Fri {siteConfig.hours.weekday}</p>
                    <p className="text-sm text-stone-500">Saturday {siteConfig.hours.saturday}</p>
                    <p className="text-sm text-stone-500">Sunday: {siteConfig.hours.sunday}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-5 bg-brand-50 rounded-2xl border border-brand-100">
                <p className="text-sm font-semibold text-brand-900 mb-1">Belgard Authorized Contractor</p>
                <p className="text-sm text-brand-700">ICPI Certified · 2-Year Guarantee · Full payment only upon satisfaction</p>
              </div>
            </div>

            {/* Right - Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-stone-100 shadow-card p-6 lg:p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
