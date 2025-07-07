import { NavLink } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
import logo from '@/assets/images/Logo.svg';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `relative flex items-center h-full text-sm font-semibold uppercase transition-colors border-b-4 ${
    isActive ?
      'border-[#F1F2F9] text-[#F1F2F9]'
    : 'border-transparent text-[#75767F] hover:text-[#F1F2F9]'
  }`;

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-black border-b border-[#3B3E4A] font-[montBold]">
      <div className="w-full pl-6 pr-0 lg:pl-12 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <NavLink to="/">
            <img src={logo} alt="Nice Gadgets" className="h-6 w-auto" />
          </NavLink>

          <nav className="flex relative h-12 flex-1 gap-8">
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

        <div className="flex items-center pr-6 lg:pr-12">
          <NavLink
            to="/favourites"
            className="flex items-center justify-center h-full w-[48px] border-l border-[#3B3E4A] group"
          >
            <Heart className="w-5 h-5 text-[#75767F] group-hover:text-[#F1F2F9] transition-colors" />
          </NavLink>

          <NavLink
            to="/cart"
            className="flex items-center justify-center h-full w-[48px] border-l border-[#3B3E4A] group"
          >
            <ShoppingBag className="h-5 w-5 text-[#75767F] group-hover:text-[#F1F2F9] transition-colors" />
          </NavLink>
        </div>
      </div>
    </header>
  );
};
