import { NavLink } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';
import logo from '@/assets/images/Logo.svg';
import dlogo from '@/assets/images/Dark-Logo.svg';

import { useTranslation } from 'react-i18next';

const isLinkActive = ({ isActive }: { isActive: boolean }) =>
  isActive ?
    'font-mont font-bold text-link-hover-bg dark:text-dark-link-hover-bg'
  : 'font-mont font-bold text-link-text hover:text-link-hover-bg dark:text-dark-link-text dark:hover:text-dark-link-hover-bg';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-header-background shadow-[0px_0px_0px_1px_rgb(var(--elements))]">
      <div className="w-full px-4 sm:px-8 xl:px-8 py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 xl:grid-cols-24 items-center gap-y-4">
          <a
            href="/"
            className="col-span-4 sm:col-span-3 xl:col-span-3 justify-self-start"
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
          </a>

          <div className="col-span-4 sm:col-span-6 sm:col-start-4 xl:col-span-18 xl:col-start-4 flex flex-col sm:flex-row gap-4 sm:justify-center xl:gap-[107px]">
            <a
              href="https://github.com/No-words-team6/tech-store-project"
              target="_blank"
              rel="noreferrer"
              className="font-mont font-bold text-link-text hover:text-link-hover-bg dark:text-dark-link-text dark:hover:text-dark-link-hover-bg"
            >
              Github
            </a>
            <NavLink to="/contacts" className={isLinkActive}>
              {t('contacts')}
            </NavLink>
            <NavLink to="/rights" className={isLinkActive}>
              {t('rights')}
            </NavLink>
          </div>

          <div className="col-span-4 sm:col-span-3 xl:col-span-3 xl:col-start-22 justify-self-center sm:justify-self-end">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-4 hover:cursor-pointer"
            >
              <p className="text-gray-600">{t('back-to-top')}</p>
              <ChevronUp className="w-8 h-8 bg-transparent border border-link-text dark:border-transparent dark:bg-gray-600 dark:text-white" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
