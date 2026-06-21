import type { FC } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { useState } from 'react';
import { faCalendarPlus } from '@/src/assets/icons/faCalendarPlus';
import { faClock } from '@/src/assets/icons/faClock';
import { cs } from '@/src/styles/commonStyles';
import { inputStyles } from '@/src/styles/components';
import { spacing } from '@/src/styles/spacing';
import { formatDate, getTime } from '@/src/utils/dateUtils';
import DatePicker from '@react-native-community/datetimepicker';
import dayjs from 'dayjs';
import { Platform, Pressable, View } from 'react-native';
import { InputContainerWrapper } from './InputContainerWrapper';
import { CLabel } from './Label';
import { CText } from './Text';

export type PickerMode = 'date' | 'time' | 'datetime' | 'countdown';
interface IDatePickerProps {
  label?: string;
  value: string | null;
  onChange: (value: string) => void;
  mode: PickerMode;
  required?: boolean;
  disabled?: boolean;
  minDate?: Date;
  maxDate?: Date;
  containerStyle?: StyleProp<ViewStyle>;
  fullWidth?: boolean;
}

export const CDatePicker: FC<IDatePickerProps> = ({
  label,
  value,
  onChange,
  mode,
  required,
  disabled,
  minDate,
  maxDate,
  containerStyle,
  fullWidth,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <View
      style={[
        spacing.gap4,
        containerStyle,
        disabled ? cs.halfOpacity : undefined,
        fullWidth && cs.flex,
      ]}
    >
      {label && <CLabel label={label} required={required} />}
      <Pressable onPress={() => setOpen(true)} disabled={disabled}>
        <InputContainerWrapper
          style={[inputStyles.inputContainer, inputStyles.inputHeight, spacing.gap8]}
          icon={mode === 'date' ? faCalendarPlus : faClock}
          isActive={open}
        >
          {value ? (
            <CText color="text" size={16} maxLines={1}>
              {mode === 'date'
                ? formatDate(value)
                : dayjs(value).isValid()
                  ? getTime(value)
                  : value}
            </CText>
          ) : (
            <CText type="italic" color="gray" size={16} maxLines={1}>
              Izaberi...
            </CText>
          )}
        </InputContainerWrapper>
      </Pressable>
      {open && (
        <DatePicker
          mode={mode}
          minimumDate={minDate}
          maximumDate={maxDate}
          value={dayjs(value).toDate() || dayjs().toDate()}
          onChange={(event, selectedDate) => {
            setOpen(false);
            if (selectedDate) {
              onChange(dayjs(selectedDate).toISOString());
            }
          }}
          locale={Platform.OS === 'ios' ? 'sr-RS' : undefined} // If you need Android header in Serbian, change the app locale on Android (native)
        />
      )}
    </View>
  );
};
