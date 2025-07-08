import { PageBodyTemplate } from '@/components/PageBodyTemplate';

export const AccessoriesCatalogPage = () => {
  return (
    <div className="back-color flex-grow flex items-center justify-center flex-col gap-y-10 pt-5 pb-5">
      <p className="text-gray-100 font-bold">Accessories Catalog Body</p>

      <PageBodyTemplate category={'accessories'} />
    </div>
  );
};
