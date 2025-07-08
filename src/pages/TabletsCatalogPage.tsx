import { CatalogPageBody } from '@/components/CatalogPageBody';

export const TabletsCatalogPage = () => {
  return (
    <div className="back-color flex-grow flex items-center justify-center flex-col gap-y-10 pt-5 pb-5">
      <p className="text-gray-100 font-bold">Tablets Catalog Body</p>

      <CatalogPageBody category={'tablets'} />
    </div>
  );
};
