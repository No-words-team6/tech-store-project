import { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Heart, ShoppingBag, X } from 'lucide-react';
import logo from '@/assets/images/Logo.svg';

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileSidebar = ({ isOpen, onClose }: MobileSidebarProps) => {
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
    <>
      <div
        className={`fixed top-0 right-0 h-full w-full bg-[#0F1121] z-[20] transform transition-transform duration-300 sm:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col justify-between h-full box-border ">
          <div>
            <div className="border-b border-[#3B3E4A]">
              <div className="flex items-center justify-between h-12">
                <Link
                  to="/"
                  onClick={onClose}
                  className="flex-1 flex items-center h-full px-4 border-r border-[#3B3E4A]"
                >
                  <img
                    src={logo}
                    alt="Nice Gadgets"
                    className="h-5 w-auto max-w-full"
                  />
                </Link>

                <button
                  onClick={onClose}
                  aria-label="Close menu"
                  className="w-12 h-full flex items-center justify-center text-[#F1F2F9]"
                >
                  <X className="w-6 h-6" />
                </button>
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
                        'text-[#F1F2F9] border-[#F1F2F9]'
                      : 'text-[#75767F] border-transparent hover:text-[#F1F2F9] hover:border-[#F1F2F9]'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="flex items-center justify-between h-16 border-t border-[#3B3E4A]">
            <Link
              to="/favourites"
              onClick={onClose}
              className={`flex flex-col items-center justify-center w-1/2 h-full relative border-r border-[#3B3E4A] transition-all duration-300`}
            >
              <Heart className="w-6 h-6 text-[#75767F] group-hover:text-[#F1F2F9] transition-colors" />
            </Link>

            <Link
              to="/cart"
              onClick={onClose}
              className={`flex flex-col items-center justify-center w-1/2 h-full relative transition-all duration-300`}
            >
              <ShoppingBag className="w-6 h-6 text-[#75767F] group-hover:text-[#F1F2F9] transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
