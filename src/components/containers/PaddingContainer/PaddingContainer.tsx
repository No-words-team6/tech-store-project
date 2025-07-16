import type React from 'react';

interface Props {
  children: React.ReactNode;
}

export const PaddingContainer: React.FC<Props> = ({ children }) => {
  return <div className="pt-6 md:pt-10 pb-[64px] xl:pb-[80px]">{children}</div>;
};
