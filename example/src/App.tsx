import { View } from 'react-native';
import React from 'react';
import Card from '../../src/components/Card';
import Text from '../../src/components/Text';

const App = () => {
  return (
    <View>
      <Card>
        <Text text="Hello world!!!" size={32} />
      </Card>
    </View>
  );
};

export default App;
