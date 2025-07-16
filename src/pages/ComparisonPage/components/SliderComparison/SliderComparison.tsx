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
  choosedItemIds: Product['itemId'][];
}

export const SliderComparison: React.FC<SliderComparisonProps> = ({
  products,
  choosedProdId,
  onProdIdChange,
  choosedItemIds,
}) => {
  return (
    <div className="mb-3">
      <Select value={choosedProdId} onValueChange={onProdIdChange}>
        <SelectTrigger className="w-full text-white bg-gray-700 [&>span]:text-white border-0 rounded-none">
          <SelectValue placeholder="Choose" />
        </SelectTrigger>
        <SelectContent className="rounded-none">
          {products.map((product) => {
            return (
              <SelectItem
                key={product.id}
                value={product.itemId}
                className={cn({
                  'bg-blue-400 rounded-none': choosedItemIds?.includes(
                    product.itemId,
                  ),
                })}
                disabled={choosedItemIds?.includes(product.itemId)}
              >
                {product.name}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};
