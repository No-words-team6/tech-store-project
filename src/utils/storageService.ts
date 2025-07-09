import type { Product } from '@/types';

type StorageKey = 'cart' | 'favourites';

export const getFromLocale = (storageKey: StorageKey) => {
  return JSON.parse(localStorage.getItem(storageKey) || '[]');
};

export const setToLocale = (storageKey: StorageKey, value: Product[]) => {
  localStorage.setItem(storageKey, JSON.stringify(value));
};

export const isLocaleExists = (
  productId: Product['itemId'],
  storageKey: StorageKey,
): boolean => {
  const localeData: Product[] = getFromLocale(storageKey);
  return localeData.some((item) => item.itemId === productId);
};

export const toggleProd = (product: Product, storageKey: StorageKey) => {
  const localeData: Product[] = getFromLocale(storageKey);

  const exists = isLocaleExists(product.itemId, storageKey);

  const updated =
    exists ?
      localeData.filter((item) => item.itemId !== product.itemId)
    : [...localeData, product];

  setToLocale(storageKey, updated);
};
