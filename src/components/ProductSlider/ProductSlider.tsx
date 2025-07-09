import type { Product } from '@/types';
import type React from 'react';
import { ProductCard } from '../ProductCard';
import { Loader } from '../Loader';
import { ButtonSwipe } from '../ButtonSwipe';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import type { SwiperClass } from 'swiper/react';

import './ProductSlider.css';
import { useEffect, useState } from 'react';

interface Props {
  productList: Product[];
  isLoading: boolean;
  title: string;
}

export const ProductSlider: React.FC<Props> = ({
  productList,
  isLoading,
  title,
}) => {
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
    <section className="col-span-24 grid grid-cols-24 gap-x-[16px] gap-y-[24px]">
      <div className="col-span-24 grid grid-cols-24 gap-x-[16px]">
        <h2 className="color-white font-mont font-bold text-[32px] col-span-12">
          {title}
        </h2>

        <ButtonSwipe
          onPrevClick={() => swiperInstance?.slidePrev()}
          onNextClick={() => swiperInstance?.slideNext()}
          disablePrev={isBeginning}
          disableNext={isEnd}
        />
      </div>

      {isLoading && <Loader />}
      <div className="col-span-24 grid relative w-full max-w-full h-[432px] mb-[48px]">
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
          slidesPerView={4}
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
