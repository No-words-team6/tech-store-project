import { CatalogPageBody } from '@/components/CatalogPageBody';
import { WidthContainer } from '@/components/WidthContainer';
import { PaddingContainer } from '@/components/PaddingContainer';
import { GridContainer } from '@/components/GridContainer';
import { CatalogPageHeader } from '@/components/CatalogPageHeader';

export const AccessoriesCatalogPage = () => {
  return (
    <>
      <CatalogPageHeader title={'Accessories'} />

      <WidthContainer>
        <PaddingContainer>
          <GridContainer>
            <div className="col-span-24 grid gap-y-[24px]">
              <CatalogPageBody category={'accessories'} />
            </div>
          </GridContainer>
        </PaddingContainer>
      </WidthContainer>
    </>
  );
};
