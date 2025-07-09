import type { Item } from '@/types';
import type React from 'react';
import cn from 'classnames';

type Props = {
  item: Item;
};

export const AvailableCapacity: React.FC<Props> = ({ item }) => {
  return (
    <div className="flex gap-2">
      {item.capacityAvailable.map((capacity) => {
        const isSelected = item.capacity === capacity;

        return (
          <div
            key={capacity}
            className={cn(
              'w-14 h-8 border border-[#4A4D58] text-sm flex items-center justify-center cursor-pointer',
              {
                'bg-[#F1F2F9] text-[#0F1121]': isSelected,
                'text-[#F1F2F9]': !isSelected,
              },
            )}
          >
            {capacity}
          </div>
        );
      })}
    </div>
  );
};
