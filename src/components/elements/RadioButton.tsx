import type { FC } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { useEffect } from 'react';
import { cs } from '@/src/styles/commonStyles';
import { themeColor } from '@/src/styles/theme';
import { Pressable, StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { CText } from './Text';

interface IRadioButtonProps {
  label: string;
  desc?: string;
  value: string | number | boolean;
  selected: string | number | boolean | undefined | null;
  setSelected: (selected: any) => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

export const RadioButton: FC<IRadioButtonProps> = ({
  label,
  desc,
  value,
  selected,
  style,
  disabled,
  setSelected,
}) => {
  const isSelected = selected === value;
  const scale = useSharedValue(isSelected ? 1 : 0);

  useEffect(() => {
    scale.value = withTiming(isSelected ? 1 : 0, { duration: 200 });
  }, [isSelected, scale]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: scale.value,
  }));

  return (
    <Pressable
      onPress={() => setSelected(value)}
      disabled={disabled}
      style={[styles.container, style, disabled && !isSelected && cs.halfOpacity]}
    >
      <View style={[styles.icon, cs.center]}>
        <Animated.View style={[styles.selectedContainer, animatedStyle]} />
      </View>
      <CText size={14}>{label}</CText>
      {desc && <CText type="desc">{desc}</CText>}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 6,
    gap: 8,
    alignItems: 'center',
  },
  icon: {
    height: 18,
    width: 18,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: themeColor.primary,
  },
  selectedContainer: {
    height: 8,
    width: 8,
    borderRadius: 8,
    backgroundColor: themeColor.primary,
  },
});
