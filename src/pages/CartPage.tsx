import { NavBack } from '@/components/NavBack';
import { Button } from '@/components/ui/button';
import type { Product } from '@/types';
import {
  decreaseQuantity,
  getFromLocale,
  increaseQuantity,
  toggleProd,
  type LocaleProduct,
} from '@/utils/storageService';
import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import placeholder from '../../public/img/placeholder-empty-bag.svg';
import { Link } from 'react-router-dom';

export const CartPage = () => {
  const [localData, setLocalData] = useState<LocaleProduct[]>([]);
  const [showModal, setShowModal] = useState(false);

  const { totalAmount, totalItems } = localData.reduce(
    (acc, product) => {
      acc.totalAmount += product.price * product.quantity;
      acc.totalItems += product.quantity;
      return acc;
    },
    { totalAmount: 0, totalItems: 0 },
  );

  const storageKeyCart = 'cart';

  useEffect(() => {
    setLocalData(getFromLocale(storageKeyCart));
  }, []);

  const handleDelete = (item: Product) => {
    const newData = localData.filter(
      (product) => product.itemId !== item.itemId,
    );

    toggleProd(item, storageKeyCart);
    setLocalData(newData);
  };

  const handleDecrease = (itemId: string) => {
    decreaseQuantity(itemId);
    setLocalData(getFromLocale(storageKeyCart));
  };

  const handleIncrease = (itemId: string) => {
    increaseQuantity(itemId);
    setLocalData(getFromLocale(storageKeyCart));
  };

  return (
    <>
      <NavBack to={''} />
      <h1 className="col-span-24 color-white font-mont font-bold text-5xl leading-[56px]">
        Cart
      </h1>

      {!localData.length && (
        <div className="col-span-24 grid grid-cols-24 mt-24 gap-y-6 place-items-center">
          <img
            src={placeholder}
            alt="empty bag"
            className="col-span-2 col-start-12"
          />

          <h2 className="col-span-6 col-start-10 font-mont text-[#515151]">
            Your cart is empty
          </h2>

          <Link
            to={'/'}
            className="col-span-4 col-start-11 justify-self-stretch mt-2"
          >
            <Button className="h-[48px] bg-[#905BFF] rounded-none w-full hover:cursor-pointer">
              Back to shopping
            </Button>
          </Link>
        </div>
      )}

      {!!localData.length && (
        <div className="col-span-24 grid grid-cols-24 gap-[16px] mt-[32px]">
          <div className="col-span-16 flex flex-col gap-4">
            {localData.map((product) => {
              return (
                <div
                  key={product.id}
                  className="flex flex-col md:flex-row items-center justify-between bg-[#161827] p-6"
                >
                  <div className="flex items-center gap-6 min-w-0">
                    <div className="flex items-center gap-6">
                      <button
                        className="text-white opacity-50 hover:opacity-100 w-6 h-6 flex items-center justify-center"
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
                      <p className="font-mont text-[14px] text-white">
                        {product.name}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-x-[24px]">
                    <div className="flex h-[32px]">
                      <Button
                        onClick={() => {
                          handleDecrease(product.itemId);
                        }}
                        className="w-[32px] bg-[#323542] rounded-none h-[32px]"
                      >
                        -
                      </Button>

                      <span className="w-[32px] font-mont text-[14px] text-white flex items-center justify-center">
                        {product.quantity}
                      </span>

                      <Button
                        onClick={() => {
                          handleIncrease(product.itemId);
                        }}
                        className="w-[32px] h-[32px] bg-[#323542] rounded-none"
                      >
                        +
                      </Button>
                    </div>
                    <h3 className="font-mont text-[22px] text-white">
                      {`$${product.price}`}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="border border-[#3B3E4A] col-span-8 p-[24px] flex flex-col gap-y-[24px] self-start">
            <div className="flex flex-col items-center justify-center">
              <h3 className="font-mont font-bold text-white text-[32px]">{`$${totalAmount}`}</h3>
              <p className="font-mont text-[14px] text-white">{`Total for ${totalItems} items`}</p>
            </div>
            <hr className="w-full border-t border-[#3B3E4A]" />
            <Button
              onClick={() => setShowModal(true)}
              className="h-[48px] bg-[#905BFF] rounded-none"
            >
              Checkout
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
                  onClick={() => {
                    localStorage.removeItem('cart');
                    setLocalData([]);
                  }}
                  className="bg-red-600 hover:bg-red-700 rounded-none flex-1"
                >
                  Clear cart
                </Button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};
