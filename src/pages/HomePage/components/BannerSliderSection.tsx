import SwiperCore from 'swiper';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BannerSlider } from './BannerSlider/BannerSlider';

export const BannerSliderSection: React.FC = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);

  return (
    <section className="col-span-24">
      <div className="grid grid-cols-24 gap-x-[16px] items-start">
        <button
          className="col-span-1 h-[400px] bg-[#323542] text-white flex items-center justify-center hover:bg-[#4B4E5A] transition hover:cursor-pointer"
          onClick={() => swiperInstance?.slidePrev()}
        >
          <ChevronLeft />
        </button>

        <div className="col-span-22 w-full h-[432px]">
          <BannerSlider setSwiperInstance={setSwiperInstance} />
        </div>

        <button
          className="col-span-1 h-[400px] bg-[#323542] text-white flex items-center justify-center hover:bg-[#4B4E5A] transition hover:cursor-pointer"
          onClick={() => swiperInstance?.slideNext()}
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
};
