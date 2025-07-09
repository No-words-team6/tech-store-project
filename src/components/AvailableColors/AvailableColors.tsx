import type { Item } from '@/types';
import type React from 'react';
import cn from 'classnames';

type Props = {
  item: Item;
};

export const AvailableColors: React.FC<Props> = ({ item }) => {
  return (
    <div className="flex gap-2">
      {item.colorsAvailable.map((color) => {
        const isSelected = item.color === color;

        return (
          <div
            key={color}
            className={cn(
              'w-8 h-8 rounded-full border-1 border-[#3B3E4A] flex items-center justify-center',
              {
                'border-[#F1F2F9]': isSelected,
              },
            )}
          >
            <div
              className="w-[30px] h-[30px] rounded-full cursor-pointer"
              style={{ backgroundColor: color }}
            ></div>
          </div>
        );
      })}
    </div>
  );
};
