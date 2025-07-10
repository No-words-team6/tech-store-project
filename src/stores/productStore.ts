import { getProducts } from '@/api';
import type { Product } from '@/types';
import { create } from 'zustand';

interface ProductStoreState {
  products: Product[];
  isLoading: boolean;
  newestList: Product[];
  cheapestList: Product[];
  fetchAllProducts: () => void;
  latestProductYear: number;
  defaultLimit: number;
}

export const useProductStore = create<ProductStoreState>((set, get) => ({
  products: [],
  newestList: [],
  cheapestList: [],
  isLoading: false,
  latestProductYear: 2022,
  defaultLimit: 8,

  fetchAllProducts: async () => {
    set({ isLoading: true, products: [], newestList: [], cheapestList: [] });
    const data = await getProducts();

    const { latestProductYear, defaultLimit } = get();

    const newestList = data
      .filter((item) => item.year === latestProductYear)
      .slice(0, defaultLimit);

    const cheapestList = [...data]
      .sort((a, b) => a.price - b.price)
      .slice(0, defaultLimit);

    set({ products: data, newestList, cheapestList, isLoading: false });
  },
}));
