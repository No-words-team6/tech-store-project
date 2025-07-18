import type { Product } from '@/types';
import type React from 'react';
import { ProductCard } from '../ProductCard';
import { ButtonSwipe } from '../common/ButtonSwipe';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import type { SwiperClass } from 'swiper/react';

import './ProductSlider.css';
import { useEffect, useState } from 'react';
interface Props {
  productList: Product[];
  title: string;
}

export const ProductSlider: React.FC<Props> = ({ productList, title }) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
    null,
  );
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.update();
      setIsBeginning(swiperInstance.isBeginning);
      setIsEnd(swiperInstance.isEnd);
    }
  }, [swiperInstance, productList.length]);

  return (
    <section className="col-span-4 sm:col-span-12 xl:col-span-24 grid grid-cols-4 sm:grid-cols-12 xl:grid-cols-24 gap-x-[16px] gap-y-[24px]">
      <div className="col-span-4 sm:col-span-12 xl:col-span-24 grid grid-cols-4 sm:grid-cols-12 xl:grid-cols-24 gap-x-[16px]">
        <h2 className="text-link-hover-bg dark:text-dark-link-hover-bg font-mont font-extrabold text-[22px] sm:text-[32px] col-span-4 sm:col-span-6 xl:col-span-12">
          {title}
        </h2>

        <ButtonSwipe
          onPrevClick={() => swiperInstance?.slidePrev()}
          onNextClick={() => swiperInstance?.slideNext()}
          disablePrev={isBeginning}
          disableNext={isEnd}
        />
      </div>

      <div className="col-span-4 sm:col-span-12 xl:col-span-24 grid relative w-full max-w-full h-[432px] mb-14 sm:mb-16 xl:mb-20">
        <Swiper
          modules={[Pagination, Autoplay]}
          onSwiper={(swiper) => {
            setSwiperInstance(swiper);
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          loop={false}
          breakpoints={{
            0: { slidesPerView: 1.5 },
            640: { slidesPerView: 2.5 },
            1200: { slidesPerView: 4 },
          }}
          slidesPerGroup={1}
          spaceBetween={16}
          className="w-full h-[586px]"
        >
          {productList.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="relative w-full">
                <ProductCard product={product} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
