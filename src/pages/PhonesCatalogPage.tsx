import { CatalogPageHeader } from '@/components/CatalogPageComponents/CatalogPageHeader';
import { CatalogPageBody } from '@/components/CatalogPageComponents/CatalogPageBody';
import { CatalogPageRecomendationsSection } from '@/components/CatalogPageComponents/CatalogPageRecomendationsSection';
import { PreviewSection } from '@/components/CatalogPageComponents/PriviewSection';
import { BrandSelectSection } from '@/components/CatalogPageComponents/BrandSelectSection';

const videoSources = [
  '/videos/phonesBanner-1.mp4',
  '/videos/phonesBanner-2.mp4',
  '/videos/phonesBanner-3.mp4',
];

const phones = [
  { id: 1, name: 'Apple', image: '/img/carousel-items/carousel-phone-2.png' },
  { id: 2, name: 'Samsung', image: '/img/carousel-items/carousel-phone-3.png' },
  { id: 3, name: 'Xiaomi', image: '/img/carousel-items/carousel-phone-4.png' },
];

const sources = {
  apple: '/img/carousel-items/carousel-phone-3.png',
  samsung: '/img/carousel-items/carousel-phone-2.png',
  xiaomi: '/img/carousel-items/carousel-phone-4.png',
};

export const PhonesCatalogPage = () => {
  return (
    <>
      <CatalogPageHeader title={'Mobile phones'} videoSources={videoSources} />

      <PreviewSection />

      <BrandSelectSection brandImageSources={sources} />

      <CatalogPageRecomendationsSection carouselItems={phones} />

      <CatalogPageBody category={'phones'} />
    </>
  );
};
