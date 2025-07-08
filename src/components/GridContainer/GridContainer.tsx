import type React from 'react';

interface Props {
  children: React.ReactNode;
}

export const GridContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className="grid grid-cols-24 gap-x-[16px] w-full max-w-[1200px] mx-auto">
      {children}
    </div>
  );
};
