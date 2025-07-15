import SwiperCore from 'swiper';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BannerSlider } from './BannerSlider/BannerSlider';

export const BannerSliderSection: React.FC = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);

  return (
    <section className="col-span-4 sm:col-span-12 xl:col-span-24 aspect-square sm:aspect-auto">
      <div className="grid grid-cols-4 aspect-square sm:aspect-auto sm:grid-cols-12 xl:grid-cols-24 gap-x-[16px] items-start">
        <button
          className="hidden sm:block sm:col-span-1 h-[189px] xl:h-[400px] bg-[#323542] text-white flex items-center justify-center hover:bg-[#4B4E5A] transition hover:cursor-pointer"
          onClick={() => swiperInstance?.slidePrev()}
        >
          <ChevronLeft />
        </button>

        <div className="col-span-4 sm:col-span-10 xl:col-span-22 w-full aspect-square sm:aspect-auto sm:h-[189px] xl:h-[400px]">
          <BannerSlider setSwiperInstance={setSwiperInstance} />
        </div>

        <button
          className="hidden sm:block sm:col-span-1 h-[189px] xl:h-[400px] bg-[#323542] text-white flex items-center justify-center hover:bg-[#4B4E5A] transition hover:cursor-pointer"
          onClick={() => swiperInstance?.slideNext()}
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
};
