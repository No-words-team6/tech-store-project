import { useSearchParams } from 'react-router-dom';
import { Selector } from '../Selector';
import { TimesItems } from '@/types/TimesItems';
import { SortBy } from '@/types';
import { Brands } from '@/types/Brands';
import { Searcher } from '../Searcher';
import { useTranslation } from 'react-i18next';

const timesItemsOptions: TimesItems[] = Object.values(TimesItems).map(
  (value) => value,
);
const brandOptions = Object.values(Brands).map((value) => value);

export const CatalogBar = () => {
  const [searchParams] = useSearchParams();

  const { t } = useTranslation();

  const sortByOptions: string[] = Object.values(SortBy).map((value) =>
    t(value),
  );

  const selectedSortBy = searchParams.get('sortBy') ?? '';
  const selectedTimesItems =
    searchParams.get('timesItems') ?? TimesItems.Twelve;
  const selectedBrand = searchParams.get('brand') ?? Brands.All;

  return (
    <div
      className="col-span-4 sm:col-span-12 xl:col-span-24 flex flex-wrap gap-x-4"
      id="catalogBar"
    >
      <div className="flex flex-col gap-1">
        <p className="font-mont text-xs text-gray-500">{t('search')}</p>
        <Searcher />
      </div>

      <Selector
        title={t('sortby')}
        options={sortByOptions}
        keySelectedSort="sortBy"
        selectedSort={selectedSortBy}
        selectorWidth="w-[106px] sm:w-[176px]"
      />

      <Selector
        title={t('items-on-page')}
        options={timesItemsOptions}
        keySelectedSort="timesItems"
        selectedSort={selectedTimesItems}
        selectorWidth="w-[106px] sm:w-[128px]"
      />

      <Selector
        title={t('current-brand')}
        options={brandOptions}
        keySelectedSort="brand"
        selectedSort={selectedBrand}
        selectorWidth="w-[106px] sm:w-[128px]"
      />

      {/* <div className="flex flex-col gap-1">
        <p className="font-mont text-xs text-gray-500">Comparison</p>
        <Link
          to="comparison"
          className="text-white bg-gray-700 h-9 px-3 py-2 flex items-center"
        >
          Comparison
        </Link>
      </div> */}
    </div>
  );
};
