import type { Item } from '@/types';
import type React from 'react';
import cn from 'classnames';

type Props = {
  item: Item;
  onColorClick?: (color: string) => void;
};

export const ColorsSwitcher: React.FC<Props> = ({ item, onColorClick }) => {
  return (
    <div className="flex gap-2">
      {item.colorsAvailable.map((color) => {
        const isSelected = item.color === color;

        return (
          <div
            key={color}
            className={cn(
              'w-8 h-8 rounded-full flex items-center justify-center cursor-pointer border-2',
              isSelected ?
                'border-[#3B3E4A] dark:border-[#F1F2F9]'
              : 'border-[#F1F2F9] dark:border-[#3B3E4A]',
            )}
            onClick={() => onColorClick?.(color)}
          >
            <div
              className="w-[30px] h-[30px] rounded-full border-2 border-white dark:border-[#0F1121]"
              style={{ backgroundColor: color }}
            />
          </div>
        );
      })}
    </div>
  );
};
