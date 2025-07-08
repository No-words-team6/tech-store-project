import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import './ImageSlader.css';

const images = [
  { src: '/img/banner-accessories.png', link: '/phones' },
  { src: '/img/banner-phones.png', link: '/tablets' },
  { src: '/img/banner-placeholder.png', link: '/accessories' },
];

export const ImageSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <a href={image.link}>
            <img src={image.src} alt={`Slide ${index + 1}`} />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
