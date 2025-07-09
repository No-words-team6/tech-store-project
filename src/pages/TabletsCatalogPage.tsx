import { BreadcrumbNav } from '@/components/BreadcrumbNav';
import { CatalogPageBody } from '@/components/CatalogPageBody';

export const TabletsCatalogPage = () => {
  return (
    <>
      <BreadcrumbNav />

      <div className="col-span-24 grid gap-y-[24px]">
        <h1 className="col-span-24 color-white font-mont font-bold text-5xl">
          Tablets
        </h1>

        <CatalogPageBody category={'tablets'} />
      </div>
    </>
  );
};
