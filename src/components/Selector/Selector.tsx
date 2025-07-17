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
      <p className="font-mont text-xs text-drop-description-text-color truncate whitespace-nowrap overflow-hidden">
        {title}
      </p>

      <Select value={selectedSort} onValueChange={handleSelectChange}>
        <SelectTrigger
          className={`
            font-mont
            text-[14px]
            ${selectorWidth}
            text-drop-text-color
            bg-drop-bg hover:bg-drop-bg-hover focus:bg-drop-bg-focus
            border-2 border-drop-border hover:border-drop-border-hover focus:border-drop-border-focus
            rounded-none
            [&>span]:text-drop-text-color
            [&>svg]:drop-arrow-color
            `}
        >
          <SelectValue placeholder={!selectedSort && t('choose')} />
        </SelectTrigger>

        <SelectContent
          className="font-mont text-[14px] rounded-none p-0
           bg-drop-list-bg 
           border-2 border-drop-list-border
           text-link-hover-bg
           outline-none"
          style={{ maxHeight: '200px', overflowY: 'auto' }}
        >
          <SelectGroup>
            {options.map(({ value, label }) => (
              <SelectItem
                key={value}
                value={value}
                className="
                  text-drop-item-text-color hover:text-drop-item-text-color-hover
                  bg-drop-item-bg hover:bg-drop-item-bg-hover
                  border-0 rounded-none"
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
