import type React from 'react';
import { AvailableColors } from '../AvailableColors';
import { AvailableCapacity } from '../AvailableCapacity';
import type { Item } from '@/types';
import { Heart } from 'lucide-react';

interface Props {
  item: Item;
}

export const ProductOptions: React.FC<Props> = ({ item }) => {
  const specs = [
    { label: 'Screen', value: item.screen },
    { label: 'Resolution', value: item.resolution },
    { label: 'Processor', value: item.processor },
    { label: 'RAM', value: item.ram },
  ];

  return (
    <div className="col-start-14 col-span-11 grid grid-cols-12 gap-x-[16px]">
      <div className="col-span-7 flex flex-col gap-y-6">
        <div className="flex flex-col gap-y-[8px] text-xs font-bold text-[#75767F] ">
          <p>Available colors</p>
          <AvailableColors item={item} />
        </div>

        <hr className="w-full border-t border-[#3B3E4A]" />

        <div className="flex flex-col gap-y-[8px] text-xs font-bold text-[#75767F]">
          <p>Select capacity</p>
          <AvailableCapacity item={item} />
        </div>

        <hr className="w-full border-t border-[#3B3E4A]" />
      </div>

      <div className="col-span-7">
        <div className="flex gap-x-[8px] items-center">
          <p className="text-[#F1F2F9] text-[32px] font-extrabold">
            ${item.priceDiscount}
          </p>

          <p className="text-[#75767F] line-through text-[22px]">
            ${item.priceRegular}
          </p>
        </div>

        <div className="flex h-[48px] gap-x-[8px]">
          <button className="flex-1 bg-[#905BFF] text-[#F1F2F9] text-sm font-bold hover:bg-[#A378FF] hover:cursor-pointer">
            Add to cart
          </button>

          <button className="w-[48px] bg-[#323542] hover:bg-[#4A4D58] flex items-center justify-center hover:cursor-pointer">
            <Heart color="white" className="w-[16px] h-[16px]" />
          </button>
        </div>
      </div>

      <div className="col-span-7 text-xs text-[#75767F] font-bold ">
        {specs.map(({ label, value }) => (
          <div key={label} className="pb-2 flex justify-between">
            <span>{label}</span>

            <span className="text-[#F1F2F9]">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
