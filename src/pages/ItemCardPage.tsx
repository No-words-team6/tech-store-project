import { getProductById, getProducts } from '@/api';
import { BreadcrumbNav } from '@/components/BreadcrumbNav';
import { ItemDescription } from '@/components/ItemDescription';
import { Loader } from '@/components/Loader';
import { ProductGallery } from '@/components/ProductGallery';
import { ProductOptions } from '@/components/ProductOptions/ProductOptions';
import { ProductSlider } from '@/components/ProductSlider';
import { ProductSpecs } from '@/components/ProductSpecs';
import type { Category, Item, Product } from '@/types';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NavBack } from '@/components/NavBack';

const prepareRecomendationList = (data: Product[], limit: number) => {
  return [...data].sort(() => 0.5 - Math.random()).slice(0, limit);
};

export const ItemCardPage = () => {
  const location = useLocation();

  const pathParts = location.pathname.split('/');
  const category = pathParts[1] as Category;
  const itemId = pathParts[2];

  const [item, setItem] = useState<Item | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [data, setData] = useState<Product[]>([]);
  const [isListLoading, setIsListLoading] = useState(false);

  useEffect(() => {
    setItem(null);
    setIsLoading(true);
    setIsListLoading(true);

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
      .finally(() => {
        setIsListLoading(false);
      });
  }, [itemId, category]);

  const photoSet: string[] = item?.images || [];
  const reccomendationsList = prepareRecomendationList(data, 4);

  return (
    <>
      <BreadcrumbNav />

      <NavBack to={category} />

      {isLoading && !item && (
        <div className="col-span-24 flex justify-center items-center">
          <Loader />
        </div>
      )}

      {!isLoading && item && (
        <div className="col-span-24">
          <h1 className="col-span-24 font-mont font-bold text-white text-4xl mb-[40px]">
            {item.name}
          </h1>
          <div className="col-span-24 grid grid-cols-24 gap-x-[16px] gap-y-[80px]">
            <div className="col-span-24 grid grid-cols-24 gap-x-[16px]">
              <ProductGallery
                photoSet={photoSet}
                selectedPhoto={selectedPhoto}
                setSelectedPhoto={setSelectedPhoto}
                item={item}
              />

              <ProductOptions item={item} />
            </div>

            <div className="col-span-24 grid grid-cols-24 gap-x-[16px] text-[#F1F2F9]">
              <div className="col-span-12 flex flex-col gap-y-8">
                <div>
                  <h2 className="text-[22px] font-extrabold">About</h2>
                  <hr className="mt-4 w-full border-t border-[#3B3E4A]" />
                </div>

                <ItemDescription item={item} />
              </div>

              <div className="col-start-14 col-span-11 flex flex-col">
                <div>
                  <h2 className="text-[22px] font-extrabold">Tech specs</h2>
                  <hr className="mt-4 mb-[25px] w-full border-t border-[#3B3E4A]" />
                </div>

                <ProductSpecs item={item} />
              </div>
            </div>

            <ProductSlider
              productList={reccomendationsList}
              isLoading={isListLoading}
              title={'You may also like'}
            />
          </div>
        </div>
      )}
    </>
  );
};
