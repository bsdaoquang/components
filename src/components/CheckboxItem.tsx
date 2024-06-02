import CheckBox from '@react-native-community/checkbox';
import React, { useState, type ReactNode } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  type StyleProp,
  type TextStyle,
  type ViewStyle,
} from 'react-native';

interface CheckBoxModel {
  children?: CheckBoxModel[];
  value: string;
  label: string;
  icon?: ReactNode;
}

interface Props {
  item: CheckBoxModel;
  onSelect: (val: string) => void;
  selected: string[];
  expandedIcon?: ReactNode;
  unExpandedIcon?: ReactNode;
  checkedColor?: string;
  unCheckedColor?: string;
  textStyle?: StyleProp<TextStyle>;
  labelColor?: string;
  styles?: StyleProp<ViewStyle>;
}

const CheckboxItem = (props: Props) => {
  const {
    item,
    onSelect,
    selected,
    expandedIcon,
    unExpandedIcon,
    checkedColor,
    unCheckedColor,
    textStyle,
    styles,
    labelColor,
  } = props;
  const [collapsed, setCollapsed] = useState(false);

  const handleCheck = (item: CheckBoxModel) => {
    if (item.children && item.children.length > 0) {
      item.children.forEach((val) => handleCheck(val));
    } else {
      onSelect(item.value);
    }
  };

  const calcChildLength = (item: CheckBoxModel) => {
    let total = 0;
    if (item.children) {
      item.children.forEach((child) => {
        total += calcChildLength(child);
      });
    } else {
      total = +1;
    }
    return total;
  };

  const countSelectedItems = (item: CheckBoxModel) => {
    let total = 0;

    if (item.children) {
      item.children.forEach((val) => (total += countSelectedItems(val)));
    } else {
      total += selected.includes(item.value) ? 1 : 0;
    }

    return total;
  };

  const renderCheckbox = (item: CheckBoxModel) => {
    let count = 0;
    let totalChild = 0;

    if (item.children) {
      item.children.forEach((val) => {
        count += countSelectedItems(val);
        totalChild += calcChildLength(val);
      });
    } else {
      count += selected.includes(item.value) ? 1 : 0;
      totalChild = 1;
    }

    return (
      <CheckBox
        tintColors={{
          true: checkedColor ?? '#1abc9c',
          false: item.children
            ? count > 0 && count > 0 && count < totalChild
              ? checkedColor ?? '#1abc9c'
              : unCheckedColor ?? '#bdc3c7'
            : unCheckedColor ?? '#bdc3c7',
        }}
        onValueChange={() => handleCheck(item)}
        value={
          item.children
            ? count === totalChild
              ? true
              : false
            : selected.includes(item.value)
        }
      />
    );
  };

  return (
    <View key={item.value}>
      <View
        style={[
          { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
          styles,
        ]}
      >
        {item.children && item.children.length > 0 ? (
          <TouchableOpacity onPress={() => setCollapsed(!collapsed)}>
            {collapsed ? (
              expandedIcon ? (
                expandedIcon
              ) : (
                <></>
              )
            ) : unExpandedIcon ? (
              unExpandedIcon
            ) : (
              <></>
            )}
          </TouchableOpacity>
        ) : (
          <View style={{ width: 16 }} />
        )}
        <TouchableOpacity
          onPress={() => handleCheck(item)}
          style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}
        >
          {renderCheckbox(item)}
          <View style={{ flex: 1, flexDirection: 'row' }}>
            {item.icon && item.icon}
            <Text
              style={[
                {
                  color: labelColor ?? '#212121',
                  marginLeft: item.icon ? 8 : 0,
                },
                textStyle,
              ]}
            >
              {item.label}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {collapsed && (
        <View>
          {item.children &&
            item.children.length > 0 &&
            item.children.map((chil) => (
              <View style={{ marginLeft: 24 }} key={chil.value}>
                <CheckboxItem
                  item={chil}
                  onSelect={(val) => onSelect(val)}
                  selected={selected}
                  unCheckedColor={unCheckedColor}
                  expandedIcon={expandedIcon}
                  checkedColor={checkedColor}
                  unExpandedIcon={unExpandedIcon}
                  textStyle={textStyle}
                  styles={styles}
                  labelColor={labelColor}
                />
              </View>
            ))}
        </View>
      )}
    </View>
  );
};

export default CheckboxItem;
