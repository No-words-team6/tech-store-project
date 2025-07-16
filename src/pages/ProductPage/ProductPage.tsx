import { BreadcrumbNav } from '@/components/common/BreadcrumbNav';
import { Loader } from '@/components/common/Loader';
import { ProductSlider } from '@/components/ProductSlider';
import type { Category, Item, Product } from '@/types';
import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NavBack } from '@/components/common/NavBack';
import { ProductGallery } from './components/ProductGallery';
import { ProductOptions } from './components/ProductOptions';
import { ProductDescription } from './components/ProductDescription';
import { ProductSpecs } from './components/ProductSpecs';
import { WidthContainer } from '@/components/containers/WidthContainer';
import { PaddingContainer } from '@/components/containers/PaddingContainer';
import { GridContainer } from '@/components/containers/GridContainer';
import { useTranslation } from 'react-i18next';
import { getProductById, getProducts } from '@/api';
import { useProductPageStore } from '@/stores/productPageStore';

const prepareRecomendationList = (data: Product[], limit: number) => {
  return [...data].sort(() => 0.5 - Math.random()).slice(0, limit);
};

export const ProductPage = () => {
  const location = useLocation();

  const pathParts = location.pathname.split('/');
  const category = pathParts[1] as Category;
  const itemId = pathParts[3];

  const [product, setProduct] = useState<null | Product>(null);
  const [currentItem, setCurrentItem] = useState<null | Item>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [itemVariants, setItemVariants] = useState<Item[]>([]);

  const [currentPhoto, setCurrentPhoto] = useState<string | null>(null);

  const data = useProductPageStore((state) => state.data);
  const getData = useProductPageStore((state) => state.getData);

  const reccomendationsList = useMemo(() => {
    if (!currentItem || !data.length) return [];

    return prepareRecomendationList(
      data.filter((p) => p.itemId !== currentItem.id),
      10,
    );
  }, [currentItem?.namespaceId, data]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setIsLoading(true);
    if (!data.length) {
      getProducts().then((allProducts) => {
        const prod = allProducts.find((p) => p.itemId === itemId) ?? null;
        setProduct(prod);
      });
    } else {
      const prod = data.find((p) => p.itemId === itemId) ?? null;
      setProduct(prod);
    }

    if (itemVariants.length > 0) {
      const nextItem = itemVariants.find((it) => it.id === itemId);
      if (nextItem) {
        setCurrentItem(nextItem);
        setCurrentPhoto(nextItem.images?.[0] || null);
        setIsLoading(false);
        return;
      }
    }

    getProductById(category, itemId).then((item) => {
      setCurrentItem(item ?? null);
      if (item) {
        setCurrentPhoto(item.images?.[0] || null);
        fetch(`/gadgets/${category}.json`)
          .then((res) => res.json())
          .then((allItems: Item[]) => {
            const variants = allItems.filter(
              (it) => it.namespaceId === item.namespaceId,
            );
            setItemVariants(variants);
          })
          .finally(() => setIsLoading(false));
      } else {
        setIsLoading(false);
      }
    });
  }, [itemId, category]);
  const { t } = useTranslation();

  return (
    <WidthContainer>
      <PaddingContainer>
        <GridContainer>
          <BreadcrumbNav />
          <NavBack />
          {isLoading && (
            <div className="col-span-4 sm:col-span-12 xl:col-span-24 flex justify-center items-center">
              <Loader />
            </div>
          )}

          {!isLoading && currentItem && (
            <div className="col-span-4 sm:col-span-12 xl:col-span-24">
              <h1 className="col-span-4 sm:col-span-12 xl:col-span-24 font-mont font-bold text-link-hover-bg dark:text-dark-link-hover-bg text-4xl mb-[40px]">
                {currentItem.name}
              </h1>
              <div className="col-span-4 sm:col-span-12 xl:col-span-24 grid grid-cols-4 sm:grid-cols-12 xl:grid-cols-24 gap-x-[16px] gap-y-[56px] sm:gap-y-[64px] xl:gap-y-[80px]">
                <div className="col-span-4 sm:col-span-12 xl:col-span-24 grid grid-cols-4 sm:grid-cols-12 xl:grid-cols-24 gap-x-[16px]">
                  <ProductGallery
                    photoSet={currentItem.images}
                    currentPhoto={currentPhoto}
                    setCurrentPhoto={setCurrentPhoto}
                    item={currentItem}
                  />

                  <ProductOptions
                    item={currentItem}
                    product={product}
                    variants={itemVariants}
                    setCurrentItem={setCurrentItem}
                  />
                </div>

                <div className="col-span-4 sm:col-span-12 xl:col-span-24 grid grid-cols-4 sm:grid-cols-12 xl:grid-cols-24 gap-x-[16px] text-link-hover-bg dark:text-dark-link-hover-bg">
                  <div className="col-span-4 sm:col-span-12 xl:col-span-12 flex flex-col gap-y-8">
                    <div>
                      <h2 className="text-[20px] sm:text-[22px] font-extrabold">
                        {t('About')}
                      </h2>
                      <hr className="mt-4 w-full border-t border-[#E2E6E9] dark:border-[#3B3E4A]" />
                    </div>

                    <ProductDescription item={currentItem} />
                  </div>

                  <div className="col-start-1 xl:col-start-14 col-span-4 sm:col-span-12 xl:col-span-11 flex flex-col mt-[56px] sm:mt-[64px] xl:mt-0">
                    <div>
                      <h2 className="text-[22px] font-extrabold">
                        {t('Tech-specs')}
                      </h2>
                      <hr className="mt-4 mb-[25px] w-full border-t border-[#E2E6E9] dark:border-[#3B3E4A]" />
                    </div>

                    <ProductSpecs item={currentItem} />
                  </div>
                </div>

                <ProductSlider
                  productList={reccomendationsList}
                  title={t('You-may-like')}
                />
              </div>
            </div>
          )}
        </GridContainer>
      </PaddingContainer>
    </WidthContainer>
  );
};
