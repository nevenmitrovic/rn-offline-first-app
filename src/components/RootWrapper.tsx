import type { FC, ReactNode } from 'react';
import { ReactQueryProvider } from '@/src/components/reactQuery/ReactQueryProvider';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { cs } from '../styles/commonStyles';

interface Props {
  children?: ReactNode;
}
export const RootWrapper: FC<Props> = ({ children }) => {
  return (
    <ReactQueryProvider>
      <SafeAreaView style={cs.flex} edges={['bottom', 'top']}>
        <StatusBar style="auto" />
        {children ?? <Slot />}
      </SafeAreaView>
    </ReactQueryProvider>
  );
};
