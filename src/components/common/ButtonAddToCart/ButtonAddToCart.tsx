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
        'bg-add-to-cart-bg',
        'text-add-to-cart-text-color',
        'h-[40px]',
        'text-sm',
        'font-bold',
        'hover:drop-shadow-add-to-cart-drop-shadow',
        'hover:bg-add-to-cart-bg-hover',
        'hover:cursor-pointer',
        'rounded-none',
        'truncate',
        {
          'bg-add-to-cart-bg-selected text-add-to-cart-text-color-selected':
            isInCart,
        },
      )}
    >
      {isInCart ? `${t('added-to-cart')}` : `${t('add-to-cart')}`}
    </Button>
  );
};
