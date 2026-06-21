import type { FC } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { useDeferredValue, useMemo, useState } from 'react';
import { faChevronDown } from '@/src/assets/icons/faChevronDown';
import { faCircleCheck } from '@/src/assets/icons/faCircleCheck';
import { faCircleXmark } from '@/src/assets/icons/faCircleXmark';
import { faMagnifyingGlass } from '@/src/assets/icons/faMagnifyingGlass';
import { cs } from '@/src/styles/commonStyles';
import { inputStyles, modalStyles } from '@/src/styles/components';
import { spacing } from '@/src/styles/spacing';
import { themeColor } from '@/src/styles/theme';
import { ISelectData } from '@/src/types/IElement';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Dimensions, Modal, Pressable, StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CLabel } from './Label';
import { CText } from './Text';
import { CTextInput } from './TextInput';

interface ISelectBase {
  options: ISelectData[];
  label?: string;
  required?: boolean;
  disabled?: boolean;
  isClearable?: boolean;
  searchOptions?: boolean;
  keepMenuOpen?: boolean;
  helperText?: string;
  validationError?: string;
  containerStyle?: StyleProp<ViewStyle>;
}

interface ISelectSingle extends ISelectBase {
  isMulti?: false;
  value: ISelectData | null;
  setValue: (value: ISelectData | null) => void;
}

interface ISelectMulti extends ISelectBase {
  isMulti: true;
  value: ISelectData[] | null;
  setValue: (value: ISelectData[] | null) => void;
}

type ISelect = ISelectSingle | ISelectMulti;

export const Select: FC<ISelect> = ({
  options,
  label,
  required,
  setValue,
  value,
  disabled,
  isMulti,
  isClearable,
  searchOptions,
  keepMenuOpen,
  helperText,
  validationError,
  containerStyle,
}) => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [search, setSearch] = useState('');
  const defferedSearch = useDeferredValue(search);

  const filteredOptions = useMemo(() => {
    if (search.trim() === '') {
      return options;
    }
    return options.filter(option =>
      option.label.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, options]);

  const handleSelectedOption = (item: ISelectData) => {
    if (isMulti) {
      const currentSelectData = Array.isArray(value) ? value : [];
      const isDuplicate = currentSelectData.some(i => i.value === item.value);

      const updated = isDuplicate
        ? currentSelectData.filter(i => i.value !== item.value)
        : [...currentSelectData, item];

      setValue(updated.length > 0 ? updated : null);
      keepMenuOpen === false && setIsMenuOpen(false);
    } else {
      setValue(item);
      setIsMenuOpen(false);
    }
  };

  return (
    <View
      style={[styles.container, containerStyle, disabled ? cs.halfOpacity : undefined]}
    >
      {label && <CLabel label={label} required={required} />}
      <Pressable onPress={() => setIsMenuOpen(prev => !prev)} disabled={disabled}>
        <InputContainerWrapper
          style={[cs.rowBetween, inputStyles.inputContainer, inputStyles.inputHeight]}
          isActive={isMenuOpen}
        >
          {value ? (
            <View style={[cs.rowBetween, cs.flex]}>
              <CText style={styles.inputLabel} size={16} maxLines={1}>
                {Array.isArray(value)
                  ? value.reduce(
                      (acc, item, idx, arr) =>
                        acc + (arr.length - 1 !== idx ? item.label + ', ' : item.label),
                      ''
                    )
                  : value.label}
              </CText>
              {isClearable && (isMulti ? !!value?.length : value) && (
                <Pressable
                  onPress={() => setValue(null)}
                  disabled={disabled}
                  hitSlop={10}
                >
                  <FontAwesomeIcon
                    icon={faCircleXmark}
                    size={20}
                    color={themeColor.primary}
                  />
                </Pressable>
              )}
            </View>
          ) : (
            <CText type="italic" color="gray" size={16} maxLines={1}>
              {t('Choose')}...
            </CText>
          )}
          <IconToggleWrapper isRotated={isMenuOpen}>
            <FontAwesomeIcon icon={faChevronDown} size={20} color={themeColor.border} />
          </IconToggleWrapper>
        </InputContainerWrapper>
      </Pressable>

      {helperText && (
        <CText color="gray" size={12}>
          {helperText}
        </CText>
      )}
      {validationError && (
        <CText color="danger" size={12}>
          {validationError}
        </CText>
      )}

      {/* SELECT MENU */}
      <Modal visible={isMenuOpen} transparent animationType="fade">
        <SafeAreaView
          style={modalStyles.modalOverlay}
          onStartShouldSetResponder={() => true}
        >
          <View style={[searchOptions ? cs.rowBetween : undefined, styles.modalActions]}>
            {searchOptions && (
              <CTextInput
                icon={faMagnifyingGlass}
                placeholder={t('Search')}
                value={defferedSearch}
                setValue={setSearch}
                containerStyle={styles.searchInput}
              />
            )}
            <Pressable
              onPress={() => setIsMenuOpen(false)}
              hitSlop={20}
              style={!searchOptions ? spacing.mlAuto : undefined}
            >
              <FontAwesomeIcon
                icon={faCircleXmark}
                size={24}
                color={themeColor.primary}
              />
            </Pressable>
          </View>
          <View style={styles.modalMenu}>
            <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
              {filteredOptions.map(option => (
                <Pressable
                  key={option.value}
                  onPress={() => handleSelectedOption(option)}
                  style={[cs.rowBetween, styles.optionContainer]}
                >
                  <CText color="text">{option.label}</CText>
                  {((Array.isArray(value) &&
                    value.some(item => item.value === option.value)) ||
                    (!Array.isArray(value) && value?.value === option.value)) && (
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      size={20}
                      color={themeColor.primary}
                    />
                  )}
                </Pressable>
              ))}
            </KeyboardAwareScrollView>
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 5,
  },
  modalActions: {
    backgroundColor: themeColor.white,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: themeColor.border,
  },
  modalMenu: {
    width: '100%',
    maxHeight: Dimensions.get('window').height * 0.8,
    backgroundColor: themeColor.white,
  },
  optionContainer: {
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: themeColor.lightGray,
  },
  row: {
    flexDirection: 'row',
    gap: 2,
  },
  inputLabel: { flexShrink: 1, marginRight: 4 },
  searchInput: {
    flex: 1,
    marginRight: 10,
  },
});
