import { NavLink } from 'react-router-dom';

const isLinkActive = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'font-mont font-bold' : 'font-mont font-semibold';

export const FooterContent = () => {
  return (
    <div className="flex gap-x-20 uppercase">
      <a
        href="https://github.com/No-words-team6/tech-store-project"
        target="_blank"
        rel="noreferrer"
        className="font-mont font-semibold"
      >
        Github
      </a>

      <NavLink
        to="contacts"
        className={isLinkActive}
      >
        Contacts
      </NavLink>

      <NavLink
        to="rights"
        className={isLinkActive}
      >
        Rights
      </NavLink>
    </div>
  );
};
