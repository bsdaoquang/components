import {
  View,
  TouchableOpacity,
  type StyleProp,
  type ViewStyle,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import React, { useState, type ReactNode } from 'react';
import type { MenuItem } from '../models/MenuProps';
import { globalStyles } from '../styles/globalStyles';
import Text from './Text';
import Row from './Row';
import { colors } from '../colors/colors';

export type DropdownProps = {
  children: ReactNode;
  items: MenuItem[];
  onMenuClick: (key: string | number) => void;
  renderDropdown?: ReactNode;
  loading?: boolean;
  disable?: boolean;
  width?: number;
  dropdownStyleProps?: StyleProp<ViewStyle>;
  placement?:
    | 'bottomLeft'
    | 'bottomRight'
    | 'topLeft'
    | 'topRight'
    | 'bottom'
    | 'top';
};

const Dropdown = (props: DropdownProps) => {
  const {
    children,
    items,
    onMenuClick,
    renderDropdown,
    loading,
    disable,
    placement,
    width,
    dropdownStyleProps,
  } = props;

  const [isVisible, setIsVisible] = useState(false);
  const [buttonHeight, setButtonHeight] = useState<number>();

  const WIDTH = Dimensions.get('window').width * 0.7;

  const renderDropdownItem = (item: MenuItem) => (
    <Row
      styles={[
        {
          paddingVertical: 6,
        },
      ]}
      onPress={
        item.disable
          ? undefined
          : () => {
              onMenuClick(item.key);
              setIsVisible(false);
            }
      }
      key={item.key}
    >
      {item.icon && item.icon}

      <View style={{ flex: 1, paddingLeft: item.icon ? 8 : 0 }}>
        <Text
          color={
            item.disable
              ? colors.gray
              : item.danger
                ? colors.danger
                : colors.black
          }
          text={item.label ?? ''}
        />
      </View>
    </Row>
  );

  return (
    <View style={{ position: 'relative' }}>
      <TouchableOpacity
        onLayout={(event) => {
          setButtonHeight(event.nativeEvent.layout.height);
        }}
        disabled={disable}
        activeOpacity={0.6}
        onPress={() => setIsVisible(!isVisible)}
      >
        {children}
      </TouchableOpacity>
      {isVisible && (
        <View
          style={{
            position: 'absolute',
            bottom:
              (placement === 'topLeft' || placement === 'topRight') &&
              buttonHeight
                ? buttonHeight + 4
                : 'auto',
            top:
              (!placement ||
                placement === 'bottom' ||
                placement === 'bottomLeft' ||
                placement === 'bottomRight') &&
              buttonHeight
                ? buttonHeight + 4
                : 'auto',
            zIndex: 1,
            right:
              placement === 'bottomRight'
                ? 0
                : placement === 'bottom' || placement === 'top'
                  ? -WIDTH / 3
                  : 'auto',
            left:
              !placement || placement === 'bottomLeft'
                ? 0
                : placement === 'bottom' || placement === 'top'
                  ? -WIDTH / 3
                  : 'auto',
          }}
        >
          <View
            style={[
              globalStyles.shadow,
              {
                backgroundColor: 'white',
                paddingHorizontal: 16,
                paddingVertical: 8,
                borderRadius: 8,
                width: width ?? WIDTH,
              },
              dropdownStyleProps,
            ]}
          >
            {loading ? (
              <ActivityIndicator size={22} color={colors.gray} />
            ) : (
              renderDropdown ?? (
                <>{items.map((item) => renderDropdownItem(item))}</>
              )
            )}
          </View>
        </View>
      )}
    </View>
  );
};

export default Dropdown;
