import { PageBodyTemplate } from '@/components/PageBodyTemplate';
import { Selector } from '@/components/Selector';

export const PhonesCatalogPage = () => {
  return (
    <div className="back-color flex-grow flex items-center justify-center flex-col gap-y-10 pt-5 pb-5">
      <p className="text-gray-100 font-bold">Phones Catalog Body</p>

      <div className="flex gap-x-1">
        <Selector
          selectValue="Newest"
          title="Sort by"
          items={['Newest', 'Cheapest', 'Aplphabetically']}
          selectorWidth="w-44"
        />

        <Selector
          selectValue="16"
          title="Items on page"
          items={['4', '8', '12']}
          selectorWidth="w-32"
        />
      </div>

      <PageBodyTemplate category={'phones'} />
    </div>
  );
};
