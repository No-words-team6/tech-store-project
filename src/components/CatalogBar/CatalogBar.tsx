import { Link, useSearchParams } from 'react-router-dom';
import { Selector } from '../Selector';
import { TimesItems } from '@/types/TimesItems';
import { SortBy } from '@/types';

const sortByOptions: SortBy[] = Object.values(SortBy).map((value) => value);
const timesItemsOptions: TimesItems[] = Object.values(TimesItems).map(
  (value) => value,
);

export const CatalogBar = () => {
  const [searchParams] = useSearchParams();
  const selectedSortBy = searchParams.get('sortBy') ?? '';
  const selectedTimesItems =
    searchParams.get('timesItems') ?? TimesItems.Twelve;

  return (
    <div className="col-span-24 flex gap-x-4" id="catalogBar">
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

      <div className="flex flex-col gap-1">
        <p className="font-mont text-xs text-gray-500">Comparison</p>
        <Link
          to="comparison"
          className="text-white bg-gray-700 h-9 px-3 py-2 flex items-center"
        >
          Comparison
        </Link>
      </div>
    </div>
  );
};
