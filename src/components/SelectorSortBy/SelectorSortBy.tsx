import { useSearchParams } from 'react-router-dom';
import { Selector } from '../Selector';
import { SortBy } from '@/types';

interface SelectorSortByProps {
  title: string;
  selectorWidth: string;
}

const sortOptions: SortBy[] = [
  SortBy.Newest,
  SortBy.Alphabetically,
  SortBy.Cheapest,
];

export const SelectorSortBy: React.FC<SelectorSortByProps> = ({
  title,
  selectorWidth,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedSort = searchParams.get('sortBy') ?? '';

  const handleSelectChange = (value: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('sortBy', value);
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
