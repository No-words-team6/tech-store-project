import { Button } from '@/components/ui/button';
import { useProductStore } from '@/stores/productStore';
import type { Product } from '@/types';
import cn from 'classnames';
import { Heart } from 'lucide-react';

interface ButtonHeartProps {
  product: Product;
}

export const ButtonHeart: React.FC<ButtonHeartProps> = ({ product }) => {
  const favouritesStore = useProductStore((state) => state.favouritesStore);
  const isInFavorites = favouritesStore.some(
    (item) => item.itemId === product.itemId,
  );
  const toggleFavouriteProduct = useProductStore(
    (state) => state.toggleFavouriteProduct,
  );

  return (
    <Button
      className={cn(
        'w-10 h-10 flex items-center justify-center hover:cursor-pointer rounded-none bg-transparent dark:bg-[#323542] text-[#313237] dark:text-white border-2 border-[#B4BDC3] dark:border-transparent hover:border-[#313237] dark:hover:bg-[#4A4D58]',
        {
          'bg-transparent dark:bg-gray-800 border-[#E2E6E9] dark:border-gray-600 border-2':
            isInFavorites,
        },
      )}
      onClick={() => toggleFavouriteProduct(product)}
    >
      <Heart
        className={cn('w-4 h-4', {
          'text-red-700 fill-red-700': isInFavorites,
        })}
      />
    </Button>
  );
};
