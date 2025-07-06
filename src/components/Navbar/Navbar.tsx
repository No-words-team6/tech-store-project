import { NavLink } from 'react-router-dom';

const isLinkActive = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'border-b-4 border-black pb-1' : '';

export const Navbar = () => {
  return (
    <div className="font-bold flex flex-row gap-x-5 uppercase">
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
        Favourites
      </NavLink>
      <NavLink
        className={isLinkActive}
        to="/cart"
      >
        Cart
      </NavLink>
    </div>
  );
};
