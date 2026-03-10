import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { blogPosts, getBlogPostBySlug } from '@/data/blog';
import { siteConfig } from '@/data/site-config';
import { generatePageMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema, articleSchema } from '@/lib/schema';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CTASection } from '@/components/sections/CTASection';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return generatePageMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    ogImage: post.heroImage,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const paragraphs = post.body.split('\n\n').filter(Boolean);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', url: siteConfig.url },
            { name: 'Blog', url: `${siteConfig.url}/blog` },
            { name: post.title, url: `${siteConfig.url}/blog/${post.slug}` },
          ]),
          articleSchema(post.title, post.metaDescription, `${siteConfig.url}/blog/${post.slug}`, post.datePublished),
        ]}
      />

      <div className="section-pad">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16">
          <Breadcrumbs
            items={[
              { label: 'Blog', href: '/blog' },
              { label: post.title, href: `/blog/${post.slug}` },
            ]}
          />

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-gold-50 text-gold-800 text-xs font-medium rounded-full border border-gold-100">
                {post.category}
              </span>
              <time
                dateTime={post.datePublished}
                className="text-sm text-ink-400"
              >
                {new Date(post.datePublished).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-ink-900 mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-ink-500 leading-relaxed">{post.excerpt}</p>
          </div>

          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-panel mb-12 bg-cream-200">
            <Image
              src={post.heroImage}
              alt={post.heroAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              quality={75}
              className="object-cover"
            />
          </div>

          <article className="prose prose-stone prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-gold-700 prose-a:no-underline hover:prose-a:underline">
            {paragraphs.map((para, i) => {
              if (para.startsWith('## ')) {
                return (
                  <h2 key={i} className="text-2xl sm:text-3xl font-display font-bold text-ink-900 mt-10 mb-4">
                    {para.replace('## ', '')}
                  </h2>
                );
              }
              if (para.startsWith('**') && para.endsWith('**')) {
                return (
                  <p key={i} className="font-semibold text-ink-800 mb-3">
                    {para.replace(/\*\*/g, '')}
                  </p>
                );
              }
              if (para.startsWith('**')) {
                const parts = para.split('**');
                return (
                  <p key={i} className="text-ink-700 leading-relaxed mb-5">
                    {parts.map((part, j) =>
                      j % 2 === 1 ? (
                        <strong key={j} className="font-semibold text-ink-900">
                          {part}
                        </strong>
                      ) : (
                        part
                      )
                    )}
                  </p>
                );
              }
              return (
                <p key={i} className="text-ink-700 leading-relaxed mb-5">
                  {para}
                </p>
              );
            })}
          </article>

          <div className="mt-12 pt-8 border-t border-cream-200 text-sm text-ink-400">
            Written by {siteConfig.name} · Lafayette, CO
          </div>
        </div>
      </div>

      <CTASection />
    </>
  );
}
