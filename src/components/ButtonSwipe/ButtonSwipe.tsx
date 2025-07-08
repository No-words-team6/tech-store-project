import { ChevronLeft, ChevronRight } from 'lucide-react';

import './buttonSwipe.css';

type Props = {
  onPrevClick?: () => void;
  onNextClick?: () => void;
};

export const ButtonSwipe = ({ onPrevClick, onNextClick }: Props) => {
  return (
    <div className="col-start-23 col-span-2 flex justify-between gap-x-[8px]">
      <button
        onClick={onPrevClick}
        className="w-full h-[32px] flex items-center justify-center button-color text-white hover:opacity-80 transition"
        aria-label="Scroll left"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={onNextClick}
        className="w-full h-[32px] flex items-center justify-center button-color text-white hover:opacity-80 transition"
        aria-label="Scroll right"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};
