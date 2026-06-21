import type { FC } from 'react';
import { themeColor } from '@/src/styles/theme';
import { View } from 'react-native';

interface IDivider {
  size?: number;
  orientation?: 'horizontal' | 'vertical';
  color?: string;
  dividerStyle?: any;
}

export const Divider: FC<IDivider> = ({
  size = 1,
  orientation = 'horizontal',
  color = themeColor.border,
  dividerStyle,
}) => {
  const dividerStyles = [
    { width: orientation === 'horizontal' ? '100%' : size },
    { height: orientation === 'vertical' ? '100%' : size },
    { backgroundColor: color },
    dividerStyle,
  ];

  return <View style={dividerStyles} />;
};
