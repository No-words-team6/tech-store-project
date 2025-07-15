import { CatalogPageHeader } from '@/components/CatalogPageComponents/CatalogPageHeader';
import { CatalogPageRecomendationsSection } from '@/components/CatalogPageComponents/CatalogPageRecomendationsSection';
import { BrandSelectSection } from '@/components/CatalogPageComponents/BrandSelectSection';
import { useTranslation } from 'react-i18next';

const videoSources = [
  '/videos/watchesBanner-1.mp4',
  '/videos/watchesBanner-1.mp4',
];

const smartwatches = [
  {
    id: 1,
    name: 'Apple',
    image: '/img/carousel-items/carousel-watch-apple-1.webp',
    title: 'Apple Watch Series 6',
    to: 'apple-watch-series-6-44mm-spacegray',
    price: 399,
    descriptionKey: 'smartwatches-carousel.apple6.short',
  },
  {
    id: 2,
    name: 'Samsung',
    image: '/img/carousel-items/carousel-watch-samsung-1.webp',
    title: 'Samsung Galaxy Watch 8 44mm',
    to: 'samsung-galaxy-watch-8-44mm-gray',
    price: 369,
    descriptionKey: 'smartwatches-carousel.galaxy8.short',
  },
  {
    id: 3,
    name: 'Xiaomi',
    image: '/img/carousel-items/carousel-watch-xiaomi-1.webp',
    title: 'Xiaomi Watch 2',
    to: 'xiaomi-watch-2-black',
    price: 199,
    descriptionKey: 'smartwatches-carousel.watch2.short',
  },
];

const brands = [
  { key: 'Apple', image: '/img/carousel-items/carousel-watch-apple-1.webp' },
  {
    key: 'Samsung',
    image: '/img/carousel-items/carousel-watch-samsung-1.webp',
  },
  { key: 'Xiaomi', image: '/img/carousel-items/carousel-watch-xiaomi-1.webp' },
];

export const AccessoriesHeroPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <CatalogPageHeader title={t('accessories')} videoSources={videoSources} />

      <CatalogPageRecomendationsSection carouselItems={smartwatches} />

      <BrandSelectSection brandImageSources={brands} />
    </>
  );
};
