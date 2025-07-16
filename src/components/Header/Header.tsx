import { useState } from 'react';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import { Heart, ShoppingBag, Menu } from 'lucide-react';
import logo from '@/assets/images/Logo.svg';
import { MobileSidebar } from './MobileSidebar';

import { useProductStore } from '@/stores/productStore';
import { useTranslation } from 'react-i18next';
import { ThemeToggle } from '../ThemeToggle';
import { HeaderPhonesMenu } from './HeaderPhonesMenu/HeaderPhonesMenu';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `h-16 flex items-center justify-center box-border text-[12px] leading-[11px] font-mont font-[800] tracking-[0.48px] uppercase transition-colors border-b-4 ${
    isActive ?
      'border-link-hover-bg text-link-hover-bg'
    : 'border-transparent text-link-text hover:text-link-hover-bg'
  }`;

const iconLinkClass = ({ isActive }: { isActive: boolean }) =>
  `h-16 w-16 flex items-center justify-center group border border-elements transition-colors ${
    isActive ?
      'border-b-4 border-b-link-hover-bg text-link-hover-bg'
    : 'text-link-text hover:text-link-hover-bg'
  }`;

export const Header = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { t } = useTranslation();

  const favouritesData = useProductStore((state) => state.favouritesStore);
  const cartData = useProductStore((state) => state.cartStore);
  const cartItemsAmount = cartData.reduce(
    (acc, product) => acc + product.quantity,
    0,
  );

  const [hoveredLink, setHoveredLink] = useState<
    'phones' | 'tablets' | 'accessories' | null
  >(null);

  return (
    <header className="bg-header-background sticky top-0 z-50 w-full h-12 sm:h-16 shadow-[0_1px_0_0_rgb(var(--header-elements))]">
      <div className="w-full pl-4 sm:pl-6 sm:pr-0 lg:pl-0 lg:pr-0">
        <div className="h-12 sm:h-16 flex items-center justify-between">
          <div className="flex items-center gap-6 sm:gap-8">
            <NavLink to="/">
              <img src={logo} alt="Nice Gadgets" className="h-6 w-auto" />
            </NavLink>

            <nav className="hidden sm:flex items-center h-16 gap-16 relative">
              <NavLink to="/" className={navLinkClass}>
                {t('home')}
              </NavLink>

              {(['phones', 'tablets', 'accessories'] as const).map((type) => (
                <div
                  key={type}
                  className="relative"
                  onMouseEnter={() => setHoveredLink(type)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <NavLink to={`/${type}`} className={navLinkClass}>
                    {t(type)}
                  </NavLink>

                  {hoveredLink === type && (
                    <div className="absolute top-full left-0 z-40 pt-3 ml-[-18px]">
                      <HeaderPhonesMenu type={type} />
                    </div>
                  )}
                </div>
              ))}

              <div
                className={`
                         fixed inset-x-0 top-16 min-h-[240px]
                         backdrop-blur-md bg-header-background/60 z-30 transition-opacity ease-in-out pointer-events-none
                         ${hoveredLink ? 'opacity-100 duration-0' : 'opacity-0 duration-1500'}
                           `}
              />
            </nav>
          </div>

          <div className="flex items-center sm:gap-2">
            <ThemeToggle />
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

            <button
              className="sm:hidden mr-4"
              onClick={() => setIsSidebarOpen(true)}
              aria-label="Open mobile menu"
            >
              <Menu className="w-6 h-6 text-burger-icon" />
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
