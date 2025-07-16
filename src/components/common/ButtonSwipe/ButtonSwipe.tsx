import { ChevronLeft, ChevronRight } from 'lucide-react';
import cn from 'classnames';

import './buttonSwipe.css';

type Props = {
  onPrevClick?: () => void;
  onNextClick?: () => void;
  disablePrev?: boolean;
  disableNext?: boolean;
};

export const ButtonSwipe = ({
  onPrevClick,
  onNextClick,
  disablePrev = false,
  disableNext = false,
}: Props) => {
  return (
    <div className="-col-start-1 w-[72px] flex justify-between gap-x-[8px]">
      <button
        onClick={onPrevClick}
        className={cn(
          'w-full h-8 flex items-center justify-center border-1 text-button-arrow-text-color bg-button-arrow-bg border-button-arrow-border',
          {
            'bg-button-arrow-bg-disabled text-button-arrow-text-color-disabled border-button-arrow-border-disabled':
              disablePrev,
            'bg-button-arrow-bg text-button-arrow-text-color border-button-arrow-border hover:bg-button-arrow-bg-hover hover:border-button-arrow-border-hover hover:cursor-pointer':
              !disablePrev,
          },
        )}
        aria-label="Scroll left"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={onNextClick}
        className={cn(
          'w-full h-8 flex items-center justify-center border-1 text-button-arrow-text-color bg-button-arrow-bg border-button-arrow-border',
          {
            'bg-button-arrow-bg-disabled text-button-arrow-text-color-disabled border-button-arrow-border-disabled':
              disableNext,
            'bg-button-arrow-bg text-button-arrow-text-color border-button-arrow-border hover:bg-button-arrow-bg-hover hover:border-button-arrow-border-hover hover:cursor-pointer':
              !disableNext,
          },
        )}
        aria-label="Scroll right"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};
