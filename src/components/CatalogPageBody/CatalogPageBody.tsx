import React, { useEffect, useState } from 'react';
import { getProductsByCategory } from '@/api';
import type { Category, Product } from '@/types';
import { ProductCard } from '../ProductCard';
import { Loader } from '../Loader';
import { SelectorSortBy } from '../SelectorSortBy';
import { SelectorTimesItems } from '../SelectorItemsOnPage';

interface Props {
  category: Category;
}

export const CatalogPageBody: React.FC<Props> = ({ category }) => {
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
    <div className="col-span-24 grid grid-cols-24 gap-[24px]">
      <div className="col-span-24 flex gap-x-2">
        <SelectorSortBy title="Sort by" selectorWidth="w-44" />

        <SelectorTimesItems title="Items on page" selectorWidth="w-32" />
      </div>

      {isLoading && <Loader />}

      {!isLoading && (
        <div className="col-span-24 grid grid-cols-24 gap-x-[24px] gap-y-[40px]">
          {data.map((product) => (
            <div className="col-span-6" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
