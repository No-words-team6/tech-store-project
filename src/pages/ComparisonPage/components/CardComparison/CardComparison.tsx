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
    <div className="text-white">
      {product ?
        <div className="flex flex-col gap-3">
          <div className="w-[120px] h-[120px] flex-shrink-0 m-auto">
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
              <Maximize2 />
              <p className="describers">
                Size screen: {isPresent(product.screen.split(' ')[0])}
              </p>
            </div>

            <div className="parameters">
              <Microchip />
              <p className="describers">
                Capacity: {isPresent(product.capacity)}
              </p>
            </div>

            <div className="parameters">
              <Cpu />
              <p className="describers">RAM: {isPresent(product.ram)}</p>
            </div>

            <div className="parameters">
              <Smartphone />
              <p className="describers">
                Type screen: {isPresent(product.screen.split(' ')[1])}
              </p>
            </div>

            <div className="parameters">
              <Palette />
              <p className="describers">Color: {isPresent(product.color)}</p>
            </div>

            <div className="parameters">
              <CirclePercent />
              <p className="describers">
                Discont price: {isPresent(product.price)}$
              </p>
            </div>

            <div className="parameters">
              <CircleDollarSign />
              <p className="describers">
                Full price: {isPresent(product.fullPrice)}$
              </p>
            </div>

            <div className="parameters">
              <CalendarClock />
              <p className="describers">Year: {isPresent(product.year)}</p>
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
