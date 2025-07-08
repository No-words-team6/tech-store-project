import type { Item } from '@/types';
import type React from 'react';
import cn from 'classnames';

type Props = {
  photoSet: string[];
  selectedPhoto: string | null;
  setSelectedPhoto: (selectedPhoto: string) => void;
  item: Item;
};

export const Photos: React.FC<Props> = ({
  photoSet,
  selectedPhoto,
  setSelectedPhoto,
  item,
}) => {
  return (
    <div className="flex flex-col gap-y-[16px]">
      {photoSet.map((photo) => {
        const isThisPhotoCurrent = selectedPhoto === photo;

        return (
          <div
            key={photo}
            onClick={() => {
              setSelectedPhoto(photo);
            }}
          >
            <img
              src={`/${photo}`}
              alt={item.name}
              className={cn(
                'w-[80px]',
                'h-[80px]',
                'object-contain',
                'border',
                'cursor-pointer',
                { 'border-gray-600': !isThisPhotoCurrent },
              )}
            />
          </div>
        );
      })}
    </div>
  );
};
