import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import {HORIZONTAL_2, TOP_1} from '../../utils/spacing';
import {primary} from '../../styles/colors';

const BoxInput = ({text}) => {
  return (
    <View style={styles.dateInput}>
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dateInput: {
    borderWidth: 1,
    borderColor: primary,
    padding: TOP_1 * 1.5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: HORIZONTAL_2,
  },
});

export default BoxInput;
