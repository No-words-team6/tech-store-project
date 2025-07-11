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
          <div className="col-span-24 grid grid-cols-24 pt-[56px] pb-[80px] gap-x-[16px] gap-y-[80px]">
            <h1 className="col-span-24 color-white font-mont font-bold text-5xl">
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
