import type { Category, Product } from './types';

export async function getProductsByCategory(
  category: Category,
): Promise<Product[]> {
  try {
    const response = await fetch(`/gadgets/products.json`);

    if (!response.ok) {
      throw new Error('смЄрть?');
    }

    const data: Product[] = await response.json();

    await new Promise((resolve) => setTimeout(resolve, 300));

    return data.filter((product: Product) => product.category === category);
  } catch (error) {
    console.error('чому', error);
    throw error;
  }
}
