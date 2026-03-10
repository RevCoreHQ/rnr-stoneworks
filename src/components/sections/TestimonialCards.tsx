import { Quote } from 'lucide-react';

const featured = {
  quote: "Rock N Roll Stoneworks completely transformed our backyard. The 3D tour they showed us before starting was spot on. The paver patio, fire pit, and retaining wall all came out beautifully — exactly what we envisioned. Our neighbors keep asking who did the work.",
  author: 'Marcus D.',
  location: 'Lafayette, CO',
  service: 'Paver Patio, Fire Pit & Retaining Wall',
  rating: 5,
};

const secondary = [
  {
    quote: "We had a sloped backyard that we never used. RNR built a two-tier retaining wall system with a lower patio and upper lawn area, then added an outdoor kitchen. Now it is the best part of our house. Professional crew, clean jobsite every evening.",
    author: 'Sarah K.',
    location: 'Erie, CO',
    service: 'Retaining Walls & Outdoor Kitchen',
  },
  {
    quote: "The color-changing waterfall feature they installed is stunning — especially at night with the LED lighting. Payment was only due when we were 100% satisfied. That alone shows the confidence they have in their work.",
    author: 'Jennifer L.',
    location: 'Boulder, CO',
    service: 'Water Feature & LED Lighting',
  },
];

export function TestimonialCards() {
  return (
    <section className="section-pad bg-white">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
        <p className="label mb-12 text-center">Client Experiences</p>

        {/* Featured pull-quote */}
        <div className="relative border border-gold-200 rounded-sm p-10 lg:p-16 mb-8 overflow-hidden">
          <div className="absolute top-6 left-8 text-gold-200">
            <Quote className="w-14 h-14 fill-gold-100 stroke-gold-200" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <p
              className="font-display font-light text-ink-900 leading-relaxed mb-10"
              style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)' }}
            >
              &ldquo;{featured.quote}&rdquo;
            </p>
            <div className="flex flex-col items-center gap-1">
              <p className="font-body font-semibold text-ink-900">{featured.author}</p>
              <p className="font-body text-ink-400 text-sm">{featured.location} · {featured.service}</p>
              <div className="flex gap-1 mt-2">
                {Array.from({ length: featured.rating }).map((_, i) => (
                  <span key={i} className="text-gold-500 text-sm">★</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Secondary quotes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {secondary.map((t, i) => (
            <div key={i} className="bg-cream-50 border border-gold-100 rounded-sm p-8">
              <p className="font-body text-ink-600 leading-relaxed mb-6 italic text-[15px]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="border-t border-gold-100 pt-5">
                <p className="font-body font-semibold text-ink-900 text-sm">{t.author}</p>
                <p className="font-body text-ink-400 text-xs mt-0.5">{t.location} · {t.service}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
