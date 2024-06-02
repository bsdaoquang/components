import React from 'react';
import { View } from 'react-native';
import Button from '../../src/components/Button';
import Section from '../../src/components/Section';
import Text from '../../src/components/Text';

const App = () => {
  return (
    <View style={{ flex: 1, paddingVertical: 20 }}>
      <Section>
        <Button
          title="Button Default"
          iconPosition="right"
          onPress={() => console.log('dada')}
        />
        <Button
          icon={<Text text="a" />}
          iconExtra
          title="Button Default"
          onPress={() => console.log('dada')}
        />
      </Section>
    </View>
  );
};

export default App;
