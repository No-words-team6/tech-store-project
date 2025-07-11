import { CatalogPageBody } from '@/components/CatalogPageBody';
import { CatalogPageHeader } from '@/components/CatalogPageHeader';
import { WidthContainer } from '@/components/WidthContainer';
import { PaddingContainer } from '@/components/PaddingContainer';
import { GridContainer } from '@/components/GridContainer';

const videoSources = [
  '/videos/tabletsBanner-1.mp4',
  '/videos/phonesBanner-2.mp4',
];

export const TabletsCatalogPage = () => {
  return (
    <>
      <CatalogPageHeader title={'Tablets'} videoSources={videoSources} />

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
