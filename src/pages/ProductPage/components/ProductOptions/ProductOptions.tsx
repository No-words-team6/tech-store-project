import React from 'react';
import type { Item, Product } from '@/types';
import { ColorsSwitcher } from './components/ColorsSwitcher';
import { CapacitySwitcher } from './components/CapacitySwitcher';
import { ButtonHeart } from '@/components/common/ButtonHeart';
import { ButtonAddToCart } from '@/components/common/ButtonAddToCart';
import { useCastomNavigator } from '@/hooks/useCastomNavigator';
import { useTranslation } from 'react-i18next';

interface Props {
  item: Item;
  product: Product | null;
  variants: Item[];
  setCurrentItem: (item: Item) => void;
}

export const ProductOptions: React.FC<Props> = ({
  item,
  product,
  variants,
  setCurrentItem,
}) => {
  const navigate = useCastomNavigator();

  const { t } = useTranslation();

  const handleColorClick = (color: string) => {
    const matching = variants.find(
      (p) =>
        p.namespaceId === item.namespaceId &&
        p.capacity === item.capacity &&
        p.color === color,
    );

    if (matching) {
      setCurrentItem(matching);
      navigate(`/${matching.category}/${matching.id}`);
    }
  };

  const handleCapacityClick = (capacity: string) => {
    const matching = variants.find(
      (p) =>
        p.namespaceId === item.namespaceId &&
        p.color === item.color &&
        p.capacity === capacity,
    );

    if (matching) {
      setCurrentItem(matching);
      navigate(`/${matching.category}/${matching.id}`);
    }
  };

  const specs = [
    { label: t('Screen'), value: item.screen },
    { label: t('Resolution'), value: item.resolution },
    { label: t('Processor'), value: item.processor },
    { label: t('RAM'), value: item.ram },
  ];

  return (
    <div className="col-start-1 sm:col-start-8 xl:col-start-14 col-span-4 sm:col-span-5 xl:col-span-11 grid grid-cols-4 sm:grid-cols-6 xl:grid-cols-12 gap-x-[16px]">
      <div
        className="
          col-span-4 sm:col-span-5 xl:col-span-12
          flex justify-between items-center
          font-bold text-[#75767F] text-xs
        "
      >
        <p>{t('Available-colors')}</p>
        <span className="text-[#4A4D58]">ID: {product?.id}</span>
      </div>

      <div className="col-span-4 sm:col-span-5 xl:col-span-7 flex flex-col gap-y-6 pt-2 xl:pt-0">
        <ColorsSwitcher item={item} onColorClick={handleColorClick} />

        <hr className="w-full border-t border-[#3B3E4A]" />

        <div className="flex flex-col gap-y-[8px] text-xs font-bold text-[#75767F]">
          <p>{t('Select-capacity')}</p>
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

        {product && (
          <div className="flex h-[48px] gap-x-[8px]">
            <ButtonAddToCart product={product} />
            <ButtonHeart product={product} />
          </div>
        )}
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
