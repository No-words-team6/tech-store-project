import { useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Heart, ShoppingBag, X } from 'lucide-react';
import logo from '@/assets/images/Logo.svg';
import dlogo from '@/assets/images/Dark-Logo.svg';
import type { Product } from '@/types';
import { ThemeAndLanguageToggle } from '../ThemeAndLanguageToggle';

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  favouritesData: Product[];
  cartItemsAmount: number;
}

export const MobileSidebar = ({
  isOpen,
  onClose,
  favouritesData,
  cartItemsAmount,
}: MobileSidebarProps) => {
  const location = useLocation();
  const { pathname } = location;

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/phones', label: 'Phones' },
    { path: '/tablets', label: 'Tablets' },
    { path: '/accessories', label: 'Accessories' },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full bg-header-background z-[20] transform transition-transform duration-300 md:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex flex-col justify-between h-full box-border">
        {/* Header */}
        <div>
          <div className="border-b border-elements">
            <div className="flex items-center justify-between h-12 px-4">
              <Link
                to="/"
                onClick={onClose}
                className="flex-1 flex items-center h-full px-4"
              >
                <img
                  src={dlogo}
                  alt="Nice Gadgets Light"
                  className="h-6 w-auto block dark:hidden"
                />
                <img
                  src={logo}
                  alt="Nice Gadgets Dark"
                  className="h-6 w-auto hidden dark:block"
                />
              </Link>

              <div className="flex items-center gap-4 ">
                <ThemeAndLanguageToggle />
                <button
                  onClick={onClose}
                  aria-label="Close menu"
                  className="w-10 h-full flex items-center justify-center text-burger-icon"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          <nav className="flex pt-[24px] flex-col items-center gap-6 text-center mb-6">
            {navItems.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                onClick={onClose}
                className={({ isActive }) =>
                  `group text-sm font-semibold uppercase tracking-wide transition-colors pb-1 border-b-2 ${
                    isActive ?
                      'text-burger-icon border-burger-icon'
                    : 'text-[#75767F] border-transparent hover:text-burger-icon hover:border-burger-icon'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex items-center justify-between h-16 border-t border-elements">
          <Link
            to="/favourites"
            onClick={onClose}
            className={`flex flex-col items-center justify-center w-1/2 h-full relative border-r border-elements border-b-2 transition-all duration-300 ${
              pathname === '/favourites' ?
                'text-burger-icon border-burger-icon'
              : 'text-[#75767F] border-transparent hover:text-burger-icon hover:border-burger-icon'
            }`}
          >
            <div className="relative group">
              <Heart
                className={`w-6 h-6 transition-colors ${
                  pathname === '/favourites' ? 'text-burger-icon' : (
                    'group-hover:text-burger-icon'
                  )
                }`}
              />
              {!!favouritesData.length && (
                <span className="absolute -top-1.5 -right-2 bg-[#EB5757] text-white text-[9px] font-semibold rounded-full w-[14px] h-[14px] flex items-center justify-center">
                  {favouritesData.length}
                </span>
              )}
            </div>
          </Link>

          <Link
            to="/cart"
            onClick={onClose}
            className={`flex flex-col items-center justify-center w-1/2 h-full relative border-b-2 transition-all duration-300 ${
              pathname === '/cart' ?
                'text-burger-icon border-burger-icon'
              : 'text-[#75767F] border-transparent hover:text-burger-icon hover:border-burger-icon'
            }`}
          >
            <div className="relative group">
              <ShoppingBag
                className={`w-6 h-6 transition-colors ${
                  pathname === '/cart' ? 'text-burger-icon' : (
                    'group-hover:text-burger-icon'
                  )
                }`}
              />
              {!!cartItemsAmount && (
                <span className="absolute -top-1.5 -right-2 bg-[#EB5757] text-white text-[9px] font-semibold rounded-full w-[14px] h-[14px] flex items-center justify-center">
                  {cartItemsAmount}
                </span>
              )}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
