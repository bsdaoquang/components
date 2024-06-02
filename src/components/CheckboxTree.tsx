import React, { type ReactNode } from 'react';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';
import CheckboxItem from './CheckboxItem';

interface CheckBoxModel {
  children?: CheckBoxModel[];
  value: string;
  label: string;
  icon?: ReactNode;
}

interface Props {
  data: CheckBoxModel[];
  onSelect: (vals: string[]) => void;
  selected: string[];
  expandedIcon?: ReactNode;
  unExpandedIcon?: ReactNode;
  checkedColor?: string;
  unCheckedColor?: string;
  textStyle?: StyleProp<TextStyle>;
  labelColor?: string;
  styles?: StyleProp<ViewStyle>;
}

const CheckboxTree = (props: Props) => {
  const {
    data,
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

  const items = [...selected];
  const handleSelectItem = (val: string) => {
    const index = items.findIndex((element) => element === val);

    if (index !== -1) {
      items.splice(index, 1);
    } else {
      items.push(val);
    }

    onSelect(items);
  };

  return (
    <>
      {data.map((item) => (
        <CheckboxItem
          item={item}
          key={item.value}
          onSelect={(val) => handleSelectItem(val)}
          selected={selected}
          unCheckedColor={unCheckedColor}
          expandedIcon={expandedIcon}
          checkedColor={checkedColor}
          unExpandedIcon={unExpandedIcon}
          textStyle={textStyle}
          styles={styles}
          labelColor={labelColor}
        />
      ))}
    </>
  );
};

export default CheckboxTree;
