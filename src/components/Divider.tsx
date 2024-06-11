import { StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';
import React, { type ReactNode } from 'react';
import Row from './Row';
import Text from './Text';
import Space from './Space';

type Props = {
  orientation?: 'center' | 'right' | 'left';
  children?: ReactNode | string;
  dashed?: boolean;
  orientationMargin?: number;
  styles?: StyleProp<ViewStyle>;
  type?: 'vertical' | 'horizontal';
  plain?: boolean;
};

const Divider = (props: Props) => {
  const {
    orientation,
    children,
    dashed,
    orientationMargin,
    styles,
    type,
    plain,
  } = props;

  return !type || type === 'horizontal' ? (
    <View style={{ marginVertical: 12 }}>
      {!children ? (
        <Row>
          <View
            style={[
              localstyles.divider,
              {
                borderStyle: dashed ? 'dashed' : 'solid',
                flex: 1,
              },
              styles,
            ]}
          />
        </Row>
      ) : (
        <Row>
          <View
            style={[
              localstyles.divider,
              {
                borderStyle: dashed ? 'dashed' : 'solid',
                flex:
                  orientation === 'right'
                    ? 9
                    : orientation && orientation !== 'center' && plain
                      ? 0
                      : 1,
              },
              styles,
            ]}
          />
          <Space width={orientationMargin ?? 12} />
          {typeof children === 'string' ? (
            <Text color="#676767" size={14} text={children} />
          ) : (
            children
          )}
          <Space width={orientationMargin ?? 12} />
          <View
            style={[
              localstyles.divider,
              {
                borderStyle: dashed ? 'dashed' : 'solid',
                flex:
                  orientation === 'left'
                    ? 9
                    : orientation && orientation !== 'center' && plain
                      ? 0
                      : 1,
              },
              styles,
            ]}
          />
        </Row>
      )}
    </View>
  ) : (
    <Row styles={{ height: '80%' }} justifyContent="center" alignItems="center">
      <Space width={12} />
      <View
        style={[
          {
            width: 1,
            height: '100%',
            backgroundColor: '#e0e0e0',
          },
          styles,
        ]}
      />
      <Space width={12} />
    </Row>
  );
};

export default Divider;

const localstyles = StyleSheet.create({
  divider: {
    height: 1,
    flex: 1,
    borderBottomWidth: 0.8,
    borderBottomColor: '#e0e0e0',
    borderStyle: 'solid',
  },
});
