import { CatalogPageHeader } from '@/components/CatalogPageComponents/CatalogPageHeader';
import { CatalogPageRecomendationsSection } from '@/components/CatalogPageComponents/CatalogPageRecomendationsSection';
import { BrandSelectSection } from '@/components/CatalogPageComponents/BrandSelectSection';
import { useTranslation } from 'react-i18next';
import { useThemeStore } from '@/hooks/useThemeStore';
import { Loader } from '@/components/common/Loader';
import { useEffect } from 'react';
import { useProductStore } from '@/stores/productStore';

const videoSourcesDark = [
  '/videos/tabletsBanner-1.mp4',
  '/videos/tabletsBanner-2.mp4',
];

const videoSourcesLight = [
  '/videos/tabletsBanner-1-light.mp4',
  '/videos/tabletsBanner-2-light.mp4',
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
    title: 'Apple iPad Pro 11',
    to: 'tablets/catalog/apple-ipad-pro-11-2021-1tb-spacegray',
    price: 879,
    descriptionKey: 'tablets-carousel.ipadPro12.short',
  },
  {
    id: 2,
    name: 'Samsung',
    image: '/img/carousel-items/carousel-tablet-samsung-1.webp',
    title: 'Samsung Galaxy Tab S10 Ultra',
    to: 'tablets/catalog/samsung-galaxy-tab-s10-ultra-x926-1tb-moonstone-gray',
    price: 1299,
    descriptionKey: 'tablets-carousel.tabS10.short',
  },
  {
    id: 3,
    name: 'Xiaomi',
    image: '/img/carousel-items/carousel-tablet-xiaomi-1.webp',
    title: 'Xiaomi Redmi Pad 2',
    to: 'tablets/catalog/xiaomi-redmi-pad-2-128gb-gray',
    price: 189,
    descriptionKey: 'tablets-carousel.redmiPad2.short',
  },
];

export const TabletsHeroPage = () => {
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
        title={t('tablets')}
        videoSources={selectedVideoSources}
      />

      <CatalogPageRecomendationsSection carouselItems={tablets} />

      <BrandSelectSection brandImageSources={brands} />

      {isLoading && <Loader />}
    </>
  );
};
