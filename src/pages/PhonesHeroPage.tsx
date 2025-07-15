import { CatalogPageHeader } from '@/components/CatalogPageComponents/CatalogPageHeader';
import { CatalogPageRecomendationsSection } from '@/components/CatalogPageComponents/CatalogPageRecomendationsSection';
import { BrandSelectSection } from '@/components/CatalogPageComponents/BrandSelectSection';
import { useTranslation } from 'react-i18next';

const videoSources = [
  '/videos/phonesBanner-1.mp4',
  '/videos/phonesBanner-2.mp4',
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
    image: '/img/carousel-items/carousel-phone-2.webp',
    title: 'iPhone 13 Pro Max',
    to: 'apple-iphone-13-pro-max-1tb-gold',
    price: 1199,
    descriptionKey: 'phones-carousel.apple13.short',
  },
  {
    id: 2,
    name: 'Samsung',
    image: '/img/carousel-items/carousel-phone-3.webp',
    title: 'Samsung Galaxy S24',
    to: 'samsung-galaxy-s24-256gb-violet',
    price: 716,
    descriptionKey: 'phones-carousel.samsungS24.short',
  },
  {
    id: 3,
    name: 'Xiaomi',
    image: '/img/carousel-items/carousel-phone-4.webp',
    title: 'Xiaomi Redmi Note 14 Pro',
    to: 'xiaomi-redmi-note-14-pro-256gb-yellow',
    price: 429,
    descriptionKey: 'phones-carousel.redmi14.short',
  },
];

export const PhonesHeroPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <CatalogPageHeader
        title={t('mobile-phones')}
        videoSources={videoSources}
      />

      <CatalogPageRecomendationsSection carouselItems={phones} />

      <BrandSelectSection brandImageSources={brands} />
    </>
  );
};
