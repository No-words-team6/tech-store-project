import { Swiper, SwiperSlide, type SwiperClass } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

import './MainSlider.css';
import { Link } from 'react-router-dom';

const slides = [
  { src: '/img/main-banner-phones.png', link: '/phones' },
  { src: '/img/banner-phones.png', link: '/phones' },
  { src: '/img/banner-tablets.png', link: '/tablets' },
  { src: '/img/banner-accessories.png', link: '/accessories' },
];

type Props = {
  setSwiperInstance: (swiper: SwiperClass) => void;
  onSlideChange: (swiper: SwiperClass) => void;
};

export const MainSlider = ({ setSwiperInstance, onSlideChange }: Props) => {
  return (
    <div className="relative w-full max-w-full" style={{ height: '80vh' }}>
      <Swiper
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        modules={[Pagination, Autoplay, EffectFade]}
        onSwiper={setSwiperInstance}
        onSlideChange={onSlideChange}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Link to={slide.link} className="block w-full h-full">
                <img
                  src={slide.src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
