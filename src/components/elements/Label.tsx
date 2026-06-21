import type { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { CText } from './Text';

interface Props {
  label: string;
  required?: boolean;
}

export const CLabel: FC<Props> = ({ label, required }) => {
  return (
    <View style={styles.row}>
      <CText color="text" size={14} maxLines={1} type="bold">
        {label}
      </CText>
      {required && (
        <CText color="danger" size={14} type="bold">
          *
        </CText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
});
