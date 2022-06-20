import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import React from 'react';

import {primary, white} from '../../styles/colors';
import {heightToDp, widthToDp} from '../../styles/responsive';
import {FONT_SIZE_BUTTON_TEXT, FONT_WEIGHT_BOLD} from '../../utils/typography';
import {appStyles} from '../../styles';
import {TOP_5} from '../../utils/spacing';

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={[styles.buttonContainer, appStyles.shadow]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: primary,
    width: widthToDp('80%'),
    alignItems: 'center',
    justifyContent: 'center',
    padding: heightToDp('1.8%'),
    borderRadius: widthToDp('0.7%'),
    marginTop: TOP_5,
    alignSelf: 'center',
  },
  buttonText: {
    textTransform: 'uppercase',
    color: white,
    fontWeight: FONT_WEIGHT_BOLD,
    fontSize: FONT_SIZE_BUTTON_TEXT,
  },
});

export default Button;
