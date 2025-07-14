import { CatalogPageHeader } from '@/components/CatalogPageComponents/CatalogPageHeader';
import { CatalogPageRecomendationsSection } from '@/components/CatalogPageComponents/CatalogPageRecomendationsSection';
import { BrandSelectSection } from '@/components/CatalogPageComponents/BrandSelectSection';

const videoSources = [
  '/videos/tabletsBanner-1.mp4',
  '/videos/tabletsBanner-2.mp4',
];

const brands = [
  { key: 'Apple', image: '/img/carousel-items/carousel-tablet-apple-1.webp' },
  {
    key: 'Samsung',
    image: '/img/carousel-items/carousel-tablet-samsung-1.webp',
  },
  { key: 'Xiaomi', image: '/img/carousel-items/carousel-tablet-xiaomi-1.webp' },
];

const tablets = [
  {
    id: 1,
    name: 'Apple',
    image: '/img/carousel-items/carousel-tablet-apple-1.webp',
    title: 'Apple iPad Pro 12.9',
    to: 'apple-ipad-pro-2022-12-9-1tb-spacegray',
    price: 1599,
    shortDescription:
      'The ultimate iPad for creatives and professionals with an M2 chip and Liquid Retina XDR display',
  },
  {
    id: 2,
    name: 'Samsung',
    image: '/img/carousel-items/carousel-tablet-samsung-1.webp',
    title: 'Samsung Galaxy Tab S10 Ultra',
    to: 'samsung-galaxy-tab-s10-ultra-x926-1tb-moonstone-gray',
    price: 1299,
    shortDescription:
      'Premium Android tablet with 16GB RAM, 1TB storage, and stunning 14.6" AMOLED display',
  },
  //  Samsung Galaxy Tab S10 Ultra 5G X926 16GB/1TB Moonstone Gray

  {
    id: 3,
    name: 'Xiaomi',
    image: '/img/carousel-items/carousel-tablet-xiaomi-1.webp',
    title: 'Xiaomi Redmi Pad 2',
    to: 'xiaomi-redmi-pad-2-128gb-gray',
    price: 189,
    shortDescription:
      'Affordable and stylish tablet with 10.95" display, smooth performance, and long battery life',
  },
];

export const TabletsHeroPage = () => {
  return (
    <>
      <CatalogPageHeader title={'Tablets'} videoSources={videoSources} />

      <CatalogPageRecomendationsSection carouselItems={tablets} />

      <BrandSelectSection brandImageSources={brands} />
    </>
  );
};
