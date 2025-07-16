import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { useChangeSearchParam } from '@/hooks/useChangeSearchParam';
import cn from 'classnames';

interface PaginatorProps {
  quantityPages: number[];
  currentPage: number;
}

export const Paginator: React.FC<PaginatorProps> = ({
  quantityPages,
  currentPage,
}) => {
  const changeSearchParam = useChangeSearchParam();

  const handleSelectChange = (value: string) => {
    changeSearchParam('numberOfPage', value);
  };

  const pagesLength = quantityPages.length;

  const handlePrev = () => {
    if (currentPage > 1) {
      handleSelectChange(String(currentPage - 1));
    }
  };

  const handleNext = () => {
    if (currentPage < pagesLength) {
      handleSelectChange(String(currentPage + 1));
    }
  };

  const prepareQuantityPages = (): number[] => {
    if (pagesLength < 7) {
      return quantityPages;
    }

    const numberOfPages: number[] = [1];

    if (currentPage > 4) {
      numberOfPages.push(-1);
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(pagesLength - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      numberOfPages.push(i);
    }

    if (currentPage < pagesLength - 3) {
      numberOfPages.push(-1);
    }

    numberOfPages.push(pagesLength);

    return numberOfPages;
  };

  const preparedQuantityPages = prepareQuantityPages();

  return (
    <Pagination className="col-span-4 sm:col-span-12 xl:col-span-24">
      <PaginationContent
        className="bg-none text-link-hover-bg 
            dark:text-dark-link-hover-bg"
      >
        <PaginationItem className="rounded-none">
          <PaginationPrevious
            className="rounded-none"
            href="#breadcrumbId"
            onClick={handlePrev}
          />
        </PaginationItem>

        {preparedQuantityPages.map((page, idx) => (
          <PaginationItem key={idx}>
            {page === -1 ?
              <PaginationEllipsis />
            : <PaginationLink
                href="#breadcrumbId"
                className={cn(
                  'bg-white dark:bg-gray-800 hover:bg-gray-200 hover:dark:bg-gray-700 border-gray-200 border dark:border-transparent rounded-none',
                  {
                    'bg-[#313237] hover:bg-[#313237] text-white hover:text-white dark:bg-purple-500 hover:dark:bg-purple-400':
                      currentPage === page,
                  },
                )}
                onClick={() => handleSelectChange(page.toString())}
              >
                {page}
              </PaginationLink>
            }
          </PaginationItem>
        ))}

        <PaginationItem className="rounded-none">
          <PaginationNext
            href="#breadcrumbId"
            className="rounded-none"
            onClick={handleNext}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
