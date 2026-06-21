import { StyleSheet } from 'react-native';
import { themeColor } from './theme';

export const inputStyles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: themeColor.white,
    borderWidth: 1,
    borderColor: themeColor.border,
    borderRadius: 10,
    paddingHorizontal: 10,
    gap: 8,
  },
  inputHeight: {
    height: 48,
  },
  focusedInputBorder: {
    borderColor: themeColor.secondary,
    borderWidth: 1,
    shadowColor: themeColor.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  row: {
    flexDirection: 'row',
    gap: 2,
  },
});

export const modalStyles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
});
