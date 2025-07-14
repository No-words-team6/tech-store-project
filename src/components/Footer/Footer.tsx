import { NavLink } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';
import logo from '@/assets/images/Logo.svg';

import './footer.css';
import { useTranslation } from 'react-i18next';

const isLinkActive = ({ isActive }: { isActive: boolean }) =>
  isActive ?
    'font-mont font-bold text-gray-600'
  : 'font-mont font-bold text-white hover:text-gray-400';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full back-color shadow-[0_-1px_0_0_#323542]">
      <div className="w-full px-4 sm:px-8 xl:px-8 py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 xl:grid-cols-24 items-center gap-y-4">
          <a
            href="/"
            className="col-span-4 sm:col-span-3 xl:col-span-3 justify-self-start"
          >
            <img
              src={logo}
              alt="Nice Gadgets"
              className="block w-[89px] h-[32px]"
            />
          </a>

          <div className="col-span-4 sm:col-span-6 sm:col-start-4 xl:col-span-18 xl:col-start-4 flex flex-col sm:flex-row gap-4 sm:justify-center xl:gap-[107px]">
            <a
              href="https://github.com/No-words-team6/tech-store-project"
              target="_blank"
              rel="noreferrer"
              className="font-mont font-bold text-white hover:text-gray-400"
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
              className="flex items-center gap-4"
            >
              <p className="text-gray-600">{t('back-to-top')}</p>
              <ChevronUp className="w-8 h-8 bg-gray-600 text-white" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
