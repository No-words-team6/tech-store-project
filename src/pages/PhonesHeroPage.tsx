import { CatalogPageHeader } from '@/components/CatalogPageComponents/CatalogPageHeader';
import { CatalogPageRecomendationsSection } from '@/components/CatalogPageComponents/CatalogPageRecomendationsSection';
import { BrandSelectSection } from '@/components/CatalogPageComponents/BrandSelectSection';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

const videoSourcesDark = [
  '/videos/phonesBanner-1.mp4',
  '/videos/phonesBanner-2.mp4',
];

const videoSourcesLight = [
  '/videos/phonesBanner-1-light.mp4',
  '/videos/phonesBanner-1.mp4',
];

const brands = [
  { key: 'Apple', image: '/img/carousel-items/carousel-phone-3.webp' },
  { key: 'Samsung', image: '/img/carousel-items/carousel-phone-2.webp' },
  { key: 'Xiaomi', image: '/img/carousel-items/carousel-phone-4.webp' },
];

const phones = [
  {
    id: 1,
    name: 'Apple',
    image: '/img/carousel-items/carousel-phone-3.webp',
    title: 'iPhone 13 Pro Max',
    to: 'phones/apple-iphone-13-pro-max-1tb-gold',
    price: 1199,
    descriptionKey: 'phones-carousel.apple13.short',
  },
  {
    id: 2,
    name: 'Samsung',
    image: '/img/carousel-items/carousel-phone-2.webp',
    title: 'Samsung Galaxy S24',
    to: 'phones/samsung-galaxy-s24-256gb-violet',
    price: 716,
    descriptionKey: 'phones-carousel.samsungS24.short',
  },
  {
    id: 3,
    name: 'Xiaomi',
    image: '/img/carousel-items/carousel-phone-4.webp',
    title: 'Xiaomi Redmi Note 14 Pro',
    to: 'phones/xiaomi-redmi-note-14-pro-256gb-yellow',
    price: 429,
    descriptionKey: 'phones-carousel.redmi14.short',
  },
];

export const PhonesHeroPage = () => {
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
        title={t('mobile-phones')}
        videoSources={selectedVideoSources}
      />

      <CatalogPageRecomendationsSection carouselItems={phones} />

      <BrandSelectSection brandImageSources={brands} />
    </>
  );
};
