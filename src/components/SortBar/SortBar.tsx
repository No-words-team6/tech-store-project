import { useSearchParams } from 'react-router-dom';
import { Selector } from '../Selector';
import { TimesItems } from '@/types/TimesItems';
import { SortBy } from '@/types';

const sortByOptions: SortBy[] = Object.values(SortBy).map((value) => value);
const timesItemsOptions: TimesItems[] = Object.values(TimesItems).map(
  (value) => value,
);

export const SortBar = () => {
  const [searchParams] = useSearchParams();
  const selectedSortBy = searchParams.get('sortBy') ?? '';
  const selectedTimesItems =
    searchParams.get('timesItems') ?? TimesItems.Twelve;

  return (
    <div className="col-span-24 flex gap-x-4">
      <Selector
        title="Sort by"
        options={sortByOptions}
        keySelectedSort="sortBy"
        selectedSort={selectedSortBy}
        selectorWidth="w-44"
      />

      <Selector
        title="Items on page"
        options={timesItemsOptions}
        keySelectedSort="timesItems"
        selectedSort={selectedTimesItems}
        selectorWidth="w-32"
      />
    </div>
  );
};
