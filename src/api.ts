import type { Category, Item, Product } from './types';

const customDelay = 300;

export async function getProductsByCategory(
  category: Category,
): Promise<Product[]> {
  const response = await fetch(`/gadgets/products.json`);

  if (!response.ok) {
    return [];
  }

  const data: Product[] = await response.json();

  await new Promise((resolve) => setTimeout(resolve, customDelay));

  return data.filter((product: Product) => product.category === category);
}

export async function getProductById(
  category: Category,
  itemId: string,
): Promise<Item | null> {
  const response = await fetch(`/gadgets/${category}.json`);

  if (!response.ok) {
    return null;
  }

  const data: Item[] = await response.json();

  await new Promise((resolve) => setTimeout(resolve, customDelay));

  return data.find((item: Item) => item.id === itemId) || null;
}
