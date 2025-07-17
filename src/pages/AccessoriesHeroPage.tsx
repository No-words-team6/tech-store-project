import { CatalogPageHeader } from '@/components/CatalogPageComponents/CatalogPageHeader';
import { CatalogPageRecomendationsSection } from '@/components/CatalogPageComponents/CatalogPageRecomendationsSection';
import { useTranslation } from 'react-i18next';
import { BrandSelectSectionAccessories } from '@/components/CatalogPageComponents/BrandSelectSection/BrandSelectSectionAccessories';
import { useThemeStore } from '@/hooks/useThemeStore';
import { Loader } from '@/components/common/Loader';
import { useEffect } from 'react';
import { useProductStore } from '@/stores/productStore';

const videoSourcesDark = [
  '/videos/watchesBanner-1.mp4',
  '/videos/watchesBanner-1.mp4',
];

const videoSourcesLight = [
  '/videos/watchesBanner-1-light.mp4',
  '/videos/watchesBanner-1-light.mp4',
];

const smartwatches = [
  {
    id: 1,
    name: 'Apple',
    image: '/img/carousel-items/carousel-watch-apple-1.webp',
    title: 'Apple Watch Series 6',
    to: 'accessories/catalog/apple-watch-series-6-44mm-space-gray',
    price: 399,
    descriptionKey: 'smartwatches-carousel.apple6.short',
  },
  {
    id: 2,
    name: 'Samsung',
    image: '/img/carousel-items/carousel-watch-samsung-1.webp',
    title: 'Samsung Galaxy Watch 8 44mm',
    to: 'accessories/catalog/samsung-galaxy-watch-8-44mm-gray',
    price: 369,
    descriptionKey: 'smartwatches-carousel.galaxy8.short',
  },
  {
    id: 3,
    name: 'Xiaomi',
    image: '/img/carousel-items/carousel-watch-xiaomi-1.webp',
    title: 'Xiaomi Watch 2',
    to: 'accessories/catalog/xiaomi-watch-2-black',
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
  const isDark = useThemeStore((state) => state.isDark);

  const selectedVideoSources = isDark ? videoSourcesDark : videoSourcesLight;

  const isLoading = useProductStore((state) => state.isLoading);
  const startFakeLoading = useProductStore((state) => state.startFakeLoading);

  useEffect(() => {
    startFakeLoading();
  }, [startFakeLoading]);

  return (
    <>
      <CatalogPageHeader
        key={isDark ? 'dark' : 'light'}
        title={t('accessories')}
        videoSources={selectedVideoSources}
      />

      <CatalogPageRecomendationsSection carouselItems={smartwatches} />

      <BrandSelectSectionAccessories brandImageSources={brands} />

      {isLoading && <Loader />}
    </>
  );
};
