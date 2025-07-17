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
            text-drop-text-color
            bg-drop-bg hover:drop-bg-hover focus:bg-drop-bg-focus
            border-2 border-drop-border hover:border-drop-border-hover focus:border-drop-border-focus
            rounded-none outline-none
            [&>span]:text-drop-text-color
            [&>svg]:drop-arrow-color
            `}
        >
          <SelectValue placeholder="Choose" />
        </SelectTrigger>
        <SelectContent
          className="font-mont text-[14px] rounded-none p-0
            bg-drop-list-bg 
            border-2 border-drop-list-border
            text-link-hover-bg
            outline-none"
        >
          {products.map((product) => {
            return (
              <SelectItem
                key={product.id}
                value={product.itemId}
                className={cn({
                  'text-drop-item-text-color hover:text-drop-item-text-color-hover bg-drop-item-bg hover:bg-drop-item-bg-hover border-0 rounded-none':
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
