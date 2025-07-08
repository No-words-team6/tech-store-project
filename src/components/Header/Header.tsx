import { NavLink } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
import logo from '@/assets/images/Logo.svg';

import './header.css';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `h-16 flex items-center justify-center box-content text-[12px] leading-[11px] font-[800] tracking-[0.48px] uppercase transition-colors border-b-4 ${
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
  return (
    <header className="back-color sticky top-0 z-50 w-full h-16 font-[montBold] shadow-[0_1px_0_0_#323542]">
      <div className="w-full flex items-center justify-between">
        <div className="pl-4 flex items-center gap-8">
          <NavLink to="/">
            <img src={logo} alt="Nice Gadgets" className="h-6 w-auto" />
          </NavLink>

          <nav className="flex items-center h-16 gap-16">
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
          <NavLink
            to="/favourites"
            className={iconLinkClass}
            aria-label="Favourites"
          >
            <Heart className="w-5 h-5 text-inherit transition-colors" />
          </NavLink>

          <NavLink to="/cart" className={iconLinkClass} aria-label="Cart">
            <ShoppingBag className="w-5 h-5 text-inherit transition-colors" />
          </NavLink>
        </div>
      </div>
    </header>
  );
};
