import type React from 'react';

interface Props {
  children: React.ReactNode;
}

export const ShadowContainer: React.FC<Props> = ({ children }) => {
  return <div className="shadow-[0_-1px_0_0_#323542]">{children}</div>;
};
