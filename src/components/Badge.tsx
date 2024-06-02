import React, { type ReactNode } from 'react';
import { StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';
import { colors } from '../colors/colors';
import Label from './Label';
import Row from './Row';

type Props = {
  children: ReactNode;
  renderDot?: ReactNode;
  dotColor?: string;
  dotStylesProps?: StyleProp<ViewStyle>;
  count?: number;
  show?: boolean;
  overflowCount?: number;
};

const Badge = (props: Props) => {
  const {
    children,
    renderDot,
    dotColor,
    dotStylesProps,
    count,
    show,
    overflowCount,
  } = props;
  const dotProps = (
    <View
      style={[
        {
          position: 'absolute',
          top: -5,
          right: -5,
        },
        dotStylesProps,
      ]}
    >
      {renderDot ? (
        renderDot
      ) : (
        <View
          style={[
            localStyles.dot,
            {
              backgroundColor: dotColor ?? colors.red500,
            },
            dotStylesProps,
          ]}
        />
      )}
    </View>
  );

  const renderCount = (
    <View style={[localStyles.count]}>
      <Label
        size={12}
        color="white"
        text={`${
          count
            ? overflowCount
              ? count >= overflowCount
                ? `${overflowCount - 1}+`
                : count
              : count
            : ''
        }`}
      />
    </View>
  );

  return (
    <Row>
      <View>
        {children}

        {count ? (
          count > 0 ? (
            renderCount
          ) : null
        ) : show === false || count === 0 ? (
          <></>
        ) : (
          dotProps
        )}
      </View>
    </Row>
  );
};

export default Badge;

const localStyles = StyleSheet.create({
  dot: {
    width: 14,
    height: 14,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
  },
  count: {
    backgroundColor: colors.red500,
    position: 'absolute',
    top: -8,
    // left: '70%',
    right: -14,
    paddingVertical: 2,
    paddingHorizontal: 7,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.white,
  },
});
