import { Swiper, SwiperSlide, type SwiperClass } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import './ImageSlader.css';
import { Link } from 'react-router-dom';

const images = [
  { src: '/img/banner-accessories.png', link: '/phones' },
  { src: '/img/banner-phones.png', link: '/tablets' },
  { src: '/img/banner-placeholder.png', link: '/accessories' },
];

type Props = {
  setSwiperInstance: (swiper: SwiperClass) => void;
};

export const ImageSlider = ({ setSwiperInstance }: Props) => {
  return (
    <div className="relative w-full max-w-full h-[432px]">
      <Swiper
        modules={[Pagination, Autoplay]}
        onSwiper={setSwiperInstance}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
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
