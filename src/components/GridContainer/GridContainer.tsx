import type React from 'react';

interface Props {
  children: React.ReactNode;
}

export const GridContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-12 xl:grid-cols-24 mx-4 sm:mx-6 lg:mx-8 xl:mx-auto">
      {children}
    </div>
  );
};
