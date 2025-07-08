import type { SortBy } from '@/types';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import type { TimesItems } from '@/types/TimesItems';

interface SelectorProps {
  title: string;
  items: SortBy[] | TimesItems[];
  selectorWidth: string;
  selectedSort: string;
  handleSelectChange: (value: string) => void;
}

export const Selector: React.FC<SelectorProps> = ({
  title,
  items,
  selectorWidth = 'w-auto',
  selectedSort,
  handleSelectChange,
}) => {
  console.log(selectedSort);

  return (
    <div className="flex flex-col gap-1">
      <p className="font-mont text-xs text-gray-500">{title}</p>

      <Select value={selectedSort} onValueChange={handleSelectChange}>
        <SelectTrigger className={`text-white ${selectorWidth}`}>
          <SelectValue placeholder={!selectedSort && 'Choose filter'} />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            {items.map((item) => (
              <SelectItem key={item} value={`${item}`}>
                {item}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
