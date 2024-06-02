import React from 'react';
import { type StyleProp, Text, type TextStyle } from 'react-native';

interface Props {
  text: string;
  size?: number;
  color?: string;
  font?: string;
  styles?: StyleProp<TextStyle>;
  flex?: number;
  numberOfLine?: number;
}

const Label = (props: Props) => {
  const { text, size, flex, color, font, styles, numberOfLine } = props;

  return (
    <Text
      numberOfLines={numberOfLine}
      style={[
        {
          fontSize: size ?? 14,
          flex: flex ?? 0,
          fontFamily: font ?? '',
          lineHeight: size ? size + 4 : 19,
          color: color ?? '#212121',
        },
        styles,
      ]}
    >
      {text}
    </Text>
  );
};

export default Label;
