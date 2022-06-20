import {View, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {Icon} from '../../utils/icons';
import {primary} from '../../styles/colors';
import {widthToDp} from '../../styles/responsive';
import {placeholderTextSize} from '../../utils/typography';
import {Left_3, TOP_1} from '../../utils/spacing';

const TextField = ({
  iconName,
  placeholder,
  onBlur,
  onChangeText,
  secureTextEntry,
}) => {
  return (
    <View style={styles.textFieldRow}>
      {iconName && <Icon name={iconName} />}
      <TextInput
        style={styles.textField}
        onBlur={() => onBlur()}
        onChangeText={() => onChangeText()}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textFieldRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: TOP_1,
    borderBottomWidth: 1,
    borderColor: primary,
  },
  textField: {
    width: widthToDp('80%'),
    marginLeft: Left_3,
    fontSize: placeholderTextSize,
  },
});

export default TextField;
