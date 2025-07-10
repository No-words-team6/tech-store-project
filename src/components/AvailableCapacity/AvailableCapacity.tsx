import type { Item } from '@/types';
import type React from 'react';
import cn from 'classnames';

type Props = {
  item: Item;
  onCapacityClick?: (capacity: string) => void;
};

export const AvailableCapacity: React.FC<Props> = ({
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
              'w-14 h-8 border border-[#4A4D58] text-sm flex items-center justify-center cursor-pointer',
              isSelected ?
                'border-[#F1F2F9] bg-[#F1F2F9] text-[#0F1121]'
              : 'border-[#3B3E4A] text-[#75767F]',
            )}
          >
            {capacity}
          </button>
        );
      })}
    </div>
  );
};
