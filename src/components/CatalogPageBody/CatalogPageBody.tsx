import React, { useEffect, useState } from 'react';
import { getProductsByCategory } from '@/api';
import { type Category, type Product } from '@/types';
import { ProductCard } from '../ProductCard';
import { Loader } from '../Loader';
import { SortBar } from '../SortBar';
import { useSearchParams } from 'react-router-dom';
import { sortProducts } from '@/utils/sortProducts';
import { Paginator } from '../Paginator';
import { TimesItems } from '@/types/TimesItems';

interface Props {
  category: Category;
}

export const CatalogPageBody: React.FC<Props> = ({ category }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams] = useSearchParams();
  const selectedSortBy = searchParams.get('sortBy') ?? '';
  const selectedTimesItems =
    searchParams.get('timesItems') ?? TimesItems.Twelve;
  const [currentPage, setCurrentPage] = useState(1);

  const sortedProducts = sortProducts(products, {
    selectedSortBy,
    selectedTimesItems,
  });

  const quantityPages = (arrLenght: number, itemInOnePAge: number) => {
    let timePages: number[] = [];
    const howManyPages = Math.ceil(arrLenght / itemInOnePAge);
    for (let i = 1; i <= howManyPages; i++) {
      timePages = [...timePages, i];
    }

    return timePages;
  };

  const countVisibleItems = (
    items: Product[],
    timesItems: number,
    currentPage: number,
  ) => {
    return items.filter((_, idx) => {
      const lastElementInPage = timesItems * currentPage;
      const firstElementInPage = lastElementInPage - timesItems;

      return idx >= firstElementInPage && idx < lastElementInPage;
    });
  };

  const numberOfPages = quantityPages(
    sortedProducts.length,
    +selectedTimesItems,
  );

  const visibleItems = countVisibleItems(
    sortedProducts,
    +selectedTimesItems,
    currentPage,
  );

  useEffect(() => {
    const maxPage = Math.ceil(sortedProducts.length / +selectedTimesItems);
    if (currentPage > maxPage) {
      setCurrentPage(1);
    }
  }, [currentPage, selectedTimesItems, sortedProducts.length]);

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
        <div className="col-span-24 grid grid-cols-24 gap-x-[16px] gap-y-[40px]">
          {visibleItems.map((product) => (
            <div className="col-span-6" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}

      {!isLoading && (
        <Paginator
          quantityPages={numberOfPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};
