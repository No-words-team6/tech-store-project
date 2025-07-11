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
    <Pagination className="col-span-24">
      <PaginationContent className="bg-none text-white">
        <PaginationItem className="bg-gray-800 rounded-none">
          <PaginationPrevious
            className="rounded-none"
            href="#catalogBar"
            onClick={handlePrev}
          />
        </PaginationItem>

        {preparedQuantityPages.map((page, idx) => (
          <PaginationItem key={idx}>
            {page === -1 ?
              <PaginationEllipsis />
            : <PaginationLink
                href="#catalogBar"
                className={cn('bg-gray-800 rounded-none', {
                  'bg-purple-500': currentPage === page,
                })}
                onClick={() => handleSelectChange(page.toString())}
              >
                {page}
              </PaginationLink>
            }
          </PaginationItem>
        ))}

        <PaginationItem className="bg-gray-800 rounded-none">
          <PaginationNext
            href="#catalogBar"
            className="rounded-none"
            onClick={handleNext}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
