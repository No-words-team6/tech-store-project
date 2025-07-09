import { BreadcrumbNav } from '@/components/BreadcrumbNav';
import { CatalogPageBody } from '@/components/CatalogPageBody';

export const PhonesCatalogPage = () => {
  return (
    <>
      <BreadcrumbNav />

      <div className="col-span-24 grid gap-y-[24px]">
        <h1 className="col-span-24 color-white font-mont font-bold text-5xl">
          Mobile phones
        </h1>

        <CatalogPageBody category={'phones'} />
      </div>
    </>
  );
};
