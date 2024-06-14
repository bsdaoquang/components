import React from 'react';
import { View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Dropdown, Row, Section, Text } from '../../src/components';
import type { MenuItem } from '../../src/models/MenuProps';

const App = () => {
  const items: MenuItem[] = [
    {
      key: '1',
      label: 'item 1',
      icon: <AntDesign name="home" size={18} />,
    },
    {
      key: '2',
      label: 'item 2',
      icon: <AntDesign name="home" size={18} />,
    },
    {
      key: '3',
      label: 'item danger',
      danger: true,
      icon: <AntDesign name="home" size={18} />,
    },
    {
      key: '4',
      label: 'disable item',
      disable: true,
      icon: <AntDesign name="home" size={18} />,
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: 'white', padding: 20 }}>
      <Section>
        <Row justifyContent="flex-end">
          <Dropdown
            disable
            items={items}
            onMenuClick={(key) => console.log(key)}
            placement="bottomRight"
          >
            <Text text={'click me'} />
          </Dropdown>
        </Row>
        <Row justifyContent="center">
          <Dropdown
            loading
            placement="bottom"
            items={items}
            onMenuClick={(key) => console.log(key)}
          >
            <Text text={'click me'} />
          </Dropdown>
        </Row>
        <Text text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic velit dolores repellendus, adipisci necessitatibus error impedit repudiandae doloremque quibusdam magnam delectus. Nobis nostrum quos quas tempora odit velit beatae veritatis!" />
        <Dropdown items={items} onMenuClick={(key) => console.log(key)}>
          <Text text={'click me'} />
        </Dropdown>
        <Text text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic velit dolores repellendus, adipisci necessitatibus error impedit repudiandae doloremque quibusdam magnam delectus. Nobis nostrum quos quas tempora odit velit beatae veritatis!" />

        <Dropdown
          items={items}
          onMenuClick={(key) => console.log(key)}
          renderDropdown={
            <View>
              <Text text="fafafafa" />
            </View>
          }
        >
          <Text text="fafa" />
        </Dropdown>
      </Section>
    </View>
  );
};

export default App;
