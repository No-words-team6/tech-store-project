import { CatalogPageBody } from '@/components/CatalogPageBody';

export const TabletsCatalogPage = () => {
  return (
    <div className="col-span-24 grid grid-cols-24 gap-x-[16px] pt-[56px] pb-[80px] gap-y-10 pt-5 pb-5">
      <h1 className="col-span-24 color-white font-mont font-bold text-5xl">
        Tablets
      </h1>

      <CatalogPageBody category={'tablets'} />
    </div>
  );
};
