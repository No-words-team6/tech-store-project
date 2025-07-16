import type { Product } from '@/types';
import { Brands } from '@/types/Brands';

interface FilterParams {
  appliedQuery: string;
  currentBrand: string;
}

export const filterProductSearchs = (
  items: Product[],
  filterParams: FilterParams,
) => {
  const { appliedQuery, currentBrand } = filterParams;
  const normalizeQuery = appliedQuery.trim().toLowerCase();
  const normalizeCurrentBrand = currentBrand.toLowerCase();

  return items.filter((item) =>
    currentBrand === Brands.All || currentBrand === '' ?
      item.name.toLowerCase().includes(normalizeQuery)
    : item.name.toLowerCase().includes(normalizeQuery) &&
      item.name.toLowerCase().split(' ')[0] === normalizeCurrentBrand,
  );
};
