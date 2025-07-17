import { NavBack } from '@/components/common/NavBack';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import placeholder from '../../public/img/placeholder-empty-bag.svg';
import { Link } from 'react-router-dom';
import { useProductStore } from '@/stores/productStore';
import { useTranslation } from 'react-i18next';
import { Loader } from '@/components/common/Loader';

export const CartPage = () => {
  const [showModal, setShowModal] = useState(false);

  const { t } = useTranslation();

  const cartStore = useProductStore((state) => state.cartStore);

  const clearCart = useProductStore((state) => state.clearCart);
  const decreaseQuantity = useProductStore((state) => state.decreaseQuantity);
  const increaseQuantity = useProductStore((state) => state.increaseQuantity);
  const handleDelete = useProductStore((state) => state.toggleCartProduct);
  const startFakeLoading = useProductStore((state) => state.startFakeLoading);

  const isLoading = useProductStore((state) => state.isLoading);

  const { totalAmount, totalItems } = cartStore.reduce(
    (acc, product) => {
      acc.totalAmount += product.price * product.quantity;
      acc.totalItems += product.quantity;
      return acc;
    },
    { totalAmount: 0, totalItems: 0 },
  );

  useEffect(() => {
    startFakeLoading();
  }, [startFakeLoading]);

  return (
    <>
      <div className="max-w-[1200px] pt-[24px] pb-[80px] grid grid-cols-4 sm:grid-cols-12 xl:grid-cols-24 mx-4 sm:mx-6 lg:mx-8 xl:mx-auto">
        <NavBack />
        <h1 className="col-span-4 sm:col-span-12 xl:col-span-24 text-link-hover-bg dark:text-dark-link-hover-bg font-mont font-bold text-[32px] sm:text-5xl leading-[56px]">
          {t('cart')}
        </h1>

        {!cartStore.length && (
          <div className="col-span-4 sm:col-span-12 xl:col-span-24 grid grid-cols-4 sm:grid-cols-12 xl:grid-cols-24 mt-24 gap-y-6 place-items-center">
            <img
              src={placeholder}
              alt="empty bag"
              className="col-span-2 col-start-2 sm:col-start-6 xl:col-start-12"
            />

            <h2 className="col-span-4 xl:col-span-6 col-start-1 sm:col-start-5 xl:col-start-10 font-mont text-[#515151]">
              {t('empty-cart')}
            </h2>

            <Link
              to={'/'}
              className="col-span-2 sm:col-span-4 col-start-2 sm:col-start-5 xl:col-start-11 justify-self-stretch mt-2"
            >
              <Button className="h-[48px] bg-[#313237] dark:bg-[#905BFF] hover:bg-[#46484e] dark:hover:bg-[#A378FF] text-[#F1F2F9] rounded-none w-full hover:cursor-pointer">
                {t('back-to-shopping')}
              </Button>
            </Link>
          </div>
        )}

        {!!cartStore.length && (
          <div className="col-span-4 sm:col-span-12 xl:col-span-24 grid grid-cols-4 sm:grid-cols-12 xl:grid-cols-24 gap-[16px] mt-[32px]">
            <div className="col-span-4 sm:col-span-12 xl:col-span-16 flex flex-col gap-4">
              {cartStore.map((product) => {
                return (
                  <div
                    key={product.id}
                    className="flex flex-col sm:flex-row items-center justify-between border border-[#E2E6E9] dark:border-transparent bg-white dark:bg-[#161827] p-6"
                  >
                    <div className="w-full sm:w-auto flex items-center gap-6 min-w-0">
                      <div className="flex items-center gap-6">
                        <button
                          className="text-black dark:text-white opacity-50 hover:opacity-100 w-6 h-6 flex items-center justify-center hover:cursor-pointer"
                          onClick={() => handleDelete(product)}
                        >
                          ✕
                        </button>
                        <div className="w-[80px] h-[80px] flex">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                      <div className="flex-grow min-w-0">
                        <p className="font-mont text-[14px] text-link-hover-bg dark:text-dark-link-hover-bg">
                          {product.name}
                        </p>
                      </div>
                    </div>

                    <div className="flex w-full sm:w-auto items-center justify-between gap-x-[24px] pl-6 sm:pl-[24px] pt-4 sm:pt-0">
                      <div className="flex h-[32px]">
                        <Button
                          onClick={() => decreaseQuantity(product.itemId)}
                          className="w-[32px] bg-[#323542] rounded-none h-[32px] hover:cursor-pointer"
                        >
                          -
                        </Button>

                        <span className="w-[32px] font-mont text-[14px] text-link-hover-bg dark:text-dark-link-hover-bg flex items-center justify-center">
                          {product.quantity}
                        </span>

                        <Button
                          onClick={() => increaseQuantity(product.itemId)}
                          className="w-[32px] h-[32px] bg-[#323542] rounded-none hover:cursor-pointer"
                        >
                          +
                        </Button>
                      </div>
                      <h3 className="font-mont font-extrabold text-[22px] text-link-hover-bg dark:text-dark-link-hover-bg">
                        {`$${product.price}`}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="border border-[#3B3E4A] col-span-4 sm:col-span-12 xl:col-span-8 p-[24px] flex flex-col gap-y-[24px] self-start">
              <div className="flex flex-col items-center justify-center">
                <h3 className="font-mont font-bold text-link-hover-bg dark:text-dark-link-hover-bg text-[32px]">{`$${totalAmount}`}</h3>
                <p className="font-mont text-[14px] text-link-hover-bg dark:text-dark-link-hover-bg">
                  {t('total-for')}
                  {totalItems === 1 ?
                    ` ${totalItems} ${t('item')}`
                  : ` ${totalItems} ${t('items')}`}
                </p>
              </div>
              <hr className="w-full border-t border-[#3B3E4A]" />
              <Button
                onClick={() => setShowModal(true)}
                className="h-[48px] bg-[#905BFF] rounded-none hover:cursor-pointer"
              >
                {t('checkout')}
              </Button>
            </div>
          </div>
        )}

        <Dialog.Root open={showModal} onOpenChange={setShowModal}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50" />
            <Dialog.Content className="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1e1f2a] text-white p-6 rounded-lg border border-[#3B3E4A] w-[90%] max-w-[400px] font-mont shadow-lg">
              <Dialog.Title className="text-xl font-bold">
                Checkout is not implemented yet.
              </Dialog.Title>
              <Dialog.Description className="mt-2 mb-4">
                Do you want to clear the Cart?
              </Dialog.Description>
              <div className="flex gap-2">
                <Dialog.Close asChild>
                  <Button className="bg-[#323542] rounded-none flex-1">
                    Keep cart
                  </Button>
                </Dialog.Close>
                <Dialog.Close asChild>
                  <Button
                    onClick={() => clearCart()}
                    className="bg-red-600 hover:bg-red-700 rounded-none flex-1"
                  >
                    Clear cart
                  </Button>
                </Dialog.Close>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>

      {isLoading && <Loader />}
    </>
  );
};
