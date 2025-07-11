import './homePage.css';
import { useEffect } from 'react';
import { ProductSlider } from '@/components/ProductSlider';
import { useProductStore } from '@/stores/productStore';
import { CategoryCardsSection } from './components/CategoryCardsSection';
import { BannerSliderSection } from './components/BannerSliderSection';
import { PaddingContainer } from '@/components/PaddingContainer';
import { GridContainer } from '@/components/GridContainer';
import { WidthContainer } from '@/components/WidthContainer';

export const HomePage = () => {
  const fetchAllProducts = useProductStore((state) => state.fetchAllProducts);
  const newestList = useProductStore((state) => state.newestList);
  const cheapestList = useProductStore((state) => state.cheapestList);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  return (
    <WidthContainer>
      <PaddingContainer>
        <GridContainer>
          <div className="grid grid-cols-4 sm:grid-cols-12 xl:grid-cols-24 col-span-4 sm:col-span-12 xl:col-span-24 gap-y-14 sm:gap-y-16 xl:gap-y-20 gap-x-[16px] pt-0 sm:pt-2 xl:pt-8">
            <h1 className="w-full color-white font-mont font-extrabold text-[32px] sm:text-5xl col-span-4 sm:col-span-12 xl:col-span-24">
              Welcome to Nice Gadgets store!
            </h1>

            <BannerSliderSection />

            <ProductSlider
              productList={newestList}
              title={'Brand new models'}
            />

            <CategoryCardsSection />

            <ProductSlider productList={cheapestList} title={'Hot prices'} />
          </div>
        </GridContainer>
      </PaddingContainer>
    </WidthContainer>
  );
};
