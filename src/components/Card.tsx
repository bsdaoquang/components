import React, { type ReactNode } from 'react';
import {
  type StyleProp,
  TouchableOpacity,
  View,
  type ViewStyle,
} from 'react-native';
import { globalStyles } from '../styles/globalStyles';

interface Props {
  children: ReactNode;
  color?: string;
  onPress?: () => void;
  styles?: StyleProp<ViewStyle>;
  shadowed?: boolean;
}
const Card = (props: Props) => {
  const { children, color, onPress, styles, shadowed } = props;

  const localStyles: StyleProp<ViewStyle> = {
    paddingVertical: 12,
    marginBottom: 20,
    marginHorizontal: 16,
    paddingHorizontal: 16,
    backgroundColor: color ?? 'white',
    borderRadius: 4,
  };

  return onPress ? (
    <TouchableOpacity
      onPress={onPress}
      style={[
        localStyles,
        shadowed === false ? undefined : globalStyles.shadow,
        styles,
      ]}
    >
      {children}
    </TouchableOpacity>
  ) : (
    <View
      style={[
        localStyles,
        shadowed === false ? undefined : globalStyles.shadow,
        styles,
      ]}
    >
      {children}
    </View>
  );
};

export default Card;
