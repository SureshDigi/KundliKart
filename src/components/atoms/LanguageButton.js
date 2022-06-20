import React from 'react';
import {StyleSheet} from 'react-native';
import {RadioButton, RadioGroup} from 'react-native-ui-lib';

import {secondary, white} from '../../styles/colors';
import {heightToDp, widthToDp} from '../../styles/responsive';
import {HORIZONTAL_2, TOP_3} from '../../utils/spacing';
import useLanguage from '../../hooks/useLanguage';
import {appStyles} from '../../styles';

const DATA = [
  {value: 'en', label: 'English', id: 0},
  {value: 'hi', label: 'हिन्दी', id: 1},
];

const LanguageButton = () => {
  // eslint-disable-next-line no-unused-vars
  const [currentLanguage, changeLanguage] = useLanguage('en');
  return (
    <RadioGroup
      style={[styles.buttonsRow]}
      initialValue={'en'}
      onValueChange={value => changeLanguage(value)}>
      {DATA.map(data => (
        <RadioButton
          key={data.id}
          containerStyle={[styles.radioButtonContainer, appStyles.shadow]}
          value={data.value}
          label={data.label}
          color={secondary}
          contentOnLeft
        />
      ))}
    </RadioGroup>
  );
};

const styles = StyleSheet.create({
  buttonsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: TOP_3,
  },
  radioButtonContainer: {
    backgroundColor: white,
    width: widthToDp('46%'),
    marginHorizontal: HORIZONTAL_2,
    padding: heightToDp('1.7%'),
    borderRadius: widthToDp('0.7%'),
    justifyContent: 'space-between',
  },
});

export default LanguageButton;
