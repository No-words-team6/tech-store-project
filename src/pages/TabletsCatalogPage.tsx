import { CatalogPageBody } from '@/components/CatalogPageBody';
import { CatalogPageHeader } from '@/components/CatalogPageHeader';
import { WidthContainer } from '@/components/WidthContainer';
import { PaddingContainer } from '@/components/PaddingContainer';
import { GridContainer } from '@/components/GridContainer';

export const TabletsCatalogPage = () => {
  return (
    <>
      <CatalogPageHeader title={'Tablets'} />

      <WidthContainer>
        <PaddingContainer>
          <GridContainer>
            <div className="col-span-24 grid gap-y-[24px]">
              <CatalogPageBody category={'tablets'} />
            </div>
          </GridContainer>
        </PaddingContainer>
      </WidthContainer>
    </>
  );
};
