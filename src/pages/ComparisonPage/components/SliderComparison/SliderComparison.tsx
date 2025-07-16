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
        <SelectTrigger
          className={`
            w-full
            font-mont
            text-[14px]
            text-link-hover-bg 
            dark:text-white
            bg-white
            dark:bg-gray-700
            hover:bg-gray-200 dark:hover:bg-gray-600
            border-[#B4BDC3] dark:border-none
            rounded-none
            active:border-0`}
        >
          <SelectValue placeholder="Choose" />
        </SelectTrigger>
        <SelectContent className="font-mont text-[14px] rounded-none p-0 bg-white dark:bg-gray-700 border-0 text-link-hover-bg dark:text-dark-link-hover-bg">
          {products.map((product) => {
            return (
              <SelectItem
                key={product.id}
                value={product.itemId}
                className={cn({
                  'bg-[#313237] text-white dark:bg-[#905BFF] rounded-none':
                    choosedItemIds?.includes(product.itemId),
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
