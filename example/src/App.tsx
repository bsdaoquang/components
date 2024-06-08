import { View, StyleSheet } from 'react-native';
import React from 'react';
import Section from '../../src/components/Section';
import { globalStyles } from '../../src/styles/globalStyles';
import Badge from '../../src/components/Badge';

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Section styles={[globalStyles.container, { justifyContent: 'center' }]}>
        <Badge>
          <View style={styles.avatar} />
        </Badge>
      </Section>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: '#9f9f9f',
  },
});
