import { BreadcrumbNav } from '@/components/BreadcrumbNav';

const sections = [
  {
    title: '1. Ownership and Intellectual Property',
    content:
      'All content on this site — including text, images, graphics, logos, design, software, trademarks, and domain names — is owned by the Sanatoriy Smerichka team and is protected by copyright and intellectual property laws.',
  },
  {
    title: '2. Use of Content',
    content:
      'You may view, download, or print content from this website for personal, non-commercial use only. Any other use — such as copying, sharing, publishing, or selling — is not allowed without prior written permission.',
  },
  {
    title: '3. Copy Protection',
    content:
      'All materials are protected against unauthorized copying. Using bots, scripts, or automated tools to collect or copy content without permission is strictly prohibited.',
  },
  {
    title: '4. Privacy Policy',
    content:
      'Your privacy matters to us. We do not collect or store any personal data, except for information related to orders and your saved favorite products on this site.',
  },
  {
    title: '5. Updates and Changes',
    content:
      'We reserve the right to update these terms at any time. Changes take effect once published on the website. We encourage you to review the terms periodically to stay informed.',
  },
  {
    title: '6. Limitation of Liability',
    content:
      'We are not responsible for any damage or loss resulting from your use of this website. You use the site at your own risk.',
  },
  {
    title: '7. Contact Information',
    content:
      'If you have any questions or feedback about these terms, feel free to reach out via the Contacts page.',
  },
];

export const RightsPage = () => {
  return (
    <div className="col-span-24 grid grid-cols-24 gap-x-[16px] pt-[24px] pb-[80px]">
      <BreadcrumbNav />

      <div className="col-span-24 grid grid-cols-24 gap-x-[16px] gap-y-[24px]">
        <h1 className="col-span-24 text-white font-mont font-bold text-5xl">
          Terms & Policies
        </h1>

        <div className="col-span-24 text-[#C1C2C7] space-y-8">
          {sections.map((section, index) => (
            <div key={index} className="space-y-2">
              <p className="font-bold">{section.title}</p>
              <p>{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
