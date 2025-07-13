import { WidthContainer } from '@/components/WidthContainer';
import { PaddingContainer } from '@/components/PaddingContainer';
import { GridContainer } from '@/components/GridContainer';
import { CatalogPageHeader } from '@/components/CatalogPageComponents/CatalogPageHeader';
import { CatalogPageBody } from '@/components/CatalogPageComponents/CatalogPageBody';
import { CatalogPageRecomendationsSection } from '@/components/CatalogPageComponents/CatalogPageRecomendationsSection';
import { BrandSelectSection } from '@/components/CatalogPageComponents/BrandSelectSection';

const videoSources = [
  '/videos/watchesBanner-1.mp4',
  '/videos/phonesBanner-2.mp4',
];

const smartwatches = [
  {
    id: 1,
    name: 'Apple',
    image: '/img/carousel-items/carousel-watch-apple-1.png',
    title: 'Apple Watch Series 6',
    to: 'apple-watch-series-6-44mm-spacegray',
    price: 399,
    shortDescription:
      'Advanced fitness tracking, blood oxygen sensor, and always-on Retina display in a classic design',
  },
  {
    id: 2,
    name: 'Samsung',
    image: '/img/carousel-items/carousel-watch-samsung-1.png',
    title: 'Samsung Galaxy Watch 8 44mm',
    to: 'samsung-galaxy-watch-8-44mm-gray',
    price: 369,
    shortDescription:
      'Elegant AMOLED display, powerful health sensors, long battery life and water resistance',
  },
  {
    id: 3,
    name: 'Xiaomi',
    image: '/img/carousel-items/carousel-watch-xiaomi-1.png',
    title: 'Xiaomi Watch 2',
    to: 'xiaomi-watch-2-black',
    price: 199,
    shortDescription:
      'Smart, lightweight, and stylish with advanced fitness features and up to 12 days battery life',
  },
];

const brands = [
  { key: 'Apple', image: '/img/carousel-items/carousel-watch-apple-1.png' },
  { key: 'Samsung', image: '/img/carousel-items/carousel-watch-samsung-1.png' },
  { key: 'Xiaomi', image: '/img/carousel-items/carousel-watch-xiaomi-1.png' },
];

export const AccessoriesCatalogPage = () => {
  return (
    <>
      <CatalogPageHeader title={'Accessories'} videoSources={videoSources} />

      <BrandSelectSection brandImageSources={brands} />

      <CatalogPageRecomendationsSection carouselItems={smartwatches} />

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
