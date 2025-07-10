import { Swiper, SwiperSlide, type SwiperClass } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

import './BannerSlider.css';
import { Link } from 'react-router-dom';

const images = [
  { src: '/img/banner-placeholder.png', link: '/phones' },
  { src: '/img/banner-phones.png', link: '/phones' },
  { src: '/img/banner-tablets.png', link: '/tablets' },
  { src: '/img/banner-accessories.png', link: '/accessories' },
];

type Props = {
  setSwiperInstance: (swiper: SwiperClass) => void;
};

export const BannerSlider = ({ setSwiperInstance }: Props) => {
  return (
    <div className="relative w-full max-w-full h-[432px]">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]} // ✅ підключаємо модулі
        onSwiper={setSwiperInstance}
        effect="fade" // ✅ активуємо fade
        fadeEffect={{ crossFade: true }} // ✅ плавна заміна
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        speed={2000} // ✅ плавність переходу
        className="w-full h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full pb-[48px]">
              <Link to={image.link} className="block w-full h-[400px]">
                <img
                  src={image.src}
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
