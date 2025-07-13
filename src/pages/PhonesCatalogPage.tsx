import { CatalogPageHeader } from '@/components/CatalogPageComponents/CatalogPageHeader';
import { CatalogPageBody } from '@/components/CatalogPageComponents/CatalogPageBody';
import { CatalogPageRecomendationsSection } from '@/components/CatalogPageComponents/CatalogPageRecomendationsSection';
import { BrandSelectSection } from '@/components/CatalogPageComponents/BrandSelectSection';

const videoSources = [
  '/videos/phonesBanner-1.mp4',
  '/videos/phonesBanner-2.mp4',
  '/videos/phonesBanner-3.mp4',
];

const brands = [
  { key: 'Apple', image: '/img/carousel-items/carousel-phone-3.png' },
  { key: 'Samsung', image: '/img/carousel-items/carousel-phone-2.png' },
  { key: 'Xiaomi', image: '/img/carousel-items/carousel-phone-4.png' },
];

const phones = [
  {
    id: 1,
    name: 'Apple',
    image: '/img/carousel-items/carousel-phone-2.png',
    title: 'iPhone 13 Pro Max',
    to: 'apple-iphone-13-pro-max-1tb-gold',
    price: 1199,
    shortDescription: 'Flagship iPhone with top-tier camera and performance',
  },
  {
    id: 2,
    name: 'Samsung',
    image: '/img/carousel-items/carousel-phone-3.png',
    title: 'Samsung Galaxy S24',
    to: 'samsung-galaxy-s24-256gb-violet',
    price: 716,
    shortDescription: 'Latest Galaxy with powerful AI and Pro-grade camera',
  },
  {
    id: 3,
    name: 'Xiaomi',
    image: '/img/carousel-items/carousel-phone-4.png',
    title: 'Xiaomi Redmi Note 14 Pro',
    to: 'xiaomi-redmi-note-14-pro-256gb-yellow',
    price: 429,
    shortDescription: 'Affordable flagship with 200MP camera and fast charging',
  },
];

export const PhonesCatalogPage = () => {
  return (
    <>
      <CatalogPageHeader title={'Mobile phones'} videoSources={videoSources} />

      <BrandSelectSection brandImageSources={brands} />

      <CatalogPageRecomendationsSection carouselItems={phones} />

      <CatalogPageBody category={'phones'} />
    </>
  );
};
