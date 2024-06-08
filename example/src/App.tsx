import { View, StyleSheet } from 'react-native';
import React from 'react';
import Section from '../../src/components/Section';
import { globalStyles } from '../../src/styles/globalStyles';
import Badge from '../../src/components/Badge';
import Row from '../../src/components/Row';

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Section styles={[globalStyles.container, { justifyContent: 'center' }]}>
        <Row justifyContent="space-around">
          <Badge>
            <View style={styles.avatar} />
          </Badge>
          <Badge count={12}>
            <View style={styles.avatar} />
          </Badge>
          <Badge count={112} overflowCount={100}>
            <View style={styles.avatar} />
          </Badge>
          <Badge dotColor="green">
            <View style={styles.avatar} />
          </Badge>
        </Row>
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
    backgroundColor: 'coral',
  },
});
