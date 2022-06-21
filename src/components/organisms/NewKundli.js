import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';

import TextField from '../atoms/TextField';
import {
  Icon,
  userIcon,
  calendar,
  location,
  gender,
  plus,
} from '../../utils/icons';
import {HORIZONTAL_2, HORIZONTAL_5, TOP_1} from '../../utils/spacing';
import BoxInput from '../atoms/BoxInput';
import CustomSwitchTab from '../atoms/CustomSwitchTab';
import CheckBox from '../atoms/CheckBox';
import useToggle from '../../hooks/useToggle';
import {primary} from '../../styles/colors';
import Button from '../atoms/Button';

const NewKundli = () => {
  const [value, toggleValue] = useToggle(false);
  const [activeSwitch, setActiveSwitch] = useState(0);
  return (
    <View style={styles.newKundliContainer}>
      <TextField placeholder={'Enter Name'} iconName={userIcon} />
      <View style={styles.dateAndTimeRow}>
        <Icon name={calendar} />
        <BoxInput text={'20-Jun-2022'} />
        <BoxInput text={'02:35 PM'} />
      </View>
      <View style={styles.location}>
        <Icon name={location} />
        <BoxInput text={'Agra'} />
      </View>
      <View style={styles.gender}>
        <Icon name={gender} />
        <CustomSwitchTab
          onPress={val => setActiveSwitch(val)}
          switch1={'Male'}
          switch2={'Female'}
          activeTab={activeSwitch}
        />
      </View>
      <View style={styles.checkBoxRow}>
        <View style={styles.checkBox}>
          <CheckBox
            value={value}
            label={'Save'}
            onValueChange={() => toggleValue()}
          />
        </View>
        <View style={styles.settings}>
          <Icon name={plus} />
          <Text>Settings</Text>
        </View>
      </View>
      <Button title={'Get Horoscope'} />
    </View>
  );
};

const styles = StyleSheet.create({
  newKundliContainer: {
    marginHorizontal: HORIZONTAL_2 * 2,
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
  gender: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -TOP_1,
  },
  checkBoxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: TOP_1,
  },
  checkBox: {
    marginHorizontal: HORIZONTAL_5 * 1.8,
  },
  settings: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: primary,
  },
});

export default NewKundli;
