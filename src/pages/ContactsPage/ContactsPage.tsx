import { BreadcrumbNav } from '@/components/common/BreadcrumbNav';
import { teamMembers } from './data/teamMembers';
import { WidthContainer } from '@/components/containers/WidthContainer';
import { PaddingContainer } from '@/components/containers/PaddingContainer';
import { GridContainer } from '@/components/containers/GridContainer';
import { useTranslation } from 'react-i18next';

export const ContactsPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <WidthContainer>
        <PaddingContainer>
          <GridContainer>
            <BreadcrumbNav />

            <div
              id="contact-page"
              className="font-mont col-span-4 sm:col-span-12 xl:col-span-24 grid gap-y-8 sm:gap-y-1 min-h-screen text-link-hover-bg dark:text-dark-link-hover-bg"
            >
              <h1 className="text-2xl sm:text-4xl font-mont text-center font-bold">
                {t('team-nemasliv')}
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-8">
                {teamMembers.map((member, index) => (
                  <div
                    id="contact-page-user"
                    key={index}
                    className="bg-white border-2 border-[#E2E6E9] dark:border-none dark:bg-[#161827] transition duration-500 hover:scale-110 flex flex-col items-center text-center p-4 h-full rounded-[20px]"
                  >
                    <img
                      src={member.photo}
                      alt={t(member.nameKey)}
                      className="w-24 h-24 object-cover rounded-[20px] mb-4 transition duration-800 hover:scale-130"
                    />
                    <h2 className="text-lg font-mont font-semibold mb-2">
                      {t(member.nameKey)}
                    </h2>
                    <h3 className="text-sm text-[#919a9e] dark:text-[#75767F] mb-1">
                      {t(member.positionKey)}
                    </h3>
                    <p className="text-sm text-[#919a9e] dark:text-[#75767F] mb-2">
                      {t(member.descriptionKey)}
                    </p>
                    <div className="flex gap-4 text-xl mt-2">
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-link-hover-bg dark:text-dark-link-hover-bg hover:text-[#905BFF]"
                      >
                        GitHub
                      </a>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-link-hover-bg dark:text-dark-link-hover-bg hover:text-[#905BFF]"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </GridContainer>
        </PaddingContainer>
      </WidthContainer>
    </>
  );
};
