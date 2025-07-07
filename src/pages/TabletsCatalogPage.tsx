import { PageBodyTemplate } from '@/components/PageBodyTemplate';

export const TabletsCatalogPage = () => {
  return (
    <div className="bg-orange-200 flex-grow flex items-center justify-center flex-col gap-y-10 pt-5 pb-5">
      <p className="text-gray-600 font-bold">Tablets Catalog Body</p>

      <PageBodyTemplate category={'tablets'} />
    </div>
  );
};
