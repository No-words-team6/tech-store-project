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
    <div className="col-start-23 col-span-2 flex justify-between gap-x-[8px]">
      <button
        onClick={onPrevClick}
        className={cn(
          'w-full h-8 flex items-center justify-center transition border',
          {
            'bg-[#0F1121] text-[#4A4D58] border-[#3B3E4A]': disablePrev,
            'bg-[#323542] hover:opacity-80 border-transparent text-[#F1F2F9] hover:cursor-pointer':
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
          'w-full h-8 flex items-center justify-center transition border ',
          {
            'bg-[#0F1121] text-[#4A4D58] border-[#3B3E4A]': disableNext,
            'bg-[#323542] hover:opacity-80 border-transparent text-[#F1F2F9] hover:cursor-pointer':
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
