import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { Product } from '@/types';
import cn from 'classnames';

interface SliderComparisonProps {
  products: Product[];
  choosedProdId: Product['itemId'];
  onProdIdChange: (itemId: Product['itemId']) => void;
}

export const SliderComparison: React.FC<SliderComparisonProps> = ({
  products,
  choosedProdId,
  onProdIdChange,
}) => {
  return (
    <div className="flex">
      <Select value={choosedProdId} onValueChange={onProdIdChange}>
        <SelectTrigger className="bg-white">
          <SelectValue placeholder="Choose" />
        </SelectTrigger>
        <SelectContent>
          {products.map((product) => {
            return (
              <SelectItem
                key={product.id}
                value={product.itemId}
                className={cn({
                  'bg-blue-400': product.itemId === choosedProdId,
                })}
                disabled={product.itemId === choosedProdId}
              >
                {product.name}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>

      {choosedProdId && (
        <Button
          onClick={() => onProdIdChange('')}
          className="bg-gray-700 rounded-none"
        >
          Clear
        </Button>
      )}
    </div>
  );
};
