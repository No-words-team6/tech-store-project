import { BreadcrumbNav } from '@/components/BreadcrumbNav';

export const RightsPage = () => {
  return (
    <div className="col-span-24 grid grid-cols-24 gap-x-[16px] pt-[24px] pb-[80px]">
      <BreadcrumbNav />

      <div className="col-span-24 grid grid-cols-24 gap-x-[16px] gap-y-[24px]">
        <h1 className="col-span-24 color-white font-mont font-bold text-5xl">
          Rights Page Body
        </h1>
      </div>
    </div>
  );
};
