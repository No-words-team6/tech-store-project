import type React from 'react';

interface Props {
  children: React.ReactNode;
}

export const PaddingContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className="pt-[24px] sm:pt-[32px] xl:pt-[56px] pb-[64px] xl:pb-[80px]">
      {children}
    </div>
  );
};
