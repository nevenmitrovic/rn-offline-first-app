import type { FC, ReactNode } from 'react';
import { cs } from '@/src/styles/commonStyles';
import { themeColor } from '@/src/styles/theme';
import { Checkbox } from 'expo-checkbox';
import { Pressable, StyleSheet } from 'react-native';
import { CText } from './Text';

interface ICheckbox {
  label?: string;
  disabled?: boolean;
  value?: boolean;
  setValue: (value: boolean) => void;
  children?: ReactNode;
  alignTop?: boolean;
}

export const CCheckbox: FC<ICheckbox> = ({
  label,
  value,
  setValue,
  disabled,
  children,
  alignTop,
}) => (
  <Pressable
    onPress={() => setValue(!value)}
    disabled={disabled}
    style={[cs.row, disabled && cs.halfOpacity]}
  >
    <Checkbox
      value={value}
      onValueChange={setValue}
      disabled={disabled}
      color={themeColor.primary}
      style={[styles.checkbox, alignTop && styles.alignTop]}
    />
    {label ? <CText color="text">{label}</CText> : children}
  </Pressable>
);

const styles = StyleSheet.create({
  checkbox: {
    borderColor: themeColor.primary,
    borderRadius: 4,
    width: 18,
    height: 18,
  },
  alignTop: {
    marginTop: 4,
    alignSelf: 'flex-start',
  },
});
