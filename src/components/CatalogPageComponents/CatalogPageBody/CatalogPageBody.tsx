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
import { GridContainer } from '@/components/containers/GridContainer';
import { PaddingContainer } from '@/components/containers/PaddingContainer';
import { WidthContainer } from '@/components/containers/WidthContainer';

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
  const searchQuery = useProductStore((state) => state.searchQuery);

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

  const filteredProducts = sortedProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

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
    filteredProducts.length,
    +selectedTimesItems,
  );

  const visibleItems = countVisibleItems(
    filteredProducts,
    +selectedTimesItems,
    +selectedPage,
  );

  useEffect(() => {
    const maxPage = Math.ceil(filteredProducts.length / +selectedTimesItems);
    if (+selectedPage > maxPage) {
      setSearchParams((prev) => {
        prev.set('numberOfPage', selectedPage);
        return prev;
      });
    }
  }, [+selectedPage, selectedTimesItems, filteredProducts.length]);

  useEffect(() => {
    fetchProductsByCategory(validCategory);
  }, [validCategory, fetchProductsByCategory]);

  if (!category || !allowedCategories.includes(category as Category)) {
    return <ErrorPage />;
  }
  return (
    <WidthContainer>
      <PaddingContainer>
        <GridContainer>
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
            <Paginator
              quantityPages={numberOfPages}
              currentPage={+selectedPage}
            />
          )}
        </GridContainer>
      </PaddingContainer>
    </WidthContainer>
  );
};
