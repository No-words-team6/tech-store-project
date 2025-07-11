import { CatalogPageBody } from '@/components/CatalogPageBody';
import { WidthContainer } from '@/components/WidthContainer';
import { GridContainer } from '@/components/GridContainer';
import { PaddingContainer } from '@/components/PaddingContainer';
import { CatalogPageHeader } from '@/components/CatalogPageHeader';

const videoSources = [
  '/videos/phonesBanner-1.mp4',
  '/videos/phonesBanner-2.mp4',
  '/videos/phonesBanner-4.mp4',
];

export const PhonesCatalogPage = () => {
  return (
    <>
      <CatalogPageHeader title={'Mobile phones'} videoSources={videoSources} />

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
