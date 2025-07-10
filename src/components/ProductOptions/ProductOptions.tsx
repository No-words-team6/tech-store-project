import type React from 'react';
import { AvailableColors } from '../AvailableColors';
import { AvailableCapacity } from '../AvailableCapacity';
import type { Item, Product } from '@/types';
import { ButtonAddToCart } from '../ButtonAddToCart';
import { ButtonHeart } from '../ButtonHeart';

interface Props {
  item: Item;
  product: Product;
}

export const ProductOptions: React.FC<Props> = ({ item, product }) => {
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

      <div className="col-span-7 flex flex-col gap-y-[16px]">
        <div className="flex gap-x-[8px] items-center">
          <p className="text-[#F1F2F9] text-[32px] font-extrabold">
            ${item.priceDiscount}
          </p>

          <p className="text-[#75767F] line-through text-[22px]">
            ${item.priceRegular}
          </p>
        </div>

        <div className="flex h-[48px] gap-x-[8px]">
          <ButtonAddToCart product={product} />

          <ButtonHeart product={product} />
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
