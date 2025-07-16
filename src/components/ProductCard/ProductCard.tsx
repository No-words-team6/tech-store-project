import React from 'react';
import '../../index.css';
import { ButtonHeart } from '../common/ButtonHeart';
import type { Product } from '@/types';
import { ButtonAddToCart } from '../common/ButtonAddToCart';
import { useTranslation } from 'react-i18next';
import { useCastomNavigator } from '@/hooks/useCastomNavigator';

interface Props {
  product: Product;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const {
    itemId,
    category,
    name,
    image,
    fullPrice,
    price,
    screen,
    capacity,
    ram,
  } = product;
  const navigate = useCastomNavigator();
  const { t } = useTranslation();

  const imagePath = image.startsWith('/') ? image : `/${image}`;

  const handleCardClick = () => {
    navigate(`/${category}/catalog/${itemId}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className=" bg-[#161827] cursor-pointer text-[#F1F2F9] h-[440px] sm:h-[506px] p-8 flex flex-col border border-transparent hover:border-[#323542]"
    >
      <div className="flex justify-center">
        <img
          src={imagePath}
          alt={product.name}
          className="h-[130px] sm:h-[196px] mb-2"
        />
      </div>

      <h3 className="text-sm font-semibold pt-4 min-h-[4rem]">{name}</h3>

      <div className="flex gap-2 mt-2 mb-2 text-[22px]">
        <p className="font-extrabold">${price}</p>
        <p className="text-[#75767F] line-through font-semibold">
          ${fullPrice}
        </p>
      </div>

      <hr className="w-full border-t border-[#3B3E4A]" />

      <div className="w-full text-xs text-[#75767F] mb-2 mt-2 pt-2 font-bold ">
        <div className="pb-2 flex justify-between">
          <span>{t('screen')}</span>

          <span className="text-[#F1F2F9]">{screen}</span>
        </div>

        <div className="pb-2 flex justify-between">
          <span>{t('capacity')}</span>

          <span className="text-[#F1F2F9]">{capacity}</span>
        </div>

        <div className="pb-2 flex justify-between">
          <span>{t('ram')}</span>

          <span className="text-[#F1F2F9]">{ram}</span>
        </div>
      </div>

      <div
        className="w-full flex gap-x-2"
        onClick={(event) => event.stopPropagation()}
      >
        <ButtonAddToCart product={product} />

        <ButtonHeart product={product} />
      </div>
    </div>
  );
};
