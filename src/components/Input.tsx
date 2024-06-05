import React, { type ReactNode, useState } from 'react';
import {
  type KeyboardType,
  type StyleProp,
  TextInput,
  TouchableOpacity,
  View,
  type ViewStyle,
} from 'react-native';
import Text from './Text';
import Row from './Row';
import { globalStyles } from '../styles/globalStyles';
import { colors } from '../colors/colors';
import Space from './Space';
import AntDesign from 'react-native-vector-icons/AntDesign';
import IonIcons from 'react-native-vector-icons/Ionicons';
import type { TextStyle } from 'react-native';

interface Props {
  placeholder?: string;
  value: string;
  onChange: (val: string) => void;
  prefix?: ReactNode;
  affix?: ReactNode;
  clear?: boolean;
  password?: boolean;
  passwordShowHideButton?: {
    show: ReactNode;
    hide: ReactNode;
  };
  inputStyles?: StyleProp<TextStyle>;
  keyboardType?: KeyboardType;
  iconClear?: ReactNode;
  placeholderColor?: string;
  autoComplete?:
    | 'additional-name'
    | 'address-line1'
    | 'address-line2'
    | 'birthdate-day'
    | 'birthdate-full'
    | 'birthdate-month'
    | 'birthdate-year'
    | 'cc-csc'
    | 'cc-exp'
    | 'cc-exp-day'
    | 'cc-exp-month'
    | 'cc-exp-year'
    | 'cc-number'
    | 'cc-name'
    | 'cc-given-name'
    | 'cc-middle-name'
    | 'cc-family-name'
    | 'cc-type'
    | 'country'
    | 'current-password'
    | 'email'
    | 'family-name'
    | 'gender'
    | 'given-name'
    | 'honorific-prefix'
    | 'honorific-suffix'
    | 'name'
    | 'name-family'
    | 'name-given'
    | 'name-middle'
    | 'name-middle-initial'
    | 'name-prefix'
    | 'name-suffix'
    | 'new-password'
    | 'nickname'
    | 'one-time-code'
    | 'organization'
    | 'organization-title'
    | 'password'
    | 'password-new'
    | 'postal-address'
    | 'postal-address-country'
    | 'postal-address-extended'
    | 'postal-address-extended-postal-code'
    | 'postal-address-locality'
    | 'postal-address-region'
    | 'postal-code'
    | 'street-address'
    | 'sms-otp'
    | 'tel'
    | 'tel-country-code'
    | 'tel-national'
    | 'tel-device'
    | 'url'
    | 'username'
    | 'username-new'
    | 'off'
    | undefined;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  label?: string;
  inline?: boolean;
  textAreal?: boolean;
  rows?: number;
  styles?: StyleProp<ViewStyle>;
  required?: boolean;
  helpText?: string;
  disable?: boolean;
  color?: string;
  labelStyleProps?: StyleProp<TextStyle>;
  bordered?: boolean;
  radius?: number;
  minHeight?: number;
  max?: number;
  showCount?: boolean;
}

const Input = (props: Props) => {
  const {
    placeholder,
    keyboardType,
    password,
    value,
    onChange,
    prefix,
    affix,
    color,
    clear,
    autoComplete,
    autoCapitalize,
    label,
    inline,
    textAreal,
    rows,
    required,
    helpText,
    disable,
    iconClear,
    passwordShowHideButton,
    labelStyleProps,
    bordered,
    radius,
    styles,
    inputStyles,
    placeholderColor,
    max,
    showCount,
    minHeight,
  } = props;

  const [isShowPass, setIsShowPass] = useState(password);
  const [isFocused, setIsFocused] = useState(false);
  const [isError, setIsError] = useState(false);
  const [text, setText] = useState(value);
  const contentHeight = 200;

  return (
    <View style={{ marginBottom: inline ? 0 : 16 }}>
      {label && (
        <Row justifyContent="flex-start" alignItems="flex-start">
          {required && <Text text="* " color={colors.danger} />}
          <Text
            text={label}
            styles={[{ marginBottom: 8, fontWeight: '500' }, labelStyleProps]}
          />
        </Row>
      )}
      <Row
        styles={[
          globalStyles.inputContainer,
          globalStyles.center,
          {
            borderWidth: bordered !== false ? 1 : 0,
            backgroundColor: disable
              ? '#e9e9e9'
              : color
                ? color
                : color !== 'none'
                  ? 'white'
                  : undefined,
            borderColor: isError
              ? colors.danger
              : isFocused
                ? colors.primary
                : '#e0e0e0',
            alignItems: textAreal ? 'flex-start' : 'center',
            borderRadius: radius ?? 100,
            minHeight: minHeight ?? 48,
          },
          styles,
        ]}
      >
        {prefix && prefix}
        <TextInput
          editable={!disable}
          maxLength={max}
          style={[
            globalStyles.input,
            {
              paddingLeft: prefix ? 12 : 0,
              paddingRight: clear || affix ? 12 : 0,
              textAlignVertical: textAreal ? 'top' : 'center',
              minHeight:
                contentHeight > 200 ? contentHeight : textAreal ? 120 : 'auto',
            },
            inputStyles,
          ]}
          autoCapitalize={autoCapitalize ?? 'none'}
          autoComplete={autoComplete}
          keyboardType={keyboardType}
          placeholderTextColor={placeholderColor ?? colors.gray400}
          placeholder={placeholder}
          value={text}
          onChangeText={(val) => {
            setText(val);
            onChange(val);
          }}
          secureTextEntry={isShowPass}
          onFocus={() => setIsFocused(true)}
          onEndEditing={() => {
            required && value.length === 0
              ? setIsError(true)
              : setIsError(false);
            setIsFocused(false);
          }}
          multiline={textAreal}
          numberOfLines={rows}
        />

        {clear && value && value.length > 0 && (
          <TouchableOpacity
            onPress={() => {
              setText('');
              onChange('');
            }}
          >
            {iconClear ?? (
              <AntDesign name="close" size={18} color={colors.gray} />
            )}
          </TouchableOpacity>
        )}
        {affix && clear && <Space width={8} />}

        {affix && affix}
        {password && (
          <TouchableOpacity onPress={() => setIsShowPass(!isShowPass)}>
            {!isShowPass ? (
              passwordShowHideButton ? (
                passwordShowHideButton.hide ?? (
                  <IonIcons
                    name="eye-off-outline"
                    size={22}
                    color={colors.gray600}
                  />
                )
              ) : (
                <IonIcons
                  name="eye-off-outline"
                  size={22}
                  color={colors.gray600}
                />
              )
            ) : passwordShowHideButton ? (
              passwordShowHideButton.show ?? (
                <IonIcons name="eye-outline" size={22} color={colors.gray600} />
              )
            ) : (
              <IonIcons name="eye-outline" size={22} color={colors.gray600} />
            )}
          </TouchableOpacity>
        )}
      </Row>
      <Row justifyContent="space-between">
        <View style={{ flex: 1 }}>
          {required && isError && helpText && (
            <Text
              styles={{ marginTop: 8 }}
              text={helpText}
              color={colors.danger}
              size={12}
            />
          )}
        </View>
        {showCount && (
          <Text
            size={12}
            text={`${text.length}/${max ? max : ''}`}
            color={colors.gray600}
            styles={{ marginTop: 6 }}
          />
        )}
      </Row>
    </View>
  );
};

export default Input;
