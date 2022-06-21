import {View, StyleSheet} from 'react-native';
import React from 'react';

import BoxInput from '../atoms/BoxInput';
import {calendar, Icon, location, userIcon} from '../../utils/icons';
import {HORIZONTAL_2, TOP_1, TOP_3} from '../../utils/spacing';
import TextField from '../atoms/TextField';
import {surface} from '../../styles/colors';
import {appStyles} from '../../styles';

const KundliCard = ({placeholder}) => {
  return (
    <View style={[styles.newKundliContainer, appStyles.shadow]}>
      <TextField placeholder={placeholder} iconName={userIcon} />
      <View style={styles.dateAndTimeRow}>
        <Icon name={calendar} />
        <BoxInput text={'20-Jun-2022'} />
        <BoxInput text={'02:35 PM'} />
      </View>
      <View style={styles.location}>
        <Icon name={location} />
        <BoxInput text={'Agra'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  newKundliContainer: {
    marginHorizontal: HORIZONTAL_2 * 2,
    backgroundColor: surface,
    marginTop: TOP_1,
    padding: TOP_1,
    paddingVertical: TOP_1 * 2,
  },
  dateAndTimeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: TOP_1 * 1.5,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: TOP_1 * 1.5,
  },
});

export default KundliCard;
