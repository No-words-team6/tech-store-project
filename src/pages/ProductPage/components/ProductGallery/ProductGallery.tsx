import type { Item } from '@/types';
import type React from 'react';
import cn from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

type Props = {
  photoSet: string[];
  currentPhoto: string | null;
  setCurrentPhoto: (selectedPhoto: string) => void;
  item: Item;
};

export const ProductGallery: React.FC<Props> = ({
  photoSet,
  currentPhoto,
  setCurrentPhoto,
  item,
}) => {
  const currentIndex =
    currentPhoto && photoSet.includes(currentPhoto) ?
      photoSet.indexOf(currentPhoto)
    : 0;

  return (
    <div className="col-span-4 sm:col-span-7 xl:col-span-12 grid grid-cols-4 sm:grid-cols-7 xl:grid-cols-12 gap-x-[16px]">
      <div className="order-2 sm:order-none col-span-4 sm:col-span-1 xl:col-span-2 flex gap-y-[16px] flex-row sm:flex-col gap-x-[8px] sm:gap-y-[16px] mt-6 mb-10 sm:mt-0 sm:mb-0">
        {photoSet.map((photo, index) => {
          const isActive = currentIndex === index;

          return (
            <div
              key={photo}
              className="h-[50px] sm:h-[35px] xl:h-[80px] w-[50px] sm:w-[35px] xl:w-[80px] cursor-pointer"
              onClick={() => {
                setCurrentPhoto(photo);
              }}
            >
              <img
                src={`/${photo}`}
                alt={item.name}
                className={cn('object-contain border w-full h-full', {
                  'border-gray-600': !isActive,
                })}
              />
            </div>
          );
        })}
      </div>

      <div className="order-1 sm:order-none col-span-4 sm:col-span-6 xl:col-span-10 h-[288px] xl:h-[464px] flex items-center">
        <Swiper
          modules={[Pagination]}
          loop={false}
          slidesPerView={1}
          initialSlide={currentIndex}
          onSlideChange={(swiper) => {
            const newIndex = swiper.activeIndex;
            setCurrentPhoto(photoSet[newIndex]);
          }}
          key={currentIndex}
          className="w-full h-full"
        >
          {photoSet.map((photo) => (
            <SwiperSlide key={photo}>
              <div className="flex justify-center items-center h-full">
                <img
                  src={`/${photo}`}
                  alt={item.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
