import { CatalogPageBody } from '@/components/CatalogPageBody';
import { WidthContainer } from '@/components/WidthContainer';
import { GridContainer } from '@/components/GridContainer';
import { PaddingContainer } from '@/components/PaddingContainer';
import { CatalogPageHeader } from '@/components/CatalogPageHeader';

export const PhonesCatalogPage = () => {
  return (
    <>
      <CatalogPageHeader title={'Mobile phones'} />

      <WidthContainer>
        <PaddingContainer>
          <GridContainer>
            <div className="col-span-24 grid gap-y-[24px]">
              <CatalogPageBody category={'phones'} />
            </div>
          </GridContainer>
        </PaddingContainer>
      </WidthContainer>
    </>
  );
};
