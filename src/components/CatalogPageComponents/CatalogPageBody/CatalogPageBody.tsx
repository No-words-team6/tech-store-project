import React, { useEffect, useState } from 'react';
import { type Category, type Product } from '@/types';
import { useSearchParams } from 'react-router-dom';
import { sortProducts } from '@/utils/sortProducts';
import { TimesItems } from '@/types/TimesItems';
import { useProductStore } from '@/stores/productStore';
import { CatalogBar } from '@/components/CatalogBar';
import { ProductCard } from '@/components/ProductCard';
import { Paginator } from '@/components/Paginator';

interface Props {
  category: Category;
}

export const CatalogPageBody: React.FC<Props> = ({ category }) => {
  const products = useProductStore((state) => state.products);
  const isLoading = useProductStore((state) => state.isLoading);
  const fetchProductsByCategory = useProductStore(
    (state) => state.fetchProductsByCategory,
  );

  const [searchParams] = useSearchParams();
  const selectedSortBy = searchParams.get('sortBy') ?? '';
  const selectedTimesItems =
    searchParams.get('timesItems') ?? TimesItems.Twelve;
  const selectedPage = searchParams.get('numberOfPage') ?? '1';

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
    fetchProductsByCategory(category);
  }, [category, fetchProductsByCategory]);

  return (
    <div className="w-full max-w-[1200px] grid grid-cols-4 sm:grid-cols-12 xl:grid-cols-24 col-span-4 sm:col-span-12 xl:col-span-24 px-4 sm:px-6 lg:px-8 xl:px-auto pt-[24px] pb-[80px] gap-x-[16px] gap-y-[24px]">
      <CatalogBar />

      {!isLoading && (
        <div className="grid grid-cols-4 sm:grid-cols-12 xl:grid-cols-24 col-span-4 sm:col-span-12 xl:col-span-24 gap-x-[16px] gap-y-[40px]">
          {visibleItems.map((product) => (
            <div className="col-span-4 sm:col-span-6" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}

      {!isLoading && (
        <Paginator quantityPages={numberOfPages} currentPage={+selectedPage} />
      )}
    </div>
  );
};
