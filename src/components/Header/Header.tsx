import { useState } from 'react';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import { Heart, ShoppingBag, Menu } from 'lucide-react';
import logo from '@/assets/images/Logo.svg';
import { MobileSidebar } from './MobileSidebar';

import { useProductStore } from '@/stores/productStore';
import { useTranslation } from 'react-i18next';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `h-16 flex items-center justify-center box-border text-[12px] leading-[11px] font-mont font-[800] tracking-[0.48px] uppercase transition-colors border-b-4 ${
    isActive ?
      'border-[#F1F2F9] text-[#F1F2F9]'
    : 'border-transparent text-[#75767F] hover:text-[#F1F2F9]'
  }`;

const iconLinkClass = ({ isActive }: { isActive: boolean }) =>
  `h-16 w-16 flex items-center justify-center group border border-[#323542] transition-colors ${
    isActive ?
      'border-b-4 border-b-[#F1F2F9] text-[#F1F2F9]'
    : 'text-[#75767F] hover:text-[#F1F2F9]'
  }`;

export const Header = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { t } = useTranslation();

  const favouritesData = useProductStore((state) => state.favouritesStore);
  const cartData = useProductStore((state) => state.cartStore);

  const cartItemsAmount = cartData.reduce((acc, product) => {
    return acc + product.quantity;
  }, 0);

  return (
    <header className="back-color sticky top-0 z-50 w-full h-12 sm:h-16 shadow-[0_1px_0_0_#323542]">
      <div className="w-full pl-4 sm:pl-6 sm:pr-0 lg:pl-0 lg:pr-0">
        <div className="h-12 sm:h-16 flex items-center justify-between">
          {/* Лого + навігація */}
          <div className="flex items-center gap-6 sm:gap-8">
            <NavLink to="/">
              <img src={logo} alt="Nice Gadgets" className="h-6 w-auto" />
            </NavLink>

            <nav className="hidden sm:flex items-center h-16 gap-16">
              <NavLink to="/" className={navLinkClass}>
                {t('home')}
              </NavLink>
              <NavLink to="/phones" className={navLinkClass}>
                {t('phones')}
              </NavLink>
              <NavLink to="/tablets" className={navLinkClass}>
                {t('tablets')}
              </NavLink>
              <NavLink to="/accessories" className={navLinkClass}>
                {t('accessories')}
              </NavLink>
            </nav>
          </div>

          {/* Іконки + бургер */}
          <div className="flex items-center sm:gap-2">
            {/* Іконки */}
            <div className="hidden sm:flex">
              <NavLink
                to="/favourites"
                className={iconLinkClass}
                aria-label="Favourites"
              >
                <div className="relative">
                  <Heart className="w-5 h-5 text-inherit transition-colors" />
                  {!!favouritesData.length && (
                    <span className="absolute -top-1.5 -right-2 bg-[#EB5757] text-white text-[9px] font-semibold rounded-full w-[14px] h-[14px] flex items-center justify-center">
                      {favouritesData.length}
                    </span>
                  )}
                </div>
              </NavLink>

              <NavLink
                to="/cart"
                state={{
                  search: searchParams.toString(),
                  previousPage: location.pathname,
                }}
                className={iconLinkClass}
                aria-label="Cart"
              >
                <div className="relative">
                  <ShoppingBag className="w-5 h-5 text-inherit transition-colors" />
                  {!!cartItemsAmount && (
                    <span className="absolute -top-1.5 -right-2 bg-[#EB5757] text-white text-[9px] font-semibold rounded-full w-[14px] h-[14px] flex items-center justify-center">
                      {cartItemsAmount}
                    </span>
                  )}
                </div>
              </NavLink>
            </div>

            {/* Бургер */}
            <button
              className="sm:hidden mr-4"
              onClick={() => setIsSidebarOpen(true)}
              aria-label="Open mobile menu"
            >
              <Menu className="w-6 h-6 text-[#F1F2F9]" />
            </button>
          </div>
        </div>
      </div>

      <MobileSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        favouritesData={favouritesData}
        cartItemsAmount={cartItemsAmount}
      />
    </header>
  );
};
