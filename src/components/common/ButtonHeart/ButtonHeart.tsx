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
        'w-10 h-10 flex items-center justify-center hover:cursor-pointer rounded-none bg-[#323542] hover:bg-[#4A4D58]',
        {
          'bg-gray-800 border-gray-600 border-2': isInFavorites,
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
