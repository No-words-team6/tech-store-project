import { BreadcrumbNav } from '@/components/common/BreadcrumbNav';
import { WidthContainer } from '@/components/WidthContainer';
import { PaddingContainer } from '@/components/PaddingContainer';
import { GridContainer } from '@/components/GridContainer';
import { useTranslation } from 'react-i18next';
import { sections } from './data/sections';

export const RightsPage = () => {
  const { t } = useTranslation();

  return (
    <WidthContainer>
      <PaddingContainer>
        <GridContainer>
          <div className="col-span-24 grid grid-cols-24 gap-x-[16px] pt-[24px] pb-[80px]">
            <BreadcrumbNav />

            <div className="col-span-24 grid grid-cols-24 gap-x-[16px] gap-y-[24px]">
              <h1 className="col-span-24 text-white font-mont font-bold text-5xl">
                {t('terms-policies')}
              </h1>

              <div className="col-span-24 text-[#C1C2C7] space-y-8">
                {sections.map((section, index) => (
                  <div key={index} className="space-y-2">
                    <p className="font-bold">{t(section.title)}</p>
                    <p>{t(section.content)}</p>
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
