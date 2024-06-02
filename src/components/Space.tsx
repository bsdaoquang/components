import React from 'react';
import { View } from 'react-native';

type Props = {
  width?: number;
  height?: number;
};

const Space = (props: Props) => {
  const { width, height } = props;

  return <View style={{ width, height }} />;
};

export default Space;
