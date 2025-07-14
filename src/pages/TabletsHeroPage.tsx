import { CatalogPageHeader } from '@/components/CatalogPageComponents/CatalogPageHeader';
import { CatalogPageRecomendationsSection } from '@/components/CatalogPageComponents/CatalogPageRecomendationsSection';
import { BrandSelectSection } from '@/components/CatalogPageComponents/BrandSelectSection';
import { useTranslation } from 'react-i18next';

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
    descriptionKey: 'tablets-carousel.ipadPro12.short',
  },
  {
    id: 2,
    name: 'Samsung',
    image: '/img/carousel-items/carousel-tablet-samsung-1.webp',
    title: 'Samsung Galaxy Tab S10 Ultra',
    to: 'samsung-galaxy-tab-s10-ultra-x926-1tb-moonstone-gray',
    price: 1299,
    descriptionKey: 'tablets-carousel.tabS10.short',
  },
  {
    id: 3,
    name: 'Xiaomi',
    image: '/img/carousel-items/carousel-tablet-xiaomi-1.webp',
    title: 'Xiaomi Redmi Pad 2',
    to: 'xiaomi-redmi-pad-2-128gb-gray',
    price: 189,
    descriptionKey: 'tablets-carousel.redmiPad2.short',
  },
];

export const TabletsHeroPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <CatalogPageHeader title={t('tablets')} videoSources={videoSources} />

      <CatalogPageRecomendationsSection carouselItems={tablets} />

      <BrandSelectSection brandImageSources={brands} />
    </>
  );
};
