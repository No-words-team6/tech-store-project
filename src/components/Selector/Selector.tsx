import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

interface SelectorProps {
  selectValue: string;
  title: string;
  items: string[];
  selectorWidth: string;
}

export const Selector: React.FC<SelectorProps> = ({
  selectValue,
  title,
  items,
  selectorWidth = 'w-auto',
}) => {
  return (
    <div className="flex flex-col gap-1">
      <p className="font-mont text-xs text-gray-500">{title}</p>

      <Select>
        <SelectTrigger className={`text-white ${selectorWidth}`}>
          <SelectValue placeholder={selectValue} />
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
