import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generatePageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/data/site-config';
import { blogPosts } from '@/data/blog';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CTASection } from '@/components/sections/CTASection';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
  title: 'Hardscape Blog | Rock N Roll Stoneworks CO',
  description:
    'Expert guides on paver installation, fire pits, outdoor kitchens, and hardscape construction for Colorado homeowners from Rock N Roll Stoneworks.',
  path: '/blog',
});

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: siteConfig.url },
          { name: 'Blog', url: `${siteConfig.url}/blog` },
        ])}
      />
      <div className="section-pad pb-0">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }]} />
          <div className="max-w-3xl mb-12">
            <p className="text-gold-700 font-medium text-sm tracking-wide uppercase mb-3">
              Resources
            </p>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-ink-900 mb-4">
              Outdoor Living Guides
            </h1>
            <p className="text-lg text-ink-500 leading-relaxed">
              Expert guides and practical advice for Colorado homeowners planning paver installations, fire features, outdoor kitchens, and backyard transformations.
            </p>
          </div>
        </div>
      </div>

      <section className="section-pad pt-0">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl border border-cream-200 shadow-panel hover:shadow-elevate overflow-hidden hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-52 bg-cream-200 overflow-hidden">
                  <Image
                    src={post.heroImage}
                    alt={post.heroAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={65}
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-gold-700/90 text-white text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs text-ink-400 mb-2">
                    {new Date(post.datePublished).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                  <h2 className="text-xl font-display font-semibold text-ink-900 mb-2 group-hover:text-gold-700 transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-ink-400 leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-700 group-hover:gap-2.5 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
