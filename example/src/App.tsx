import React, { useState } from 'react';
import { View } from 'react-native';
import Loading from '../../src/components/Loading';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Loading loading={isLoading} onCancel={() => setIsLoading(false)} />
    </View>
  );
};

export default App;
