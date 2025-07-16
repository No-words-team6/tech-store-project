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
          'w-full h-8 flex items-center justify-center transition border bg-white hover:border-[#313237]',
          {
            'dark:bg-[#0F1121] text-[#B4BDC3] dark:text-[#4A4D58] border-[#B4BDC3] dark:border-[#3B3E4A]':
              disablePrev,
            'dark:bg-[#323542] hover:opacity-80 border-[#B4BDC3] dark:border-transparent text-[#313237] dark:text-[#F1F2F9] hover:cursor-pointer':
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
          'w-full h-8 flex items-center justify-center transition border bg-white hover:border-[#313237]',
          {
            'dark:bg-[#0F1121] text-[#B4BDC3] dark:text-[#4A4D58] border-[#B4BDC3] dark:border-[#3B3E4A]':
              disableNext,
            'dark:bg-[#323542] hover:opacity-80 border-[#B4BDC3] dark:border-transparent text-[#313237] dark:text-[#F1F2F9] hover:cursor-pointer':
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
