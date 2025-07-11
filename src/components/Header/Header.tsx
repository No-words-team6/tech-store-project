import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Heart, ShoppingBag, Menu } from 'lucide-react';
import logo from '@/assets/images/Logo.svg';
import { MobileSidebar } from './MobileSidebar';

import './header.css';
import { useProductStore } from '@/stores/productStore';

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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const favouritesData = useProductStore((state) => state.favouritesStore);
  const cartData = useProductStore((state) => state.cartStore);

  const cartItemsAmount = cartData.reduce((acc, product) => {
    return acc + product.quantity;
  }, 0);

  return (
    <header className="back-color sticky top-0 z-50 w-full h-16 shadow-[0_1px_0_0_#323542]">
      <div className="w-full flex items-center justify-between">
        <div className="pl-4 flex items-center gap-8">
          <NavLink to="/">
            <img src={logo} alt="Nice Gadgets" className="h-6 w-auto" />
          </NavLink>

          <nav className="hidden sm:flex items-center h-16 gap-16">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/phones" className={navLinkClass}>
              Phones
            </NavLink>
            <NavLink to="/tablets" className={navLinkClass}>
              Tablets
            </NavLink>
            <NavLink to="/accessories" className={navLinkClass}>
              Accessories
            </NavLink>
          </nav>
        </div>

        <div className="flex items-center">
          <div className="hidden sm:flex">
            <NavLink
              to="/favourites"
              className={iconLinkClass}
              aria-label="Favourites"
            >
              <div className="absolute">
                <Heart className="w-5 h-5 text-inherit transition-colors" />
                {!!favouritesData.length && (
                  <span className="absolute -top-1.5 -right-2 bg-[#EB5757] text-white text-[9px] font-semibold rounded-full w-[14px] h-[14px] flex items-center justify-center">
                    {favouritesData.length}
                  </span>
                )}
              </div>
            </NavLink>

            <NavLink to="/cart" className={iconLinkClass} aria-label="Cart">
              <div className="absolute">
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
            className="sm:hidden pr-4"
            onClick={() => setIsSidebarOpen(true)}
            aria-label="Open mobile menu"
          >
            <Menu className="w-6 h-6 text-[#F1F2F9]" />
          </button>
        </div>
      </div>

      <MobileSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </header>
  );
};
