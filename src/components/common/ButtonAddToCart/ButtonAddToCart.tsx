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
        'bg-[#905BFF]',
        'text-[#F1F2F9]',
        'h-[40px]',
        'text-sm',
        'font-bold',
        'hover:bg-[#A378FF]',
        'hover:cursor-pointer',
        'rounded-none',
        { 'bg-[#323542]': isInCart },
      )}
    >
      {isInCart ? `${t('added-to-cart')}` : `${t('add-to-cart')}`}
    </Button>
  );
};
