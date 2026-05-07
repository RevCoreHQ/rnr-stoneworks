import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/data/site-config';
import { serviceAreas } from '@/data/service-areas';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { CTASection } from '@/components/sections/CTASection';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema, faqSchema } from '@/lib/schema';
import { Phone, MapPin, CheckCircle } from 'lucide-react';

const faqs = [
  {
    question: 'What areas do you serve as patio and paver builders in Colorado?',
    answer:
      'Rock N Roll Stoneworks is based in Longmont and builds across the Colorado Front Range, including Boulder County (Boulder, Lafayette, Erie, Louisville, Superior, Longmont), Fort Collins and Loveland, and the north Denver metro (Westminster, Thornton, Northglenn, Brighton, Broomfield, Denver). We also take select projects farther south, ask about your address.',
  },
  {
    question: 'Why Belgard pavers for a Colorado patio?',
    answer:
      'Belgard systems are engineered for freeze-thaw, heavy UV at altitude, and hail-prone seasons. As a Belgard Authorized Contractor and ICPI Certified Installer, we install to manufacturer and industry standards so your warranty and performance match Colorado conditions.',
  },
  {
    question: 'How do I compare patio builder bids in Colorado?',
    answer:
      'Ask every contractor for base depth, compaction lifts, edge restraint, geotextile plan, and polymeric sand procedure. Our blog on paver patio cost and why installs fail explains what often gets cut from low bids on Front Range clay soils.',
  },
] as const;

export const metadata: Metadata = generatePageMetadata({
  title: 'Patio Builders Colorado | Front Range Belgard Pavers | Rock N Roll Stoneworks',
  description:
    'Longmont-based patio and paver builders for the Colorado Front Range: Boulder County, Fort Collins–Loveland, and north Denver metro. Belgard authorized. Free estimates.',
  path: '/patio-builders-in-colorado',
  keywords: [
    'patio builders Colorado',
    'Belgard paver contractor Longmont',
    'paver patio Boulder County',
    'hardscape contractor Front Range',
  ],
});

export default function PatioBuildersColoradoPage() {
  const primaryAreas = serviceAreas.filter((a) => a.isPrimary);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', url: siteConfig.url },
            { name: 'Patio Builders in Colorado', url: `${siteConfig.url}/patio-builders-in-colorado` },
          ]),
          faqSchema([...faqs]),
        ]}
      />

      <div className="section-pad pb-0">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
          <Breadcrumbs
            items={[{ label: 'Patio Builders in Colorado', href: '/patio-builders-in-colorado' }]}
          />
          <div className="max-w-3xl mb-10">
            <p className="text-gold-700 font-medium text-sm tracking-wide uppercase mb-3">
              Front Range hardscape
            </p>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-ink-900 mb-4">
              Patio builders in Colorado who engineer for freeze-thaw
            </h1>
            <p className="text-lg text-ink-500 leading-relaxed mb-6">
              Colorado homeowners search for patio builders who can explain materials honestly, and then install them to survive hail, UV, and freeze-thaw. That is our lane:{' '}
              <Link href="/services/paver-installations" className="text-gold-700 font-semibold hover:text-gold-800 underline decoration-gold-700/30">
                Belgard paver patios, driveways, and outdoor rooms
              </Link>{' '}
              from our Longmont headquarters across Boulder County and the north Denver corridor, with obsessive attention to base depth, drainage, and clean details.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button href="/contact" size="lg">
                Get a free estimate
              </Button>
              <Button href={`tel:${siteConfig.phoneRaw}`} variant="outline" size="lg">
                <Phone className="w-4 h-4 mr-2" />
                Call {siteConfig.phone}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <section className="section-pad pt-0">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <h2 className="text-2xl font-display font-bold text-ink-900 mb-4">
                Built for Colorado soils, not a generic catalog install
              </h2>
              <ul className="space-y-3 text-ink-600">
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                  <span>
                    ICPI-certified process for base, bedding, edge restraint, and polymeric joints, what keeps pavers flat after hail season and spring clay movement.
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                  <span>
                    Design-forward layouts that tie{' '}
                    <Link href="/services/fire-pits-fireplaces" className="text-gold-700 font-medium hover:underline">
                      fire features
                    </Link>
                    ,{' '}
                    <Link href="/services/outdoor-kitchens" className="text-gold-700 font-medium hover:underline">
                      outdoor kitchens
                    </Link>
                    , and{' '}
                    <Link href="/services/outdoor-lighting" className="text-gold-700 font-medium hover:underline">
                      lighting
                    </Link>{' '}
                    into one backyard plan.
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                  <span>
                    Straight answers on{' '}
                    <Link href="/blog/pavers-vs-stamped-concrete-colorado" className="text-gold-700 font-medium hover:underline">
                      pavers vs. stamped concrete
                    </Link>{' '}
                    and{' '}
                    <Link href="/blog/how-much-does-paver-patio-cost-colorado" className="text-gold-700 font-medium hover:underline">
                      real patio budgets on the Front Range
                    </Link>, so you are not guessing after the crew leaves.
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-cream-100 border border-cream-200 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-display font-semibold text-ink-900 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-gold-600" />
                Where we build patios & driveways
              </h3>
              <p className="text-sm text-ink-500 mb-4">
                Tap your city for neighborhood context, permits, and how we mobilize crews from Longmont.
              </p>
              <div className="flex flex-wrap gap-2">
                {primaryAreas.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/service-areas/${a.slug}`}
                    className="inline-flex items-center rounded-full border border-cream-300 bg-white px-3 py-1.5 text-xs font-medium text-ink-700 hover:border-gold-500/50 hover:text-gold-800 transition-colors"
                  >
                    {a.city}
                  </Link>
                ))}
              </div>
              <p className="text-xs text-ink-400 mt-4">
                Not sure if you are in range?{' '}
                <Link href="/service-areas" className="text-gold-700 font-medium hover:underline">
                  Browse all service areas
                </Link>{' '}
                or call, we will tell you quickly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream-50 border-y border-cream-200">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
          <h2 className="text-2xl font-display font-bold text-ink-900 mb-6">Common questions</h2>
          <div className="max-w-3xl space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="font-semibold text-ink-900 mb-2">{faq.question}</h3>
                <p className="text-ink-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
