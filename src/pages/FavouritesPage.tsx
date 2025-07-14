import { BreadcrumbNav } from '@/components/common/BreadcrumbNav';
import { ProductCard } from '@/components/ProductCard';
import { useProductStore } from '@/stores/productStore';
import placeholder from '../../public/img/placeholder-angry-heart.png';
import { WidthContainer } from '@/components/WidthContainer';
import { PaddingContainer } from '@/components/PaddingContainer';
export const FavouritesPage = () => {
  const favouritesStore = useProductStore((state) => state.favouritesStore);
  const productsLength = favouritesStore.length;

  return (
    <WidthContainer>
      <PaddingContainer>
        <div className="px-4 sm:px-8 xl:px-0">
          <BreadcrumbNav />
        </div>

        <div
          className="grid grid-cols-4 gap-4 
              sm:grid-cols-12 
              xl:grid-cols-24 
              px-4 sm:px-8 xl:px-0 
              pt-6 pb-16 sm:pt-10 sm:pb-16 xl:pt-10 xl:pb-20
              gap-y-0"
        >
          <h1
            className="col-span-full
              font-[Mont] font-extrabold
              text-[32px] leading-[41px] tracking-[-0.01em]
              sm:text-[48px] xl:leading-[56px]
              text-[#F1F2F9] mb-2"
          >
            Favourites
          </h1>

          <p
            className="col-span-full
              font-[Mont] font-semibold
              text-[14px] leading-[21px]
              text-[#75767F] mb-10"
          >
            {productsLength} items
          </p>

          {!productsLength && (
            <div
              className="col-span-full flex flex-col items-center justify-center text-center text-[#F1F2F9]
                h-[50vh] sm:h-[60vh] xl:h-[40vh]"
            >
              <img
                src={placeholder}
                alt="empty bag"
                className="col-span-4 col-start-2 sm:col-start-6"
              />
              <h2 className="font-mont text-[#515151] mt-[-20px]">
                You don&apos;t have any favourite items :(
              </h2>
            </div>
          )}

          <div className="col-span-full flex flex-wrap gap-6 justify-center sm:justify-start">
            {favouritesStore.map((product) => (
              <div key={product.id} className="w-[272px]">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </PaddingContainer>
    </WidthContainer>
  );
};
