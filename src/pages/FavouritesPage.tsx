import { BreadcrumbNav } from '@/components/common/BreadcrumbNav';
import { ProductCard } from '@/components/ProductCard';
import { useProductStore } from '@/stores/productStore';
import placeholder from '../../public/img/placeholder-angry-heart.png';
import { WidthContainer } from '@/components/WidthContainer';
import { PaddingContainer } from '@/components/PaddingContainer';
import { GridContainer } from '@/components/GridContainer';
import { useTranslation } from 'react-i18next';

export const FavouritesPage = () => {
  const favouritesStore = useProductStore((state) => state.favouritesStore);
  const productsLength = favouritesStore.length;

  const { t } = useTranslation();

  return (
    <>
      <WidthContainer>
        <PaddingContainer>
          <GridContainer>
            <BreadcrumbNav />

            <div className="col-span-24 grid">
              <h1 className="col-span-24 color-white font-mont font-bold text-5xl mb-6">
                {t('favourites')}
              </h1>

              <p className="col-span-24 font-extralight text-[14px] text-[#75767F]">
                {productsLength === 1 ?
                  `${productsLength} ${t('item')}`
                : `${productsLength} ${t('items')}`}
              </p>

              {!productsLength && (
                <div className="col-span-24 grid grid-cols-24 place-items-center">
                  <img
                    src={placeholder}
                    alt="empty bag"
                    className="col-span-4 col-start-11"
                  />

                  <h2 className="col-span-6 col-start-10 font-mont text-[#515151] mt-[-20px]">
                    {t('empty-favourites')}
                  </h2>
                </div>
              )}

              <div className="col-span-24 grid grid-cols-24 gap-x-[16px] gap-y-[40px] mt-6">
                {favouritesStore.map((product) => (
                  <div className="col-span-6" key={product.id}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>
          </GridContainer>
        </PaddingContainer>
      </WidthContainer>
    </>
  );
};
