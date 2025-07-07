import { Heart } from 'lucide-react';

export const ButtonHeart = () => {
  return (
    <button className="w-10 h-10 bg-[#323542] hover:bg-[#4A4D58] flex items-center justify-center hover:cursor-pointer">
      <Heart className="w-4 h-4" />
    </button>
  );
};
