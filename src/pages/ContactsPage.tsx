import { BreadcrumbNav } from '@/components/BreadcrumbNav';

type TeamMember = {
  name: string;
  photo: string;
  github: string;
  linkedin: string;
  position: string;
  description: string;
};

const teamMembers: TeamMember[] = [
  {
    name: 'Denys Kasatskyi',
    photo: '/img/teamFoto/denis.jpg',
    github: 'https://github.com/placeholder',
    linkedin: 'https://linkedin.com/in/placeholder',
    position: 'Team Lead & Frontend Developer',
    description:
      'Soon, there will be a lot of information about us here, but at this stage of our life, we are unemployed.',
  },
  {
    name: 'Hryhorii Korsun',
    photo: '/img/teamFoto/gregoryjpeg.jpeg',
    github: 'https://github.com/placeholder',
    linkedin: 'https://linkedin.com/in/placeholder',
    position: 'Frontend Developer',
    description:
      'Soon, there will be a lot of information about us here, but at this stage of our life, we are unemployed.',
  },
  {
    name: 'Anna Kolisnichenko',
    photo: '/img/teamFoto/ann.jpeg',
    github: 'https://github.com/placeholder',
    linkedin: 'https://linkedin.com/in/placeholder',
    position: 'Tech Lead & Frontend Developer',
    description:
      'Soon, there will be a lot of information about us here, but at this stage of our life, we are unemployed.',
  },
  {
    name: 'Andrii Kushnirenko',
    photo: '/img/teamFoto/andrii.jpeg',
    github: 'https://github.com/placeholder',
    linkedin: 'https://linkedin.com/in/placeholder',
    position: 'Frontend Developer',
    description:
      'Soon, there will be a lot of information about us here, but at this stage of our life, we are unemployed.',
  },
];

export const ContactsPage = () => {
  return (
    <div className="col-span-24 grid grid-cols-24 gap-x-[16px] pt-[24px] font-mont pb-[24px]">
      <BreadcrumbNav />

      <div
        id="contact-page"
        className="col-span-24 min-h-screen px-10 py-12 text-[#F1F2F9]"
      >
        <h1 className="text-4xl font-mont text-center mb-16">TEAM NEMA SLIV</h1>

        <div className="grid grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              id="contact-page-user"
              key={index}
              className="bg-[#161827] hover:scale-[1.02] rounded-xl flex flex-col items-center text-center p-6 h-full"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-24 h-24 object-cover rounded-xl mb-4"
              />
              <h2 className="text-lg font-[montBold] mb-2">{member.name}</h2>
              <h3 className="text-sm text-[#A0A3BD] mb-1">{member.position}</h3>
              <p className="text-sm text-[#C1C2C7] mb-2">
                {member.description}
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
    </div>
  );
};
