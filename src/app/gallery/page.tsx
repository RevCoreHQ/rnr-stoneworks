import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/data/site-config';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ProjectGrid } from '@/components/sections/ProjectGrid';
import { CTASection } from '@/components/sections/CTASection';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema, imageGallerySchema } from '@/lib/schema';

export const metadata: Metadata = generatePageMetadata({
  title: 'Project Gallery | Rock N Roll Stoneworks Lafayette CO',
  description:
    'Browse our paver patio, fire pit, outdoor kitchen, and hardscape portfolio. Serving Lafayette, Erie, and Boulder CO. Free estimates.',
  path: '/gallery',
});

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', url: siteConfig.url },
            { name: 'Gallery', url: `${siteConfig.url}/gallery` },
          ]),
          imageGallerySchema([
            { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69b41abbe8487c68ea7458e3.jpg', alt: 'Belgard paver patio and outdoor kitchen installation in Lafayette, Colorado' },
            { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69b41abb277ba028b8ce2268.jpg', alt: 'Custom paver patio with natural gas fire pit in Erie, Colorado' },
            { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69b41abb070c5827655cf949.jpg', alt: 'Tiered natural stone retaining wall and landscape design in Boulder, Colorado' },
            { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69b41abbbfc81f7607ecedf1.jpg', alt: 'Belgard paver patio and seat wall installation in Lafayette, Colorado' },
            { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69b41abbd548174caf1be587.jpg', alt: 'Multi-level paver walkway and retaining wall in Westminster, Colorado' },
            { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69b41abb0b5c435534dabbdc.jpg', alt: 'Outdoor living space with paver patio and landscape lighting in Longmont, Colorado' },
            { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69b41abb0b5c430b62dabbdb.jpg', alt: 'Custom hardscape design with stone planters and paver driveway in Erie, Colorado' },
            { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69b41abbeba487466a20d049.jpg', alt: 'Complete backyard transformation with Belgard pavers and stone steps in Boulder, Colorado' },
            { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69b41abbeba487d1ff20d048.jpg', alt: 'Custom paver patio with built-in fire feature and seating area in Lafayette, Colorado' },
            { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69b41abbfb38ca4dc08ccfd8.jpg', alt: 'Outdoor kitchen with granite countertops and paver patio in Erie, Colorado' },
            { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69b41abbcab7f75114aa984e.jpg', alt: 'Premium Belgard paver driveway and front entry hardscape in Westminster, Colorado' },
            { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69b41abbeba487271b20d047.jpg', alt: 'Complete outdoor living space with fire pit and paver patio in Lafayette, Colorado' },
            { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69b41abbe8487c54027458e7.jpg', alt: 'Natural stone patio with custom fire pit and retaining wall in Boulder, Colorado' },
            { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69b41abbe8487c245a7458ee.jpg', alt: 'Custom interlocking paver design with decorative borders in Longmont, Colorado' },
          ]),
        ]}
      />
      <div className="pt-36 lg:pt-44 pb-16 bg-cream-50 border-b border-gold-200/40 relative overflow-hidden topo-lines">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
          <Breadcrumbs items={[{ label: 'Gallery', href: '/gallery' }]} />
          <div className="max-w-3xl mt-8">
            <p className="label mb-4">Our Work</p>
            <h1 className="font-display font-light text-ink-900 mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              Projects That Speak for Themselves
            </h1>
            <p className="font-body text-lg text-ink-500 leading-relaxed">
              Every project in our portfolio represents a homeowner who trusted Rock N Roll Stoneworks to transform their outdoor space.
            </p>
          </div>
        </div>
      </div>
      <ProjectGrid />
      <CTASection
        headline="Love What You See?"
        description="Let us create something just as beautiful for your property. Contact us for a free estimate and 3D design consultation."
      />
    </>
  );
}
