import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import Section from '../../src/components/Section';
import Input from '../../src/components/Input';

const App = () => {
  const [email, setEmail] = useState('');

  console.log(email);

  return (
    <ScrollView
      style={{
        flex: 1,
        paddingVertical: 50,
      }}
    >
      <Section>
        <Input
          required
          label="Email"
          placeholder="Email"
          value={email}
          helpText="fagag"
          textAreal
          rows={3}
          radius={12}
          max={100}
          showCount
          clear
          onChange={(val) => setEmail(val)}
        />
        <Input
          label="Email"
          placeholder="Email"
          value={email}
          clear
          onChange={(val) => setEmail(val)}
        />
      </Section>
    </ScrollView>
  );
};

export default App;
