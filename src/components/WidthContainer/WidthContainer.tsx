import type React from 'react';

interface Props {
  children: React.ReactNode;
}

export const WidthContainer: React.FC<Props> = ({ children }) => {
  return <div className="w-full max-w-[1200px] mx-auto">{children}</div>;
};
