import { NavLink } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';
import logo from '@/assets/images/Logo.svg';

import './footer.css';

const isLinkActive = ({ isActive }: { isActive: boolean }) =>
  isActive ?
    'font-mont font-bold text-gray-600'
  : 'font-mont font-bold text-white hover:text-gray-400';

export const Footer = () => {
  return (
    <footer className="col-span-24 flex justify-between items-center h-24 back-color">
      <a href="#" className="px-4 py-2">
        <img src={logo} alt="Nice Gadgets" className="h-6 w-auto" />
      </a>

      <div className="flex gap-x-20 uppercase">
        <a
          href="https://github.com/No-words-team6/tech-store-project"
          target="_blank"
          rel="noreferrer"
          className="font-mont font-bold text-white hover:text-gray-400"
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

      <a
        href="#"
        className="flex gap-x-4 items-center hover:underline-offset-1"
      >
        <p className="text-gray-600">Back to top</p>
        <ChevronUp className="w-8 h-8 bg-gray-600 white" />
      </a>
    </footer>
  );
};
