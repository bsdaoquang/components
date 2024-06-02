import React, { type ReactNode } from 'react';
import {
  TouchableOpacity,
  View,
  type StyleProp,
  type TextStyle,
  type ViewStyle,
} from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import Text from './Text';

interface Props {
  title?: string;
  icon?: ReactNode;
  outline?: boolean;
  color?: string;
  styles?: StyleProp<ViewStyle>;
  onPress: () => void;
  type?: 'primary' | 'text' | 'link' | 'dashed';
  textStyleProps?: StyleProp<TextStyle>;
  size?: 'large' | 'default' | 'small';
  onLongPress?: () => void;
  inline?: boolean;
  isShadow?: boolean;
  iconPosition?: 'left' | 'right';
  textLine?: number;
  iconExtra?: boolean;
}

const Button = (props: Props) => {
  const {
    title,
    icon,
    outline,
    color,
    styles,
    onPress,
    type,
    textStyleProps,
    size,
    onLongPress,
    inline,
    isShadow,
    iconPosition,
    textLine,
    iconExtra,
  } = props;

  const localstyles: StyleProp<ViewStyle> =
    type === 'text' || type === 'link'
      ? {}
      : {
          paddingVertical: size === 'large' ? 14 : size === 'small' ? 6 : 12,
          paddingHorizontal: size === 'large' ? 30 : size === 'small' ? 12 : 20,
          backgroundColor: outline
            ? 'white'
            : color
              ? color
              : type === 'primary'
                ? '#0d6efd'
                : 'white',
          borderWidth: 1,
          borderColor: outline
            ? color
              ? color
              : '#0d6efd'
            : type === 'primary'
              ? '#0d6efd'
              : color
                ? color
                : '#e0e0e0',
          borderStyle: type === 'dashed' ? 'dashed' : 'solid',
          borderRadius: 100,
          minHeight: size === 'small' ? 38 : 42,
        };

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onLongPress={onLongPress}
      style={[
        localstyles,
        globalStyles.row,
        globalStyles.center,
        isShadow !== false ? globalStyles.shadow : undefined,
        {
          marginBottom: inline ? 0 : 16,
        },
        styles,
      ]}
      onPress={onPress}
    >
      {icon && (iconPosition === 'left' || !iconPosition) && icon}
      {title && (
        <View
          style={{
            flex: iconExtra ? 1 : 0,
            marginLeft:
              icon && (!iconPosition || iconPosition === 'left') && !iconExtra
                ? 12
                : 0,
            marginRight:
              icon && iconPosition === 'right' && !iconExtra ? 12 : 0,
          }}
        >
          <Text
            numberOfLine={textLine ?? 1}
            textAlign="center"
            text={title}
            size={size === 'small' ? 12 : 14}
            weight={!type || type === 'text' || type === 'link' ? '400' : '600'}
            color={
              outline
                ? color
                  ? color
                  : '#0d6efd'
                : type === 'primary'
                  ? 'white'
                  : !type || type === 'text' || type === 'link'
                    ? type === 'link'
                      ? '#0d6efd'
                      : color && color !== '#ffffff' && color !== 'white'
                        ? 'white'
                        : '#212121'
                    : '#212121'
            }
            styles={[{}, textStyleProps]}
          />
        </View>
      )}
      {icon && iconPosition === 'right' && icon}
    </TouchableOpacity>
  );
};

export default Button;
