import { StyleSheet } from 'react-native';
import { themeColor } from './theme';

export const textStyles = StyleSheet.create({
  textCenter: {
    textAlign: 'center',
  },
  textLeft: {
    textAlign: 'left',
  },
  textRight: {
    textAlign: 'right',
  },
  textJustify: {
    textAlign: 'justify',
  },
  textBold: {
    fontWeight: 'bold',
  },
  textItalic: {
    fontStyle: 'italic',
  },
  textUnderline: {
    textDecorationLine: 'underline',
  },
  textLineThrough: {
    textDecorationLine: 'line-through',
  },
  textUppercase: {
    textTransform: 'uppercase',
  },
  textLowercase: {
    textTransform: 'lowercase',
  },
  textCapitalize: {
    textTransform: 'capitalize',
  },
  textWhite: {
    color: themeColor.white,
  },
  textBlack: {
    color: themeColor.black,
  },
  textPrimary: {
    color: themeColor.primary,
  },
  textSecondary: {
    color: themeColor.secondary,
  },
  textSuccess: {
    color: themeColor.success,
  },
  textDanger: {
    color: themeColor.danger,
  },
  textWarning: {
    color: themeColor.warning,
  },
  textInfo: {
    color: themeColor.info,
  },
});

export const font = StyleSheet.create({
  thin: {
    fontFamily: 'IbmPlexThin',
  },
  light: {
    fontFamily: 'IbmPlexLight',
  },
  regular: {
    fontFamily: 'IbmPlexRegular',
  },
  w500: {
    fontFamily: 'IbmPlex500',
  },
  semiBold: {
    fontFamily: 'IbmPlexSemiBold',
  },
  bold: {
    fontFamily: 'IbmPlexBold',
  },
  thinItalic: {
    fontFamily: 'IbmPlexThinItalic',
  },
  lightItalic: {
    fontFamily: 'IbmPlexLightItalic',
  },
  italic: {
    fontFamily: 'IbmPlexItalic',
  },
  h1: {
    fontFamily: 'IbmPlexBold',
    fontSize: 32,
    color: themeColor.primary,
  },
  h2: {
    fontFamily: 'IbmPlexBold',
    fontSize: 18,
    color: themeColor.primary,
  },
  h3: {
    fontFamily: 'IbmPlexBold',
    fontSize: 16,
    color: themeColor.primary,
  },
  listItemTitle: {
    fontFamily: 'IbmPlexSemiBold',
    fontSize: 14,
    color: themeColor.text,
  },
  desc: {
    fontFamily: 'IbmPlexRegular',
    fontSize: 14,
    color: themeColor.neutral,
  },
});
