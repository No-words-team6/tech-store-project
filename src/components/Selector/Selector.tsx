import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { useSearchParams } from 'react-router-dom';
import type { SortBy } from '@/types';
import type { TimesItems } from '@/types/TimesItems';

interface SelectorProps {
  title: string;
  options: SortBy[] | TimesItems[];
  keySelectedSort: string;
  selectedSort: string;
  selectorWidth: string;
}

export const Selector: React.FC<SelectorProps> = ({
  title,
  options,
  keySelectedSort,
  selectedSort,
  selectorWidth,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSelectChange = (value: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set(keySelectedSort, value);
    setSearchParams(newParams);
  };

  return (
    <div className="flex flex-col gap-1">
      <p className="font-mont text-xs text-gray-500">{title}</p>

      <Select value={selectedSort} onValueChange={handleSelectChange}>
        <SelectTrigger
          className={`
            font-mont
            text-[14px]
            ${selectorWidth}
            text-white
            bg-gray-700
            [&>span]:text-white
            border-0
            rounded-none
            hover:border-b-[0.5px]
            active:border-0
            focus-visible:ring-0`}
        >
          <SelectValue placeholder={!selectedSort && 'Choose'} />
        </SelectTrigger>

        <SelectContent
          className="font-mont text-[14px] rounded-none p-0 bg-gray-700 border-0 text-white"
          style={{ maxHeight: '200px', overflowY: 'auto' }}
        >
          <SelectGroup>
            {options.map((option) => (
              <SelectItem
                key={option}
                value={option}
                className="rounded-none data-[highlighted]:bg-gray-600 data-[highlighted]:text-white"
              >
                {option}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
