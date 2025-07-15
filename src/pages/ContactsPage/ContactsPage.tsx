import { BreadcrumbNav } from '@/components/common/BreadcrumbNav';
import { teamMembers } from './data/teamMembers';
import { WidthContainer } from '@/components/WidthContainer';
import { PaddingContainer } from '@/components/PaddingContainer';
import { GridContainer } from '@/components/GridContainer';
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
              className="col-span-4 sm:col-span-12 xl:col-span-24 grid gap-y-8 sm:gap-y-12 min-h-screen text-[#F1F2F9]"
            >
              <h1 className="text-2xl sm:text-4xl font-mont text-center">
                {t('team-nemasliv')}
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-8">
                {teamMembers.map((member, index) => (
                  <div
                    id="contact-page-user"
                    key={index}
                    className="bg-[#161827] hover:scale-[1.02] rounded-xl flex flex-col items-center text-center p-4 h-full"
                  >
                    <img
                      src={member.photo}
                      alt={t(member.nameKey)}
                      className="w-24 h-24 object-cover rounded-xl mb-4"
                    />
                    <h2 className="text-lg font-[montBold] mb-2">
                      {t(member.nameKey)}
                    </h2>
                    <h3 className="text-sm text-[#A0A3BD] mb-1">
                      {t(member.positionKey)}
                    </h3>
                    <p className="text-sm text-[#C1C2C7] mb-2">
                      {t(member.descriptionKey)}
                    </p>
                    <div className="flex gap-4 text-xl mt-2">
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#F1F2F9] hover:text-[#905BFF]"
                      >
                        GitHub
                      </a>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#F1F2F9] hover:text-[#905BFF]"
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
