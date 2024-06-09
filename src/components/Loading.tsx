import React from 'react';
import { ActivityIndicator, Modal, View } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { Dimensions } from 'react-native';
import Text from './Text';
import Space from './Space';
import Button from './Button';
import { colors } from '../colors/colors';
import Section from './Section';

interface Props {
  loading: boolean;
  mess?: string;
  onCancel?: () => void;
  color?: string;
  opacityColor?: string;
  cancelText?: string;
}

const Loading = (props: Props) => {
  const { loading, mess, onCancel, opacityColor, color, cancelText } = props;
  return (
    <Modal
      visible={loading}
      transparent
      animationType="fade"
      statusBarTranslucent
    >
      <View
        style={[
          globalStyles.container,
          {
            backgroundColor: opacityColor ?? 'rgba(0,0,0,0.4)',
            height: Dimensions.get('window').height,
          },
        ]}
      >
        <Section flex={1} styles={[globalStyles.center]}>
          <ActivityIndicator color={color ?? 'white'} size={32} />
          <Space height={12} />
          <Text text={mess ?? 'Loading...'} flex={0} color={color ?? 'white'} />
        </Section>
        {onCancel && (
          <Section>
            <Space height={12} />
            <Button
              type="link"
              title={cancelText ?? 'Cancel'}
              onPress={onCancel}
              textStyleProps={{ color: color ?? colors.white }}
            />
          </Section>
        )}
      </View>
    </Modal>
  );
};

export default Loading;
