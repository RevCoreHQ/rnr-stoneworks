import type { ServiceData } from '@/data/services';
import type { ServiceAreaData } from '@/data/service-areas';

/** Unique phrases for `<meta name="keywords">` — supplement titles/descriptions, avoid stuffing. */
export function buildServicePageKeywords(service: ServiceData): string[] {
  const cityHints = [
    'Denver',
    'Boulder',
    'Lafayette',
    'Longmont',
    'Westminster',
    'Front Range',
    'Boulder County',
  ];
  return [
    service.primaryKeyword,
    `${service.shortTitle} Colorado`,
    `${service.shortTitle} Front Range`,
    ...cityHints.map((c) => `${service.shortTitle} ${c}`),
    'Belgard authorized contractor Colorado',
  ];
}

export function buildPoolPageKeywords(pool: Pick<ServiceData, 'shortTitle' | 'primaryKeyword'>): string[] {
  return [
    pool.primaryKeyword,
    `${pool.shortTitle} Colorado`,
    `${pool.shortTitle} Front Range`,
    `${pool.shortTitle} Boulder County`,
    `${pool.shortTitle} Denver metro`,
    'Latham Pools Colorado',
    'pool builder Colorado',
  ];
}

export function buildServiceAreaKeywords(area: ServiceAreaData): string[] {
  const { city, state } = area;
  return [
    `hardscape contractor ${city} ${state}`,
    `paver installation ${city}`,
    `outdoor kitchen ${city} CO`,
    `fire pit installer ${city}`,
    `pool builder ${city} Colorado`,
    `retaining wall ${city} CO`,
    `Belgard ${city}`,
    `${city} outdoor living contractor`,
    `landscape lighting ${city}`,
  ];
}
