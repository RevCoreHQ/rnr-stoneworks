import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function EditorialIntro() {
  return (
    <section className="section-pad bg-white">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — large editorial headline */}
          <div>
            <p className="label mb-8">Who We Are</p>
            <h2
              className="font-display font-light text-ink-900 leading-[1.06] mb-0"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)' }}
            >
              Colorado's premier{' '}
              <em className="italic text-gold-600">design–build</em>{' '}
              team for luxury outdoor living.
            </h2>
          </div>

          {/* Right — body copy + credentials */}
          <div className="pt-0 lg:pt-16">
            <p className="font-body text-ink-500 text-lg leading-relaxed mb-6">
              Rock N Roll Stoneworks was built on a single principle: that your outdoor space should be as refined as the home it surrounds. Every project we take begins with a free 3D design consultation and ends with a space that commands attention.
            </p>
            <p className="font-body text-ink-500 text-lg leading-relaxed mb-10">
              As a Belgard Authorized Contractor and ICPI Certified installer, we bring the highest level of craftsmanship to paver installations, fire features, outdoor kitchens, water elements, and complete hardscape environments across Lafayette, Boulder, and the Colorado Front Range.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                ['Belgard Authorized', 'Highest Tier Certification'],
                ['ICPI Certified', 'Industry-Standard Mastery'],
                ['3D Design Included', 'Visualize Before We Build'],
                ['2-Year Guarantee', 'Workmanship Backed'],
              ].map(([title, sub]) => (
                <div key={title} className="border-l-2 border-gold-400 pl-4">
                  <p className="font-body font-semibold text-ink-900 text-sm">{title}</p>
                  <p className="font-body text-ink-400 text-xs mt-0.5">{sub}</p>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-body text-[12px] tracking-[0.15em] uppercase font-semibold text-ink-900 hover-gold-line pb-0.5"
            >
              Learn Our Story <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
