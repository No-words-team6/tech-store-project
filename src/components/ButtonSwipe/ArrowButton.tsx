import { ChevronLeft, ChevronRight } from 'lucide-react';

import './buttonSwipe.css';

type Props = {
  onPrevClick?: () => void;
  onNextClick?: () => void;
};

export const SectionArrows = ({ onPrevClick, onNextClick }: Props) => {
  return (
    <div className="flex gap-x-[16px] ml-auto">
      <button
        onClick={onPrevClick}
        className="w-[32px] h-[32px] flex items-center justify-center button-color text-white hover:opacity-80 transition"
        aria-label="Scroll left"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={onNextClick}
        className="w-[32px] h-[32px] flex items-center justify-center button-color text-white hover:opacity-80 transition"
        aria-label="Scroll right"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};
