import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { useChangeSearchParam } from '@/hooks/useChangeSearchParam';
import { useTranslation } from 'react-i18next';

interface Option {
  value: string;
  label: string;
}

interface SelectorProps {
  title: string;
  options: Option[];
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
  const changeSearchParam = useChangeSearchParam();

  const { t } = useTranslation();

  const handleSelectChange = (value: string) => {
    changeSearchParam(keySelectedSort, value);
  };

  return (
    <div className="flex flex-col">
      <p className="font-mont text-xs text-gray-500 truncate whitespace-nowrap overflow-hidden">
        {title}
      </p>

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
            active:border-0`}
        >
          <SelectValue placeholder={!selectedSort && t('choose')} />
        </SelectTrigger>

        <SelectContent
          className="font-mont text-[14px] rounded-none p-0 bg-gray-700 border-0 text-white"
          style={{ maxHeight: '200px', overflowY: 'auto' }}
        >
          <SelectGroup>
            {options.map(({ value, label }) => (
              <SelectItem
                key={value}
                value={value}
                className="rounded-none data-[highlighted]:bg-gray-600 data-[highlighted]:text-white"
              >
                {label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
