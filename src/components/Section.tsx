import React, { type ReactNode } from 'react';
import { type StyleProp, View, type ViewStyle } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

interface Props {
  children: ReactNode;
  styles?: StyleProp<ViewStyle>;
  flex?: number;
}

const Section = (props: Props) => {
  const { children, styles, flex } = props;

  return (
    <View style={[globalStyles.section, { flex: flex ?? 0 }, styles]}>
      {children}
    </View>
  );
};

export default Section;
