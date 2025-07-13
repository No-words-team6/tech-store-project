import type { Item } from '@/types';
import type React from 'react';
import cn from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useState } from 'react';

type Props = {
  photoSet: string[];
  selectedPhoto: string | null;
  setSelectedPhoto: (selectedPhoto: string) => void;
  item: Item;
};

export const ProductGallery: React.FC<Props> = ({
  photoSet,
  selectedPhoto,
  setSelectedPhoto,
  item,
}) => {
  const [currentIndex, setCurrentIndex] = useState(
    selectedPhoto ? photoSet.indexOf(selectedPhoto) : 0,
  );

  return (
    <div className="col-span-12 grid grid-cols-12 gap-x-[16px]">
      <div className="col-span-2 flex flex-col gap-y-[16px]">
        {photoSet.map((photo, index) => {
          const isActive = currentIndex === index;

          return (
            <div
              key={photo}
              className="h-[80px] cursor-pointer"
              onClick={() => {
                setCurrentIndex(index);
                setSelectedPhoto(photo);
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

      <div className="col-span-10 h-[464px] flex items-center">
        <Swiper
          modules={[Pagination]}
          loop={false}
          slidesPerView={1}
          initialSlide={currentIndex}
          onSlideChange={(swiper) => {
            const newIndex = swiper.activeIndex;
            setCurrentIndex(newIndex);
            setSelectedPhoto(photoSet[newIndex]);
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
