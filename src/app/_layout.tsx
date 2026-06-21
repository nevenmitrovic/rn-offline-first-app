import type { FC } from 'react';
import { RootWrapper } from '@/src/components/RootWrapper';
import { Slot } from 'expo-router';

const RootLayout: FC = () => {
  return (
    <RootWrapper>
      <Slot />
    </RootWrapper>
  );
};

export default RootLayout;
