import { StyleSheet } from 'react-native';
import { themeColor } from './theme';

export const cs = StyleSheet.create({
  fullScreenPage: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 16,
  },
  page: {
    flex: 1,
    padding: 16,
    gap: 16,
    backgroundColor: themeColor.white,
  },
  listContent: {
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flex: {
    flex: 1,
  },
  shrink: {
    flexShrink: 1,
  },
  fullWidth: {
    width: '100%',
  },
  halfWidth: {
    width: '50%',
  },
  halfOpacity: {
    opacity: 0.5,
  },
});
