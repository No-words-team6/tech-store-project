import type { Product } from '@/types';

export const getCategoryCounts = (products: Product[]) => {
  const counts = {
    phonesCount: 0,
    tabletsCount: 0,
    accessoriesCount: 0,
  };

  for (const product of products) {
    if (product.category === 'phones') counts.phonesCount++;
    else if (product.category === 'tablets') counts.tabletsCount++;
    else if (product.category === 'accessories') counts.accessoriesCount++;
  }

  return counts;
};
