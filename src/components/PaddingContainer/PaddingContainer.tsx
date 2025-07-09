import type React from 'react';

interface Props {
  children: React.ReactNode;
}

export const PaddingContainer: React.FC<Props> = ({ children }) => {
  return <div className="pt-[24px] pb-[80px]">{children}</div>;
};
