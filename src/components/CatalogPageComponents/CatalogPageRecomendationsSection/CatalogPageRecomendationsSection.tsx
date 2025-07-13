import type React from 'react';
import { ItemCarousel, type carouselItem } from '../ItemCarousel';
import { WidthContainer } from '@/components/WidthContainer';
import { GridContainer } from '@/components/GridContainer';

interface Props {
  carouselItems: carouselItem[];
}

export const CatalogPageRecomendationsSection: React.FC<Props> = ({
  carouselItems,
}) => {
  return (
    <div className="">
      <WidthContainer>
        <GridContainer>
          <div className="flex justify-center test text-white text-4xl col-span-24">
            <h2 className="color-white font-mont font-extrabold text-[22px] sm:text-[32px]">
              Elevate Your Tech: Top 3 New Arrivals
            </h2>
            <ItemCarousel carouselItems={carouselItems} />
          </div>
        </GridContainer>
      </WidthContainer>
    </div>
  );
};
