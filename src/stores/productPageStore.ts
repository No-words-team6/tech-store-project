import { create } from 'zustand';
import type { Product } from '@/types';
import { getProducts } from '@/api';

interface ProductPageStore {
  data: Product[];
  getData: () => Promise<void>;
}

export const useProductPageStore = create<ProductPageStore>((set) => ({
  data: [],

  getData: async () => {
    const products = await getProducts();
    set({ data: products });
  },
}));
