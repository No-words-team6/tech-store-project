import { ChevronLeft } from 'lucide-react';
import type React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  to: string;
}

export const NavBack: React.FC<Props> = ({ to }) => {
  return (
    <Link
      to={`/${to}`}
      className="flex gap-x-[4px] col-span-24 text-gray-100 font-bold cursor-pointer mb-[16px]"
    >
      <ChevronLeft className="w-[16px] h-[16px]" />
      <p className="font-mont text-xs">Back</p>
    </Link>
  );
};
