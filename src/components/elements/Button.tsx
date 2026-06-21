import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import type { FC, ReactNode } from 'react';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { cs } from '@/src/styles/commonStyles';
import { themeColor, themeColorAlt } from '@/src/styles/theme';
import { hapticsLight } from '@/src/utils/haptics';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Pressable, StyleSheet, View } from 'react-native';
import { CText } from './Text';

interface IButton {
  label?: string;
  icon?: IconProp;
  endIcon?: IconProp;
  onPress?: () => void;
  onPressIn?: () => void;
  disabled?: boolean;
  size?: 's';
  color?: keyof typeof themeColor;
  outlined?: boolean;
  fullWidth?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  children?: ReactNode;
}

export const CButton: FC<IButton> = ({
  label,
  icon,
  endIcon,
  onPress,
  onPressIn,
  disabled,
  size,
  color = 'primary',
  outlined,
  fullWidth,
  style,
  textStyle,
  children,
}) => (
  <Pressable
    onPress={() => {
      hapticsLight();
      onPress?.();
    }}
    onPressIn={() => {
      hapticsLight();
      onPressIn?.();
    }}
    disabled={disabled}
    style={({ pressed }) => [
      styles.button,
      fullWidth ? cs.fullWidth : undefined,
      disabled ? cs.halfOpacity : undefined,
      size ? styles[size] : undefined,
      {
        backgroundColor: outlined
          ? themeColor.white
          : (pressed ? themeColorAlt : themeColor)[color],
        borderColor: (pressed ? themeColorAlt : themeColor)[color],
      },
      pressed ? styles.pressed : styles.unpressed,
      style,
    ]}
  >
    {({ pressed }) =>
      children ?? (
        <View style={cs.row}>
          {icon && (
            <FontAwesomeIcon
              icon={icon}
              size={24}
              color={
                outlined
                  ? (pressed ? themeColorAlt : themeColor)[color]
                  : themeColor.white
              }
            />
          )}
          <View style={icon && cs.flex}>
            <CText
              type="w500"
              size={size === 's' ? 14 : 18}
              style={[
                {
                  color: outlined
                    ? (pressed ? themeColorAlt : themeColor)[color]
                    : themeColor.white,
                },
                textStyle,
              ]}
            >
              {label}
            </CText>
          </View>
          {endIcon && (
            <FontAwesomeIcon
              icon={endIcon}
              size={24}
              color={
                outlined
                  ? (pressed ? themeColorAlt : themeColor)[color]
                  : themeColor.white
              }
            />
          )}
        </View>
      )
    }
  </Pressable>
);

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderWidth: 2,
    borderRadius: 25,
    paddingHorizontal: 18,
    paddingVertical: 12,
  },
  iconContainer: {
    flexShrink: 0,
  },
  image: {
    width: 24,
    height: 24,
  },
  s: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  outlined: {
    borderColor: themeColor.border,
  },
  pressed: {
    transform: [{ translateY: 2 }],
  },
  unpressed: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  contentWithIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
});
