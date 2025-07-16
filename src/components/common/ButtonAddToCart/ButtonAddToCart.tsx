import type { Product } from '@/types';
import type React from 'react';
import cn from 'classnames';
import { Button } from '@/components/ui/button';
import { useProductStore } from '@/stores/productStore';
import { useTranslation } from 'react-i18next';

interface Props {
  product: Product;
}

export const ButtonAddToCart: React.FC<Props> = ({ product }) => {
  const toggleCartProduct = useProductStore((state) => state.toggleCartProduct);
  const cartStore = useProductStore((state) => state.cartStore);
  const isInCart = cartStore.some((item) => item.itemId === product.itemId);

  const { t } = useTranslation();

  return (
    <Button
      onClick={() => toggleCartProduct(product)}
      className={cn(
        'flex-1',
        'bg-[#313237]',
        'dark:bg-[#905BFF]',
        'text-[#F1F2F9]',
        'h-[40px]',
        'text-sm',
        'font-bold',
        'hover:bg-[#46484e]',
        'dark:hover:bg-[#A378FF]',
        'hover:cursor-pointer',
        'rounded-none',
        'truncate',
        {
          'border border-[#E2E6E9] dark:border-transparent bg-transparent text-[#27AE60] hover:text-white dark:text-white dark:bg-[#323542]':
            isInCart,
        },
      )}
    >
      {isInCart ? `${t('added-to-cart')}` : `${t('add-to-cart')}`}
    </Button>
  );
};
