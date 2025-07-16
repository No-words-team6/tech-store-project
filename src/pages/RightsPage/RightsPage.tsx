import { BreadcrumbNav } from '@/components/common/BreadcrumbNav';
import { WidthContainer } from '@/components/containers/WidthContainer';
import { PaddingContainer } from '@/components/containers/PaddingContainer';
import { GridContainer } from '@/components/containers/GridContainer';
import { useTranslation } from 'react-i18next';
import { sections } from './data/sections';

export const RightsPage = () => {
  const { t } = useTranslation();

  return (
    <WidthContainer>
      <PaddingContainer>
        <GridContainer>
          <div className="col-span-4 sm:col-span-12 xl:col-span-24 grid grid-cols-4 sm:grid-cols-12 xl:grid-cols-24 gap-x-[16px]">
            <BreadcrumbNav />

            <div className="col-span-4 sm:col-span-12 xl:col-span-24 grid grid-cols-4 sm:grid-cols-12 xl:grid-cols-24 gap-x-[16px] gap-y-[24px]">
              <h1 className="col-span-4 sm:col-span-12 xl:col-span-24 text-link-hover-bg dark:text-dark-link-hover-bg font-mont font-bold text-3xl sm:text-4xl">
                {t('terms-policies')}
              </h1>

              <div className="col-span-4 sm:col-span-12 xl:col-span-24 text-link-hover-bg dark:text-dark-link-hover-bg space-y-8">
                {sections.map((section, index) => (
                  <div key={index} className="space-y-2 text-justify">
                    <p className="font-bold">{t(section.title)}</p>
                    <p className="text-[#919a9e] dark:text-[#75767F]">
                      {t(section.content)}
                    </p>
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
