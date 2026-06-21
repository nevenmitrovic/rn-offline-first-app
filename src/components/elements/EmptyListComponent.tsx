import type { FC } from 'react';
import { faListUl } from '@/src/assets/icons/faListUl';
import { themeColor } from '@/src/styles/theme';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { StyleSheet, View } from 'react-native';
import { CText } from './Text';

interface Props {
  isLoading?: boolean;
}

export const EmptyListComponent: FC<Props> = ({ isLoading }) => {
  if (isLoading) return;

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <FontAwesomeIcon icon={faListUl} size={24} color={themeColor.white} />
      </View>
      <CText color="text" size={18}>
        Lista je prazna
      </CText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    alignItems: 'center',
    gap: 12,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#456ba11a',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
