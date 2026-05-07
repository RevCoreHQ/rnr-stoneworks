import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '@/data/blog';

function featuredPosts() {
  return [...blogPosts]
    .sort((a, b) => Date.parse(b.datePublished) - Date.parse(a.datePublished))
    .slice(0, 3);
}

export function LatestBlogSection() {
  const posts = featuredPosts();

  return (
    <section className="section-pad bg-white border-y border-cream-200 relative overflow-hidden grain-light">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 lg:mb-12">
          <div className="max-w-2xl">
            <p className="text-gold-700 font-medium text-sm tracking-wide uppercase mb-3">Resources</p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-ink-900 mb-3">
              Front Range outdoor living guides
            </h2>
            <p className="text-lg text-ink-500 leading-relaxed">
              Practical reads on paver costs, fire features, materials, and maintenance, written for Colorado homeowners.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold-700 hover:text-gold-800 shrink-0"
          >
            View all articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-cream-50 rounded-2xl border border-cream-200 shadow-panel hover:shadow-elevate overflow-hidden hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 bg-cream-200 overflow-hidden shrink-0">
                <Image
                  src={post.heroImage}
                  alt={post.heroAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={75}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 bg-gold-700/90 text-white text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <time
                  dateTime={post.datePublished}
                  className="text-xs text-ink-400 mb-2"
                >
                  {new Date(post.datePublished).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <h3 className="text-lg font-display font-semibold text-ink-900 mb-2 group-hover:text-gold-700 transition-colors leading-snug line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-ink-500 leading-relaxed line-clamp-2 mb-4 flex-1">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-700 group-hover:gap-2 transition-all">
                  Read article <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
