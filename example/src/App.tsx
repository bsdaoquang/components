import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Button from '../../src/components/Button';
import Section from '../../src/components/Section';
import Text from '../../src/components/Text';
import { globalStyles } from '../../src/styles/globalStyles';
import Loading from '../../src/components/Loading';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [isLoading]);

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Section styles={[globalStyles.container, { justifyContent: 'center' }]}>
        <Text size={18} text="React Native UI Component Library" />
        <Text size={32} weight={'bold'} text="Loading" />
        <Text size={18} text="@bsdaoquang/rncomponent" />
      </Section>
      <Section flex={1}>
        <Button title="show" onPress={() => setIsLoading(true)} />
      </Section>
      <Loading loading={isLoading} onCancel={() => setIsLoading(false)} />
    </View>
  );
};

export default App;
