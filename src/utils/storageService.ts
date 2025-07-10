import type { Product } from '@/types';

export type StorageKey = 'cart' | 'favourites';

export type LocaleProduct = Product & { quantity: number };

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

  const isExists = isLocaleExists(product.itemId, storageKey);

  const updated =
    isExists ?
      localeData.filter((item) => item.itemId !== product.itemId)
    : [
        ...localeData,
        storageKey === 'cart' ? { ...product, quantity: 1 } : product,
      ];

  setToLocale(storageKey, updated);
};

export const increaseQuantity = (productId: string) => {
  const localeProdData: LocaleProduct[] = getFromLocale('cart');
  const updated = localeProdData.map((item) =>
    item.itemId === productId ? { ...item, quantity: item.quantity + 1 } : item,
  );
  setToLocale('cart', updated);
};

export const decreaseQuantity = (productId: string) => {
  const localeProdData: LocaleProduct[] = getFromLocale('cart');

  const updated = localeProdData
    .map((item) =>
      item.itemId === productId ?
        { ...item, quantity: item.quantity - 1 }
      : item,
    )
    .filter((item) => item.quantity > 0);

  setToLocale('cart', updated);
};
