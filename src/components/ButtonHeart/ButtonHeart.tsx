import { Button } from '@/components/ui/button';
import type { Product } from '@/types';
import cn from 'classnames';
import { Heart } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ButtonHeartProps {
  product: Product;
}

export const ButtonHeart: React.FC<ButtonHeartProps> = ({ product }) => {
  const [isInFavorites, setIsInFavorites] = useState(false);

  useEffect(() => {
    const storedItem = localStorage.getItem(product.itemId);

    if (storedItem) {
      const parsedItem = JSON.parse(storedItem);

      if (parsedItem?.itemId === product.itemId) {
        setIsInFavorites(true);
      }
    }
  }, [product.itemId]);

  const handleToggleHeart = () => {
    const storedItem = localStorage.getItem(product.itemId);

    if (storedItem) {
      localStorage.removeItem(product.itemId);
      setIsInFavorites(false);
    } else {
      localStorage.setItem(product.itemId, JSON.stringify(product));
      setIsInFavorites(true);
    }
  };

  return (
    <Button
      className="w-10 h-10 flex items-center justify-center hover:cursor-pointer rounded-none bg-[#323542] hover:bg-[#4A4D58]"
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
