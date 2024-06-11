import React from 'react';
import { View } from 'react-native';
import { Button } from '../../src/components';
import AntDesign from 'react-native-vector-icons/AntDesign';

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', padding: 20 }}>
      <Button
        title="Hello world!!!"
        iconPosition="right"
        onPress={() => {}}
        iconExtra
        icon={<AntDesign name="close" size={20} color={'#676767'} />}
      />
    </View>
  );
};

export default App;
