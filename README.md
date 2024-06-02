# @bsdaoquang/rncomponent

### React Native UI Components Library

---

## Features

- Library UI component designed for React Native & Expo applications.
- A set of high-quality React Native components out of the box
- Written in TypeScript with predictable static types.
- Whole package of design resources and development tools.
- Powerful theme customization based on StyleSheet.

## Environment Support

- React Native
- Expo

## Installation

### React Native

        `#npm
      npm install @bsdaoquang/rncomponent react-native-svg

        #yarn
        yarn add @bsdaoquang/rncomponent react-native-svg`

**iOS**
cd ios
pod install

### Expo

      #npm
      npx expo install @bsdaoquang/rncomponent react-native-svg

## Usage

      import { View, Text } from 'react-native';
      import React from 'react';
      import {Card} from '@bsdaoquang/rncomponent';
      const App = () => {
            return (
                  <View>
                        <Card>

                              <Text>Hello world</Text>
                        </Card>
                  </View>
            );
            };

      export default App;

## Links

- [Home page](https://rncomponent.com)
- [Card](https://rncomponent.com/components/card)
- [Text](https://rncomponent.com/components/text)
