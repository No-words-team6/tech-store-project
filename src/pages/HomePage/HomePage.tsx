import './homePage.css';
import { useEffect } from 'react';
import { ProductSlider } from '@/components/ProductSlider';
import { useProductStore } from '@/stores/productStore';
import { CategoryCardsSection } from './components/CategoryCardsSection';
import { PaddingContainer } from '@/components/containers/PaddingContainer';
import { GridContainer } from '@/components/containers/GridContainer';
import { WidthContainer } from '@/components/containers/WidthContainer';
import { MainSliderSection } from './components/MainSliderSection';
import { useTranslation } from 'react-i18next';
import { Loader } from '@/components/common/Loader';

export const HomePage = () => {
  const fetchAllProducts = useProductStore((state) => state.fetchAllProducts);
  const newestList = useProductStore((state) => state.newestList);
  const cheapestList = useProductStore((state) => state.cheapestList);
  const isLoading = useProductStore((state) => state.isLoading);

  const { t } = useTranslation();

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  return (
    <>
      <MainSliderSection />
      <WidthContainer>
        <PaddingContainer>
          <GridContainer>
            <div className="grid grid-cols-4 sm:grid-cols-12 xl:grid-cols-24 col-span-4 sm:col-span-12 xl:col-span-24 gap-y-14 sm:gap-y-16 xl:gap-y-20 gap-x-[16px] pt-0 sm:pt-2 xl:pt-8">
              <ProductSlider productList={newestList} title={t('new-models')} />

              <CategoryCardsSection />

              <ProductSlider
                productList={cheapestList}
                title={t('hot-prices')}
              />
            </div>
          </GridContainer>
        </PaddingContainer>
      </WidthContainer>

      {isLoading && <Loader />}
    </>
  );
};
