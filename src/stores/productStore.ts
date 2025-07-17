import { getProducts, getProductsByCategory } from '@/api';
import type { Category, Product } from '@/types';
import {
  getFromLocale,
  setToLocale,
  type LocaleProduct,
} from '@/utils/storageService';
import { create } from 'zustand';

interface ProductStoreState {
  defaultLimit: number;
  latestProductYear: number;
  products: Product[];
  newestList: Product[];
  cheapestList: Product[];
  cartStore: LocaleProduct[];
  favouritesStore: Product[];
  isLoading: boolean;
  searchQuery: string;
  fetchAllProducts: () => void;
  fetchProductsByCategory: (category: Category) => void;
  getLocaleStore: () => void;
  toggleCartProduct: (product: Product) => void;
  toggleFavouriteProduct: (product: Product) => void;
  clearCart: () => void;
  increaseQuantity: (itemId: string) => void;
  decreaseQuantity: (itemId: string) => void;
  setSearchQuery: (query: string) => void;
  startFakeLoading: () => void;
}

export const useProductStore = create<ProductStoreState>((set, get) => ({
  latestProductYear: 2022,
  defaultLimit: 8,
  products: [],
  newestList: [],
  cheapestList: [],
  cartStore: [],
  favouritesStore: [],
  isLoading: false,
  searchQuery: '',

  startFakeLoading: () => {
    set({ isLoading: true });
    setTimeout(() => set({ isLoading: false }), 500);
  },

  setSearchQuery: (query: string) => set({ searchQuery: query }),

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

  fetchProductsByCategory: async (category: Category) => {
    set({ isLoading: true, products: [] });

    const data = await getProductsByCategory(category);
    set({ products: data, isLoading: false });
  },

  getLocaleStore: () => {
    const cartStore = getFromLocale('cart') as LocaleProduct[];
    const favouritesStore = getFromLocale('favourites') as Product[];

    set({ cartStore, favouritesStore });
  },

  toggleCartProduct: (product: Product) => {
    const cartStore: LocaleProduct[] = get().cartStore;

    const isStoreExists = cartStore.some(
      (item) => item.itemId === product.itemId,
    );

    let updatedCart: LocaleProduct[];

    if (isStoreExists) {
      updatedCart = cartStore.filter((item) => item.itemId !== product.itemId);
    } else {
      updatedCart = [...cartStore, { ...product, quantity: 1 }];
    }

    set({ cartStore: updatedCart });
    setToLocale('cart', updatedCart);
  },

  toggleFavouriteProduct: (product: Product) => {
    const favouritesStore: Product[] = get().favouritesStore;

    const isStoreExists = favouritesStore.some(
      (item) => item.itemId === product.itemId,
    );

    let updatedFavourites: Product[];

    if (isStoreExists) {
      updatedFavourites = favouritesStore.filter(
        (item) => item.itemId !== product.itemId,
      );
    } else {
      updatedFavourites = [...favouritesStore, product];
    }

    set({ favouritesStore: updatedFavourites });
    setToLocale('favourites', updatedFavourites);
  },

  clearCart: () => {
    set({ cartStore: [] });
    setToLocale('cart', []);
  },

  increaseQuantity: (itemId: string) => {
    const cartStore: LocaleProduct[] = get().cartStore;

    const updated = cartStore.map((item) =>
      item.itemId === itemId ? { ...item, quantity: item.quantity + 1 } : item,
    );

    set({ cartStore: updated });
    setToLocale('cart', updated);
  },

  decreaseQuantity: (itemId: string) => {
    const cartStore: LocaleProduct[] = get().cartStore;

    const updated = cartStore
      .map((item) =>
        item.itemId === itemId ?
          { ...item, quantity: item.quantity - 1 }
        : item,
      )
      .filter((item) => item.quantity > 0);

    set({ cartStore: updated });
    setToLocale('cart', updated);
  },
}));
