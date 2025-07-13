import { getProductById, getProducts } from '@/api';
import { BreadcrumbNav } from '@/components/common/BreadcrumbNav';
import { Loader } from '@/components/common/Loader';
import { ProductSlider } from '@/components/ProductSlider';
import type { Category, Item, Product } from '@/types';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NavBack } from '@/components/common/NavBack';
import { ProductGallery } from './components/ProductGallery';
import { ProductOptions } from './components/ProductOptions';
import { ProductDescription } from './components/ProductDescription';
import { ProductSpecs } from './components/ProductSpecs';
import { WidthContainer } from '@/components/WidthContainer';
import { PaddingContainer } from '@/components/PaddingContainer';
import { GridContainer } from '@/components/GridContainer';

const prepareRecomendationList = (data: Product[], limit: number) => {
  return [...data].sort(() => 0.5 - Math.random()).slice(0, limit);
};

export const ProductPage = () => {
  const location = useLocation();

  const pathParts = location.pathname.split('/');
  const category = pathParts[1] as Category;
  const itemId = pathParts[2];

  const [item, setItem] = useState<Item | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    setItem(null);
    setIsLoading(true);

    if (!category || !itemId) {
      return;
    }

    getProductById(category, itemId)
      .then((item) => {
        if (item?.images?.length) {
          setSelectedPhoto(item.images[0]);
        }
        setItem(item);
      })
      .catch(() => {
        setItem(null);
      })
      .finally(() => {
        setIsLoading(false);
      });

    getProducts()
      .then(setData)
      .finally(() => {});
  }, [itemId, category]);

  const photoSet: string[] = item?.images || [];
  const reccomendationsList = prepareRecomendationList(data, 10);

  const currentProduct = data.find((product) => product.itemId === item?.id);

  return (
    <WidthContainer>
      <PaddingContainer>
        <GridContainer>
          <BreadcrumbNav />
          <NavBack to={category} />
          {isLoading && !item && (
            <div className="col-span-4 sm:col-span-12 xl:col-span-24 flex justify-center items-center">
              <Loader />
            </div>
          )}

          {!isLoading && item && currentProduct && (
            <div className="col-span-4 sm:col-span-12 xl:col-span-24">
              <h1 className="col-span-4 sm:col-span-12 xl:col-span-24 font-mont font-bold text-white text-4xl mb-[40px]">
                {item.name}
              </h1>
              <div className="col-span-4 sm:col-span-12 xl:col-span-24 grid grid-cols-4 sm:grid-cols-12 xl:grid-cols-24 gap-x-[16px] gap-y-[56px] sm:gap-y-[64px] xl:gap-y-[80px]">
                <div className="col-span-4 sm:col-span-12 xl:col-span-24 grid grid-cols-4 sm:grid-cols-12 xl:grid-cols-24 gap-x-[16px]">
                  <ProductGallery
                    photoSet={photoSet}
                    selectedPhoto={selectedPhoto}
                    setSelectedPhoto={setSelectedPhoto}
                    item={item}
                  />

                  <ProductOptions item={item} product={currentProduct} />
                </div>

                <div className="col-span-4 sm:col-span-12 xl:col-span-24 grid grid-cols-4 sm:grid-cols-12 xl:grid-cols-24 gap-x-[16px] text-[#F1F2F9]">
                  <div className="col-span-4 sm:col-span-12 xl:col-span-12 flex flex-col gap-y-8">
                    <div>
                      <h2 className="text-[20px] sm:text-[22px] font-extrabold">
                        About
                      </h2>
                      <hr className="mt-4 w-full border-t border-[#3B3E4A]" />
                    </div>

                    <ProductDescription item={item} />
                  </div>

                  <div className="col-start-1 xl:col-start-14 col-span-4 sm:col-span-12 xl:col-span-11 flex flex-col mt-[56px] sm:mt-[64px] xl:mt-0">
                    <div>
                      <h2 className="text-[22px] font-extrabold">Tech specs</h2>
                      <hr className="mt-4 mb-[25px] w-full border-t border-[#3B3E4A]" />
                    </div>

                    <ProductSpecs item={item} />
                  </div>
                </div>

                <ProductSlider
                  productList={reccomendationsList}
                  title={'You may also like'}
                />
              </div>
            </div>
          )}
        </GridContainer>
      </PaddingContainer>
    </WidthContainer>
  );
};
