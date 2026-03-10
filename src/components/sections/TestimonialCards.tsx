import { Quote } from 'lucide-react';

const featured = {
  quote: "Both my husband and I are extremely glad we picked Rock N Roll Stoneworks for our outdoor project. Jordan and Jason were a pleasure to work with from the planning of the design details to the completed backyard of our dreams. They actually listened to the ideas we had and incorporated them into the plan. We had an extensive plan — outdoor kitchen, large hardscape area with mixed materials, a raised garden bed, sod, plants, and even a beach area. We were amazed at how well everything turned out. We now have our own backyard oasis!",
  author: 'Tyra Ware',
  date: 'August 2020',
  service: 'Outdoor Kitchen & Full Hardscape',
  rating: 5,
};

const secondary = [
  {
    quote: "We are so thrilled with our new patio! These guys did a great job and were a pleasure to work with. We've already had so many compliments from neighbors and friends. I couldn't recommend these guys enough!",
    author: 'Sara Seitzman Hazard',
    date: 'August 2022',
    service: 'Paver Patio',
  },
  {
    quote: "Rock n Roll Stoneworks just installed a stunning new paver stairway and patio in my back yard and I could not be more thrilled! The workmanship, attention to detail, and beauty of the finished product is second to none. I will definitely use them in the future for any other hardscape projects.",
    author: 'Cindy Anderson Fox',
    date: 'August 2019',
    service: 'Paver Stairway & Patio',
  },
  {
    quote: "Contracted with Rock n Roll Stoneworks for a large project that included driveway, all walkways, front porch and back patio. Jordan's expertise was invaluable for design and materials selection. His crew was professional, experienced, detail oriented and customer focused. Results exceeded our expectations.",
    author: 'Rebecca Staley',
    date: 'January 2019',
    service: 'Driveway, Walkways & Patio',
  },
  {
    quote: "Jordan had the best ideas for the shape of our patio and we drew it all out and loved it. Like lightening out went our old rotten deck and in went the patio with no hassle. They have an awesome crew and they work so hard. We couldn't be happier — it's beautiful.",
    author: 'Kris Burneson Hodgson',
    date: 'August 2019',
    service: 'Patio Installation',
  },
];

export function TestimonialCards() {
  return (
    <section className="section-pad bg-white">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
        <p className="label mb-12 text-center">Client Experiences</p>

        {/* Featured pull-quote */}
        <div className="relative border border-gold-200 rounded-sm p-10 lg:p-16 mb-8 overflow-hidden">
          <div className="absolute top-6 left-8 text-gold-100">
            <Quote className="w-14 h-14 fill-gold-100 stroke-gold-200" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <p
              className="font-display font-light text-ink-900 leading-relaxed mb-10"
              style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.9rem)' }}
            >
              &ldquo;{featured.quote}&rdquo;
            </p>
            <div className="flex flex-col items-center gap-1">
              <p className="font-body font-semibold text-ink-900">{featured.author}</p>
              <p className="font-body text-ink-400 text-sm">{featured.date} · {featured.service}</p>
              <div className="flex gap-1 mt-2">
                {Array.from({ length: featured.rating }).map((_, i) => (
                  <span key={i} className="text-gold-500 text-sm">★</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Secondary quotes — 2x2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {secondary.map((t, i) => (
            <div key={i} className="bg-cream-50 border border-gold-100 rounded-sm p-7">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j} className="text-gold-500 text-xs">★</span>
                ))}
              </div>
              <p className="font-body text-ink-600 leading-relaxed mb-5 italic text-[15px]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="border-t border-gold-100 pt-4">
                <p className="font-body font-semibold text-ink-900 text-sm">{t.author}</p>
                <p className="font-body text-ink-400 text-xs mt-0.5">{t.date} · {t.service}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
