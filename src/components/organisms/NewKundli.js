import {View, StyleSheet} from 'react-native';
import React from 'react';

import TextField from '../atoms/TextField';
import {userIcon} from '../../utils/icons';
import {HORIZONTAL_2} from '../../utils/spacing';

const NewKundli = () => {
  return (
    <View style={styles.newKundliContainer}>
      <TextField placeholder={'Enter Name'} iconName={userIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  newKundliContainer: {
    marginHorizontal: HORIZONTAL_2 * 2,
  },
});

export default NewKundli;
