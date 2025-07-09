import { Button } from '@/components/ui/button';
import type { Product } from '@/types';
import { isLocaleExists, toggleProd } from '@/utils/storageService';
import cn from 'classnames';
import { Heart } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ButtonHeartProps {
  product: Product;
}

export const ButtonHeart: React.FC<ButtonHeartProps> = ({ product }) => {
  const [isInFavorites, setIsInFavorites] = useState(false);

  useEffect(() => {
    const isExist = isLocaleExists(product.itemId, 'favourites');
    setIsInFavorites(isExist);
  }, [product.itemId]);

  const handleToggleHeart = () => {
    toggleProd(product, 'favourites');

    const isExist = isLocaleExists(product.itemId, 'favourites');
    setIsInFavorites(isExist);
  };

  return (
    <Button
      className={cn(
        'w-10 h-10 flex items-center justify-center hover:cursor-pointer rounded-none bg-[#323542] hover:bg-[#4A4D58]',
        {
          'bg-gray-800 border-gray-600 border-2': isInFavorites,
        },
      )}
      onClick={handleToggleHeart}
    >
      <Heart
        className={cn('w-4 h-4', {
          'text-red-700 fill-red-700': isInFavorites,
        })}
      />
    </Button>
  );
};
