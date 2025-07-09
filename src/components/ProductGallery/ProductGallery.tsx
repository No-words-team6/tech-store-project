import type { Item } from '@/types';
import type React from 'react';
import cn from 'classnames';

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
  return (
    <div className="col-span-12 grid grid-cols-12 gap-x-[16px]">
      <div className="col-span-2 flex flex-col gap-y-[16px]">
        {photoSet.map((photo) => {
          const isThisPhotoCurrent = selectedPhoto === photo;

          return (
            <div
              className="h-[80px]"
              key={photo}
              onClick={() => {
                setSelectedPhoto(photo);
              }}
            >
              <img
                src={`/${photo}`}
                alt={item.name}
                className={cn(
                  'object-contain',
                  'border',
                  'cursor-pointer',
                  'w-full',
                  'h-full',
                  { 'border-gray-600': !isThisPhotoCurrent },
                )}
              />
            </div>
          );
        })}
      </div>

      <div className="col-span-10 h-[464px] flex justify-center items-center">
        <img
          src={`/${selectedPhoto}`}
          alt={item.name}
          className="max-h-full max-w-full object-contain"
        />
      </div>
    </div>
  );
};
