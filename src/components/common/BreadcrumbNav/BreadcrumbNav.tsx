import type React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { House, ChevronRight } from 'lucide-react';

const transformer = (segment: string): string => {
  const replaced = segment.replace(/-/g, ' ');

  const words = replaced.split(' ');

  const formattedWords = words.map((word) => {
    if (word.toLowerCase() === 'iphone') {
      return 'iPhone';
    }

    if (word.toLowerCase() === 'ipad') {
      return 'iPad';
    }

    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  return formattedWords.join(' ');
};

export const BreadcrumbNav: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(Boolean);

  return (
    <nav className="col-span-24 flex gap-x-[8px] text-gray-100 font-bold cursor-pointer mb-[40px]">
      <Link to="/">
        <House className="h-[16px] w-[16px]" />
      </Link>

      {pathnames.map((path, index) => {
        const title = transformer(path);
        const to = '/' + pathnames.slice(0, index + 1).join('/');
        return (
          <div
            key={`${path}-${index}`}
            className="flex items-center gap-x-[8px] font-mont text-xs"
          >
            <ChevronRight className="h-[16px] w-[16px]" />
            <Link to={to}>{title}</Link>
          </div>
        );
      })}
    </nav>
  );
};
