import { BreadcrumbNav } from '@/components/common/BreadcrumbNav';
import { sections } from './data/sections';
import { WidthContainer } from '@/components/WidthContainer';
import { PaddingContainer } from '@/components/PaddingContainer';
import { GridContainer } from '@/components/GridContainer';

export const RightsPage = () => {
  return (
    <WidthContainer>
      <PaddingContainer>
        <GridContainer>
          <div className="col-span-24 grid grid-cols-24 gap-x-[16px] pt-[24px] pb-[80px]">
            <BreadcrumbNav />

            <div className="col-span-24 grid grid-cols-24 gap-x-[16px] gap-y-[24px]">
              <h1 className="col-span-24 text-white font-mont font-bold text-5xl">
                Terms & Policies
              </h1>

              <div className="col-span-24 text-[#C1C2C7] space-y-8">
                {sections.map((section, index) => (
                  <div key={index} className="space-y-2">
                    <p className="font-bold">{section.title}</p>
                    <p>{section.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </GridContainer>
      </PaddingContainer>
    </WidthContainer>
  );
};
