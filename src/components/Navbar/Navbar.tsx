import { NavLink } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';

const isLinkActive = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'border-b-4 border-black pb-1' : '';

export const Navbar = () => {
  return (
    <div className="font-mont font-bold flex flex-row gap-x-5 uppercase">
      <NavLink
        className={isLinkActive}
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        className={isLinkActive}
        to="/phones"
      >
        Phones
      </NavLink>

      <NavLink
        className={isLinkActive}
        to="/tablets"
      >
        Tablets
      </NavLink>

      <NavLink
        className={isLinkActive}
        to="/accessories"
      >
        Accessories
      </NavLink>

      <NavLink
        className={isLinkActive}
        to="/favourites"
      >
        <Heart className="w-6 h-6" />
      </NavLink>

      <NavLink
        className={isLinkActive}
        to="/cart"
      >
        <ShoppingBag className="w-6 h-6" />
      </NavLink>
    </div>
  );
};
