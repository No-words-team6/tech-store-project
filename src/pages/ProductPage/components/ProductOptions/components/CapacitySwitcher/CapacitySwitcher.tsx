import type { Item } from '@/types';
import type React from 'react';
import cn from 'classnames';

type Props = {
  item: Item;
  onCapacityClick?: (capacity: string) => void;
};

export const CapacitySwitcher: React.FC<Props> = ({
  item,
  onCapacityClick,
}) => {
  return (
    <div className="flex gap-2">
      {item.capacityAvailable.map((capacity) => {
        const isSelected = item.capacity === capacity;

        return (
          <button
            key={capacity}
            onClick={() => onCapacityClick?.(capacity)}
            className={cn(
              'w-14 h-8 border border-[#919a9e] text-sm flex items-center justify-center cursor-pointer',
              isSelected ?
                'bg-[#313237] dark:border-[#F1F2F9] dark:bg-[#F1F2F9] text-dark-link-hover-bg dark:text-[#3B3E4A]'
              : 'dark:border-[#3B3E4A] dark:text-[#75767F] text-link-hover-bg',
            )}
          >
            {capacity}
          </button>
        );
      })}
    </div>
  );
};
