//Change Language Screen

import {View, Image, StyleSheet, Text} from 'react-native';
import React from 'react';

import {headingColor, primary} from '../../styles/colors';
import {LANGUAGE} from '../../utils/images';
import {heightToDp, widthToDp} from '../../styles/responsive';
import {CHOOSE_LANGUAGE} from '../../utils/strings';
import {FONT_WEIGHT_BOLD, heading1} from '../../utils/typography';
import {TOP_3, TOP_5} from '../../utils/spacing';
import LanguageButton from '../../components/atoms/LanguageButton';
import Button from '../../components/atoms/Button';
import Container from '../../layouts/Container';

const ChangeLanguage = ({navigation}) => {
  return (
    <Container>
      <View style={styles.section}>
        <Image
          resizeMode="contain"
          style={styles.languageLogo}
          source={LANGUAGE}
        />
        <Text style={styles.chooseLanguageText}>{CHOOSE_LANGUAGE}</Text>
        <LanguageButton />
      </View>
      <View style={styles.section}>
        <Button
          onPress={() => navigation.navigate('Authentication')}
          title={'Next'}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primary,
  },
  section: {
    alignItems: 'center',
    flex: 1,
  },
  languageLogo: {
    width: widthToDp('35%'),
    height: heightToDp('20%'),
    marginTop: TOP_5,
  },
  chooseLanguageText: {
    fontSize: heading1,
    fontWeight: FONT_WEIGHT_BOLD,
    color: headingColor,
    marginTop: TOP_3,
  },
});

export default ChangeLanguage;
