import { CatalogPageBody } from '@/components/CatalogPageBody';
import { WidthContainer } from '@/components/WidthContainer';
import { GridContainer } from '@/components/GridContainer';
import { PaddingContainer } from '@/components/PaddingContainer';
import { CatalogPageHeader } from '@/components/CatalogPageHeader';
import { CategoryCardsSection } from './HomePage/components/CategoryCardsSection';
import { type carouselItem, PhoneCarousel } from '@/components/test1/test1';

const videoSources = [
  '/videos/phonesBanner-1.mp4',
  '/videos/phonesBanner-2.mp4',
  '/videos/phonesBanner-3.mp4',
];

const phones: carouselItem[] = [
  { id: 1, name: 'iPhone', image: '/img/carousel-items/carousel-phone-2.png' },
  { id: 2, name: 'Samsung', image: '/img/carousel-items/carousel-phone-3.png' },
  { id: 3, name: 'Xiaomi', image: '/img/carousel-items/carousel-phone-4.png' },
];

export const PhonesCatalogPage = () => {
  return (
    <>
      <CatalogPageHeader title={'Mobile phones'} videoSources={videoSources} />

      <div className="bg-black py-12 flex text-center justify-center text-white text-4xl">
        <h2>Choose your brand</h2>
      </div>

      <WidthContainer>
        <PaddingContainer>
          <GridContainer>
            <CategoryCardsSection />
          </GridContainer>
        </PaddingContainer>
      </WidthContainer>

      <div className="bg-black py-12 flex justify-center test text-white text-4xl gap-x-4 ">
        <h2>Охуенные новинки</h2>
        <PhoneCarousel carouselItems={phones} />
      </div>

      <WidthContainer>
        <PaddingContainer>
          <GridContainer>
            <div className="col-span-24 grid gap-y-[24px]">
              <CatalogPageBody category={'phones'} />
            </div>
          </GridContainer>
        </PaddingContainer>
      </WidthContainer>
    </>
  );
};
