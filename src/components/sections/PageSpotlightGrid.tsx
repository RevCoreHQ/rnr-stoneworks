import Image from 'next/image';

export interface SpotlightImage {
  src: string;
  alt: string;
}

interface Props {
  images: SpotlightImage[];
  /** When a single image, cap width for readability */
  singleMaxWidth?: '3xl' | '5xl';
}

export function PageSpotlightGrid({ images, singleMaxWidth = '5xl' }: Props) {
  if (!images.length) return null;
  const cols = images.length === 1 ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2';
  const max =
    images.length === 1
      ? singleMaxWidth === '3xl'
        ? 'max-w-3xl'
        : 'max-w-5xl'
      : 'max-w-6xl';

  return (
    <div className={`mx-auto w-full ${max}`}>
      <div className={`grid ${cols} gap-6 lg:gap-8`}>
        {images.map((img, i) => (
          <figure key={`${img.src}-${i}`} className="m-0">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-cream-200 ring-1 ring-cream-200/80 shadow-panel">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes={images.length === 1 ? '(max-width: 1024px) 100vw, 896px' : '(max-width: 1024px) 100vw, 50vw'}
                quality={75}
                className="object-cover"
              />
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
}
