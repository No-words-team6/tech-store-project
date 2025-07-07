import React, { useEffect, useState } from 'react';
import { getProductsByCategory } from '@/api';
import type { Category, Product } from '@/types';
import { ProductCard } from '../ProductCard';
import { Loader } from '../Loader';

interface Props {
  category: Category;
}

export const PageBodyTemplate: React.FC<Props> = ({ category }) => {
  const [data, setData] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setData([]);
    setIsLoading(true);

    getProductsByCategory(category)
      .then(setData)
      .catch(() => {
        setData([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [category]);

  return (
    <>
      {isLoading && <Loader />}

      {!isLoading && (
        <div className="grid grid grid-cols-4 gap-5">
          {data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
};
