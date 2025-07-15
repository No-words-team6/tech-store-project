import type { Product } from '@/types';
import { Brands } from '@/types/Brands';

interface FilterParams {
  query: string;
  currentBrand: string;
}

export const filterProductSearchs = (
  items: Product[],
  filterParams: FilterParams,
) => {
  const { query, currentBrand } = filterParams;
  const normalizeQuery = query.trim().toLowerCase();
  const normalizeCurrentBrand = currentBrand.toLowerCase();

  return items.filter((item) =>
    currentBrand === Brands.All ?
      item.name.toLowerCase().includes(normalizeQuery)
    : item.name.toLowerCase().includes(normalizeQuery) &&
      item.name.toLowerCase().split(' ')[0] === normalizeCurrentBrand,
  );
};
