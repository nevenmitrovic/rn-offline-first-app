import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import type { FC, ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { useEffect } from 'react';
import { themeColor } from '@/src/styles/theme';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface IInputContainerWrapper {
  children: ReactNode;
  isActive: boolean;
  icon?: IconProp;
  style?: StyleProp<ViewStyle>;
}

export const InputContainerWrapper: FC<IInputContainerWrapper> = ({
  children,
  isActive,
  icon,
  style,
}) => {
  const transitionFlag = useSharedValue(0);

  useEffect(() => {
    transitionFlag.value = withTiming(isActive ? 1 : 0, { duration: 300 });
  }, [isActive, transitionFlag]);

  const inputBorderTransition = useAnimatedStyle(() => {
    const borderColor = interpolateColor(
      transitionFlag.value,
      [0, 1],
      [themeColor.border, themeColor.secondary]
    );

    return {
      borderColor,
    };
  });

  const shadowStyles = useAnimatedStyle(() => {
    const boxShadow = [
      {
        offsetX: 0,
        offsetY: interpolate(transitionFlag.value, [0, 1], [0, 1]),
        blurRadius: interpolate(transitionFlag.value, [0, 1], [0, 4]),
        spreadDistance: 0,
        color: themeColor.primary + '40',
      },
    ];
    return {
      boxShadow,
    };
  });

  return (
    <Animated.View style={[inputBorderTransition, shadowStyles, style]}>
      {icon && (
        <FontAwesomeIcon
          icon={icon}
          size={20}
          color={themeColor.border}
          style={{ marginRight: 4 }}
        />
      )}
      {children}
    </Animated.View>
  );
};
