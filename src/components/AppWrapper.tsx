import type { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
export const AppWrapper: FC<Props> = ({ children }) => {
  return <>{children}</>;
};
