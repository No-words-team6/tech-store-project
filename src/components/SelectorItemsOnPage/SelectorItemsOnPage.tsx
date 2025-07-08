import { useSearchParams } from 'react-router-dom';
import { Selector } from '../Selector';
import { TimesItems } from '@/types/TimesItems';

interface SelectorTimesItemsProps {
  title: string;
  selectorWidth: string;
}

const sortOptions: TimesItems[] = [
  TimesItems.Four,
  TimesItems.Eight,
  TimesItems.Twelve,
];

export const SelectorTimesItems: React.FC<SelectorTimesItemsProps> = ({
  title,
  selectorWidth,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedSort = searchParams.get('timesItems') ?? '';

  const handleSelectChange = (value: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('timesItems', value);
    setSearchParams(newParams);
  };

  return (
    <Selector
      title={title}
      items={sortOptions}
      selectorWidth={selectorWidth}
      selectedSort={selectedSort}
      handleSelectChange={handleSelectChange}
    />
  );
};
