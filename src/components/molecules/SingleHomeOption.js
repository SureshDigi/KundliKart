import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {widthToDp} from '../../styles/responsive';
import HomeOptionIcon from '../atoms/HomeOptionIcon';
import {borderColor, textColor} from '../../styles/colors';
import {FONT_WEIGHT_BOLD, heading3} from '../../utils/typography';
import {TOP_1} from '../../utils/spacing';

const SingleHomeOption = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(item.onPress)}
      style={styles.optionContainer}>
      <HomeOptionIcon imgSrc={item.icon} />
      <Text style={styles.optionName}>{item.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  optionContainer: {
    width: widthToDp('35%'),
    height: widthToDp('30%'),
    borderWidth: 0.5,
    borderColor: borderColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionName: {
    fontSize: heading3,
    marginTop: TOP_1,
    textTransform: 'capitalize',
    fontWeight: FONT_WEIGHT_BOLD,
    color: textColor,
  },
});

export default SingleHomeOption;
