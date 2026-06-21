import type { FC, ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { faCircleCheck } from '@/src/assets/icons/faCircleCheck';
import { faCircleExclamation } from '@/src/assets/icons/faCircleExclamation';
import { faCircleInfo } from '@/src/assets/icons/faCircleInfo';
import { faTriangleExclamation } from '@/src/assets/icons/faTriangleExclamation';
import { cs } from '@/src/styles/commonStyles';
import { colors, themeColor } from '@/src/styles/theme';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { StyleSheet, View } from 'react-native';
import { CText } from './Text';

export type IInfoType = 'success' | 'info' | 'warning' | 'danger';

const icons = {
  success: faCircleCheck,
  info: faCircleInfo,
  warning: faTriangleExclamation,
  danger: faCircleExclamation,
};

interface Props {
  text?: string;
  severity: IInfoType;
  containerStyle?: StyleProp<ViewStyle>;
  children?: ReactNode;
}

export const AlertBox: FC<Props> = ({ text, severity, containerStyle, children }) => (
  <View
    style={[
      styles.container,
      { backgroundColor: colors[`${severity}100`] },
      containerStyle,
    ]}
  >
    <FontAwesomeIcon icon={icons[severity]} size={24} color={themeColor[severity]} />
    <View style={cs.shrink}>
      {text && <CText color="text">{text}</CText>}
      {children}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 12,
    gap: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
