import { View } from 'react-native';
import React, { type ReactNode } from 'react';

type Props = {
  flex?: number;
  children: ReactNode;
};

const Col = (props: Props) => {
  const { flex, children } = props;

  return <View style={{ flex: flex ?? 1 }}>{children}</View>;
};

export default Col;
