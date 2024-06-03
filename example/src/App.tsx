import React from 'react';
import { View } from 'react-native';
import Button from '../../src/components/Button';
import Section from '../../src/components/Section';
import AntDesign from 'react-native-vector-icons/AntDesign';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}
    >
      <Section>
        <Button
          disable
          size="large"
          title="Button Default"
          iconPosition="right"
          onPress={() => console.log('dada')}
        />
        <Button
          icon={<AntDesign name="home" size={20} color={'coral'} />}
          iconExtra
          title="Button Default"
          onPress={() => console.log('dada')}
        />
      </Section>
    </View>
  );
};

export default App;
