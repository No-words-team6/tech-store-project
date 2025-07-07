import React from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';
import { Button } from '../Button';
import { ButtonHeart } from '../ButtonHeart';
import type { Product } from '@/types';

interface Props {
  product: Product;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const { itemId, category, image, fullPrice, price, screen, capacity, ram } =
    product;

  return (
    <div className="bg-[#161827] text-[#F1F2F9] w-[272px] h-[506px] p-8 flex flex-col border border-transparent hover:border-[#323542]">
      <Link to={`/${category}/${itemId}`}>
        <div className="flex justify-center">
          <img src={image} alt={product.name} className="h-[196px] mb-2" />
        </div>

        <h3 className="text-sm font-semibold pt-4">
          Apple iPhone 14 Pro 128GB Silver (MQ023)
        </h3>
      </Link>

      <div className="flex gap-2 mt-2 mb-2 text-[22px]">
        <p className="font-extrabold">${price}</p>
        <p className="text-[#75767F] line-through font-semibold">
          ${fullPrice}
        </p>
      </div>

      <hr className="w-full border-t border-[#3B3E4A]" />

      <div className="w-full text-xs text-[#75767F] mb-2 mt-2 pt-2 font-bold ">
        <div className="pb-2 flex justify-between">
          <span>Screen</span>

          <span className="text-[#F1F2F9]">{screen}</span>
        </div>

        <div className="pb-2 flex justify-between">
          <span>Capacity</span>

          <span className="text-[#F1F2F9]">{capacity}</span>
        </div>

        <div className="pb-2 flex justify-between">
          <span>RAM</span>

          <span className="text-[#F1F2F9]">{ram}</span>
        </div>
      </div>

      <div className="w-full flex justify-between">
        <Button />

        <ButtonHeart />
      </div>
    </div>
  );
};
