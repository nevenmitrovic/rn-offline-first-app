import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import type { FC } from 'react';
import { useEffect } from 'react';
import { themeColor } from '@/src/styles/theme';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Pressable, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { CText } from './Text';

type BannerType = 'info' | 'warning' | 'danger' | 'success';

interface Props {
  visible: boolean;
  message: string;
  type?: BannerType;
  duration?: number;
  onDismiss?: () => void;
  height?: number;
  position?: 'top' | 'bottom';
  icon?: IconProp;
}

export const Banner: FC<Props> = ({
  visible,
  message,
  type = 'info',
  duration,
  onDismiss,
  height = 50,
  position = 'top',
  icon,
}) => {
  const translateY = useSharedValue(-height);

  useEffect(() => {
    if (visible) {
      // Slide down
      translateY.value = withSpring(0, {
        damping: 15,
        stiffness: 100,
      });

      // Auto-hide if duration is provided
      if (duration && onDismiss) {
        const timer = setTimeout(() => {
          onDismiss();
        }, duration);
        return () => clearTimeout(timer);
      }
    } else {
      // Slide up
      translateY.value = withTiming(-height, {
        duration: 250,
      });
      onDismiss?.();
    }
  }, [visible, height, duration, onDismiss, translateY]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  const getBannerColor = () => {
    switch (type) {
      case 'success':
        return themeColor.success;
      case 'warning':
        return themeColor.warning;
      case 'danger':
        return themeColor.danger;
      case 'info':
      default:
        return themeColor.info;
    }
  };

  return (
    <Animated.View
      style={[
        styles.container,
        {
          height,
          backgroundColor: getBannerColor(),
          [position]: 0,
        },
        animatedStyle,
      ]}
    >
      <Pressable style={styles.content} onPress={onDismiss} disabled={!onDismiss}>
        {icon && <FontAwesomeIcon icon={icon} size={24} color={themeColor.white} />}
        <CText type="h3" color="white" align="center">
          {message}
        </CText>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    elevation: 5,
    shadowColor: themeColor.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  content: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 8,
  },
});
