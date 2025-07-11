import { ProductCard } from '@/components/ProductCard';
import type { Product } from '@/types';

interface CardComparisonProps {
  product: Product | undefined;
}

export const CardComparison: React.FC<CardComparisonProps> = ({ product }) => {
  return (
    <div className="bg-white">
      {product && (
        <div className="grid gap-y-1">
          <p>Full price: {product.fullPrice}$</p>
          <p>Discont price: {product.price}$</p>
          <p>RAM: {product.ram}</p>
          <p>Сapacity: {product.capacity}</p>
          <p>Size screen: {product.screen.split(' ')[0]}</p>
          <p>Type of creen: {product.screen.split(' ')[1]}</p>
          <p>Color: {product.color}</p>
          <p>Year: {product.year}</p>
        </div>
      )}

      {product && <ProductCard product={product} />}
    </div>
  );
};
