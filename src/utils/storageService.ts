import type { Product } from '@/types';

function getItem(key: string) {
  return JSON.parse(localStorage.getItem(key) || '[]');
}

function setItem(key: string, value: Product[]) {
  localStorage.setItem(key, JSON.stringify(value));
}

const CART_KEY = 'tech-store-cart';
const FAV_KEY = 'tech-store-favorites';

export function getCart() {
  return getItem(CART_KEY);
}

export function addToCart(product: Product) {
  const cart = getCart();
  const existing = cart.find((item: Product) => item.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  setItem(CART_KEY, cart);
}

export function removeFromCart(productId: number) {
  const cart = getCart().filter((item: Product) => item.id !== productId);
  setItem(CART_KEY, cart);
}

export function getFavorites() {
  return getItem(FAV_KEY);
}

export function toggleFavorite(product: Product) {
  const favorites = getFavorites();
  const exists = favorites.find((item: Product) => item.id === product.id);
  if (exists) {
    setItem(
      FAV_KEY,
      favorites.filter((item: Product) => item.id !== product.id),
    );
  } else {
    setItem(FAV_KEY, [...favorites, product]);
  }
}

export function isFavorite(productId: number): boolean {
  return getFavorites().some((item: Product) => item.id === productId);
}
