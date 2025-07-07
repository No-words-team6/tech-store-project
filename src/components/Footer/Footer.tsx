import { NavLink } from 'react-router-dom';
import logo from '@/assets/images/Logo.svg';

const isLinkActive = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'font-mont font-bold' : 'font-mont font-semibold';

export const Footer = () => {
  return (
    <footer className="bg-pink-500 text-center h-12 flex items-center justify-center gap-x-20">
      <div className="px-4 py-2">
        <img src={logo} alt="Nice Gadgets" className="h-6 w-auto" />
      </div>

      <div className="flex gap-x-20 uppercase">
        <a
          href="https://github.com/No-words-team6/tech-store-project"
          target="_blank"
          rel="noreferrer"
          className="font-mont font-semibold"
        >
          Github
        </a>

        <NavLink to="contacts" className={isLinkActive}>
          Contacts
        </NavLink>

        <NavLink to="rights" className={isLinkActive}>
          Rights
        </NavLink>
      </div>
    </footer>
  );
};
