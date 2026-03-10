import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 'review-1',
    quote:
      "Rock N Roll Stoneworks completely transformed our backyard. They handled the entire design process — the 3D tour they showed us before starting was spot on. The paver patio, fire pit, and retaining wall all came out beautifully. Our neighbors keep asking who did the work.",
    author: 'Marcus D.',
    location: 'Lafayette, CO',
    service: 'Paver Patio & Fire Pit',
    rating: 5,
  },
  {
    id: 'review-2',
    quote:
      "We had a sloped backyard that we never used. RNR came in, built a two-tier retaining wall system with a lower patio and upper lawn area, and installed an outdoor kitchen. Now it's the best part of our house. Professional crew, clean jobsite every evening, and the work is exceptional quality.",
    author: 'Sarah K.',
    location: 'Erie, CO',
    service: 'Retaining Walls & Outdoor Kitchen',
    rating: 5,
  },
  {
    id: 'review-3',
    quote:
      "The color-changing waterfall feature they installed is stunning — especially at night with the LED lighting. We get compliments every time someone comes over. Rock N Roll Stoneworks is the real deal. Payment was only due when we were 100% satisfied. That alone shows you the confidence they have in their work.",
    author: 'Jennifer L.',
    location: 'Boulder, CO',
    service: 'Water Feature & Lighting',
    rating: 5,
  },
];

export function TestimonialCards() {
  return (
    <section className="section-padding bg-gradient-to-b from-parchment-50 to-white relative overflow-hidden">
      <div className="orb w-[300px] h-[300px] bg-brand-100/30 top-[10%] -right-[5%]" />

      <div className="container-wide relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <p className="inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase mb-3">
            <span className="w-6 h-px bg-accent-amber" />
            <span className="gradient-text-amber">Client Experiences</span>
            <span className="w-6 h-px bg-accent-amber" />
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-900">
            What Our Clients Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="relative bg-white rounded-2xl p-6 lg:p-8 shadow-soft border border-stone-100 border-l-4 border-l-brand-600 hover:shadow-card transition-all duration-300"
            >
              <span className="absolute top-4 right-5 text-6xl font-display text-brand-100/60 leading-none select-none pointer-events-none">
                &ldquo;
              </span>

              <div className="relative z-10">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent-amber text-accent-amber" />
                  ))}
                </div>
                <p className="text-stone-700 leading-relaxed mb-5 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center">
                    <span className="text-sm font-bold text-brand-800">{t.author[0]}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-stone-900">{t.author}</p>
                    <p className="text-sm text-stone-500">
                      {t.location} · {t.service}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
