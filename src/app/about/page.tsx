import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/data/site-config';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CTASection } from '@/components/sections/CTASection';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { BadgeCheck, Flame, Layers, Users } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
  title: 'About Rock N Roll Stoneworks — Lafayette, CO Hardscape Contractor',
  description:
    'Rock N Roll Stoneworks is a Belgard Authorized, ICPI Certified hardscape contractor based in Lafayette, CO. Custom outdoor spaces built to last.',
  path: '/about',
});

const values = [
  {
    icon: Layers,
    title: 'Quality Over Speed',
    description:
      'We prioritize exceptional craftsmanship over rushing to the next job. Every installation is done right the first time — starting with a proper base and ending with a finish that will last for decades.',
  },
  {
    icon: BadgeCheck,
    title: 'Belgard Certified Excellence',
    description:
      'As a Belgard Authorized Contractor and Reseller and ICPI Certified Installer, we meet the industry\'s highest standards for paver installation design and technique.',
  },
  {
    icon: Flame,
    title: 'Full Payment Only Upon Satisfaction',
    description:
      'We do not ask for full payment until the project is complete and you are 100% satisfied. That is how confident we are in the quality of our work.',
  },
  {
    icon: Users,
    title: 'Locally Rooted',
    description:
      'We are based in Lafayette and work primarily in the surrounding Front Range communities. Our reputation is built on the work visible in our neighbors\' yards.',
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: siteConfig.url },
          { name: 'About', url: `${siteConfig.url}/about` },
        ])}
      />
      <div className="section-padding">
        <div className="container-wide">
          <Breadcrumbs items={[{ label: 'About', href: '/about' }]} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <p className="text-brand-700 font-medium text-sm tracking-wide uppercase mb-3">
                Who We Are
              </p>
              <h1 className="text-4xl sm:text-5xl font-display font-bold text-stone-900 mb-6">
                Colorado&apos;s Outdoor Living Craftsmen
              </h1>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>
                  Rock N Roll Stoneworks, LLC is a hardscape and outdoor living contractor based in Lafayette, Colorado. We design and build custom paver installations, fire features, outdoor kitchens, water features, retaining walls, and complete outdoor living environments for homeowners across the Front Range.
                </p>
                <p>
                  We are a Belgard Authorized Contractor and Reseller — meaning we have completed Belgard&apos;s rigorous certification program and maintain the quality standards required to offer Belgard&apos;s lifetime material warranties. We are also ICPI Certified Installers (Interlocking Concrete Pavement Institute), the recognized credential for professional paver installation.
                </p>
                <p>
                  Our process starts with a free on-site consultation and continues through 2D and 3D design, expert installation, and a final walkthrough where you confirm everything meets your expectations before full payment is due. That last part matters — we believe a contractor who requires full payment only upon your satisfaction is a contractor you can trust.
                </p>
                <p>
                  We serve Lafayette, Erie, Boulder, Westminster, Longmont, Firestone, Frederick, and surrounding communities. If you are in the Front Range, there is a good chance we can help with your project.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-brand-50 rounded-2xl p-6 text-center border border-brand-100">
                <p className="text-5xl font-display font-bold text-brand-800 mb-2">2</p>
                <p className="text-sm font-medium text-stone-600">Year Workmanship Guarantee</p>
              </div>
              <div className="bg-parchment-50 rounded-2xl p-6 text-center border border-parchment-200">
                <p className="text-5xl font-display font-bold text-stone-800 mb-2">∞</p>
                <p className="text-sm font-medium text-stone-600">Belgard Material Warranty</p>
              </div>
              <div className="bg-stone-900 rounded-2xl p-6 text-center">
                <p className="text-4xl font-display font-bold text-white mb-2">ICPI</p>
                <p className="text-sm font-medium text-stone-400">Certified Installer</p>
              </div>
              <div className="bg-parchment-50 rounded-2xl p-6 text-center border border-parchment-200">
                <p className="text-xl font-display font-bold text-stone-800 mb-2">Belgard</p>
                <p className="text-sm font-medium text-stone-600">Authorized Contractor</p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mb-8">
            <div className="text-center mb-12">
              <p className="inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase mb-3">
                <span className="w-6 h-px bg-accent-amber" />
                <span className="gradient-text-amber">What We Stand For</span>
                <span className="w-6 h-px bg-accent-amber" />
              </p>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-900">
                Our Values
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.title} className="bg-white rounded-2xl border border-stone-100 p-6 shadow-soft">
                    <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-brand-700" />
                    </div>
                    <h3 className="font-display font-semibold text-stone-900 text-lg mb-2">
                      {v.title}
                    </h3>
                    <p className="text-stone-600 leading-relaxed text-sm">{v.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <TrustStrip />

      <CTASection />
    </>
  );
}
