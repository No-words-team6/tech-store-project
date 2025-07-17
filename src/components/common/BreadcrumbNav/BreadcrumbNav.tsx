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
    <nav
      id="breadcrumbId"
      className="col-span-4 sm:col-span-12 xl:col-span-24 flex gap-x-[8px] text-link-hover-bg dark:text-dark-link-hover-bg font-bold cursor-pointer mb-6 sm:mb-10"
    >
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
            {index === pathnames.length - 1 ?
              <span className="text-breadcrumb-color-current cursor-default truncate max-w-[50vw]">
                {title}
              </span>
            : <Link
                to={to}
                className="text-breadcrumb-color hover:text-breadcrumb-color-hover"
              >
                {title}
              </Link>
            }
          </div>
        );
      })}
    </nav>
  );
};
