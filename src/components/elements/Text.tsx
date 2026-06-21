import type { FC, ReactNode } from 'react';
import type { StyleProp, TextStyle } from 'react-native';
import { font } from '@/src/styles/font';
import { themeColor } from '@/src/styles/theme';
import { Text as RNText } from 'react-native';

type ITextProps = {
  type?: keyof typeof font;
  color?: keyof typeof themeColor;
  size?: number;
  align?: TextStyle['textAlign'];
  style?: StyleProp<TextStyle>;
  maxLines?: number;
  children: ReactNode;
};

export const CText: FC<ITextProps> = ({
  type,
  color,
  size,
  align,
  maxLines,
  style,
  children,
}) => {
  const baseStyle: {
    fontFamily: string;
    fontSize?: number;
    color?: string;
  } = font[type ?? 'regular'];
  const fontSize = size ?? baseStyle.fontSize ?? 16; //* (Platform.OS === 'ios' ? 1.1 : 1);

  return (
    <RNText
      style={[
        baseStyle,
        {
          color: color ? themeColor[color] : (baseStyle.color ?? themeColor.text),
          fontSize,
          textAlign: align,
          lineHeight: fontSize * 1.2,
        },
        style,
      ]}
      numberOfLines={maxLines}
      ellipsizeMode="tail"
    >
      {children}
    </RNText>
  );
};
