import * as ReactNative from 'react-native';
import React from 'react';
import { type StyleProp, type TextStyle } from 'react-native';

export interface TextProps {
  text: string;
  color?: string;
  size?: number;
  font?: string;
  weight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | 100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 800
    | 900
    | 'ultralight'
    | 'thin'
    | 'light'
    | 'medium'
    | 'regular'
    | 'semibold'
    | 'condensedBold'
    | 'condensed'
    | 'heavy'
    | 'black'
    | undefined;
  lineHeight?: number;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;
  numberOfLine?: number;
  styles?: StyleProp<TextStyle>;
  transform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | undefined;
  textDecorationLine?:
    | 'none'
    | 'underline'
    | 'line-through'
    | 'underline line-through'
    | undefined;
  textDecorationStyle?: 'solid' | 'double' | 'dotted' | 'dashed' | undefined;
  textDecorationColor?: ReactNative.ColorValue | undefined;
  textShadowColor?: ReactNative.ColorValue | undefined;
  textShadowOffset?: { width: number; height: number } | undefined;
  textShadowRadius?: number | undefined;
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | undefined;
  userSelect?: 'auto' | 'none' | 'text' | 'contain' | 'all' | undefined;
  letterSpacing?: number | undefined;
  flex?: number;
}

const Text = (props: TextProps) => {
  const {
    text,
    color,
    size,
    font,
    weight,
    lineHeight,
    numberOfLine,
    styles,
    textAlign,
    flex,
    transform,
    letterSpacing,
    textDecorationColor,
    textDecorationLine,
    textDecorationStyle,
    textShadowOffset,
    textShadowRadius,
    textShadowColor,
    userSelect,
  } = props;

  return (
    <ReactNative.View>
      <ReactNative.Text
        numberOfLines={numberOfLine}
        style={[
          localStyles.text,
          {
            color: color ?? '#212121',
            fontSize: size ?? 14,
            fontFamily: font ?? undefined,
            fontWeight: weight ?? '400',
            textAlign: textAlign ?? 'left',
            lineHeight: lineHeight,
            textTransform: transform,
            letterSpacing,
            textDecorationColor,
            textDecorationLine,
            textDecorationStyle,
            textShadowOffset,
            textShadowRadius,
            textShadowColor,
            userSelect,
            flex: flex ?? 0,
          },
          styles,
        ]}
      >
        {text}
      </ReactNative.Text>
    </ReactNative.View>
  );
};

export default Text;

const localStyles = ReactNative.StyleSheet.create({
  text: {
    fontSize: 14,
    color: '#212121',
  },
});
