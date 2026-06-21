import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import type { FC } from 'react';
import type { KeyboardType, StyleProp, ViewStyle } from 'react-native';
import { useState } from 'react';
import { faCircleXmark } from '@/src/assets/icons/faCircleXmark';
import { faEye } from '@/src/assets/icons/faEye';
import { faEyeSlash } from '@/src/assets/icons/faEyeSlash';
import { cs } from '@/src/styles/commonStyles';
import { inputStyles } from '@/src/styles/components';
import { font } from '@/src/styles/font';
import { spacing } from '@/src/styles/spacing';
import { themeColor } from '@/src/styles/theme';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { InputContainerWrapper } from './InputContainerWrapper';
import { CLabel } from './Label';
import { CText } from './Text';

interface ICTextInput {
  label?: string;
  icon?: IconProp;
  required?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
  placeholder?: string;
  value?: string;
  setValue: (value: string) => void;
  containerStyle?: StyleProp<ViewStyle>;
  keyboardType?: KeyboardType;
  isSecureTextEntry?: boolean;
  isTextArea?: boolean;
  isPassword?: boolean;
  rows?: number;
  pattern?: RegExp;
  onValidate?: (isValid: boolean) => void;
  helperText?: string;
  errorText?: string;
  onBlur?: () => void;
  onFocus?: () => void;
}

export const CTextInput: FC<ICTextInput> = ({
  label,
  icon,
  required,
  disabled,
  autoFocus,
  placeholder,
  value,
  setValue,
  containerStyle,
  keyboardType = 'default',
  isSecureTextEntry,
  isTextArea,
  isPassword,
  rows = 4,
  pattern,
  onValidate,
  helperText,
  errorText,
  onBlur,
  onFocus,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [validationError, setValidationError] = useState<string | undefined>();
  const [showPassword, setShowPassword] = useState(false);

  const handleChangeText = (text: string) => {
    setValue(text);

    if (pattern && text) {
      const isValid = pattern.test(text);
      setValidationError(isValid ? undefined : errorText);
      if (onValidate) {
        onValidate(isValid);
      }
    } else {
      setValidationError(undefined);
    }
  };

  return (
    <View style={[spacing.gap4, containerStyle, disabled && cs.halfOpacity]}>
      {label && <CLabel label={label} required={required} />}
      <InputContainerWrapper
        isActive={isFocused}
        icon={icon}
        style={[inputStyles.inputContainer, !isTextArea && inputStyles.inputHeight]}
      >
        <TextInput
          value={value}
          autoFocus={autoFocus}
          onChangeText={handleChangeText}
          onFocus={() => {
            setIsFocused(true);
            onFocus?.();
          }}
          onBlur={() => {
            setIsFocused(false);
            onBlur?.();
          }}
          placeholder={placeholder}
          placeholderTextColor={themeColor.gray}
          style={[styles.input, value ? font.regular : font.italic]}
          keyboardType={keyboardType}
          secureTextEntry={isSecureTextEntry || (isPassword && !showPassword)}
          editable={!disabled}
          multiline={isTextArea}
          numberOfLines={isTextArea ? rows : 1}
        />
        {isPassword && (
          <Pressable
            onPress={() => setShowPassword(prev => !prev)}
            disabled={disabled}
            hitSlop={20}
          >
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              size={20}
              color={themeColor.primary}
            />
          </Pressable>
        )}
        {value && (
          <Pressable onPress={() => setValue('')} disabled={disabled} hitSlop={10}>
            <FontAwesomeIcon icon={faCircleXmark} size={20} color={themeColor.primary} />
          </Pressable>
        )}
      </InputContainerWrapper>
      {helperText && !validationError && (
        <CText color="gray" size={12}>
          {helperText}
        </CText>
      )}
      {validationError && (
        <CText color="danger" size={12}>
          {validationError}
        </CText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    fontSize: 16,
  },
});

export default CTextInput;
