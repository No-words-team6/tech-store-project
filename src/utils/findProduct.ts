import type { Product } from '@/types';

export const findProduct = (
  choosedProdId: Product['itemId'],
  products: Product[],
): Product | undefined => {
  return choosedProdId ?
      products.find((product) => product.itemId === choosedProdId)
    : undefined;
};
