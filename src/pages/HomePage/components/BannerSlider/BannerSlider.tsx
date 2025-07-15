import { Swiper, SwiperSlide, type SwiperClass } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

import './BannerSlider.css';
import { useScreenWidth } from '@/hooks/useScreenWidth';
import { Link } from 'react-router-dom';

const images = [
  { src: '/img/banner-placeholder.png', link: '/phones' },
  { src: '/img/banner-placeholder.png', link: '/phones' },
  { src: '/img/banner-placeholder.png', link: '/phones' },
];

const imagesPhone = [
  { src: '/img/banner-placeholder-phone.webp', link: '/phones' },
  { src: '/img/banner-placeholder-phone.webp', link: '/phones' },
  { src: '/img/banner-placeholder-phone.webp', link: '/phones' },
];

const imagesTablets = [
  { src: '/img/banner-placeholder-tablets.webp', link: '/phones' },
  { src: '/img/banner-placeholder-tablets.webp', link: '/phones' },
  { src: '/img/banner-placeholder-tablets.webp', link: '/phones' },
];

const imagesTabletsBiger = [
  { src: '/img/banner-placeholder-tablets-biger.webp', link: '/phones' },
  { src: '/img/banner-placeholder-tablets-biger.webp', link: '/phones' },
  { src: '/img/banner-placeholder-tablets-biger.webp', link: '/phones' },
];

type Props = {
  setSwiperInstance: (swiper: SwiperClass) => void;
};

export const BannerSlider = ({ setSwiperInstance }: Props) => {
  const width = useScreenWidth();

  let currentImages = images;

  if (width < 640) {
    currentImages = imagesPhone;
  } else if (width >= 640 && width < 780) {
    currentImages = imagesTablets;
  } else if (width >= 780 && width < 1200) {
    currentImages = imagesTabletsBiger;
  }

  return (
    <div className="relative w-full max-w-full aspect-square sm:aspect-auto sm:h-[221px] xl:h-[432px]">
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
        {currentImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full pb-[48px]">
              <Link
                to={image.link}
                className="block w-full sm:h-[189px] xl:h-[400px]"
              >
                <img
                  src={image.src}
                  alt={`Slide ${index + 1}`}
                  className="w-full sm:h-[189px] xl:h-[400px] object-cover"
                />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
