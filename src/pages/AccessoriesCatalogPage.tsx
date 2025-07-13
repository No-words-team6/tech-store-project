import { WidthContainer } from '@/components/WidthContainer';
import { PaddingContainer } from '@/components/PaddingContainer';
import { GridContainer } from '@/components/GridContainer';
import { CatalogPageHeader } from '@/components/CatalogPageComponents/CatalogPageHeader';
import { CatalogPageBody } from '@/components/CatalogPageComponents/CatalogPageBody';
import { CatalogPageRecomendationsSection } from '@/components/CatalogPageComponents/CatalogPageRecomendationsSection';
import { PreviewSection } from '@/components/CatalogPageComponents/PriviewSection';
import { BrandSelectSection } from '@/components/CatalogPageComponents/BrandSelectSection';

const videoSources = [
  '/videos/watchesBanner-1.mp4',
  '/videos/phonesBanner-2.mp4',
];

const watches = [
  {
    id: 1,
    name: 'Apple',
    image: '/img/carousel-items/carousel-watch-apple-1.png',
  },
  {
    id: 2,
    name: 'Samsung',
    image: '/img/carousel-items/carousel-watch-samsung-1.png',
  },
  // Смарт-годинник Samsung Galaxy Watch 8 44mm SM-L330 Gray
  {
    id: 3,
    name: 'Xiaomi',
    image: '/img/carousel-items/carousel-watch-xiaomi-1.png',
  },
];

const sources = {
  apple: '/img/carousel-items/carousel-watch-apple-1.png',
  samsung: '/img/carousel-items/carousel-watch-samsung-1.png',
  xiaomi: '/img/carousel-items/carousel-watch-xiaomi-1.png',
};

export const AccessoriesCatalogPage = () => {
  return (
    <>
      <CatalogPageHeader title={'Accessories'} videoSources={videoSources} />

      <PreviewSection />

      <BrandSelectSection brandImageSources={sources} />

      <CatalogPageRecomendationsSection carouselItems={watches} />

      <WidthContainer>
        <PaddingContainer>
          <GridContainer>
            <div className="col-span-24 grid gap-y-[24px]">
              <CatalogPageBody category={'accessories'} />
            </div>
          </GridContainer>
        </PaddingContainer>
      </WidthContainer>
    </>
  );
};
