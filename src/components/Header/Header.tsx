import { NavLink } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
import logo from '../../assets/images/Logo.svg';

const isLinkActive = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'border-b-4 border-black pb-1' : '';

export const Header = () => {
  return (
    <header className="bg-blue-400 flex items-center justify-center gap-x-10 h-16">
      <div className="flex items-center gap-8">
        <img src={logo} alt="Nice Gadgets" className="h-6 w-auto" />
      </div>

      <div className="font-mont font-bold flex flex-row gap-x-5 uppercase">
        <NavLink className={isLinkActive} to="/">
          Home
        </NavLink>

        <NavLink className={isLinkActive} to="/phones">
          Phones
        </NavLink>

        <NavLink className={isLinkActive} to="/tablets">
          Tablets
        </NavLink>

        <NavLink className={isLinkActive} to="/accessories">
          Accessories
        </NavLink>

        <NavLink className={isLinkActive} to="/favourites">
          <Heart className="w-6 h-6" />
        </NavLink>

        <NavLink className={isLinkActive} to="/cart">
          <ShoppingBag className="w-6 h-6" />
        </NavLink>
      </div>
    </header>
  );
};
