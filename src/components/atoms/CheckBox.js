import React from 'react';
import {StyleSheet} from 'react-native';
import {Checkbox} from 'react-native-ui-lib';

import {secondary} from '../../styles/colors';

const CheckBox = ({onValueChange, value, label}) => {
  return (
    <Checkbox
      label={label}
      value={value}
      containerStyle={styles.checkBoxContaner}
      color={secondary}
      borderRadius={0}
      onValueChange={() => onValueChange()}
    />
  );
};

const styles = StyleSheet.create({
  checkBoxContaner: {
    // marginTop: TOP_3,
  },
});

export default CheckBox;
