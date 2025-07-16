import SwiperCore from 'swiper';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MainSlider } from './MainSlider/MainSlider';
import { useTranslation } from 'react-i18next';

const slides = [
  { titleKey: 'latest-phones' },
  { titleKey: 'new-phones' },
  { titleKey: 'top-tablets' },
  { titleKey: 'must-have-accessories' },
];

export const MainSliderSection: React.FC = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { t } = useTranslation();

  const handleSlideChange = (swiper: SwiperCore) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <section className="w-screen-1 bg-[#1F2128] relative flex flex-col">
      <h1 className="text-link-hover-bg dark:text-dark-link-hover-bg font-mont font-extrabold text-[32px] sm:text-5xl z-10 mb-6 left-1/10 absolute top-1/10 drop-shadow-[0_4px_6px_rgba(255,255,255,0.7)] dark:drop-shadow-[0_4px_6px_rgba(0,0,0,0.7)]">
        {t('welcome-text')}
      </h1>
      <h2 className="text-link-hover-bg dark:text-dark-link-hover-bg font-mont font-extrabold text-[28px] sm:text-4xl z-10 mb-6 left-1/10 absolute top-3/4 drop-shadow-[0_4px_6px_rgba(255,255,255,0.7)] dark:drop-shadow-[0_4px_6px_rgba(0,0,0,0.7)]">
        {t(slides[activeIndex].titleKey)}
      </h2>

      <button
        className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 text-white items-center justify-center hover:bg-[#4B4E5A80] transition"
        onClick={() => swiperInstance?.slidePrev()}
      >
        <ChevronLeft />
      </button>

      <button
        className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 text-white items-center justify-center hover:bg-[#4B4E5A80] transition"
        onClick={() => swiperInstance?.slideNext()}
      >
        <ChevronRight />
      </button>

      <div className="w-full h-full max-h-screen relative z-0">
        <MainSlider
          setSwiperInstance={setSwiperInstance}
          onSlideChange={handleSlideChange}
        />
      </div>
    </section>
  );
};
