import { useEffect } from 'react';
import { type Product } from '@/types';
import { useLocation, useSearchParams } from 'react-router-dom';
import { TimesItems } from '@/types/TimesItems';
import { useProductStore } from '@/stores/productStore';
import { CatalogBar } from '@/components/CatalogBar';
import { ProductCard } from '@/components/ProductCard';
import { Paginator } from '@/components/Paginator';
import { prepareProductList } from '@/utils/prepareProductList';
import { BreadcrumbNav } from '@/components/common/BreadcrumbNav';
import { ErrorPage } from '@/pages/ErrorPage';

const allowedCategories = ['phones', 'tablets', 'accessories'] as const;
type Category = (typeof allowedCategories)[number];

export const CatalogPageBody = () => {
  const products = useProductStore((state) => state.products);
  const isLoading = useProductStore((state) => state.isLoading);
  const fetchProductsByCategory = useProductStore(
    (state) => state.fetchProductsByCategory,
  );

  const { pathname } = useLocation();
  const category = pathname.split('/')[1];

  const validCategory = category as Category;

  const [searchParams, setSearchParams] = useSearchParams();
  const selectedPage = searchParams.get('numberOfPage') ?? '1';
  const selectedBrand = searchParams.get('brand') ?? 'All';
  const selectedSortBy = searchParams.get('sortBy') ?? '';
  const selectedTimesItems =
    searchParams.get('timesItems') ?? TimesItems.Twelve;

  const sortedProducts = prepareProductList(products, {
    selectedSortBy,
    selectedTimesItems,
    selectedBrand,
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
    +selectedPage,
  );

  useEffect(() => {
    const maxPage = Math.ceil(sortedProducts.length / +selectedTimesItems);
    if (+selectedPage > maxPage) {
      setSearchParams((prev) => {
        prev.set('numberOfPage', selectedPage);
        return prev;
      });
    }
  }, [+selectedPage, selectedTimesItems, sortedProducts.length]);

  useEffect(() => {
    fetchProductsByCategory(validCategory);
  }, [validCategory, fetchProductsByCategory]);

  if (!category || !allowedCategories.includes(category as Category)) {
    return <ErrorPage />;
  }
  return (
    <div className="w-full max-w-[1200px] grid grid-cols-4 sm:grid-cols-12 xl:grid-cols-24 col-span-4 sm:col-span-12 xl:col-span-24 xl:mx-auto pt-[24px] pb-[80px] gap-x-[16px] gap-y-[24px] px-4 sm:px-8 xl:px-0">
      <BreadcrumbNav />

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
