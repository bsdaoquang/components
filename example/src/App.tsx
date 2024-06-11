import React from 'react';
import { View } from 'react-native';
import { Divider, Row, Text } from '../../src/components';

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', padding: 20 }}>
      <Row>
        <Text text="Text" />
        <Divider type="vertical" />
        <Text text="link" color="coral" />
        <Divider type="vertical" />
        <Text text="link" color="coral" />
      </Row>
      <Divider />
      <Divider>Or</Divider>
    </View>
  );
};

export default App;
