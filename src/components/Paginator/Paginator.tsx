import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import cn from 'classnames';

interface PaginatorProps {
  quantityPages: number[];
  currentPage: number;
  setCurrentPage: (value: number) => void;
}

export const Paginator: React.FC<PaginatorProps> = ({
  quantityPages,
  currentPage,
  setCurrentPage,
}) => {
  const pagesLength = quantityPages.length;

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleChoose = (numberPage: number) => {
    setCurrentPage(numberPage);
  };

  const handleNext = () => {
    if (currentPage < pagesLength) {
      setCurrentPage(currentPage + 1);
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
            href="#"
            onClick={handlePrev}
          />
        </PaginationItem>

        {preparedQuantityPages.map((page, idx) => (
          <PaginationItem key={idx}>
            {page === -1 ?
              <PaginationEllipsis />
            : <PaginationLink
                href="#"
                className={cn('bg-gray-800 rounded-none', {
                  'bg-purple-500': currentPage === page,
                })}
                onClick={() => handleChoose(page)}
              >
                {page}
              </PaginationLink>
            }
          </PaginationItem>
        ))}

        <PaginationItem className="bg-gray-800 rounded-none">
          <PaginationNext
            href="#"
            className="rounded-none"
            onClick={handleNext}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
