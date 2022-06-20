import React from 'react';
import {StyleSheet} from 'react-native';
import {Checkbox} from 'react-native-ui-lib';

import {secondary} from '../../styles/colors';
import {TOP_3} from '../../utils/spacing';

const CheckBox = ({onValueChange, value}) => {
  return (
    <Checkbox
      label="Show Password"
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
    marginTop: TOP_3,
  },
});

export default CheckBox;
