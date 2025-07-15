import { useSearchParams } from 'react-router-dom';
import { Selector } from '../Selector';
import { TimesItems } from '@/types/TimesItems';
import { SortBy } from '@/types';
import { Brands } from '@/types/Brands';
import { Searcher } from '../Searcher';
import { ButtonComparison } from '../common/ButtonComparison';
import { useTranslation } from 'react-i18next';

export const CatalogBar = () => {
  const [searchParams] = useSearchParams();

  const { t } = useTranslation();

  const sortByOptions = Object.values(SortBy).map((value) => ({
    value,
    label: t(value),
  }));

  const brandOptions = Object.values(Brands).map((value) => ({
    value,
    label: t(value),
  }));

  const timesItemsOptions = Object.values(TimesItems).map((value) => ({
    value,
    label: t(value),
  }));

  const selectedSortBy = searchParams.get('sortBy') ?? '';
  const selectedTimesItems =
    searchParams.get('timesItems') ?? TimesItems.Twelve;
  const selectedBrand = searchParams.get('brand') ?? Brands.All;

  return (
    <div
      className="col-span-4 sm:col-span-12 xl:col-span-24 grid grid-cols-4 sm:grid-cols-12 xl:grid-cols-24 gap-x-4"
      id="catalogBar"
    >
      <div className="col-span-4 sm:col-span-6 order-1">
        <p className="font-mont text-xs text-gray-500">{t('search')}</p>
        <Searcher />
      </div>

      <div className="col-span-1 sm:col-span-4 xl:col-span-3 mt-4 xl:mt-0 order-3">
        <Selector
          title={t('sortby')}
          options={sortByOptions}
          keySelectedSort="sortBy"
          selectedSort={selectedSortBy}
          selectorWidth="w-full"
        />
      </div>

      <div className="col-span-1 sm:col-span-4 xl:col-span-3 mt-4 xl:mt-0 order-4">
        <Selector
          title={t('items-on-page')}
          options={timesItemsOptions}
          keySelectedSort="timesItems"
          selectedSort={selectedTimesItems}
          selectorWidth="w-full"
        />
      </div>

      <div className="col-span-1 sm:col-span-4 xl:col-span-3 mt-4 xl:mt-0 order-5">
        <Selector
          title={t('current-brand')}
          options={brandOptions}
          keySelectedSort="brand"
          selectedSort={selectedBrand}
          selectorWidth="w-full"
        />
      </div>

      <ButtonComparison />
    </div>
  );
};
