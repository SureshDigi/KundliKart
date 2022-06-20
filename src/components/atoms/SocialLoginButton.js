import {TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {heightToDp, widthToDp} from '../../styles/responsive';
import {HORIZONTAL_2, TOP_1} from '../../utils/spacing';
import {
  emailColor,
  facebookColor,
  googleColor,
  white,
} from '../../styles/colors';
import {FONT_SIZE_BUTTON_TEXT, FONT_WEIGHT_BOLD} from '../../utils/typography';

const SocialLoginButton = ({
  name,
  facebook,
  google,
  email,
  imgSrc,
  onPress,
}) => {
  const renderBackgroundColor = () => {
    if (facebook) {
      return facebookColor;
    } else if (google) {
      return googleColor;
    } else if (email) {
      return emailColor;
    }
  };
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={[styles.container, {backgroundColor: renderBackgroundColor()}]}>
      <Image resizeMode="contain" style={styles.socialIcons} source={imgSrc} />
      <Text style={styles.buttonText}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: widthToDp('80%'),
    padding: heightToDp('1%'),
    backgroundColor: '#345d95',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: TOP_1,
    alignSelf: 'center',
    borderRadius: widthToDp('40%'),
  },
  buttonText: {
    color: white,
    fontSize: FONT_SIZE_BUTTON_TEXT,
    fontWeight: FONT_WEIGHT_BOLD,
    marginLeft: HORIZONTAL_2,
  },
  socialIcons: {
    width: widthToDp('5%'),
    height: heightToDp('5%'),
  },
});

export default SocialLoginButton;
