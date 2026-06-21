import type { FC } from 'react';
import { AppWrapper } from '@/src/components/AppWrapper';
import { commonScreenOptions } from '@/src/styles/screenOptions';
import { Stack } from 'expo-router';

const Layout: FC = () => {
  return (
    <Stack screenOptions={{ ...commonScreenOptions, headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
};

const AppLayout: FC = () => {
  return (
    <AppWrapper>
      <Layout />
    </AppWrapper>
  );
};

export default AppLayout;
