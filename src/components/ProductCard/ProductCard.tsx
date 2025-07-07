import React from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';
import productImage from './productImage.png';
import { Button } from '../Button';
import { ButtonHeart } from '../ButtonHeart';

interface Props {
  num: number;
  category: string;
}

export const ProductCard: React.FC<Props> = ({ num, category }) => {
  return (
    <div className="bg-[#161827] text-[#F1F2F9] w-[272px] h-[506px] p-8 flex flex-col border border-transparent hover:border-[#323542]">
      <Link to={`/${category}/${num}`}>
        <img
          src={productImage}
          alt="product.name"
          className="w-[208px] h-[196px] mb-2"
        />

        <h3 className="text-sm font-semibold pt-4">
          Apple iPhone 14 Pro 128GB Silver (MQ023)
        </h3>
      </Link>

      <p className="text-[22px] font-extrabold mt-2 mb-2">$999</p>
      <hr className="w-full border-t border-[#3B3E4A]" />

      <div className="w-full text-xs text-[#75767F] mb-2 mt-2 pt-2 font-bold ">
        <div className="pb-2 flex justify-between">
          <span>Screen</span>

          <span className="text-[#F1F2F9]">6.1” OLED</span>
        </div>

        <div className="pb-2 flex justify-between">
          <span>Capacity</span>

          <span className="text-[#F1F2F9]">128 GB</span>
        </div>

        <div className="pb-2 flex justify-between">
          <span>RAM</span>

          <span className="text-[#F1F2F9]">6 GB</span>
        </div>
      </div>

      <div className="w-full flex justify-between">
        <Button />

        <ButtonHeart />
      </div>
    </div>
  );
};
