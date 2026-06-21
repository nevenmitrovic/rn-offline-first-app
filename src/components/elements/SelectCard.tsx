import type { FC } from 'react';
import { cs } from '@/src/styles/commonStyles';
import { themeColor } from '@/src/styles/theme';
import { ISelectData } from '@/src/types/IElement';
import { Pressable, StyleSheet } from 'react-native';
import { CText } from './Text';

interface ISelectCard {
  value: ISelectData;
  setValue: (value: ISelectData) => void;
  isSelected: boolean;
  disabled?: boolean;
}

export const SelectCard: FC<ISelectCard> = ({
  value,
  setValue,
  isSelected,
  disabled,
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        isSelected ? styles.selectedBackground : styles.unselectedBackground,
        pressed && !disabled ? cs.halfOpacity : undefined,
      ]}
      hitSlop={20}
      onPressIn={() => setValue(value)}
      unstable_pressDelay={100} // prevent onPressIn trigger on scrolling
      disabled={disabled}
    >
      <CText
        type="bold"
        size={16}
        style={isSelected ? styles.selectedText : styles.unselectedText}
      >
        {value.label}
      </CText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: themeColor.border,
    borderRadius: 8,
  },
  selectedBackground: {
    backgroundColor: themeColor.primary,
  },
  selectedText: {
    color: themeColor.white,
  },
  unselectedText: {
    color: themeColor.text,
  },
  unselectedBackground: {
    backgroundColor: themeColor.white,
  },
});
