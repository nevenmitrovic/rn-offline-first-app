import type { FC, ReactNode } from 'react';
import { cs } from '@/src/styles/commonStyles';
import { themeColor } from '@/src/styles/theme';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

interface Props {
  isLoading?: boolean;
  fullScreen?: boolean;
  withContent?: boolean;
  hideIndicator?: boolean;
  children?: ReactNode;
}

export const Loader: FC<Props> = ({
  isLoading,
  fullScreen,
  withContent,
  hideIndicator,
  children,
}) =>
  isLoading ? (
    <View style={[fullScreen && cs.flex]}>
      {!hideIndicator && (
        <ActivityIndicator
          size="large"
          color={themeColor.primary}
          style={[cs.flex, withContent && StyleSheet.absoluteFill, { zIndex: 20 }]}
        />
      )}
      {withContent && (
        <View pointerEvents="none" style={[cs.flex, cs.halfOpacity]}>
          {children}
        </View>
      )}
    </View>
  ) : (
    (children ?? null)
  );
