import { Swiper, SwiperSlide, type SwiperClass } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import './BannerSlider.css';
import { Banner } from './Banner';

type Props = {
  setSwiperInstance: (swiper: SwiperClass) => void;
};

export const BannerSlider = ({ setSwiperInstance }: Props) => {
  return (
    <div className="relative w-full max-w-full h-[352px] sm:h-[221px] xl:h-[432px]">
      <Swiper
        modules={[Pagination, Autoplay]}
        onSwiper={setSwiperInstance}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        speed={2000}
        className="w-full h-full"
      >
        {[0, 1, 2].map((i) => (
          <SwiperSlide key={i}>
            <div className="w-full h-full flex items-start justify-center">
              <Banner index={i} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
