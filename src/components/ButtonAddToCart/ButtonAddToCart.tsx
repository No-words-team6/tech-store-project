import type { Product } from '@/types';
import { Button } from '../ui/button';
import {
  isLocaleExists,
  toggleProd,
  type StorageKey,
} from '@/utils/storageService';
import type React from 'react';
import cn from 'classnames';
import { useEffect, useState } from 'react';

interface Props {
  product: Product;
}

const storageKey: StorageKey = 'cart';

export const ButtonAddToCart: React.FC<Props> = ({ product }) => {
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    setIsInCart(isLocaleExists(product.itemId, storageKey));
  }, [product.itemId]);

  const handleToggleButton = () => {
    toggleProd(product, storageKey);

    const isExist = isLocaleExists(product.itemId, storageKey);
    setIsInCart(isExist);
  };

  return (
    <Button
      onClick={() => {
        handleToggleButton();
      }}
      className={cn(
        'flex-1',
        'bg-[#905BFF]',
        'text-[#F1F2F9]',
        'h-[40px]',
        'text-sm',
        'font-bold',
        'hover:bg-[#A378FF]',
        'hover:cursor-pointer',
        'rounded-none',
        {
          'bg-[#323542]': isInCart,
        },
      )}
    >
      {isInCart ? 'Added to cart' : 'Add to cart'}
    </Button>
  );
};
