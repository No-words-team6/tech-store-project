import { BreadcrumbNav } from '@/components/common/BreadcrumbNav';
import { ProductCard } from '@/components/ProductCard';
import { useProductStore } from '@/stores/productStore';
import placeholder from '../../public/img/placeholder-angry-heart.png';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { Loader } from '@/components/common/Loader';

export const FavouritesPage = () => {
  const favouritesStore = useProductStore((state) => state.favouritesStore);
  const productsLength = favouritesStore.length;
  const isLoading = useProductStore((state) => state.isLoading);

  const startFakeLoading = useProductStore((state) => state.startFakeLoading);

  const { t } = useTranslation();

  useEffect(() => {
    startFakeLoading();
  }, [startFakeLoading]);

  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <div className="pt-[24px] pb-[80px]">
        <div className="px-4 sm:px-8 xl:px-0">
          <BreadcrumbNav />

          <div className="col-span-4 sm:col-span-12 xl:col-span-24 grid">
            <h1 className="col-span-4 sm:col-span-12 xl:col-span-24 text-link-hover-bg dark:text-dark-link-hover-bg font-mont font-bold text-[32px] sm:text-[48px]">
              {t('favourites')}
            </h1>

            <p className="col-span-4 sm:col-span-12 xl:col-span-24 font-extralight text-[14px] text-[#919a9e] dark:text-[#75767F]">
              {productsLength === 1 ?
                `${productsLength} ${t('item')}`
              : `${productsLength} ${t('items')}`}
            </p>

            {!productsLength && (
              <div className="col-span-4 sm:col-span-12 xl:col-span-24 grid grid-cols-4 sm:grid-cols-12 xl:grid-cols-24 place-items-center">
                <img
                  src={placeholder}
                  alt="empty bag"
                  className="col-span-2 sm:col-span-4 xl:col-span-4 col-start-2 sm:col-start-5 xl:col-start-11"
                />

                <h2 className="col-span-4 sm:col-span-6 xl:col-span-6 col-start-1 sm:col-start-4 xl:col-start-10 font-mont text-[#515151] sm:mt-[-20px]">
                  {t('empty-favourites')}
                </h2>
              </div>
            )}

            <div className="col-span-4 sm:col-span-12 xl:col-span-24 grid grid-cols-4 sm:grid-cols-12 xl:grid-cols-24 gap-x-[16px] gap-y-[40px] mt-6">
              {favouritesStore.map((product) => (
                <div className="col-span-6" key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>

          {isLoading && <Loader />}
        </div>
      </div>
    </div>
  );
};
