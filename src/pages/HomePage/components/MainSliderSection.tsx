import SwiperCore from 'swiper';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MainSlider } from './MainSlider/MainSlider';

const slides = [
  { title: 'Latest Smartphones in Store' },
  { title: 'Discover New Phones' },
  { title: 'Top Tablets for Work and Play' },
  { title: 'Must-Have Accessories' },
];

export const MainSliderSection: React.FC = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: SwiperCore) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <section className="w-screen-1 bg-[#1F2128] relative flex flex-col items-center justify-center text-center">
      <h2 className="text-white font-mont font-extrabold text-[32px] sm:text-[42px] z-10 mb-6 absolute top-1/10 drop-shadow-[0_4px_6px_rgba(0,0,0,0.7)]">
        {slides[activeIndex].title}
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

      <div className="w-full h-full max-h-[500px] sm:max-h-[600px] relative z-0">
        <MainSlider
          setSwiperInstance={setSwiperInstance}
          onSlideChange={handleSlideChange}
        />
      </div>
    </section>
  );
};
