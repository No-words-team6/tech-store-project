import type { Product } from '@/types';
import {
  CalendarClock,
  CircleDollarSign,
  CirclePercent,
  Cpu,
  Maximize2,
  Microchip,
  Palette,
  Smartphone,
} from 'lucide-react';

import './index.css';
import { ButtonHeart } from '@/components/common/ButtonHeart';
import { ButtonAddToCart } from '@/components/common/ButtonAddToCart';

const isPresent = (value: string | number) => {
  return value ? value : '---';
};

interface CardComparisonProps {
  product: Product | undefined;
}

export const CardComparison: React.FC<CardComparisonProps> = ({ product }) => {
  return (
    <div className="text-link-hover-bg dark:text-gray-300 mx-5">
      {product ?
        <div className="flex flex-col gap-6">
          <div className="w-full h-[200px]">
            <img
              src={
                product.image.startsWith('/') ?
                  product.image
                : `/${product.image}`
              }
              alt={`${product.itemId}`}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="grid">
            <div className="parameters">
              <Maximize2 className="mt-4" size={40} />
              <p className="describers text-[18px] text-gray-500 mt-2">
                Size screen: {isPresent(product.screen.split(' ')[0])}
              </p>
            </div>

            <div className="parameters">
              <Microchip className="mt-4" size={40} />
              <p className="describers text-[18px] text-gray-500 mt-2">
                Capacity: {isPresent(product.capacity)}
              </p>
            </div>

            <div className="parameters">
              <Cpu className="mt-4" size={40} />
              <p className="describers text-[18px] text-gray-500 mt-2">
                RAM: {isPresent(product.ram)}
              </p>
            </div>

            <div className="parameters">
              <Smartphone className="mt-4" size={40} />
              <p className="describers text-[18px] text-gray-500 mt-2">
                Type screen: {isPresent(product.screen.split(' ')[1])}
              </p>
            </div>

            <div className="parameters">
              <Palette className="mt-4" size={40} />
              <p className="describers text-[18px] text-gray-500 mt-2">
                Color: {isPresent(product.color)}
              </p>
            </div>

            <div className="parameters">
              <CirclePercent className="mt-4" size={40} />
              <p className="describers text-[18px] text-gray-500 mt-2">
                Discont price: {isPresent(product.price)}$
              </p>
            </div>

            <div className="parameters">
              <CircleDollarSign className="mt-4" size={40} />
              <p className="describers text-[18px] text-gray-500 mt-2">
                Full price: {isPresent(product.fullPrice)}$
              </p>
            </div>

            <div className="parameters">
              <CalendarClock className="mt-4" size={40} />
              <p className="describers text-[18px] text-gray-500 mt-2">
                Year: {isPresent(product.year)}
              </p>
            </div>
          </div>

          <div className="flex gap-x-5">
            <ButtonAddToCart product={product} />

            <ButtonHeart product={product} />
          </div>
        </div>
      : <p className="text-white m-auto p-3 text-2xl">Продукт відсутній</p>}
    </div>
  );
};
