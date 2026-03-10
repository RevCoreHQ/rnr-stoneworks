import Image from 'next/image';

const projects = [
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    alt: 'Custom paver patio in Colorado backyard',
    label: 'Paver Patio — Lafayette, CO',
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
    alt: 'Outdoor fire pit with paver surround',
    label: 'Fire Pit & Paver Surround — Erie, CO',
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
    alt: 'Custom outdoor kitchen installation',
    label: 'Outdoor Kitchen — Boulder, CO',
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop',
    alt: 'Retaining wall and staircase construction',
    label: 'Retaining Walls & Stairs — Lafayette, CO',
  },
  {
    src: 'https://images.unsplash.com/photo-1572331165267-854da2b021d9?w=800&h=600&fit=crop',
    alt: 'Swimming pool with paver deck',
    label: 'Pool & Paver Deck — Westminster, CO',
  },
  {
    src: 'https://images.unsplash.com/photo-1600566752229-250ed79470f8?w=800&h=600&fit=crop',
    alt: 'Stamped concrete patio installation',
    label: 'Stamped Concrete — Longmont, CO',
  },
  {
    src: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop',
    alt: 'Water feature installation in backyard',
    label: 'Water Feature — Lafayette, CO',
  },
  {
    src: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=600&fit=crop',
    alt: 'Outdoor LED lighting on paver patio',
    label: 'Outdoor Lighting — Erie, CO',
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
    alt: 'Stone veneer fireplace surround',
    label: 'Stone Veneer — Boulder, CO',
  },
];

export function ProjectGrid() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft bg-stone-200"
            >
              <Image
                src={project.src}
                alt={project.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                quality={70}
                priority={i < 2}
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white text-sm font-medium">{project.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
