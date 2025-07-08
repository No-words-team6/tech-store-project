import React, { useEffect, useState } from 'react';
import { getProductsByCategory } from '@/api';
import { type Category, type Product } from '@/types';
import { ProductCard } from '../ProductCard';
import { Loader } from '../Loader';
import { SortBar } from '../SortBar';
import { useSearchParams } from 'react-router-dom';
import { sortProducts } from '@/utils/sortProducts';

interface Props {
  category: Category;
}

export const CatalogPageBody: React.FC<Props> = ({ category }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams] = useSearchParams();
  const selectedSortBy = searchParams.get('sortBy') ?? '';
  const selectedTimesItems = searchParams.get('timesItems') ?? '';

  const sortedProducts = sortProducts(products, {
    selectedSortBy,
    selectedTimesItems,
  });

  useEffect(() => {
    setProducts([]);
    setIsLoading(true);

    getProductsByCategory(category)
      .then(setProducts)
      .catch(() => {
        setProducts([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [category]);

  return (
    <div className="col-span-24 grid grid-cols-24 gap-[24px]">
      {!isLoading && <SortBar />}

      {isLoading && <Loader />}

      {!isLoading && (
        <div className="col-span-24 grid grid-cols-24 gap-x-[24px] gap-y-[40px]">
          {sortedProducts.map((product) => (
            <div className="col-span-6" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
