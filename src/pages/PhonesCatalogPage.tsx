import { PageBodyTemplate } from '@/components/PageBodyTemplate';
import { SelectorTimesItems } from '@/components/SelectorItemsOnPage';
import { SelectorSortBy } from '@/components/SelectorSortBy';

export const PhonesCatalogPage = () => {
  return (
    <div className="back-color flex-grow flex items-center justify-center flex-col gap-y-10 pt-5 pb-5">
      <p className="text-gray-100 font-bold">Phones Catalog Body</p>

      <div className="flex gap-x-1">
        <SelectorSortBy title="Sort by" selectorWidth="w-44" />

        <SelectorTimesItems title="Items on page" selectorWidth="w-32" />
      </div>

      <PageBodyTemplate category={'phones'} />
    </div>
  );
};
