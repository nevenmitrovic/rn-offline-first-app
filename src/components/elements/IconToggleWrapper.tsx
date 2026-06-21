import type { FC, ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface IIconToggleWrapperProps {
  children: ReactNode;
  isRotated?: boolean;
  style?: StyleProp<ViewStyle>;
}

export const IconToggleWrapper: FC<IIconToggleWrapperProps> = ({
  isRotated,
  children,
  style,
}) => {
  const transitionFlag = useSharedValue(0);

  useEffect(() => {
    transitionFlag.value = withTiming(isRotated ? 1 : 0, { duration: 300 });
  }, [isRotated, transitionFlag]);

  const rotateTransition = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${interpolate(transitionFlag.value, [0, 1], [0, 180])}deg`,
        },
      ],
    };
  });

  return (
    <Animated.View style={[styles.iconContainer, rotateTransition, style]}>
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
});
