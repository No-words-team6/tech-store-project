import { CatalogPageHeader } from '@/components/CatalogPageComponents/CatalogPageHeader';
import { CatalogPageRecomendationsSection } from '@/components/CatalogPageComponents/CatalogPageRecomendationsSection';
import { useTranslation } from 'react-i18next';
import { BrandSelectSectionAccessories } from '@/components/CatalogPageComponents/BrandSelectSection/BrandSelectSectionAccessories';
import { useEffect, useState } from 'react';

const videoSourcesDark = [
  '/videos/watchesBanner-1.mp4',
  '/videos/watchesBanner-1.mp4',
];

const videoSourcesLight = [
  '/videos/phonesBanner-1-light.mp4',
  '/videos/watchesBanner-1.mp4',
];

const smartwatches = [
  {
    id: 1,
    name: 'Apple',
    image: '/img/carousel-items/carousel-watch-apple-1.webp',
    title: 'Apple Watch Series 6',
    to: 'accessories/apple-watch-series-6-44mm-spacegray',
    price: 399,
    descriptionKey: 'smartwatches-carousel.apple6.short',
  },
  {
    id: 2,
    name: 'Samsung',
    image: '/img/carousel-items/carousel-watch-samsung-1.webp',
    title: 'Samsung Galaxy Watch 8 44mm',
    to: 'accessories/samsung-galaxy-watch-8-44mm-gray',
    price: 369,
    descriptionKey: 'smartwatches-carousel.galaxy8.short',
  },
  {
    id: 3,
    name: 'Xiaomi',
    image: '/img/carousel-items/carousel-watch-xiaomi-1.webp',
    title: 'Xiaomi Watch 2',
    to: 'accessories/xiaomi-watch-2-black',
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
  const [isDark, setIsDark] = useState(() =>
    typeof window !== 'undefined' ?
      document.documentElement.classList.contains('dark') ||
      window.matchMedia('(prefers-color-scheme: dark)').matches
    : false,
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      setIsDark(isDarkMode);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const selectedVideoSources = isDark ? videoSourcesDark : videoSourcesLight;

  return (
    <>
      <CatalogPageHeader
        key={isDark ? 'dark' : 'light'}
        title={t('accessories')}
        videoSources={selectedVideoSources}
      />

      <CatalogPageRecomendationsSection carouselItems={smartwatches} />

      <BrandSelectSectionAccessories brandImageSources={brands} />
    </>
  );
};
