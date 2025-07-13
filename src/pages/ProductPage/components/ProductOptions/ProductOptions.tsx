import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Item, Product } from '@/types';
import { ColorsSwitcher } from './components/ColorsSwitcher';
import { CapacitySwitcher } from './components/CapacitySwitcher';
import { ButtonHeart } from '@/components/common/ButtonHeart';
import { ButtonAddToCart } from '@/components/common/ButtonAddToCart';

interface Props {
  item: Item;
  product: Product;
}

export const ProductOptions: React.FC<Props> = ({ item, product }) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Item[]>([]);

  useEffect(() => {
    Promise.all([
      fetch('/gadgets/phones.json').then((res) => res.json()),
      fetch('/gadgets/tablets.json').then((res) => res.json()),
      fetch('/gadgets/accessories.json').then((res) => res.json()),
    ]).then(([phones, tablets, accessories]) => {
      const allItems = [...phones, ...tablets, ...accessories];
      setProducts(allItems);
    });
  }, []);

  const handleColorClick = (color: string) => {
    const matching = products.find(
      (p) =>
        p.namespaceId === item.namespaceId &&
        p.capacity === item.capacity &&
        p.color === color,
    );

    if (matching) {
      navigate(`/${matching.category}/${matching.id}`);
    }
  };

  const handleCapacityClick = (capacity: string) => {
    const matching = products.find(
      (p) =>
        p.namespaceId === item.namespaceId &&
        p.color === item.color &&
        p.capacity === capacity,
    );

    if (matching) {
      navigate(`/${matching.category}/${matching.id}`);
    }
  };

  const specs = [
    { label: 'Screen', value: item.screen },
    { label: 'Resolution', value: item.resolution },
    { label: 'Processor', value: item.processor },
    { label: 'RAM', value: item.ram },
  ];

  return (
    <div className="col-start-1 sm:col-start-8 xl:col-start-14 col-span-4 sm:col-span-5 xl:col-span-11 grid grid-cols-4 sm:grid-cols-6 xl:grid-cols-12 gap-x-[16px]">
      <div className="col-span-4 sm:col-span-5 xl:col-span-7 flex flex-col gap-y-6">
        <div className="flex flex-col gap-y-[8px] text-xs font-bold text-[#75767F]">
          <p>Available colors</p>
          <ColorsSwitcher item={item} onColorClick={handleColorClick} />
        </div>

        <hr className="w-full border-t border-[#3B3E4A]" />

        <div className="flex flex-col gap-y-[8px] text-xs font-bold text-[#75767F]">
          <p>Select capacity</p>
          <CapacitySwitcher item={item} onCapacityClick={handleCapacityClick} />
        </div>

        <hr className="w-full border-t border-[#3B3E4A]" />
      </div>

      <div className="col-span-4 sm:col-span-5 xl:col-span-7 flex flex-col gap-y-[16px]">
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

      <div className="col-span-4 sm:col-span-5 xl:col-span-7 text-xs text-[#75767F] font-bold mt-4">
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
